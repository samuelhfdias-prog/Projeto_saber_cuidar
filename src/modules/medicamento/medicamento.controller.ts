/**
 * @file src/modules/medicamento/medicamento.controller.ts
 */

import { Request, Response } from 'express';
import { medicamentoService } from './medicamento.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import type { CreateMedicamentoDto, UpdateMedicamentoDto } from './medicamento.schema';

export async function listMedicamentos(req: Request, res: Response): Promise<void> {
  const id_idoso = req.query['id_idoso'] ? Number(req.query['id_idoso']) : undefined;
  const meds = await medicamentoService.findAll(id_idoso);
  sendSuccess(res, meds, `${meds.length} medicamento(s) encontrado(s).`);
}

export async function getMedicamento(req: Request, res: Response): Promise<void> {
  const med = await medicamentoService.findById(Number(req.params['id']));
  sendSuccess(res, med, 'Medicamento carregado com sucesso.');
}

export async function createMedicamento(req: Request, res: Response): Promise<void> {
  const med = await medicamentoService.create(req.body as CreateMedicamentoDto);
  sendSuccess(res, med, 'Medicamento cadastrado com sucesso.', 201);
}

export async function updateMedicamento(req: Request, res: Response): Promise<void> {
  const med = await medicamentoService.update(Number(req.params['id']), req.body as UpdateMedicamentoDto);
  sendSuccess(res, med, 'Medicamento atualizado com sucesso.');
}

export async function deleteMedicamento(req: Request, res: Response): Promise<void> {
  const result = await medicamentoService.delete(Number(req.params['id']));
  sendSuccess(res, result, 'Medicamento removido com sucesso.');
}
