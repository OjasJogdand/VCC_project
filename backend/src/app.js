import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { getEnv } from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();
const corsOrigin = getEnv('CORS_ORIGIN', 'http://localhost:5173');

app.use(cors({ origin: corsOrigin }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/auth', authRoutes);
app.use('/', courseRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
