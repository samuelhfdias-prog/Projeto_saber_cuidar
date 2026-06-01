/**
 * @file prisma/seed.ts
 * @description Seed inicial do banco de dados CuidaBem.
 * Popula um cuidador administrador e um idoso de exemplo para desenvolvimento.
 *
 * Execução: npm run db:seed
 */

import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('🌱 Iniciando seed do banco de dados CuidaBem...\n');

  // ── 1. Cuidador Administrador ───────────────────────────────────────────
  const senhaHash = await bcrypt.hash('Admin@123456', 12);

  const cuidador = await prisma.cuidador.upsert({
    where: { email: 'admin@cuidabem.com.br' },
    update: {},
    create: {
      nome: 'Administrador CuidaBem',
      email: 'admin@cuidabem.com.br',
      senha_hash: senhaHash,
      cpf: '00000000000',
      sexo: 'Outro',
      telefone: '11999999999',
      turno: 'Integral',
    },
  });
  console.log(`✅ Cuidador criado: ${cuidador.nome} (${cuidador.email})`);

  // ── 2. Idoso de Exemplo ─────────────────────────────────────────────────
  const idoso = await prisma.idoso.upsert({
    where: { cpf: '12345678901' },
    update: {},
    create: {
      nome: 'Maria Aparecida Santos',
      data_nascimento: new Date('1946-03-15'),
      cpf: '12345678901',
      sexo: 'F',
      peso: 62.5,
      condicoes_medicinais: 'Hipertensão Arterial, Diabetes Tipo 2, Osteoporose',
    },
  });
  console.log(`✅ Idoso criado: ${idoso.nome} (CPF: ${idoso.cpf})`);

  // ── 3. Doenças CID-10 ───────────────────────────────────────────────────
  const hipertensao = await prisma.doenca.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome_doenca: 'Hipertensão Arterial Essencial',
      codigo_cid: 'I10',
      categoria: 'Cardiovascular',
    },
  });

  const diabetes = await prisma.doenca.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nome_doenca: 'Diabetes Mellitus Tipo 2',
      codigo_cid: 'E11',
      categoria: 'Metabólica',
    },
  });
  console.log(`✅ Doenças cadastradas: ${hipertensao.nome_doenca}, ${diabetes.nome_doenca}`);

  // ── 4. Vínculos Idoso-Doença ────────────────────────────────────────────
  await prisma.idosoDoenca.createMany({
    data: [
      {
        id_idoso: idoso.id,
        id_doenca: hipertensao.id,
        data_diagnostico: new Date('2018-06-10'),
        observacao: 'Controlada com Losartana 50mg.',
      },
      {
        id_idoso: idoso.id,
        id_doenca: diabetes.id,
        data_diagnostico: new Date('2020-02-20'),
        observacao: 'HbA1c última medição: 7,2%. Dieta hipoglicêmica.',
      },
    ],
    skipDuplicates: true,
  });
  console.log('✅ Vínculos idoso-doença criados.');

  // ── 5. Medicamentos ──────────────────────────────────────────────────────
  await prisma.medicamento.createMany({
    data: [
      {
        id_idoso: idoso.id,
        nome_medicamento: 'Losartana Potássica',
        via_administracao: 'Oral',
        frequencia: '1x ao dia',
        dosagem: '50mg',
        horario: '08:00',
        observacao: 'Tomar em jejum.',
      },
      {
        id_idoso: idoso.id,
        nome_medicamento: 'Metformina',
        via_administracao: 'Oral',
        frequencia: '2x ao dia',
        dosagem: '500mg',
        horario: '12:00',
        observacao: 'Tomar com refeição para evitar náusea.',
      },
    ],
    skipDuplicates: true,
  });
  console.log('✅ Medicamentos cadastrados.');

  console.log('\n🎉 Seed concluído com sucesso!');
  console.log('─────────────────────────────────────────────');
  console.log('📧 Login:  admin@cuidabem.com.br');
  console.log('🔑 Senha:  Admin@123456');
  console.log('─────────────────────────────────────────────\n');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
