import { prisma } from '../../config/database';
import type { CreateDoencaDto, UpdateDoencaDto, VincularDoencaDto } from './doenca.schema';

export class DoencaService {
  async findAll() {
    return prisma.doenca.findMany({
      include: { _count: { select: { idosos: true } } },
      orderBy: { nome_doenca: 'asc' },
    });
  }

  async findById(id: number) {
    const doenca = await prisma.doenca.findUnique({
      where: { id },
      include: {
        idosos: { include: { idoso: { select: { id: true, nome: true, cpf: true } } } },
      },
    });
    if (!doenca) throw new Error('DOENCA_NOT_FOUND');
    return doenca;
  }

  async create(dto: CreateDoencaDto) {
    return prisma.doenca.create({ data: dto });
  }

  async update(id: number, dto: UpdateDoencaDto) {
    await this.findById(id);
    return prisma.doenca.update({ where: { id }, data: dto });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.doenca.delete({ where: { id } });
    return { id, deletado: true };
  }

  /** Vincula uma doença a um idoso (tabela idoso_doenca). */
  async vincularIdoso(dto: VincularDoencaDto) {
    // Valida existência de ambos os registros
    const idoso = await prisma.idoso.findUnique({ where: { id: dto.id_idoso }, select: { id: true } });
    if (!idoso) throw new Error('IDOSO_NOT_FOUND');

    const doenca = await prisma.doenca.findUnique({ where: { id: dto.id_doenca }, select: { id: true } });
    if (!doenca) throw new Error('DOENCA_NOT_FOUND');

    return prisma.idosoDoenca.create({
      data: {
        id_idoso: dto.id_idoso,
        id_doenca: dto.id_doenca,
        data_diagnostico: dto.data_diagnostico ? new Date(dto.data_diagnostico) : null,
        observacao: dto.observacao ?? null,
      },
      include: { doenca: true, idoso: { select: { id: true, nome: true } } },
    });
  }

  /** Remove um vínculo diagnóstico pelo ID do registro idoso_doenca. */
  async desvincularIdoso(vinculoId: number) {
    const vinculo = await prisma.idosoDoenca.findUnique({ where: { id: vinculoId } });
    if (!vinculo) throw new Error('RESOURCE_NOT_FOUND');
    await prisma.idosoDoenca.delete({ where: { id: vinculoId } });
    return { id: vinculoId, desvinculado: true };
  }
}

export const doencaService = new DoencaService();
