import { Request, Response, NextFunction } from 'express';
import { logger } from '@logger';
import { CustomError, SerializedErrorObject } from '@errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message, {
    path: req.path,
    stack: err.stack,
  });

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  const defaultErrorObject: SerializedErrorObject = {
    errors: [{ message: 'Something went wrong' }],
  };

  res.status(400).send(defaultErrorObject);
};
