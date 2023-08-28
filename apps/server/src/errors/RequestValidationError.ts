import { ValidationError } from 'express-validator';
import { CustomError } from './CustomError';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return {
      errors: this.errors.map((err) => ({
        message: err.msg,
        ...(err.type === 'field' && { field: err.path }),
      })),
    };
  }
}
