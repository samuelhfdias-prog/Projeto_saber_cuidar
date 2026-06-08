import { logger } from '../../config/logger.config';

export const registrarLogInfo = (mensagem: string, meta?: any) => logger.info(mensagem, meta);
export const registrarLogErro = (mensagem: string, erro?: any) => logger.error(mensagem, erro);
export const registrarLogAviso = (mensagem: string, meta?: any) => logger.warn(mensagem, meta);
export const registrarLogDebug = (mensagem: string, meta?: any) => logger.debug(mensagem, meta);
