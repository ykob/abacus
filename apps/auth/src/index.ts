// src/index.ts

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import { env } from './config';
import { errorHandler } from './middlewares/error-handler.middleware';
import authRouter from './routes/auth/auth.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use(errorHandler);

app.get('/health', (_, res) => {
  res.status(200).send('Auth Server is healthy!');
});

app.listen(env.PORT, () => {
  console.log(`Auth Server is running at http://localhost:${env.PORT}`);
});
