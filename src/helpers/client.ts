import axios, { AxiosInstance, AxiosError } from 'axios';
import FormData from 'form-data';
import * as fs from 'fs';
import * as path from 'path';
import { FactPulseAuthError, FactPulsePollingTimeout, FactPulseValidationError, ValidationErrorDetail } from './exceptions';

// =============================================================================
// Credentials interfaces - pour une configuration simplifiée
// =============================================================================

/** Credentials Chorus Pro pour le mode Zero-Trust. */
export interface ChorusProCredentials {
  pisteClientId: string;
  pisteClientSecret: string;
  chorusProLogin: string;
  chorusProPassword: string;
  sandbox?: boolean;
}

/** Credentials AFNOR PDP pour le mode Zero-Trust. */
export interface AFNORCredentials {
  clientId: string;
  clientSecret: string;
  flowServiceUrl: string;
}

export interface FactPulseClientConfig {
  email: string;
  password: string;
  apiUrl?: string;
  clientUid?: string;
  chorusCredentials?: ChorusProCredentials;
  afnorCredentials?: AFNORCredentials;
  pollingInterval?: number;
  pollingTimeout?: number;
  maxRetries?: number;
}

// =============================================================================
// Helpers pour les types anyOf - évite la verbosité des wrappers générés
// =============================================================================

type MontantValue = string | number | null | undefined;

/** Convertit une valeur en string de montant pour l'API. */
export function montant(value: MontantValue): string {
  if (value === null || value === undefined) return '0.00';
  if (typeof value === 'number') return value.toFixed(2);
  if (typeof value === 'string') return value;
  return '0.00';
}

/** Crée un objet MontantTotal simplifié. */
export function montantTotal(
  ht: MontantValue, tva: MontantValue, ttc: MontantValue, aPayer: MontantValue,
  options?: { remiseTtc?: MontantValue; motifRemise?: string; acompte?: MontantValue }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    montantHtTotal: montant(ht), montantTva: montant(tva),
    montantTtcTotal: montant(ttc), montantAPayer: montant(aPayer),
  };
  if (options?.remiseTtc !== undefined) result.montantRemiseGlobaleTtc = montant(options.remiseTtc);
  if (options?.motifRemise !== undefined) result.motifRemiseGlobaleTtc = options.motifRemise;
  if (options?.acompte !== undefined) result.acompte = montant(options.acompte);
  return result;
}

/** Crée une ligne de poste simplifiée. */
export function ligneDePoste(
  numero: number, denomination: string, quantite: MontantValue, montantUnitaireHt: MontantValue, montantLigneHt: MontantValue,
  options?: { tauxTva?: MontantValue; categorieTva?: string; unite?: string; reference?: string;
    montantTvaLigne?: MontantValue; montantRemiseHt?: MontantValue; codeRaisonReduction?: string; raisonReduction?: string;
    motifExoneration?: string; dateDebutPeriode?: string; dateFinPeriode?: string;
    description?: string; referenceAcheteur?: string; referenceVendeur?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    numero, denomination, quantite: montant(quantite), montantUnitaireHt: montant(montantUnitaireHt),
    montantTotalLigneHt: montant(montantLigneHt), tauxTva: montant(options?.tauxTva ?? '20.00'),
    categorieTva: options?.categorieTva ?? 'S', unite: options?.unite ?? 'C62',
  };
  if (options?.reference) result.reference = options.reference;
  if (options?.montantTvaLigne !== undefined) result.montantTvaLigne = montant(options.montantTvaLigne);
  if (options?.montantRemiseHt !== undefined) result.montantRemiseHt = montant(options.montantRemiseHt);
  if (options?.codeRaisonReduction) result.codeRaisonReduction = options.codeRaisonReduction;
  if (options?.raisonReduction) result.raisonReduction = options.raisonReduction;
  if (options?.motifExoneration) result.motifExoneration = options.motifExoneration;
  if (options?.dateDebutPeriode) result.dateDebutPeriode = options.dateDebutPeriode;
  if (options?.dateFinPeriode) result.dateFinPeriode = options.dateFinPeriode;
  if (options?.description) result.description = options.description;
  if (options?.referenceAcheteur) result.referenceArticleAcheteur = options.referenceAcheteur;
  if (options?.referenceVendeur) result.referenceArticleVendeur = options.referenceVendeur;
  return result;
}

