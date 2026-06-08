import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { corsOptions } from './config/cors.config';
import { env } from './config/env.config';
import { router } from './routes/index';
import { errorMiddleware } from './shared/middlewares/error.middleware';
import { sendError } from './shared/utils/response.helper';
import { limitadorGlobal } from './config/limitador-requisicoes.config';
import { middlewareRegistrarRequisicao } from './shared/utils/registro-logs.middleware';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.config';

import './shared/types/jwt.types';

export function createApp(): Application {
  const app = express();

  app.use(
    helmet({
      crossOriginEmbedderPolicy: env.NODE_ENV === 'production',
      contentSecurityPolicy: env.NODE_ENV === 'production',
    })
  );

  app.use(compression());
  app.use(cors(corsOptions));
  app.use(middlewareRegistrarRequisicao);
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true, limit: '5mb' }));
  app.use(limitadorGlobal);

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      status: 'operational',
      service: 'CuidaBem API',
      version: '2.0.0',
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  });

  app.use(router);

  app.use((req: Request, res: Response) => {
    sendError(res, `Rota não encontrada: ${req.method} ${req.originalUrl}`, 404, 'ROUTE_NOT_FOUND');
  });

  app.use(errorMiddleware);

  return app;
}
