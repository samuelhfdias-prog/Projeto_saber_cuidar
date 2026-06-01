import { prisma } from '../../config/database';
import type { CreateAcompanhamentoDto, UpdateAcompanhamentoDto } from './acompanhamento.schema';

export class AcompanhamentoService {
  async findAll(id_cuidador?: number) {
    return prisma.acompanhamentoCuidador.findMany({
      where: id_cuidador ? { id_cuidador } : undefined,
      include: { cuidador: { select: { id: true, nome: true } } },
      orderBy: { dia: 'desc' },
    });
  }

  async findById(id: number) {
    const reg = await prisma.acompanhamentoCuidador.findUnique({
      where: { id },
      include: { cuidador: { select: { id: true, nome: true } } },
    });
    if (!reg) throw new Error('RESOURCE_NOT_FOUND');
    return reg;
  }

  async create(dto: CreateAcompanhamentoDto) {
    const cuidador = await prisma.cuidador.findUnique({ where: { id: dto.id_cuidador }, select: { id: true } });
    if (!cuidador) throw new Error('RESOURCE_NOT_FOUND');

    return prisma.acompanhamentoCuidador.create({
      data: {
        id_cuidador: dto.id_cuidador,
        humor: dto.humor ?? null,
        sono: dto.sono ?? null,
        nivel_energia: dto.nivel_energia ?? null,
        observacao: dto.observacao ?? null,
        dia: dto.dia ? new Date(dto.dia) : new Date(),
      },
      include: { cuidador: { select: { id: true, nome: true } } },
    });
  }

  async update(id: number, dto: UpdateAcompanhamentoDto) {
    await this.findById(id);
    return prisma.acompanhamentoCuidador.update({
      where: { id },
      data: {
        ...(dto.humor !== undefined && { humor: dto.humor }),
        ...(dto.sono !== undefined && { sono: dto.sono }),
        ...(dto.nivel_energia !== undefined && { nivel_energia: dto.nivel_energia }),
        ...(dto.observacao !== undefined && { observacao: dto.observacao }),
        ...(dto.dia !== undefined && { dia: new Date(dto.dia) }),
      },
    });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.acompanhamentoCuidador.delete({ where: { id } });
    return { id, deletado: true };
  }
}

export const acompanhamentoService = new AcompanhamentoService();
