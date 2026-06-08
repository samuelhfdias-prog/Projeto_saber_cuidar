import { Request, Response } from 'express';
import { idosoService } from './idoso.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import type { CreateIdosoDto, UpdateIdosoDto, IdParamDto } from './idoso.schema';

export async function listIdosos(req: Request, res: Response): Promise<void> {
  const pagina = Number(req.query.pagina) || 1;
  const limite = Number(req.query.limite) || 10;
  const resposta = await idosoService.findAll(pagina, limite);
  sendSuccess(res, resposta, `Página ${resposta.pagina} de ${resposta.paginas} carregada.`);
}

export async function getIdoso(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as IdParamDto;
  const idoso = await idosoService.findById(Number(id));
  sendSuccess(res, idoso, 'Idoso carregado com sucesso.');
}

export async function createIdoso(req: Request, res: Response): Promise<void> {
  const dto = req.body as CreateIdosoDto;
  const idoso = await idosoService.create(dto);
  sendSuccess(res, idoso, 'Idoso cadastrado com sucesso.', 201);
}

export async function updateIdoso(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as IdParamDto;
  const dto = req.body as UpdateIdosoDto;
  const idoso = await idosoService.update(Number(id), dto);
  sendSuccess(res, idoso, 'Dados do idoso atualizados com sucesso.');
}

export async function deleteIdoso(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as IdParamDto;
  const result = await idosoService.delete(Number(id));
  sendSuccess(res, result, 'Idoso removido do sistema com sucesso.');
}

export async function getIdosoDoencas(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as IdParamDto;
  const doencas = await idosoService.findDoencas(Number(id));
  sendSuccess(res, doencas, `${doencas.length} diagnóstico(s) encontrado(s).`);
}

export async function getIdosoMedicamentos(req: Request, res: Response): Promise<void> {
  const { id } = req.params as unknown as IdParamDto;
  const meds = await idosoService.findMedicamentos(Number(id));
  sendSuccess(res, meds, `${meds.length} medicamento(s) encontrado(s).`);
}
