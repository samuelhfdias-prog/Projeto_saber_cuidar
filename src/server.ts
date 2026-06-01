import { createApp } from './app';
import { env } from './config/env.config';
import { connectDatabase, disconnectDatabase } from './config/database';

async function bootstrap(): Promise<void> {
  const app = createApp();

  await connectDatabase();

  const server = app.listen(env.PORT, () => {
    console.log('\n╔══════════════════════════════════════════════════════════╗');
    console.log('║          🏥  CuidaBem API  —  v2.0.0                    ║');
    console.log('╠══════════════════════════════════════════════════════════╣');
    console.log(`║  🚀 Servidor:    http://localhost:${env.PORT}                  ║`);
    console.log(`║  🌍 Ambiente:    ${env.NODE_ENV.padEnd(38)}║`);
    console.log(`║  🔗 CORS:        ${env.CORS_ORIGINS.slice(0, 38).padEnd(38)}║`);
    console.log(`║  🔑 JWT Expiry:  ${env.JWT_EXPIRES_IN.padEnd(38)}║`);
    console.log(`║  📁 Uploads:     ${env.UPLOAD_DIR.padEnd(38)}║`);
    console.log('╠══════════════════════════════════════════════════════════╣');
    console.log('║  📋 Endpoints:                                           ║');
    console.log('║   GET    /health                                         ║');
    console.log('║   POST   /api/auth/register                              ║');
    console.log('║   POST   /api/auth/login                                 ║');
    console.log('║   GET    /api/auth/me                             [JWT]  ║');
    console.log('║   GET    /api/idosos                              [JWT]  ║');
    console.log('║   GET    /api/doencas                             [JWT]  ║');
    console.log('║   GET    /api/medicamentos                        [JWT]  ║');
    console.log('║   GET    /api/alimentacoes                        [JWT]  ║');
    console.log('║   GET    /api/acompanhamentos                     [JWT]  ║');
    console.log('║   POST   /api/uploads/video                       [JWT]  ║');
    console.log('║   POST   /api/uploads/imagem                      [JWT]  ║');
    console.log('║   POST   /api/uploads/multiplos                   [JWT]  ║');
    console.log('╚══════════════════════════════════════════════════════════╝\n');
  });

  async function shutdown(signal: string): Promise<void> {
    console.log(`\n⚠️  Sinal ${signal} recebido. Encerrando servidor...`);
    server.close(async () => {
      await disconnectDatabase();
      console.log('✅ Shutdown concluído.');
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10_000);
  }

  process.on('SIGTERM', () => { void shutdown('SIGTERM'); });
  process.on('SIGINT',  () => { void shutdown('SIGINT'); });

  process.on('unhandledRejection', (reason: unknown) => {
    console.error('[CuidaBem] UnhandledRejection:', reason);
  });

  process.on('uncaughtException', (error: Error) => {
    console.error('[CuidaBem] UncaughtException:', error.message);
    void shutdown('UNCAUGHT_EXCEPTION');
  });
}

bootstrap().catch((error: Error) => {
  console.error('❌ Falha crítica na inicialização:', error.message);
  process.exit(1);
});
