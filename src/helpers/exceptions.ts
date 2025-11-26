/**
 * Exceptions personnalisées pour le client FactPulse.
 */

/**
 * Exception de base pour toutes les erreurs FactPulse.
 */
export class FactPulseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FactPulseError';
    Object.setPrototypeOf(this, FactPulseError.prototype);
  }
}

/**
 * Exception levée lors d'erreurs d'authentification.
 */
export class FactPulseAuthError extends FactPulseError {
  constructor(message: string = "Erreur d'authentification") {
    super(message);
    this.name = 'FactPulseAuthError';
    Object.setPrototypeOf(this, FactPulseAuthError.prototype);
  }
}

/**
 * Exception levée lors d'un timeout de polling.
 */
export class FactPulsePollingTimeout extends FactPulseError {
  public readonly taskId: string;
  public readonly timeout: number;

  constructor(taskId: string, timeout: number) {
    super(`Timeout (${timeout}ms) atteint pour la tâche ${taskId}`);
    this.name = 'FactPulsePollingTimeout';
    this.taskId = taskId;
    this.timeout = timeout;
    Object.setPrototypeOf(this, FactPulsePollingTimeout.prototype);
  }
}

/**
 * Détail d'une erreur de validation.
 */
export interface ValidationErrorDetail {
  level?: string;
  item?: string;
  reason?: string;
  source?: string;
  code?: string;
}

/**
 * Formate un détail d'erreur de validation en chaîne lisible.
 */
export function formatValidationError(error: ValidationErrorDetail): string {
  const item = error.item || 'unknown';
  const reason = error.reason || 'Unknown error';
  return `[${item}] ${reason}`;
}

/**
 * Exception levée lors d'erreurs de validation.
 */
export class FactPulseValidationError extends FactPulseError {
  public readonly errors: ValidationErrorDetail[];

  constructor(message: string, errors: ValidationErrorDetail[] = []) {
    let fullMessage = message;
    if (errors.length > 0) {
      const details = errors.map(e => `  - ${formatValidationError(e)}`).join('\n');
      fullMessage = `${message}\n\nDétails:\n${details}`;
    }

    super(fullMessage);
    this.name = 'FactPulseValidationError';
    this.errors = errors;
    Object.setPrototypeOf(this, FactPulseValidationError.prototype);
  }
}
