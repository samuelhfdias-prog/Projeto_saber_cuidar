export interface ParametrosPaginacao {
  pagina: number;
  limite: number;
  ordenacao?: string;
}

export interface RespostaPaginada<T> {
  dados: T[];
  total: number;
  pagina: number;
  limite: number;
  paginas: number;
}
