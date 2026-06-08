# CuidaBem Web

Aplicacao frontend Angular para rotina de cuidado, guias praticos, observacoes de saude e bem-estar do cuidador.

## Desenvolvimento

```bash
npm install
npm start
```

O app local roda em `http://localhost:8100`.

## Configuracao

Use `.env.example` como referencia para variaveis publicas do ambiente. Nao coloque chaves privadas, tokens de servidor ou credenciais nesse arquivo.

Em builds Angular, replique os valores publicos seguros nos arquivos de `src/environments/` ou no pipeline de build. Para producao, `PUBLIC_APP_URL` e URLs de API devem usar `https://`.

## Boas praticas de seguranca

- Nao subir `.env`, `.env.local`, `.env.production` ou arquivos com secrets para o GitHub.
- Nao colocar tokens, chaves de API, senhas ou credenciais diretamente no codigo.
- Usar HTTPS em producao com certificado SSL/TLS ativo no dominio oficial.
- Configurar apenas URLs oficiais em `environment.apiUrl`, `environment.appUrl` e `environment.supportUrl`.
- Validar dados no frontend e no backend; validacao de frontend melhora UX, mas nao substitui a API.
- Nao expor logs sensiveis no console do navegador.
- Nao armazenar tokens, senhas, dados medicos completos ou dados pessoais em `localStorage`, `sessionStorage`, cookies acessiveis por JavaScript ou IndexedDB.
- Usar cookies `Secure`, `HttpOnly` e `SameSite` para sessao quando o backend de autenticacao existir.
- Manter paginas de erro amigaveis, sem stack trace ou mensagens tecnicas internas.
- Revisar permissoes, rotas privadas e interceptors antes do deploy.
- Executar `npm audit`, testes unitarios, e2e e build antes de publicar.

## Checklist antes de producao

```bash
npm test
npm run build
npm run test:e2e
npm audit
```

O deploy deve configurar headers de seguranca no servidor/CDN, incluindo HSTS, CSP adequada ao dominio, `X-Content-Type-Options: nosniff`, `Referrer-Policy` e `Permissions-Policy`.

### Observacao sobre dependencias de desenvolvimento

Na versao atual do Angular 20, `npm audit` pode apontar vulnerabilidades sem correcao automatica em dependencias do toolchain de desenvolvimento, como `vitest` via `@angular/build` e `uuid` via `webpack-dev-server/sockjs`. Nao exponha o dev server publicamente e reavalie a migracao para Angular 21+ quando ela estiver planejada para o projeto.
