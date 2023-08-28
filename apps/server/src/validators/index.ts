import { body } from 'express-validator';

export const promptValidator = body('prompt')
  .isString()
  .notEmpty()
  .withMessage('Provide a valid prompt');
