import express from 'express';
import { env } from './config';
import profileRouter from './routes/profiles/profiles.routes';

const app = express();

app.use(express.json());

app.get('/api/public', (_, res) => {
  res.json({ message: 'This is a public endpoint.' });
});

app.use('/api/profile', profileRouter);

app.listen(env.PORT, () => {
  console.log(`Resource Server is running on port ${env.PORT}`);
});
