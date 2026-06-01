import { PrismaClient } from '@prisma/client';
import { env } from './env.config';

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
  errorFormat: env.NODE_ENV === 'development' ? 'pretty' : 'minimal',
});

export async function connectDatabase(): Promise<void> {
  await prisma.$connect();
  console.log('✅ [Prisma] Conexão com MySQL estabelecida.');
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  console.log('🔌 [Prisma] Conexão encerrada.');
}
