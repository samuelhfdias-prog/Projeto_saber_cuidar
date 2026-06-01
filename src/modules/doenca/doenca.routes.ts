import { Router } from 'express';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { CreateDoencaSchema, UpdateDoencaSchema, VincularDoencaSchema, IdParamSchema } from './doenca.schema';
import {
    listDoencas, getDoenca, createDoenca, updateDoenca, deleteDoenca,
    vincularDoenca, desvincularDoenca,
} from './doenca.controller';

const doencaRouter = Router();
doencaRouter.use(authenticate);
doencaRouter.get('/', listDoencas);
doencaRouter.post('/', validate(CreateDoencaSchema), createDoenca);
doencaRouter.get('/:id', validate(IdParamSchema, 'params'), getDoenca);
doencaRouter.put('/:id', validate(IdParamSchema, 'params'), validate(UpdateDoencaSchema), updateDoenca);
doencaRouter.delete('/:id', validate(IdParamSchema, 'params'), deleteDoenca);
doencaRouter.post('/vincular', validate(VincularDoencaSchema), vincularDoenca);
doencaRouter.delete('/vinculos/:id', validate(IdParamSchema, 'params'), desvincularDoenca);

export { doencaRouter };
