import { z } from 'zod';

export const VincularCuidadorSchema = z.object({
  email: z.string().email('Email inválido.'),
});

export type VincularCuidadorDto = z.infer<typeof VincularCuidadorSchema>;
