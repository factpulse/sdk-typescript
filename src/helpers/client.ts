/**
 * Client simplifié pour l'API FactPulse avec authentification JWT et polling intégrés.
 */

import axios, { AxiosInstance, AxiosError } from 'axios';
import FormData from 'form-data';
import * as fs from 'fs';
import * as path from 'path';

import {
  FactPulseAuthError,
  FactPulsePollingTimeout,
  FactPulseValidationError,
  ValidationErrorDetail,
} from './exceptions';

export interface FactPulseClientConfig {
  email: string;
  password: string;
  apiUrl?: string;
  clientUid?: string;
  pollingInterval?: number;
  pollingTimeout?: number;
  maxRetries?: number;
}

interface TokenResponse {
  access: string;
  refresh: string;
}

interface TaskStatusResponse {
  id_tache: string;
  statut: string;
  resultat?: Record<string, unknown>;
}

const DEFAULT_API_URL = 'https://factpulse.fr';
const DEFAULT_POLLING_INTERVAL = 2000;
const DEFAULT_POLLING_TIMEOUT = 120000;
const DEFAULT_MAX_RETRIES = 1;

/**
 * Client simplifié pour l'API FactPulse.
 */
export class FactPulseClient {
  private config: Required<FactPulseClientConfig>;
  private httpClient: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiresAt: number | null = null;

