import { Request, Response } from 'express';
import { cuidadorIdosoService } from './cuidador-idoso.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import { VincularCuidadorDto } from './cuidador-idoso.schema';

export async function listarCuidadores(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const cuidadores = await cuidadorIdosoService.listarCuidadores(idosoId);
  sendSuccess(res, cuidadores, 'Cuidadores recuperados com sucesso');
}

export async function vincularCuidador(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const solicitanteId = req.cuidador!.sub;
  const dto = req.body as VincularCuidadorDto;
  
  const vinculo = await cuidadorIdosoService.vincularCuidador(idosoId, dto.email, solicitanteId);
  sendSuccess(res, vinculo, 'Cuidador vinculado com sucesso', 201);
}

export async function desvincularCuidador(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const cuidadorId = parseInt(req.params.cuidadorId as string, 10);
  const solicitanteId = req.cuidador!.sub;

  await cuidadorIdosoService.desvincularCuidador(idosoId, cuidadorId, solicitanteId);
  sendSuccess(res, null, 'Cuidador desvinculado com sucesso');
}
