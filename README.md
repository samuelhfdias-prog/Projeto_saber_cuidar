# CuidaBem Backend

API REST de Produção para Gestão de Cuidados à Pessoa Idosa

## 📋 Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (geralmente incluído com Node.js)
- **MySQL** >= 8.0 ([Download](https://www.mysql.com/downloads/))

## 🚀 Instalação

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd "Back end-cuidar bem"
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado em `.env.example`:

```env
# Banco de Dados
DATABASE_URL="mysql://usuario:senha@localhost:3306/cuidabem"

# JWT
JWT_SECRET="sua_chave_secreta_aqui"
JWT_EXPIRATION="7d"

# Ambiente
NODE_ENV="development"
PORT=3000

# CORS
CORS_ORIGIN="http://localhost:3000"
```

> **Nota**: Substitua `usuario` e `senha` pelos seus dados do MySQL.

### 4. Configurar Banco de Dados

#### a) Criar o banco de dados:

```bash
npx prisma db push
```

#### b) (Opcional) Popular dados iniciais:

```bash
npm run db:seed
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia o servidor com hot-reload

# Banco de Dados
npm run db:generate     # Gera o cliente Prisma
npm run db:migrate:dev  # Executa migrations em desenvolvimento
npm run db:migrate:deploy  # Executa migrations em produção
npm run db:push         # Sincroniza schema com banco
npm run db:studio       # Abre Prisma Studio
npm run db:seed         # Popula dados iniciais

# Produção
npm run build           # Compila TypeScript para JavaScript
npm start               # Inicia o servidor compilado

# Qualidade de Código
npm run lint            # Executa ESLint e corrige problemas
```

## 🔧 Desenvolvimento Local

### Iniciar o servidor em modo desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

O modo desenvolvimento ativa:
- Hot-reload automático
- Logs detalhados do Prisma
- TypeScript em tempo real

### Visualizar/Gerenciar Banco de Dados:

```bash
npm run db:studio
```

Abre a interface web do Prisma Studio em `http://localhost:5555`

## 🏗️ Build para Produção

### 1. Compilar TypeScript:

```bash
npm run build
```

Isso gera a pasta `dist/` com o JavaScript compilado.

### 2. Executar em Produção:

```bash
npm start
```

> **Nota**: Certifique-se de que as variáveis de ambiente estão configuradas corretamente no servidor de produção.

## 📂 Estrutura do Projeto

```
src/
├── config/              # Configurações (banco, CORS, env, multer)
├── modules/             # Módulos de negócio
│   ├── acompanhamento/  # Acompanhamento de pacientes
│   ├── alimentacao/     # Gestão de alimentação
│   ├── auth/            # Autenticação e autorização
│   ├── doenca/          # Doenças
│   ├── educational/     # Recursos educacionais
│   ├── health/          # Saúde
│   ├── idoso/           # Dados de idosos
│   ├── medicamento/     # Medicamentos
│   ├── patients/        # Pacientes
│   └── upload/          # Upload de arquivos
├── routes/              # Rotas principais
├── shared/              # Código compartilhado
│   ├── middlewares/     # Middlewares
│   ├── types/           # Tipos TypeScript
│   └── utils/           # Utilitários
├── app.ts               # Configuração do Express
└── server.ts            # Ponto de entrada
```

## 🔐 Autenticação

A API usa JWT (JSON Web Tokens) para autenticação. 

**Fluxo padrão**:
1. Usuário faz login com credenciais
2. Backend retorna um token JWT
3. Cliente inclui o token no header `Authorization: Bearer <token>`
4. Middleware valida o token em cada requisição protegida

## 📝 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | String de conexão MySQL | `mysql://user:pass@localhost:3306/cuidabem` |
| `JWT_SECRET` | Chave secreta para assinar JWTs | Qualquer string segura |
| `JWT_EXPIRATION` | Tempo de expiração do token | `7d`, `24h`, `60m` |
| `NODE_ENV` | Ambiente de execução | `development`, `production` |
| `PORT` | Porta do servidor | `3000` |
| `CORS_ORIGIN` | Origem permitida para CORS | `http://localhost:3000` |

## 🐛 Troubleshooting

### Erro: "Cannot find module '@prisma/client'"
```bash
npm run db:generate
npm install
```

### Erro de conexão ao MySQL
- Verifique se MySQL está rodando
- Confirme as credenciais em `DATABASE_URL`
- Verifique se o banco de dados foi criado

### Porta 3000 já em uso
Altere a variável `PORT` em `.env` ou execute:
```bash
npm run dev -- --port 3001
```

## 📚 Dependências Principais

- **Express** - Framework web
- **Prisma** - ORM e gerenciador de banco de dados
- **TypeScript** - Tipagem estática
- **JWT** - Autenticação com tokens
- **Bcrypt** - Hash seguro de senhas
- **Zod** - Validação de schemas

## 📄 Licença

Este projeto é privado. Todos os direitos reservados.

## 👥 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

---

**Última atualização**: Junho de 2026
