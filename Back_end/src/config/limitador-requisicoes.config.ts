import { criarLimitadorRequisicoes } from '../shared/middlewares/limitador-requisicoes.middleware';

export const limitadorGlobal = criarLimitadorRequisicoes(
  15 * 60 * 1000,
  100,
  'Muitas requisições deste IP, tente novamente em 15 minutos.'
);

export const limitadorAcessoLogin = criarLimitadorRequisicoes(
  15 * 60 * 1000,
  5,
  'Muitas tentativas de login, tente novamente em 15 minutos.'
);

export const limitadorCriacaoConta = criarLimitadorRequisicoes(
  60 * 60 * 1000,
  3,
  'Limite de registros atingido para este IP, tente novamente em 1 hora.'
);
