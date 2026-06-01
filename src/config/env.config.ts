import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('3000').transform((v) => parseInt(v, 10)),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL é obrigatória.'),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET deve ter pelo menos 32 caracteres.'),
  JWT_EXPIRES_IN: z.string().default('2h'),
  BCRYPT_SALT_ROUNDS: z
    .string()
    .default('12')
    .transform((v) => parseInt(v, 10))
    .refine((v) => v >= 10 && v <= 14, { message: 'BCRYPT_SALT_ROUNDS deve estar entre 10 e 14.' }),
  CORS_ORIGINS: z.string().default('http://localhost:4200'),
  UPLOAD_DIR: z.string().default('uploads'),
  MAX_FILE_SIZE_MB: z.string().default('100').transform((v) => parseInt(v, 10)),
});

const _parsed = envSchema.safeParse(process.env);

if (!_parsed.success) {
  console.error('\n❌ [CuidaBem] Variáveis de ambiente inválidas:\n');
  _parsed.error.issues.forEach((issue) => {
    console.error(`  • ${issue.path.join('.')}: ${issue.message}`);
  });
  console.error('\n💡 Verifique o arquivo .env.example e crie o arquivo .env.\n');
  process.exit(1);
}

export const env = _parsed.data;
export type Env = typeof env;
