import { prisma } from '../../config/database';
import type { CreateMedicamentoDto, UpdateMedicamentoDto } from './medicamento.schema';

export class MedicamentoService {
  async findAll(id_idoso?: number) {
    return prisma.medicamento.findMany({
      where: id_idoso ? { id_idoso } : undefined,
      include: { idoso: { select: { id: true, nome: true } } },
      orderBy: { horario: 'asc' },
    });
  }

  async findById(id: number) {
    const med = await prisma.medicamento.findUnique({
      where: { id },
      include: { idoso: { select: { id: true, nome: true } } },
    });
    if (!med) throw new Error('MEDICAMENTO_NOT_FOUND');
    return med;
  }

  async create(dto: CreateMedicamentoDto) {
    const idoso = await prisma.idoso.findUnique({ where: { id: dto.id_idoso }, select: { id: true } });
    if (!idoso) throw new Error('IDOSO_NOT_FOUND');

    return prisma.medicamento.create({
      data: {
        id_idoso: dto.id_idoso,
        nome_medicamento: dto.nome_medicamento,
        via_administracao: dto.via_administracao ?? null,
        frequencia: dto.frequencia ?? null,
        dosagem: dto.dosagem ?? null,
        horario: dto.horario ?? null,
        observacao: dto.observacao ?? null,
      },
      include: { idoso: { select: { id: true, nome: true } } },
    });
  }

  async update(id: number, dto: UpdateMedicamentoDto) {
    await this.findById(id);
    return prisma.medicamento.update({
      where: { id },
      data: {
        ...(dto.nome_medicamento !== undefined && { nome_medicamento: dto.nome_medicamento }),
        ...(dto.via_administracao !== undefined && { via_administracao: dto.via_administracao }),
        ...(dto.frequencia !== undefined && { frequencia: dto.frequencia }),
        ...(dto.dosagem !== undefined && { dosagem: dto.dosagem }),
        ...(dto.horario !== undefined && { horario: dto.horario }),
        ...(dto.observacao !== undefined && { observacao: dto.observacao }),
      },
    });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.medicamento.delete({ where: { id } });
    return { id, deletado: true };
  }
}

export const medicamentoService = new MedicamentoService();
