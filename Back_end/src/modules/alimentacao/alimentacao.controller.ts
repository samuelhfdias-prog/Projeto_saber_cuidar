import { Request, Response } from 'express';
import { alimentacaoService } from './alimentacao.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import type { CreateAlimentacaoDto, UpdateAlimentacaoDto } from './alimentacao.schema';

export async function listAlimentacoes(req: Request, res: Response): Promise<void> {
  const id_idoso = req.query['id_idoso'] ? Number(req.query['id_idoso']) : undefined;
  const id_cuidador = req.query['id_cuidador'] ? Number(req.query['id_cuidador']) : undefined;
  const regs = await alimentacaoService.findAll(id_idoso, id_cuidador);
  sendSuccess(res, regs, `${regs.length} registro(s) de alimentação encontrado(s).`);
}

export async function getAlimentacao(req: Request, res: Response): Promise<void> {
  const reg = await alimentacaoService.findById(Number(req.params['id']));
  sendSuccess(res, reg, 'Registro de alimentação carregado.');
}

export async function createAlimentacao(req: Request, res: Response): Promise<void> {
  const cuidadorId = req.cuidador!.sub;
  const reg = await alimentacaoService.create(req.body as CreateAlimentacaoDto, cuidadorId);
  sendSuccess(res, reg, 'Alimentação registrada com sucesso.', 201);
}

export async function updateAlimentacao(req: Request, res: Response): Promise<void> {
  const cuidadorId = req.cuidador!.sub;
  const reg = await alimentacaoService.update(Number(req.params['id']), req.body as UpdateAlimentacaoDto, cuidadorId);
  sendSuccess(res, reg, 'Registro de alimentação atualizado.');
}

export async function deleteAlimentacao(req: Request, res: Response): Promise<void> {
  const cuidadorId = req.cuidador!.sub;
  const result = await alimentacaoService.delete(Number(req.params['id']), cuidadorId);
  sendSuccess(res, result, 'Registro de alimentação removido.');
}
