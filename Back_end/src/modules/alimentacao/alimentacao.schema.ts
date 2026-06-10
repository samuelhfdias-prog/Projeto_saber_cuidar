import { z } from 'zod';

export const CreateAlimentacaoSchema = z.object({
  id_cuidador: z.number().int().positive('ID do cuidador é obrigatório.'),
  id_idoso: z.number().int().positive('ID do idoso é obrigatório.'),
  refeicao: z.enum(['Cafe_da_manha', 'Almoco', 'Cafe_da_tarde', 'Janta', 'Ceia']),
  horario: z.string().min(1, 'O horário é obrigatório.').regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Horário deve estar no formato HH:MM.'),
  quantidade: z.enum(['Muito', 'Normal', 'Razoavel', 'Pouca']),
  observacao: z.string().max(5000).trim().optional(),
});
export type CreateAlimentacaoDto = z.infer<typeof CreateAlimentacaoSchema>;

export const UpdateAlimentacaoSchema = CreateAlimentacaoSchema.partial().omit({
  id_cuidador: true,
  id_idoso: true,
});
export type UpdateAlimentacaoDto = z.infer<typeof UpdateAlimentacaoSchema>;

export const IdParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });
