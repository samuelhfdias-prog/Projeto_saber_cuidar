import rateLimit from 'express-rate-limit';

export const criarLimitadorRequisicoes = (janelaTempoMs: number, limiteRequisicoes: number, mensagemRetorno: string) => {
  return rateLimit({
    windowMs: janelaTempoMs,
    max: limiteRequisicoes,
    message: { sucesso: false, mensagem: mensagemRetorno, codigo: 'LIMITE_REQUISICOES_EXCEDIDO' },
    standardHeaders: true,
    legacyHeaders: false,
  });
};
