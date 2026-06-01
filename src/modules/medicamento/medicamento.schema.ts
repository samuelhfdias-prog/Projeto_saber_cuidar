import { z } from 'zod';

const horarioSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Horário deve estar no formato HH:MM (24h).')
  .optional();

export const CreateMedicamentoSchema = z.object({
  id_idoso: z.number().int().positive('ID do idoso é obrigatório.'),
  nome_medicamento: z.string().min(2).max(100).trim(),
  via_administracao: z.string().max(50).trim().optional(),
  frequencia: z.string().max(50).trim().optional(),
  dosagem: z.string().max(50).trim().optional(),
  horario: horarioSchema,
  observacao: z.string().max(5000).trim().optional(),
});
export type CreateMedicamentoDto = z.infer<typeof CreateMedicamentoSchema>;

export const UpdateMedicamentoSchema = CreateMedicamentoSchema.partial().omit({ id_idoso: true });
export type UpdateMedicamentoDto = z.infer<typeof UpdateMedicamentoSchema>;

export const IdParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });
export type IdParamDto = z.infer<typeof IdParamSchema>;
