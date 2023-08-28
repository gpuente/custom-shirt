import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import { routes } from '@routes';
import { json } from 'body-parser';
import { NotFoundError } from '@errors';
import { errorHandler } from '@middlewares';

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(json({ limit: '50mb' }));

routes.forEach(({ path, router }) => {
  app.use(path, router);
});

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
