import { Router } from 'express';
import { listarRelatorios, gerarRelatorio } from './relatorio.controller';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { GerarRelatorioSchema } from './relatorio.schema';

const relatorioRouter = Router({ mergeParams: true });

relatorioRouter.get('/', authenticate, listarRelatorios);
relatorioRouter.post('/', authenticate, validate(GerarRelatorioSchema), gerarRelatorio);

export { relatorioRouter };
