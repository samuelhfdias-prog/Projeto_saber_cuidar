import { Request, Response } from 'express';
import { relatorioService } from './relatorio.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import { GerarRelatorioDto } from './relatorio.schema';

export async function listarRelatorios(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const relatorios = await relatorioService.listar(idosoId);
  sendSuccess(res, relatorios, 'Relatórios recuperados com sucesso');
}

export async function gerarRelatorio(req: Request, res: Response) {
  const idosoId = parseInt(req.params.idosoId as string, 10);
  const cuidadorId = req.cuidador!.sub;
  const dto = req.body as GerarRelatorioDto;
  
  const relatorio = await relatorioService.gerarRelatorio(idosoId, cuidadorId, dto.tipo as 'Semanal' | 'Mensal');
  sendSuccess(res, relatorio, 'Relatório gerado com sucesso', 201);
}
