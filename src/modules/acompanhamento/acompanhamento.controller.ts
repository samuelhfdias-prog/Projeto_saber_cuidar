import { Request, Response } from 'express';
import { acompanhamentoService } from './acompanhamento.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import type { CreateAcompanhamentoDto, UpdateAcompanhamentoDto } from './acompanhamento.schema';

export async function listAcompanhamentos(req: Request, res: Response): Promise<void> {
  const id_cuidador = req.query['id_cuidador'] ? Number(req.query['id_cuidador']) : undefined;
  const regs = await acompanhamentoService.findAll(id_cuidador);
  sendSuccess(res, regs, `${regs.length} registro(s) de acompanhamento encontrado(s).`);
}

export async function getAcompanhamento(req: Request, res: Response): Promise<void> {
  const reg = await acompanhamentoService.findById(Number(req.params['id']));
  sendSuccess(res, reg, 'Registro de acompanhamento carregado.');
}

export async function createAcompanhamento(req: Request, res: Response): Promise<void> {
  const reg = await acompanhamentoService.create(req.body as CreateAcompanhamentoDto);
  sendSuccess(res, reg, 'Acompanhamento registrado com sucesso.', 201);
}

export async function updateAcompanhamento(req: Request, res: Response): Promise<void> {
  const reg = await acompanhamentoService.update(Number(req.params['id']), req.body as UpdateAcompanhamentoDto);
  sendSuccess(res, reg, 'Acompanhamento atualizado com sucesso.');
}

export async function deleteAcompanhamento(req: Request, res: Response): Promise<void> {
  const result = await acompanhamentoService.delete(Number(req.params['id']));
  sendSuccess(res, result, 'Registro de acompanhamento removido.');
}
