import { z } from 'zod';

export const CreateAcompanhamentoSchema = z.object({
  id_cuidador: z.number().int().positive('ID do cuidador é obrigatório.'),
  humor: z.enum(['Triste', 'Neutro', 'Bem', 'Otimo', 'Excelente']).optional(),
  sono: z.enum(['Pessimo', 'Ruim', 'Ok', 'Bom', 'Otimo']).optional(),
  nivel_energia: z.enum(['Esgotado', 'Cansado', 'Regular', 'Bem', 'Otimo']).optional(),
  observacao: z.string().max(5000).trim().optional(),
  dia: z.string().datetime({ message: 'Data deve estar no formato ISO 8601.' }).optional(),
});
export type CreateAcompanhamentoDto = z.infer<typeof CreateAcompanhamentoSchema>;

export const UpdateAcompanhamentoSchema = CreateAcompanhamentoSchema.partial().omit({ id_cuidador: true });
export type UpdateAcompanhamentoDto = z.infer<typeof UpdateAcompanhamentoSchema>;

export const IdParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });
