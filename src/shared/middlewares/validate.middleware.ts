import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { sendError } from '../utils/response.helper';

type ValidateTarget = 'body' | 'params' | 'query';

export function validate(schema: ZodSchema, target: ValidateTarget = 'body') {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const details = result.error.issues.map((issue) => ({
        campo: issue.path.join('.') || 'raiz',
        mensagem: issue.message,
        codigo: issue.code,
      }));
      sendError(res, `Dados inválidos. ${details.length} campo(s) com erro.`, 400, 'VALIDATION_ERROR', details);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    req[target] = result.data as typeof req[typeof target];
    next();
  };
}
