import { Router } from 'express';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { CreateAlimentacaoSchema, UpdateAlimentacaoSchema, IdParamSchema } from './alimentacao.schema';
import { listAlimentacoes, getAlimentacao, createAlimentacao, updateAlimentacao, deleteAlimentacao } from './alimentacao.controller';

const alimentacaoRouter = Router();
alimentacaoRouter.use(authenticate);

alimentacaoRouter.get('/', listAlimentacoes);
alimentacaoRouter.post('/', validate(CreateAlimentacaoSchema), createAlimentacao);
alimentacaoRouter.get('/:id', validate(IdParamSchema, 'params'), getAlimentacao);
alimentacaoRouter.put('/:id', validate(IdParamSchema, 'params'), validate(UpdateAlimentacaoSchema), updateAlimentacao);
alimentacaoRouter.delete('/:id', validate(IdParamSchema, 'params'), deleteAlimentacao);

export { alimentacaoRouter };
