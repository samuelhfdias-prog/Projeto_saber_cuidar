import { Router } from 'express';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { CreateAcompanhamentoSchema, UpdateAcompanhamentoSchema, IdParamSchema } from './acompanhamento.schema';
import { listAcompanhamentos, getAcompanhamento, createAcompanhamento, updateAcompanhamento, deleteAcompanhamento } from './acompanhamento.controller';

const acompanhamentoRouter = Router();
acompanhamentoRouter.use(authenticate);

acompanhamentoRouter.get('/', listAcompanhamentos);
acompanhamentoRouter.post('/', validate(CreateAcompanhamentoSchema), createAcompanhamento);
acompanhamentoRouter.get('/:id', validate(IdParamSchema, 'params'), getAcompanhamento);
acompanhamentoRouter.put('/:id', validate(IdParamSchema, 'params'), validate(UpdateAcompanhamentoSchema), updateAcompanhamento);
acompanhamentoRouter.delete('/:id', validate(IdParamSchema, 'params'), deleteAcompanhamento);

export { acompanhamentoRouter };
