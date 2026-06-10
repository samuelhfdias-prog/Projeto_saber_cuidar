import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/database';
import { env } from '../../config/env.config';
import { registrarLogInfo, registrarLogAviso } from '../../shared/utils/logger';
import type { JwtPayload } from '../../shared/types/jwt.types';
import type { LoginDto, RegisterDto, UpdateProfileDto, RefreshDto } from './auth.schema';

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
  gerarRefreshToken(cuidadorId: number): string {
    return jwt.sign({ sub: cuidadorId }, env.JWT_SECRET, { expiresIn: '7d' });
  }

  validarRefreshToken(token: string): JwtPayload | null {
    try {
      const payload = jwt.verify(token, env.JWT_SECRET);
      if (typeof payload === 'string') return null;
      return payload as unknown as JwtPayload;
    } catch {
      return null;
    }
  }

  async login(dto: LoginDto): Promise<{ accessToken: string; token: string; refreshToken: string; cuidador: object; expiresIn: string }> {
    const cuidador = await prisma.cuidador.findUnique({
      where: { email: dto.email },
      select: { ...CUIDADOR_PUBLIC_FIELDS, senha_hash: true },
    });

    const senhaValida = cuidador
      ? await bcrypt.compare(dto.senha, cuidador.senha_hash)
      : await bcrypt.compare(dto.senha, '$2b$12$invalidhashfortimingprotection00000000000');

    if (!cuidador || !senhaValida) {
      registrarLogAviso(`Tentativa de login falha para o email: ${dto.email}`);
      throw new Error('INVALID_CREDENTIALS');
    }

    const payload: Omit<JwtPayload, 'iat' | 'exp'> = {
      sub: cuidador.id,
      email: cuidador.email,
      nome: cuidador.nome,
    };

    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '2h',
    });

    const refreshToken = this.gerarRefreshToken(cuidador.id);

    const { senha_hash: _removed, ...cuidadorPublico } = cuidador;
    void _removed;

    registrarLogInfo(`Login efetuado com sucesso: ${cuidador.email}`);

    return {
      accessToken: token,  // campo esperado pelo frontend
      token,               // mantido para retrocompatibilidade
      refreshToken,
      cuidador: cuidadorPublico,
      expiresIn: env.JWT_EXPIRES_IN,
    };
  }

  async refresh(dto: RefreshDto): Promise<{ accessToken: string; token: string; refreshToken: string }> {
    const payload = this.validarRefreshToken(dto.refreshToken);
    if (!payload) throw new Error('INVALID_CREDENTIALS');

    const cuidador = await prisma.cuidador.findUnique({ where: { id: payload.sub } });
    if (!cuidador) throw new Error('RESOURCE_NOT_FOUND');

    const novoToken = jwt.sign(
      { sub: cuidador.id, email: cuidador.email, nome: cuidador.nome },
      env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    const novoRefreshToken = this.gerarRefreshToken(cuidador.id);

    return { accessToken: novoToken, token: novoToken, refreshToken: novoRefreshToken };
  }

  async register(dto: RegisterDto): Promise<{ accessToken: string; token: string; refreshToken: string; cuidador: object; expiresIn: string }> {
    const existente = await prisma.cuidador.findFirst({
      where: { OR: [{ email: dto.email }, { cpf: dto.cpf }] },
      select: { id: true },
    });

    if (existente) {
      throw new Error('CUIDADOR_ALREADY_EXISTS');
    }

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

    if (dto.nome_idoso) {
      await prisma.idoso.create({
        data: {
          nome: dto.nome_idoso,
          cpf: Math.floor(Math.random() * 90000000000 + 10000000000).toString(),
          relacaoCuidadores: {
            create: {
              id_cuidador: novoCuidador.id,
              papel: 'titular'
            }
          }
        }
      });
    }

    const payload: Omit<JwtPayload, 'iat' | 'exp'> = {
      sub: novoCuidador.id,
      email: novoCuidador.email,
      nome: novoCuidador.nome,
    };

    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '2h',
    });

    const refreshToken = this.gerarRefreshToken(novoCuidador.id);

    registrarLogInfo(`Novo cuidador registrado com sucesso: ${novoCuidador.email}`);

    return {
      accessToken: token,
      token,
      refreshToken,
      cuidador: novoCuidador,
      expiresIn: env.JWT_EXPIRES_IN,
    };
  }

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
