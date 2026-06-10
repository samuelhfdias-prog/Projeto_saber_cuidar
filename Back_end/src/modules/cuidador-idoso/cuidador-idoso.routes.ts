import { Router } from 'express';
import { listarCuidadores, vincularCuidador, desvincularCuidador } from './cuidador-idoso.controller';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { VincularCuidadorSchema } from './cuidador-idoso.schema';

const cuidadorIdosoRouter = Router({ mergeParams: true });

cuidadorIdosoRouter.get('/', authenticate, listarCuidadores);
cuidadorIdosoRouter.post('/', authenticate, validate(VincularCuidadorSchema), vincularCuidador);
cuidadorIdosoRouter.delete('/:cuidadorId', authenticate, desvincularCuidador);

export { cuidadorIdosoRouter };
