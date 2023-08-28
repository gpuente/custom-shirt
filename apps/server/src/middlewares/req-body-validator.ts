import { logger } from '@logger';
import { RequestValidationError } from '@errors';
import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const reqBodyValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logger.error('Invalid request body', {
      errors: errors.array(),
      path: req.path,
    });

    throw new RequestValidationError(errors.array());
  }

  next();
};
