import { OpenAI } from 'openai';
import { logger } from '@logger';
import { promptValidator } from '@validators';
import { reqBodyValidator } from '@middlewares';
import express, { Request, Response } from 'express';

const router = express.Router();

const openAIClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post(
  '/',
  [promptValidator, reqBodyValidator],
  async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body;

      const response = await openAIClient.images.generate({
        n: 1,
        prompt,
        size: '1024x1024',
        response_format: 'b64_json',
      });

      const image = response.data[0].b64_json;
      res.status(200).send({ image });
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
);

export { router as generateImageRouter };
