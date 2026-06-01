import { z } from 'zod';

export const CreateDoencaSchema = z.object({
  nome_doenca: z.string().min(2, 'Nome da doença deve ter pelo menos 2 caracteres.').max(100).trim(),
  codigo_cid: z
    .string()
    .max(10, 'Código CID deve ter no máximo 10 caracteres.')
    .toUpperCase()
    .trim()
    .optional(),
  categoria: z.string().max(50).trim().optional(),
});
export type CreateDoencaDto = z.infer<typeof CreateDoencaSchema>;

export const UpdateDoencaSchema = CreateDoencaSchema.partial();
export type UpdateDoencaDto = z.infer<typeof UpdateDoencaSchema>;
export const VincularDoencaSchema = z.object({
  id_doenca: z.number().int().positive('ID da doença deve ser um inteiro positivo.'),
  id_idoso: z.number().int().positive('ID do idoso deve ser um inteiro positivo.'),
  data_diagnostico: z.string().date('Formato de data inválido. Use YYYY-MM-DD.').optional(),
  observacao: z.string().max(5000).trim().optional(),
});
export type VincularDoencaDto = z.infer<typeof VincularDoencaSchema>;

export const IdParamSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});
export type IdParamDto = z.infer<typeof IdParamSchema>;
