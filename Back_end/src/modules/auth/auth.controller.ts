import { Request, Response } from 'express';
import { authService } from './auth.service';
import { sendSuccess } from '../../shared/utils/response.helper';
import type { LoginDto, RegisterDto, UpdateProfileDto, RefreshDto } from './auth.schema';

export async function register(req: Request, res: Response): Promise<void> {
  const dto = req.body as RegisterDto;
  const cuidador = await authService.register(dto);
  sendSuccess(res, cuidador, 'Cuidador registrado com sucesso.', 201);
}

export async function login(req: Request, res: Response): Promise<void> {
  const dto = req.body as LoginDto;
  const result = await authService.login(dto);
  sendSuccess(res, result, 'Login realizado com sucesso.');
}

export async function getMe(req: Request, res: Response): Promise<void> {
  const cuidadorId = req.cuidador!.sub;
  const cuidador = await authService.getMe(cuidadorId);
  sendSuccess(res, cuidador, 'Perfil carregado com sucesso.');
}

export async function updateProfile(req: Request, res: Response): Promise<void> {
  const cuidadorId = req.cuidador!.sub;
  const dto = req.body as UpdateProfileDto;
  const atualizado = await authService.updateProfile(cuidadorId, dto);
  sendSuccess(res, atualizado, 'Perfil atualizado com sucesso.');
}

export async function refresh(req: Request, res: Response): Promise<void> {
  const dto = req.body as RefreshDto;
  const result = await authService.refresh(dto);
  sendSuccess(res, result, 'Token renovado com sucesso.');
}
