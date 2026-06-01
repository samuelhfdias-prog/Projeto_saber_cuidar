
export interface JwtPayload {
  sub: number;
  email: string;
  nome: string;
  iat?: number;
  exp?: number;
}

declare global {
  namespace Express {
    interface Request {
      cuidador?: JwtPayload;
    }
  }
}