/** Crée une ligne de TVA simplifiée. */
export function ligneDeTva(
  taux: MontantValue, baseHt: MontantValue, montantTva: MontantValue, categorie = 'S', motifExoneration?: string
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    tauxTva: montant(taux), montantBaseHt: montant(baseHt), montantTva: montant(montantTva), categorieTva: categorie,
  };
  if (motifExoneration) result.motifExoneration = motifExoneration;
  return result;
}

// =============================================================================
// Client principal
// =============================================================================

const DEFAULT_API_URL = 'https://factpulse.fr';
const DEFAULT_POLLING_INTERVAL = 2000;
const DEFAULT_POLLING_TIMEOUT = 120000;
const DEFAULT_MAX_RETRIES = 1;

interface InternalConfig {
  email: string; password: string; apiUrl: string; clientUid: string;
  chorusCredentials?: ChorusProCredentials; afnorCredentials?: AFNORCredentials;
  pollingInterval: number; pollingTimeout: number; maxRetries: number;
}

export class FactPulseClient {
  private config: InternalConfig;
  private httpClient: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiresAt: number | null = null;

  public readonly chorusCredentials?: ChorusProCredentials;
  public readonly afnorCredentials?: AFNORCredentials;

  constructor(config: FactPulseClientConfig) {
    this.config = {
      email: config.email, password: config.password,
      apiUrl: (config.apiUrl || DEFAULT_API_URL).replace(/\/$/, ''),
      clientUid: config.clientUid || '',
      chorusCredentials: config.chorusCredentials,
      afnorCredentials: config.afnorCredentials,
      pollingInterval: config.pollingInterval || DEFAULT_POLLING_INTERVAL,
      pollingTimeout: config.pollingTimeout || DEFAULT_POLLING_TIMEOUT,
      maxRetries: config.maxRetries ?? DEFAULT_MAX_RETRIES,
    };
    this.chorusCredentials = config.chorusCredentials;
    this.afnorCredentials = config.afnorCredentials;
    this.httpClient = axios.create({ timeout: 30000, headers: { 'Content-Type': 'application/json' } });
  }

  getChorusCredentialsForApi(): Record<string, unknown> | undefined {
    if (!this.chorusCredentials) return undefined;
    return {
      piste_client_id: this.chorusCredentials.pisteClientId,
      piste_client_secret: this.chorusCredentials.pisteClientSecret,
      chorus_pro_login: this.chorusCredentials.chorusProLogin,
      chorus_pro_password: this.chorusCredentials.chorusProPassword,
      sandbox: this.chorusCredentials.sandbox ?? true,
    };
  }

  getAfnorCredentialsForApi(): Record<string, unknown> | undefined {
    if (!this.afnorCredentials) return undefined;
    return {
      client_id: this.afnorCredentials.clientId,
      client_secret: this.afnorCredentials.clientSecret,
      flow_service_url: this.afnorCredentials.flowServiceUrl,
    };
  }

  // Alias plus courts
  getChorusProCredentials(): Record<string, unknown> | undefined { return this.getChorusCredentialsForApi(); }
  getAfnorCredentials(): Record<string, unknown> | undefined { return this.getAfnorCredentialsForApi(); }

