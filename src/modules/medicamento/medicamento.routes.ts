/**
 * @file src/modules/medicamento/medicamento.routes.ts
 */

import { Router } from 'express';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { CreateMedicamentoSchema, UpdateMedicamentoSchema, IdParamSchema } from './medicamento.schema';
import { listMedicamentos, getMedicamento, createMedicamento, updateMedicamento, deleteMedicamento } from './medicamento.controller';

const medicamentoRouter = Router();
medicamentoRouter.use(authenticate);

medicamentoRouter.get('/', listMedicamentos);
medicamentoRouter.post('/', validate(CreateMedicamentoSchema), createMedicamento);
medicamentoRouter.get('/:id', validate(IdParamSchema, 'params'), getMedicamento);
medicamentoRouter.put('/:id', validate(IdParamSchema, 'params'), validate(UpdateMedicamentoSchema), updateMedicamento);
medicamentoRouter.delete('/:id', validate(IdParamSchema, 'params'), deleteMedicamento);

export { medicamentoRouter };