  constructor(config: FactPulseClientConfig) {
    this.config = {
      email: config.email,
      password: config.password,
      apiUrl: (config.apiUrl || DEFAULT_API_URL).replace(/\/$/, ''),
      clientUid: config.clientUid || '',
      pollingInterval: config.pollingInterval || DEFAULT_POLLING_INTERVAL,
      pollingTimeout: config.pollingTimeout || DEFAULT_POLLING_TIMEOUT,
      maxRetries: config.maxRetries ?? DEFAULT_MAX_RETRIES,
    };

    this.httpClient = axios.create({
      timeout: 30000,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  private async obtainToken(): Promise<TokenResponse> {
    const tokenUrl = `${this.config.apiUrl}/api/token/`;
    const payload: Record<string, string> = {
      username: this.config.email,
      password: this.config.password,
    };
    if (this.config.clientUid) payload.client_uid = this.config.clientUid;

    try {
      const response = await this.httpClient.post<TokenResponse>(tokenUrl, payload);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ detail?: string }>;
      const detail = axiosError.response?.data?.detail || axiosError.message;
      throw new FactPulseAuthError(`Impossible d'obtenir le token JWT: ${detail}`);
    }
  }

  private async refreshAccessToken(): Promise<string> {
    if (!this.refreshToken) throw new FactPulseAuthError('Aucun refresh token disponible');
    const refreshUrl = `${this.config.apiUrl}/api/token/refresh/`;
    try {
      const response = await this.httpClient.post<{ access: string }>(refreshUrl, { refresh: this.refreshToken });
      return response.data.access;
    } catch {
      const tokens = await this.obtainToken();
      this.refreshToken = tokens.refresh;
      return tokens.access;
    }
  }

  async ensureAuthenticated(forceRefresh: boolean = false): Promise<void> {
    const now = Date.now();
    if (forceRefresh || !this.accessToken || (this.tokenExpiresAt && now >= this.tokenExpiresAt)) {
      if (this.refreshToken && !forceRefresh && this.tokenExpiresAt) {
        try {
          this.accessToken = await this.refreshAccessToken();
          this.tokenExpiresAt = now + 28 * 60 * 1000;
          return;
        } catch { /* continue */ }
      }
      const tokens = await this.obtainToken();
      this.accessToken = tokens.access;
      this.refreshToken = tokens.refresh;
      this.tokenExpiresAt = now + 28 * 60 * 1000;
    }
  }

  resetAuth(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.tokenExpiresAt = null;
  }

  async pollTask(taskId: string, timeout?: number, interval?: number): Promise<Record<string, unknown>> {
    const timeoutMs = timeout ?? this.config.pollingTimeout;
    const intervalMs = interval ?? this.config.pollingInterval;
    const startTime = Date.now();
    let currentInterval = intervalMs;

    while (true) {
      const elapsed = Date.now() - startTime;
      if (elapsed > timeoutMs) throw new FactPulsePollingTimeout(taskId, timeoutMs);

      await this.ensureAuthenticated();
      const statusUrl = `${this.config.apiUrl}/api/facturation/v1/traitement/taches/${taskId}/statut`;

      try {
        const response = await this.httpClient.get<TaskStatusResponse>(statusUrl, {
          headers: { Authorization: `Bearer ${this.accessToken}` },
        });
        const { statut, resultat } = response.data;

        if (statut === 'SUCCESS') return (resultat as Record<string, unknown>) || {};
        if (statut === 'FAILURE') {
          const result = resultat as Record<string, unknown> | undefined;
          const errorMsg = (result?.message_erreur as string) || 'Erreur inconnue';
          const errors: ValidationErrorDetail[] = [];
          if (Array.isArray(result?.erreurs)) {
            for (const err of result.erreurs) {
              if (typeof err === 'object' && err !== null) errors.push(err as ValidationErrorDetail);
            }
          }
          throw new FactPulseValidationError(`La tâche ${taskId} a échoué: ${errorMsg}`, errors);
        }

        await this.sleep(currentInterval);
        currentInterval = Math.min(currentInterval * 1.5, 10000);
      } catch (error) {
        if (error instanceof FactPulseValidationError || error instanceof FactPulsePollingTimeout) throw error;
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) { this.resetAuth(); continue; }
        throw new FactPulseValidationError(`Erreur API: ${axiosError.message}`);
      }
    }
  }

  async genererFacturx(
    factureData: Record<string, unknown> | string,
    pdfPath: string,
    profil: string = 'EN16931',
    formatSortie: string = 'pdf',
    sync: boolean = true,
    timeout?: number
  ): Promise<Buffer | string> {
    const jsonData = typeof factureData === 'string' ? factureData : JSON.stringify(factureData);
    let taskId: string | null = null;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      await this.ensureAuthenticated();
      const url = `${this.config.apiUrl}/api/facturation/v1/traitement/generer-facture`;
      const form = new FormData();
      form.append('donnees_facture', jsonData);
      form.append('profil', profil);
      form.append('format_sortie', formatSortie);
      form.append('source_pdf', fs.createReadStream(pdfPath), { filename: path.basename(pdfPath), contentType: 'application/pdf' });

      try {
        const response = await this.httpClient.post<{ id_tache: string }>(url, form, {
          headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
          timeout: 60000,
        });
        taskId = response.data.id_tache;
        break;
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401 && attempt < this.config.maxRetries) { this.resetAuth(); continue; }
        throw new FactPulseValidationError(`Erreur API: ${axiosError.message}`);
      }
    }

    if (!taskId) throw new FactPulseValidationError("Pas d'ID de tâche dans la réponse");
    if (!sync) return taskId;

    const result = await this.pollTask(taskId, timeout);
    if (result.statut === 'ERREUR') {
      const errorMsg = (result.message_erreur as string) || 'Erreur de validation';
      const errors: ValidationErrorDetail[] = [];
      if (Array.isArray(result.erreurs)) {
        for (const err of result.erreurs) {
          if (typeof err === 'object' && err !== null) errors.push(err as ValidationErrorDetail);
        }
      }
      throw new FactPulseValidationError(errorMsg, errors);
    }
    if (result.contenu_b64) return Buffer.from(result.contenu_b64 as string, 'base64');
    throw new FactPulseValidationError('Le résultat ne contient pas de contenu');
  }

  static formatMontant(montant: unknown): string {
    if (montant === null || montant === undefined) return '0.00';
    if (typeof montant === 'number') return montant.toFixed(2);
    if (typeof montant === 'string') return montant;
    return '0.00';
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