  private async obtainToken(): Promise<{ access: string; refresh: string }> {
    const payload: Record<string, string> = { username: this.config.email, password: this.config.password };
    if (this.config.clientUid) payload.client_uid = this.config.clientUid;
    try {
      const response = await this.httpClient.post(`${this.config.apiUrl}/api/token/`, payload);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ detail?: string }>;
      throw new FactPulseAuthError(`Impossible d'obtenir le token JWT: ${axiosError.response?.data?.detail || axiosError.message}`);
    }
  }

  async ensureAuthenticated(forceRefresh: boolean = false): Promise<void> {
    const now = Date.now();
    if (forceRefresh || !this.accessToken || (this.tokenExpiresAt && now >= this.tokenExpiresAt)) {
      const tokens = await this.obtainToken();
      this.accessToken = tokens.access; this.refreshToken = tokens.refresh;
      this.tokenExpiresAt = now + 28 * 60 * 1000;
    }
  }

  resetAuth(): void { this.accessToken = this.refreshToken = null; this.tokenExpiresAt = null; }

  async pollTask(taskId: string, timeout?: number, interval?: number): Promise<Record<string, unknown>> {
    const timeoutMs = timeout ?? this.config.pollingTimeout;
    const intervalMs = interval ?? this.config.pollingInterval;
    const startTime = Date.now();
    let currentInterval = intervalMs;

    while (true) {
      if (Date.now() - startTime > timeoutMs) throw new FactPulsePollingTimeout(taskId, timeoutMs);
      await this.ensureAuthenticated();
      try {
        const response = await this.httpClient.get(`${this.config.apiUrl}/api/facturation/v1/traitement/taches/${taskId}/statut`, {
          headers: { Authorization: `Bearer ${this.accessToken}` },
        });
        const { statut, resultat } = response.data;
        if (statut === 'SUCCESS') return (resultat as Record<string, unknown>) || {};
        if (statut === 'FAILURE') {
          const result = resultat as Record<string, unknown> | undefined;
          const errors: ValidationErrorDetail[] = Array.isArray(result?.erreurs) ? result.erreurs.filter((e): e is ValidationErrorDetail => typeof e === 'object' && e !== null) : [];
          throw new FactPulseValidationError(`La tâche ${taskId} a échoué: ${result?.message_erreur || 'Erreur inconnue'}`, errors);
        }
        await new Promise(resolve => setTimeout(resolve, currentInterval));
        currentInterval = Math.min(currentInterval * 1.5, 10000);
      } catch (error) {
        if (error instanceof FactPulseValidationError || error instanceof FactPulsePollingTimeout) throw error;
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) { this.resetAuth(); continue; }
        throw new FactPulseValidationError(`Erreur API: ${axiosError.message}`);
      }
    }
  }

  async genererFacturx(factureData: Record<string, unknown> | string, pdfPath: string, profil = 'EN16931', formatSortie = 'pdf', sync = true, timeout?: number): Promise<Buffer | string> {
    const jsonData = typeof factureData === 'string' ? factureData : JSON.stringify(factureData);
    let taskId: string | null = null;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      await this.ensureAuthenticated();
      const form = new FormData();
      form.append('donnees_facture', jsonData);
      form.append('profil', profil);
      form.append('format_sortie', formatSortie);
      form.append('source_pdf', fs.createReadStream(pdfPath), { filename: path.basename(pdfPath), contentType: 'application/pdf' });
      try {
        const response = await this.httpClient.post(`${this.config.apiUrl}/api/facturation/v1/traitement/generer-facture`, form, {
          headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` }, timeout: 60000,
        });
        taskId = response.data.id_tache; break;
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401 && attempt < this.config.maxRetries) { this.resetAuth(); continue; }
        throw new FactPulseValidationError(`Erreur API: ${axiosError.message}`);
      }
    }
    if (!taskId) throw new FactPulseValidationError("Pas d'ID de tâche");
    if (!sync) return taskId;
    const result = await this.pollTask(taskId, timeout);
    if (result.contenu_b64) return Buffer.from(result.contenu_b64 as string, 'base64');
    throw new FactPulseValidationError('Pas de contenu');
  }

  static formatMontant(m: unknown): string {
    if (m === null || m === undefined) return '0.00';
    if (typeof m === 'number') return m.toFixed(2);
    if (typeof m === 'string') return m;
    return '0.00';
  }
}
