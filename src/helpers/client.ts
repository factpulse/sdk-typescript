import axios, { AxiosInstance, AxiosError } from 'axios';
import FormData from 'form-data';
import * as fs from 'fs';
import * as path from 'path';
import { FactPulseAuthError, FactPulsePollingTimeout, FactPulseValidationError, ValidationErrorDetail } from './exceptions';

// =============================================================================
// Credentials interfaces - for simplified configuration
// =============================================================================

/** Chorus Pro credentials for Zero-Trust mode. */
export interface ChorusProCredentials {
  pisteClientId: string;
  pisteClientSecret: string;
  chorusProLogin: string;
  chorusProPassword: string;
  sandbox?: boolean;
}

/** AFNOR PDP credentials for Zero-Trust mode. The FactPulse API uses these credentials to authenticate with the AFNOR PDP. */
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
// Helpers for anyOf types - avoids verbosity of generated wrappers
// =============================================================================

type AmountValue = string | number | null | undefined;

/** Converts a value to an amount string for the API. */
export function amount(value: AmountValue): string {
  if (value === null || value === undefined) return '0.00';
  if (typeof value === 'number') return value.toFixed(2);
  if (typeof value === 'string') return value;
  return '0.00';
}

/** Creates a simplified InvoiceTotals object. */
export function invoiceTotals(
  exclTax: AmountValue, vat: AmountValue, inclTax: AmountValue, amountDue: AmountValue,
  options?: { globalAllowanceAmount?: AmountValue; globalAllowanceReason?: string; prepayment?: AmountValue }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    totalNetAmount: amount(exclTax), vatAmount: amount(vat),
    totalGrossAmount: amount(inclTax), amountDue: amount(amountDue),
  };
  if (options?.globalAllowanceAmount !== undefined) result.globalAllowanceAmount = amount(options.globalAllowanceAmount);
  if (options?.globalAllowanceReason !== undefined) result.globalAllowanceReason = options.globalAllowanceReason;
  if (options?.prepayment !== undefined) result.prepayment = amount(options.prepayment);
  return result;
}

/** Creates an invoice line (aligned with InvoiceLine in models.py).
 * For VAT rate: either vatRate (code e.g.: "VAT20") or manualVatRate (value e.g.: 20.00) */
export function invoiceLine(
  lineNumber: number, itemName: string, quantity: AmountValue, unitNetPrice: AmountValue, lineNetAmount: AmountValue,
  options?: { vatRate?: string; manualVatRate?: AmountValue; vatCategory?: string; unit?: string; reference?: string;
    lineAllowanceAmount?: AmountValue; allowanceReasonCode?: string; allowanceReason?: string;
    periodStartDate?: string; periodEndDate?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    lineNumber, itemName, quantity: amount(quantity), unitNetPrice: amount(unitNetPrice),
    lineNetAmount: amount(lineNetAmount),
    vatCategory: options?.vatCategory ?? 'S', unit: options?.unit ?? 'LUMP_SUM',
  };
  // Either vatRate (code) or manualVatRate (value)
  if (options?.vatRate) result.vatRate = options.vatRate;
  else result.manualVatRate = amount(options?.manualVatRate ?? '20.00');
  if (options?.reference) result.reference = options.reference;
  if (options?.lineAllowanceAmount !== undefined) result.lineAllowanceAmount = amount(options.lineAllowanceAmount);
  if (options?.allowanceReasonCode) result.allowanceReasonCode = options.allowanceReasonCode;
  if (options?.allowanceReason) result.allowanceReason = options.allowanceReason;
  if (options?.periodStartDate) result.periodStartDate = options.periodStartDate;
  if (options?.periodEndDate) result.periodEndDate = options.periodEndDate;
  return result;
}

/** Creates a VAT line (aligned with VATLine in models.py).
 * For rate: either rate (code e.g.: "VAT20") or manualRate (value e.g.: 20.00) */
