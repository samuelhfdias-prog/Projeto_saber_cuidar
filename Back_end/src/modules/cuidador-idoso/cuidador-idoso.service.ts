import { prisma } from '../../config/database';
import { feedService } from '../feed/feed.service';

export class CuidadorIdosoService {
  async listarCuidadores(idosoId: number) {
    const vinculos = await prisma.cuidadorIdoso.findMany({
      where: { id_idoso: idosoId },
      include: {
        cuidador: {
          select: { id: true, nome: true, email: true, telefone: true }
        }
      }
    });
    return vinculos;
  }

  async vincularCuidador(idosoId: number, email: string, solicitanteId: number) {
    const cuidador = await prisma.cuidador.findUnique({ where: { email } });
    if (!cuidador) throw new Error('CUIDADOR_NAO_ENCONTRADO');

    const vinculoExistente = await prisma.cuidadorIdoso.findUnique({
      where: { id_idoso_id_cuidador: { id_idoso: idosoId, id_cuidador: cuidador.id } }
    });

    if (vinculoExistente) throw new Error('CUIDADOR_JA_VINCULADO');

    const novoVinculo = await prisma.cuidadorIdoso.create({
      data: {
        id_idoso: idosoId,
        id_cuidador: cuidador.id,
        papel: 'cuidador'
      }
    });

    await feedService.criarAtividade(idosoId, solicitanteId, 'login', `Adicionou o cuidador ${cuidador.nome} ao idoso.`);

    return novoVinculo;
  }

  async desvincularCuidador(idosoId: number, cuidadorId: number, solicitanteId: number) {
    const vinculo = await prisma.cuidadorIdoso.findUnique({
      where: { id_idoso_id_cuidador: { id_idoso: idosoId, id_cuidador: cuidadorId } }
    });

    if (!vinculo) throw new Error('VINCULO_NAO_ENCONTRADO');
    if (vinculo.papel === 'titular') throw new Error('TITULAR_NAO_PODE_SER_REMOVIDO');

    await prisma.cuidadorIdoso.delete({
      where: { id_idoso_id_cuidador: { id_idoso: idosoId, id_cuidador: cuidadorId } }
    });

    await feedService.criarAtividade(idosoId, solicitanteId, 'login', `Removeu um cuidador do idoso.`);
  }
}

export const cuidadorIdosoService = new CuidadorIdosoService();
