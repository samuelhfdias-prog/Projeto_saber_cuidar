import { prisma } from '../../config/database';
import { feedService } from '../feed/feed.service';
import { CriarProntuarioDto } from './prontuario.schema';

export class ProntuarioService {
  async listar(idosoId: number, page: number = 1, limit: number = 20) {
    const offset = (page - 1) * limit;
    const [prontuarios, total] = await Promise.all([
      prisma.prontuarioDiario.findMany({
        where: { id_idoso: idosoId },
        orderBy: { data: 'desc' },
        skip: offset,
        take: limit,
        include: { cuidador: { select: { nome: true } } }
      }),
      prisma.prontuarioDiario.count({ where: { id_idoso: idosoId } })
    ]);
    
    return { prontuarios, total, page, limit };
  }

  async criar(idosoId: number, cuidadorId: number, dto: CriarProntuarioDto) {
    const prontuario = await prisma.prontuarioDiario.create({
      data: {
        id_idoso: idosoId,
        id_cuidador: cuidadorId,
        diurese: dto.diurese,
        evacuacao: dto.evacuacao,
        hidratacao: dto.hidratacao,
        observacao: dto.observacao,
        data: dto.data ? new Date(dto.data) : new Date(),
      }
    });

    await feedService.criarAtividade(idosoId, cuidadorId, 'prontuario', 'Adicionou um novo prontuário diário.');

    return prontuario;
  }
}

export const prontuarioService = new ProntuarioService();
