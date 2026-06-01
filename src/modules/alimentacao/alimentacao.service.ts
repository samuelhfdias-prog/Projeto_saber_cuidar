import { prisma } from '../../config/database';
import type { CreateAlimentacaoDto, UpdateAlimentacaoDto } from './alimentacao.schema';

export class AlimentacaoService {
  async findAll(id_idoso?: number, id_cuidador?: number) {
    return prisma.alimentacao.findMany({
      where: {
        ...(id_idoso && { id_idoso }),
        ...(id_cuidador && { id_cuidador }),
      },
      include: {
        idoso: { select: { id: true, nome: true } },
        cuidador: { select: { id: true, nome: true } },
      },
      orderBy: { horario: 'asc' },
    });
  }

  async findById(id: number) {
    const reg = await prisma.alimentacao.findUnique({
      where: { id },
      include: {
        idoso: { select: { id: true, nome: true } },
        cuidador: { select: { id: true, nome: true } },
      },
    });
    if (!reg) throw new Error('RESOURCE_NOT_FOUND');
    return reg;
  }

  async create(dto: CreateAlimentacaoDto) {
    return prisma.alimentacao.create({
      data: {
        id_cuidador: dto.id_cuidador,
        id_idoso: dto.id_idoso,
        refeicao: dto.refeicao ?? null,
        horario: dto.horario ?? null,
        quantidade: dto.quantidade ?? null,
        observacao: dto.observacao ?? null,
      },
      include: {
        idoso: { select: { id: true, nome: true } },
        cuidador: { select: { id: true, nome: true } },
      },
    });
  }

  async update(id: number, dto: UpdateAlimentacaoDto) {
    await this.findById(id);
    return prisma.alimentacao.update({
      where: { id },
      data: {
        ...(dto.refeicao !== undefined && { refeicao: dto.refeicao }),
        ...(dto.horario !== undefined && { horario: dto.horario }),
        ...(dto.quantidade !== undefined && { quantidade: dto.quantidade }),
        ...(dto.observacao !== undefined && { observacao: dto.observacao }),
      },
    });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.alimentacao.delete({ where: { id } });
    return { id, deletado: true };
  }
}

export const alimentacaoService = new AlimentacaoService();
