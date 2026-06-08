import { Request, Response, NextFunction } from 'express';
import { registrarLogInfo, registrarLogAviso, registrarLogErro } from './logger';

export const middlewareRegistrarRequisicao = (req: Request, res: Response, next: NextFunction) => {
  const inicio = Date.now();
  
  res.on('finish', () => {
    const duracao = Date.now() - inicio;
    const mensagem = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duracao}ms`;
    
    if (res.statusCode >= 500) {
      registrarLogErro(mensagem);
    } else if (res.statusCode >= 400) {
      registrarLogAviso(mensagem);
    } else {
      registrarLogInfo(mensagem);
    }
  });

  next();
};
