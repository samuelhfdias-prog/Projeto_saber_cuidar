import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthService } from './auth.service';
import { prisma } from '../../config/database';

vi.mock('../../config/database', () => ({
  prisma: {
    cuidador: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  },
}));

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    vi.clearAllMocks();
  });

  describe('validarRefreshToken', () => {
    it('deve retornar null para token invalido', () => {
      const payload = authService.validarRefreshToken('invalid_token');
      expect(payload).toBeNull();
    });
  });

  describe('getMe', () => {
    it('deve retornar o cuidador se encontrado', async () => {
      const mockCuidador = { id: 1, nome: 'Teste', email: 'teste@email.com' };
      vi.mocked(prisma.cuidador.findUnique).mockResolvedValue(mockCuidador as any);

      const result = await authService.getMe(1);
      expect(result).toEqual(mockCuidador);
      expect(prisma.cuidador.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        select: expect.any(Object),
      });
    });

    it('deve lancar erro se nao encontrar', async () => {
      vi.mocked(prisma.cuidador.findUnique).mockResolvedValue(null);

      await expect(authService.getMe(999)).rejects.toThrow('RESOURCE_NOT_FOUND');
    });
  });
});
