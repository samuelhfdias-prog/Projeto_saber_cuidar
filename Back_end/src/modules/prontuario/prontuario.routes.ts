import { Router } from 'express';
import { listarProntuarios, criarProntuario } from './prontuario.controller';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { CriarProntuarioSchema } from './prontuario.schema';

const prontuarioRouter = Router({ mergeParams: true });

prontuarioRouter.get('/', authenticate, listarProntuarios);
prontuarioRouter.post('/', authenticate, validate(CriarProntuarioSchema), criarProntuario);

export { prontuarioRouter };
