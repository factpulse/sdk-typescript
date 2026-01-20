export class FactPulseError extends Error {
  statusCode?: number;
  details?: unknown[];
  constructor(message: string, statusCode?: number, details?: unknown[]) {
    super(message);
    this.name = 'FactPulseError';
    this.statusCode = statusCode;
    this.details = details ?? [];
    Object.setPrototypeOf(this, FactPulseError.prototype);
  }
}

export class FactPulseAuthError extends FactPulseError {
  constructor(message: string = "Erreur d'authentification") { super(message); this.name = 'FactPulseAuthError'; Object.setPrototypeOf(this, FactPulseAuthError.prototype); }
}

export class FactPulsePollingTimeout extends FactPulseError {
  public readonly taskId: string;
  public readonly timeout: number;
  constructor(taskId: string, timeout: number) {
    super(`Timeout (${timeout}ms) atteint pour la tâche ${taskId}`);
    this.name = 'FactPulsePollingTimeout'; this.taskId = taskId; this.timeout = timeout;
    Object.setPrototypeOf(this, FactPulsePollingTimeout.prototype);
  }
}

export interface ValidationErrorDetail { level?: string; item?: string; reason?: string; source?: string; code?: string; }

export function formatValidationError(e: ValidationErrorDetail): string {
  return `[${e.item || 'unknown'}] ${e.reason || 'Unknown error'}`;
}

export class FactPulseValidationError extends FactPulseError {
  public readonly errors: ValidationErrorDetail[];
  constructor(message: string, errors: ValidationErrorDetail[] = []) {
    const fullMessage = errors.length > 0 ? `${message}\n\nDétails:\n${errors.map(e => `  - ${formatValidationError(e)}`).join('\n')}` : message;
    super(fullMessage); this.name = 'FactPulseValidationError'; this.errors = errors;
    Object.setPrototypeOf(this, FactPulseValidationError.prototype);
  }
}
