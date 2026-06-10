import { z } from 'zod';

export const CriarProntuarioSchema = z.object({
  diurese: z.string().min(1, 'Diurese é obrigatória.'),
  evacuacao: z.string().min(1, 'Evacuação é obrigatória.'),
  hidratacao: z.string().min(1, 'Hidratação é obrigatória.'),
  observacao: z.string().optional(),
  data: z.string().datetime().optional(),
});

export type CriarProntuarioDto = z.infer<typeof CriarProntuarioSchema>;