export function vatLine(
  taxableAmount: AmountValue, vatAmount: AmountValue,
  options?: { rate?: string; manualRate?: AmountValue; category?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = {
    taxableAmount: amount(taxableAmount), vatAmount: amount(vatAmount), category: options?.category ?? 'S',
  };
  // Either rate (code) or manualRate (value)
  if (options?.rate) result.rate = options.rate;
  else result.manualRate = amount(options?.manualRate ?? '20.00');
  return result;
}

/** Creates a postal address for the FactPulse API. */
export function postalAddress(
  lineOne: string, postalCode: string, city: string,
  options?: { countryCode?: string; lineTwo?: string; lineThree?: string }
): Record<string, unknown> {
  const result: Record<string, unknown> = { lineOne, postalCode, city, countryCode: options?.countryCode ?? 'FR' };
  if (options?.lineTwo) result.lineTwo = options.lineTwo;
  if (options?.lineThree) result.lineThree = options.lineThree;
  return result;
}

/** Creates an electronic address for the FactPulse API. schemeId: "0009"=SIREN, "0225"=SIRET */
export function electronicAddress(identifier: string, schemeId = '0009'): Record<string, unknown> {
  return { identifier, schemeId };
}

/** Computes the French intra-community VAT number from a SIREN. */
function computeVatIntra(siren: string): string | null {
  if (siren.length !== 9 || !/^\d+$/.test(siren)) return null;
  const cle = (12 + 3 * (parseInt(siren, 10) % 97)) % 97;
  return `FR${cle.toString().padStart(2, '0')}${siren}`;
}

/** Creates a supplier (issuer) with auto-computed SIREN, intra-EU VAT number and addresses. */
export function supplier(
  name: string, siret: string, addressLine1: string, postalCode: string, city: string,
  options?: { supplierId?: number; siren?: string; vatNumber?: string; iban?: string; countryCode?: string; addressLine2?: string; supplierServiceId?: number; supplierBankDetailsCode?: number }
): Record<string, unknown> {
  const opts = options ?? {};
  const siren = opts.siren ?? (siret.length === 14 ? siret.slice(0, 9) : undefined);
  const vatNumber = opts.vatNumber ?? (siren ? computeVatIntra(siren) : null);
  const result: Record<string, unknown> = {
    name, supplierId: opts.supplierId ?? 0, siret,
    electronicAddress: electronicAddress(siret, '0225'),
    postalAddress: postalAddress(addressLine1, postalCode, city, { countryCode: opts.countryCode, lineTwo: opts.addressLine2 }),
  };
  if (siren) result.siren = siren;
  if (vatNumber) result.vatNumber = vatNumber;
  if (opts.iban) result.iban = opts.iban;
  if (opts.supplierServiceId) result.supplierServiceId = opts.supplierServiceId;
  if (opts.supplierBankDetailsCode) result.supplierBankDetailsCode = opts.supplierBankDetailsCode;
  return result;
}

/** Creates a recipient (customer) with auto-computed SIREN and addresses. */
export function recipient(
  name: string, siret: string, addressLine1: string, postalCode: string, city: string,
  options?: { siren?: string; countryCode?: string; addressLine2?: string; executingServiceCode?: string }
): Record<string, unknown> {
  const opts = options ?? {};
  const siren = opts.siren ?? (siret.length === 14 ? siret.slice(0, 9) : undefined);
  const result: Record<string, unknown> = {
    name, siret,
    electronicAddress: electronicAddress(siret, '0225'),
    postalAddress: postalAddress(addressLine1, postalCode, city, { countryCode: opts.countryCode, lineTwo: opts.addressLine2 }),
  };
  if (siren) result.siren = siren;
  if (opts.executingServiceCode) result.executingServiceCode = opts.executingServiceCode;
  return result;
}

/**
 * Creates a beneficiary (factor) for factoring.
 *
 * The beneficiary (BG-10 / PayeeTradeParty) is used when payment
 * must be made to a third party different from the supplier, typically
 * a factor (factoring company).
 *
 * For factored invoices, you also need to:
 * - Use a factored document type (393, 396, 501, 502, 472, 473)
 * - Add an ACC note with the subrogation mention
 * - The beneficiary's IBAN will be used for payment
 *
 * @param name Factor's business name (BT-59)
 * @param options Options: siret (BT-60), siren (BT-61), iban, bic
 * @returns Dict ready to be used in a factored invoice
 *
 * @example
 * const factor = beneficiary('FACTOR SAS', {
 *   siret: '30000000700033',
 *   iban: 'FR76 3000 4000 0500 0012 3456 789',
 * });
 */
export function beneficiary(
  name: string,
  options?: { siret?: string; siren?: string; iban?: string; bic?: string }
): Record<string, unknown> {
  const opts = options ?? {};
  // Auto-compute SIREN from SIRET
  const siren = opts.siren ?? (opts.siret && opts.siret.length === 14 ? opts.siret.slice(0, 9) : undefined);

  const result: Record<string, unknown> = { name };
  if (opts.siret) result.siret = opts.siret;
  if (siren) result.siren = siren;
  if (opts.iban) result.iban = opts.iban;
  if (opts.bic) result.bic = opts.bic;
  return result;
}

// =============================================================================
// Main client
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

  // Shorter aliases
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
      throw new FactPulseAuthError(`Unable to obtain JWT token: ${axiosError.response?.data?.detail || axiosError.message}`);
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
        const response = await this.httpClient.get(`${this.config.apiUrl}/api/v1/processing/tasks/${taskId}/status`, {
          headers: { Authorization: `Bearer ${this.accessToken}` },
        });
        const { statut, resultat } = response.data;
        if (statut === 'SUCCESS') return (resultat as Record<string, unknown>) || {};
        if (statut === 'FAILURE') {
          // Format AFNOR: errorMessage, details
          const result = resultat as Record<string, unknown> | undefined;
          const errors: ValidationErrorDetail[] = Array.isArray(result?.details) ? result.details.filter((e): e is ValidationErrorDetail => typeof e === 'object' && e !== null) : [];
          throw new FactPulseValidationError(`Task ${taskId} failed: ${result?.errorMessage || 'Unknown error'}`, errors);
        }
        await new Promise(resolve => setTimeout(resolve, currentInterval));
        currentInterval = Math.min(currentInterval * 1.5, 10000);
      } catch (error) {
        if (error instanceof FactPulseValidationError || error instanceof FactPulsePollingTimeout) throw error;
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) { this.resetAuth(); continue; }
        throw new FactPulseValidationError(`API Error: ${axiosError.message}`);
      }
    }
  }

  async generateFacturx(invoiceData: Record<string, unknown> | string, pdfPath: string, profile = 'EN16931', outputFormat = 'pdf', sync = true, timeout?: number): Promise<Buffer | string> {
    const jsonData = typeof invoiceData === 'string' ? invoiceData : JSON.stringify(invoiceData);
    let taskId: string | null = null;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      await this.ensureAuthenticated();
      const form = new FormData();
      form.append('invoice_data', jsonData);
      form.append('profile', profile);
      form.append('output_format', outputFormat);
      form.append('source_pdf', fs.createReadStream(pdfPath), { filename: path.basename(pdfPath), contentType: 'application/pdf' });
      try {
        const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/processing/generate-invoice`, form, {
          headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` }, timeout: 60000,
        });
        taskId = response.data.taskId; break;
      } catch (error) {
        const axiosError = error as AxiosError<{ detail?: unknown; errorMessage?: string }>;
        if (axiosError.response?.status === 401 && attempt < this.config.maxRetries) { this.resetAuth(); continue; }

        // Extract error details from response body
        const responseData = axiosError.response?.data;
        let errorMsg = `API Error (${axiosError.response?.status || 'unknown'}): ${axiosError.message}`;
        const errors: ValidationErrorDetail[] = [];

        if (responseData) {
          // Format FastAPI/Pydantic: {"detail": [{"loc": [...], "msg": "...", "type": "..."}]}
          if (Array.isArray(responseData.detail)) {
            errorMsg = 'Validation error';
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

        console.error(`API Error ${axiosError.response?.status}:`, responseData);
        throw new FactPulseValidationError(errorMsg, errors);
      }
    }
    if (!taskId) throw new FactPulseValidationError("No task ID");
    if (!sync) return taskId;
    const result = await this.pollTask(taskId, timeout);
    if (result.content_b64) return Buffer.from(result.content_b64 as string, 'base64');
    throw new FactPulseValidationError('No content');
  }

  static formatAmount(m: unknown): string {
    if (m === null || m === undefined) return '0.00';
    if (typeof m === 'number') return m.toFixed(2);
    if (typeof m === 'string') return m;
    return '0.00';
  }

  // =========================================================================
  // AFNOR - Authentication and internal helpers
  // =========================================================================

  /**
   * Retrieves AFNOR credentials (stored or zero-trust mode).
   * Zero-trust mode: Returns the afnorCredentials provided to the constructor.
   * Stored mode: Retrieves credentials via GET /api/v1/afnor/credentials.
   */
  private async getAfnorCredentialsInternal(): Promise<AFNORCredentials> {
    // Zero-trust mode: credentials provided to the constructor
    if (this.afnorCredentials) {
      return this.afnorCredentials;
    }

    // Stored mode: retrieve credentials via the API
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
            "No client_uid in JWT. To use AFNOR endpoints, either:\n" +
            "1. Generate a token with a client_uid (stored mode)\n" +
            "2. Provide AFNORCredentials to the client constructor (zero-trust mode)"
          );
        }
      }
      throw new FactPulseAuthError(`Failed to retrieve AFNOR credentials: ${axiosError.message}`);
    }
  }

  /**
   * Obtains the AFNOR OAuth2 token and the PDP URL.
   * This method:
   * 1. Retrieves AFNOR credentials (stored or zero-trust mode)
   * 2. Performs AFNOR OAuth to obtain a token
   * 3. Returns the token and the PDP URL
   */
  private async getAfnorTokenAndUrl(): Promise<{ token: string; pdpBaseUrl: string }> {
    // Step 1: Get AFNOR credentials
    const credentials = await this.getAfnorCredentialsInternal();

    // Step 2: Perform AFNOR OAuth via the FactPulse proxy
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
        throw new FactPulseAuthError('Invalid AFNOR OAuth2 response: access_token missing');
      }

      return {
        token: tokenData.access_token,
        pdpBaseUrl: credentials.flowServiceUrl,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new FactPulseAuthError(`AFNOR OAuth2 failed: ${axiosError.message}`);
    }
  }

  /**
   * Performs a request to the AFNOR API with auth and error handling.
   * IMPORTANT: This method uses the AFNOR OAuth token, NOT the FactPulse JWT!
   */
  private async makeAfnorRequest<T = unknown>(
    method: 'GET' | 'POST',
    endpoint: string,
    options?: { data?: unknown; files?: FormData; params?: Record<string, string> }
  ): Promise<T> {
    // Obtenir le token AFNOR et l'URL de la PDP
    const { token: afnorToken, pdpBaseUrl } = await this.getAfnorTokenAndUrl();

    const url = `${this.config.apiUrl}/api/v1/afnor${endpoint}`;

    // ALWAYS use the AFNOR token + X-PDP-Base-URL header
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
      throw new FactPulseValidationError(`AFNOR Error: ${errorMsg}`);
    }
  }

  // ==================== AFNOR Directory ====================

  /** Gets a facility by SIRET in the AFNOR directory. */
  async getSiretAfnor(siret: string): Promise<Record<string, unknown>> {
    return this.makeAfnorRequest('GET', `/directory/v1/siret/code-insee:${siret}`);
  }

  /** Gets a legal unit by SIREN in the AFNOR directory. */
  async getSirenAfnor(siren: string): Promise<Record<string, unknown>> {
    return this.makeAfnorRequest('GET', `/directory/v1/siren/code-insee:${siren}`);
  }

  /** Searches for legal units (SIREN) in the AFNOR directory. */
  async searchSirenAfnor(
    options: { filters?: Record<string, unknown>; limit?: number } = {}
  ): Promise<Record<string, unknown>> {
    const { filters = {}, limit = 25 } = options;
    return this.makeAfnorRequest('POST', '/directory/v1/siren/search', { data: { filters, limit } });
  }

  /** Searches for routing codes in the AFNOR directory. */
  async searchRoutingCodesAfnor(
    options: { filters?: Record<string, unknown>; limit?: number } = {}
  ): Promise<Record<string, unknown>> {
    const { filters = {}, limit = 25 } = options;
    return this.makeAfnorRequest('POST', '/directory/v1/routing-code/search', { data: { filters, limit } });
  }

  /** Gets a routing code by SIRET and routing identifier. */
  async getRoutingCodeAfnor(siret: string, routingIdentifier: string): Promise<Record<string, unknown>> {
    return this.makeAfnorRequest('GET', `/directory/v1/routing-code/siret:${siret}/code:${routingIdentifier}`);
  }

  // ==================== AFNOR Flow ====================

  /**
   * Submits an invoice to a PDP via the AFNOR API.
   * Authentication uses the AFNOR OAuth token (obtained automatically),
   * either via stored credentials (stored mode), or via the afnorCredentials
   * provided to the constructor (zero-trust mode).
   *
   * @param pdfBuffer Buffer of the Factur-X PDF to submit
   * @param flowName Flow name (e.g.: "Invoice INV-2025-001")
   * @param options Options: trackingId, flowSyntax (CII/UBL), flowProfile
   */
  async submitInvoiceAfnor(
    pdfBuffer: Buffer,
    flowName: string,
    options: { trackingId?: string; flowSyntax?: string; flowProfile?: string } = {}
  ): Promise<Record<string, unknown>> {
    const { trackingId, flowSyntax = 'CII', flowProfile = 'EN16931' } = options;

    // Compute SHA-256
    const crypto = require('crypto');
    const sha256 = crypto.createHash('sha256').update(pdfBuffer).digest('hex');

    // Prepare flowInfo
    const flowInfo: Record<string, unknown> = { name: flowName, flowSyntax, flowProfile, sha256 };
    if (trackingId) flowInfo.trackingId = trackingId;

    const form = new FormData();
    form.append('file', pdfBuffer, { filename: 'facture.pdf', contentType: 'application/pdf' });
    form.append('flowInfo', JSON.stringify(flowInfo), { contentType: 'application/json' });

    return this.makeAfnorRequest('POST', '/flow/v1/flows', { files: form });
  }

  async searchFlowsAfnor(criteria: { trackingId?: string; status?: string; offset?: number; limit?: number } = {}): Promise<Record<string, unknown>> {
    const searchBody: Record<string, unknown> = {
      offset: criteria.offset ?? 0,
      limit: criteria.limit ?? 25,
      where: {},
    };
    if (criteria.trackingId) (searchBody.where as Record<string, unknown>).trackingId = criteria.trackingId;
    if (criteria.status) (searchBody.where as Record<string, unknown>).status = criteria.status;

    return this.makeAfnorRequest('POST', '/flow/v1/flows/search', { data: searchBody });
  }

  async downloadFlowAfnor(flowId: string): Promise<Buffer> {
    // For downloading, we need to handle the response type differently
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
   * Retrieves JSON metadata of an incoming flow (supplier invoice).
   * Downloads an incoming flow from the AFNOR PDP and extracts invoice
   * metadata into a unified JSON format. Supports Factur-X, CII and UBL.
   *
   * Note: This endpoint uses FactPulse JWT authentication (not AFNOR OAuth).
   * The FactPulse server handles calling the PDP with stored credentials.
   *
   * @param flowId Flow identifier (UUID)
   * @param includeDocument If true, includes the original document encoded in base64
   * @returns Invoice metadata (supplier, amounts, dates, etc.)
   *
   * @example
   * const invoice = await client.getIncomingInvoiceAfnor("550e8400-...");
   * console.log(`Supplier: ${invoice.supplier.name}`);
   * console.log(`Total incl. tax: ${invoice.total_incl_tax} ${invoice.currency}`);
   */
  async getIncomingInvoiceAfnor(
    flowId: string,
    includeDocument: boolean = false
  ): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();

    const url = `${this.config.apiUrl}/api/v1/afnor/incoming-flows/${flowId}`;
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
        `Incoming flow error: ${axiosError.response?.data?.detail || axiosError.message}`
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
   * Lists the services of a Chorus Pro structure.
   * @param idStructureCpp Chorus Pro ID of the structure
   * @returns Object with listeServices, total, codeRetour, libelle
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

  async submitInvoiceChorus(invoiceData: Record<string, unknown>): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/chorus/factures/soumettre`, invoiceData, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  async lookupInvoiceChorus(invoiceIdCpp: number): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/chorus/factures/consulter`, { identifiant_facture_cpp: invoiceIdCpp }, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  // ==================== Validation ====================

  /**
   * Validates a Factur-X PDF.
   * @param pdfBuffer - PDF content as Buffer
   * @param options - Validation options
   * @param options.profile - Factur-X profile (MINIMUM, BASIC, EN16931, EXTENDED). If not specified, auto-detected.
   * @param options.useVerapdf - Enable strict PDF/A validation with VeraPDF (default: false)
   */
  async validateFacturxPdf(
    pdfBuffer: Buffer,
    options: { profile?: string; useVerapdf?: boolean } = {}
  ): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('pdf_file', pdfBuffer, { filename: 'facture.pdf', contentType: 'application/pdf' });
    if (options.profile) {
      form.append('profile', options.profile);
    }
    form.append('use_verapdf', String(options.useVerapdf ?? false));
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/processing/validate-facturx-pdf`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  async validateFacturxXml(xmlContent: string, profile = 'EN16931'): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('xml_file', Buffer.from(xmlContent, 'utf-8'), { filename: 'facture.xml', contentType: 'application/xml' });
    form.append('profile', profile);
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/processing/validate-xml`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  async validatePdfSignature(pdfBuffer: Buffer): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('pdf_file', pdfBuffer, { filename: 'document.pdf', contentType: 'application/pdf' });
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/processing/validate-pdf-signature`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    return response.data;
  }

  // ==================== Signature ====================

  /**
   * Signs a PDF with the server-configured certificate (via JWT client_uid).
   * The certificate must be previously configured in Django Admin.
   */
  async signPdf(
    pdfBuffer: Buffer,
    options: { reason?: string; location?: string; contact?: string; usePadesLt?: boolean; useTimestamp?: boolean } = {}
  ): Promise<Buffer> {
    await this.ensureAuthenticated();
    const form = new FormData();
    form.append('pdf_file', pdfBuffer, { filename: 'document.pdf', contentType: 'application/pdf' });
    if (options.reason) form.append('reason', options.reason);
    if (options.location) form.append('location', options.location);
    if (options.contact) form.append('contact', options.contact);
    if (options.usePadesLt !== undefined) form.append('use_pades_lt', String(options.usePadesLt));
    if (options.useTimestamp !== undefined) form.append('use_timestamp', String(options.useTimestamp));
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/processing/sign-pdf`, form, {
      headers: { ...form.getHeaders(), Authorization: `Bearer ${this.accessToken}` },
    });
    // The API returns JSON with pdf_signe_base64
    const data = response.data as { pdf_signe_base64?: string };
    if (data.pdf_signe_base64) {
      return Buffer.from(data.pdf_signe_base64, 'base64');
    }
    throw new Error('Invalid signature response');
  }

  /**
   * Generates a test certificate (NOT FOR PRODUCTION).
   * The certificate must then be configured in Django Admin.
   */
  async generateTestCertificate(
    options: { cn?: string; organisation?: string; email?: string; validityDays?: number; keySize?: number } = {}
  ): Promise<Record<string, unknown>> {
    await this.ensureAuthenticated();
    const response = await this.httpClient.post(`${this.config.apiUrl}/api/v1/processing/generate-test-certificate`, {
      cn: options.cn || 'Test Organisation',
      organisation: options.organisation || 'Test Organisation',
      email: options.email || 'test@example.com',
      validity_days: options.validityDays || 365,
      key_size: options.keySize || 2048,
    }, {
      headers: { Authorization: `Bearer ${this.accessToken}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  // ==================== Workflow complet ====================

  /**
   * Complete workflow: generation + validation + signature + AFNOR submission.
   * Note: Signature uses the server-configured certificate (via JWT client_uid).
   * @param invoiceData Invoice data
   * @param pdfPath Path to the source PDF
   * @param options Workflow options
   * @returns Result with pdfBuffer, validation, signature and afnor
   */
  async generateCompleteFacturx(
    invoiceData: Record<string, unknown>,
    pdfPath: string,
    options: {
      profile?: string;
      validate?: boolean;
      sign?: boolean;
      submitAfnor?: boolean;
      afnorFlowName?: string;
      afnorTrackingId?: string;
      timeout?: number;
    } = {}
  ): Promise<{
    pdfBuffer: Buffer;
    validation?: Record<string, unknown>;
    signature?: { signed: boolean };
    afnor?: Record<string, unknown>;
  }> {
    const {
      profile = 'EN16931',
      validate = true,
      sign = false,
      submitAfnor = false,
      afnorFlowName,
      afnorTrackingId,
      timeout,
    } = options;
    const result: {
      pdfBuffer: Buffer;
      validation?: Record<string, unknown>;
      signature?: { signed: boolean };
      afnor?: Record<string, unknown>;
    } = { pdfBuffer: Buffer.alloc(0) };

    // 1. Generation
    const pdfBuffer = await this.generateFacturx(invoiceData, pdfPath, profile, 'pdf', true, timeout) as Buffer;
    result.pdfBuffer = pdfBuffer;

    // 2. Validation
    if (validate) {
      const validation = await this.validateFacturxPdf(pdfBuffer, { profile });
      result.validation = validation;
    }

    // 3. Signature (uses the server-configured certificate)
    if (sign) {
      const signedPdf = await this.signPdf(result.pdfBuffer);
      result.pdfBuffer = signedPdf;
      result.signature = { signed: true };
    }

    // 4. AFNOR submission
    if (submitAfnor) {
      const invoiceNumber = (invoiceData.invoiceNumber || invoiceData.invoice_number || 'INVOICE') as string;
      const flowName = afnorFlowName || `Invoice ${invoiceNumber}`;
      const trackingId = afnorTrackingId || invoiceNumber;
      const afnorResult = await this.submitInvoiceAfnor(result.pdfBuffer, flowName, { trackingId });
      result.afnor = afnorResult;
    }

    return result;
  }
}
