import { z } from 'zod';
import { validarForcaSenha } from '../../shared/utils/validador-senha';

const cpfSchema = z
  .string()
  .length(11, 'CPF deve ter exatamente 11 dígitos numéricos.')
  .regex(/^\d{11}$/, 'CPF deve conter apenas dígitos numéricos (sem pontos ou traços).');

const senhaSchema = z.string().superRefine((valor, contexto) => {
  const resultado = validarForcaSenha(valor);
  if (!resultado.valido) {
    resultado.erros.forEach(erro => {
      contexto.addIssue({
        code: z.ZodIssueCode.custom,
        message: erro,
      });
    });
  }
});

export const LoginSchema = z.object({
  email: z.string().email('Email inválido.').toLowerCase().trim(),
  senha: z.string().min(1, 'A senha é obrigatória.'),
});

export type LoginDto = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres.').max(100).trim(),
  email: z.string().email('Email inválido.').toLowerCase().trim(),
  senha: senhaSchema,
  cpf: cpfSchema,
  sexo: z.enum(['M', 'F', 'Outro']).optional(),
  telefone: z
    .string()
    .max(15, 'Telefone deve ter no máximo 15 caracteres.')
    .regex(/^[\d\s\-()]+$/, 'Formato de telefone inválido.')
    .optional(),
  turno: z.enum(['Manha', 'Tarde', 'Noturno', 'Integral']).optional(),
});

export const UpdateProfileSchema = z.object({
  nome: z.string().min(3).max(100).optional(),
  telefone: z.string().regex(/^\d{10,11}$/).optional().nullable(),
  turno: z.enum(['Dia', 'Noite', '24h']).optional().nullable(),
  sexo: z.enum(['Masculino', 'Feminino', 'Outro']).optional().nullable(),
});

export const RefreshSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token é obrigatório.'),
});

export type RefreshDto = z.infer<typeof RefreshSchema>;
