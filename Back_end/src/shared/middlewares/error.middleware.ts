import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response.helper';
import { env } from '../../config/env.config';
import { registrarLogErro } from '../utils/logger';

interface BusinessErrorConfig { status: number; message: string; code: string; }

const BUSINESS_ERRORS: Record<string, BusinessErrorConfig> = {
  INVALID_CREDENTIALS:    { status: 401, message: 'Email ou senha incorretos.',                               code: 'INVALID_CREDENTIALS' },
  CUIDADOR_ALREADY_EXISTS:{ status: 409, message: 'Já existe um cuidador com este CPF ou email.',             code: 'CUIDADOR_ALREADY_EXISTS' },
  IDOSO_ALREADY_EXISTS:   { status: 409, message: 'Já existe um idoso com este CPF.',                         code: 'IDOSO_ALREADY_EXISTS' },
  RESOURCE_NOT_FOUND:     { status: 404, message: 'Recurso não encontrado.',                                   code: 'NOT_FOUND' },
  FORBIDDEN:              { status: 403, message: 'Acesso negado.',                                            code: 'FORBIDDEN' },
  IDOSO_NOT_FOUND:        { status: 404, message: 'Idoso não encontrado.',                                     code: 'IDOSO_NOT_FOUND' },
  DOENCA_NOT_FOUND:       { status: 404, message: 'Doença não encontrada.',                                    code: 'DOENCA_NOT_FOUND' },
  MEDICAMENTO_NOT_FOUND:  { status: 404, message: 'Medicamento não encontrado.',                               code: 'MEDICAMENTO_NOT_FOUND' },
  UPLOAD_NOT_FOUND:       { status: 404, message: 'Arquivo de mídia não encontrado.',                          code: 'UPLOAD_NOT_FOUND' },
};

export function errorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  registrarLogErro('[CuidaBem Error]', {
    name: err.name,
    message: err.message,
    timestamp: new Date().toISOString(),
    ...(env.NODE_ENV === 'development' && { stack: err.stack }),
  });

  const businessError = BUSINESS_ERRORS[err.message];
  if (businessError) {
    sendError(res, businessError.message, businessError.status, businessError.code);
    return;
  }

  if (err.constructor.name === 'PrismaClientKnownRequestError') {
    const prismaErr = err as Error & { code?: string; meta?: { target?: string[] } };
    if (prismaErr.code === 'P2002') {
      sendError(res, `Conflito: "${prismaErr.meta?.target?.join(', ') ?? 'campo'}" já existe.`, 409, 'UNIQUE_CONSTRAINT_VIOLATION');
      return;
    }
    if (prismaErr.code === 'P2025') {
      sendError(res, 'Registro não encontrado.', 404, 'NOT_FOUND');
      return;
    }
    if (prismaErr.code === 'P2003') {
      sendError(res, 'Referência a registro inexistente.', 422, 'FOREIGN_KEY_CONSTRAINT');
      return;
    }
  }

  if (err.constructor.name === 'PrismaClientValidationError') {
    sendError(res, 'Dados incompatíveis com o esquema do banco.', 422, 'PRISMA_VALIDATION_ERROR');
    return;
  }

  if (err.constructor.name === 'MulterError') {
    const multerErr = err as Error & { code?: string };
    if (multerErr.code === 'LIMIT_FILE_SIZE') {
      sendError(res, `Arquivo muito grande. Máximo: ${env.MAX_FILE_SIZE_MB}MB.`, 413, 'FILE_TOO_LARGE');
      return;
    }
    if (multerErr.code === 'LIMIT_FILE_COUNT') {
      sendError(res, 'Máximo de 5 arquivos por envio.', 400, 'TOO_MANY_FILES');
      return;
    }
    sendError(res, `Erro no upload: ${err.message}`, 400, 'UPLOAD_ERROR');
    return;
  }

  if (err.message.startsWith('Tipo de arquivo não permitido:')) {
    sendError(res, err.message, 415, 'UNSUPPORTED_MEDIA_TYPE');
    return;
  }

  if (err.message.startsWith('CORS:')) {
    sendError(res, err.message, 403, 'CORS_BLOCKED');
    return;
  }

  sendError(
    res,
    env.NODE_ENV === 'development' ? `Erro interno: ${err.message}` : 'Erro interno do servidor.',
    500,
    'INTERNAL_SERVER_ERROR'
  );
}
