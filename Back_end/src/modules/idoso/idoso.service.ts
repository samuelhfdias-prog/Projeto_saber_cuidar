import { prisma } from '../../config/database';
import type { CreateIdosoDto, UpdateIdosoDto } from './idoso.schema';
import { calcularPaginacao, formatarRespostaPaginada } from '../../shared/utils/paginacao.helper';
import { feedService } from '../feed/feed.service';

export class IdosoService {
  async findAll(cuidadorId: number, pagina = 1, limite = 10) {
    const { skip, take } = calcularPaginacao(pagina, limite);

    const whereClause = { relacaoCuidadores: { some: { id_cuidador: cuidadorId } } };

    const [dados, total] = await Promise.all([
      prisma.idoso.findMany({
        skip,
        take,
        where: whereClause,
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
      prisma.idoso.count({ where: whereClause })
    ]);

    return formatarRespostaPaginada(dados, total, pagina, limite);
  }

  async findById(id: number, cuidadorId: number) {
    const idoso = await prisma.idoso.findFirst({
      where: { id, relacaoCuidadores: { some: { id_cuidador: cuidadorId } } },
      include: {
        doencas: {
          include: { doenca: true },
          orderBy: { data_diagnostico: 'desc' },
        },
        medicamentos: { orderBy: { horario: 'asc' } },
      },
    });

    if (!idoso) throw new Error('IDOSO_NOT_FOUND_OR_UNAUTHORIZED');
    return idoso;
  }

  async create(dto: CreateIdosoDto, cuidadorId: number) {
    const existente = await prisma.idoso.findUnique({ where: { cpf: dto.cpf }, select: { id: true } });
    if (existente) throw new Error('IDOSO_ALREADY_EXISTS');

    const novoIdoso = await prisma.idoso.create({
      data: {
        nome: dto.nome,
        cpf: dto.cpf,
        data_nascimento: dto.data_nascimento ? new Date(dto.data_nascimento) : null,
        sexo: dto.sexo ?? null,
        peso: dto.peso ?? null,
        condicoes_medicinais: dto.condicoes_medicinais ?? null,
        relacaoCuidadores: {
          create: {
            id_cuidador: cuidadorId,
            papel: 'titular'
          }
        }
      },
    });

    await feedService.criarAtividade(novoIdoso.id, cuidadorId, 'login', `Criou o perfil do idoso.`);

    return novoIdoso;
  }

  async update(id: number, dto: UpdateIdosoDto, cuidadorId: number) {
    await this.findById(id, cuidadorId);

    const atualizado = await prisma.idoso.update({
      where: { id },
      data: {
        ...(dto.nome !== undefined && { nome: dto.nome }),
        ...(dto.data_nascimento !== undefined && { data_nascimento: new Date(dto.data_nascimento) }),
        ...(dto.sexo !== undefined && { sexo: dto.sexo }),
        ...(dto.peso !== undefined && { peso: dto.peso }),
        ...(dto.condicoes_medicinais !== undefined && { condicoes_medicinais: dto.condicoes_medicinais }),
      },
    });

    await feedService.criarAtividade(id, cuidadorId, 'login', `Atualizou os dados do idoso.`);
    return atualizado;
  }

  async delete(id: number, cuidadorId: number) {
    const vinculo = await prisma.cuidadorIdoso.findUnique({
      where: { id_idoso_id_cuidador: { id_idoso: id, id_cuidador: cuidadorId } }
    });

    if (!vinculo || vinculo.papel !== 'titular') throw new Error('APENAS_TITULAR_PODE_DELETAR');

    await prisma.idoso.delete({ where: { id } });
    return { id, deletado: true };
  }

  async findDoencas(id: number, cuidadorId: number) {
    await this.findById(id, cuidadorId);
    return prisma.idosoDoenca.findMany({
      where: { id_idoso: id },
      include: { doenca: true },
      orderBy: { data_diagnostico: 'desc' },
    });
  }

  async findMedicamentos(id: number, cuidadorId: number) {
    await this.findById(id, cuidadorId);
    return prisma.medicamento.findMany({
      where: { id_idoso: id },
      orderBy: { horario: 'asc' },
    });
  }
}

export const idosoService = new IdosoService();
