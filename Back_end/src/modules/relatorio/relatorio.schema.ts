import { z } from 'zod';

export const GerarRelatorioSchema = z.object({
  tipo: z.enum(['Semanal', 'Mensal']),
});

export type GerarRelatorioDto = z.infer<typeof GerarRelatorioSchema>;
