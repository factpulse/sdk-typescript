/**
 * FactPulse SDK - Thin HTTP wrapper with auto-polling.
 *
 * Usage:
 *   const client = new FactPulseClient({ email: 'user@example.com', password: 'secret', clientUid: 'xxx' });
 *
 *   // POST /api/v1/processing/invoices/submit-complete-async
 *   const result = await client.post('processing/invoices/submit-complete-async', {
 *     invoiceData: {...},
 *     sourcePdf: Buffer.from(pdf).toString('base64'),
 *     destination: { type: 'afnor' }
 *   });
 *   const pdfBytes = result.content; // auto-decoded, auto-polled
 *
 *   // GET /api/v1/chorus-pro/structures/123
 *   const structure = await client.get('chorus-pro/structures/123');
 */
import axios, { AxiosInstance, AxiosError } from 'axios';

export class FactPulseError extends Error {
  statusCode?: number;
  details?: unknown[];
  constructor(message: string, statusCode?: number, details?: unknown[]) {
    super(message);
    this.name = 'FactPulseError';
    this.statusCode = statusCode;
    this.details = details ?? [];
  }
}

export interface FactPulseClientConfig {
  email: string;
  password: string;
  clientUid: string;
  apiUrl?: string;
  timeout?: number;
  pollingTimeout?: number;
  maxRetries?: number;
}

const DEFAULT_API_URL = 'https://factpulse.fr';

export class FactPulseClient {
  private readonly apiUrl: string;
  private readonly email: string;
  private readonly password: string;
  private readonly clientUid: string;
  private readonly timeout: number;
  private readonly pollingTimeout: number;
  private readonly httpClient: AxiosInstance;
  private token: string | null = null;
  private tokenExpiresAt = 0;

  constructor(config: FactPulseClientConfig) {
    this.apiUrl = (config.apiUrl ?? DEFAULT_API_URL).replace(/\/$/, '');
    this.email = config.email;
    this.password = config.password;
    this.clientUid = config.clientUid;
    this.timeout = config.timeout ?? 60000;
    this.pollingTimeout = config.pollingTimeout ?? 120000;
    this.httpClient = axios.create({
      timeout: this.timeout,
      validateStatus: () => true, // Handle all status codes manually
    });
  }

  /** POST request to /api/v1/{path} */
  async post(path: string, data?: Record<string, unknown>): Promise<unknown> {
    return this._doRequest('POST', path, data, true);
  }

  /** GET request to /api/v1/{path} */
  async get(path: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._doRequest('GET', path, params, true);
  }

  // Dynamic endpoint builder (alternative syntax)
  get processing() { return this._endpoint('processing'); }
  get chorus_pro() { return this._endpoint('chorus-pro'); }
  get afnor() { return this._endpoint('afnor'); }

  private _endpoint(path: string): Endpoint {
    return new Endpoint(this, path);
  }

  async _request(method: 'GET' | 'POST', path: string, data?: Record<string, unknown>): Promise<unknown> {
    return this._doRequest(method, path, data, true);
  }

  private async _doRequest(method: 'GET' | 'POST', path: string, data: Record<string, unknown> | undefined, retryAuth: boolean): Promise<unknown> {
    await this._ensureAuth();
    const url = `${this.apiUrl}/api/v1/${path}`;
    const headers = { Authorization: `Bearer ${this.token}` };

    let response;
    try {
      response = method === 'GET'
        ? await this.httpClient.get(url, { headers, params: data })
        : await this.httpClient.post(url, data, { headers });
    } catch (e) {
      throw new FactPulseError(`Network error: ${(e as Error).message}`);
    }

    if (response.status === 401 && retryAuth) {
      this._invalidateToken();
      return this._doRequest(method, path, data, false);
    }

    const result = this._parseResponse(response.status, response.data);

    // Auto-poll if taskId present
    if (result && typeof result === 'object' && 'taskId' in result) {
      return this._poll((result as { taskId: string }).taskId);
    }

    // Auto-decode base64
    if (result && typeof result === 'object' && 'content_b64' in result) {
      const r = result as Record<string, unknown>;
      r.content = Buffer.from(r.content_b64 as string, 'base64');
      delete r.content_b64;
    }

    return result;
  }

