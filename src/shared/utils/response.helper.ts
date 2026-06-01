import { Response } from 'express';
import { ApiResponse, ApiErrorResponse } from '../types/api-response.type';

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Operação realizada com sucesso.',
  statusCode = 200
): void {
  const body: ApiResponse<T> = { success: true, data, message, timestamp: new Date().toISOString() };
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
