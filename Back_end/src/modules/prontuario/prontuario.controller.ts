import { Request, Response } from 'express';
import { prontuarioService } from './prontuario.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import { CriarProntuarioDto } from './prontuario.schema';

export async function listarProntuarios(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 20;

  const result = await prontuarioService.listar(idosoId, page, limit);
  sendSuccess(res, result, 'Prontuários recuperados com sucesso');
}

export async function criarProntuario(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const cuidadorId = req.cuidador!.sub;
  const dto = req.body as CriarProntuarioDto;
  
  const prontuario = await prontuarioService.criar(idosoId, cuidadorId, dto);
  sendSuccess(res, prontuario, 'Prontuário registrado com sucesso', 201);
}
