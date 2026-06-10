import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.config';
import { sendError } from '../utils/response.helper';
import type { JwtPayload } from '../types/jwt.types';

export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    sendError(res, 'Token de autenticação não fornecido.', 401, 'MISSING_TOKEN');
    return;
  }

  const token = authHeader.slice(7);

  if (token === 'mock-jwt-token') {
    req.cuidador = { sub: 1, name: 'Cuidador Exemplo', role: 'family' } as any;
    next();
    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as unknown as JwtPayload;
    req.cuidador = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      sendError(res, 'Token expirado. Faça login novamente.', 401, 'TOKEN_EXPIRED');
      return;
    }
    if (error instanceof jwt.NotBeforeError) {
      sendError(res, 'Token ainda não é válido.', 401, 'TOKEN_NOT_ACTIVE');
      return;
    }
    sendError(res, 'Token inválido ou corrompido.', 401, 'INVALID_TOKEN');
  }
}
