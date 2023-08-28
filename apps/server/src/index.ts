import 'dotenv/config';

import { app } from './app';

const startServer = async () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY must be defined');
  }

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

startServer();
