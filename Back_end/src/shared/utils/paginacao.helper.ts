import { RespostaPaginada } from '../types/paginacao.type';

export function calcularPaginacao(pagina: number, limite: number): { skip: number; take: number } {
  const skip = (pagina - 1) * limite;
  return { skip, take: limite };
}

export function formatarRespostaPaginada<T>(
  dados: T[],
  total: number,
  pagina: number,
  limite: number
): RespostaPaginada<T> {
  const paginas = Math.ceil(total / limite);
  return { dados, total, pagina, limite, paginas };
}
