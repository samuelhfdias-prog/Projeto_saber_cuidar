import { Request, Response } from 'express';
import { feedService } from './feed.service';
import { sendSuccess } from '../../shared/utils/response.helper';

export async function listarFeed(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 20;

  const result = await feedService.listar(idosoId, page, limit);
  sendSuccess(res, result, 'Feed recuperado com sucesso');
}
