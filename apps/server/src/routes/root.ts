import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'hello world!' });
});

export { router as rootRouter };
