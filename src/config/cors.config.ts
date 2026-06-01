import { CorsOptions } from 'cors';
import { env } from './env.config';

const allowedOrigins: string[] = env.CORS_ORIGINS.split(',').map((o) => o.trim()).filter(Boolean);

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin && env.NODE_ENV === 'development') {
      callback(null, true);
      return;
    }
    if (origin && allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: Origem "${origin ?? 'desconhecida'}" não autorizada.`));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Authorization'],
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 86400,
};