  private _parseResponse(status: number, data: unknown): unknown {
    if (status >= 200 && status < 300) return data;

    let msg = `HTTP ${status}`;
    const details: unknown[] = [];

    if (data && typeof data === 'object') {
      const d = data as Record<string, unknown>;
      if (Array.isArray(d.detail)) {
        msg = 'Validation error: ' + d.detail.map((e: unknown) => {
          if (typeof e === 'object' && e !== null) {
            const err = e as Record<string, unknown>;
            details.push(e);
            return `${(err.loc as unknown[])?.slice(-1)[0] ?? '?'}: ${err.msg ?? '?'}`;
          }
          return String(e);
        }).join('; ');
      } else if (typeof d.detail === 'string') {
        msg = d.detail;
      } else if (typeof d.errorMessage === 'string') {
        msg = d.errorMessage;
      }
    }

    throw new FactPulseError(msg, status, details);
  }

  private async _poll(taskId: string): Promise<unknown> {
    const start = Date.now();
    let interval = 1000;

    while (true) {
      const elapsed = Date.now() - start;
      if (elapsed >= this.pollingTimeout) {
        throw new FactPulseError(`Polling timeout after ${this.pollingTimeout}ms for task ${taskId}`);
      }

      await this._ensureAuth();
      let response;
      try {
        response = await this.httpClient.get(
          `${this.apiUrl}/api/v1/processing/tasks/${taskId}/status`,
          { headers: { Authorization: `Bearer ${this.token}` } }
        );
      } catch (e) {
        throw new FactPulseError(`Network error while polling: ${(e as Error).message}`);
      }

      if (response.status === 401) {
        this._invalidateToken();
        continue;
      }

      const data = response.data as Record<string, unknown>;
      const status = data.status;

      if (status === 'SUCCESS') {
        const result = (data.result ?? {}) as Record<string, unknown>;
        if (result.content_b64) {
          result.content = Buffer.from(result.content_b64 as string, 'base64');
          delete result.content_b64;
        }
        return result;
      }

      if (status === 'FAILURE') {
        const result = (data.result ?? {}) as Record<string, unknown>;
        throw new FactPulseError(
          (result.errorMessage as string) ?? 'Task failed',
          undefined,
          result.details as unknown[]
        );
      }

      await new Promise(r => setTimeout(r, Math.min(interval, this.pollingTimeout - elapsed)));
      interval = Math.min(interval * 1.5, 10000);
    }
  }

  private async _ensureAuth(): Promise<void> {
    if (Date.now() >= this.tokenExpiresAt) {
      await this._refreshToken();
    }
  }

  private async _refreshToken(): Promise<void> {
    let response;
    try {
      response = await this.httpClient.post(`${this.apiUrl}/api/token/`, {
        username: this.email,
        password: this.password,
        client_uid: this.clientUid,
      });
    } catch (e) {
      throw new FactPulseError(`Auth network error: ${(e as Error).message}`);
    }

    if (response.status !== 200) {
      throw new FactPulseError(`Authentication failed: HTTP ${response.status}`, response.status);
    }

    const data = response.data as { access?: string };
    if (!data.access) {
      throw new FactPulseError('Invalid auth response');
    }

    this.token = data.access;
    this.tokenExpiresAt = Date.now() + 28 * 60 * 1000;
  }

  private _invalidateToken(): void {
    this.tokenExpiresAt = 0;
  }
}

class Endpoint {
  constructor(private client: FactPulseClient, private path: string) {}

  // Chain path segments: client.processing.invoices → processing/invoices
  private _child(segment: string): Endpoint {
    return new Endpoint(this.client, `${this.path}/${segment.replace(/_/g, '-')}`);
  }

  // Dynamic property access for path building
  get invoices() { return this._child('invoices'); }
  get structures() { return this._child('structures'); }
  get tasks() { return this._child('tasks'); }
  get validate_facturx_pdf() { return this._child('validate-facturx-pdf'); }
  get submit_complete_async() { return this._child('submit-complete-async'); }

  // For dynamic segments like client.structures['123']
  [key: string]: unknown;

  // POST request
  async call(data?: Record<string, unknown>): Promise<unknown> {
    return this.client._request('POST', this.path, data);
  }

  // GET request
  async get(params?: Record<string, unknown>): Promise<unknown> {
    return this.client._request('GET', this.path, params);
  }
}

// Proxy to allow dynamic path segments
const EndpointProxy = new Proxy(Endpoint, {
  construct(target, args) {
    const instance = new target(args[0], args[1]);
    return new Proxy(instance, {
      get(obj, prop) {
        if (typeof prop === 'string' && !prop.startsWith('_') && !(prop in obj)) {
          return new EndpointProxy(obj['client'], `${obj['path']}/${prop.replace(/_/g, '-')}`);
        }
        return (obj as Record<string | symbol, unknown>)[prop];
      }
    });
  }
});
