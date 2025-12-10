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

/** Credentials AFNOR PDP pour le mode Zero-Trust. L'API FactPulse utilise ces credentials pour s'authentifier auprès de la PDP AFNOR. */
export interface AFNORCredentials {
  flowServiceUrl: string;
  tokenUrl: string;
  clientId: string;
  clientSecret: string;
  directoryServiceUrl?: string;
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

/** Crée une ligne de poste (aligné sur LigneDePoste de models.py).
 * Pour le taux TVA: soit tauxTva (code ex: "TVA20") soit tauxTvaManuel (valeur ex: 20.00) */
export function ligneDePoste(
  numero: number, denomination: string, quantite: MontantValue, montantUnitaireHt: MontantValue, montantTotalLigneHt: MontantValue,
  options?: { tauxTva?: string; tauxTvaManuel?: MontantValue; categorieTva?: string; unite?: string; reference?: string;
    montantRemiseHt?: MontantValue; codeRaisonReduction?: string; raisonReduction?: string;
    dateDebutPeriode?: string; dateFinPeriode?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    numero, denomination, quantite: montant(quantite), montantUnitaireHt: montant(montantUnitaireHt),
    montantTotalLigneHt: montant(montantTotalLigneHt),
    categorieTva: options?.categorieTva ?? 'S', unite: options?.unite ?? 'FORFAIT',
  };
  // Soit tauxTva (code) soit tauxTvaManuel (valeur)
  if (options?.tauxTva) result.tauxTva = options.tauxTva;
  else result.tauxTvaManuel = montant(options?.tauxTvaManuel ?? '20.00');
  if (options?.reference) result.reference = options.reference;
  if (options?.montantRemiseHt !== undefined) result.montantRemiseHt = montant(options.montantRemiseHt);
  if (options?.codeRaisonReduction) result.codeRaisonReduction = options.codeRaisonReduction;
  if (options?.raisonReduction) result.raisonReduction = options.raisonReduction;
  if (options?.dateDebutPeriode) result.dateDebutPeriode = options.dateDebutPeriode;
  if (options?.dateFinPeriode) result.dateFinPeriode = options.dateFinPeriode;
  return result;
}

/** Crée une ligne de TVA (aligné sur LigneDeTVA de models.py).
 * Pour le taux: soit taux (code ex: "TVA20") soit tauxManuel (valeur ex: 20.00) */
export function ligneDeTva(
  montantBaseHt: MontantValue, montantTva: MontantValue,
  options?: { taux?: string; tauxManuel?: MontantValue; categorie?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    montantBaseHt: montant(montantBaseHt), montantTva: montant(montantTva), categorie: options?.categorie ?? 'S',
  };
  // Soit taux (code) soit tauxManuel (valeur)
  if (options?.taux) result.taux = options.taux;
  else result.tauxManuel = montant(options?.tauxManuel ?? '20.00');
  return result;
}

/** Crée une adresse postale pour l'API FactPulse. */
export function adressePostale(
  ligne1: string, codePostal: string, ville: string,
  options?: { pays?: string; ligne2?: string; ligne3?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = { ligneUn: ligne1, codePostal, nomVille: ville, paysCodeIso: options?.pays ?? 'FR' };
  if (options?.ligne2) result.ligneDeux = options.ligne2;
  if (options?.ligne3) result.ligneTrois = options.ligne3;
  return result;
}

/** Crée une adresse électronique pour l'API FactPulse. schemeId: "0009"=SIREN, "0225"=SIRET */
export function adresseElectronique(identifiant: string, schemeId = '0009'): Record<string, unknown> {
  return { identifiant, schemeId };
}

/** Calcule le numéro TVA intracommunautaire français depuis un SIREN. */
function calculerTvaIntra(siren: string): string | null {
  if (siren.length !== 9 || !/^\d+$/.test(siren)) return null;
  const cle = (12 + 3 * (parseInt(siren, 10) % 97)) % 97;
  return `FR${cle.toString().padStart(2, '0')}${siren}`;
}

/** Crée un fournisseur (émetteur) avec auto-calcul SIREN, TVA intracommunautaire et adresses. */
export function fournisseur(
  nom: string, siret: string, adresseLigne1: string, codePostal: string, ville: string,
  options?: { idFournisseur?: number; siren?: string; numeroTvaIntra?: string; iban?: string; pays?: string; adresseLigne2?: string; codeService?: number; codeCoordonnesBancaires?: number }
): Record<string, unknown> {
  const opts = options ?? {};
  const siren = opts.siren ?? (siret.length === 14 ? siret.slice(0, 9) : undefined);
  const numeroTvaIntra = opts.numeroTvaIntra ?? (siren ? calculerTvaIntra(siren) : null);
  const result: Record<string, unknown> = {
    nom, idFournisseur: opts.idFournisseur ?? 0, siret,
    adresseElectronique: adresseElectronique(siret, '0225'),
    adressePostale: adressePostale(adresseLigne1, codePostal, ville, { pays: opts.pays, ligne2: opts.adresseLigne2 }),
  };
  if (siren) result.siren = siren;
  if (numeroTvaIntra) result.numeroTvaIntra = numeroTvaIntra;
  if (opts.iban) result.iban = opts.iban;
  if (opts.codeService) result.idServiceFournisseur = opts.codeService;
  if (opts.codeCoordonnesBancaires) result.codeCoordonnesBancairesFournisseur = opts.codeCoordonnesBancaires;
  return result;
}

/** Crée un destinataire (client) avec auto-calcul SIREN et adresses. */
export function destinataire(
  nom: string, siret: string, adresseLigne1: string, codePostal: string, ville: string,
  options?: { siren?: string; pays?: string; adresseLigne2?: string; codeServiceExecutant?: string }
): Record<string, unknown> {
  const opts = options ?? {};
  const siren = opts.siren ?? (siret.length === 14 ? siret.slice(0, 9) : undefined);
  const result: Record<string, unknown> = {
    nom, siret,
    adresseElectronique: adresseElectronique(siret, '0225'),
    adressePostale: adressePostale(adresseLigne1, codePostal, ville, { pays: opts.pays, ligne2: opts.adresseLigne2 }),
  };
  if (siren) result.siren = siren;
  if (opts.codeServiceExecutant) result.codeServiceExecutant = opts.codeServiceExecutant;
  return result;
}

/**
 * Crée un bénéficiaire (factor) pour l'affacturage.
 *
 * Le bénéficiaire (BG-10 / PayeeTradeParty) est utilisé lorsque le paiement
 * doit être effectué à un tiers différent du fournisseur, typiquement un
 * factor (société d'affacturage).
 *
 * Pour les factures affacturées, il faut aussi:
 * - Utiliser un type de document affacturé (393, 396, 501, 502, 472, 473)
 * - Ajouter une note ACC avec la mention de subrogation
 * - L'IBAN du bénéficiaire sera utilisé pour le paiement
 *
 * @param nom Raison sociale du factor (BT-59)
 * @param options Options: siret (BT-60), siren (BT-61), iban, bic
 * @returns Dict prêt à être utilisé dans une facture affacturée
 *
 * @example
 * const factor = beneficiaire('FACTOR SAS', {
 *   siret: '30000000700033',
 *   iban: 'FR76 3000 4000 0500 0012 3456 789',
 * });
 */
export function beneficiaire(
  nom: string,
  options?: { siret?: string; siren?: string; iban?: string; bic?: string }
): Record<string, unknown> {
  const opts = options ?? {};
  // Auto-calcul SIREN depuis SIRET
  const siren = opts.siren ?? (opts.siret && opts.siret.length === 14 ? opts.siret.slice(0, 9) : undefined);

  const result: Record<string, unknown> = { nom };
  if (opts.siret) result.siret = opts.siret;
  if (siren) result.siren = siren;
  if (opts.iban) result.iban = opts.iban;
  if (opts.bic) result.bic = opts.bic;
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
        const response = await this.httpClient.get(`${this.config.apiUrl}/api/v1/traitement/taches/${taskId}/statut`, {
          headers: { Authorization: `Bearer ${this.accessToken}` },
        });
        const { statut, resultat } = response.data;
        if (statut === 'SUCCESS') return (resultat as Record<string, unknown>) || {};
        if (statut === 'FAILURE') {
          // Format AFNOR: errorMessage, details
          const result = resultat as Record<string, unknown> | undefined;
          const errors: ValidationErrorDetail[] = Array.isArray(result?.details) ? result.details.filter((e): e is ValidationErrorDetail => typeof e === 'object' && e !== null) : [];
          throw new FactPulseValidationError(`La tâche ${taskId} a échoué: ${result?.errorMessage || 'Erreur inconnue'}`, errors);
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
        const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/traitement/generer-facture`, form, {
          headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` }, timeout: 60000,
        });
        taskId = response.data.id_tache; break;
      } catch (error) {
        const axiosError = error as AxiosError<{ detail?: unknown; errorMessage?: string }>;
        if (axiosError.response?.status === 401 && attempt < this.config.maxRetries) { this.resetAuth(); continue; }

        // Extraire les détails d'erreur du corps de la réponse
        const responseData = axiosError.response?.data;
        let errorMsg = `Erreur API (${axiosError.response?.status || 'unknown'}): ${axiosError.message}`;
        const errors: ValidationErrorDetail[] = [];

        if (responseData) {
          // Format FastAPI/Pydantic: {"detail": [{"loc": [...], "msg": "...", "type": "..."}]}
          if (Array.isArray(responseData.detail)) {
            errorMsg = 'Erreur de validation';
            for (const err of responseData.detail) {
              if (typeof err === 'object' && err !== null) {
                const loc = (err as { loc?: unknown[] }).loc || [];
                errors.push({
                  level: 'ERROR',
                  item: loc.map(String).join(' -> '),
                  reason: (err as { msg?: string }).msg || String(err),
                  source: 'validation',
                  code: (err as { type?: string }).type,
                });
              }
            }
          } else if (typeof responseData.detail === 'string') {
            errorMsg = responseData.detail;
          } else if (responseData.errorMessage) {
            errorMsg = responseData.errorMessage;
          }
        }

        console.error(`Erreur API ${axiosError.response?.status}:`, responseData);
        throw new FactPulseValidationError(errorMsg, errors);
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

  // =========================================================================
  // AFNOR - Authentication et helpers internes
  // =========================================================================

  /**
   * Recupere les credentials AFNOR (mode stored ou zero-trust).
   * Mode zero-trust: Retourne les afnorCredentials fournis au constructeur.
   * Mode stored: Recupere les credentials via GET /api/v1/afnor/credentials.
   */
  private async getAfnorCredentialsInternal(): Promise<AFNORCredentials> {
    // Mode zero-trust : credentials fournis au constructeur
    if (this.afnorCredentials) {
      return this.afnorCredentials;
    }

    // Mode stored : recuperer les credentials via l'API
    await this.ensureAuthenticated();

    try {
      const response = await this.httpClient.get(`${this.config.apiUrl}/api/v1/afnor/credentials`, {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      });

      const creds = response.data;
      return {
        flowServiceUrl: creds.flow_service_url,
        tokenUrl: creds.token_url,
        clientId: creds.client_id,
        clientSecret: creds.client_secret,
        directoryServiceUrl: creds.directory_service_url,
      };
    } catch (error) {
      const axiosError = error as AxiosError<{ detail?: { error?: string; message?: string } }>;
      if (axiosError.response?.status === 400) {
        const detail = axiosError.response.data?.detail;
        if (typeof detail === 'object' && detail?.error === 'NO_CLIENT_UID') {
          throw new FactPulseAuthError(
            "Aucun client_uid dans le JWT. Pour utiliser les endpoints AFNOR, soit:\n" +
            "1. Generez un token avec un client_uid (mode stored)\n" +
            "2. Fournissez AFNORCredentials au constructeur du client (mode zero-trust)"
          );
        }
      }
      throw new FactPulseAuthError(`Echec recuperation credentials AFNOR: ${axiosError.message}`);
    }
  }

  /**
   * Obtient le token OAuth2 AFNOR et l'URL de la PDP.
   * Cette methode:
   * 1. Recupere les credentials AFNOR (mode stored ou zero-trust)
   * 2. Fait l'OAuth AFNOR pour obtenir un token
   * 3. Retourne le token et l'URL de la PDP
   */
  private async getAfnorTokenAndUrl(): Promise<{ token: string; pdpBaseUrl: string }> {
    // Etape 1: Obtenir les credentials AFNOR
    const credentials = await this.getAfnorCredentialsInternal();

    // Etape 2: Faire l'OAuth AFNOR via le proxy FactPulse
    const oauthData = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
    });

    try {
      const response = await this.httpClient.post(
        `${this.config.apiUrl}/api/v1/afnor/oauth/token`,
        oauthData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-PDP-Token-URL': credentials.tokenUrl,
          },
        }
      );

      const tokenData = response.data;
      if (!tokenData.access_token) {
        throw new FactPulseAuthError('Reponse OAuth2 AFNOR invalide: access_token manquant');
      }

      return {
        token: tokenData.access_token,
        pdpBaseUrl: credentials.flowServiceUrl,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new FactPulseAuthError(`Echec OAuth2 AFNOR: ${axiosError.message}`);
    }
  }

  /**
   * Effectue une requete vers l'API AFNOR avec gestion d'auth et d'erreurs.
   * IMPORTANT: Cette methode utilise le token OAuth AFNOR, PAS le JWT FactPulse!
   */
  private async makeAfnorRequest<T = unknown>(
    method: 'GET' | 'POST',
    endpoint: string,
    options?: { data?: unknown; files?: FormData; params?: Record<string, string> }
  ): Promise<T> {
    // Obtenir le token AFNOR et l'URL de la PDP
    const { token: afnorToken, pdpBaseUrl } = await this.getAfnorTokenAndUrl();

    const url = `${this.config.apiUrl}/api/v1/afnor${endpoint}`;

    // TOUJOURS utiliser le token AFNOR + header X-PDP-Base-URL
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${afnorToken}`,
      'X-PDP-Base-URL': pdpBaseUrl,
    };

    try {
      let response;
      if (options?.files) {
        response = await this.httpClient.request({
          method,
          url,
          data: options.files,
          headers: { ...options.files.getHeaders(), ...headers },
          params: options?.params,
          timeout: 60000,
        });
      } else {
        response = await this.httpClient.request({
          method,
          url,
          data: options?.data,
          headers: { ...headers, 'Content-Type': 'application/json' },
          params: options?.params,
          timeout: 30000,
        });
      }
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ errorMessage?: string; detail?: string }>;
      const errorMsg = axiosError.response?.data?.errorMessage ||
                       axiosError.response?.data?.detail ||
                       axiosError.message;
      throw new FactPulseValidationError(`Erreur AFNOR: ${errorMsg}`);
    }
  }

  // ==================== AFNOR Directory ====================

  async rechercherSiretAfnor(siret: string): Promise<Record<string, unknown>> {
    return this.makeAfnorRequest('GET', `/directory/siret/${siret}`);
  }

  async rechercherSirenAfnor(siren: string): Promise<Record<string, unknown>> {
    return this.makeAfnorRequest('GET', `/directory/siren/${siren}`);
  }

  async listerCodesRoutageAfnor(siren: string): Promise<unknown[]> {
    return this.makeAfnorRequest('GET', `/directory/siren/${siren}/routing-codes`);
  }

  // ==================== AFNOR Flow ====================

  /**
   * Soumet une facture a une PDP via l'API AFNOR.
   * L'authentification utilise le token OAuth AFNOR (obtenu automatiquement),
   * soit via les credentials stockes (mode stored), soit via les afnorCredentials
   * fournis au constructeur (mode zero-trust).
   *
   * @param pdfBuffer Buffer du PDF Factur-X a soumettre
   * @param flowName Nom du flux (ex: "Facture FAC-2025-001")
   * @param options Options: trackingId, flowSyntax (CII/UBL), flowProfile
   */
  async soumettreFactureAfnor(
    pdfBuffer: Buffer,
    flowName: string,
    options: { trackingId?: string; flowSyntax?: string; flowProfile?: string } = {}
  ): Promise<Record<string, unknown>> {
    const { trackingId, flowSyntax = 'CII', flowProfile = 'EN16931' } = options;

    // Calculer SHA-256
    const crypto = require('crypto');
    const sha256 = crypto.createHash('sha256').update(pdfBuffer).digest('hex');

    // Preparer flowInfo
    const flowInfo: Record<string, unknown> = { name: flowName, flowSyntax, flowProfile, sha256 };
    if (trackingId) flowInfo.trackingId = trackingId;

    const form = new FormData();
    form.append('file', pdfBuffer, { filename: 'facture.pdf', contentType: 'application/pdf' });
    form.append('flowInfo', JSON.stringify(flowInfo), { contentType: 'application/json' });

    return this.makeAfnorRequest('POST', '/flow/v1/flows', { files: form });
  }

  async rechercherFluxAfnor(criteria: { trackingId?: string; status?: string; offset?: number; limit?: number } = {}): Promise<Record<string, unknown>> {
    const searchBody: Record<string, unknown> = {
      offset: criteria.offset ?? 0,
      limit: criteria.limit ?? 25,
      where: {},
    };
    if (criteria.trackingId) (searchBody.where as Record<string, unknown>).trackingId = criteria.trackingId;
    if (criteria.status) (searchBody.where as Record<string, unknown>).status = criteria.status;

    return this.makeAfnorRequest('POST', '/flow/v1/flows/search', { data: searchBody });
  }

  async telechargerFluxAfnor(flowId: string): Promise<Buffer> {
    // Pour le telechargement, on doit gerer le type de reponse differemment
    const { token: afnorToken, pdpBaseUrl } = await this.getAfnorTokenAndUrl();

    const url = `${this.config.apiUrl}/api/v1/afnor/flow/v1/flows/${flowId}`;
    const response = await this.httpClient.get(url, {
      headers: {
        'Authorization': `Bearer ${afnorToken}`,
        'X-PDP-Base-URL': pdpBaseUrl,
      },
      responseType: 'arraybuffer',
    });
    return Buffer.from(response.data);
  }

  /**
   * Récupère les métadonnées JSON d'un flux entrant (facture fournisseur).
   * Télécharge un flux entrant depuis la PDP AFNOR et extrait les métadonnées
   * de la facture vers un format JSON unifié. Supporte Factur-X, CII et UBL.
   *
   * Note: Cet endpoint utilise l'authentification JWT FactPulse (pas OAuth AFNOR).
   * Le serveur FactPulse se charge d'appeler la PDP avec les credentials stockés.
   *
   * @param flowId Identifiant du flux (UUID)
   * @param includeDocument Si true, inclut le document original encodé en base64
   * @returns Métadonnées de la facture (fournisseur, montants, dates, etc.)
   *
   * @example
   * const facture = await client.obtenirFactureEntranteAfnor("550e8400-...");
   * console.log(`Fournisseur: ${facture.fournisseur.nom}`);
   * console.log(`Montant TTC: ${facture.montant_ttc} ${facture.devise}`);
   */
  async obtenirFactureEntranteAfnor(
    flowId: string,
    includeDocument: boolean = false
  ): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();

    const url = `${this.config.apiUrl}/api/v1/afnor/flux-entrants/${flowId}`;
    const params: Record<string, string> = {};
    if (includeDocument) {
      params.include_document = 'true';
    }

    try {
      const response = await this.httpClient.get(url, {
        headers: { 'Authorization': `Bearer ${this.accessToken}` },
        params: Object.keys(params).length > 0 ? params : undefined,
        timeout: 60000,
      });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ detail?: string }>;
      throw new FactPulseValidationError(
        `Erreur flux entrant: ${axiosError.response?.data?.detail || axiosError.message}`
      );
    }
  }

  async healthcheckAfnor(): Promise<Record<string, unknown>> {
    return this.makeAfnorRequest('GET', '/flow/v1/healthcheck');
  }

  // ==================== Chorus Pro ====================

  async rechercherStructureChorus(criteria: Record<string, unknown>): Promise<unknown[]> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/chorus-pro/structures/rechercher`, criteria, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  async consulterStructureChorus(idStructureCpp: number): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/chorus-pro/structures/consulter`, { id_structure_cpp: idStructureCpp }, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  /**
   * Liste les services d'une structure Chorus Pro.
   * @param idStructureCpp ID Chorus Pro de la structure
   * @returns Objet avec listeServices, total, codeRetour, libelle
   */
  async listerServicesStructureChorus(idStructureCpp: number): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.get(`${this.config.apiUrl}/api/v1/chorus-pro/structures/${idStructureCpp}/services`, {
      headers: { Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  async obtenirIdChorusDepuisSiret(siret: string): Promise<number | null> {
    const results = await this.rechercherStructureChorus({ identifiant_structure: siret, type_identifiant: 'SIRET' }) as Record<string, unknown>[];
    if (results.length > 0 && results[0].id_structure_cpp) return results[0].id_structure_cpp as number;
    return null;
  }

  async soumettreFactureChorus(factureData: Record<string, unknown>): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/chorus/factures/soumettre`, factureData, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  async consulterFactureChorus(identifiantFactureCpp: number): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/chorus/factures/consulter`, { identifiant_facture_cpp: identifiantFactureCpp }, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  // ==================== Validation ====================

  async validerPdfFacturx(pdfBuffer: Buffer, profil = 'EN16931'): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('fichier_pdf', pdfBuffer, { filename: 'facture.pdf', contentType: 'application/pdf' });
    form.append('profil', profil);
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/traitement/valider-pdf-facturx`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  async validerXmlFacturx(xmlContent: string, profil = 'EN16931'): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('fichier_xml', Buffer.from(xmlContent, 'utf-8'), { filename: 'facture.xml', contentType: 'application/xml' });
    form.append('profil', profil);
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/traitement/valider-xml`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  async validerSignaturePdf(pdfBuffer: Buffer): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('fichier_pdf', pdfBuffer, { filename: 'document.pdf', contentType: 'application/pdf' });
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/traitement/valider-signature-pdf`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  // ==================== Signature ====================

  /**
   * Signe un PDF avec le certificat configuré côté serveur (via client_uid du JWT).
   * Le certificat doit être préalablement configuré dans Django Admin.
   */
  async signerPdf(
    pdfBuffer: Buffer,
    options: { raison?: string; localisation?: string; contact?: string; usePadesLt?: boolean; useTimestamp?: boolean } = {}
  ): Promise<Buffer> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('fichier_pdf', pdfBuffer, { filename: 'document.pdf', contentType: 'application/pdf' });
    if (options.raison) form.append('raison', options.raison);
    if (options.localisation) form.append('localisation', options.localisation);
    if (options.contact) form.append('contact', options.contact);
    if (options.usePadesLt !== undefined) form.append('use_pades_lt', String(options.usePadesLt));
    if (options.useTimestamp !== undefined) form.append('use_timestamp', String(options.useTimestamp));
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/traitement/signer-pdf`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    // L'API retourne du JSON avec pdf_signe_base64
    const data = response.data as { pdf_signe_base64?: string };
    if (data.pdf_signe_base64) {
      return Buffer.from(data.pdf_signe_base64, 'base64');
    }
    throw new Error('Réponse de signature invalide');
  }

  /**
   * Génère un certificat de test (NON PRODUCTION).
   * Le certificat doit ensuite être configuré dans Django Admin.
   */
  async genererCertificatTest(
    options: { cn?: string; organisation?: string; email?: string; dureeJours?: number; tailleClé?: number } = {}
  ): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/traitement/generer-certificat-test`, {
      cn: options.cn || 'Test Organisation',
      organisation: options.organisation || 'Test Organisation',
      email: options.email || 'test@example.com',
      duree_jours: options.dureeJours || 365,
      taille_cle: options.tailleClé || 2048,
    }, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  // ==================== Workflow complet ====================

  /**
   * Workflow complet : génération + validation + signature + soumission AFNOR.
   * Note: La signature utilise le certificat configuré côté serveur (via client_uid du JWT).
   * @param factureData Données de la facture
   * @param pdfPath Chemin vers le PDF source
   * @param options Options du workflow
   * @returns Résultat avec pdfBuffer, validation, signature et afnor
   */
  async genererFacturxComplet(
    factureData: Record<string, unknown>,
    pdfPath: string,
    options: {
      profil?: string;
      valider?: boolean;
      signer?: boolean;
      soumettreAfnor?: boolean;
      afnorFlowName?: string;
      afnorTrackingId?: string;
      timeout?: number;
    } = {}
  ): Promise<{
    pdfBuffer: Buffer;
    validation?: Record<string, unknown>;
    signature?: { signe: boolean };
    afnor?: Record<string, unknown>;
  }> {
    const {
      profil = 'EN16931',
      valider = true,
      signer = false,
      soumettreAfnor = false,
      afnorFlowName,
      afnorTrackingId,
      timeout,
    } = options;
    const result: {
      pdfBuffer: Buffer;
      validation?: Record<string, unknown>;
      signature?: { signe: boolean };
      afnor?: Record<string, unknown>;
    } = { pdfBuffer: Buffer.alloc(0) };

    // 1. Génération
    const pdfBuffer = await this.genererFacturx(factureData, pdfPath, profil, 'pdf', true, timeout) as Buffer;
    result.pdfBuffer = pdfBuffer;

    // 2. Validation
    if (valider) {
      const validation = await this.validerPdfFacturx(pdfBuffer, profil);
      result.validation = validation;
    }

    // 3. Signature (utilise le certificat configuré côté serveur)
    if (signer) {
      const signedPdf = await this.signerPdf(result.pdfBuffer);
      result.pdfBuffer = signedPdf;
      result.signature = { signe: true };
    }

    // 4. Soumission AFNOR
    if (soumettreAfnor) {
      const numeroFacture = (factureData.numeroFacture || factureData.numero_facture || 'FACTURE') as string;
      const flowName = afnorFlowName || `Facture ${numeroFacture}`;
      const trackingId = afnorTrackingId || numeroFacture;
      const afnorResult = await this.soumettreFactureAfnor(result.pdfBuffer, flowName, { trackingId });
      result.afnor = afnorResult;
    }

    return result;
  }
}
