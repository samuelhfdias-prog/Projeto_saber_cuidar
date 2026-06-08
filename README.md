# Projeto CuidaBem

Este projeto foi desenvolvido com foco na gestão do cuidado da pessoa idosa, unificando em um só lugar as necessidades médicas, alimentares, de rotina e o bem-estar do paciente.

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar o Back-end e o Front-end simultaneamente em sua máquina, utilizando o banco de dados SQLite (sem necessidade de configurar serviços externos).

### 1. Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **NPM** (versão 8 ou superior)

### 2. Instalação das dependências

Na raiz do projeto (onde está localizado este README), execute o comando abaixo. Ele instalará automaticamente as dependências tanto do back-end quanto do front-end:

```bash
npm run install:all
```

Se o comando falhar, você pode instalar manualmente entrando em cada pasta:
```bash
cd Back_end && npm install
cd ../Front-end && npm install
cd ..
```

### 3. Configuração do Banco de Dados (Back-end)

O back-end está configurado para utilizar **SQLite**, ou seja, o banco de dados será um arquivo local (geralmente criado na pasta `Back_end/prisma/dev.db`).

Para criar as tabelas e popular o banco com os dados iniciais, acesse a pasta `Back_end` e execute as migrações e o seed:

```bash
cd Back_end
npx prisma generate
npx prisma db push
npm run db:seed
cd ..
```

### 4. Executando a Aplicação

Com tudo instalado e o banco configurado, você pode rodar o Front-end e o Back-end juntos. A partir da **raiz do projeto**, execute:

```bash
npm run dev
```

Este comando vai iniciar simultaneamente:
- **O servidor do Back-end** na porta `3000` (http://localhost:3000)
- **A aplicação Front-end (Angular)** na porta `8100` (http://localhost:8100)

Abra o seu navegador e acesse **http://localhost:8100** para interagir com o CuidaBem.

---

### 🛡️ Boas Práticas e Cibersegurança

Por questões de segurança e boas práticas de desenvolvimento (LGPD/Cybersecurity):
- **O banco de dados (.db / .sqlite)** e a pasta `node_modules` não são enviados para o repositório (`GitHub`). Isso previne vazamento de informações médicas ou pessoais de pacientes caso o código fique exposto.
- Caso você faça o clone do projeto em um novo computador, sempre rode o passo 3 (Configuração do Banco de Dados) para gerar um novo arquivo de banco local limpo e seguro.
- Nunca adicione variáveis sensíveis (senhas, chaves de API, secrets de JWT) diretamente no código-fonte. Utilize sempre o arquivo local `.env` que, de propósito, é ignorado pelo Git (veja as regras no `.gitignore`).
