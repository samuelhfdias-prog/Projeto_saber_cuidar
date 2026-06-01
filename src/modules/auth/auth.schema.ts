import { z } from 'zod';
const cpfSchema = z
  .string()
  .length(11, 'CPF deve ter exatamente 11 dígitos numéricos.')
  .regex(/^\d{11}$/, 'CPF deve conter apenas dígitos numéricos (sem pontos ou traços).');

const senhaSchema = z
  .string()
  .min(8, 'A senha deve ter no mínimo 8 caracteres.')
  .max(100, 'A senha deve ter no máximo 100 caracteres.')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'A senha deve conter pelo menos uma letra minúscula, uma maiúscula e um número.'
  );

// ─────────────────────────────────────────────────────────────────────────────
// Schema de Login
// ─────────────────────────────────────────────────────────────────────────────
export const LoginSchema = z.object({
  email: z.string().email('Email inválido.').toLowerCase().trim(),
  senha: z.string().min(1, 'A senha é obrigatória.'),
});

export type LoginDto = z.infer<typeof LoginSchema>;
/**
 * Payload de entrada para POST /api/auth/register.
 * Cria um novo cuidador com credenciais de acesso ao sistema.
 */
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

export type RegisterDto = z.infer<typeof RegisterSchema>;
/**
 * Payload de entrada para PUT /api/auth/me.
 * Todos os campos são opcionais — apenas os enviados serão atualizados.
 */
export const UpdateProfileSchema = z.object({
  nome: z.string().min(2).max(100).trim().optional(),
  telefone: z.string().max(15).optional(),
  turno: z.enum(['Manha', 'Tarde', 'Noturno', 'Integral']).optional(),
  sexo: z.enum(['M', 'F', 'Outro']).optional(),
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;
