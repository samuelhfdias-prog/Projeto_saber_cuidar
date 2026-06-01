import { Request, Response } from 'express';
import { doencaService } from './doenca.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import type { CreateDoencaDto, UpdateDoencaDto, VincularDoencaDto } from './doenca.schema';

export async function listDoencas(_req: Request, res: Response): Promise<void> {
  const doencas = await doencaService.findAll();
  sendSuccess(res, doencas, `${doencas.length} doença(s) encontrada(s).`);
}

export async function getDoenca(req: Request, res: Response): Promise<void> {
  const doenca = await doencaService.findById(Number(req.params['id']));
  sendSuccess(res, doenca, 'Doença carregada com sucesso.');
}

export async function createDoenca(req: Request, res: Response): Promise<void> {
  const doenca = await doencaService.create(req.body as CreateDoencaDto);
  sendSuccess(res, doenca, 'Doença cadastrada com sucesso.', 201);
}

export async function updateDoenca(req: Request, res: Response): Promise<void> {
  const doenca = await doencaService.update(Number(req.params['id']), req.body as UpdateDoencaDto);
  sendSuccess(res, doenca, 'Doença atualizada com sucesso.');
}

export async function deleteDoenca(req: Request, res: Response): Promise<void> {
  const result = await doencaService.delete(Number(req.params['id']));
  sendSuccess(res, result, 'Doença removida do catálogo.');
}

export async function vincularDoenca(req: Request, res: Response): Promise<void> {
  const vinculo = await doencaService.vincularIdoso(req.body as VincularDoencaDto);
  sendSuccess(res, vinculo, 'Diagnóstico vinculado ao idoso com sucesso.', 201);
}

export async function desvincularDoenca(req: Request, res: Response): Promise<void> {
  const result = await doencaService.desvincularIdoso(Number(req.params['id']));
  sendSuccess(res, result, 'Vínculo diagnóstico removido com sucesso.');
}
