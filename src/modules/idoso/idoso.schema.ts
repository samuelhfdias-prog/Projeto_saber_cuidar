import { z } from 'zod';

const cpfSchema = z
  .string()
  .length(11, 'CPF deve ter exatamente 11 dígitos.')
  .regex(/^\d{11}$/, 'CPF deve conter apenas dígitos numéricos.');

/** Schema para criação de idoso. */
export const CreateIdosoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres.').max(150).trim(),
  data_nascimento: z.string().date('Formato de data inválido. Use YYYY-MM-DD.').optional(),
  cpf: cpfSchema,
  sexo: z.enum(['M', 'F', 'Outro']).optional(),
  peso: z.number().positive('Peso deve ser um valor positivo.').max(500).optional(),
  condicoes_medicinais: z.string().max(5000).trim().optional(),
});

export type CreateIdosoDto = z.infer<typeof CreateIdosoSchema>;

/** Schema para atualização parcial (todos os campos opcionais). */
export const UpdateIdosoSchema = CreateIdosoSchema.partial().omit({ cpf: true });
export type UpdateIdosoDto = z.infer<typeof UpdateIdosoSchema>;

/** Schema para validação do parâmetro :id. */
export const IdParamSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID deve ser numérico.').transform(Number),
});

export type IdParamDto = z.infer<typeof IdParamSchema>;
