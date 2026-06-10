import { Response } from 'express';
import { ApiErrorResponse } from '../types/api-response.type';

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Operação realizada com sucesso.',
  statusCode = 200
): void {
  // Enviamos "dados" (esperado pelo frontend Angular) e "data" (retrocompatibilidade)
  const body: any = { success: true, dados: data, data, message, timestamp: new Date().toISOString() };
  res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  message: string,
  statusCode = 500,
  errorCode?: string,
  details?: unknown
): void {
  const body: ApiErrorResponse = { success: false, message, errorCode, details, timestamp: new Date().toISOString() };
  res.status(statusCode).json(body);
}
