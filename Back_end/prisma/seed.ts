import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('Iniciando seed vazio...');
  console.log('Seed concluído com sucesso. Nenhum mock foi inserido.');
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    throw e;
  })
  .finally(() => {
    void prisma.$disconnect();
  });
