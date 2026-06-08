import winston from 'winston';
import { env } from './env.config';

const formatosLog = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json()
);

const formatosTerminal = winston.format.combine(
  winston.format.colorize(),
  winston.format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${message} ${stack ? '\n' + stack : ''}`;
  })
);

export const logger = winston.createLogger({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: formatosLog,
  transports: [
    new winston.transports.File({ filename: 'logs/erros.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/todos.log' }),
  ],
});

if (env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: formatosTerminal,
    })
  );
}
