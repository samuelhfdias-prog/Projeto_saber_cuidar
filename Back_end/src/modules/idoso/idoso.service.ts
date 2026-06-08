import { prisma } from '../../config/database';
import type { CreateIdosoDto, UpdateIdosoDto } from './idoso.schema';
import { calcularPaginacao, formatarRespostaPaginada } from '../../shared/utils/paginacao.helper';

export class IdosoService {
  async findAll(pagina = 1, limite = 10) {
    const { skip, take } = calcularPaginacao(pagina, limite);

    const [dados, total] = await Promise.all([
      prisma.idoso.findMany({
        skip,
        take,
        select: {
          id: true,
          nome: true,
          data_nascimento: true,
          cpf: true,
          sexo: true,
          peso: true,
          condicoes_medicinais: true,
          criado_em: true,
          atualizado_em: true,
          _count: { select: { doencas: true, medicamentos: true } },
        },
        orderBy: { nome: 'asc' },
      }),
      prisma.idoso.count()
    ]);

    return formatarRespostaPaginada(dados, total, pagina, limite);
  }

  async findById(id: number) {
    const idoso = await prisma.idoso.findUnique({
      where: { id },
      include: {
        doencas: {
          include: { doenca: true },
          orderBy: { data_diagnostico: 'desc' },
        },
        medicamentos: { orderBy: { horario: 'asc' } },
      },
    });

    if (!idoso) throw new Error('IDOSO_NOT_FOUND');
    return idoso;
  }

  async create(dto: CreateIdosoDto) {
    const existente = await prisma.idoso.findUnique({ where: { cpf: dto.cpf }, select: { id: true } });
    if (existente) throw new Error('IDOSO_ALREADY_EXISTS');

    return prisma.idoso.create({
      data: {
        nome: dto.nome,
        cpf: dto.cpf,
        data_nascimento: dto.data_nascimento ? new Date(dto.data_nascimento) : null,
        sexo: dto.sexo ?? null,
        peso: dto.peso ?? null,
        condicoes_medicinais: dto.condicoes_medicinais ?? null,
      },
    });
  }

  async update(id: number, dto: UpdateIdosoDto) {
    await this.findById(id);
    return prisma.idoso.update({
      where: { id },
      data: {
        ...(dto.nome !== undefined && { nome: dto.nome }),
        ...(dto.data_nascimento !== undefined && { data_nascimento: new Date(dto.data_nascimento) }),
        ...(dto.sexo !== undefined && { sexo: dto.sexo }),
        ...(dto.peso !== undefined && { peso: dto.peso }),
        ...(dto.condicoes_medicinais !== undefined && { condicoes_medicinais: dto.condicoes_medicinais }),
      },
    });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.idoso.delete({ where: { id } });
    return { id, deletado: true };
  }

  async findDoencas(id: number) {
    await this.findById(id);
    return prisma.idosoDoenca.findMany({
      where: { id_idoso: id },
      include: { doenca: true },
      orderBy: { data_diagnostico: 'desc' },
    });
  }

  async findMedicamentos(id: number) {
    await this.findById(id);
    return prisma.medicamento.findMany({
      where: { id_idoso: id },
      orderBy: { horario: 'asc' },
    });
  }
}

export const idosoService = new IdosoService();
