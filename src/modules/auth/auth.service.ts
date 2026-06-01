import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/database';
import { env } from '../../config/env.config';
import type { JwtPayload } from '../../shared/types/jwt.types';
import type { LoginDto, RegisterDto, UpdateProfileDto } from './auth.schema';

/** Projeção padrão — exclui senha_hash de todos os retornos. */
const CUIDADOR_PUBLIC_FIELDS = {
  id: true,
  nome: true,
  email: true,
  cpf: true,
  sexo: true,
  telefone: true,
  turno: true,
  criado_em: true,
  atualizado_em: true,
} as const;

export class AuthService {
  /**
   * Autentica um cuidador e retorna o JWT + dados públicos.
   * SEGURANÇA: Lança 'INVALID_CREDENTIALS' sem especificar se foi o email ou a senha.
   */
  async login(dto: LoginDto): Promise<{ token: string; cuidador: object; expiresIn: string }> {
    // Busca incluindo senha_hash para comparação (único local onde é recuperada)
    const cuidador = await prisma.cuidador.findUnique({
      where: { email: dto.email },
      select: { ...CUIDADOR_PUBLIC_FIELDS, senha_hash: true },
    });

    // Validação em tempo constante — bcrypt.compare é resistente a timing attacks
    // Se o usuário não existe, usamos um hash dummy para manter o tempo de resposta
    const senhaValida = cuidador
      ? await bcrypt.compare(dto.senha, cuidador.senha_hash)
      : await bcrypt.compare(dto.senha, '$2b$12$invalidhashfortimingprotection00000000000');

    if (!cuidador || !senhaValida) {
      throw new Error('INVALID_CREDENTIALS');
    }

    // Assina o JWT com payload mínimo necessário
    const payload: Omit<JwtPayload, 'iat' | 'exp'> = {
      sub: cuidador.id,
      email: cuidador.email,
      nome: cuidador.nome,
    };

    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '2h', // Fixado em 2h conforme requisito de segurança
    });

    // Remove senha_hash do objeto de retorno
    const { senha_hash: _removed, ...cuidadorPublico } = cuidador;
    void _removed; // Suprime warning de variável não utilizada

    return {
      token,
      cuidador: cuidadorPublico,
      expiresIn: env.JWT_EXPIRES_IN,
    };
  }

  /**
   * Registra um novo cuidador com senha hasheada via Bcrypt.
   */
  async register(dto: RegisterDto): Promise<object> {
    // Verifica duplicidade de email OU cpf
    const existente = await prisma.cuidador.findFirst({
      where: { OR: [{ email: dto.email }, { cpf: dto.cpf }] },
      select: { id: true },
    });

    if (existente) {
      throw new Error('CUIDADOR_ALREADY_EXISTS');
    }

    // Hash da senha com salt de 12 rounds (custo computacional alto por design)
    const senha_hash = await bcrypt.hash(dto.senha, env.BCRYPT_SALT_ROUNDS);

    const novoCuidador = await prisma.cuidador.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        senha_hash,
        cpf: dto.cpf,
        sexo: dto.sexo ?? null,
        telefone: dto.telefone ?? null,
        turno: dto.turno ?? null,
      },
      select: CUIDADOR_PUBLIC_FIELDS,
    });

    return novoCuidador;
  }

  /**
   * Retorna o perfil público do cuidador autenticado.
   */
  async getMe(cuidadorId: number): Promise<object> {
    const cuidador = await prisma.cuidador.findUnique({
      where: { id: cuidadorId },
      select: CUIDADOR_PUBLIC_FIELDS,
    });

    if (!cuidador) {
      throw new Error('RESOURCE_NOT_FOUND');
    }

    return cuidador;
  }

  /**
   * Atualiza o perfil do cuidador autenticado (dados não-sensíveis).
   */
  async updateProfile(cuidadorId: number, dto: UpdateProfileDto): Promise<object> {
    const atualizado = await prisma.cuidador.update({
      where: { id: cuidadorId },
      data: {
        ...(dto.nome !== undefined && { nome: dto.nome }),
        ...(dto.telefone !== undefined && { telefone: dto.telefone }),
        ...(dto.turno !== undefined && { turno: dto.turno }),
        ...(dto.sexo !== undefined && { sexo: dto.sexo }),
      },
      select: CUIDADOR_PUBLIC_FIELDS,
    });

    return atualizado;
  }
}

export const authService = new AuthService();
