import { prisma } from '../../config/database';

export class FeedService {
  async listar(idosoId: number, page: number = 1, limit: number = 20) {
    const offset = (page - 1) * limit;
    const [atividades, total] = await Promise.all([
      prisma.feedAtividade.findMany({
        where: { id_idoso: idosoId },
        orderBy: { criado_em: 'desc' },
        skip: offset,
        take: limit,
        include: { cuidador: { select: { nome: true } } }
      }),
      prisma.feedAtividade.count({ where: { id_idoso: idosoId } })
    ]);
    
    return { atividades, total, page, limit };
  }

  async criarAtividade(id_idoso: number, id_cuidador: number, tipo: string, descricao: string) {
    return prisma.feedAtividade.create({
      data: {
        id_idoso,
        id_cuidador,
        tipo,
        descricao
      }
    });
  }
}

export const feedService = new FeedService();
