import 'dotenv/config';
import express from 'express';
import 'express-async-errors';

import { routes } from '@routes';
import { json } from 'body-parser';
import { NotFoundError } from '@errors';
import { errorHandler } from '@middlewares';

const app = express();

app.set('trust proxy', true);
app.use(json());

routes.forEach((route) => {
  app.use(route);
});

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
