import { prisma } from '../../config/database';
import { feedService } from '../feed/feed.service';
import { subDays } from 'date-fns';

export class RelatorioService {
  async listar(idosoId: number) {
    return prisma.relatorio.findMany({
      where: { id_idoso: idosoId },
      orderBy: { criado_em: 'desc' },
      include: {
        cuidador: { select: { nome: true } }
      }
    });
  }

  async gerarRelatorio(idosoId: number, cuidadorId: number, tipo: 'Semanal' | 'Mensal') {
    const dataFim = new Date();
    const dataInicio = tipo === 'Semanal' ? subDays(dataFim, 7) : subDays(dataFim, 30);

    const prontuarios = await prisma.prontuarioDiario.findMany({
      where: { id_idoso: idosoId, data: { gte: dataInicio, lte: dataFim } }
    });

    let alteracoes = 0;
    prontuarios.forEach(p => {
      if (p.diurese !== 'Normal' && p.diurese !== 'Adequada') alteracoes++;
      if (p.evacuacao !== 'Normal' && p.evacuacao !== 'Adequada') alteracoes++;
    });

    let statusGeral = 'Bom';
    if (alteracoes > 5) statusGeral = 'Crítico';
    else if (alteracoes > 2) statusGeral = 'Atenção';
    else if (alteracoes > 0) statusGeral = 'Regular';

    const resumoGeral = `Foram registrados ${prontuarios.length} prontuários no período. Tivemos ${alteracoes} alterações significativas nas eliminações fisiológicas.`;

    const relatorio = await prisma.relatorio.create({
      data: {
        id_idoso: idosoId,
        id_cuidador: cuidadorId,
        tipo,
        data_inicio: dataInicio,
        data_fim: dataFim,
        resumo_geral: resumoGeral,
        status_geral: statusGeral
      }
    });

    await feedService.criarAtividade(idosoId, cuidadorId, 'relatorio', `Gerou relatório ${tipo}. Status: ${statusGeral}.`);

    return relatorio;
  }
}

export const relatorioService = new RelatorioService();
