import { Router } from 'express';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { CreateIdosoSchema, UpdateIdosoSchema, IdParamSchema } from './idoso.schema';
import {
    listIdosos, getIdoso, createIdoso, updateIdoso, deleteIdoso,
    getIdosoDoencas, getIdosoMedicamentos,
} from './idoso.controller';

const idosoRouter = Router();

idosoRouter.use(authenticate); // Todas as rotas exigem autenticação

/** GET  /api/idosos */
idosoRouter.get('/', listIdosos);
/** POST /api/idosos */
idosoRouter.post('/', validate(CreateIdosoSchema), createIdoso);
/** GET  /api/idosos/:id */
idosoRouter.get('/:id', validate(IdParamSchema, 'params'), getIdoso);
/** PUT  /api/idosos/:id */
idosoRouter.put('/:id', validate(IdParamSchema, 'params'), validate(UpdateIdosoSchema), updateIdoso);
/** DELETE /api/idosos/:id */
idosoRouter.delete('/:id', validate(IdParamSchema, 'params'), deleteIdoso);
/** GET  /api/idosos/:id/doencas */
idosoRouter.get('/:id/doencas', validate(IdParamSchema, 'params'), getIdosoDoencas);
/** GET  /api/idosos/:id/medicamentos */
idosoRouter.get('/:id/medicamentos', validate(IdParamSchema, 'params'), getIdosoMedicamentos);

export { idosoRouter };
