
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.0
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.0",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.IdosoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  data_nascimento: 'data_nascimento',
  cpf: 'cpf',
  sexo: 'sexo',
  peso: 'peso',
  condicoes_medicinais: 'condicoes_medicinais',
  criado_em: 'criado_em',
  atualizado_em: 'atualizado_em'
};

exports.Prisma.DoencaScalarFieldEnum = {
  id: 'id',
  nome_doenca: 'nome_doenca',
  codigo_cid: 'codigo_cid',
  categoria: 'categoria'
};

exports.Prisma.IdosoDoencaScalarFieldEnum = {
  id: 'id',
  id_doenca: 'id_doenca',
  id_idoso: 'id_idoso',
  data_diagnostico: 'data_diagnostico',
  observacao: 'observacao'
};

exports.Prisma.MedicamentoScalarFieldEnum = {
  id: 'id',
  id_idoso: 'id_idoso',
  nome_medicamento: 'nome_medicamento',
  via_administracao: 'via_administracao',
  frequencia: 'frequencia',
  dosagem: 'dosagem',
  horario: 'horario',
  observacao: 'observacao'
};

exports.Prisma.CuidadorScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  senha_hash: 'senha_hash',
  sexo: 'sexo',
  cpf: 'cpf',
  telefone: 'telefone',
  turno: 'turno',
  criado_em: 'criado_em',
  atualizado_em: 'atualizado_em'
};

exports.Prisma.AcompanhamentoCuidadorScalarFieldEnum = {
  id: 'id',
  id_cuidador: 'id_cuidador',
  humor: 'humor',
  sono: 'sono',
  nivel_energia: 'nivel_energia',
  observacao: 'observacao',
  dia: 'dia'
};

exports.Prisma.AlimentacaoScalarFieldEnum = {
  id: 'id',
  id_cuidador: 'id_cuidador',
  id_idoso: 'id_idoso',
  refeicao: 'refeicao',
  horario: 'horario',
  quantidade: 'quantidade',
  observacao: 'observacao'
};

exports.Prisma.MediaUploadScalarFieldEnum = {
  id: 'id',
  id_cuidador: 'id_cuidador',
  nome_original: 'nome_original',
  caminho: 'caminho',
  tipo_mime: 'tipo_mime',
  tamanho_bytes: 'tamanho_bytes',
  tipo_midia: 'tipo_midia',
  analise: 'analise',
  id_idoso: 'id_idoso',
  criado_em: 'criado_em'
};

exports.Prisma.ProntuarioDiarioScalarFieldEnum = {
  id: 'id',
  id_idoso: 'id_idoso',
  id_cuidador: 'id_cuidador',
  data: 'data',
  diurese: 'diurese',
  evacuacao: 'evacuacao',
  hidratacao: 'hidratacao',
  observacao: 'observacao'
};

exports.Prisma.RelatorioScalarFieldEnum = {
  id: 'id',
  id_idoso: 'id_idoso',
  id_cuidador: 'id_cuidador',
  tipo: 'tipo',
  data_inicio: 'data_inicio',
  data_fim: 'data_fim',
  resumo_geral: 'resumo_geral',
  status_geral: 'status_geral',
  criado_em: 'criado_em'
};

exports.Prisma.CuidadorIdosoScalarFieldEnum = {
  id: 'id',
  id_idoso: 'id_idoso',
  id_cuidador: 'id_cuidador',
  papel: 'papel',
  criado_em: 'criado_em'
};

exports.Prisma.FeedAtividadeScalarFieldEnum = {
  id: 'id',
  id_idoso: 'id_idoso',
  id_cuidador: 'id_cuidador',
  tipo: 'tipo',
  descricao: 'descricao',
  criado_em: 'criado_em'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Idoso: 'Idoso',
  Doenca: 'Doenca',
  IdosoDoenca: 'IdosoDoenca',
  Medicamento: 'Medicamento',
  Cuidador: 'Cuidador',
  AcompanhamentoCuidador: 'AcompanhamentoCuidador',
  Alimentacao: 'Alimentacao',
  MediaUpload: 'MediaUpload',
  ProntuarioDiario: 'ProntuarioDiario',
  Relatorio: 'Relatorio',
  CuidadorIdoso: 'CuidadorIdoso',
  FeedAtividade: 'FeedAtividade'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
