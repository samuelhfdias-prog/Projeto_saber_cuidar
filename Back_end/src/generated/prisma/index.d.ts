
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Idoso
 * 
 */
export type Idoso = $Result.DefaultSelection<Prisma.$IdosoPayload>
/**
 * Model Doenca
 * 
 */
export type Doenca = $Result.DefaultSelection<Prisma.$DoencaPayload>
/**
 * Model IdosoDoenca
 * 
 */
export type IdosoDoenca = $Result.DefaultSelection<Prisma.$IdosoDoencaPayload>
/**
 * Model Medicamento
 * 
 */
export type Medicamento = $Result.DefaultSelection<Prisma.$MedicamentoPayload>
/**
 * Model Cuidador
 * 
 */
export type Cuidador = $Result.DefaultSelection<Prisma.$CuidadorPayload>
/**
 * Model AcompanhamentoCuidador
 * 
 */
export type AcompanhamentoCuidador = $Result.DefaultSelection<Prisma.$AcompanhamentoCuidadorPayload>
/**
 * Model Alimentacao
 * 
 */
export type Alimentacao = $Result.DefaultSelection<Prisma.$AlimentacaoPayload>
/**
 * Model MediaUpload
 * 
 */
export type MediaUpload = $Result.DefaultSelection<Prisma.$MediaUploadPayload>
/**
 * Model ProntuarioDiario
 * 
 */
export type ProntuarioDiario = $Result.DefaultSelection<Prisma.$ProntuarioDiarioPayload>
/**
 * Model Relatorio
 * 
 */
export type Relatorio = $Result.DefaultSelection<Prisma.$RelatorioPayload>
/**
 * Model CuidadorIdoso
 * 
 */
export type CuidadorIdoso = $Result.DefaultSelection<Prisma.$CuidadorIdosoPayload>
/**
 * Model FeedAtividade
 * 
 */
export type FeedAtividade = $Result.DefaultSelection<Prisma.$FeedAtividadePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Idosos
 * const idosos = await prisma.idoso.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Idosos
   * const idosos = await prisma.idoso.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.idoso`: Exposes CRUD operations for the **Idoso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idosos
    * const idosos = await prisma.idoso.findMany()
    * ```
    */
  get idoso(): Prisma.IdosoDelegate<ExtArgs>;

  /**
   * `prisma.doenca`: Exposes CRUD operations for the **Doenca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doencas
    * const doencas = await prisma.doenca.findMany()
    * ```
    */
  get doenca(): Prisma.DoencaDelegate<ExtArgs>;

  /**
   * `prisma.idosoDoenca`: Exposes CRUD operations for the **IdosoDoenca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdosoDoencas
    * const idosoDoencas = await prisma.idosoDoenca.findMany()
    * ```
    */
  get idosoDoenca(): Prisma.IdosoDoencaDelegate<ExtArgs>;

  /**
   * `prisma.medicamento`: Exposes CRUD operations for the **Medicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicamentos
    * const medicamentos = await prisma.medicamento.findMany()
    * ```
    */
  get medicamento(): Prisma.MedicamentoDelegate<ExtArgs>;

  /**
   * `prisma.cuidador`: Exposes CRUD operations for the **Cuidador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuidadors
    * const cuidadors = await prisma.cuidador.findMany()
    * ```
    */
  get cuidador(): Prisma.CuidadorDelegate<ExtArgs>;

  /**
   * `prisma.acompanhamentoCuidador`: Exposes CRUD operations for the **AcompanhamentoCuidador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcompanhamentoCuidadors
    * const acompanhamentoCuidadors = await prisma.acompanhamentoCuidador.findMany()
    * ```
    */
  get acompanhamentoCuidador(): Prisma.AcompanhamentoCuidadorDelegate<ExtArgs>;

  /**
   * `prisma.alimentacao`: Exposes CRUD operations for the **Alimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alimentacaos
    * const alimentacaos = await prisma.alimentacao.findMany()
    * ```
    */
  get alimentacao(): Prisma.AlimentacaoDelegate<ExtArgs>;

  /**
   * `prisma.mediaUpload`: Exposes CRUD operations for the **MediaUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaUploads
    * const mediaUploads = await prisma.mediaUpload.findMany()
    * ```
    */
  get mediaUpload(): Prisma.MediaUploadDelegate<ExtArgs>;

  /**
   * `prisma.prontuarioDiario`: Exposes CRUD operations for the **ProntuarioDiario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProntuarioDiarios
    * const prontuarioDiarios = await prisma.prontuarioDiario.findMany()
    * ```
    */
  get prontuarioDiario(): Prisma.ProntuarioDiarioDelegate<ExtArgs>;

  /**
   * `prisma.relatorio`: Exposes CRUD operations for the **Relatorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relatorios
    * const relatorios = await prisma.relatorio.findMany()
    * ```
    */
  get relatorio(): Prisma.RelatorioDelegate<ExtArgs>;

  /**
   * `prisma.cuidadorIdoso`: Exposes CRUD operations for the **CuidadorIdoso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CuidadorIdosos
    * const cuidadorIdosos = await prisma.cuidadorIdoso.findMany()
    * ```
    */
  get cuidadorIdoso(): Prisma.CuidadorIdosoDelegate<ExtArgs>;

  /**
   * `prisma.feedAtividade`: Exposes CRUD operations for the **FeedAtividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedAtividades
    * const feedAtividades = await prisma.feedAtividade.findMany()
    * ```
    */
  get feedAtividade(): Prisma.FeedAtividadeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.0
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'idoso' | 'doenca' | 'idosoDoenca' | 'medicamento' | 'cuidador' | 'acompanhamentoCuidador' | 'alimentacao' | 'mediaUpload' | 'prontuarioDiario' | 'relatorio' | 'cuidadorIdoso' | 'feedAtividade'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Idoso: {
        payload: Prisma.$IdosoPayload<ExtArgs>
        fields: Prisma.IdosoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdosoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdosoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>
          }
          findFirst: {
            args: Prisma.IdosoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdosoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>
          }
          findMany: {
            args: Prisma.IdosoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>[]
          }
          create: {
            args: Prisma.IdosoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>
          }
          delete: {
            args: Prisma.IdosoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>
          }
          update: {
            args: Prisma.IdosoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>
          }
          deleteMany: {
            args: Prisma.IdosoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IdosoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IdosoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoPayload>
          }
          aggregate: {
            args: Prisma.IdosoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIdoso>
          }
          groupBy: {
            args: Prisma.IdosoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IdosoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdosoCountArgs<ExtArgs>,
            result: $Utils.Optional<IdosoCountAggregateOutputType> | number
          }
        }
      }
      Doenca: {
        payload: Prisma.$DoencaPayload<ExtArgs>
        fields: Prisma.DoencaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoencaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoencaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>
          }
          findFirst: {
            args: Prisma.DoencaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoencaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>
          }
          findMany: {
            args: Prisma.DoencaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>[]
          }
          create: {
            args: Prisma.DoencaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>
          }
          delete: {
            args: Prisma.DoencaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>
          }
          update: {
            args: Prisma.DoencaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>
          }
          deleteMany: {
            args: Prisma.DoencaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DoencaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DoencaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoencaPayload>
          }
          aggregate: {
            args: Prisma.DoencaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoenca>
          }
          groupBy: {
            args: Prisma.DoencaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DoencaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoencaCountArgs<ExtArgs>,
            result: $Utils.Optional<DoencaCountAggregateOutputType> | number
          }
        }
      }
      IdosoDoenca: {
        payload: Prisma.$IdosoDoencaPayload<ExtArgs>
        fields: Prisma.IdosoDoencaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdosoDoencaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdosoDoencaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>
          }
          findFirst: {
            args: Prisma.IdosoDoencaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdosoDoencaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>
          }
          findMany: {
            args: Prisma.IdosoDoencaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>[]
          }
          create: {
            args: Prisma.IdosoDoencaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>
          }
          delete: {
            args: Prisma.IdosoDoencaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>
          }
          update: {
            args: Prisma.IdosoDoencaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>
          }
          deleteMany: {
            args: Prisma.IdosoDoencaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IdosoDoencaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IdosoDoencaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IdosoDoencaPayload>
          }
          aggregate: {
            args: Prisma.IdosoDoencaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIdosoDoenca>
          }
          groupBy: {
            args: Prisma.IdosoDoencaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IdosoDoencaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdosoDoencaCountArgs<ExtArgs>,
            result: $Utils.Optional<IdosoDoencaCountAggregateOutputType> | number
          }
        }
      }
      Medicamento: {
        payload: Prisma.$MedicamentoPayload<ExtArgs>
        fields: Prisma.MedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicamentoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicamentoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findFirst: {
            args: Prisma.MedicamentoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicamentoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findMany: {
            args: Prisma.MedicamentoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          create: {
            args: Prisma.MedicamentoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          delete: {
            args: Prisma.MedicamentoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          update: {
            args: Prisma.MedicamentoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.MedicamentoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MedicamentoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MedicamentoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          aggregate: {
            args: Prisma.MedicamentoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedicamento>
          }
          groupBy: {
            args: Prisma.MedicamentoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicamentoCountArgs<ExtArgs>,
            result: $Utils.Optional<MedicamentoCountAggregateOutputType> | number
          }
        }
      }
      Cuidador: {
        payload: Prisma.$CuidadorPayload<ExtArgs>
        fields: Prisma.CuidadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuidadorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuidadorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>
          }
          findFirst: {
            args: Prisma.CuidadorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuidadorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>
          }
          findMany: {
            args: Prisma.CuidadorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>[]
          }
          create: {
            args: Prisma.CuidadorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>
          }
          delete: {
            args: Prisma.CuidadorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>
          }
          update: {
            args: Prisma.CuidadorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>
          }
          deleteMany: {
            args: Prisma.CuidadorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CuidadorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CuidadorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorPayload>
          }
          aggregate: {
            args: Prisma.CuidadorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCuidador>
          }
          groupBy: {
            args: Prisma.CuidadorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CuidadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuidadorCountArgs<ExtArgs>,
            result: $Utils.Optional<CuidadorCountAggregateOutputType> | number
          }
        }
      }
      AcompanhamentoCuidador: {
        payload: Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>
        fields: Prisma.AcompanhamentoCuidadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcompanhamentoCuidadorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcompanhamentoCuidadorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>
          }
          findFirst: {
            args: Prisma.AcompanhamentoCuidadorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcompanhamentoCuidadorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>
          }
          findMany: {
            args: Prisma.AcompanhamentoCuidadorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>[]
          }
          create: {
            args: Prisma.AcompanhamentoCuidadorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>
          }
          delete: {
            args: Prisma.AcompanhamentoCuidadorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>
          }
          update: {
            args: Prisma.AcompanhamentoCuidadorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>
          }
          deleteMany: {
            args: Prisma.AcompanhamentoCuidadorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AcompanhamentoCuidadorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AcompanhamentoCuidadorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcompanhamentoCuidadorPayload>
          }
          aggregate: {
            args: Prisma.AcompanhamentoCuidadorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAcompanhamentoCuidador>
          }
          groupBy: {
            args: Prisma.AcompanhamentoCuidadorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AcompanhamentoCuidadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcompanhamentoCuidadorCountArgs<ExtArgs>,
            result: $Utils.Optional<AcompanhamentoCuidadorCountAggregateOutputType> | number
          }
        }
      }
      Alimentacao: {
        payload: Prisma.$AlimentacaoPayload<ExtArgs>
        fields: Prisma.AlimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlimentacaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlimentacaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>
          }
          findFirst: {
            args: Prisma.AlimentacaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlimentacaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>
          }
          findMany: {
            args: Prisma.AlimentacaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>[]
          }
          create: {
            args: Prisma.AlimentacaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>
          }
          delete: {
            args: Prisma.AlimentacaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>
          }
          update: {
            args: Prisma.AlimentacaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.AlimentacaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlimentacaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlimentacaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlimentacaoPayload>
          }
          aggregate: {
            args: Prisma.AlimentacaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlimentacao>
          }
          groupBy: {
            args: Prisma.AlimentacaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlimentacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlimentacaoCountArgs<ExtArgs>,
            result: $Utils.Optional<AlimentacaoCountAggregateOutputType> | number
          }
        }
      }
      MediaUpload: {
        payload: Prisma.$MediaUploadPayload<ExtArgs>
        fields: Prisma.MediaUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaUploadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaUploadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          findFirst: {
            args: Prisma.MediaUploadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaUploadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          findMany: {
            args: Prisma.MediaUploadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>[]
          }
          create: {
            args: Prisma.MediaUploadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          delete: {
            args: Prisma.MediaUploadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          update: {
            args: Prisma.MediaUploadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          deleteMany: {
            args: Prisma.MediaUploadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUploadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MediaUploadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          aggregate: {
            args: Prisma.MediaUploadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMediaUpload>
          }
          groupBy: {
            args: Prisma.MediaUploadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MediaUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaUploadCountArgs<ExtArgs>,
            result: $Utils.Optional<MediaUploadCountAggregateOutputType> | number
          }
        }
      }
      ProntuarioDiario: {
        payload: Prisma.$ProntuarioDiarioPayload<ExtArgs>
        fields: Prisma.ProntuarioDiarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProntuarioDiarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProntuarioDiarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>
          }
          findFirst: {
            args: Prisma.ProntuarioDiarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProntuarioDiarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>
          }
          findMany: {
            args: Prisma.ProntuarioDiarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>[]
          }
          create: {
            args: Prisma.ProntuarioDiarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>
          }
          delete: {
            args: Prisma.ProntuarioDiarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>
          }
          update: {
            args: Prisma.ProntuarioDiarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>
          }
          deleteMany: {
            args: Prisma.ProntuarioDiarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProntuarioDiarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProntuarioDiarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProntuarioDiarioPayload>
          }
          aggregate: {
            args: Prisma.ProntuarioDiarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProntuarioDiario>
          }
          groupBy: {
            args: Prisma.ProntuarioDiarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProntuarioDiarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProntuarioDiarioCountArgs<ExtArgs>,
            result: $Utils.Optional<ProntuarioDiarioCountAggregateOutputType> | number
          }
        }
      }
      Relatorio: {
        payload: Prisma.$RelatorioPayload<ExtArgs>
        fields: Prisma.RelatorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          findFirst: {
            args: Prisma.RelatorioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          findMany: {
            args: Prisma.RelatorioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>[]
          }
          create: {
            args: Prisma.RelatorioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          delete: {
            args: Prisma.RelatorioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          update: {
            args: Prisma.RelatorioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          deleteMany: {
            args: Prisma.RelatorioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RelatorioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          aggregate: {
            args: Prisma.RelatorioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRelatorio>
          }
          groupBy: {
            args: Prisma.RelatorioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RelatorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioCountArgs<ExtArgs>,
            result: $Utils.Optional<RelatorioCountAggregateOutputType> | number
          }
        }
      }
      CuidadorIdoso: {
        payload: Prisma.$CuidadorIdosoPayload<ExtArgs>
        fields: Prisma.CuidadorIdosoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuidadorIdosoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuidadorIdosoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>
          }
          findFirst: {
            args: Prisma.CuidadorIdosoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuidadorIdosoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>
          }
          findMany: {
            args: Prisma.CuidadorIdosoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>[]
          }
          create: {
            args: Prisma.CuidadorIdosoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>
          }
          delete: {
            args: Prisma.CuidadorIdosoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>
          }
          update: {
            args: Prisma.CuidadorIdosoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>
          }
          deleteMany: {
            args: Prisma.CuidadorIdosoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CuidadorIdosoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CuidadorIdosoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CuidadorIdosoPayload>
          }
          aggregate: {
            args: Prisma.CuidadorIdosoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCuidadorIdoso>
          }
          groupBy: {
            args: Prisma.CuidadorIdosoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CuidadorIdosoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuidadorIdosoCountArgs<ExtArgs>,
            result: $Utils.Optional<CuidadorIdosoCountAggregateOutputType> | number
          }
        }
      }
      FeedAtividade: {
        payload: Prisma.$FeedAtividadePayload<ExtArgs>
        fields: Prisma.FeedAtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedAtividadeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedAtividadeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>
          }
          findFirst: {
            args: Prisma.FeedAtividadeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedAtividadeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>
          }
          findMany: {
            args: Prisma.FeedAtividadeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>[]
          }
          create: {
            args: Prisma.FeedAtividadeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>
          }
          delete: {
            args: Prisma.FeedAtividadeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>
          }
          update: {
            args: Prisma.FeedAtividadeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>
          }
          deleteMany: {
            args: Prisma.FeedAtividadeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeedAtividadeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeedAtividadeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedAtividadePayload>
          }
          aggregate: {
            args: Prisma.FeedAtividadeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeedAtividade>
          }
          groupBy: {
            args: Prisma.FeedAtividadeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeedAtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedAtividadeCountArgs<ExtArgs>,
            result: $Utils.Optional<FeedAtividadeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IdosoCountOutputType
   */

  export type IdosoCountOutputType = {
    doencas: number
    medicamentos: number
    alimentacoes: number
    prontuarios: number
    uploads: number
    relacaoCuidadores: number
    relatorios: number
    feedAtividades: number
  }

  export type IdosoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doencas?: boolean | IdosoCountOutputTypeCountDoencasArgs
    medicamentos?: boolean | IdosoCountOutputTypeCountMedicamentosArgs
    alimentacoes?: boolean | IdosoCountOutputTypeCountAlimentacoesArgs
    prontuarios?: boolean | IdosoCountOutputTypeCountProntuariosArgs
    uploads?: boolean | IdosoCountOutputTypeCountUploadsArgs
    relacaoCuidadores?: boolean | IdosoCountOutputTypeCountRelacaoCuidadoresArgs
    relatorios?: boolean | IdosoCountOutputTypeCountRelatoriosArgs
    feedAtividades?: boolean | IdosoCountOutputTypeCountFeedAtividadesArgs
  }

  // Custom InputTypes

  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoCountOutputType
     */
    select?: IdosoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountDoencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdosoDoencaWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountAlimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentacaoWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountProntuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProntuarioDiarioWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaUploadWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountRelacaoCuidadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuidadorIdosoWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountRelatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
  }


  /**
   * IdosoCountOutputType without action
   */
  export type IdosoCountOutputTypeCountFeedAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedAtividadeWhereInput
  }



  /**
   * Count Type DoencaCountOutputType
   */

  export type DoencaCountOutputType = {
    idosos: number
  }

  export type DoencaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idosos?: boolean | DoencaCountOutputTypeCountIdososArgs
  }

  // Custom InputTypes

  /**
   * DoencaCountOutputType without action
   */
  export type DoencaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoencaCountOutputType
     */
    select?: DoencaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DoencaCountOutputType without action
   */
  export type DoencaCountOutputTypeCountIdososArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdosoDoencaWhereInput
  }



  /**
   * Count Type CuidadorCountOutputType
   */

  export type CuidadorCountOutputType = {
    acompanhamentos: number
    alimentacoes: number
    prontuarios: number
    uploads: number
    relacaoIdosos: number
    relatorios: number
    feedAtividades: number
  }

  export type CuidadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acompanhamentos?: boolean | CuidadorCountOutputTypeCountAcompanhamentosArgs
    alimentacoes?: boolean | CuidadorCountOutputTypeCountAlimentacoesArgs
    prontuarios?: boolean | CuidadorCountOutputTypeCountProntuariosArgs
    uploads?: boolean | CuidadorCountOutputTypeCountUploadsArgs
    relacaoIdosos?: boolean | CuidadorCountOutputTypeCountRelacaoIdososArgs
    relatorios?: boolean | CuidadorCountOutputTypeCountRelatoriosArgs
    feedAtividades?: boolean | CuidadorCountOutputTypeCountFeedAtividadesArgs
  }

  // Custom InputTypes

  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorCountOutputType
     */
    select?: CuidadorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountAcompanhamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcompanhamentoCuidadorWhereInput
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountAlimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentacaoWhereInput
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountProntuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProntuarioDiarioWhereInput
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaUploadWhereInput
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountRelacaoIdososArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuidadorIdosoWhereInput
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountRelatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
  }


  /**
   * CuidadorCountOutputType without action
   */
  export type CuidadorCountOutputTypeCountFeedAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedAtividadeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Idoso
   */

  export type AggregateIdoso = {
    _count: IdosoCountAggregateOutputType | null
    _avg: IdosoAvgAggregateOutputType | null
    _sum: IdosoSumAggregateOutputType | null
    _min: IdosoMinAggregateOutputType | null
    _max: IdosoMaxAggregateOutputType | null
  }

  export type IdosoAvgAggregateOutputType = {
    id: number | null
    peso: number | null
  }

  export type IdosoSumAggregateOutputType = {
    id: number | null
    peso: number | null
  }

  export type IdosoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    data_nascimento: Date | null
    cpf: string | null
    sexo: string | null
    peso: number | null
    condicoes_medicinais: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type IdosoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    data_nascimento: Date | null
    cpf: string | null
    sexo: string | null
    peso: number | null
    condicoes_medicinais: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type IdosoCountAggregateOutputType = {
    id: number
    nome: number
    data_nascimento: number
    cpf: number
    sexo: number
    peso: number
    condicoes_medicinais: number
    criado_em: number
    atualizado_em: number
    _all: number
  }


  export type IdosoAvgAggregateInputType = {
    id?: true
    peso?: true
  }

  export type IdosoSumAggregateInputType = {
    id?: true
    peso?: true
  }

  export type IdosoMinAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    cpf?: true
    sexo?: true
    peso?: true
    condicoes_medicinais?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type IdosoMaxAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    cpf?: true
    sexo?: true
    peso?: true
    condicoes_medicinais?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type IdosoCountAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    cpf?: true
    sexo?: true
    peso?: true
    condicoes_medicinais?: true
    criado_em?: true
    atualizado_em?: true
    _all?: true
  }

  export type IdosoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idoso to aggregate.
     */
    where?: IdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idosos to fetch.
     */
    orderBy?: IdosoOrderByWithRelationInput | IdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idosos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Idosos
    **/
    _count?: true | IdosoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdosoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdosoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdosoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdosoMaxAggregateInputType
  }

  export type GetIdosoAggregateType<T extends IdosoAggregateArgs> = {
        [P in keyof T & keyof AggregateIdoso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdoso[P]>
      : GetScalarType<T[P], AggregateIdoso[P]>
  }




  export type IdosoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdosoWhereInput
    orderBy?: IdosoOrderByWithAggregationInput | IdosoOrderByWithAggregationInput[]
    by: IdosoScalarFieldEnum[] | IdosoScalarFieldEnum
    having?: IdosoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdosoCountAggregateInputType | true
    _avg?: IdosoAvgAggregateInputType
    _sum?: IdosoSumAggregateInputType
    _min?: IdosoMinAggregateInputType
    _max?: IdosoMaxAggregateInputType
  }

  export type IdosoGroupByOutputType = {
    id: number
    nome: string
    data_nascimento: Date | null
    cpf: string
    sexo: string | null
    peso: number | null
    condicoes_medicinais: string | null
    criado_em: Date
    atualizado_em: Date
    _count: IdosoCountAggregateOutputType | null
    _avg: IdosoAvgAggregateOutputType | null
    _sum: IdosoSumAggregateOutputType | null
    _min: IdosoMinAggregateOutputType | null
    _max: IdosoMaxAggregateOutputType | null
  }

  type GetIdosoGroupByPayload<T extends IdosoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdosoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdosoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdosoGroupByOutputType[P]>
            : GetScalarType<T[P], IdosoGroupByOutputType[P]>
        }
      >
    >


  export type IdosoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    cpf?: boolean
    sexo?: boolean
    peso?: boolean
    condicoes_medicinais?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    doencas?: boolean | Idoso$doencasArgs<ExtArgs>
    medicamentos?: boolean | Idoso$medicamentosArgs<ExtArgs>
    alimentacoes?: boolean | Idoso$alimentacoesArgs<ExtArgs>
    prontuarios?: boolean | Idoso$prontuariosArgs<ExtArgs>
    uploads?: boolean | Idoso$uploadsArgs<ExtArgs>
    relacaoCuidadores?: boolean | Idoso$relacaoCuidadoresArgs<ExtArgs>
    relatorios?: boolean | Idoso$relatoriosArgs<ExtArgs>
    feedAtividades?: boolean | Idoso$feedAtividadesArgs<ExtArgs>
    _count?: boolean | IdosoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idoso"]>

  export type IdosoSelectScalar = {
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    cpf?: boolean
    sexo?: boolean
    peso?: boolean
    condicoes_medicinais?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }

  export type IdosoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doencas?: boolean | Idoso$doencasArgs<ExtArgs>
    medicamentos?: boolean | Idoso$medicamentosArgs<ExtArgs>
    alimentacoes?: boolean | Idoso$alimentacoesArgs<ExtArgs>
    prontuarios?: boolean | Idoso$prontuariosArgs<ExtArgs>
    uploads?: boolean | Idoso$uploadsArgs<ExtArgs>
    relacaoCuidadores?: boolean | Idoso$relacaoCuidadoresArgs<ExtArgs>
    relatorios?: boolean | Idoso$relatoriosArgs<ExtArgs>
    feedAtividades?: boolean | Idoso$feedAtividadesArgs<ExtArgs>
    _count?: boolean | IdosoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IdosoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Idoso"
    objects: {
      doencas: Prisma.$IdosoDoencaPayload<ExtArgs>[]
      medicamentos: Prisma.$MedicamentoPayload<ExtArgs>[]
      alimentacoes: Prisma.$AlimentacaoPayload<ExtArgs>[]
      prontuarios: Prisma.$ProntuarioDiarioPayload<ExtArgs>[]
      uploads: Prisma.$MediaUploadPayload<ExtArgs>[]
      relacaoCuidadores: Prisma.$CuidadorIdosoPayload<ExtArgs>[]
      relatorios: Prisma.$RelatorioPayload<ExtArgs>[]
      feedAtividades: Prisma.$FeedAtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      data_nascimento: Date | null
      cpf: string
      sexo: string | null
      peso: number | null
      condicoes_medicinais: string | null
      criado_em: Date
      atualizado_em: Date
    }, ExtArgs["result"]["idoso"]>
    composites: {}
  }


  type IdosoGetPayload<S extends boolean | null | undefined | IdosoDefaultArgs> = $Result.GetResult<Prisma.$IdosoPayload, S>

  type IdosoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IdosoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IdosoCountAggregateInputType | true
    }

  export interface IdosoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idoso'], meta: { name: 'Idoso' } }
    /**
     * Find zero or one Idoso that matches the filter.
     * @param {IdosoFindUniqueArgs} args - Arguments to find a Idoso
     * @example
     * // Get one Idoso
     * const idoso = await prisma.idoso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IdosoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoFindUniqueArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Idoso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IdosoFindUniqueOrThrowArgs} args - Arguments to find a Idoso
     * @example
     * // Get one Idoso
     * const idoso = await prisma.idoso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IdosoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Idoso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoFindFirstArgs} args - Arguments to find a Idoso
     * @example
     * // Get one Idoso
     * const idoso = await prisma.idoso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IdosoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoFindFirstArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Idoso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoFindFirstOrThrowArgs} args - Arguments to find a Idoso
     * @example
     * // Get one Idoso
     * const idoso = await prisma.idoso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IdosoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Idosos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idosos
     * const idosos = await prisma.idoso.findMany()
     * 
     * // Get first 10 Idosos
     * const idosos = await prisma.idoso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idosoWithIdOnly = await prisma.idoso.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IdosoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Idoso.
     * @param {IdosoCreateArgs} args - Arguments to create a Idoso.
     * @example
     * // Create one Idoso
     * const Idoso = await prisma.idoso.create({
     *   data: {
     *     // ... data to create a Idoso
     *   }
     * })
     * 
    **/
    create<T extends IdosoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoCreateArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Idoso.
     * @param {IdosoDeleteArgs} args - Arguments to delete one Idoso.
     * @example
     * // Delete one Idoso
     * const Idoso = await prisma.idoso.delete({
     *   where: {
     *     // ... filter to delete one Idoso
     *   }
     * })
     * 
    **/
    delete<T extends IdosoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDeleteArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Idoso.
     * @param {IdosoUpdateArgs} args - Arguments to update one Idoso.
     * @example
     * // Update one Idoso
     * const idoso = await prisma.idoso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IdosoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoUpdateArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Idosos.
     * @param {IdosoDeleteManyArgs} args - Arguments to filter Idosos to delete.
     * @example
     * // Delete a few Idosos
     * const { count } = await prisma.idoso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IdosoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idosos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idosos
     * const idoso = await prisma.idoso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IdosoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Idoso.
     * @param {IdosoUpsertArgs} args - Arguments to update or create a Idoso.
     * @example
     * // Update or create a Idoso
     * const idoso = await prisma.idoso.upsert({
     *   create: {
     *     // ... data to create a Idoso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idoso we want to update
     *   }
     * })
    **/
    upsert<T extends IdosoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoUpsertArgs<ExtArgs>>
    ): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Idosos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoCountArgs} args - Arguments to filter Idosos to count.
     * @example
     * // Count the number of Idosos
     * const count = await prisma.idoso.count({
     *   where: {
     *     // ... the filter for the Idosos we want to count
     *   }
     * })
    **/
    count<T extends IdosoCountArgs>(
      args?: Subset<T, IdosoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdosoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idoso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdosoAggregateArgs>(args: Subset<T, IdosoAggregateArgs>): Prisma.PrismaPromise<GetIdosoAggregateType<T>>

    /**
     * Group by Idoso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdosoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdosoGroupByArgs['orderBy'] }
        : { orderBy?: IdosoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdosoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdosoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Idoso model
   */
  readonly fields: IdosoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idoso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdosoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doencas<T extends Idoso$doencasArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$doencasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findMany'> | Null>;

    medicamentos<T extends Idoso$medicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$medicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'findMany'> | Null>;

    alimentacoes<T extends Idoso$alimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$alimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    prontuarios<T extends Idoso$prontuariosArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$prontuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    uploads<T extends Idoso$uploadsArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$uploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findMany'> | Null>;

    relacaoCuidadores<T extends Idoso$relacaoCuidadoresArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$relacaoCuidadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findMany'> | Null>;

    relatorios<T extends Idoso$relatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$relatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findMany'> | Null>;

    feedAtividades<T extends Idoso$feedAtividadesArgs<ExtArgs> = {}>(args?: Subset<T, Idoso$feedAtividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Idoso model
   */ 
  interface IdosoFieldRefs {
    readonly id: FieldRef<"Idoso", 'Int'>
    readonly nome: FieldRef<"Idoso", 'String'>
    readonly data_nascimento: FieldRef<"Idoso", 'DateTime'>
    readonly cpf: FieldRef<"Idoso", 'String'>
    readonly sexo: FieldRef<"Idoso", 'String'>
    readonly peso: FieldRef<"Idoso", 'Float'>
    readonly condicoes_medicinais: FieldRef<"Idoso", 'String'>
    readonly criado_em: FieldRef<"Idoso", 'DateTime'>
    readonly atualizado_em: FieldRef<"Idoso", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Idoso findUnique
   */
  export type IdosoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * Filter, which Idoso to fetch.
     */
    where: IdosoWhereUniqueInput
  }


  /**
   * Idoso findUniqueOrThrow
   */
  export type IdosoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * Filter, which Idoso to fetch.
     */
    where: IdosoWhereUniqueInput
  }


  /**
   * Idoso findFirst
   */
  export type IdosoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * Filter, which Idoso to fetch.
     */
    where?: IdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idosos to fetch.
     */
    orderBy?: IdosoOrderByWithRelationInput | IdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Idosos.
     */
    cursor?: IdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idosos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Idosos.
     */
    distinct?: IdosoScalarFieldEnum | IdosoScalarFieldEnum[]
  }


  /**
   * Idoso findFirstOrThrow
   */
  export type IdosoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * Filter, which Idoso to fetch.
     */
    where?: IdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idosos to fetch.
     */
    orderBy?: IdosoOrderByWithRelationInput | IdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Idosos.
     */
    cursor?: IdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idosos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Idosos.
     */
    distinct?: IdosoScalarFieldEnum | IdosoScalarFieldEnum[]
  }


  /**
   * Idoso findMany
   */
  export type IdosoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * Filter, which Idosos to fetch.
     */
    where?: IdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idosos to fetch.
     */
    orderBy?: IdosoOrderByWithRelationInput | IdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Idosos.
     */
    cursor?: IdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idosos.
     */
    skip?: number
    distinct?: IdosoScalarFieldEnum | IdosoScalarFieldEnum[]
  }


  /**
   * Idoso create
   */
  export type IdosoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * The data needed to create a Idoso.
     */
    data: XOR<IdosoCreateInput, IdosoUncheckedCreateInput>
  }


  /**
   * Idoso update
   */
  export type IdosoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * The data needed to update a Idoso.
     */
    data: XOR<IdosoUpdateInput, IdosoUncheckedUpdateInput>
    /**
     * Choose, which Idoso to update.
     */
    where: IdosoWhereUniqueInput
  }


  /**
   * Idoso updateMany
   */
  export type IdosoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Idosos.
     */
    data: XOR<IdosoUpdateManyMutationInput, IdosoUncheckedUpdateManyInput>
    /**
     * Filter which Idosos to update
     */
    where?: IdosoWhereInput
  }


  /**
   * Idoso upsert
   */
  export type IdosoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * The filter to search for the Idoso to update in case it exists.
     */
    where: IdosoWhereUniqueInput
    /**
     * In case the Idoso found by the `where` argument doesn't exist, create a new Idoso with this data.
     */
    create: XOR<IdosoCreateInput, IdosoUncheckedCreateInput>
    /**
     * In case the Idoso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdosoUpdateInput, IdosoUncheckedUpdateInput>
  }


  /**
   * Idoso delete
   */
  export type IdosoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    /**
     * Filter which Idoso to delete.
     */
    where: IdosoWhereUniqueInput
  }


  /**
   * Idoso deleteMany
   */
  export type IdosoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idosos to delete
     */
    where?: IdosoWhereInput
  }


  /**
   * Idoso.doencas
   */
  export type Idoso$doencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    where?: IdosoDoencaWhereInput
    orderBy?: IdosoDoencaOrderByWithRelationInput | IdosoDoencaOrderByWithRelationInput[]
    cursor?: IdosoDoencaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdosoDoencaScalarFieldEnum | IdosoDoencaScalarFieldEnum[]
  }


  /**
   * Idoso.medicamentos
   */
  export type Idoso$medicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    cursor?: MedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }


  /**
   * Idoso.alimentacoes
   */
  export type Idoso$alimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    where?: AlimentacaoWhereInput
    orderBy?: AlimentacaoOrderByWithRelationInput | AlimentacaoOrderByWithRelationInput[]
    cursor?: AlimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlimentacaoScalarFieldEnum | AlimentacaoScalarFieldEnum[]
  }


  /**
   * Idoso.prontuarios
   */
  export type Idoso$prontuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    where?: ProntuarioDiarioWhereInput
    orderBy?: ProntuarioDiarioOrderByWithRelationInput | ProntuarioDiarioOrderByWithRelationInput[]
    cursor?: ProntuarioDiarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProntuarioDiarioScalarFieldEnum | ProntuarioDiarioScalarFieldEnum[]
  }


  /**
   * Idoso.uploads
   */
  export type Idoso$uploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    where?: MediaUploadWhereInput
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    cursor?: MediaUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }


  /**
   * Idoso.relacaoCuidadores
   */
  export type Idoso$relacaoCuidadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    where?: CuidadorIdosoWhereInput
    orderBy?: CuidadorIdosoOrderByWithRelationInput | CuidadorIdosoOrderByWithRelationInput[]
    cursor?: CuidadorIdosoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuidadorIdosoScalarFieldEnum | CuidadorIdosoScalarFieldEnum[]
  }


  /**
   * Idoso.relatorios
   */
  export type Idoso$relatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    cursor?: RelatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }


  /**
   * Idoso.feedAtividades
   */
  export type Idoso$feedAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    where?: FeedAtividadeWhereInput
    orderBy?: FeedAtividadeOrderByWithRelationInput | FeedAtividadeOrderByWithRelationInput[]
    cursor?: FeedAtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedAtividadeScalarFieldEnum | FeedAtividadeScalarFieldEnum[]
  }


  /**
   * Idoso without action
   */
  export type IdosoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
  }



  /**
   * Model Doenca
   */

  export type AggregateDoenca = {
    _count: DoencaCountAggregateOutputType | null
    _avg: DoencaAvgAggregateOutputType | null
    _sum: DoencaSumAggregateOutputType | null
    _min: DoencaMinAggregateOutputType | null
    _max: DoencaMaxAggregateOutputType | null
  }

  export type DoencaAvgAggregateOutputType = {
    id: number | null
  }

  export type DoencaSumAggregateOutputType = {
    id: number | null
  }

  export type DoencaMinAggregateOutputType = {
    id: number | null
    nome_doenca: string | null
    codigo_cid: string | null
    categoria: string | null
  }

  export type DoencaMaxAggregateOutputType = {
    id: number | null
    nome_doenca: string | null
    codigo_cid: string | null
    categoria: string | null
  }

  export type DoencaCountAggregateOutputType = {
    id: number
    nome_doenca: number
    codigo_cid: number
    categoria: number
    _all: number
  }


  export type DoencaAvgAggregateInputType = {
    id?: true
  }

  export type DoencaSumAggregateInputType = {
    id?: true
  }

  export type DoencaMinAggregateInputType = {
    id?: true
    nome_doenca?: true
    codigo_cid?: true
    categoria?: true
  }

  export type DoencaMaxAggregateInputType = {
    id?: true
    nome_doenca?: true
    codigo_cid?: true
    categoria?: true
  }

  export type DoencaCountAggregateInputType = {
    id?: true
    nome_doenca?: true
    codigo_cid?: true
    categoria?: true
    _all?: true
  }

  export type DoencaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doenca to aggregate.
     */
    where?: DoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doencas to fetch.
     */
    orderBy?: DoencaOrderByWithRelationInput | DoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doencas
    **/
    _count?: true | DoencaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoencaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoencaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoencaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoencaMaxAggregateInputType
  }

  export type GetDoencaAggregateType<T extends DoencaAggregateArgs> = {
        [P in keyof T & keyof AggregateDoenca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoenca[P]>
      : GetScalarType<T[P], AggregateDoenca[P]>
  }




  export type DoencaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoencaWhereInput
    orderBy?: DoencaOrderByWithAggregationInput | DoencaOrderByWithAggregationInput[]
    by: DoencaScalarFieldEnum[] | DoencaScalarFieldEnum
    having?: DoencaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoencaCountAggregateInputType | true
    _avg?: DoencaAvgAggregateInputType
    _sum?: DoencaSumAggregateInputType
    _min?: DoencaMinAggregateInputType
    _max?: DoencaMaxAggregateInputType
  }

  export type DoencaGroupByOutputType = {
    id: number
    nome_doenca: string
    codigo_cid: string | null
    categoria: string | null
    _count: DoencaCountAggregateOutputType | null
    _avg: DoencaAvgAggregateOutputType | null
    _sum: DoencaSumAggregateOutputType | null
    _min: DoencaMinAggregateOutputType | null
    _max: DoencaMaxAggregateOutputType | null
  }

  type GetDoencaGroupByPayload<T extends DoencaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoencaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoencaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoencaGroupByOutputType[P]>
            : GetScalarType<T[P], DoencaGroupByOutputType[P]>
        }
      >
    >


  export type DoencaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_doenca?: boolean
    codigo_cid?: boolean
    categoria?: boolean
    idosos?: boolean | Doenca$idososArgs<ExtArgs>
    _count?: boolean | DoencaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doenca"]>

  export type DoencaSelectScalar = {
    id?: boolean
    nome_doenca?: boolean
    codigo_cid?: boolean
    categoria?: boolean
  }

  export type DoencaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idosos?: boolean | Doenca$idososArgs<ExtArgs>
    _count?: boolean | DoencaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DoencaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doenca"
    objects: {
      idosos: Prisma.$IdosoDoencaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_doenca: string
      codigo_cid: string | null
      categoria: string | null
    }, ExtArgs["result"]["doenca"]>
    composites: {}
  }


  type DoencaGetPayload<S extends boolean | null | undefined | DoencaDefaultArgs> = $Result.GetResult<Prisma.$DoencaPayload, S>

  type DoencaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoencaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoencaCountAggregateInputType | true
    }

  export interface DoencaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doenca'], meta: { name: 'Doenca' } }
    /**
     * Find zero or one Doenca that matches the filter.
     * @param {DoencaFindUniqueArgs} args - Arguments to find a Doenca
     * @example
     * // Get one Doenca
     * const doenca = await prisma.doenca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoencaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DoencaFindUniqueArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Doenca that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoencaFindUniqueOrThrowArgs} args - Arguments to find a Doenca
     * @example
     * // Get one Doenca
     * const doenca = await prisma.doenca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoencaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoencaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Doenca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaFindFirstArgs} args - Arguments to find a Doenca
     * @example
     * // Get one Doenca
     * const doenca = await prisma.doenca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoencaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DoencaFindFirstArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Doenca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaFindFirstOrThrowArgs} args - Arguments to find a Doenca
     * @example
     * // Get one Doenca
     * const doenca = await prisma.doenca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoencaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoencaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Doencas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doencas
     * const doencas = await prisma.doenca.findMany()
     * 
     * // Get first 10 Doencas
     * const doencas = await prisma.doenca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doencaWithIdOnly = await prisma.doenca.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DoencaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoencaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Doenca.
     * @param {DoencaCreateArgs} args - Arguments to create a Doenca.
     * @example
     * // Create one Doenca
     * const Doenca = await prisma.doenca.create({
     *   data: {
     *     // ... data to create a Doenca
     *   }
     * })
     * 
    **/
    create<T extends DoencaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DoencaCreateArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Doenca.
     * @param {DoencaDeleteArgs} args - Arguments to delete one Doenca.
     * @example
     * // Delete one Doenca
     * const Doenca = await prisma.doenca.delete({
     *   where: {
     *     // ... filter to delete one Doenca
     *   }
     * })
     * 
    **/
    delete<T extends DoencaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DoencaDeleteArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Doenca.
     * @param {DoencaUpdateArgs} args - Arguments to update one Doenca.
     * @example
     * // Update one Doenca
     * const doenca = await prisma.doenca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoencaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DoencaUpdateArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Doencas.
     * @param {DoencaDeleteManyArgs} args - Arguments to filter Doencas to delete.
     * @example
     * // Delete a few Doencas
     * const { count } = await prisma.doenca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoencaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoencaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doencas
     * const doenca = await prisma.doenca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoencaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DoencaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doenca.
     * @param {DoencaUpsertArgs} args - Arguments to update or create a Doenca.
     * @example
     * // Update or create a Doenca
     * const doenca = await prisma.doenca.upsert({
     *   create: {
     *     // ... data to create a Doenca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doenca we want to update
     *   }
     * })
    **/
    upsert<T extends DoencaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DoencaUpsertArgs<ExtArgs>>
    ): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Doencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaCountArgs} args - Arguments to filter Doencas to count.
     * @example
     * // Count the number of Doencas
     * const count = await prisma.doenca.count({
     *   where: {
     *     // ... the filter for the Doencas we want to count
     *   }
     * })
    **/
    count<T extends DoencaCountArgs>(
      args?: Subset<T, DoencaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoencaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoencaAggregateArgs>(args: Subset<T, DoencaAggregateArgs>): Prisma.PrismaPromise<GetDoencaAggregateType<T>>

    /**
     * Group by Doenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoencaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoencaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoencaGroupByArgs['orderBy'] }
        : { orderBy?: DoencaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoencaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoencaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doenca model
   */
  readonly fields: DoencaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doenca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoencaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    idosos<T extends Doenca$idososArgs<ExtArgs> = {}>(args?: Subset<T, Doenca$idososArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Doenca model
   */ 
  interface DoencaFieldRefs {
    readonly id: FieldRef<"Doenca", 'Int'>
    readonly nome_doenca: FieldRef<"Doenca", 'String'>
    readonly codigo_cid: FieldRef<"Doenca", 'String'>
    readonly categoria: FieldRef<"Doenca", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Doenca findUnique
   */
  export type DoencaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * Filter, which Doenca to fetch.
     */
    where: DoencaWhereUniqueInput
  }


  /**
   * Doenca findUniqueOrThrow
   */
  export type DoencaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * Filter, which Doenca to fetch.
     */
    where: DoencaWhereUniqueInput
  }


  /**
   * Doenca findFirst
   */
  export type DoencaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * Filter, which Doenca to fetch.
     */
    where?: DoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doencas to fetch.
     */
    orderBy?: DoencaOrderByWithRelationInput | DoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doencas.
     */
    cursor?: DoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doencas.
     */
    distinct?: DoencaScalarFieldEnum | DoencaScalarFieldEnum[]
  }


  /**
   * Doenca findFirstOrThrow
   */
  export type DoencaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * Filter, which Doenca to fetch.
     */
    where?: DoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doencas to fetch.
     */
    orderBy?: DoencaOrderByWithRelationInput | DoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doencas.
     */
    cursor?: DoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doencas.
     */
    distinct?: DoencaScalarFieldEnum | DoencaScalarFieldEnum[]
  }


  /**
   * Doenca findMany
   */
  export type DoencaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * Filter, which Doencas to fetch.
     */
    where?: DoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doencas to fetch.
     */
    orderBy?: DoencaOrderByWithRelationInput | DoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doencas.
     */
    cursor?: DoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doencas.
     */
    skip?: number
    distinct?: DoencaScalarFieldEnum | DoencaScalarFieldEnum[]
  }


  /**
   * Doenca create
   */
  export type DoencaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * The data needed to create a Doenca.
     */
    data: XOR<DoencaCreateInput, DoencaUncheckedCreateInput>
  }


  /**
   * Doenca update
   */
  export type DoencaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * The data needed to update a Doenca.
     */
    data: XOR<DoencaUpdateInput, DoencaUncheckedUpdateInput>
    /**
     * Choose, which Doenca to update.
     */
    where: DoencaWhereUniqueInput
  }


  /**
   * Doenca updateMany
   */
  export type DoencaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doencas.
     */
    data: XOR<DoencaUpdateManyMutationInput, DoencaUncheckedUpdateManyInput>
    /**
     * Filter which Doencas to update
     */
    where?: DoencaWhereInput
  }


  /**
   * Doenca upsert
   */
  export type DoencaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * The filter to search for the Doenca to update in case it exists.
     */
    where: DoencaWhereUniqueInput
    /**
     * In case the Doenca found by the `where` argument doesn't exist, create a new Doenca with this data.
     */
    create: XOR<DoencaCreateInput, DoencaUncheckedCreateInput>
    /**
     * In case the Doenca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoencaUpdateInput, DoencaUncheckedUpdateInput>
  }


  /**
   * Doenca delete
   */
  export type DoencaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
    /**
     * Filter which Doenca to delete.
     */
    where: DoencaWhereUniqueInput
  }


  /**
   * Doenca deleteMany
   */
  export type DoencaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doencas to delete
     */
    where?: DoencaWhereInput
  }


  /**
   * Doenca.idosos
   */
  export type Doenca$idososArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    where?: IdosoDoencaWhereInput
    orderBy?: IdosoDoencaOrderByWithRelationInput | IdosoDoencaOrderByWithRelationInput[]
    cursor?: IdosoDoencaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdosoDoencaScalarFieldEnum | IdosoDoencaScalarFieldEnum[]
  }


  /**
   * Doenca without action
   */
  export type DoencaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doenca
     */
    select?: DoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoencaInclude<ExtArgs> | null
  }



  /**
   * Model IdosoDoenca
   */

  export type AggregateIdosoDoenca = {
    _count: IdosoDoencaCountAggregateOutputType | null
    _avg: IdosoDoencaAvgAggregateOutputType | null
    _sum: IdosoDoencaSumAggregateOutputType | null
    _min: IdosoDoencaMinAggregateOutputType | null
    _max: IdosoDoencaMaxAggregateOutputType | null
  }

  export type IdosoDoencaAvgAggregateOutputType = {
    id: number | null
    id_doenca: number | null
    id_idoso: number | null
  }

  export type IdosoDoencaSumAggregateOutputType = {
    id: number | null
    id_doenca: number | null
    id_idoso: number | null
  }

  export type IdosoDoencaMinAggregateOutputType = {
    id: number | null
    id_doenca: number | null
    id_idoso: number | null
    data_diagnostico: Date | null
    observacao: string | null
  }

  export type IdosoDoencaMaxAggregateOutputType = {
    id: number | null
    id_doenca: number | null
    id_idoso: number | null
    data_diagnostico: Date | null
    observacao: string | null
  }

  export type IdosoDoencaCountAggregateOutputType = {
    id: number
    id_doenca: number
    id_idoso: number
    data_diagnostico: number
    observacao: number
    _all: number
  }


  export type IdosoDoencaAvgAggregateInputType = {
    id?: true
    id_doenca?: true
    id_idoso?: true
  }

  export type IdosoDoencaSumAggregateInputType = {
    id?: true
    id_doenca?: true
    id_idoso?: true
  }

  export type IdosoDoencaMinAggregateInputType = {
    id?: true
    id_doenca?: true
    id_idoso?: true
    data_diagnostico?: true
    observacao?: true
  }

  export type IdosoDoencaMaxAggregateInputType = {
    id?: true
    id_doenca?: true
    id_idoso?: true
    data_diagnostico?: true
    observacao?: true
  }

  export type IdosoDoencaCountAggregateInputType = {
    id?: true
    id_doenca?: true
    id_idoso?: true
    data_diagnostico?: true
    observacao?: true
    _all?: true
  }

  export type IdosoDoencaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdosoDoenca to aggregate.
     */
    where?: IdosoDoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdosoDoencas to fetch.
     */
    orderBy?: IdosoDoencaOrderByWithRelationInput | IdosoDoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdosoDoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdosoDoencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdosoDoencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdosoDoencas
    **/
    _count?: true | IdosoDoencaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdosoDoencaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdosoDoencaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdosoDoencaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdosoDoencaMaxAggregateInputType
  }

  export type GetIdosoDoencaAggregateType<T extends IdosoDoencaAggregateArgs> = {
        [P in keyof T & keyof AggregateIdosoDoenca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdosoDoenca[P]>
      : GetScalarType<T[P], AggregateIdosoDoenca[P]>
  }




  export type IdosoDoencaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdosoDoencaWhereInput
    orderBy?: IdosoDoencaOrderByWithAggregationInput | IdosoDoencaOrderByWithAggregationInput[]
    by: IdosoDoencaScalarFieldEnum[] | IdosoDoencaScalarFieldEnum
    having?: IdosoDoencaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdosoDoencaCountAggregateInputType | true
    _avg?: IdosoDoencaAvgAggregateInputType
    _sum?: IdosoDoencaSumAggregateInputType
    _min?: IdosoDoencaMinAggregateInputType
    _max?: IdosoDoencaMaxAggregateInputType
  }

  export type IdosoDoencaGroupByOutputType = {
    id: number
    id_doenca: number
    id_idoso: number
    data_diagnostico: Date | null
    observacao: string | null
    _count: IdosoDoencaCountAggregateOutputType | null
    _avg: IdosoDoencaAvgAggregateOutputType | null
    _sum: IdosoDoencaSumAggregateOutputType | null
    _min: IdosoDoencaMinAggregateOutputType | null
    _max: IdosoDoencaMaxAggregateOutputType | null
  }

  type GetIdosoDoencaGroupByPayload<T extends IdosoDoencaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdosoDoencaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdosoDoencaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdosoDoencaGroupByOutputType[P]>
            : GetScalarType<T[P], IdosoDoencaGroupByOutputType[P]>
        }
      >
    >


  export type IdosoDoencaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_doenca?: boolean
    id_idoso?: boolean
    data_diagnostico?: boolean
    observacao?: boolean
    doenca?: boolean | DoencaDefaultArgs<ExtArgs>
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idosoDoenca"]>

  export type IdosoDoencaSelectScalar = {
    id?: boolean
    id_doenca?: boolean
    id_idoso?: boolean
    data_diagnostico?: boolean
    observacao?: boolean
  }

  export type IdosoDoencaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doenca?: boolean | DoencaDefaultArgs<ExtArgs>
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
  }


  export type $IdosoDoencaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdosoDoenca"
    objects: {
      doenca: Prisma.$DoencaPayload<ExtArgs>
      idoso: Prisma.$IdosoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_doenca: number
      id_idoso: number
      data_diagnostico: Date | null
      observacao: string | null
    }, ExtArgs["result"]["idosoDoenca"]>
    composites: {}
  }


  type IdosoDoencaGetPayload<S extends boolean | null | undefined | IdosoDoencaDefaultArgs> = $Result.GetResult<Prisma.$IdosoDoencaPayload, S>

  type IdosoDoencaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IdosoDoencaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IdosoDoencaCountAggregateInputType | true
    }

  export interface IdosoDoencaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdosoDoenca'], meta: { name: 'IdosoDoenca' } }
    /**
     * Find zero or one IdosoDoenca that matches the filter.
     * @param {IdosoDoencaFindUniqueArgs} args - Arguments to find a IdosoDoenca
     * @example
     * // Get one IdosoDoenca
     * const idosoDoenca = await prisma.idosoDoenca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IdosoDoencaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDoencaFindUniqueArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IdosoDoenca that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IdosoDoencaFindUniqueOrThrowArgs} args - Arguments to find a IdosoDoenca
     * @example
     * // Get one IdosoDoenca
     * const idosoDoenca = await prisma.idosoDoenca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IdosoDoencaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoDoencaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IdosoDoenca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaFindFirstArgs} args - Arguments to find a IdosoDoenca
     * @example
     * // Get one IdosoDoenca
     * const idosoDoenca = await prisma.idosoDoenca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IdosoDoencaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoDoencaFindFirstArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IdosoDoenca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaFindFirstOrThrowArgs} args - Arguments to find a IdosoDoenca
     * @example
     * // Get one IdosoDoenca
     * const idosoDoenca = await prisma.idosoDoenca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IdosoDoencaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoDoencaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IdosoDoencas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdosoDoencas
     * const idosoDoencas = await prisma.idosoDoenca.findMany()
     * 
     * // Get first 10 IdosoDoencas
     * const idosoDoencas = await prisma.idosoDoenca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idosoDoencaWithIdOnly = await prisma.idosoDoenca.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IdosoDoencaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoDoencaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IdosoDoenca.
     * @param {IdosoDoencaCreateArgs} args - Arguments to create a IdosoDoenca.
     * @example
     * // Create one IdosoDoenca
     * const IdosoDoenca = await prisma.idosoDoenca.create({
     *   data: {
     *     // ... data to create a IdosoDoenca
     *   }
     * })
     * 
    **/
    create<T extends IdosoDoencaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDoencaCreateArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a IdosoDoenca.
     * @param {IdosoDoencaDeleteArgs} args - Arguments to delete one IdosoDoenca.
     * @example
     * // Delete one IdosoDoenca
     * const IdosoDoenca = await prisma.idosoDoenca.delete({
     *   where: {
     *     // ... filter to delete one IdosoDoenca
     *   }
     * })
     * 
    **/
    delete<T extends IdosoDoencaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDoencaDeleteArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IdosoDoenca.
     * @param {IdosoDoencaUpdateArgs} args - Arguments to update one IdosoDoenca.
     * @example
     * // Update one IdosoDoenca
     * const idosoDoenca = await prisma.idosoDoenca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IdosoDoencaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDoencaUpdateArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IdosoDoencas.
     * @param {IdosoDoencaDeleteManyArgs} args - Arguments to filter IdosoDoencas to delete.
     * @example
     * // Delete a few IdosoDoencas
     * const { count } = await prisma.idosoDoenca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IdosoDoencaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IdosoDoencaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdosoDoencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdosoDoencas
     * const idosoDoenca = await prisma.idosoDoenca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IdosoDoencaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDoencaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IdosoDoenca.
     * @param {IdosoDoencaUpsertArgs} args - Arguments to update or create a IdosoDoenca.
     * @example
     * // Update or create a IdosoDoenca
     * const idosoDoenca = await prisma.idosoDoenca.upsert({
     *   create: {
     *     // ... data to create a IdosoDoenca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdosoDoenca we want to update
     *   }
     * })
    **/
    upsert<T extends IdosoDoencaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IdosoDoencaUpsertArgs<ExtArgs>>
    ): Prisma__IdosoDoencaClient<$Result.GetResult<Prisma.$IdosoDoencaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IdosoDoencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaCountArgs} args - Arguments to filter IdosoDoencas to count.
     * @example
     * // Count the number of IdosoDoencas
     * const count = await prisma.idosoDoenca.count({
     *   where: {
     *     // ... the filter for the IdosoDoencas we want to count
     *   }
     * })
    **/
    count<T extends IdosoDoencaCountArgs>(
      args?: Subset<T, IdosoDoencaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdosoDoencaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdosoDoenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdosoDoencaAggregateArgs>(args: Subset<T, IdosoDoencaAggregateArgs>): Prisma.PrismaPromise<GetIdosoDoencaAggregateType<T>>

    /**
     * Group by IdosoDoenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdosoDoencaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdosoDoencaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdosoDoencaGroupByArgs['orderBy'] }
        : { orderBy?: IdosoDoencaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdosoDoencaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdosoDoencaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdosoDoenca model
   */
  readonly fields: IdosoDoencaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdosoDoenca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdosoDoencaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doenca<T extends DoencaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoencaDefaultArgs<ExtArgs>>): Prisma__DoencaClient<$Result.GetResult<Prisma.$DoencaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IdosoDoenca model
   */ 
  interface IdosoDoencaFieldRefs {
    readonly id: FieldRef<"IdosoDoenca", 'Int'>
    readonly id_doenca: FieldRef<"IdosoDoenca", 'Int'>
    readonly id_idoso: FieldRef<"IdosoDoenca", 'Int'>
    readonly data_diagnostico: FieldRef<"IdosoDoenca", 'DateTime'>
    readonly observacao: FieldRef<"IdosoDoenca", 'String'>
  }
    

  // Custom InputTypes

  /**
   * IdosoDoenca findUnique
   */
  export type IdosoDoencaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * Filter, which IdosoDoenca to fetch.
     */
    where: IdosoDoencaWhereUniqueInput
  }


  /**
   * IdosoDoenca findUniqueOrThrow
   */
  export type IdosoDoencaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * Filter, which IdosoDoenca to fetch.
     */
    where: IdosoDoencaWhereUniqueInput
  }


  /**
   * IdosoDoenca findFirst
   */
  export type IdosoDoencaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * Filter, which IdosoDoenca to fetch.
     */
    where?: IdosoDoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdosoDoencas to fetch.
     */
    orderBy?: IdosoDoencaOrderByWithRelationInput | IdosoDoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdosoDoencas.
     */
    cursor?: IdosoDoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdosoDoencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdosoDoencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdosoDoencas.
     */
    distinct?: IdosoDoencaScalarFieldEnum | IdosoDoencaScalarFieldEnum[]
  }


  /**
   * IdosoDoenca findFirstOrThrow
   */
  export type IdosoDoencaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * Filter, which IdosoDoenca to fetch.
     */
    where?: IdosoDoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdosoDoencas to fetch.
     */
    orderBy?: IdosoDoencaOrderByWithRelationInput | IdosoDoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdosoDoencas.
     */
    cursor?: IdosoDoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdosoDoencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdosoDoencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdosoDoencas.
     */
    distinct?: IdosoDoencaScalarFieldEnum | IdosoDoencaScalarFieldEnum[]
  }


  /**
   * IdosoDoenca findMany
   */
  export type IdosoDoencaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * Filter, which IdosoDoencas to fetch.
     */
    where?: IdosoDoencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdosoDoencas to fetch.
     */
    orderBy?: IdosoDoencaOrderByWithRelationInput | IdosoDoencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdosoDoencas.
     */
    cursor?: IdosoDoencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdosoDoencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdosoDoencas.
     */
    skip?: number
    distinct?: IdosoDoencaScalarFieldEnum | IdosoDoencaScalarFieldEnum[]
  }


  /**
   * IdosoDoenca create
   */
  export type IdosoDoencaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * The data needed to create a IdosoDoenca.
     */
    data: XOR<IdosoDoencaCreateInput, IdosoDoencaUncheckedCreateInput>
  }


  /**
   * IdosoDoenca update
   */
  export type IdosoDoencaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * The data needed to update a IdosoDoenca.
     */
    data: XOR<IdosoDoencaUpdateInput, IdosoDoencaUncheckedUpdateInput>
    /**
     * Choose, which IdosoDoenca to update.
     */
    where: IdosoDoencaWhereUniqueInput
  }


  /**
   * IdosoDoenca updateMany
   */
  export type IdosoDoencaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdosoDoencas.
     */
    data: XOR<IdosoDoencaUpdateManyMutationInput, IdosoDoencaUncheckedUpdateManyInput>
    /**
     * Filter which IdosoDoencas to update
     */
    where?: IdosoDoencaWhereInput
  }


  /**
   * IdosoDoenca upsert
   */
  export type IdosoDoencaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * The filter to search for the IdosoDoenca to update in case it exists.
     */
    where: IdosoDoencaWhereUniqueInput
    /**
     * In case the IdosoDoenca found by the `where` argument doesn't exist, create a new IdosoDoenca with this data.
     */
    create: XOR<IdosoDoencaCreateInput, IdosoDoencaUncheckedCreateInput>
    /**
     * In case the IdosoDoenca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdosoDoencaUpdateInput, IdosoDoencaUncheckedUpdateInput>
  }


  /**
   * IdosoDoenca delete
   */
  export type IdosoDoencaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
    /**
     * Filter which IdosoDoenca to delete.
     */
    where: IdosoDoencaWhereUniqueInput
  }


  /**
   * IdosoDoenca deleteMany
   */
  export type IdosoDoencaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdosoDoencas to delete
     */
    where?: IdosoDoencaWhereInput
  }


  /**
   * IdosoDoenca without action
   */
  export type IdosoDoencaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdosoDoenca
     */
    select?: IdosoDoencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoDoencaInclude<ExtArgs> | null
  }



  /**
   * Model Medicamento
   */

  export type AggregateMedicamento = {
    _count: MedicamentoCountAggregateOutputType | null
    _avg: MedicamentoAvgAggregateOutputType | null
    _sum: MedicamentoSumAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  export type MedicamentoAvgAggregateOutputType = {
    id: number | null
    id_idoso: number | null
  }

  export type MedicamentoSumAggregateOutputType = {
    id: number | null
    id_idoso: number | null
  }

  export type MedicamentoMinAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    nome_medicamento: string | null
    via_administracao: string | null
    frequencia: string | null
    dosagem: string | null
    horario: string | null
    observacao: string | null
  }

  export type MedicamentoMaxAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    nome_medicamento: string | null
    via_administracao: string | null
    frequencia: string | null
    dosagem: string | null
    horario: string | null
    observacao: string | null
  }

  export type MedicamentoCountAggregateOutputType = {
    id: number
    id_idoso: number
    nome_medicamento: number
    via_administracao: number
    frequencia: number
    dosagem: number
    horario: number
    observacao: number
    _all: number
  }


  export type MedicamentoAvgAggregateInputType = {
    id?: true
    id_idoso?: true
  }

  export type MedicamentoSumAggregateInputType = {
    id?: true
    id_idoso?: true
  }

  export type MedicamentoMinAggregateInputType = {
    id?: true
    id_idoso?: true
    nome_medicamento?: true
    via_administracao?: true
    frequencia?: true
    dosagem?: true
    horario?: true
    observacao?: true
  }

  export type MedicamentoMaxAggregateInputType = {
    id?: true
    id_idoso?: true
    nome_medicamento?: true
    via_administracao?: true
    frequencia?: true
    dosagem?: true
    horario?: true
    observacao?: true
  }

  export type MedicamentoCountAggregateInputType = {
    id?: true
    id_idoso?: true
    nome_medicamento?: true
    via_administracao?: true
    frequencia?: true
    dosagem?: true
    horario?: true
    observacao?: true
    _all?: true
  }

  export type MedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamento to aggregate.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicamentos
    **/
    _count?: true | MedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicamentoMaxAggregateInputType
  }

  export type GetMedicamentoAggregateType<T extends MedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicamento[P]>
      : GetScalarType<T[P], AggregateMedicamento[P]>
  }




  export type MedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithAggregationInput | MedicamentoOrderByWithAggregationInput[]
    by: MedicamentoScalarFieldEnum[] | MedicamentoScalarFieldEnum
    having?: MedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicamentoCountAggregateInputType | true
    _avg?: MedicamentoAvgAggregateInputType
    _sum?: MedicamentoSumAggregateInputType
    _min?: MedicamentoMinAggregateInputType
    _max?: MedicamentoMaxAggregateInputType
  }

  export type MedicamentoGroupByOutputType = {
    id: number
    id_idoso: number
    nome_medicamento: string
    via_administracao: string | null
    frequencia: string | null
    dosagem: string | null
    horario: string | null
    observacao: string | null
    _count: MedicamentoCountAggregateOutputType | null
    _avg: MedicamentoAvgAggregateOutputType | null
    _sum: MedicamentoSumAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  type GetMedicamentoGroupByPayload<T extends MedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type MedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_idoso?: boolean
    nome_medicamento?: boolean
    via_administracao?: boolean
    frequencia?: boolean
    dosagem?: boolean
    horario?: boolean
    observacao?: boolean
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectScalar = {
    id?: boolean
    id_idoso?: boolean
    nome_medicamento?: boolean
    via_administracao?: boolean
    frequencia?: boolean
    dosagem?: boolean
    horario?: boolean
    observacao?: boolean
  }

  export type MedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
  }


  export type $MedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicamento"
    objects: {
      idoso: Prisma.$IdosoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_idoso: number
      nome_medicamento: string
      via_administracao: string | null
      frequencia: string | null
      dosagem: string | null
      horario: string | null
      observacao: string | null
    }, ExtArgs["result"]["medicamento"]>
    composites: {}
  }


  type MedicamentoGetPayload<S extends boolean | null | undefined | MedicamentoDefaultArgs> = $Result.GetResult<Prisma.$MedicamentoPayload, S>

  type MedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicamentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicamentoCountAggregateInputType | true
    }

  export interface MedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicamento'], meta: { name: 'Medicamento' } }
    /**
     * Find zero or one Medicamento that matches the filter.
     * @param {MedicamentoFindUniqueArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicamentoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MedicamentoFindUniqueArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Medicamento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicamentoFindUniqueOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicamentoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicamentoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Medicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicamentoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicamentoFindFirstArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Medicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicamentoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicamentoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Medicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicamentos
     * const medicamentos = await prisma.medicamento.findMany()
     * 
     * // Get first 10 Medicamentos
     * const medicamentos = await prisma.medicamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicamentoWithIdOnly = await prisma.medicamento.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicamentoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicamentoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Medicamento.
     * @param {MedicamentoCreateArgs} args - Arguments to create a Medicamento.
     * @example
     * // Create one Medicamento
     * const Medicamento = await prisma.medicamento.create({
     *   data: {
     *     // ... data to create a Medicamento
     *   }
     * })
     * 
    **/
    create<T extends MedicamentoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicamentoCreateArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Medicamento.
     * @param {MedicamentoDeleteArgs} args - Arguments to delete one Medicamento.
     * @example
     * // Delete one Medicamento
     * const Medicamento = await prisma.medicamento.delete({
     *   where: {
     *     // ... filter to delete one Medicamento
     *   }
     * })
     * 
    **/
    delete<T extends MedicamentoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MedicamentoDeleteArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Medicamento.
     * @param {MedicamentoUpdateArgs} args - Arguments to update one Medicamento.
     * @example
     * // Update one Medicamento
     * const medicamento = await prisma.medicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicamentoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicamentoUpdateArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Medicamentos.
     * @param {MedicamentoDeleteManyArgs} args - Arguments to filter Medicamentos to delete.
     * @example
     * // Delete a few Medicamentos
     * const { count } = await prisma.medicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicamentoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicamentoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicamentos
     * const medicamento = await prisma.medicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicamentoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MedicamentoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicamento.
     * @param {MedicamentoUpsertArgs} args - Arguments to update or create a Medicamento.
     * @example
     * // Update or create a Medicamento
     * const medicamento = await prisma.medicamento.upsert({
     *   create: {
     *     // ... data to create a Medicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicamento we want to update
     *   }
     * })
    **/
    upsert<T extends MedicamentoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MedicamentoUpsertArgs<ExtArgs>>
    ): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoCountArgs} args - Arguments to filter Medicamentos to count.
     * @example
     * // Count the number of Medicamentos
     * const count = await prisma.medicamento.count({
     *   where: {
     *     // ... the filter for the Medicamentos we want to count
     *   }
     * })
    **/
    count<T extends MedicamentoCountArgs>(
      args?: Subset<T, MedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicamentoAggregateArgs>(args: Subset<T, MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetMedicamentoAggregateType<T>>

    /**
     * Group by Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: MedicamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicamento model
   */
  readonly fields: MedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Medicamento model
   */ 
  interface MedicamentoFieldRefs {
    readonly id: FieldRef<"Medicamento", 'Int'>
    readonly id_idoso: FieldRef<"Medicamento", 'Int'>
    readonly nome_medicamento: FieldRef<"Medicamento", 'String'>
    readonly via_administracao: FieldRef<"Medicamento", 'String'>
    readonly frequencia: FieldRef<"Medicamento", 'String'>
    readonly dosagem: FieldRef<"Medicamento", 'String'>
    readonly horario: FieldRef<"Medicamento", 'String'>
    readonly observacao: FieldRef<"Medicamento", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Medicamento findUnique
   */
  export type MedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }


  /**
   * Medicamento findUniqueOrThrow
   */
  export type MedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }


  /**
   * Medicamento findFirst
   */
  export type MedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }


  /**
   * Medicamento findFirstOrThrow
   */
  export type MedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }


  /**
   * Medicamento findMany
   */
  export type MedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamentos to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }


  /**
   * Medicamento create
   */
  export type MedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicamento.
     */
    data: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
  }


  /**
   * Medicamento update
   */
  export type MedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicamento.
     */
    data: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
    /**
     * Choose, which Medicamento to update.
     */
    where: MedicamentoWhereUniqueInput
  }


  /**
   * Medicamento updateMany
   */
  export type MedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicamentos.
     */
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medicamentos to update
     */
    where?: MedicamentoWhereInput
  }


  /**
   * Medicamento upsert
   */
  export type MedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicamento to update in case it exists.
     */
    where: MedicamentoWhereUniqueInput
    /**
     * In case the Medicamento found by the `where` argument doesn't exist, create a new Medicamento with this data.
     */
    create: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
    /**
     * In case the Medicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
  }


  /**
   * Medicamento delete
   */
  export type MedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter which Medicamento to delete.
     */
    where: MedicamentoWhereUniqueInput
  }


  /**
   * Medicamento deleteMany
   */
  export type MedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamentos to delete
     */
    where?: MedicamentoWhereInput
  }


  /**
   * Medicamento without action
   */
  export type MedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicamentoInclude<ExtArgs> | null
  }



  /**
   * Model Cuidador
   */

  export type AggregateCuidador = {
    _count: CuidadorCountAggregateOutputType | null
    _avg: CuidadorAvgAggregateOutputType | null
    _sum: CuidadorSumAggregateOutputType | null
    _min: CuidadorMinAggregateOutputType | null
    _max: CuidadorMaxAggregateOutputType | null
  }

  export type CuidadorAvgAggregateOutputType = {
    id: number | null
  }

  export type CuidadorSumAggregateOutputType = {
    id: number | null
  }

  export type CuidadorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    sexo: string | null
    cpf: string | null
    telefone: string | null
    turno: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type CuidadorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    sexo: string | null
    cpf: string | null
    telefone: string | null
    turno: string | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type CuidadorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    sexo: number
    cpf: number
    telefone: number
    turno: number
    criado_em: number
    atualizado_em: number
    _all: number
  }


  export type CuidadorAvgAggregateInputType = {
    id?: true
  }

  export type CuidadorSumAggregateInputType = {
    id?: true
  }

  export type CuidadorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    sexo?: true
    cpf?: true
    telefone?: true
    turno?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type CuidadorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    sexo?: true
    cpf?: true
    telefone?: true
    turno?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type CuidadorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    sexo?: true
    cpf?: true
    telefone?: true
    turno?: true
    criado_em?: true
    atualizado_em?: true
    _all?: true
  }

  export type CuidadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuidador to aggregate.
     */
    where?: CuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuidadors to fetch.
     */
    orderBy?: CuidadorOrderByWithRelationInput | CuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuidadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuidadors
    **/
    _count?: true | CuidadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuidadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuidadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuidadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuidadorMaxAggregateInputType
  }

  export type GetCuidadorAggregateType<T extends CuidadorAggregateArgs> = {
        [P in keyof T & keyof AggregateCuidador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuidador[P]>
      : GetScalarType<T[P], AggregateCuidador[P]>
  }




  export type CuidadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuidadorWhereInput
    orderBy?: CuidadorOrderByWithAggregationInput | CuidadorOrderByWithAggregationInput[]
    by: CuidadorScalarFieldEnum[] | CuidadorScalarFieldEnum
    having?: CuidadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuidadorCountAggregateInputType | true
    _avg?: CuidadorAvgAggregateInputType
    _sum?: CuidadorSumAggregateInputType
    _min?: CuidadorMinAggregateInputType
    _max?: CuidadorMaxAggregateInputType
  }

  export type CuidadorGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha_hash: string
    sexo: string | null
    cpf: string
    telefone: string | null
    turno: string | null
    criado_em: Date
    atualizado_em: Date
    _count: CuidadorCountAggregateOutputType | null
    _avg: CuidadorAvgAggregateOutputType | null
    _sum: CuidadorSumAggregateOutputType | null
    _min: CuidadorMinAggregateOutputType | null
    _max: CuidadorMaxAggregateOutputType | null
  }

  type GetCuidadorGroupByPayload<T extends CuidadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuidadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuidadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuidadorGroupByOutputType[P]>
            : GetScalarType<T[P], CuidadorGroupByOutputType[P]>
        }
      >
    >


  export type CuidadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    sexo?: boolean
    cpf?: boolean
    telefone?: boolean
    turno?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    acompanhamentos?: boolean | Cuidador$acompanhamentosArgs<ExtArgs>
    alimentacoes?: boolean | Cuidador$alimentacoesArgs<ExtArgs>
    prontuarios?: boolean | Cuidador$prontuariosArgs<ExtArgs>
    uploads?: boolean | Cuidador$uploadsArgs<ExtArgs>
    relacaoIdosos?: boolean | Cuidador$relacaoIdososArgs<ExtArgs>
    relatorios?: boolean | Cuidador$relatoriosArgs<ExtArgs>
    feedAtividades?: boolean | Cuidador$feedAtividadesArgs<ExtArgs>
    _count?: boolean | CuidadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuidador"]>

  export type CuidadorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    sexo?: boolean
    cpf?: boolean
    telefone?: boolean
    turno?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }

  export type CuidadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acompanhamentos?: boolean | Cuidador$acompanhamentosArgs<ExtArgs>
    alimentacoes?: boolean | Cuidador$alimentacoesArgs<ExtArgs>
    prontuarios?: boolean | Cuidador$prontuariosArgs<ExtArgs>
    uploads?: boolean | Cuidador$uploadsArgs<ExtArgs>
    relacaoIdosos?: boolean | Cuidador$relacaoIdososArgs<ExtArgs>
    relatorios?: boolean | Cuidador$relatoriosArgs<ExtArgs>
    feedAtividades?: boolean | Cuidador$feedAtividadesArgs<ExtArgs>
    _count?: boolean | CuidadorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CuidadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuidador"
    objects: {
      acompanhamentos: Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>[]
      alimentacoes: Prisma.$AlimentacaoPayload<ExtArgs>[]
      prontuarios: Prisma.$ProntuarioDiarioPayload<ExtArgs>[]
      uploads: Prisma.$MediaUploadPayload<ExtArgs>[]
      relacaoIdosos: Prisma.$CuidadorIdosoPayload<ExtArgs>[]
      relatorios: Prisma.$RelatorioPayload<ExtArgs>[]
      feedAtividades: Prisma.$FeedAtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha_hash: string
      sexo: string | null
      cpf: string
      telefone: string | null
      turno: string | null
      criado_em: Date
      atualizado_em: Date
    }, ExtArgs["result"]["cuidador"]>
    composites: {}
  }


  type CuidadorGetPayload<S extends boolean | null | undefined | CuidadorDefaultArgs> = $Result.GetResult<Prisma.$CuidadorPayload, S>

  type CuidadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CuidadorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CuidadorCountAggregateInputType | true
    }

  export interface CuidadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuidador'], meta: { name: 'Cuidador' } }
    /**
     * Find zero or one Cuidador that matches the filter.
     * @param {CuidadorFindUniqueArgs} args - Arguments to find a Cuidador
     * @example
     * // Get one Cuidador
     * const cuidador = await prisma.cuidador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CuidadorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorFindUniqueArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cuidador that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CuidadorFindUniqueOrThrowArgs} args - Arguments to find a Cuidador
     * @example
     * // Get one Cuidador
     * const cuidador = await prisma.cuidador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CuidadorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cuidador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorFindFirstArgs} args - Arguments to find a Cuidador
     * @example
     * // Get one Cuidador
     * const cuidador = await prisma.cuidador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CuidadorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorFindFirstArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cuidador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorFindFirstOrThrowArgs} args - Arguments to find a Cuidador
     * @example
     * // Get one Cuidador
     * const cuidador = await prisma.cuidador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CuidadorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cuidadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuidadors
     * const cuidadors = await prisma.cuidador.findMany()
     * 
     * // Get first 10 Cuidadors
     * const cuidadors = await prisma.cuidador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuidadorWithIdOnly = await prisma.cuidador.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CuidadorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cuidador.
     * @param {CuidadorCreateArgs} args - Arguments to create a Cuidador.
     * @example
     * // Create one Cuidador
     * const Cuidador = await prisma.cuidador.create({
     *   data: {
     *     // ... data to create a Cuidador
     *   }
     * })
     * 
    **/
    create<T extends CuidadorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorCreateArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Cuidador.
     * @param {CuidadorDeleteArgs} args - Arguments to delete one Cuidador.
     * @example
     * // Delete one Cuidador
     * const Cuidador = await prisma.cuidador.delete({
     *   where: {
     *     // ... filter to delete one Cuidador
     *   }
     * })
     * 
    **/
    delete<T extends CuidadorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorDeleteArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cuidador.
     * @param {CuidadorUpdateArgs} args - Arguments to update one Cuidador.
     * @example
     * // Update one Cuidador
     * const cuidador = await prisma.cuidador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CuidadorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorUpdateArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cuidadors.
     * @param {CuidadorDeleteManyArgs} args - Arguments to filter Cuidadors to delete.
     * @example
     * // Delete a few Cuidadors
     * const { count } = await prisma.cuidador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CuidadorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuidadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuidadors
     * const cuidador = await prisma.cuidador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CuidadorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuidador.
     * @param {CuidadorUpsertArgs} args - Arguments to update or create a Cuidador.
     * @example
     * // Update or create a Cuidador
     * const cuidador = await prisma.cuidador.upsert({
     *   create: {
     *     // ... data to create a Cuidador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuidador we want to update
     *   }
     * })
    **/
    upsert<T extends CuidadorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorUpsertArgs<ExtArgs>>
    ): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cuidadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorCountArgs} args - Arguments to filter Cuidadors to count.
     * @example
     * // Count the number of Cuidadors
     * const count = await prisma.cuidador.count({
     *   where: {
     *     // ... the filter for the Cuidadors we want to count
     *   }
     * })
    **/
    count<T extends CuidadorCountArgs>(
      args?: Subset<T, CuidadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuidadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuidador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuidadorAggregateArgs>(args: Subset<T, CuidadorAggregateArgs>): Prisma.PrismaPromise<GetCuidadorAggregateType<T>>

    /**
     * Group by Cuidador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuidadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuidadorGroupByArgs['orderBy'] }
        : { orderBy?: CuidadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuidadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuidadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuidador model
   */
  readonly fields: CuidadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuidador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuidadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    acompanhamentos<T extends Cuidador$acompanhamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$acompanhamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'findMany'> | Null>;

    alimentacoes<T extends Cuidador$alimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$alimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    prontuarios<T extends Cuidador$prontuariosArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$prontuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    uploads<T extends Cuidador$uploadsArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$uploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findMany'> | Null>;

    relacaoIdosos<T extends Cuidador$relacaoIdososArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$relacaoIdososArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findMany'> | Null>;

    relatorios<T extends Cuidador$relatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$relatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findMany'> | Null>;

    feedAtividades<T extends Cuidador$feedAtividadesArgs<ExtArgs> = {}>(args?: Subset<T, Cuidador$feedAtividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cuidador model
   */ 
  interface CuidadorFieldRefs {
    readonly id: FieldRef<"Cuidador", 'Int'>
    readonly nome: FieldRef<"Cuidador", 'String'>
    readonly email: FieldRef<"Cuidador", 'String'>
    readonly senha_hash: FieldRef<"Cuidador", 'String'>
    readonly sexo: FieldRef<"Cuidador", 'String'>
    readonly cpf: FieldRef<"Cuidador", 'String'>
    readonly telefone: FieldRef<"Cuidador", 'String'>
    readonly turno: FieldRef<"Cuidador", 'String'>
    readonly criado_em: FieldRef<"Cuidador", 'DateTime'>
    readonly atualizado_em: FieldRef<"Cuidador", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Cuidador findUnique
   */
  export type CuidadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * Filter, which Cuidador to fetch.
     */
    where: CuidadorWhereUniqueInput
  }


  /**
   * Cuidador findUniqueOrThrow
   */
  export type CuidadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * Filter, which Cuidador to fetch.
     */
    where: CuidadorWhereUniqueInput
  }


  /**
   * Cuidador findFirst
   */
  export type CuidadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * Filter, which Cuidador to fetch.
     */
    where?: CuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuidadors to fetch.
     */
    orderBy?: CuidadorOrderByWithRelationInput | CuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuidadors.
     */
    cursor?: CuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuidadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuidadors.
     */
    distinct?: CuidadorScalarFieldEnum | CuidadorScalarFieldEnum[]
  }


  /**
   * Cuidador findFirstOrThrow
   */
  export type CuidadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * Filter, which Cuidador to fetch.
     */
    where?: CuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuidadors to fetch.
     */
    orderBy?: CuidadorOrderByWithRelationInput | CuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuidadors.
     */
    cursor?: CuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuidadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuidadors.
     */
    distinct?: CuidadorScalarFieldEnum | CuidadorScalarFieldEnum[]
  }


  /**
   * Cuidador findMany
   */
  export type CuidadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * Filter, which Cuidadors to fetch.
     */
    where?: CuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuidadors to fetch.
     */
    orderBy?: CuidadorOrderByWithRelationInput | CuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuidadors.
     */
    cursor?: CuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuidadors.
     */
    skip?: number
    distinct?: CuidadorScalarFieldEnum | CuidadorScalarFieldEnum[]
  }


  /**
   * Cuidador create
   */
  export type CuidadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuidador.
     */
    data: XOR<CuidadorCreateInput, CuidadorUncheckedCreateInput>
  }


  /**
   * Cuidador update
   */
  export type CuidadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuidador.
     */
    data: XOR<CuidadorUpdateInput, CuidadorUncheckedUpdateInput>
    /**
     * Choose, which Cuidador to update.
     */
    where: CuidadorWhereUniqueInput
  }


  /**
   * Cuidador updateMany
   */
  export type CuidadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuidadors.
     */
    data: XOR<CuidadorUpdateManyMutationInput, CuidadorUncheckedUpdateManyInput>
    /**
     * Filter which Cuidadors to update
     */
    where?: CuidadorWhereInput
  }


  /**
   * Cuidador upsert
   */
  export type CuidadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuidador to update in case it exists.
     */
    where: CuidadorWhereUniqueInput
    /**
     * In case the Cuidador found by the `where` argument doesn't exist, create a new Cuidador with this data.
     */
    create: XOR<CuidadorCreateInput, CuidadorUncheckedCreateInput>
    /**
     * In case the Cuidador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuidadorUpdateInput, CuidadorUncheckedUpdateInput>
  }


  /**
   * Cuidador delete
   */
  export type CuidadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
    /**
     * Filter which Cuidador to delete.
     */
    where: CuidadorWhereUniqueInput
  }


  /**
   * Cuidador deleteMany
   */
  export type CuidadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuidadors to delete
     */
    where?: CuidadorWhereInput
  }


  /**
   * Cuidador.acompanhamentos
   */
  export type Cuidador$acompanhamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    where?: AcompanhamentoCuidadorWhereInput
    orderBy?: AcompanhamentoCuidadorOrderByWithRelationInput | AcompanhamentoCuidadorOrderByWithRelationInput[]
    cursor?: AcompanhamentoCuidadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcompanhamentoCuidadorScalarFieldEnum | AcompanhamentoCuidadorScalarFieldEnum[]
  }


  /**
   * Cuidador.alimentacoes
   */
  export type Cuidador$alimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    where?: AlimentacaoWhereInput
    orderBy?: AlimentacaoOrderByWithRelationInput | AlimentacaoOrderByWithRelationInput[]
    cursor?: AlimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlimentacaoScalarFieldEnum | AlimentacaoScalarFieldEnum[]
  }


  /**
   * Cuidador.prontuarios
   */
  export type Cuidador$prontuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    where?: ProntuarioDiarioWhereInput
    orderBy?: ProntuarioDiarioOrderByWithRelationInput | ProntuarioDiarioOrderByWithRelationInput[]
    cursor?: ProntuarioDiarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProntuarioDiarioScalarFieldEnum | ProntuarioDiarioScalarFieldEnum[]
  }


  /**
   * Cuidador.uploads
   */
  export type Cuidador$uploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    where?: MediaUploadWhereInput
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    cursor?: MediaUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }


  /**
   * Cuidador.relacaoIdosos
   */
  export type Cuidador$relacaoIdososArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    where?: CuidadorIdosoWhereInput
    orderBy?: CuidadorIdosoOrderByWithRelationInput | CuidadorIdosoOrderByWithRelationInput[]
    cursor?: CuidadorIdosoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuidadorIdosoScalarFieldEnum | CuidadorIdosoScalarFieldEnum[]
  }


  /**
   * Cuidador.relatorios
   */
  export type Cuidador$relatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    cursor?: RelatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }


  /**
   * Cuidador.feedAtividades
   */
  export type Cuidador$feedAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    where?: FeedAtividadeWhereInput
    orderBy?: FeedAtividadeOrderByWithRelationInput | FeedAtividadeOrderByWithRelationInput[]
    cursor?: FeedAtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedAtividadeScalarFieldEnum | FeedAtividadeScalarFieldEnum[]
  }


  /**
   * Cuidador without action
   */
  export type CuidadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuidador
     */
    select?: CuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorInclude<ExtArgs> | null
  }



  /**
   * Model AcompanhamentoCuidador
   */

  export type AggregateAcompanhamentoCuidador = {
    _count: AcompanhamentoCuidadorCountAggregateOutputType | null
    _avg: AcompanhamentoCuidadorAvgAggregateOutputType | null
    _sum: AcompanhamentoCuidadorSumAggregateOutputType | null
    _min: AcompanhamentoCuidadorMinAggregateOutputType | null
    _max: AcompanhamentoCuidadorMaxAggregateOutputType | null
  }

  export type AcompanhamentoCuidadorAvgAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
  }

  export type AcompanhamentoCuidadorSumAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
  }

  export type AcompanhamentoCuidadorMinAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    humor: string | null
    sono: string | null
    nivel_energia: string | null
    observacao: string | null
    dia: Date | null
  }

  export type AcompanhamentoCuidadorMaxAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    humor: string | null
    sono: string | null
    nivel_energia: string | null
    observacao: string | null
    dia: Date | null
  }

  export type AcompanhamentoCuidadorCountAggregateOutputType = {
    id: number
    id_cuidador: number
    humor: number
    sono: number
    nivel_energia: number
    observacao: number
    dia: number
    _all: number
  }


  export type AcompanhamentoCuidadorAvgAggregateInputType = {
    id?: true
    id_cuidador?: true
  }

  export type AcompanhamentoCuidadorSumAggregateInputType = {
    id?: true
    id_cuidador?: true
  }

  export type AcompanhamentoCuidadorMinAggregateInputType = {
    id?: true
    id_cuidador?: true
    humor?: true
    sono?: true
    nivel_energia?: true
    observacao?: true
    dia?: true
  }

  export type AcompanhamentoCuidadorMaxAggregateInputType = {
    id?: true
    id_cuidador?: true
    humor?: true
    sono?: true
    nivel_energia?: true
    observacao?: true
    dia?: true
  }

  export type AcompanhamentoCuidadorCountAggregateInputType = {
    id?: true
    id_cuidador?: true
    humor?: true
    sono?: true
    nivel_energia?: true
    observacao?: true
    dia?: true
    _all?: true
  }

  export type AcompanhamentoCuidadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcompanhamentoCuidador to aggregate.
     */
    where?: AcompanhamentoCuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcompanhamentoCuidadors to fetch.
     */
    orderBy?: AcompanhamentoCuidadorOrderByWithRelationInput | AcompanhamentoCuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcompanhamentoCuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcompanhamentoCuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcompanhamentoCuidadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcompanhamentoCuidadors
    **/
    _count?: true | AcompanhamentoCuidadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcompanhamentoCuidadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcompanhamentoCuidadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcompanhamentoCuidadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcompanhamentoCuidadorMaxAggregateInputType
  }

  export type GetAcompanhamentoCuidadorAggregateType<T extends AcompanhamentoCuidadorAggregateArgs> = {
        [P in keyof T & keyof AggregateAcompanhamentoCuidador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcompanhamentoCuidador[P]>
      : GetScalarType<T[P], AggregateAcompanhamentoCuidador[P]>
  }




  export type AcompanhamentoCuidadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcompanhamentoCuidadorWhereInput
    orderBy?: AcompanhamentoCuidadorOrderByWithAggregationInput | AcompanhamentoCuidadorOrderByWithAggregationInput[]
    by: AcompanhamentoCuidadorScalarFieldEnum[] | AcompanhamentoCuidadorScalarFieldEnum
    having?: AcompanhamentoCuidadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcompanhamentoCuidadorCountAggregateInputType | true
    _avg?: AcompanhamentoCuidadorAvgAggregateInputType
    _sum?: AcompanhamentoCuidadorSumAggregateInputType
    _min?: AcompanhamentoCuidadorMinAggregateInputType
    _max?: AcompanhamentoCuidadorMaxAggregateInputType
  }

  export type AcompanhamentoCuidadorGroupByOutputType = {
    id: number
    id_cuidador: number
    humor: string | null
    sono: string | null
    nivel_energia: string | null
    observacao: string | null
    dia: Date | null
    _count: AcompanhamentoCuidadorCountAggregateOutputType | null
    _avg: AcompanhamentoCuidadorAvgAggregateOutputType | null
    _sum: AcompanhamentoCuidadorSumAggregateOutputType | null
    _min: AcompanhamentoCuidadorMinAggregateOutputType | null
    _max: AcompanhamentoCuidadorMaxAggregateOutputType | null
  }

  type GetAcompanhamentoCuidadorGroupByPayload<T extends AcompanhamentoCuidadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcompanhamentoCuidadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcompanhamentoCuidadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcompanhamentoCuidadorGroupByOutputType[P]>
            : GetScalarType<T[P], AcompanhamentoCuidadorGroupByOutputType[P]>
        }
      >
    >


  export type AcompanhamentoCuidadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cuidador?: boolean
    humor?: boolean
    sono?: boolean
    nivel_energia?: boolean
    observacao?: boolean
    dia?: boolean
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acompanhamentoCuidador"]>

  export type AcompanhamentoCuidadorSelectScalar = {
    id?: boolean
    id_cuidador?: boolean
    humor?: boolean
    sono?: boolean
    nivel_energia?: boolean
    observacao?: boolean
    dia?: boolean
  }

  export type AcompanhamentoCuidadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }


  export type $AcompanhamentoCuidadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcompanhamentoCuidador"
    objects: {
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cuidador: number
      humor: string | null
      sono: string | null
      nivel_energia: string | null
      observacao: string | null
      dia: Date | null
    }, ExtArgs["result"]["acompanhamentoCuidador"]>
    composites: {}
  }


  type AcompanhamentoCuidadorGetPayload<S extends boolean | null | undefined | AcompanhamentoCuidadorDefaultArgs> = $Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload, S>

  type AcompanhamentoCuidadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AcompanhamentoCuidadorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AcompanhamentoCuidadorCountAggregateInputType | true
    }

  export interface AcompanhamentoCuidadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcompanhamentoCuidador'], meta: { name: 'AcompanhamentoCuidador' } }
    /**
     * Find zero or one AcompanhamentoCuidador that matches the filter.
     * @param {AcompanhamentoCuidadorFindUniqueArgs} args - Arguments to find a AcompanhamentoCuidador
     * @example
     * // Get one AcompanhamentoCuidador
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AcompanhamentoCuidadorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AcompanhamentoCuidadorFindUniqueArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AcompanhamentoCuidador that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AcompanhamentoCuidadorFindUniqueOrThrowArgs} args - Arguments to find a AcompanhamentoCuidador
     * @example
     * // Get one AcompanhamentoCuidador
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AcompanhamentoCuidadorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AcompanhamentoCuidadorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AcompanhamentoCuidador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorFindFirstArgs} args - Arguments to find a AcompanhamentoCuidador
     * @example
     * // Get one AcompanhamentoCuidador
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AcompanhamentoCuidadorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AcompanhamentoCuidadorFindFirstArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AcompanhamentoCuidador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorFindFirstOrThrowArgs} args - Arguments to find a AcompanhamentoCuidador
     * @example
     * // Get one AcompanhamentoCuidador
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AcompanhamentoCuidadorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AcompanhamentoCuidadorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AcompanhamentoCuidadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcompanhamentoCuidadors
     * const acompanhamentoCuidadors = await prisma.acompanhamentoCuidador.findMany()
     * 
     * // Get first 10 AcompanhamentoCuidadors
     * const acompanhamentoCuidadors = await prisma.acompanhamentoCuidador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acompanhamentoCuidadorWithIdOnly = await prisma.acompanhamentoCuidador.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AcompanhamentoCuidadorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcompanhamentoCuidadorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AcompanhamentoCuidador.
     * @param {AcompanhamentoCuidadorCreateArgs} args - Arguments to create a AcompanhamentoCuidador.
     * @example
     * // Create one AcompanhamentoCuidador
     * const AcompanhamentoCuidador = await prisma.acompanhamentoCuidador.create({
     *   data: {
     *     // ... data to create a AcompanhamentoCuidador
     *   }
     * })
     * 
    **/
    create<T extends AcompanhamentoCuidadorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AcompanhamentoCuidadorCreateArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AcompanhamentoCuidador.
     * @param {AcompanhamentoCuidadorDeleteArgs} args - Arguments to delete one AcompanhamentoCuidador.
     * @example
     * // Delete one AcompanhamentoCuidador
     * const AcompanhamentoCuidador = await prisma.acompanhamentoCuidador.delete({
     *   where: {
     *     // ... filter to delete one AcompanhamentoCuidador
     *   }
     * })
     * 
    **/
    delete<T extends AcompanhamentoCuidadorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AcompanhamentoCuidadorDeleteArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AcompanhamentoCuidador.
     * @param {AcompanhamentoCuidadorUpdateArgs} args - Arguments to update one AcompanhamentoCuidador.
     * @example
     * // Update one AcompanhamentoCuidador
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AcompanhamentoCuidadorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AcompanhamentoCuidadorUpdateArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AcompanhamentoCuidadors.
     * @param {AcompanhamentoCuidadorDeleteManyArgs} args - Arguments to filter AcompanhamentoCuidadors to delete.
     * @example
     * // Delete a few AcompanhamentoCuidadors
     * const { count } = await prisma.acompanhamentoCuidador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AcompanhamentoCuidadorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcompanhamentoCuidadorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcompanhamentoCuidadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcompanhamentoCuidadors
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AcompanhamentoCuidadorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AcompanhamentoCuidadorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcompanhamentoCuidador.
     * @param {AcompanhamentoCuidadorUpsertArgs} args - Arguments to update or create a AcompanhamentoCuidador.
     * @example
     * // Update or create a AcompanhamentoCuidador
     * const acompanhamentoCuidador = await prisma.acompanhamentoCuidador.upsert({
     *   create: {
     *     // ... data to create a AcompanhamentoCuidador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcompanhamentoCuidador we want to update
     *   }
     * })
    **/
    upsert<T extends AcompanhamentoCuidadorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AcompanhamentoCuidadorUpsertArgs<ExtArgs>>
    ): Prisma__AcompanhamentoCuidadorClient<$Result.GetResult<Prisma.$AcompanhamentoCuidadorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AcompanhamentoCuidadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorCountArgs} args - Arguments to filter AcompanhamentoCuidadors to count.
     * @example
     * // Count the number of AcompanhamentoCuidadors
     * const count = await prisma.acompanhamentoCuidador.count({
     *   where: {
     *     // ... the filter for the AcompanhamentoCuidadors we want to count
     *   }
     * })
    **/
    count<T extends AcompanhamentoCuidadorCountArgs>(
      args?: Subset<T, AcompanhamentoCuidadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcompanhamentoCuidadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcompanhamentoCuidador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcompanhamentoCuidadorAggregateArgs>(args: Subset<T, AcompanhamentoCuidadorAggregateArgs>): Prisma.PrismaPromise<GetAcompanhamentoCuidadorAggregateType<T>>

    /**
     * Group by AcompanhamentoCuidador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcompanhamentoCuidadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcompanhamentoCuidadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcompanhamentoCuidadorGroupByArgs['orderBy'] }
        : { orderBy?: AcompanhamentoCuidadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcompanhamentoCuidadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcompanhamentoCuidadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcompanhamentoCuidador model
   */
  readonly fields: AcompanhamentoCuidadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcompanhamentoCuidador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcompanhamentoCuidadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AcompanhamentoCuidador model
   */ 
  interface AcompanhamentoCuidadorFieldRefs {
    readonly id: FieldRef<"AcompanhamentoCuidador", 'Int'>
    readonly id_cuidador: FieldRef<"AcompanhamentoCuidador", 'Int'>
    readonly humor: FieldRef<"AcompanhamentoCuidador", 'String'>
    readonly sono: FieldRef<"AcompanhamentoCuidador", 'String'>
    readonly nivel_energia: FieldRef<"AcompanhamentoCuidador", 'String'>
    readonly observacao: FieldRef<"AcompanhamentoCuidador", 'String'>
    readonly dia: FieldRef<"AcompanhamentoCuidador", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AcompanhamentoCuidador findUnique
   */
  export type AcompanhamentoCuidadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * Filter, which AcompanhamentoCuidador to fetch.
     */
    where: AcompanhamentoCuidadorWhereUniqueInput
  }


  /**
   * AcompanhamentoCuidador findUniqueOrThrow
   */
  export type AcompanhamentoCuidadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * Filter, which AcompanhamentoCuidador to fetch.
     */
    where: AcompanhamentoCuidadorWhereUniqueInput
  }


  /**
   * AcompanhamentoCuidador findFirst
   */
  export type AcompanhamentoCuidadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * Filter, which AcompanhamentoCuidador to fetch.
     */
    where?: AcompanhamentoCuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcompanhamentoCuidadors to fetch.
     */
    orderBy?: AcompanhamentoCuidadorOrderByWithRelationInput | AcompanhamentoCuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcompanhamentoCuidadors.
     */
    cursor?: AcompanhamentoCuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcompanhamentoCuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcompanhamentoCuidadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcompanhamentoCuidadors.
     */
    distinct?: AcompanhamentoCuidadorScalarFieldEnum | AcompanhamentoCuidadorScalarFieldEnum[]
  }


  /**
   * AcompanhamentoCuidador findFirstOrThrow
   */
  export type AcompanhamentoCuidadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * Filter, which AcompanhamentoCuidador to fetch.
     */
    where?: AcompanhamentoCuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcompanhamentoCuidadors to fetch.
     */
    orderBy?: AcompanhamentoCuidadorOrderByWithRelationInput | AcompanhamentoCuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcompanhamentoCuidadors.
     */
    cursor?: AcompanhamentoCuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcompanhamentoCuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcompanhamentoCuidadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcompanhamentoCuidadors.
     */
    distinct?: AcompanhamentoCuidadorScalarFieldEnum | AcompanhamentoCuidadorScalarFieldEnum[]
  }


  /**
   * AcompanhamentoCuidador findMany
   */
  export type AcompanhamentoCuidadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * Filter, which AcompanhamentoCuidadors to fetch.
     */
    where?: AcompanhamentoCuidadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcompanhamentoCuidadors to fetch.
     */
    orderBy?: AcompanhamentoCuidadorOrderByWithRelationInput | AcompanhamentoCuidadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcompanhamentoCuidadors.
     */
    cursor?: AcompanhamentoCuidadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcompanhamentoCuidadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcompanhamentoCuidadors.
     */
    skip?: number
    distinct?: AcompanhamentoCuidadorScalarFieldEnum | AcompanhamentoCuidadorScalarFieldEnum[]
  }


  /**
   * AcompanhamentoCuidador create
   */
  export type AcompanhamentoCuidadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * The data needed to create a AcompanhamentoCuidador.
     */
    data: XOR<AcompanhamentoCuidadorCreateInput, AcompanhamentoCuidadorUncheckedCreateInput>
  }


  /**
   * AcompanhamentoCuidador update
   */
  export type AcompanhamentoCuidadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * The data needed to update a AcompanhamentoCuidador.
     */
    data: XOR<AcompanhamentoCuidadorUpdateInput, AcompanhamentoCuidadorUncheckedUpdateInput>
    /**
     * Choose, which AcompanhamentoCuidador to update.
     */
    where: AcompanhamentoCuidadorWhereUniqueInput
  }


  /**
   * AcompanhamentoCuidador updateMany
   */
  export type AcompanhamentoCuidadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcompanhamentoCuidadors.
     */
    data: XOR<AcompanhamentoCuidadorUpdateManyMutationInput, AcompanhamentoCuidadorUncheckedUpdateManyInput>
    /**
     * Filter which AcompanhamentoCuidadors to update
     */
    where?: AcompanhamentoCuidadorWhereInput
  }


  /**
   * AcompanhamentoCuidador upsert
   */
  export type AcompanhamentoCuidadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * The filter to search for the AcompanhamentoCuidador to update in case it exists.
     */
    where: AcompanhamentoCuidadorWhereUniqueInput
    /**
     * In case the AcompanhamentoCuidador found by the `where` argument doesn't exist, create a new AcompanhamentoCuidador with this data.
     */
    create: XOR<AcompanhamentoCuidadorCreateInput, AcompanhamentoCuidadorUncheckedCreateInput>
    /**
     * In case the AcompanhamentoCuidador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcompanhamentoCuidadorUpdateInput, AcompanhamentoCuidadorUncheckedUpdateInput>
  }


  /**
   * AcompanhamentoCuidador delete
   */
  export type AcompanhamentoCuidadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
    /**
     * Filter which AcompanhamentoCuidador to delete.
     */
    where: AcompanhamentoCuidadorWhereUniqueInput
  }


  /**
   * AcompanhamentoCuidador deleteMany
   */
  export type AcompanhamentoCuidadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcompanhamentoCuidadors to delete
     */
    where?: AcompanhamentoCuidadorWhereInput
  }


  /**
   * AcompanhamentoCuidador without action
   */
  export type AcompanhamentoCuidadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcompanhamentoCuidador
     */
    select?: AcompanhamentoCuidadorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcompanhamentoCuidadorInclude<ExtArgs> | null
  }



  /**
   * Model Alimentacao
   */

  export type AggregateAlimentacao = {
    _count: AlimentacaoCountAggregateOutputType | null
    _avg: AlimentacaoAvgAggregateOutputType | null
    _sum: AlimentacaoSumAggregateOutputType | null
    _min: AlimentacaoMinAggregateOutputType | null
    _max: AlimentacaoMaxAggregateOutputType | null
  }

  export type AlimentacaoAvgAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    id_idoso: number | null
  }

  export type AlimentacaoSumAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    id_idoso: number | null
  }

  export type AlimentacaoMinAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    id_idoso: number | null
    refeicao: string | null
    horario: string | null
    quantidade: string | null
    observacao: string | null
  }

  export type AlimentacaoMaxAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    id_idoso: number | null
    refeicao: string | null
    horario: string | null
    quantidade: string | null
    observacao: string | null
  }

  export type AlimentacaoCountAggregateOutputType = {
    id: number
    id_cuidador: number
    id_idoso: number
    refeicao: number
    horario: number
    quantidade: number
    observacao: number
    _all: number
  }


  export type AlimentacaoAvgAggregateInputType = {
    id?: true
    id_cuidador?: true
    id_idoso?: true
  }

  export type AlimentacaoSumAggregateInputType = {
    id?: true
    id_cuidador?: true
    id_idoso?: true
  }

  export type AlimentacaoMinAggregateInputType = {
    id?: true
    id_cuidador?: true
    id_idoso?: true
    refeicao?: true
    horario?: true
    quantidade?: true
    observacao?: true
  }

  export type AlimentacaoMaxAggregateInputType = {
    id?: true
    id_cuidador?: true
    id_idoso?: true
    refeicao?: true
    horario?: true
    quantidade?: true
    observacao?: true
  }

  export type AlimentacaoCountAggregateInputType = {
    id?: true
    id_cuidador?: true
    id_idoso?: true
    refeicao?: true
    horario?: true
    quantidade?: true
    observacao?: true
    _all?: true
  }

  export type AlimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alimentacao to aggregate.
     */
    where?: AlimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacaos to fetch.
     */
    orderBy?: AlimentacaoOrderByWithRelationInput | AlimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alimentacaos
    **/
    _count?: true | AlimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlimentacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlimentacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlimentacaoMaxAggregateInputType
  }

  export type GetAlimentacaoAggregateType<T extends AlimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlimentacao[P]>
      : GetScalarType<T[P], AggregateAlimentacao[P]>
  }




  export type AlimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentacaoWhereInput
    orderBy?: AlimentacaoOrderByWithAggregationInput | AlimentacaoOrderByWithAggregationInput[]
    by: AlimentacaoScalarFieldEnum[] | AlimentacaoScalarFieldEnum
    having?: AlimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlimentacaoCountAggregateInputType | true
    _avg?: AlimentacaoAvgAggregateInputType
    _sum?: AlimentacaoSumAggregateInputType
    _min?: AlimentacaoMinAggregateInputType
    _max?: AlimentacaoMaxAggregateInputType
  }

  export type AlimentacaoGroupByOutputType = {
    id: number
    id_cuidador: number
    id_idoso: number
    refeicao: string
    horario: string
    quantidade: string
    observacao: string | null
    _count: AlimentacaoCountAggregateOutputType | null
    _avg: AlimentacaoAvgAggregateOutputType | null
    _sum: AlimentacaoSumAggregateOutputType | null
    _min: AlimentacaoMinAggregateOutputType | null
    _max: AlimentacaoMaxAggregateOutputType | null
  }

  type GetAlimentacaoGroupByPayload<T extends AlimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AlimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type AlimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cuidador?: boolean
    id_idoso?: boolean
    refeicao?: boolean
    horario?: boolean
    quantidade?: boolean
    observacao?: boolean
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alimentacao"]>

  export type AlimentacaoSelectScalar = {
    id?: boolean
    id_cuidador?: boolean
    id_idoso?: boolean
    refeicao?: boolean
    horario?: boolean
    quantidade?: boolean
    observacao?: boolean
  }

  export type AlimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
  }


  export type $AlimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alimentacao"
    objects: {
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
      idoso: Prisma.$IdosoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cuidador: number
      id_idoso: number
      refeicao: string
      horario: string
      quantidade: string
      observacao: string | null
    }, ExtArgs["result"]["alimentacao"]>
    composites: {}
  }


  type AlimentacaoGetPayload<S extends boolean | null | undefined | AlimentacaoDefaultArgs> = $Result.GetResult<Prisma.$AlimentacaoPayload, S>

  type AlimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlimentacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlimentacaoCountAggregateInputType | true
    }

  export interface AlimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alimentacao'], meta: { name: 'Alimentacao' } }
    /**
     * Find zero or one Alimentacao that matches the filter.
     * @param {AlimentacaoFindUniqueArgs} args - Arguments to find a Alimentacao
     * @example
     * // Get one Alimentacao
     * const alimentacao = await prisma.alimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlimentacaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlimentacaoFindUniqueArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Alimentacao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Alimentacao
     * @example
     * // Get one Alimentacao
     * const alimentacao = await prisma.alimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlimentacaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlimentacaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Alimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoFindFirstArgs} args - Arguments to find a Alimentacao
     * @example
     * // Get one Alimentacao
     * const alimentacao = await prisma.alimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlimentacaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlimentacaoFindFirstArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Alimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoFindFirstOrThrowArgs} args - Arguments to find a Alimentacao
     * @example
     * // Get one Alimentacao
     * const alimentacao = await prisma.alimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlimentacaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlimentacaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Alimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alimentacaos
     * const alimentacaos = await prisma.alimentacao.findMany()
     * 
     * // Get first 10 Alimentacaos
     * const alimentacaos = await prisma.alimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alimentacaoWithIdOnly = await prisma.alimentacao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlimentacaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlimentacaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Alimentacao.
     * @param {AlimentacaoCreateArgs} args - Arguments to create a Alimentacao.
     * @example
     * // Create one Alimentacao
     * const Alimentacao = await prisma.alimentacao.create({
     *   data: {
     *     // ... data to create a Alimentacao
     *   }
     * })
     * 
    **/
    create<T extends AlimentacaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlimentacaoCreateArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Alimentacao.
     * @param {AlimentacaoDeleteArgs} args - Arguments to delete one Alimentacao.
     * @example
     * // Delete one Alimentacao
     * const Alimentacao = await prisma.alimentacao.delete({
     *   where: {
     *     // ... filter to delete one Alimentacao
     *   }
     * })
     * 
    **/
    delete<T extends AlimentacaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlimentacaoDeleteArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Alimentacao.
     * @param {AlimentacaoUpdateArgs} args - Arguments to update one Alimentacao.
     * @example
     * // Update one Alimentacao
     * const alimentacao = await prisma.alimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlimentacaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlimentacaoUpdateArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Alimentacaos.
     * @param {AlimentacaoDeleteManyArgs} args - Arguments to filter Alimentacaos to delete.
     * @example
     * // Delete a few Alimentacaos
     * const { count } = await prisma.alimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlimentacaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlimentacaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alimentacaos
     * const alimentacao = await prisma.alimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlimentacaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlimentacaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alimentacao.
     * @param {AlimentacaoUpsertArgs} args - Arguments to update or create a Alimentacao.
     * @example
     * // Update or create a Alimentacao
     * const alimentacao = await prisma.alimentacao.upsert({
     *   create: {
     *     // ... data to create a Alimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alimentacao we want to update
     *   }
     * })
    **/
    upsert<T extends AlimentacaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlimentacaoUpsertArgs<ExtArgs>>
    ): Prisma__AlimentacaoClient<$Result.GetResult<Prisma.$AlimentacaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Alimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoCountArgs} args - Arguments to filter Alimentacaos to count.
     * @example
     * // Count the number of Alimentacaos
     * const count = await prisma.alimentacao.count({
     *   where: {
     *     // ... the filter for the Alimentacaos we want to count
     *   }
     * })
    **/
    count<T extends AlimentacaoCountArgs>(
      args?: Subset<T, AlimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlimentacaoAggregateArgs>(args: Subset<T, AlimentacaoAggregateArgs>): Prisma.PrismaPromise<GetAlimentacaoAggregateType<T>>

    /**
     * Group by Alimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: AlimentacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alimentacao model
   */
  readonly fields: AlimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Alimentacao model
   */ 
  interface AlimentacaoFieldRefs {
    readonly id: FieldRef<"Alimentacao", 'Int'>
    readonly id_cuidador: FieldRef<"Alimentacao", 'Int'>
    readonly id_idoso: FieldRef<"Alimentacao", 'Int'>
    readonly refeicao: FieldRef<"Alimentacao", 'String'>
    readonly horario: FieldRef<"Alimentacao", 'String'>
    readonly quantidade: FieldRef<"Alimentacao", 'String'>
    readonly observacao: FieldRef<"Alimentacao", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Alimentacao findUnique
   */
  export type AlimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacao to fetch.
     */
    where: AlimentacaoWhereUniqueInput
  }


  /**
   * Alimentacao findUniqueOrThrow
   */
  export type AlimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacao to fetch.
     */
    where: AlimentacaoWhereUniqueInput
  }


  /**
   * Alimentacao findFirst
   */
  export type AlimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacao to fetch.
     */
    where?: AlimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacaos to fetch.
     */
    orderBy?: AlimentacaoOrderByWithRelationInput | AlimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alimentacaos.
     */
    cursor?: AlimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alimentacaos.
     */
    distinct?: AlimentacaoScalarFieldEnum | AlimentacaoScalarFieldEnum[]
  }


  /**
   * Alimentacao findFirstOrThrow
   */
  export type AlimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacao to fetch.
     */
    where?: AlimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacaos to fetch.
     */
    orderBy?: AlimentacaoOrderByWithRelationInput | AlimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alimentacaos.
     */
    cursor?: AlimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alimentacaos.
     */
    distinct?: AlimentacaoScalarFieldEnum | AlimentacaoScalarFieldEnum[]
  }


  /**
   * Alimentacao findMany
   */
  export type AlimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alimentacaos to fetch.
     */
    where?: AlimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alimentacaos to fetch.
     */
    orderBy?: AlimentacaoOrderByWithRelationInput | AlimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alimentacaos.
     */
    cursor?: AlimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alimentacaos.
     */
    skip?: number
    distinct?: AlimentacaoScalarFieldEnum | AlimentacaoScalarFieldEnum[]
  }


  /**
   * Alimentacao create
   */
  export type AlimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alimentacao.
     */
    data: XOR<AlimentacaoCreateInput, AlimentacaoUncheckedCreateInput>
  }


  /**
   * Alimentacao update
   */
  export type AlimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alimentacao.
     */
    data: XOR<AlimentacaoUpdateInput, AlimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Alimentacao to update.
     */
    where: AlimentacaoWhereUniqueInput
  }


  /**
   * Alimentacao updateMany
   */
  export type AlimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alimentacaos.
     */
    data: XOR<AlimentacaoUpdateManyMutationInput, AlimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Alimentacaos to update
     */
    where?: AlimentacaoWhereInput
  }


  /**
   * Alimentacao upsert
   */
  export type AlimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alimentacao to update in case it exists.
     */
    where: AlimentacaoWhereUniqueInput
    /**
     * In case the Alimentacao found by the `where` argument doesn't exist, create a new Alimentacao with this data.
     */
    create: XOR<AlimentacaoCreateInput, AlimentacaoUncheckedCreateInput>
    /**
     * In case the Alimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlimentacaoUpdateInput, AlimentacaoUncheckedUpdateInput>
  }


  /**
   * Alimentacao delete
   */
  export type AlimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Alimentacao to delete.
     */
    where: AlimentacaoWhereUniqueInput
  }


  /**
   * Alimentacao deleteMany
   */
  export type AlimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alimentacaos to delete
     */
    where?: AlimentacaoWhereInput
  }


  /**
   * Alimentacao without action
   */
  export type AlimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alimentacao
     */
    select?: AlimentacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlimentacaoInclude<ExtArgs> | null
  }



  /**
   * Model MediaUpload
   */

  export type AggregateMediaUpload = {
    _count: MediaUploadCountAggregateOutputType | null
    _avg: MediaUploadAvgAggregateOutputType | null
    _sum: MediaUploadSumAggregateOutputType | null
    _min: MediaUploadMinAggregateOutputType | null
    _max: MediaUploadMaxAggregateOutputType | null
  }

  export type MediaUploadAvgAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    tamanho_bytes: number | null
    id_idoso: number | null
  }

  export type MediaUploadSumAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    tamanho_bytes: number | null
    id_idoso: number | null
  }

  export type MediaUploadMinAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    nome_original: string | null
    caminho: string | null
    tipo_mime: string | null
    tamanho_bytes: number | null
    tipo_midia: string | null
    analise: string | null
    id_idoso: number | null
    criado_em: Date | null
  }

  export type MediaUploadMaxAggregateOutputType = {
    id: number | null
    id_cuidador: number | null
    nome_original: string | null
    caminho: string | null
    tipo_mime: string | null
    tamanho_bytes: number | null
    tipo_midia: string | null
    analise: string | null
    id_idoso: number | null
    criado_em: Date | null
  }

  export type MediaUploadCountAggregateOutputType = {
    id: number
    id_cuidador: number
    nome_original: number
    caminho: number
    tipo_mime: number
    tamanho_bytes: number
    tipo_midia: number
    analise: number
    id_idoso: number
    criado_em: number
    _all: number
  }


  export type MediaUploadAvgAggregateInputType = {
    id?: true
    id_cuidador?: true
    tamanho_bytes?: true
    id_idoso?: true
  }

  export type MediaUploadSumAggregateInputType = {
    id?: true
    id_cuidador?: true
    tamanho_bytes?: true
    id_idoso?: true
  }

  export type MediaUploadMinAggregateInputType = {
    id?: true
    id_cuidador?: true
    nome_original?: true
    caminho?: true
    tipo_mime?: true
    tamanho_bytes?: true
    tipo_midia?: true
    analise?: true
    id_idoso?: true
    criado_em?: true
  }

  export type MediaUploadMaxAggregateInputType = {
    id?: true
    id_cuidador?: true
    nome_original?: true
    caminho?: true
    tipo_mime?: true
    tamanho_bytes?: true
    tipo_midia?: true
    analise?: true
    id_idoso?: true
    criado_em?: true
  }

  export type MediaUploadCountAggregateInputType = {
    id?: true
    id_cuidador?: true
    nome_original?: true
    caminho?: true
    tipo_mime?: true
    tamanho_bytes?: true
    tipo_midia?: true
    analise?: true
    id_idoso?: true
    criado_em?: true
    _all?: true
  }

  export type MediaUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaUpload to aggregate.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaUploads
    **/
    _count?: true | MediaUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaUploadMaxAggregateInputType
  }

  export type GetMediaUploadAggregateType<T extends MediaUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaUpload[P]>
      : GetScalarType<T[P], AggregateMediaUpload[P]>
  }




  export type MediaUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaUploadWhereInput
    orderBy?: MediaUploadOrderByWithAggregationInput | MediaUploadOrderByWithAggregationInput[]
    by: MediaUploadScalarFieldEnum[] | MediaUploadScalarFieldEnum
    having?: MediaUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaUploadCountAggregateInputType | true
    _avg?: MediaUploadAvgAggregateInputType
    _sum?: MediaUploadSumAggregateInputType
    _min?: MediaUploadMinAggregateInputType
    _max?: MediaUploadMaxAggregateInputType
  }

  export type MediaUploadGroupByOutputType = {
    id: number
    id_cuidador: number
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise: string | null
    id_idoso: number | null
    criado_em: Date
    _count: MediaUploadCountAggregateOutputType | null
    _avg: MediaUploadAvgAggregateOutputType | null
    _sum: MediaUploadSumAggregateOutputType | null
    _min: MediaUploadMinAggregateOutputType | null
    _max: MediaUploadMaxAggregateOutputType | null
  }

  type GetMediaUploadGroupByPayload<T extends MediaUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaUploadGroupByOutputType[P]>
            : GetScalarType<T[P], MediaUploadGroupByOutputType[P]>
        }
      >
    >


  export type MediaUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cuidador?: boolean
    nome_original?: boolean
    caminho?: boolean
    tipo_mime?: boolean
    tamanho_bytes?: boolean
    tipo_midia?: boolean
    analise?: boolean
    id_idoso?: boolean
    criado_em?: boolean
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
    idoso?: boolean | MediaUpload$idosoArgs<ExtArgs>
  }, ExtArgs["result"]["mediaUpload"]>

  export type MediaUploadSelectScalar = {
    id?: boolean
    id_cuidador?: boolean
    nome_original?: boolean
    caminho?: boolean
    tipo_mime?: boolean
    tamanho_bytes?: boolean
    tipo_midia?: boolean
    analise?: boolean
    id_idoso?: boolean
    criado_em?: boolean
  }

  export type MediaUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
    idoso?: boolean | MediaUpload$idosoArgs<ExtArgs>
  }


  export type $MediaUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaUpload"
    objects: {
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
      idoso: Prisma.$IdosoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cuidador: number
      nome_original: string
      caminho: string
      tipo_mime: string
      tamanho_bytes: number
      tipo_midia: string
      analise: string | null
      id_idoso: number | null
      criado_em: Date
    }, ExtArgs["result"]["mediaUpload"]>
    composites: {}
  }


  type MediaUploadGetPayload<S extends boolean | null | undefined | MediaUploadDefaultArgs> = $Result.GetResult<Prisma.$MediaUploadPayload, S>

  type MediaUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaUploadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaUploadCountAggregateInputType | true
    }

  export interface MediaUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaUpload'], meta: { name: 'MediaUpload' } }
    /**
     * Find zero or one MediaUpload that matches the filter.
     * @param {MediaUploadFindUniqueArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MediaUploadFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUploadFindUniqueArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MediaUpload that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MediaUploadFindUniqueOrThrowArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MediaUploadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaUploadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MediaUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadFindFirstArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MediaUploadFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaUploadFindFirstArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MediaUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadFindFirstOrThrowArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MediaUploadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaUploadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MediaUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaUploads
     * const mediaUploads = await prisma.mediaUpload.findMany()
     * 
     * // Get first 10 MediaUploads
     * const mediaUploads = await prisma.mediaUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaUploadWithIdOnly = await prisma.mediaUpload.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MediaUploadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaUploadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MediaUpload.
     * @param {MediaUploadCreateArgs} args - Arguments to create a MediaUpload.
     * @example
     * // Create one MediaUpload
     * const MediaUpload = await prisma.mediaUpload.create({
     *   data: {
     *     // ... data to create a MediaUpload
     *   }
     * })
     * 
    **/
    create<T extends MediaUploadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUploadCreateArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MediaUpload.
     * @param {MediaUploadDeleteArgs} args - Arguments to delete one MediaUpload.
     * @example
     * // Delete one MediaUpload
     * const MediaUpload = await prisma.mediaUpload.delete({
     *   where: {
     *     // ... filter to delete one MediaUpload
     *   }
     * })
     * 
    **/
    delete<T extends MediaUploadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUploadDeleteArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MediaUpload.
     * @param {MediaUploadUpdateArgs} args - Arguments to update one MediaUpload.
     * @example
     * // Update one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MediaUploadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUploadUpdateArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MediaUploads.
     * @param {MediaUploadDeleteManyArgs} args - Arguments to filter MediaUploads to delete.
     * @example
     * // Delete a few MediaUploads
     * const { count } = await prisma.mediaUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MediaUploadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaUploadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaUploads
     * const mediaUpload = await prisma.mediaUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MediaUploadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUploadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaUpload.
     * @param {MediaUploadUpsertArgs} args - Arguments to update or create a MediaUpload.
     * @example
     * // Update or create a MediaUpload
     * const mediaUpload = await prisma.mediaUpload.upsert({
     *   create: {
     *     // ... data to create a MediaUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaUpload we want to update
     *   }
     * })
    **/
    upsert<T extends MediaUploadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUploadUpsertArgs<ExtArgs>>
    ): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MediaUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadCountArgs} args - Arguments to filter MediaUploads to count.
     * @example
     * // Count the number of MediaUploads
     * const count = await prisma.mediaUpload.count({
     *   where: {
     *     // ... the filter for the MediaUploads we want to count
     *   }
     * })
    **/
    count<T extends MediaUploadCountArgs>(
      args?: Subset<T, MediaUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaUploadAggregateArgs>(args: Subset<T, MediaUploadAggregateArgs>): Prisma.PrismaPromise<GetMediaUploadAggregateType<T>>

    /**
     * Group by MediaUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaUploadGroupByArgs['orderBy'] }
        : { orderBy?: MediaUploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaUpload model
   */
  readonly fields: MediaUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    idoso<T extends MediaUpload$idosoArgs<ExtArgs> = {}>(args?: Subset<T, MediaUpload$idosoArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MediaUpload model
   */ 
  interface MediaUploadFieldRefs {
    readonly id: FieldRef<"MediaUpload", 'Int'>
    readonly id_cuidador: FieldRef<"MediaUpload", 'Int'>
    readonly nome_original: FieldRef<"MediaUpload", 'String'>
    readonly caminho: FieldRef<"MediaUpload", 'String'>
    readonly tipo_mime: FieldRef<"MediaUpload", 'String'>
    readonly tamanho_bytes: FieldRef<"MediaUpload", 'Int'>
    readonly tipo_midia: FieldRef<"MediaUpload", 'String'>
    readonly analise: FieldRef<"MediaUpload", 'String'>
    readonly id_idoso: FieldRef<"MediaUpload", 'Int'>
    readonly criado_em: FieldRef<"MediaUpload", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MediaUpload findUnique
   */
  export type MediaUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where: MediaUploadWhereUniqueInput
  }


  /**
   * MediaUpload findUniqueOrThrow
   */
  export type MediaUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where: MediaUploadWhereUniqueInput
  }


  /**
   * MediaUpload findFirst
   */
  export type MediaUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaUploads.
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaUploads.
     */
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }


  /**
   * MediaUpload findFirstOrThrow
   */
  export type MediaUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaUploads.
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaUploads.
     */
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }


  /**
   * MediaUpload findMany
   */
  export type MediaUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUploads to fetch.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaUploads.
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }


  /**
   * MediaUpload create
   */
  export type MediaUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaUpload.
     */
    data: XOR<MediaUploadCreateInput, MediaUploadUncheckedCreateInput>
  }


  /**
   * MediaUpload update
   */
  export type MediaUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaUpload.
     */
    data: XOR<MediaUploadUpdateInput, MediaUploadUncheckedUpdateInput>
    /**
     * Choose, which MediaUpload to update.
     */
    where: MediaUploadWhereUniqueInput
  }


  /**
   * MediaUpload updateMany
   */
  export type MediaUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaUploads.
     */
    data: XOR<MediaUploadUpdateManyMutationInput, MediaUploadUncheckedUpdateManyInput>
    /**
     * Filter which MediaUploads to update
     */
    where?: MediaUploadWhereInput
  }


  /**
   * MediaUpload upsert
   */
  export type MediaUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaUpload to update in case it exists.
     */
    where: MediaUploadWhereUniqueInput
    /**
     * In case the MediaUpload found by the `where` argument doesn't exist, create a new MediaUpload with this data.
     */
    create: XOR<MediaUploadCreateInput, MediaUploadUncheckedCreateInput>
    /**
     * In case the MediaUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUploadUpdateInput, MediaUploadUncheckedUpdateInput>
  }


  /**
   * MediaUpload delete
   */
  export type MediaUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter which MediaUpload to delete.
     */
    where: MediaUploadWhereUniqueInput
  }


  /**
   * MediaUpload deleteMany
   */
  export type MediaUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaUploads to delete
     */
    where?: MediaUploadWhereInput
  }


  /**
   * MediaUpload.idoso
   */
  export type MediaUpload$idosoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idoso
     */
    select?: IdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IdosoInclude<ExtArgs> | null
    where?: IdosoWhereInput
  }


  /**
   * MediaUpload without action
   */
  export type MediaUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaUploadInclude<ExtArgs> | null
  }



  /**
   * Model ProntuarioDiario
   */

  export type AggregateProntuarioDiario = {
    _count: ProntuarioDiarioCountAggregateOutputType | null
    _avg: ProntuarioDiarioAvgAggregateOutputType | null
    _sum: ProntuarioDiarioSumAggregateOutputType | null
    _min: ProntuarioDiarioMinAggregateOutputType | null
    _max: ProntuarioDiarioMaxAggregateOutputType | null
  }

  export type ProntuarioDiarioAvgAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type ProntuarioDiarioSumAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type ProntuarioDiarioMinAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    data: Date | null
    diurese: string | null
    evacuacao: string | null
    hidratacao: string | null
    observacao: string | null
  }

  export type ProntuarioDiarioMaxAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    data: Date | null
    diurese: string | null
    evacuacao: string | null
    hidratacao: string | null
    observacao: string | null
  }

  export type ProntuarioDiarioCountAggregateOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    data: number
    diurese: number
    evacuacao: number
    hidratacao: number
    observacao: number
    _all: number
  }


  export type ProntuarioDiarioAvgAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type ProntuarioDiarioSumAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type ProntuarioDiarioMinAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    data?: true
    diurese?: true
    evacuacao?: true
    hidratacao?: true
    observacao?: true
  }

  export type ProntuarioDiarioMaxAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    data?: true
    diurese?: true
    evacuacao?: true
    hidratacao?: true
    observacao?: true
  }

  export type ProntuarioDiarioCountAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    data?: true
    diurese?: true
    evacuacao?: true
    hidratacao?: true
    observacao?: true
    _all?: true
  }

  export type ProntuarioDiarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProntuarioDiario to aggregate.
     */
    where?: ProntuarioDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProntuarioDiarios to fetch.
     */
    orderBy?: ProntuarioDiarioOrderByWithRelationInput | ProntuarioDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProntuarioDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProntuarioDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProntuarioDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProntuarioDiarios
    **/
    _count?: true | ProntuarioDiarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProntuarioDiarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProntuarioDiarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProntuarioDiarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProntuarioDiarioMaxAggregateInputType
  }

  export type GetProntuarioDiarioAggregateType<T extends ProntuarioDiarioAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuarioDiario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuarioDiario[P]>
      : GetScalarType<T[P], AggregateProntuarioDiario[P]>
  }




  export type ProntuarioDiarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProntuarioDiarioWhereInput
    orderBy?: ProntuarioDiarioOrderByWithAggregationInput | ProntuarioDiarioOrderByWithAggregationInput[]
    by: ProntuarioDiarioScalarFieldEnum[] | ProntuarioDiarioScalarFieldEnum
    having?: ProntuarioDiarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProntuarioDiarioCountAggregateInputType | true
    _avg?: ProntuarioDiarioAvgAggregateInputType
    _sum?: ProntuarioDiarioSumAggregateInputType
    _min?: ProntuarioDiarioMinAggregateInputType
    _max?: ProntuarioDiarioMaxAggregateInputType
  }

  export type ProntuarioDiarioGroupByOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    data: Date
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao: string | null
    _count: ProntuarioDiarioCountAggregateOutputType | null
    _avg: ProntuarioDiarioAvgAggregateOutputType | null
    _sum: ProntuarioDiarioSumAggregateOutputType | null
    _min: ProntuarioDiarioMinAggregateOutputType | null
    _max: ProntuarioDiarioMaxAggregateOutputType | null
  }

  type GetProntuarioDiarioGroupByPayload<T extends ProntuarioDiarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProntuarioDiarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProntuarioDiarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProntuarioDiarioGroupByOutputType[P]>
            : GetScalarType<T[P], ProntuarioDiarioGroupByOutputType[P]>
        }
      >
    >


  export type ProntuarioDiarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    data?: boolean
    diurese?: boolean
    evacuacao?: boolean
    hidratacao?: boolean
    observacao?: boolean
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarioDiario"]>

  export type ProntuarioDiarioSelectScalar = {
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    data?: boolean
    diurese?: boolean
    evacuacao?: boolean
    hidratacao?: boolean
    observacao?: boolean
  }

  export type ProntuarioDiarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }


  export type $ProntuarioDiarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProntuarioDiario"
    objects: {
      idoso: Prisma.$IdosoPayload<ExtArgs>
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_idoso: number
      id_cuidador: number
      data: Date
      diurese: string
      evacuacao: string
      hidratacao: string
      observacao: string | null
    }, ExtArgs["result"]["prontuarioDiario"]>
    composites: {}
  }


  type ProntuarioDiarioGetPayload<S extends boolean | null | undefined | ProntuarioDiarioDefaultArgs> = $Result.GetResult<Prisma.$ProntuarioDiarioPayload, S>

  type ProntuarioDiarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProntuarioDiarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProntuarioDiarioCountAggregateInputType | true
    }

  export interface ProntuarioDiarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProntuarioDiario'], meta: { name: 'ProntuarioDiario' } }
    /**
     * Find zero or one ProntuarioDiario that matches the filter.
     * @param {ProntuarioDiarioFindUniqueArgs} args - Arguments to find a ProntuarioDiario
     * @example
     * // Get one ProntuarioDiario
     * const prontuarioDiario = await prisma.prontuarioDiario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProntuarioDiarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProntuarioDiarioFindUniqueArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProntuarioDiario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProntuarioDiarioFindUniqueOrThrowArgs} args - Arguments to find a ProntuarioDiario
     * @example
     * // Get one ProntuarioDiario
     * const prontuarioDiario = await prisma.prontuarioDiario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProntuarioDiarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProntuarioDiarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProntuarioDiario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioFindFirstArgs} args - Arguments to find a ProntuarioDiario
     * @example
     * // Get one ProntuarioDiario
     * const prontuarioDiario = await prisma.prontuarioDiario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProntuarioDiarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProntuarioDiarioFindFirstArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProntuarioDiario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioFindFirstOrThrowArgs} args - Arguments to find a ProntuarioDiario
     * @example
     * // Get one ProntuarioDiario
     * const prontuarioDiario = await prisma.prontuarioDiario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProntuarioDiarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProntuarioDiarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProntuarioDiarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProntuarioDiarios
     * const prontuarioDiarios = await prisma.prontuarioDiario.findMany()
     * 
     * // Get first 10 ProntuarioDiarios
     * const prontuarioDiarios = await prisma.prontuarioDiario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prontuarioDiarioWithIdOnly = await prisma.prontuarioDiario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProntuarioDiarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProntuarioDiarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProntuarioDiario.
     * @param {ProntuarioDiarioCreateArgs} args - Arguments to create a ProntuarioDiario.
     * @example
     * // Create one ProntuarioDiario
     * const ProntuarioDiario = await prisma.prontuarioDiario.create({
     *   data: {
     *     // ... data to create a ProntuarioDiario
     *   }
     * })
     * 
    **/
    create<T extends ProntuarioDiarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProntuarioDiarioCreateArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ProntuarioDiario.
     * @param {ProntuarioDiarioDeleteArgs} args - Arguments to delete one ProntuarioDiario.
     * @example
     * // Delete one ProntuarioDiario
     * const ProntuarioDiario = await prisma.prontuarioDiario.delete({
     *   where: {
     *     // ... filter to delete one ProntuarioDiario
     *   }
     * })
     * 
    **/
    delete<T extends ProntuarioDiarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProntuarioDiarioDeleteArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProntuarioDiario.
     * @param {ProntuarioDiarioUpdateArgs} args - Arguments to update one ProntuarioDiario.
     * @example
     * // Update one ProntuarioDiario
     * const prontuarioDiario = await prisma.prontuarioDiario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProntuarioDiarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProntuarioDiarioUpdateArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProntuarioDiarios.
     * @param {ProntuarioDiarioDeleteManyArgs} args - Arguments to filter ProntuarioDiarios to delete.
     * @example
     * // Delete a few ProntuarioDiarios
     * const { count } = await prisma.prontuarioDiario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProntuarioDiarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProntuarioDiarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProntuarioDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProntuarioDiarios
     * const prontuarioDiario = await prisma.prontuarioDiario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProntuarioDiarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProntuarioDiarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProntuarioDiario.
     * @param {ProntuarioDiarioUpsertArgs} args - Arguments to update or create a ProntuarioDiario.
     * @example
     * // Update or create a ProntuarioDiario
     * const prontuarioDiario = await prisma.prontuarioDiario.upsert({
     *   create: {
     *     // ... data to create a ProntuarioDiario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProntuarioDiario we want to update
     *   }
     * })
    **/
    upsert<T extends ProntuarioDiarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProntuarioDiarioUpsertArgs<ExtArgs>>
    ): Prisma__ProntuarioDiarioClient<$Result.GetResult<Prisma.$ProntuarioDiarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProntuarioDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioCountArgs} args - Arguments to filter ProntuarioDiarios to count.
     * @example
     * // Count the number of ProntuarioDiarios
     * const count = await prisma.prontuarioDiario.count({
     *   where: {
     *     // ... the filter for the ProntuarioDiarios we want to count
     *   }
     * })
    **/
    count<T extends ProntuarioDiarioCountArgs>(
      args?: Subset<T, ProntuarioDiarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProntuarioDiarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProntuarioDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProntuarioDiarioAggregateArgs>(args: Subset<T, ProntuarioDiarioAggregateArgs>): Prisma.PrismaPromise<GetProntuarioDiarioAggregateType<T>>

    /**
     * Group by ProntuarioDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioDiarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProntuarioDiarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProntuarioDiarioGroupByArgs['orderBy'] }
        : { orderBy?: ProntuarioDiarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProntuarioDiarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuarioDiarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProntuarioDiario model
   */
  readonly fields: ProntuarioDiarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProntuarioDiario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProntuarioDiarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProntuarioDiario model
   */ 
  interface ProntuarioDiarioFieldRefs {
    readonly id: FieldRef<"ProntuarioDiario", 'Int'>
    readonly id_idoso: FieldRef<"ProntuarioDiario", 'Int'>
    readonly id_cuidador: FieldRef<"ProntuarioDiario", 'Int'>
    readonly data: FieldRef<"ProntuarioDiario", 'DateTime'>
    readonly diurese: FieldRef<"ProntuarioDiario", 'String'>
    readonly evacuacao: FieldRef<"ProntuarioDiario", 'String'>
    readonly hidratacao: FieldRef<"ProntuarioDiario", 'String'>
    readonly observacao: FieldRef<"ProntuarioDiario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProntuarioDiario findUnique
   */
  export type ProntuarioDiarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * Filter, which ProntuarioDiario to fetch.
     */
    where: ProntuarioDiarioWhereUniqueInput
  }


  /**
   * ProntuarioDiario findUniqueOrThrow
   */
  export type ProntuarioDiarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * Filter, which ProntuarioDiario to fetch.
     */
    where: ProntuarioDiarioWhereUniqueInput
  }


  /**
   * ProntuarioDiario findFirst
   */
  export type ProntuarioDiarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * Filter, which ProntuarioDiario to fetch.
     */
    where?: ProntuarioDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProntuarioDiarios to fetch.
     */
    orderBy?: ProntuarioDiarioOrderByWithRelationInput | ProntuarioDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProntuarioDiarios.
     */
    cursor?: ProntuarioDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProntuarioDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProntuarioDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProntuarioDiarios.
     */
    distinct?: ProntuarioDiarioScalarFieldEnum | ProntuarioDiarioScalarFieldEnum[]
  }


  /**
   * ProntuarioDiario findFirstOrThrow
   */
  export type ProntuarioDiarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * Filter, which ProntuarioDiario to fetch.
     */
    where?: ProntuarioDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProntuarioDiarios to fetch.
     */
    orderBy?: ProntuarioDiarioOrderByWithRelationInput | ProntuarioDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProntuarioDiarios.
     */
    cursor?: ProntuarioDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProntuarioDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProntuarioDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProntuarioDiarios.
     */
    distinct?: ProntuarioDiarioScalarFieldEnum | ProntuarioDiarioScalarFieldEnum[]
  }


  /**
   * ProntuarioDiario findMany
   */
  export type ProntuarioDiarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * Filter, which ProntuarioDiarios to fetch.
     */
    where?: ProntuarioDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProntuarioDiarios to fetch.
     */
    orderBy?: ProntuarioDiarioOrderByWithRelationInput | ProntuarioDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProntuarioDiarios.
     */
    cursor?: ProntuarioDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProntuarioDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProntuarioDiarios.
     */
    skip?: number
    distinct?: ProntuarioDiarioScalarFieldEnum | ProntuarioDiarioScalarFieldEnum[]
  }


  /**
   * ProntuarioDiario create
   */
  export type ProntuarioDiarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ProntuarioDiario.
     */
    data: XOR<ProntuarioDiarioCreateInput, ProntuarioDiarioUncheckedCreateInput>
  }


  /**
   * ProntuarioDiario update
   */
  export type ProntuarioDiarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ProntuarioDiario.
     */
    data: XOR<ProntuarioDiarioUpdateInput, ProntuarioDiarioUncheckedUpdateInput>
    /**
     * Choose, which ProntuarioDiario to update.
     */
    where: ProntuarioDiarioWhereUniqueInput
  }


  /**
   * ProntuarioDiario updateMany
   */
  export type ProntuarioDiarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProntuarioDiarios.
     */
    data: XOR<ProntuarioDiarioUpdateManyMutationInput, ProntuarioDiarioUncheckedUpdateManyInput>
    /**
     * Filter which ProntuarioDiarios to update
     */
    where?: ProntuarioDiarioWhereInput
  }


  /**
   * ProntuarioDiario upsert
   */
  export type ProntuarioDiarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ProntuarioDiario to update in case it exists.
     */
    where: ProntuarioDiarioWhereUniqueInput
    /**
     * In case the ProntuarioDiario found by the `where` argument doesn't exist, create a new ProntuarioDiario with this data.
     */
    create: XOR<ProntuarioDiarioCreateInput, ProntuarioDiarioUncheckedCreateInput>
    /**
     * In case the ProntuarioDiario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProntuarioDiarioUpdateInput, ProntuarioDiarioUncheckedUpdateInput>
  }


  /**
   * ProntuarioDiario delete
   */
  export type ProntuarioDiarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
    /**
     * Filter which ProntuarioDiario to delete.
     */
    where: ProntuarioDiarioWhereUniqueInput
  }


  /**
   * ProntuarioDiario deleteMany
   */
  export type ProntuarioDiarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProntuarioDiarios to delete
     */
    where?: ProntuarioDiarioWhereInput
  }


  /**
   * ProntuarioDiario without action
   */
  export type ProntuarioDiarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuarioDiario
     */
    select?: ProntuarioDiarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProntuarioDiarioInclude<ExtArgs> | null
  }



  /**
   * Model Relatorio
   */

  export type AggregateRelatorio = {
    _count: RelatorioCountAggregateOutputType | null
    _avg: RelatorioAvgAggregateOutputType | null
    _sum: RelatorioSumAggregateOutputType | null
    _min: RelatorioMinAggregateOutputType | null
    _max: RelatorioMaxAggregateOutputType | null
  }

  export type RelatorioAvgAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type RelatorioSumAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type RelatorioMinAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    tipo: string | null
    data_inicio: Date | null
    data_fim: Date | null
    resumo_geral: string | null
    status_geral: string | null
    criado_em: Date | null
  }

  export type RelatorioMaxAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    tipo: string | null
    data_inicio: Date | null
    data_fim: Date | null
    resumo_geral: string | null
    status_geral: string | null
    criado_em: Date | null
  }

  export type RelatorioCountAggregateOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    tipo: number
    data_inicio: number
    data_fim: number
    resumo_geral: number
    status_geral: number
    criado_em: number
    _all: number
  }


  export type RelatorioAvgAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type RelatorioSumAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type RelatorioMinAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    tipo?: true
    data_inicio?: true
    data_fim?: true
    resumo_geral?: true
    status_geral?: true
    criado_em?: true
  }

  export type RelatorioMaxAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    tipo?: true
    data_inicio?: true
    data_fim?: true
    resumo_geral?: true
    status_geral?: true
    criado_em?: true
  }

  export type RelatorioCountAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    tipo?: true
    data_inicio?: true
    data_fim?: true
    resumo_geral?: true
    status_geral?: true
    criado_em?: true
    _all?: true
  }

  export type RelatorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relatorio to aggregate.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relatorios
    **/
    _count?: true | RelatorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioMaxAggregateInputType
  }

  export type GetRelatorioAggregateType<T extends RelatorioAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorio[P]>
      : GetScalarType<T[P], AggregateRelatorio[P]>
  }




  export type RelatorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithAggregationInput | RelatorioOrderByWithAggregationInput[]
    by: RelatorioScalarFieldEnum[] | RelatorioScalarFieldEnum
    having?: RelatorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioCountAggregateInputType | true
    _avg?: RelatorioAvgAggregateInputType
    _sum?: RelatorioSumAggregateInputType
    _min?: RelatorioMinAggregateInputType
    _max?: RelatorioMaxAggregateInputType
  }

  export type RelatorioGroupByOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    tipo: string
    data_inicio: Date
    data_fim: Date
    resumo_geral: string | null
    status_geral: string | null
    criado_em: Date
    _count: RelatorioCountAggregateOutputType | null
    _avg: RelatorioAvgAggregateOutputType | null
    _sum: RelatorioSumAggregateOutputType | null
    _min: RelatorioMinAggregateOutputType | null
    _max: RelatorioMaxAggregateOutputType | null
  }

  type GetRelatorioGroupByPayload<T extends RelatorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    tipo?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    resumo_geral?: boolean
    status_geral?: boolean
    criado_em?: boolean
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorio"]>

  export type RelatorioSelectScalar = {
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    tipo?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    resumo_geral?: boolean
    status_geral?: boolean
    criado_em?: boolean
  }

  export type RelatorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }


  export type $RelatorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relatorio"
    objects: {
      idoso: Prisma.$IdosoPayload<ExtArgs>
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_idoso: number
      id_cuidador: number
      tipo: string
      data_inicio: Date
      data_fim: Date
      resumo_geral: string | null
      status_geral: string | null
      criado_em: Date
    }, ExtArgs["result"]["relatorio"]>
    composites: {}
  }


  type RelatorioGetPayload<S extends boolean | null | undefined | RelatorioDefaultArgs> = $Result.GetResult<Prisma.$RelatorioPayload, S>

  type RelatorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RelatorioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RelatorioCountAggregateInputType | true
    }

  export interface RelatorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relatorio'], meta: { name: 'Relatorio' } }
    /**
     * Find zero or one Relatorio that matches the filter.
     * @param {RelatorioFindUniqueArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RelatorioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RelatorioFindUniqueArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Relatorio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RelatorioFindUniqueOrThrowArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RelatorioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RelatorioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Relatorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindFirstArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RelatorioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RelatorioFindFirstArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Relatorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindFirstOrThrowArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RelatorioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RelatorioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Relatorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relatorios
     * const relatorios = await prisma.relatorio.findMany()
     * 
     * // Get first 10 Relatorios
     * const relatorios = await prisma.relatorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatorioWithIdOnly = await prisma.relatorio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RelatorioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RelatorioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Relatorio.
     * @param {RelatorioCreateArgs} args - Arguments to create a Relatorio.
     * @example
     * // Create one Relatorio
     * const Relatorio = await prisma.relatorio.create({
     *   data: {
     *     // ... data to create a Relatorio
     *   }
     * })
     * 
    **/
    create<T extends RelatorioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RelatorioCreateArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Relatorio.
     * @param {RelatorioDeleteArgs} args - Arguments to delete one Relatorio.
     * @example
     * // Delete one Relatorio
     * const Relatorio = await prisma.relatorio.delete({
     *   where: {
     *     // ... filter to delete one Relatorio
     *   }
     * })
     * 
    **/
    delete<T extends RelatorioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RelatorioDeleteArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Relatorio.
     * @param {RelatorioUpdateArgs} args - Arguments to update one Relatorio.
     * @example
     * // Update one Relatorio
     * const relatorio = await prisma.relatorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RelatorioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RelatorioUpdateArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Relatorios.
     * @param {RelatorioDeleteManyArgs} args - Arguments to filter Relatorios to delete.
     * @example
     * // Delete a few Relatorios
     * const { count } = await prisma.relatorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RelatorioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RelatorioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relatorios
     * const relatorio = await prisma.relatorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RelatorioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RelatorioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relatorio.
     * @param {RelatorioUpsertArgs} args - Arguments to update or create a Relatorio.
     * @example
     * // Update or create a Relatorio
     * const relatorio = await prisma.relatorio.upsert({
     *   create: {
     *     // ... data to create a Relatorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relatorio we want to update
     *   }
     * })
    **/
    upsert<T extends RelatorioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RelatorioUpsertArgs<ExtArgs>>
    ): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioCountArgs} args - Arguments to filter Relatorios to count.
     * @example
     * // Count the number of Relatorios
     * const count = await prisma.relatorio.count({
     *   where: {
     *     // ... the filter for the Relatorios we want to count
     *   }
     * })
    **/
    count<T extends RelatorioCountArgs>(
      args?: Subset<T, RelatorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelatorioAggregateArgs>(args: Subset<T, RelatorioAggregateArgs>): Prisma.PrismaPromise<GetRelatorioAggregateType<T>>

    /**
     * Group by Relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelatorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelatorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relatorio model
   */
  readonly fields: RelatorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relatorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Relatorio model
   */ 
  interface RelatorioFieldRefs {
    readonly id: FieldRef<"Relatorio", 'Int'>
    readonly id_idoso: FieldRef<"Relatorio", 'Int'>
    readonly id_cuidador: FieldRef<"Relatorio", 'Int'>
    readonly tipo: FieldRef<"Relatorio", 'String'>
    readonly data_inicio: FieldRef<"Relatorio", 'DateTime'>
    readonly data_fim: FieldRef<"Relatorio", 'DateTime'>
    readonly resumo_geral: FieldRef<"Relatorio", 'String'>
    readonly status_geral: FieldRef<"Relatorio", 'String'>
    readonly criado_em: FieldRef<"Relatorio", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Relatorio findUnique
   */
  export type RelatorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where: RelatorioWhereUniqueInput
  }


  /**
   * Relatorio findUniqueOrThrow
   */
  export type RelatorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where: RelatorioWhereUniqueInput
  }


  /**
   * Relatorio findFirst
   */
  export type RelatorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relatorios.
     */
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }


  /**
   * Relatorio findFirstOrThrow
   */
  export type RelatorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relatorios.
     */
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }


  /**
   * Relatorio findMany
   */
  export type RelatorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorios to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }


  /**
   * Relatorio create
   */
  export type RelatorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The data needed to create a Relatorio.
     */
    data: XOR<RelatorioCreateInput, RelatorioUncheckedCreateInput>
  }


  /**
   * Relatorio update
   */
  export type RelatorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The data needed to update a Relatorio.
     */
    data: XOR<RelatorioUpdateInput, RelatorioUncheckedUpdateInput>
    /**
     * Choose, which Relatorio to update.
     */
    where: RelatorioWhereUniqueInput
  }


  /**
   * Relatorio updateMany
   */
  export type RelatorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relatorios.
     */
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyInput>
    /**
     * Filter which Relatorios to update
     */
    where?: RelatorioWhereInput
  }


  /**
   * Relatorio upsert
   */
  export type RelatorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The filter to search for the Relatorio to update in case it exists.
     */
    where: RelatorioWhereUniqueInput
    /**
     * In case the Relatorio found by the `where` argument doesn't exist, create a new Relatorio with this data.
     */
    create: XOR<RelatorioCreateInput, RelatorioUncheckedCreateInput>
    /**
     * In case the Relatorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioUpdateInput, RelatorioUncheckedUpdateInput>
  }


  /**
   * Relatorio delete
   */
  export type RelatorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter which Relatorio to delete.
     */
    where: RelatorioWhereUniqueInput
  }


  /**
   * Relatorio deleteMany
   */
  export type RelatorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relatorios to delete
     */
    where?: RelatorioWhereInput
  }


  /**
   * Relatorio without action
   */
  export type RelatorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelatorioInclude<ExtArgs> | null
  }



  /**
   * Model CuidadorIdoso
   */

  export type AggregateCuidadorIdoso = {
    _count: CuidadorIdosoCountAggregateOutputType | null
    _avg: CuidadorIdosoAvgAggregateOutputType | null
    _sum: CuidadorIdosoSumAggregateOutputType | null
    _min: CuidadorIdosoMinAggregateOutputType | null
    _max: CuidadorIdosoMaxAggregateOutputType | null
  }

  export type CuidadorIdosoAvgAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type CuidadorIdosoSumAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type CuidadorIdosoMinAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    papel: string | null
    criado_em: Date | null
  }

  export type CuidadorIdosoMaxAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    papel: string | null
    criado_em: Date | null
  }

  export type CuidadorIdosoCountAggregateOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    papel: number
    criado_em: number
    _all: number
  }


  export type CuidadorIdosoAvgAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type CuidadorIdosoSumAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type CuidadorIdosoMinAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    papel?: true
    criado_em?: true
  }

  export type CuidadorIdosoMaxAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    papel?: true
    criado_em?: true
  }

  export type CuidadorIdosoCountAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    papel?: true
    criado_em?: true
    _all?: true
  }

  export type CuidadorIdosoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuidadorIdoso to aggregate.
     */
    where?: CuidadorIdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuidadorIdosos to fetch.
     */
    orderBy?: CuidadorIdosoOrderByWithRelationInput | CuidadorIdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuidadorIdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuidadorIdosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuidadorIdosos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CuidadorIdosos
    **/
    _count?: true | CuidadorIdosoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuidadorIdosoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuidadorIdosoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuidadorIdosoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuidadorIdosoMaxAggregateInputType
  }

  export type GetCuidadorIdosoAggregateType<T extends CuidadorIdosoAggregateArgs> = {
        [P in keyof T & keyof AggregateCuidadorIdoso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuidadorIdoso[P]>
      : GetScalarType<T[P], AggregateCuidadorIdoso[P]>
  }




  export type CuidadorIdosoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuidadorIdosoWhereInput
    orderBy?: CuidadorIdosoOrderByWithAggregationInput | CuidadorIdosoOrderByWithAggregationInput[]
    by: CuidadorIdosoScalarFieldEnum[] | CuidadorIdosoScalarFieldEnum
    having?: CuidadorIdosoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuidadorIdosoCountAggregateInputType | true
    _avg?: CuidadorIdosoAvgAggregateInputType
    _sum?: CuidadorIdosoSumAggregateInputType
    _min?: CuidadorIdosoMinAggregateInputType
    _max?: CuidadorIdosoMaxAggregateInputType
  }

  export type CuidadorIdosoGroupByOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    papel: string
    criado_em: Date
    _count: CuidadorIdosoCountAggregateOutputType | null
    _avg: CuidadorIdosoAvgAggregateOutputType | null
    _sum: CuidadorIdosoSumAggregateOutputType | null
    _min: CuidadorIdosoMinAggregateOutputType | null
    _max: CuidadorIdosoMaxAggregateOutputType | null
  }

  type GetCuidadorIdosoGroupByPayload<T extends CuidadorIdosoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuidadorIdosoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuidadorIdosoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuidadorIdosoGroupByOutputType[P]>
            : GetScalarType<T[P], CuidadorIdosoGroupByOutputType[P]>
        }
      >
    >


  export type CuidadorIdosoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    papel?: boolean
    criado_em?: boolean
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuidadorIdoso"]>

  export type CuidadorIdosoSelectScalar = {
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    papel?: boolean
    criado_em?: boolean
  }

  export type CuidadorIdosoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }


  export type $CuidadorIdosoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CuidadorIdoso"
    objects: {
      idoso: Prisma.$IdosoPayload<ExtArgs>
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_idoso: number
      id_cuidador: number
      papel: string
      criado_em: Date
    }, ExtArgs["result"]["cuidadorIdoso"]>
    composites: {}
  }


  type CuidadorIdosoGetPayload<S extends boolean | null | undefined | CuidadorIdosoDefaultArgs> = $Result.GetResult<Prisma.$CuidadorIdosoPayload, S>

  type CuidadorIdosoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CuidadorIdosoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CuidadorIdosoCountAggregateInputType | true
    }

  export interface CuidadorIdosoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CuidadorIdoso'], meta: { name: 'CuidadorIdoso' } }
    /**
     * Find zero or one CuidadorIdoso that matches the filter.
     * @param {CuidadorIdosoFindUniqueArgs} args - Arguments to find a CuidadorIdoso
     * @example
     * // Get one CuidadorIdoso
     * const cuidadorIdoso = await prisma.cuidadorIdoso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CuidadorIdosoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorIdosoFindUniqueArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CuidadorIdoso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CuidadorIdosoFindUniqueOrThrowArgs} args - Arguments to find a CuidadorIdoso
     * @example
     * // Get one CuidadorIdoso
     * const cuidadorIdoso = await prisma.cuidadorIdoso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CuidadorIdosoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorIdosoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CuidadorIdoso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoFindFirstArgs} args - Arguments to find a CuidadorIdoso
     * @example
     * // Get one CuidadorIdoso
     * const cuidadorIdoso = await prisma.cuidadorIdoso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CuidadorIdosoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorIdosoFindFirstArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CuidadorIdoso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoFindFirstOrThrowArgs} args - Arguments to find a CuidadorIdoso
     * @example
     * // Get one CuidadorIdoso
     * const cuidadorIdoso = await prisma.cuidadorIdoso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CuidadorIdosoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorIdosoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CuidadorIdosos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CuidadorIdosos
     * const cuidadorIdosos = await prisma.cuidadorIdoso.findMany()
     * 
     * // Get first 10 CuidadorIdosos
     * const cuidadorIdosos = await prisma.cuidadorIdoso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuidadorIdosoWithIdOnly = await prisma.cuidadorIdoso.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CuidadorIdosoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorIdosoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CuidadorIdoso.
     * @param {CuidadorIdosoCreateArgs} args - Arguments to create a CuidadorIdoso.
     * @example
     * // Create one CuidadorIdoso
     * const CuidadorIdoso = await prisma.cuidadorIdoso.create({
     *   data: {
     *     // ... data to create a CuidadorIdoso
     *   }
     * })
     * 
    **/
    create<T extends CuidadorIdosoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorIdosoCreateArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a CuidadorIdoso.
     * @param {CuidadorIdosoDeleteArgs} args - Arguments to delete one CuidadorIdoso.
     * @example
     * // Delete one CuidadorIdoso
     * const CuidadorIdoso = await prisma.cuidadorIdoso.delete({
     *   where: {
     *     // ... filter to delete one CuidadorIdoso
     *   }
     * })
     * 
    **/
    delete<T extends CuidadorIdosoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorIdosoDeleteArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CuidadorIdoso.
     * @param {CuidadorIdosoUpdateArgs} args - Arguments to update one CuidadorIdoso.
     * @example
     * // Update one CuidadorIdoso
     * const cuidadorIdoso = await prisma.cuidadorIdoso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CuidadorIdosoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorIdosoUpdateArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CuidadorIdosos.
     * @param {CuidadorIdosoDeleteManyArgs} args - Arguments to filter CuidadorIdosos to delete.
     * @example
     * // Delete a few CuidadorIdosos
     * const { count } = await prisma.cuidadorIdoso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CuidadorIdosoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuidadorIdosoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CuidadorIdosos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CuidadorIdosos
     * const cuidadorIdoso = await prisma.cuidadorIdoso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CuidadorIdosoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorIdosoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CuidadorIdoso.
     * @param {CuidadorIdosoUpsertArgs} args - Arguments to update or create a CuidadorIdoso.
     * @example
     * // Update or create a CuidadorIdoso
     * const cuidadorIdoso = await prisma.cuidadorIdoso.upsert({
     *   create: {
     *     // ... data to create a CuidadorIdoso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CuidadorIdoso we want to update
     *   }
     * })
    **/
    upsert<T extends CuidadorIdosoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CuidadorIdosoUpsertArgs<ExtArgs>>
    ): Prisma__CuidadorIdosoClient<$Result.GetResult<Prisma.$CuidadorIdosoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CuidadorIdosos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoCountArgs} args - Arguments to filter CuidadorIdosos to count.
     * @example
     * // Count the number of CuidadorIdosos
     * const count = await prisma.cuidadorIdoso.count({
     *   where: {
     *     // ... the filter for the CuidadorIdosos we want to count
     *   }
     * })
    **/
    count<T extends CuidadorIdosoCountArgs>(
      args?: Subset<T, CuidadorIdosoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuidadorIdosoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CuidadorIdoso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuidadorIdosoAggregateArgs>(args: Subset<T, CuidadorIdosoAggregateArgs>): Prisma.PrismaPromise<GetCuidadorIdosoAggregateType<T>>

    /**
     * Group by CuidadorIdoso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuidadorIdosoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuidadorIdosoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuidadorIdosoGroupByArgs['orderBy'] }
        : { orderBy?: CuidadorIdosoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuidadorIdosoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuidadorIdosoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CuidadorIdoso model
   */
  readonly fields: CuidadorIdosoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CuidadorIdoso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuidadorIdosoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CuidadorIdoso model
   */ 
  interface CuidadorIdosoFieldRefs {
    readonly id: FieldRef<"CuidadorIdoso", 'Int'>
    readonly id_idoso: FieldRef<"CuidadorIdoso", 'Int'>
    readonly id_cuidador: FieldRef<"CuidadorIdoso", 'Int'>
    readonly papel: FieldRef<"CuidadorIdoso", 'String'>
    readonly criado_em: FieldRef<"CuidadorIdoso", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CuidadorIdoso findUnique
   */
  export type CuidadorIdosoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * Filter, which CuidadorIdoso to fetch.
     */
    where: CuidadorIdosoWhereUniqueInput
  }


  /**
   * CuidadorIdoso findUniqueOrThrow
   */
  export type CuidadorIdosoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * Filter, which CuidadorIdoso to fetch.
     */
    where: CuidadorIdosoWhereUniqueInput
  }


  /**
   * CuidadorIdoso findFirst
   */
  export type CuidadorIdosoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * Filter, which CuidadorIdoso to fetch.
     */
    where?: CuidadorIdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuidadorIdosos to fetch.
     */
    orderBy?: CuidadorIdosoOrderByWithRelationInput | CuidadorIdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuidadorIdosos.
     */
    cursor?: CuidadorIdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuidadorIdosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuidadorIdosos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuidadorIdosos.
     */
    distinct?: CuidadorIdosoScalarFieldEnum | CuidadorIdosoScalarFieldEnum[]
  }


  /**
   * CuidadorIdoso findFirstOrThrow
   */
  export type CuidadorIdosoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * Filter, which CuidadorIdoso to fetch.
     */
    where?: CuidadorIdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuidadorIdosos to fetch.
     */
    orderBy?: CuidadorIdosoOrderByWithRelationInput | CuidadorIdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuidadorIdosos.
     */
    cursor?: CuidadorIdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuidadorIdosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuidadorIdosos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuidadorIdosos.
     */
    distinct?: CuidadorIdosoScalarFieldEnum | CuidadorIdosoScalarFieldEnum[]
  }


  /**
   * CuidadorIdoso findMany
   */
  export type CuidadorIdosoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * Filter, which CuidadorIdosos to fetch.
     */
    where?: CuidadorIdosoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuidadorIdosos to fetch.
     */
    orderBy?: CuidadorIdosoOrderByWithRelationInput | CuidadorIdosoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CuidadorIdosos.
     */
    cursor?: CuidadorIdosoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuidadorIdosos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuidadorIdosos.
     */
    skip?: number
    distinct?: CuidadorIdosoScalarFieldEnum | CuidadorIdosoScalarFieldEnum[]
  }


  /**
   * CuidadorIdoso create
   */
  export type CuidadorIdosoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * The data needed to create a CuidadorIdoso.
     */
    data: XOR<CuidadorIdosoCreateInput, CuidadorIdosoUncheckedCreateInput>
  }


  /**
   * CuidadorIdoso update
   */
  export type CuidadorIdosoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * The data needed to update a CuidadorIdoso.
     */
    data: XOR<CuidadorIdosoUpdateInput, CuidadorIdosoUncheckedUpdateInput>
    /**
     * Choose, which CuidadorIdoso to update.
     */
    where: CuidadorIdosoWhereUniqueInput
  }


  /**
   * CuidadorIdoso updateMany
   */
  export type CuidadorIdosoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CuidadorIdosos.
     */
    data: XOR<CuidadorIdosoUpdateManyMutationInput, CuidadorIdosoUncheckedUpdateManyInput>
    /**
     * Filter which CuidadorIdosos to update
     */
    where?: CuidadorIdosoWhereInput
  }


  /**
   * CuidadorIdoso upsert
   */
  export type CuidadorIdosoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * The filter to search for the CuidadorIdoso to update in case it exists.
     */
    where: CuidadorIdosoWhereUniqueInput
    /**
     * In case the CuidadorIdoso found by the `where` argument doesn't exist, create a new CuidadorIdoso with this data.
     */
    create: XOR<CuidadorIdosoCreateInput, CuidadorIdosoUncheckedCreateInput>
    /**
     * In case the CuidadorIdoso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuidadorIdosoUpdateInput, CuidadorIdosoUncheckedUpdateInput>
  }


  /**
   * CuidadorIdoso delete
   */
  export type CuidadorIdosoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
    /**
     * Filter which CuidadorIdoso to delete.
     */
    where: CuidadorIdosoWhereUniqueInput
  }


  /**
   * CuidadorIdoso deleteMany
   */
  export type CuidadorIdosoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuidadorIdosos to delete
     */
    where?: CuidadorIdosoWhereInput
  }


  /**
   * CuidadorIdoso without action
   */
  export type CuidadorIdosoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuidadorIdoso
     */
    select?: CuidadorIdosoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CuidadorIdosoInclude<ExtArgs> | null
  }



  /**
   * Model FeedAtividade
   */

  export type AggregateFeedAtividade = {
    _count: FeedAtividadeCountAggregateOutputType | null
    _avg: FeedAtividadeAvgAggregateOutputType | null
    _sum: FeedAtividadeSumAggregateOutputType | null
    _min: FeedAtividadeMinAggregateOutputType | null
    _max: FeedAtividadeMaxAggregateOutputType | null
  }

  export type FeedAtividadeAvgAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type FeedAtividadeSumAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
  }

  export type FeedAtividadeMinAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    tipo: string | null
    descricao: string | null
    criado_em: Date | null
  }

  export type FeedAtividadeMaxAggregateOutputType = {
    id: number | null
    id_idoso: number | null
    id_cuidador: number | null
    tipo: string | null
    descricao: string | null
    criado_em: Date | null
  }

  export type FeedAtividadeCountAggregateOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    tipo: number
    descricao: number
    criado_em: number
    _all: number
  }


  export type FeedAtividadeAvgAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type FeedAtividadeSumAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
  }

  export type FeedAtividadeMinAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    tipo?: true
    descricao?: true
    criado_em?: true
  }

  export type FeedAtividadeMaxAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    tipo?: true
    descricao?: true
    criado_em?: true
  }

  export type FeedAtividadeCountAggregateInputType = {
    id?: true
    id_idoso?: true
    id_cuidador?: true
    tipo?: true
    descricao?: true
    criado_em?: true
    _all?: true
  }

  export type FeedAtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedAtividade to aggregate.
     */
    where?: FeedAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedAtividades to fetch.
     */
    orderBy?: FeedAtividadeOrderByWithRelationInput | FeedAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedAtividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedAtividades
    **/
    _count?: true | FeedAtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedAtividadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedAtividadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedAtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedAtividadeMaxAggregateInputType
  }

  export type GetFeedAtividadeAggregateType<T extends FeedAtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedAtividade[P]>
      : GetScalarType<T[P], AggregateFeedAtividade[P]>
  }




  export type FeedAtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedAtividadeWhereInput
    orderBy?: FeedAtividadeOrderByWithAggregationInput | FeedAtividadeOrderByWithAggregationInput[]
    by: FeedAtividadeScalarFieldEnum[] | FeedAtividadeScalarFieldEnum
    having?: FeedAtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedAtividadeCountAggregateInputType | true
    _avg?: FeedAtividadeAvgAggregateInputType
    _sum?: FeedAtividadeSumAggregateInputType
    _min?: FeedAtividadeMinAggregateInputType
    _max?: FeedAtividadeMaxAggregateInputType
  }

  export type FeedAtividadeGroupByOutputType = {
    id: number
    id_idoso: number
    id_cuidador: number
    tipo: string
    descricao: string
    criado_em: Date
    _count: FeedAtividadeCountAggregateOutputType | null
    _avg: FeedAtividadeAvgAggregateOutputType | null
    _sum: FeedAtividadeSumAggregateOutputType | null
    _min: FeedAtividadeMinAggregateOutputType | null
    _max: FeedAtividadeMaxAggregateOutputType | null
  }

  type GetFeedAtividadeGroupByPayload<T extends FeedAtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedAtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedAtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedAtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], FeedAtividadeGroupByOutputType[P]>
        }
      >
    >


  export type FeedAtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    tipo?: boolean
    descricao?: boolean
    criado_em?: boolean
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedAtividade"]>

  export type FeedAtividadeSelectScalar = {
    id?: boolean
    id_idoso?: boolean
    id_cuidador?: boolean
    tipo?: boolean
    descricao?: boolean
    criado_em?: boolean
  }

  export type FeedAtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idoso?: boolean | IdosoDefaultArgs<ExtArgs>
    cuidador?: boolean | CuidadorDefaultArgs<ExtArgs>
  }


  export type $FeedAtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedAtividade"
    objects: {
      idoso: Prisma.$IdosoPayload<ExtArgs>
      cuidador: Prisma.$CuidadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_idoso: number
      id_cuidador: number
      tipo: string
      descricao: string
      criado_em: Date
    }, ExtArgs["result"]["feedAtividade"]>
    composites: {}
  }


  type FeedAtividadeGetPayload<S extends boolean | null | undefined | FeedAtividadeDefaultArgs> = $Result.GetResult<Prisma.$FeedAtividadePayload, S>

  type FeedAtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedAtividadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedAtividadeCountAggregateInputType | true
    }

  export interface FeedAtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedAtividade'], meta: { name: 'FeedAtividade' } }
    /**
     * Find zero or one FeedAtividade that matches the filter.
     * @param {FeedAtividadeFindUniqueArgs} args - Arguments to find a FeedAtividade
     * @example
     * // Get one FeedAtividade
     * const feedAtividade = await prisma.feedAtividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedAtividadeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeedAtividadeFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FeedAtividade that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedAtividadeFindUniqueOrThrowArgs} args - Arguments to find a FeedAtividade
     * @example
     * // Get one FeedAtividade
     * const feedAtividade = await prisma.feedAtividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedAtividadeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedAtividadeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FeedAtividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeFindFirstArgs} args - Arguments to find a FeedAtividade
     * @example
     * // Get one FeedAtividade
     * const feedAtividade = await prisma.feedAtividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedAtividadeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedAtividadeFindFirstArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FeedAtividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeFindFirstOrThrowArgs} args - Arguments to find a FeedAtividade
     * @example
     * // Get one FeedAtividade
     * const feedAtividade = await prisma.feedAtividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedAtividadeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedAtividadeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FeedAtividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedAtividades
     * const feedAtividades = await prisma.feedAtividade.findMany()
     * 
     * // Get first 10 FeedAtividades
     * const feedAtividades = await prisma.feedAtividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedAtividadeWithIdOnly = await prisma.feedAtividade.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedAtividadeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedAtividadeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FeedAtividade.
     * @param {FeedAtividadeCreateArgs} args - Arguments to create a FeedAtividade.
     * @example
     * // Create one FeedAtividade
     * const FeedAtividade = await prisma.feedAtividade.create({
     *   data: {
     *     // ... data to create a FeedAtividade
     *   }
     * })
     * 
    **/
    create<T extends FeedAtividadeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedAtividadeCreateArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a FeedAtividade.
     * @param {FeedAtividadeDeleteArgs} args - Arguments to delete one FeedAtividade.
     * @example
     * // Delete one FeedAtividade
     * const FeedAtividade = await prisma.feedAtividade.delete({
     *   where: {
     *     // ... filter to delete one FeedAtividade
     *   }
     * })
     * 
    **/
    delete<T extends FeedAtividadeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeedAtividadeDeleteArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FeedAtividade.
     * @param {FeedAtividadeUpdateArgs} args - Arguments to update one FeedAtividade.
     * @example
     * // Update one FeedAtividade
     * const feedAtividade = await prisma.feedAtividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedAtividadeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedAtividadeUpdateArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FeedAtividades.
     * @param {FeedAtividadeDeleteManyArgs} args - Arguments to filter FeedAtividades to delete.
     * @example
     * // Delete a few FeedAtividades
     * const { count } = await prisma.feedAtividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedAtividadeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedAtividadeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedAtividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedAtividades
     * const feedAtividade = await prisma.feedAtividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedAtividadeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeedAtividadeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeedAtividade.
     * @param {FeedAtividadeUpsertArgs} args - Arguments to update or create a FeedAtividade.
     * @example
     * // Update or create a FeedAtividade
     * const feedAtividade = await prisma.feedAtividade.upsert({
     *   create: {
     *     // ... data to create a FeedAtividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedAtividade we want to update
     *   }
     * })
    **/
    upsert<T extends FeedAtividadeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeedAtividadeUpsertArgs<ExtArgs>>
    ): Prisma__FeedAtividadeClient<$Result.GetResult<Prisma.$FeedAtividadePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FeedAtividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeCountArgs} args - Arguments to filter FeedAtividades to count.
     * @example
     * // Count the number of FeedAtividades
     * const count = await prisma.feedAtividade.count({
     *   where: {
     *     // ... the filter for the FeedAtividades we want to count
     *   }
     * })
    **/
    count<T extends FeedAtividadeCountArgs>(
      args?: Subset<T, FeedAtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedAtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedAtividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedAtividadeAggregateArgs>(args: Subset<T, FeedAtividadeAggregateArgs>): Prisma.PrismaPromise<GetFeedAtividadeAggregateType<T>>

    /**
     * Group by FeedAtividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAtividadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedAtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedAtividadeGroupByArgs['orderBy'] }
        : { orderBy?: FeedAtividadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedAtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedAtividade model
   */
  readonly fields: FeedAtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedAtividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedAtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    idoso<T extends IdosoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdosoDefaultArgs<ExtArgs>>): Prisma__IdosoClient<$Result.GetResult<Prisma.$IdosoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cuidador<T extends CuidadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuidadorDefaultArgs<ExtArgs>>): Prisma__CuidadorClient<$Result.GetResult<Prisma.$CuidadorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FeedAtividade model
   */ 
  interface FeedAtividadeFieldRefs {
    readonly id: FieldRef<"FeedAtividade", 'Int'>
    readonly id_idoso: FieldRef<"FeedAtividade", 'Int'>
    readonly id_cuidador: FieldRef<"FeedAtividade", 'Int'>
    readonly tipo: FieldRef<"FeedAtividade", 'String'>
    readonly descricao: FieldRef<"FeedAtividade", 'String'>
    readonly criado_em: FieldRef<"FeedAtividade", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FeedAtividade findUnique
   */
  export type FeedAtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which FeedAtividade to fetch.
     */
    where: FeedAtividadeWhereUniqueInput
  }


  /**
   * FeedAtividade findUniqueOrThrow
   */
  export type FeedAtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which FeedAtividade to fetch.
     */
    where: FeedAtividadeWhereUniqueInput
  }


  /**
   * FeedAtividade findFirst
   */
  export type FeedAtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which FeedAtividade to fetch.
     */
    where?: FeedAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedAtividades to fetch.
     */
    orderBy?: FeedAtividadeOrderByWithRelationInput | FeedAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedAtividades.
     */
    cursor?: FeedAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedAtividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedAtividades.
     */
    distinct?: FeedAtividadeScalarFieldEnum | FeedAtividadeScalarFieldEnum[]
  }


  /**
   * FeedAtividade findFirstOrThrow
   */
  export type FeedAtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which FeedAtividade to fetch.
     */
    where?: FeedAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedAtividades to fetch.
     */
    orderBy?: FeedAtividadeOrderByWithRelationInput | FeedAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedAtividades.
     */
    cursor?: FeedAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedAtividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedAtividades.
     */
    distinct?: FeedAtividadeScalarFieldEnum | FeedAtividadeScalarFieldEnum[]
  }


  /**
   * FeedAtividade findMany
   */
  export type FeedAtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * Filter, which FeedAtividades to fetch.
     */
    where?: FeedAtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedAtividades to fetch.
     */
    orderBy?: FeedAtividadeOrderByWithRelationInput | FeedAtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedAtividades.
     */
    cursor?: FeedAtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedAtividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedAtividades.
     */
    skip?: number
    distinct?: FeedAtividadeScalarFieldEnum | FeedAtividadeScalarFieldEnum[]
  }


  /**
   * FeedAtividade create
   */
  export type FeedAtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedAtividade.
     */
    data: XOR<FeedAtividadeCreateInput, FeedAtividadeUncheckedCreateInput>
  }


  /**
   * FeedAtividade update
   */
  export type FeedAtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedAtividade.
     */
    data: XOR<FeedAtividadeUpdateInput, FeedAtividadeUncheckedUpdateInput>
    /**
     * Choose, which FeedAtividade to update.
     */
    where: FeedAtividadeWhereUniqueInput
  }


  /**
   * FeedAtividade updateMany
   */
  export type FeedAtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedAtividades.
     */
    data: XOR<FeedAtividadeUpdateManyMutationInput, FeedAtividadeUncheckedUpdateManyInput>
    /**
     * Filter which FeedAtividades to update
     */
    where?: FeedAtividadeWhereInput
  }


  /**
   * FeedAtividade upsert
   */
  export type FeedAtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedAtividade to update in case it exists.
     */
    where: FeedAtividadeWhereUniqueInput
    /**
     * In case the FeedAtividade found by the `where` argument doesn't exist, create a new FeedAtividade with this data.
     */
    create: XOR<FeedAtividadeCreateInput, FeedAtividadeUncheckedCreateInput>
    /**
     * In case the FeedAtividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedAtividadeUpdateInput, FeedAtividadeUncheckedUpdateInput>
  }


  /**
   * FeedAtividade delete
   */
  export type FeedAtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
    /**
     * Filter which FeedAtividade to delete.
     */
    where: FeedAtividadeWhereUniqueInput
  }


  /**
   * FeedAtividade deleteMany
   */
  export type FeedAtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedAtividades to delete
     */
    where?: FeedAtividadeWhereInput
  }


  /**
   * FeedAtividade without action
   */
  export type FeedAtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedAtividade
     */
    select?: FeedAtividadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedAtividadeInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IdosoScalarFieldEnum: {
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

  export type IdosoScalarFieldEnum = (typeof IdosoScalarFieldEnum)[keyof typeof IdosoScalarFieldEnum]


  export const DoencaScalarFieldEnum: {
    id: 'id',
    nome_doenca: 'nome_doenca',
    codigo_cid: 'codigo_cid',
    categoria: 'categoria'
  };

  export type DoencaScalarFieldEnum = (typeof DoencaScalarFieldEnum)[keyof typeof DoencaScalarFieldEnum]


  export const IdosoDoencaScalarFieldEnum: {
    id: 'id',
    id_doenca: 'id_doenca',
    id_idoso: 'id_idoso',
    data_diagnostico: 'data_diagnostico',
    observacao: 'observacao'
  };

  export type IdosoDoencaScalarFieldEnum = (typeof IdosoDoencaScalarFieldEnum)[keyof typeof IdosoDoencaScalarFieldEnum]


  export const MedicamentoScalarFieldEnum: {
    id: 'id',
    id_idoso: 'id_idoso',
    nome_medicamento: 'nome_medicamento',
    via_administracao: 'via_administracao',
    frequencia: 'frequencia',
    dosagem: 'dosagem',
    horario: 'horario',
    observacao: 'observacao'
  };

  export type MedicamentoScalarFieldEnum = (typeof MedicamentoScalarFieldEnum)[keyof typeof MedicamentoScalarFieldEnum]


  export const CuidadorScalarFieldEnum: {
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

  export type CuidadorScalarFieldEnum = (typeof CuidadorScalarFieldEnum)[keyof typeof CuidadorScalarFieldEnum]


  export const AcompanhamentoCuidadorScalarFieldEnum: {
    id: 'id',
    id_cuidador: 'id_cuidador',
    humor: 'humor',
    sono: 'sono',
    nivel_energia: 'nivel_energia',
    observacao: 'observacao',
    dia: 'dia'
  };

  export type AcompanhamentoCuidadorScalarFieldEnum = (typeof AcompanhamentoCuidadorScalarFieldEnum)[keyof typeof AcompanhamentoCuidadorScalarFieldEnum]


  export const AlimentacaoScalarFieldEnum: {
    id: 'id',
    id_cuidador: 'id_cuidador',
    id_idoso: 'id_idoso',
    refeicao: 'refeicao',
    horario: 'horario',
    quantidade: 'quantidade',
    observacao: 'observacao'
  };

  export type AlimentacaoScalarFieldEnum = (typeof AlimentacaoScalarFieldEnum)[keyof typeof AlimentacaoScalarFieldEnum]


  export const MediaUploadScalarFieldEnum: {
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

  export type MediaUploadScalarFieldEnum = (typeof MediaUploadScalarFieldEnum)[keyof typeof MediaUploadScalarFieldEnum]


  export const ProntuarioDiarioScalarFieldEnum: {
    id: 'id',
    id_idoso: 'id_idoso',
    id_cuidador: 'id_cuidador',
    data: 'data',
    diurese: 'diurese',
    evacuacao: 'evacuacao',
    hidratacao: 'hidratacao',
    observacao: 'observacao'
  };

  export type ProntuarioDiarioScalarFieldEnum = (typeof ProntuarioDiarioScalarFieldEnum)[keyof typeof ProntuarioDiarioScalarFieldEnum]


  export const RelatorioScalarFieldEnum: {
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

  export type RelatorioScalarFieldEnum = (typeof RelatorioScalarFieldEnum)[keyof typeof RelatorioScalarFieldEnum]


  export const CuidadorIdosoScalarFieldEnum: {
    id: 'id',
    id_idoso: 'id_idoso',
    id_cuidador: 'id_cuidador',
    papel: 'papel',
    criado_em: 'criado_em'
  };

  export type CuidadorIdosoScalarFieldEnum = (typeof CuidadorIdosoScalarFieldEnum)[keyof typeof CuidadorIdosoScalarFieldEnum]


  export const FeedAtividadeScalarFieldEnum: {
    id: 'id',
    id_idoso: 'id_idoso',
    id_cuidador: 'id_cuidador',
    tipo: 'tipo',
    descricao: 'descricao',
    criado_em: 'criado_em'
  };

  export type FeedAtividadeScalarFieldEnum = (typeof FeedAtividadeScalarFieldEnum)[keyof typeof FeedAtividadeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type IdosoWhereInput = {
    AND?: IdosoWhereInput | IdosoWhereInput[]
    OR?: IdosoWhereInput[]
    NOT?: IdosoWhereInput | IdosoWhereInput[]
    id?: IntFilter<"Idoso"> | number
    nome?: StringFilter<"Idoso"> | string
    data_nascimento?: DateTimeNullableFilter<"Idoso"> | Date | string | null
    cpf?: StringFilter<"Idoso"> | string
    sexo?: StringNullableFilter<"Idoso"> | string | null
    peso?: FloatNullableFilter<"Idoso"> | number | null
    condicoes_medicinais?: StringNullableFilter<"Idoso"> | string | null
    criado_em?: DateTimeFilter<"Idoso"> | Date | string
    atualizado_em?: DateTimeFilter<"Idoso"> | Date | string
    doencas?: IdosoDoencaListRelationFilter
    medicamentos?: MedicamentoListRelationFilter
    alimentacoes?: AlimentacaoListRelationFilter
    prontuarios?: ProntuarioDiarioListRelationFilter
    uploads?: MediaUploadListRelationFilter
    relacaoCuidadores?: CuidadorIdosoListRelationFilter
    relatorios?: RelatorioListRelationFilter
    feedAtividades?: FeedAtividadeListRelationFilter
  }

  export type IdosoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    cpf?: SortOrder
    sexo?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    condicoes_medicinais?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    doencas?: IdosoDoencaOrderByRelationAggregateInput
    medicamentos?: MedicamentoOrderByRelationAggregateInput
    alimentacoes?: AlimentacaoOrderByRelationAggregateInput
    prontuarios?: ProntuarioDiarioOrderByRelationAggregateInput
    uploads?: MediaUploadOrderByRelationAggregateInput
    relacaoCuidadores?: CuidadorIdosoOrderByRelationAggregateInput
    relatorios?: RelatorioOrderByRelationAggregateInput
    feedAtividades?: FeedAtividadeOrderByRelationAggregateInput
  }

  export type IdosoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: IdosoWhereInput | IdosoWhereInput[]
    OR?: IdosoWhereInput[]
    NOT?: IdosoWhereInput | IdosoWhereInput[]
    nome?: StringFilter<"Idoso"> | string
    data_nascimento?: DateTimeNullableFilter<"Idoso"> | Date | string | null
    sexo?: StringNullableFilter<"Idoso"> | string | null
    peso?: FloatNullableFilter<"Idoso"> | number | null
    condicoes_medicinais?: StringNullableFilter<"Idoso"> | string | null
    criado_em?: DateTimeFilter<"Idoso"> | Date | string
    atualizado_em?: DateTimeFilter<"Idoso"> | Date | string
    doencas?: IdosoDoencaListRelationFilter
    medicamentos?: MedicamentoListRelationFilter
    alimentacoes?: AlimentacaoListRelationFilter
    prontuarios?: ProntuarioDiarioListRelationFilter
    uploads?: MediaUploadListRelationFilter
    relacaoCuidadores?: CuidadorIdosoListRelationFilter
    relatorios?: RelatorioListRelationFilter
    feedAtividades?: FeedAtividadeListRelationFilter
  }, "id" | "cpf">

  export type IdosoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    cpf?: SortOrder
    sexo?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    condicoes_medicinais?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    _count?: IdosoCountOrderByAggregateInput
    _avg?: IdosoAvgOrderByAggregateInput
    _max?: IdosoMaxOrderByAggregateInput
    _min?: IdosoMinOrderByAggregateInput
    _sum?: IdosoSumOrderByAggregateInput
  }

  export type IdosoScalarWhereWithAggregatesInput = {
    AND?: IdosoScalarWhereWithAggregatesInput | IdosoScalarWhereWithAggregatesInput[]
    OR?: IdosoScalarWhereWithAggregatesInput[]
    NOT?: IdosoScalarWhereWithAggregatesInput | IdosoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Idoso"> | number
    nome?: StringWithAggregatesFilter<"Idoso"> | string
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"Idoso"> | Date | string | null
    cpf?: StringWithAggregatesFilter<"Idoso"> | string
    sexo?: StringNullableWithAggregatesFilter<"Idoso"> | string | null
    peso?: FloatNullableWithAggregatesFilter<"Idoso"> | number | null
    condicoes_medicinais?: StringNullableWithAggregatesFilter<"Idoso"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Idoso"> | Date | string
    atualizado_em?: DateTimeWithAggregatesFilter<"Idoso"> | Date | string
  }

  export type DoencaWhereInput = {
    AND?: DoencaWhereInput | DoencaWhereInput[]
    OR?: DoencaWhereInput[]
    NOT?: DoencaWhereInput | DoencaWhereInput[]
    id?: IntFilter<"Doenca"> | number
    nome_doenca?: StringFilter<"Doenca"> | string
    codigo_cid?: StringNullableFilter<"Doenca"> | string | null
    categoria?: StringNullableFilter<"Doenca"> | string | null
    idosos?: IdosoDoencaListRelationFilter
  }

  export type DoencaOrderByWithRelationInput = {
    id?: SortOrder
    nome_doenca?: SortOrder
    codigo_cid?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    idosos?: IdosoDoencaOrderByRelationAggregateInput
  }

  export type DoencaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoencaWhereInput | DoencaWhereInput[]
    OR?: DoencaWhereInput[]
    NOT?: DoencaWhereInput | DoencaWhereInput[]
    nome_doenca?: StringFilter<"Doenca"> | string
    codigo_cid?: StringNullableFilter<"Doenca"> | string | null
    categoria?: StringNullableFilter<"Doenca"> | string | null
    idosos?: IdosoDoencaListRelationFilter
  }, "id">

  export type DoencaOrderByWithAggregationInput = {
    id?: SortOrder
    nome_doenca?: SortOrder
    codigo_cid?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    _count?: DoencaCountOrderByAggregateInput
    _avg?: DoencaAvgOrderByAggregateInput
    _max?: DoencaMaxOrderByAggregateInput
    _min?: DoencaMinOrderByAggregateInput
    _sum?: DoencaSumOrderByAggregateInput
  }

  export type DoencaScalarWhereWithAggregatesInput = {
    AND?: DoencaScalarWhereWithAggregatesInput | DoencaScalarWhereWithAggregatesInput[]
    OR?: DoencaScalarWhereWithAggregatesInput[]
    NOT?: DoencaScalarWhereWithAggregatesInput | DoencaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doenca"> | number
    nome_doenca?: StringWithAggregatesFilter<"Doenca"> | string
    codigo_cid?: StringNullableWithAggregatesFilter<"Doenca"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Doenca"> | string | null
  }

  export type IdosoDoencaWhereInput = {
    AND?: IdosoDoencaWhereInput | IdosoDoencaWhereInput[]
    OR?: IdosoDoencaWhereInput[]
    NOT?: IdosoDoencaWhereInput | IdosoDoencaWhereInput[]
    id?: IntFilter<"IdosoDoenca"> | number
    id_doenca?: IntFilter<"IdosoDoenca"> | number
    id_idoso?: IntFilter<"IdosoDoenca"> | number
    data_diagnostico?: DateTimeNullableFilter<"IdosoDoenca"> | Date | string | null
    observacao?: StringNullableFilter<"IdosoDoenca"> | string | null
    doenca?: XOR<DoencaRelationFilter, DoencaWhereInput>
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
  }

  export type IdosoDoencaOrderByWithRelationInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
    data_diagnostico?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    doenca?: DoencaOrderByWithRelationInput
    idoso?: IdosoOrderByWithRelationInput
  }

  export type IdosoDoencaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IdosoDoencaWhereInput | IdosoDoencaWhereInput[]
    OR?: IdosoDoencaWhereInput[]
    NOT?: IdosoDoencaWhereInput | IdosoDoencaWhereInput[]
    id_doenca?: IntFilter<"IdosoDoenca"> | number
    id_idoso?: IntFilter<"IdosoDoenca"> | number
    data_diagnostico?: DateTimeNullableFilter<"IdosoDoenca"> | Date | string | null
    observacao?: StringNullableFilter<"IdosoDoenca"> | string | null
    doenca?: XOR<DoencaRelationFilter, DoencaWhereInput>
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
  }, "id">

  export type IdosoDoencaOrderByWithAggregationInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
    data_diagnostico?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: IdosoDoencaCountOrderByAggregateInput
    _avg?: IdosoDoencaAvgOrderByAggregateInput
    _max?: IdosoDoencaMaxOrderByAggregateInput
    _min?: IdosoDoencaMinOrderByAggregateInput
    _sum?: IdosoDoencaSumOrderByAggregateInput
  }

  export type IdosoDoencaScalarWhereWithAggregatesInput = {
    AND?: IdosoDoencaScalarWhereWithAggregatesInput | IdosoDoencaScalarWhereWithAggregatesInput[]
    OR?: IdosoDoencaScalarWhereWithAggregatesInput[]
    NOT?: IdosoDoencaScalarWhereWithAggregatesInput | IdosoDoencaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IdosoDoenca"> | number
    id_doenca?: IntWithAggregatesFilter<"IdosoDoenca"> | number
    id_idoso?: IntWithAggregatesFilter<"IdosoDoenca"> | number
    data_diagnostico?: DateTimeNullableWithAggregatesFilter<"IdosoDoenca"> | Date | string | null
    observacao?: StringNullableWithAggregatesFilter<"IdosoDoenca"> | string | null
  }

  export type MedicamentoWhereInput = {
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    id?: IntFilter<"Medicamento"> | number
    id_idoso?: IntFilter<"Medicamento"> | number
    nome_medicamento?: StringFilter<"Medicamento"> | string
    via_administracao?: StringNullableFilter<"Medicamento"> | string | null
    frequencia?: StringNullableFilter<"Medicamento"> | string | null
    dosagem?: StringNullableFilter<"Medicamento"> | string | null
    horario?: StringNullableFilter<"Medicamento"> | string | null
    observacao?: StringNullableFilter<"Medicamento"> | string | null
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
  }

  export type MedicamentoOrderByWithRelationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    nome_medicamento?: SortOrder
    via_administracao?: SortOrderInput | SortOrder
    frequencia?: SortOrderInput | SortOrder
    dosagem?: SortOrderInput | SortOrder
    horario?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    idoso?: IdosoOrderByWithRelationInput
  }

  export type MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    id_idoso?: IntFilter<"Medicamento"> | number
    nome_medicamento?: StringFilter<"Medicamento"> | string
    via_administracao?: StringNullableFilter<"Medicamento"> | string | null
    frequencia?: StringNullableFilter<"Medicamento"> | string | null
    dosagem?: StringNullableFilter<"Medicamento"> | string | null
    horario?: StringNullableFilter<"Medicamento"> | string | null
    observacao?: StringNullableFilter<"Medicamento"> | string | null
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
  }, "id">

  export type MedicamentoOrderByWithAggregationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    nome_medicamento?: SortOrder
    via_administracao?: SortOrderInput | SortOrder
    frequencia?: SortOrderInput | SortOrder
    dosagem?: SortOrderInput | SortOrder
    horario?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: MedicamentoCountOrderByAggregateInput
    _avg?: MedicamentoAvgOrderByAggregateInput
    _max?: MedicamentoMaxOrderByAggregateInput
    _min?: MedicamentoMinOrderByAggregateInput
    _sum?: MedicamentoSumOrderByAggregateInput
  }

  export type MedicamentoScalarWhereWithAggregatesInput = {
    AND?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    OR?: MedicamentoScalarWhereWithAggregatesInput[]
    NOT?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicamento"> | number
    id_idoso?: IntWithAggregatesFilter<"Medicamento"> | number
    nome_medicamento?: StringWithAggregatesFilter<"Medicamento"> | string
    via_administracao?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    frequencia?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    dosagem?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    horario?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
  }

  export type CuidadorWhereInput = {
    AND?: CuidadorWhereInput | CuidadorWhereInput[]
    OR?: CuidadorWhereInput[]
    NOT?: CuidadorWhereInput | CuidadorWhereInput[]
    id?: IntFilter<"Cuidador"> | number
    nome?: StringFilter<"Cuidador"> | string
    email?: StringFilter<"Cuidador"> | string
    senha_hash?: StringFilter<"Cuidador"> | string
    sexo?: StringNullableFilter<"Cuidador"> | string | null
    cpf?: StringFilter<"Cuidador"> | string
    telefone?: StringNullableFilter<"Cuidador"> | string | null
    turno?: StringNullableFilter<"Cuidador"> | string | null
    criado_em?: DateTimeFilter<"Cuidador"> | Date | string
    atualizado_em?: DateTimeFilter<"Cuidador"> | Date | string
    acompanhamentos?: AcompanhamentoCuidadorListRelationFilter
    alimentacoes?: AlimentacaoListRelationFilter
    prontuarios?: ProntuarioDiarioListRelationFilter
    uploads?: MediaUploadListRelationFilter
    relacaoIdosos?: CuidadorIdosoListRelationFilter
    relatorios?: RelatorioListRelationFilter
    feedAtividades?: FeedAtividadeListRelationFilter
  }

  export type CuidadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    sexo?: SortOrderInput | SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    acompanhamentos?: AcompanhamentoCuidadorOrderByRelationAggregateInput
    alimentacoes?: AlimentacaoOrderByRelationAggregateInput
    prontuarios?: ProntuarioDiarioOrderByRelationAggregateInput
    uploads?: MediaUploadOrderByRelationAggregateInput
    relacaoIdosos?: CuidadorIdosoOrderByRelationAggregateInput
    relatorios?: RelatorioOrderByRelationAggregateInput
    feedAtividades?: FeedAtividadeOrderByRelationAggregateInput
  }

  export type CuidadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: CuidadorWhereInput | CuidadorWhereInput[]
    OR?: CuidadorWhereInput[]
    NOT?: CuidadorWhereInput | CuidadorWhereInput[]
    nome?: StringFilter<"Cuidador"> | string
    senha_hash?: StringFilter<"Cuidador"> | string
    sexo?: StringNullableFilter<"Cuidador"> | string | null
    telefone?: StringNullableFilter<"Cuidador"> | string | null
    turno?: StringNullableFilter<"Cuidador"> | string | null
    criado_em?: DateTimeFilter<"Cuidador"> | Date | string
    atualizado_em?: DateTimeFilter<"Cuidador"> | Date | string
    acompanhamentos?: AcompanhamentoCuidadorListRelationFilter
    alimentacoes?: AlimentacaoListRelationFilter
    prontuarios?: ProntuarioDiarioListRelationFilter
    uploads?: MediaUploadListRelationFilter
    relacaoIdosos?: CuidadorIdosoListRelationFilter
    relatorios?: RelatorioListRelationFilter
    feedAtividades?: FeedAtividadeListRelationFilter
  }, "id" | "email" | "cpf">

  export type CuidadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    sexo?: SortOrderInput | SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    _count?: CuidadorCountOrderByAggregateInput
    _avg?: CuidadorAvgOrderByAggregateInput
    _max?: CuidadorMaxOrderByAggregateInput
    _min?: CuidadorMinOrderByAggregateInput
    _sum?: CuidadorSumOrderByAggregateInput
  }

  export type CuidadorScalarWhereWithAggregatesInput = {
    AND?: CuidadorScalarWhereWithAggregatesInput | CuidadorScalarWhereWithAggregatesInput[]
    OR?: CuidadorScalarWhereWithAggregatesInput[]
    NOT?: CuidadorScalarWhereWithAggregatesInput | CuidadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cuidador"> | number
    nome?: StringWithAggregatesFilter<"Cuidador"> | string
    email?: StringWithAggregatesFilter<"Cuidador"> | string
    senha_hash?: StringWithAggregatesFilter<"Cuidador"> | string
    sexo?: StringNullableWithAggregatesFilter<"Cuidador"> | string | null
    cpf?: StringWithAggregatesFilter<"Cuidador"> | string
    telefone?: StringNullableWithAggregatesFilter<"Cuidador"> | string | null
    turno?: StringNullableWithAggregatesFilter<"Cuidador"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Cuidador"> | Date | string
    atualizado_em?: DateTimeWithAggregatesFilter<"Cuidador"> | Date | string
  }

  export type AcompanhamentoCuidadorWhereInput = {
    AND?: AcompanhamentoCuidadorWhereInput | AcompanhamentoCuidadorWhereInput[]
    OR?: AcompanhamentoCuidadorWhereInput[]
    NOT?: AcompanhamentoCuidadorWhereInput | AcompanhamentoCuidadorWhereInput[]
    id?: IntFilter<"AcompanhamentoCuidador"> | number
    id_cuidador?: IntFilter<"AcompanhamentoCuidador"> | number
    humor?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    sono?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    nivel_energia?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    observacao?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    dia?: DateTimeNullableFilter<"AcompanhamentoCuidador"> | Date | string | null
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }

  export type AcompanhamentoCuidadorOrderByWithRelationInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    humor?: SortOrderInput | SortOrder
    sono?: SortOrderInput | SortOrder
    nivel_energia?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    dia?: SortOrderInput | SortOrder
    cuidador?: CuidadorOrderByWithRelationInput
  }

  export type AcompanhamentoCuidadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcompanhamentoCuidadorWhereInput | AcompanhamentoCuidadorWhereInput[]
    OR?: AcompanhamentoCuidadorWhereInput[]
    NOT?: AcompanhamentoCuidadorWhereInput | AcompanhamentoCuidadorWhereInput[]
    id_cuidador?: IntFilter<"AcompanhamentoCuidador"> | number
    humor?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    sono?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    nivel_energia?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    observacao?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    dia?: DateTimeNullableFilter<"AcompanhamentoCuidador"> | Date | string | null
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }, "id">

  export type AcompanhamentoCuidadorOrderByWithAggregationInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    humor?: SortOrderInput | SortOrder
    sono?: SortOrderInput | SortOrder
    nivel_energia?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    dia?: SortOrderInput | SortOrder
    _count?: AcompanhamentoCuidadorCountOrderByAggregateInput
    _avg?: AcompanhamentoCuidadorAvgOrderByAggregateInput
    _max?: AcompanhamentoCuidadorMaxOrderByAggregateInput
    _min?: AcompanhamentoCuidadorMinOrderByAggregateInput
    _sum?: AcompanhamentoCuidadorSumOrderByAggregateInput
  }

  export type AcompanhamentoCuidadorScalarWhereWithAggregatesInput = {
    AND?: AcompanhamentoCuidadorScalarWhereWithAggregatesInput | AcompanhamentoCuidadorScalarWhereWithAggregatesInput[]
    OR?: AcompanhamentoCuidadorScalarWhereWithAggregatesInput[]
    NOT?: AcompanhamentoCuidadorScalarWhereWithAggregatesInput | AcompanhamentoCuidadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcompanhamentoCuidador"> | number
    id_cuidador?: IntWithAggregatesFilter<"AcompanhamentoCuidador"> | number
    humor?: StringNullableWithAggregatesFilter<"AcompanhamentoCuidador"> | string | null
    sono?: StringNullableWithAggregatesFilter<"AcompanhamentoCuidador"> | string | null
    nivel_energia?: StringNullableWithAggregatesFilter<"AcompanhamentoCuidador"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"AcompanhamentoCuidador"> | string | null
    dia?: DateTimeNullableWithAggregatesFilter<"AcompanhamentoCuidador"> | Date | string | null
  }

  export type AlimentacaoWhereInput = {
    AND?: AlimentacaoWhereInput | AlimentacaoWhereInput[]
    OR?: AlimentacaoWhereInput[]
    NOT?: AlimentacaoWhereInput | AlimentacaoWhereInput[]
    id?: IntFilter<"Alimentacao"> | number
    id_cuidador?: IntFilter<"Alimentacao"> | number
    id_idoso?: IntFilter<"Alimentacao"> | number
    refeicao?: StringFilter<"Alimentacao"> | string
    horario?: StringFilter<"Alimentacao"> | string
    quantidade?: StringFilter<"Alimentacao"> | string
    observacao?: StringNullableFilter<"Alimentacao"> | string | null
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
  }

  export type AlimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
    refeicao?: SortOrder
    horario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrderInput | SortOrder
    cuidador?: CuidadorOrderByWithRelationInput
    idoso?: IdosoOrderByWithRelationInput
  }

  export type AlimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlimentacaoWhereInput | AlimentacaoWhereInput[]
    OR?: AlimentacaoWhereInput[]
    NOT?: AlimentacaoWhereInput | AlimentacaoWhereInput[]
    id_cuidador?: IntFilter<"Alimentacao"> | number
    id_idoso?: IntFilter<"Alimentacao"> | number
    refeicao?: StringFilter<"Alimentacao"> | string
    horario?: StringFilter<"Alimentacao"> | string
    quantidade?: StringFilter<"Alimentacao"> | string
    observacao?: StringNullableFilter<"Alimentacao"> | string | null
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
  }, "id">

  export type AlimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
    refeicao?: SortOrder
    horario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: AlimentacaoCountOrderByAggregateInput
    _avg?: AlimentacaoAvgOrderByAggregateInput
    _max?: AlimentacaoMaxOrderByAggregateInput
    _min?: AlimentacaoMinOrderByAggregateInput
    _sum?: AlimentacaoSumOrderByAggregateInput
  }

  export type AlimentacaoScalarWhereWithAggregatesInput = {
    AND?: AlimentacaoScalarWhereWithAggregatesInput | AlimentacaoScalarWhereWithAggregatesInput[]
    OR?: AlimentacaoScalarWhereWithAggregatesInput[]
    NOT?: AlimentacaoScalarWhereWithAggregatesInput | AlimentacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alimentacao"> | number
    id_cuidador?: IntWithAggregatesFilter<"Alimentacao"> | number
    id_idoso?: IntWithAggregatesFilter<"Alimentacao"> | number
    refeicao?: StringWithAggregatesFilter<"Alimentacao"> | string
    horario?: StringWithAggregatesFilter<"Alimentacao"> | string
    quantidade?: StringWithAggregatesFilter<"Alimentacao"> | string
    observacao?: StringNullableWithAggregatesFilter<"Alimentacao"> | string | null
  }

  export type MediaUploadWhereInput = {
    AND?: MediaUploadWhereInput | MediaUploadWhereInput[]
    OR?: MediaUploadWhereInput[]
    NOT?: MediaUploadWhereInput | MediaUploadWhereInput[]
    id?: IntFilter<"MediaUpload"> | number
    id_cuidador?: IntFilter<"MediaUpload"> | number
    nome_original?: StringFilter<"MediaUpload"> | string
    caminho?: StringFilter<"MediaUpload"> | string
    tipo_mime?: StringFilter<"MediaUpload"> | string
    tamanho_bytes?: IntFilter<"MediaUpload"> | number
    tipo_midia?: StringFilter<"MediaUpload"> | string
    analise?: StringNullableFilter<"MediaUpload"> | string | null
    id_idoso?: IntNullableFilter<"MediaUpload"> | number | null
    criado_em?: DateTimeFilter<"MediaUpload"> | Date | string
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
    idoso?: XOR<IdosoNullableRelationFilter, IdosoWhereInput> | null
  }

  export type MediaUploadOrderByWithRelationInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    nome_original?: SortOrder
    caminho?: SortOrder
    tipo_mime?: SortOrder
    tamanho_bytes?: SortOrder
    tipo_midia?: SortOrder
    analise?: SortOrderInput | SortOrder
    id_idoso?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    cuidador?: CuidadorOrderByWithRelationInput
    idoso?: IdosoOrderByWithRelationInput
  }

  export type MediaUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaUploadWhereInput | MediaUploadWhereInput[]
    OR?: MediaUploadWhereInput[]
    NOT?: MediaUploadWhereInput | MediaUploadWhereInput[]
    id_cuidador?: IntFilter<"MediaUpload"> | number
    nome_original?: StringFilter<"MediaUpload"> | string
    caminho?: StringFilter<"MediaUpload"> | string
    tipo_mime?: StringFilter<"MediaUpload"> | string
    tamanho_bytes?: IntFilter<"MediaUpload"> | number
    tipo_midia?: StringFilter<"MediaUpload"> | string
    analise?: StringNullableFilter<"MediaUpload"> | string | null
    id_idoso?: IntNullableFilter<"MediaUpload"> | number | null
    criado_em?: DateTimeFilter<"MediaUpload"> | Date | string
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
    idoso?: XOR<IdosoNullableRelationFilter, IdosoWhereInput> | null
  }, "id">

  export type MediaUploadOrderByWithAggregationInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    nome_original?: SortOrder
    caminho?: SortOrder
    tipo_mime?: SortOrder
    tamanho_bytes?: SortOrder
    tipo_midia?: SortOrder
    analise?: SortOrderInput | SortOrder
    id_idoso?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    _count?: MediaUploadCountOrderByAggregateInput
    _avg?: MediaUploadAvgOrderByAggregateInput
    _max?: MediaUploadMaxOrderByAggregateInput
    _min?: MediaUploadMinOrderByAggregateInput
    _sum?: MediaUploadSumOrderByAggregateInput
  }

  export type MediaUploadScalarWhereWithAggregatesInput = {
    AND?: MediaUploadScalarWhereWithAggregatesInput | MediaUploadScalarWhereWithAggregatesInput[]
    OR?: MediaUploadScalarWhereWithAggregatesInput[]
    NOT?: MediaUploadScalarWhereWithAggregatesInput | MediaUploadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaUpload"> | number
    id_cuidador?: IntWithAggregatesFilter<"MediaUpload"> | number
    nome_original?: StringWithAggregatesFilter<"MediaUpload"> | string
    caminho?: StringWithAggregatesFilter<"MediaUpload"> | string
    tipo_mime?: StringWithAggregatesFilter<"MediaUpload"> | string
    tamanho_bytes?: IntWithAggregatesFilter<"MediaUpload"> | number
    tipo_midia?: StringWithAggregatesFilter<"MediaUpload"> | string
    analise?: StringNullableWithAggregatesFilter<"MediaUpload"> | string | null
    id_idoso?: IntNullableWithAggregatesFilter<"MediaUpload"> | number | null
    criado_em?: DateTimeWithAggregatesFilter<"MediaUpload"> | Date | string
  }

  export type ProntuarioDiarioWhereInput = {
    AND?: ProntuarioDiarioWhereInput | ProntuarioDiarioWhereInput[]
    OR?: ProntuarioDiarioWhereInput[]
    NOT?: ProntuarioDiarioWhereInput | ProntuarioDiarioWhereInput[]
    id?: IntFilter<"ProntuarioDiario"> | number
    id_idoso?: IntFilter<"ProntuarioDiario"> | number
    id_cuidador?: IntFilter<"ProntuarioDiario"> | number
    data?: DateTimeFilter<"ProntuarioDiario"> | Date | string
    diurese?: StringFilter<"ProntuarioDiario"> | string
    evacuacao?: StringFilter<"ProntuarioDiario"> | string
    hidratacao?: StringFilter<"ProntuarioDiario"> | string
    observacao?: StringNullableFilter<"ProntuarioDiario"> | string | null
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }

  export type ProntuarioDiarioOrderByWithRelationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    data?: SortOrder
    diurese?: SortOrder
    evacuacao?: SortOrder
    hidratacao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    idoso?: IdosoOrderByWithRelationInput
    cuidador?: CuidadorOrderByWithRelationInput
  }

  export type ProntuarioDiarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProntuarioDiarioWhereInput | ProntuarioDiarioWhereInput[]
    OR?: ProntuarioDiarioWhereInput[]
    NOT?: ProntuarioDiarioWhereInput | ProntuarioDiarioWhereInput[]
    id_idoso?: IntFilter<"ProntuarioDiario"> | number
    id_cuidador?: IntFilter<"ProntuarioDiario"> | number
    data?: DateTimeFilter<"ProntuarioDiario"> | Date | string
    diurese?: StringFilter<"ProntuarioDiario"> | string
    evacuacao?: StringFilter<"ProntuarioDiario"> | string
    hidratacao?: StringFilter<"ProntuarioDiario"> | string
    observacao?: StringNullableFilter<"ProntuarioDiario"> | string | null
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }, "id">

  export type ProntuarioDiarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    data?: SortOrder
    diurese?: SortOrder
    evacuacao?: SortOrder
    hidratacao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: ProntuarioDiarioCountOrderByAggregateInput
    _avg?: ProntuarioDiarioAvgOrderByAggregateInput
    _max?: ProntuarioDiarioMaxOrderByAggregateInput
    _min?: ProntuarioDiarioMinOrderByAggregateInput
    _sum?: ProntuarioDiarioSumOrderByAggregateInput
  }

  export type ProntuarioDiarioScalarWhereWithAggregatesInput = {
    AND?: ProntuarioDiarioScalarWhereWithAggregatesInput | ProntuarioDiarioScalarWhereWithAggregatesInput[]
    OR?: ProntuarioDiarioScalarWhereWithAggregatesInput[]
    NOT?: ProntuarioDiarioScalarWhereWithAggregatesInput | ProntuarioDiarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProntuarioDiario"> | number
    id_idoso?: IntWithAggregatesFilter<"ProntuarioDiario"> | number
    id_cuidador?: IntWithAggregatesFilter<"ProntuarioDiario"> | number
    data?: DateTimeWithAggregatesFilter<"ProntuarioDiario"> | Date | string
    diurese?: StringWithAggregatesFilter<"ProntuarioDiario"> | string
    evacuacao?: StringWithAggregatesFilter<"ProntuarioDiario"> | string
    hidratacao?: StringWithAggregatesFilter<"ProntuarioDiario"> | string
    observacao?: StringNullableWithAggregatesFilter<"ProntuarioDiario"> | string | null
  }

  export type RelatorioWhereInput = {
    AND?: RelatorioWhereInput | RelatorioWhereInput[]
    OR?: RelatorioWhereInput[]
    NOT?: RelatorioWhereInput | RelatorioWhereInput[]
    id?: IntFilter<"Relatorio"> | number
    id_idoso?: IntFilter<"Relatorio"> | number
    id_cuidador?: IntFilter<"Relatorio"> | number
    tipo?: StringFilter<"Relatorio"> | string
    data_inicio?: DateTimeFilter<"Relatorio"> | Date | string
    data_fim?: DateTimeFilter<"Relatorio"> | Date | string
    resumo_geral?: StringNullableFilter<"Relatorio"> | string | null
    status_geral?: StringNullableFilter<"Relatorio"> | string | null
    criado_em?: DateTimeFilter<"Relatorio"> | Date | string
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }

  export type RelatorioOrderByWithRelationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    resumo_geral?: SortOrderInput | SortOrder
    status_geral?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    idoso?: IdosoOrderByWithRelationInput
    cuidador?: CuidadorOrderByWithRelationInput
  }

  export type RelatorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelatorioWhereInput | RelatorioWhereInput[]
    OR?: RelatorioWhereInput[]
    NOT?: RelatorioWhereInput | RelatorioWhereInput[]
    id_idoso?: IntFilter<"Relatorio"> | number
    id_cuidador?: IntFilter<"Relatorio"> | number
    tipo?: StringFilter<"Relatorio"> | string
    data_inicio?: DateTimeFilter<"Relatorio"> | Date | string
    data_fim?: DateTimeFilter<"Relatorio"> | Date | string
    resumo_geral?: StringNullableFilter<"Relatorio"> | string | null
    status_geral?: StringNullableFilter<"Relatorio"> | string | null
    criado_em?: DateTimeFilter<"Relatorio"> | Date | string
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }, "id">

  export type RelatorioOrderByWithAggregationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    resumo_geral?: SortOrderInput | SortOrder
    status_geral?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    _count?: RelatorioCountOrderByAggregateInput
    _avg?: RelatorioAvgOrderByAggregateInput
    _max?: RelatorioMaxOrderByAggregateInput
    _min?: RelatorioMinOrderByAggregateInput
    _sum?: RelatorioSumOrderByAggregateInput
  }

  export type RelatorioScalarWhereWithAggregatesInput = {
    AND?: RelatorioScalarWhereWithAggregatesInput | RelatorioScalarWhereWithAggregatesInput[]
    OR?: RelatorioScalarWhereWithAggregatesInput[]
    NOT?: RelatorioScalarWhereWithAggregatesInput | RelatorioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relatorio"> | number
    id_idoso?: IntWithAggregatesFilter<"Relatorio"> | number
    id_cuidador?: IntWithAggregatesFilter<"Relatorio"> | number
    tipo?: StringWithAggregatesFilter<"Relatorio"> | string
    data_inicio?: DateTimeWithAggregatesFilter<"Relatorio"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"Relatorio"> | Date | string
    resumo_geral?: StringNullableWithAggregatesFilter<"Relatorio"> | string | null
    status_geral?: StringNullableWithAggregatesFilter<"Relatorio"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Relatorio"> | Date | string
  }

  export type CuidadorIdosoWhereInput = {
    AND?: CuidadorIdosoWhereInput | CuidadorIdosoWhereInput[]
    OR?: CuidadorIdosoWhereInput[]
    NOT?: CuidadorIdosoWhereInput | CuidadorIdosoWhereInput[]
    id?: IntFilter<"CuidadorIdoso"> | number
    id_idoso?: IntFilter<"CuidadorIdoso"> | number
    id_cuidador?: IntFilter<"CuidadorIdoso"> | number
    papel?: StringFilter<"CuidadorIdoso"> | string
    criado_em?: DateTimeFilter<"CuidadorIdoso"> | Date | string
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }

  export type CuidadorIdosoOrderByWithRelationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    idoso?: IdosoOrderByWithRelationInput
    cuidador?: CuidadorOrderByWithRelationInput
  }

  export type CuidadorIdosoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_idoso_id_cuidador?: CuidadorIdosoId_idosoId_cuidadorCompoundUniqueInput
    AND?: CuidadorIdosoWhereInput | CuidadorIdosoWhereInput[]
    OR?: CuidadorIdosoWhereInput[]
    NOT?: CuidadorIdosoWhereInput | CuidadorIdosoWhereInput[]
    id_idoso?: IntFilter<"CuidadorIdoso"> | number
    id_cuidador?: IntFilter<"CuidadorIdoso"> | number
    papel?: StringFilter<"CuidadorIdoso"> | string
    criado_em?: DateTimeFilter<"CuidadorIdoso"> | Date | string
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }, "id" | "id_idoso_id_cuidador">

  export type CuidadorIdosoOrderByWithAggregationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    _count?: CuidadorIdosoCountOrderByAggregateInput
    _avg?: CuidadorIdosoAvgOrderByAggregateInput
    _max?: CuidadorIdosoMaxOrderByAggregateInput
    _min?: CuidadorIdosoMinOrderByAggregateInput
    _sum?: CuidadorIdosoSumOrderByAggregateInput
  }

  export type CuidadorIdosoScalarWhereWithAggregatesInput = {
    AND?: CuidadorIdosoScalarWhereWithAggregatesInput | CuidadorIdosoScalarWhereWithAggregatesInput[]
    OR?: CuidadorIdosoScalarWhereWithAggregatesInput[]
    NOT?: CuidadorIdosoScalarWhereWithAggregatesInput | CuidadorIdosoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CuidadorIdoso"> | number
    id_idoso?: IntWithAggregatesFilter<"CuidadorIdoso"> | number
    id_cuidador?: IntWithAggregatesFilter<"CuidadorIdoso"> | number
    papel?: StringWithAggregatesFilter<"CuidadorIdoso"> | string
    criado_em?: DateTimeWithAggregatesFilter<"CuidadorIdoso"> | Date | string
  }

  export type FeedAtividadeWhereInput = {
    AND?: FeedAtividadeWhereInput | FeedAtividadeWhereInput[]
    OR?: FeedAtividadeWhereInput[]
    NOT?: FeedAtividadeWhereInput | FeedAtividadeWhereInput[]
    id?: IntFilter<"FeedAtividade"> | number
    id_idoso?: IntFilter<"FeedAtividade"> | number
    id_cuidador?: IntFilter<"FeedAtividade"> | number
    tipo?: StringFilter<"FeedAtividade"> | string
    descricao?: StringFilter<"FeedAtividade"> | string
    criado_em?: DateTimeFilter<"FeedAtividade"> | Date | string
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }

  export type FeedAtividadeOrderByWithRelationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    criado_em?: SortOrder
    idoso?: IdosoOrderByWithRelationInput
    cuidador?: CuidadorOrderByWithRelationInput
  }

  export type FeedAtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedAtividadeWhereInput | FeedAtividadeWhereInput[]
    OR?: FeedAtividadeWhereInput[]
    NOT?: FeedAtividadeWhereInput | FeedAtividadeWhereInput[]
    id_idoso?: IntFilter<"FeedAtividade"> | number
    id_cuidador?: IntFilter<"FeedAtividade"> | number
    tipo?: StringFilter<"FeedAtividade"> | string
    descricao?: StringFilter<"FeedAtividade"> | string
    criado_em?: DateTimeFilter<"FeedAtividade"> | Date | string
    idoso?: XOR<IdosoRelationFilter, IdosoWhereInput>
    cuidador?: XOR<CuidadorRelationFilter, CuidadorWhereInput>
  }, "id">

  export type FeedAtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    criado_em?: SortOrder
    _count?: FeedAtividadeCountOrderByAggregateInput
    _avg?: FeedAtividadeAvgOrderByAggregateInput
    _max?: FeedAtividadeMaxOrderByAggregateInput
    _min?: FeedAtividadeMinOrderByAggregateInput
    _sum?: FeedAtividadeSumOrderByAggregateInput
  }

  export type FeedAtividadeScalarWhereWithAggregatesInput = {
    AND?: FeedAtividadeScalarWhereWithAggregatesInput | FeedAtividadeScalarWhereWithAggregatesInput[]
    OR?: FeedAtividadeScalarWhereWithAggregatesInput[]
    NOT?: FeedAtividadeScalarWhereWithAggregatesInput | FeedAtividadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeedAtividade"> | number
    id_idoso?: IntWithAggregatesFilter<"FeedAtividade"> | number
    id_cuidador?: IntWithAggregatesFilter<"FeedAtividade"> | number
    tipo?: StringWithAggregatesFilter<"FeedAtividade"> | string
    descricao?: StringWithAggregatesFilter<"FeedAtividade"> | string
    criado_em?: DateTimeWithAggregatesFilter<"FeedAtividade"> | Date | string
  }

  export type IdosoCreateInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdosoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoencaCreateInput = {
    nome_doenca: string
    codigo_cid?: string | null
    categoria?: string | null
    idosos?: IdosoDoencaCreateNestedManyWithoutDoencaInput
  }

  export type DoencaUncheckedCreateInput = {
    id?: number
    nome_doenca: string
    codigo_cid?: string | null
    categoria?: string | null
    idosos?: IdosoDoencaUncheckedCreateNestedManyWithoutDoencaInput
  }

  export type DoencaUpdateInput = {
    nome_doenca?: StringFieldUpdateOperationsInput | string
    codigo_cid?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idosos?: IdosoDoencaUpdateManyWithoutDoencaNestedInput
  }

  export type DoencaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_doenca?: StringFieldUpdateOperationsInput | string
    codigo_cid?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idosos?: IdosoDoencaUncheckedUpdateManyWithoutDoencaNestedInput
  }

  export type DoencaUpdateManyMutationInput = {
    nome_doenca?: StringFieldUpdateOperationsInput | string
    codigo_cid?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoencaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_doenca?: StringFieldUpdateOperationsInput | string
    codigo_cid?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdosoDoencaCreateInput = {
    data_diagnostico?: Date | string | null
    observacao?: string | null
    doenca: DoencaCreateNestedOneWithoutIdososInput
    idoso: IdosoCreateNestedOneWithoutDoencasInput
  }

  export type IdosoDoencaUncheckedCreateInput = {
    id?: number
    id_doenca: number
    id_idoso: number
    data_diagnostico?: Date | string | null
    observacao?: string | null
  }

  export type IdosoDoencaUpdateInput = {
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    doenca?: DoencaUpdateOneRequiredWithoutIdososNestedInput
    idoso?: IdosoUpdateOneRequiredWithoutDoencasNestedInput
  }

  export type IdosoDoencaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_doenca?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdosoDoencaUpdateManyMutationInput = {
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdosoDoencaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_doenca?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicamentoCreateInput = {
    nome_medicamento: string
    via_administracao?: string | null
    frequencia?: string | null
    dosagem?: string | null
    horario?: string | null
    observacao?: string | null
    idoso: IdosoCreateNestedOneWithoutMedicamentosInput
  }

  export type MedicamentoUncheckedCreateInput = {
    id?: number
    id_idoso: number
    nome_medicamento: string
    via_administracao?: string | null
    frequencia?: string | null
    dosagem?: string | null
    horario?: string | null
    observacao?: string | null
  }

  export type MedicamentoUpdateInput = {
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    idoso?: IdosoUpdateOneRequiredWithoutMedicamentosNestedInput
  }

  export type MedicamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicamentoUpdateManyMutationInput = {
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CuidadorCreateInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcompanhamentoCuidadorCreateInput = {
    humor?: string | null
    sono?: string | null
    nivel_energia?: string | null
    observacao?: string | null
    dia?: Date | string | null
    cuidador: CuidadorCreateNestedOneWithoutAcompanhamentosInput
  }

  export type AcompanhamentoCuidadorUncheckedCreateInput = {
    id?: number
    id_cuidador: number
    humor?: string | null
    sono?: string | null
    nivel_energia?: string | null
    observacao?: string | null
    dia?: Date | string | null
  }

  export type AcompanhamentoCuidadorUpdateInput = {
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuidador?: CuidadorUpdateOneRequiredWithoutAcompanhamentosNestedInput
  }

  export type AcompanhamentoCuidadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcompanhamentoCuidadorUpdateManyMutationInput = {
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcompanhamentoCuidadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlimentacaoCreateInput = {
    refeicao: string
    horario: string
    quantidade: string
    observacao?: string | null
    cuidador: CuidadorCreateNestedOneWithoutAlimentacoesInput
    idoso: IdosoCreateNestedOneWithoutAlimentacoesInput
  }

  export type AlimentacaoUncheckedCreateInput = {
    id?: number
    id_cuidador: number
    id_idoso: number
    refeicao: string
    horario: string
    quantidade: string
    observacao?: string | null
  }

  export type AlimentacaoUpdateInput = {
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    cuidador?: CuidadorUpdateOneRequiredWithoutAlimentacoesNestedInput
    idoso?: IdosoUpdateOneRequiredWithoutAlimentacoesNestedInput
  }

  export type AlimentacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentacaoUpdateManyMutationInput = {
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUploadCreateInput = {
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise?: string | null
    criado_em?: Date | string
    cuidador: CuidadorCreateNestedOneWithoutUploadsInput
    idoso?: IdosoCreateNestedOneWithoutUploadsInput
  }

  export type MediaUploadUncheckedCreateInput = {
    id?: number
    id_cuidador: number
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise?: string | null
    id_idoso?: number | null
    criado_em?: Date | string
  }

  export type MediaUploadUpdateInput = {
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cuidador?: CuidadorUpdateOneRequiredWithoutUploadsNestedInput
    idoso?: IdosoUpdateOneWithoutUploadsNestedInput
  }

  export type MediaUploadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    id_idoso?: NullableIntFieldUpdateOperationsInput | number | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUpdateManyMutationInput = {
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    id_idoso?: NullableIntFieldUpdateOperationsInput | number | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProntuarioDiarioCreateInput = {
    data?: Date | string
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao?: string | null
    idoso: IdosoCreateNestedOneWithoutProntuariosInput
    cuidador: CuidadorCreateNestedOneWithoutProntuariosInput
  }

  export type ProntuarioDiarioUncheckedCreateInput = {
    id?: number
    id_idoso: number
    id_cuidador: number
    data?: Date | string
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao?: string | null
  }

  export type ProntuarioDiarioUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    idoso?: IdosoUpdateOneRequiredWithoutProntuariosNestedInput
    cuidador?: CuidadorUpdateOneRequiredWithoutProntuariosNestedInput
  }

  export type ProntuarioDiarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProntuarioDiarioUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProntuarioDiarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelatorioCreateInput = {
    tipo: string
    data_inicio: Date | string
    data_fim: Date | string
    resumo_geral?: string | null
    status_geral?: string | null
    criado_em?: Date | string
    idoso: IdosoCreateNestedOneWithoutRelatoriosInput
    cuidador: CuidadorCreateNestedOneWithoutRelatoriosInput
  }

  export type RelatorioUncheckedCreateInput = {
    id?: number
    id_idoso: number
    id_cuidador: number
    tipo: string
    data_inicio: Date | string
    data_fim: Date | string
    resumo_geral?: string | null
    status_geral?: string | null
    criado_em?: Date | string
  }

  export type RelatorioUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneRequiredWithoutRelatoriosNestedInput
    cuidador?: CuidadorUpdateOneRequiredWithoutRelatoriosNestedInput
  }

  export type RelatorioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoCreateInput = {
    papel?: string
    criado_em?: Date | string
    idoso: IdosoCreateNestedOneWithoutRelacaoCuidadoresInput
    cuidador: CuidadorCreateNestedOneWithoutRelacaoIdososInput
  }

  export type CuidadorIdosoUncheckedCreateInput = {
    id?: number
    id_idoso: number
    id_cuidador: number
    papel?: string
    criado_em?: Date | string
  }

  export type CuidadorIdosoUpdateInput = {
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneRequiredWithoutRelacaoCuidadoresNestedInput
    cuidador?: CuidadorUpdateOneRequiredWithoutRelacaoIdososNestedInput
  }

  export type CuidadorIdosoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoUpdateManyMutationInput = {
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeCreateInput = {
    tipo: string
    descricao: string
    criado_em?: Date | string
    idoso: IdosoCreateNestedOneWithoutFeedAtividadesInput
    cuidador: CuidadorCreateNestedOneWithoutFeedAtividadesInput
  }

  export type FeedAtividadeUncheckedCreateInput = {
    id?: number
    id_idoso: number
    id_cuidador: number
    tipo: string
    descricao: string
    criado_em?: Date | string
  }

  export type FeedAtividadeUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneRequiredWithoutFeedAtividadesNestedInput
    cuidador?: CuidadorUpdateOneRequiredWithoutFeedAtividadesNestedInput
  }

  export type FeedAtividadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IdosoDoencaListRelationFilter = {
    every?: IdosoDoencaWhereInput
    some?: IdosoDoencaWhereInput
    none?: IdosoDoencaWhereInput
  }

  export type MedicamentoListRelationFilter = {
    every?: MedicamentoWhereInput
    some?: MedicamentoWhereInput
    none?: MedicamentoWhereInput
  }

  export type AlimentacaoListRelationFilter = {
    every?: AlimentacaoWhereInput
    some?: AlimentacaoWhereInput
    none?: AlimentacaoWhereInput
  }

  export type ProntuarioDiarioListRelationFilter = {
    every?: ProntuarioDiarioWhereInput
    some?: ProntuarioDiarioWhereInput
    none?: ProntuarioDiarioWhereInput
  }

  export type MediaUploadListRelationFilter = {
    every?: MediaUploadWhereInput
    some?: MediaUploadWhereInput
    none?: MediaUploadWhereInput
  }

  export type CuidadorIdosoListRelationFilter = {
    every?: CuidadorIdosoWhereInput
    some?: CuidadorIdosoWhereInput
    none?: CuidadorIdosoWhereInput
  }

  export type RelatorioListRelationFilter = {
    every?: RelatorioWhereInput
    some?: RelatorioWhereInput
    none?: RelatorioWhereInput
  }

  export type FeedAtividadeListRelationFilter = {
    every?: FeedAtividadeWhereInput
    some?: FeedAtividadeWhereInput
    none?: FeedAtividadeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IdosoDoencaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProntuarioDiarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuidadorIdosoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedAtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdosoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    peso?: SortOrder
    condicoes_medicinais?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type IdosoAvgOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
  }

  export type IdosoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    peso?: SortOrder
    condicoes_medicinais?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type IdosoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    cpf?: SortOrder
    sexo?: SortOrder
    peso?: SortOrder
    condicoes_medicinais?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type IdosoSumOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DoencaCountOrderByAggregateInput = {
    id?: SortOrder
    nome_doenca?: SortOrder
    codigo_cid?: SortOrder
    categoria?: SortOrder
  }

  export type DoencaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoencaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_doenca?: SortOrder
    codigo_cid?: SortOrder
    categoria?: SortOrder
  }

  export type DoencaMinOrderByAggregateInput = {
    id?: SortOrder
    nome_doenca?: SortOrder
    codigo_cid?: SortOrder
    categoria?: SortOrder
  }

  export type DoencaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoencaRelationFilter = {
    is?: DoencaWhereInput
    isNot?: DoencaWhereInput
  }

  export type IdosoRelationFilter = {
    is?: IdosoWhereInput
    isNot?: IdosoWhereInput
  }

  export type IdosoDoencaCountOrderByAggregateInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
    data_diagnostico?: SortOrder
    observacao?: SortOrder
  }

  export type IdosoDoencaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
  }

  export type IdosoDoencaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
    data_diagnostico?: SortOrder
    observacao?: SortOrder
  }

  export type IdosoDoencaMinOrderByAggregateInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
    data_diagnostico?: SortOrder
    observacao?: SortOrder
  }

  export type IdosoDoencaSumOrderByAggregateInput = {
    id?: SortOrder
    id_doenca?: SortOrder
    id_idoso?: SortOrder
  }

  export type MedicamentoCountOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    nome_medicamento?: SortOrder
    via_administracao?: SortOrder
    frequencia?: SortOrder
    dosagem?: SortOrder
    horario?: SortOrder
    observacao?: SortOrder
  }

  export type MedicamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
  }

  export type MedicamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    nome_medicamento?: SortOrder
    via_administracao?: SortOrder
    frequencia?: SortOrder
    dosagem?: SortOrder
    horario?: SortOrder
    observacao?: SortOrder
  }

  export type MedicamentoMinOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    nome_medicamento?: SortOrder
    via_administracao?: SortOrder
    frequencia?: SortOrder
    dosagem?: SortOrder
    horario?: SortOrder
    observacao?: SortOrder
  }

  export type MedicamentoSumOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
  }

  export type AcompanhamentoCuidadorListRelationFilter = {
    every?: AcompanhamentoCuidadorWhereInput
    some?: AcompanhamentoCuidadorWhereInput
    none?: AcompanhamentoCuidadorWhereInput
  }

  export type AcompanhamentoCuidadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuidadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    sexo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    turno?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type CuidadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuidadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    sexo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    turno?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type CuidadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    sexo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    turno?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type CuidadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuidadorRelationFilter = {
    is?: CuidadorWhereInput
    isNot?: CuidadorWhereInput
  }

  export type AcompanhamentoCuidadorCountOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    humor?: SortOrder
    sono?: SortOrder
    nivel_energia?: SortOrder
    observacao?: SortOrder
    dia?: SortOrder
  }

  export type AcompanhamentoCuidadorAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
  }

  export type AcompanhamentoCuidadorMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    humor?: SortOrder
    sono?: SortOrder
    nivel_energia?: SortOrder
    observacao?: SortOrder
    dia?: SortOrder
  }

  export type AcompanhamentoCuidadorMinOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    humor?: SortOrder
    sono?: SortOrder
    nivel_energia?: SortOrder
    observacao?: SortOrder
    dia?: SortOrder
  }

  export type AcompanhamentoCuidadorSumOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
  }

  export type AlimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
    refeicao?: SortOrder
    horario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type AlimentacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
  }

  export type AlimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
    refeicao?: SortOrder
    horario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type AlimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
    refeicao?: SortOrder
    horario?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
  }

  export type AlimentacaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    id_idoso?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IdosoNullableRelationFilter = {
    is?: IdosoWhereInput | null
    isNot?: IdosoWhereInput | null
  }

  export type MediaUploadCountOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    nome_original?: SortOrder
    caminho?: SortOrder
    tipo_mime?: SortOrder
    tamanho_bytes?: SortOrder
    tipo_midia?: SortOrder
    analise?: SortOrder
    id_idoso?: SortOrder
    criado_em?: SortOrder
  }

  export type MediaUploadAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    tamanho_bytes?: SortOrder
    id_idoso?: SortOrder
  }

  export type MediaUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    nome_original?: SortOrder
    caminho?: SortOrder
    tipo_mime?: SortOrder
    tamanho_bytes?: SortOrder
    tipo_midia?: SortOrder
    analise?: SortOrder
    id_idoso?: SortOrder
    criado_em?: SortOrder
  }

  export type MediaUploadMinOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    nome_original?: SortOrder
    caminho?: SortOrder
    tipo_mime?: SortOrder
    tamanho_bytes?: SortOrder
    tipo_midia?: SortOrder
    analise?: SortOrder
    id_idoso?: SortOrder
    criado_em?: SortOrder
  }

  export type MediaUploadSumOrderByAggregateInput = {
    id?: SortOrder
    id_cuidador?: SortOrder
    tamanho_bytes?: SortOrder
    id_idoso?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProntuarioDiarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    data?: SortOrder
    diurese?: SortOrder
    evacuacao?: SortOrder
    hidratacao?: SortOrder
    observacao?: SortOrder
  }

  export type ProntuarioDiarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type ProntuarioDiarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    data?: SortOrder
    diurese?: SortOrder
    evacuacao?: SortOrder
    hidratacao?: SortOrder
    observacao?: SortOrder
  }

  export type ProntuarioDiarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    data?: SortOrder
    diurese?: SortOrder
    evacuacao?: SortOrder
    hidratacao?: SortOrder
    observacao?: SortOrder
  }

  export type ProntuarioDiarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type RelatorioCountOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    resumo_geral?: SortOrder
    status_geral?: SortOrder
    criado_em?: SortOrder
  }

  export type RelatorioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type RelatorioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    resumo_geral?: SortOrder
    status_geral?: SortOrder
    criado_em?: SortOrder
  }

  export type RelatorioMinOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    resumo_geral?: SortOrder
    status_geral?: SortOrder
    criado_em?: SortOrder
  }

  export type RelatorioSumOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type CuidadorIdosoId_idosoId_cuidadorCompoundUniqueInput = {
    id_idoso: number
    id_cuidador: number
  }

  export type CuidadorIdosoCountOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
  }

  export type CuidadorIdosoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type CuidadorIdosoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
  }

  export type CuidadorIdosoMinOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
  }

  export type CuidadorIdosoSumOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type FeedAtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    criado_em?: SortOrder
  }

  export type FeedAtividadeAvgOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type FeedAtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    criado_em?: SortOrder
  }

  export type FeedAtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    criado_em?: SortOrder
  }

  export type FeedAtividadeSumOrderByAggregateInput = {
    id?: SortOrder
    id_idoso?: SortOrder
    id_cuidador?: SortOrder
  }

  export type IdosoDoencaCreateNestedManyWithoutIdosoInput = {
    create?: XOR<IdosoDoencaCreateWithoutIdosoInput, IdosoDoencaUncheckedCreateWithoutIdosoInput> | IdosoDoencaCreateWithoutIdosoInput[] | IdosoDoencaUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutIdosoInput | IdosoDoencaCreateOrConnectWithoutIdosoInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
  }

  export type MedicamentoCreateNestedManyWithoutIdosoInput = {
    create?: XOR<MedicamentoCreateWithoutIdosoInput, MedicamentoUncheckedCreateWithoutIdosoInput> | MedicamentoCreateWithoutIdosoInput[] | MedicamentoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutIdosoInput | MedicamentoCreateOrConnectWithoutIdosoInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
  }

  export type AlimentacaoCreateNestedManyWithoutIdosoInput = {
    create?: XOR<AlimentacaoCreateWithoutIdosoInput, AlimentacaoUncheckedCreateWithoutIdosoInput> | AlimentacaoCreateWithoutIdosoInput[] | AlimentacaoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutIdosoInput | AlimentacaoCreateOrConnectWithoutIdosoInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
  }

  export type ProntuarioDiarioCreateNestedManyWithoutIdosoInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutIdosoInput, ProntuarioDiarioUncheckedCreateWithoutIdosoInput> | ProntuarioDiarioCreateWithoutIdosoInput[] | ProntuarioDiarioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutIdosoInput | ProntuarioDiarioCreateOrConnectWithoutIdosoInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
  }

  export type MediaUploadCreateNestedManyWithoutIdosoInput = {
    create?: XOR<MediaUploadCreateWithoutIdosoInput, MediaUploadUncheckedCreateWithoutIdosoInput> | MediaUploadCreateWithoutIdosoInput[] | MediaUploadUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutIdosoInput | MediaUploadCreateOrConnectWithoutIdosoInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
  }

  export type CuidadorIdosoCreateNestedManyWithoutIdosoInput = {
    create?: XOR<CuidadorIdosoCreateWithoutIdosoInput, CuidadorIdosoUncheckedCreateWithoutIdosoInput> | CuidadorIdosoCreateWithoutIdosoInput[] | CuidadorIdosoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutIdosoInput | CuidadorIdosoCreateOrConnectWithoutIdosoInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
  }

  export type RelatorioCreateNestedManyWithoutIdosoInput = {
    create?: XOR<RelatorioCreateWithoutIdosoInput, RelatorioUncheckedCreateWithoutIdosoInput> | RelatorioCreateWithoutIdosoInput[] | RelatorioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutIdosoInput | RelatorioCreateOrConnectWithoutIdosoInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type FeedAtividadeCreateNestedManyWithoutIdosoInput = {
    create?: XOR<FeedAtividadeCreateWithoutIdosoInput, FeedAtividadeUncheckedCreateWithoutIdosoInput> | FeedAtividadeCreateWithoutIdosoInput[] | FeedAtividadeUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutIdosoInput | FeedAtividadeCreateOrConnectWithoutIdosoInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
  }

  export type IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<IdosoDoencaCreateWithoutIdosoInput, IdosoDoencaUncheckedCreateWithoutIdosoInput> | IdosoDoencaCreateWithoutIdosoInput[] | IdosoDoencaUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutIdosoInput | IdosoDoencaCreateOrConnectWithoutIdosoInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
  }

  export type MedicamentoUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<MedicamentoCreateWithoutIdosoInput, MedicamentoUncheckedCreateWithoutIdosoInput> | MedicamentoCreateWithoutIdosoInput[] | MedicamentoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutIdosoInput | MedicamentoCreateOrConnectWithoutIdosoInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
  }

  export type AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<AlimentacaoCreateWithoutIdosoInput, AlimentacaoUncheckedCreateWithoutIdosoInput> | AlimentacaoCreateWithoutIdosoInput[] | AlimentacaoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutIdosoInput | AlimentacaoCreateOrConnectWithoutIdosoInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
  }

  export type ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutIdosoInput, ProntuarioDiarioUncheckedCreateWithoutIdosoInput> | ProntuarioDiarioCreateWithoutIdosoInput[] | ProntuarioDiarioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutIdosoInput | ProntuarioDiarioCreateOrConnectWithoutIdosoInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
  }

  export type MediaUploadUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<MediaUploadCreateWithoutIdosoInput, MediaUploadUncheckedCreateWithoutIdosoInput> | MediaUploadCreateWithoutIdosoInput[] | MediaUploadUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutIdosoInput | MediaUploadCreateOrConnectWithoutIdosoInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
  }

  export type CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<CuidadorIdosoCreateWithoutIdosoInput, CuidadorIdosoUncheckedCreateWithoutIdosoInput> | CuidadorIdosoCreateWithoutIdosoInput[] | CuidadorIdosoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutIdosoInput | CuidadorIdosoCreateOrConnectWithoutIdosoInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
  }

  export type RelatorioUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<RelatorioCreateWithoutIdosoInput, RelatorioUncheckedCreateWithoutIdosoInput> | RelatorioCreateWithoutIdosoInput[] | RelatorioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutIdosoInput | RelatorioCreateOrConnectWithoutIdosoInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput = {
    create?: XOR<FeedAtividadeCreateWithoutIdosoInput, FeedAtividadeUncheckedCreateWithoutIdosoInput> | FeedAtividadeCreateWithoutIdosoInput[] | FeedAtividadeUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutIdosoInput | FeedAtividadeCreateOrConnectWithoutIdosoInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IdosoDoencaUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<IdosoDoencaCreateWithoutIdosoInput, IdosoDoencaUncheckedCreateWithoutIdosoInput> | IdosoDoencaCreateWithoutIdosoInput[] | IdosoDoencaUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutIdosoInput | IdosoDoencaCreateOrConnectWithoutIdosoInput[]
    upsert?: IdosoDoencaUpsertWithWhereUniqueWithoutIdosoInput | IdosoDoencaUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    disconnect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    delete?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    update?: IdosoDoencaUpdateWithWhereUniqueWithoutIdosoInput | IdosoDoencaUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: IdosoDoencaUpdateManyWithWhereWithoutIdosoInput | IdosoDoencaUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: IdosoDoencaScalarWhereInput | IdosoDoencaScalarWhereInput[]
  }

  export type MedicamentoUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<MedicamentoCreateWithoutIdosoInput, MedicamentoUncheckedCreateWithoutIdosoInput> | MedicamentoCreateWithoutIdosoInput[] | MedicamentoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutIdosoInput | MedicamentoCreateOrConnectWithoutIdosoInput[]
    upsert?: MedicamentoUpsertWithWhereUniqueWithoutIdosoInput | MedicamentoUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    disconnect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    delete?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    update?: MedicamentoUpdateWithWhereUniqueWithoutIdosoInput | MedicamentoUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: MedicamentoUpdateManyWithWhereWithoutIdosoInput | MedicamentoUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
  }

  export type AlimentacaoUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<AlimentacaoCreateWithoutIdosoInput, AlimentacaoUncheckedCreateWithoutIdosoInput> | AlimentacaoCreateWithoutIdosoInput[] | AlimentacaoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutIdosoInput | AlimentacaoCreateOrConnectWithoutIdosoInput[]
    upsert?: AlimentacaoUpsertWithWhereUniqueWithoutIdosoInput | AlimentacaoUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    disconnect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    delete?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    update?: AlimentacaoUpdateWithWhereUniqueWithoutIdosoInput | AlimentacaoUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: AlimentacaoUpdateManyWithWhereWithoutIdosoInput | AlimentacaoUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: AlimentacaoScalarWhereInput | AlimentacaoScalarWhereInput[]
  }

  export type ProntuarioDiarioUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutIdosoInput, ProntuarioDiarioUncheckedCreateWithoutIdosoInput> | ProntuarioDiarioCreateWithoutIdosoInput[] | ProntuarioDiarioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutIdosoInput | ProntuarioDiarioCreateOrConnectWithoutIdosoInput[]
    upsert?: ProntuarioDiarioUpsertWithWhereUniqueWithoutIdosoInput | ProntuarioDiarioUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    disconnect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    delete?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    update?: ProntuarioDiarioUpdateWithWhereUniqueWithoutIdosoInput | ProntuarioDiarioUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: ProntuarioDiarioUpdateManyWithWhereWithoutIdosoInput | ProntuarioDiarioUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: ProntuarioDiarioScalarWhereInput | ProntuarioDiarioScalarWhereInput[]
  }

  export type MediaUploadUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<MediaUploadCreateWithoutIdosoInput, MediaUploadUncheckedCreateWithoutIdosoInput> | MediaUploadCreateWithoutIdosoInput[] | MediaUploadUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutIdosoInput | MediaUploadCreateOrConnectWithoutIdosoInput[]
    upsert?: MediaUploadUpsertWithWhereUniqueWithoutIdosoInput | MediaUploadUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    disconnect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    delete?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    update?: MediaUploadUpdateWithWhereUniqueWithoutIdosoInput | MediaUploadUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: MediaUploadUpdateManyWithWhereWithoutIdosoInput | MediaUploadUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
  }

  export type CuidadorIdosoUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<CuidadorIdosoCreateWithoutIdosoInput, CuidadorIdosoUncheckedCreateWithoutIdosoInput> | CuidadorIdosoCreateWithoutIdosoInput[] | CuidadorIdosoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutIdosoInput | CuidadorIdosoCreateOrConnectWithoutIdosoInput[]
    upsert?: CuidadorIdosoUpsertWithWhereUniqueWithoutIdosoInput | CuidadorIdosoUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    disconnect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    delete?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    update?: CuidadorIdosoUpdateWithWhereUniqueWithoutIdosoInput | CuidadorIdosoUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: CuidadorIdosoUpdateManyWithWhereWithoutIdosoInput | CuidadorIdosoUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: CuidadorIdosoScalarWhereInput | CuidadorIdosoScalarWhereInput[]
  }

  export type RelatorioUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<RelatorioCreateWithoutIdosoInput, RelatorioUncheckedCreateWithoutIdosoInput> | RelatorioCreateWithoutIdosoInput[] | RelatorioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutIdosoInput | RelatorioCreateOrConnectWithoutIdosoInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutIdosoInput | RelatorioUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutIdosoInput | RelatorioUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutIdosoInput | RelatorioUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type FeedAtividadeUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<FeedAtividadeCreateWithoutIdosoInput, FeedAtividadeUncheckedCreateWithoutIdosoInput> | FeedAtividadeCreateWithoutIdosoInput[] | FeedAtividadeUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutIdosoInput | FeedAtividadeCreateOrConnectWithoutIdosoInput[]
    upsert?: FeedAtividadeUpsertWithWhereUniqueWithoutIdosoInput | FeedAtividadeUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    disconnect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    delete?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    update?: FeedAtividadeUpdateWithWhereUniqueWithoutIdosoInput | FeedAtividadeUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: FeedAtividadeUpdateManyWithWhereWithoutIdosoInput | FeedAtividadeUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: FeedAtividadeScalarWhereInput | FeedAtividadeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<IdosoDoencaCreateWithoutIdosoInput, IdosoDoencaUncheckedCreateWithoutIdosoInput> | IdosoDoencaCreateWithoutIdosoInput[] | IdosoDoencaUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutIdosoInput | IdosoDoencaCreateOrConnectWithoutIdosoInput[]
    upsert?: IdosoDoencaUpsertWithWhereUniqueWithoutIdosoInput | IdosoDoencaUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    disconnect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    delete?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    update?: IdosoDoencaUpdateWithWhereUniqueWithoutIdosoInput | IdosoDoencaUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: IdosoDoencaUpdateManyWithWhereWithoutIdosoInput | IdosoDoencaUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: IdosoDoencaScalarWhereInput | IdosoDoencaScalarWhereInput[]
  }

  export type MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<MedicamentoCreateWithoutIdosoInput, MedicamentoUncheckedCreateWithoutIdosoInput> | MedicamentoCreateWithoutIdosoInput[] | MedicamentoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutIdosoInput | MedicamentoCreateOrConnectWithoutIdosoInput[]
    upsert?: MedicamentoUpsertWithWhereUniqueWithoutIdosoInput | MedicamentoUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    disconnect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    delete?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    update?: MedicamentoUpdateWithWhereUniqueWithoutIdosoInput | MedicamentoUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: MedicamentoUpdateManyWithWhereWithoutIdosoInput | MedicamentoUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
  }

  export type AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<AlimentacaoCreateWithoutIdosoInput, AlimentacaoUncheckedCreateWithoutIdosoInput> | AlimentacaoCreateWithoutIdosoInput[] | AlimentacaoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutIdosoInput | AlimentacaoCreateOrConnectWithoutIdosoInput[]
    upsert?: AlimentacaoUpsertWithWhereUniqueWithoutIdosoInput | AlimentacaoUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    disconnect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    delete?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    update?: AlimentacaoUpdateWithWhereUniqueWithoutIdosoInput | AlimentacaoUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: AlimentacaoUpdateManyWithWhereWithoutIdosoInput | AlimentacaoUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: AlimentacaoScalarWhereInput | AlimentacaoScalarWhereInput[]
  }

  export type ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutIdosoInput, ProntuarioDiarioUncheckedCreateWithoutIdosoInput> | ProntuarioDiarioCreateWithoutIdosoInput[] | ProntuarioDiarioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutIdosoInput | ProntuarioDiarioCreateOrConnectWithoutIdosoInput[]
    upsert?: ProntuarioDiarioUpsertWithWhereUniqueWithoutIdosoInput | ProntuarioDiarioUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    disconnect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    delete?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    update?: ProntuarioDiarioUpdateWithWhereUniqueWithoutIdosoInput | ProntuarioDiarioUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: ProntuarioDiarioUpdateManyWithWhereWithoutIdosoInput | ProntuarioDiarioUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: ProntuarioDiarioScalarWhereInput | ProntuarioDiarioScalarWhereInput[]
  }

  export type MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<MediaUploadCreateWithoutIdosoInput, MediaUploadUncheckedCreateWithoutIdosoInput> | MediaUploadCreateWithoutIdosoInput[] | MediaUploadUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutIdosoInput | MediaUploadCreateOrConnectWithoutIdosoInput[]
    upsert?: MediaUploadUpsertWithWhereUniqueWithoutIdosoInput | MediaUploadUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    disconnect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    delete?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    update?: MediaUploadUpdateWithWhereUniqueWithoutIdosoInput | MediaUploadUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: MediaUploadUpdateManyWithWhereWithoutIdosoInput | MediaUploadUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
  }

  export type CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<CuidadorIdosoCreateWithoutIdosoInput, CuidadorIdosoUncheckedCreateWithoutIdosoInput> | CuidadorIdosoCreateWithoutIdosoInput[] | CuidadorIdosoUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutIdosoInput | CuidadorIdosoCreateOrConnectWithoutIdosoInput[]
    upsert?: CuidadorIdosoUpsertWithWhereUniqueWithoutIdosoInput | CuidadorIdosoUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    disconnect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    delete?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    update?: CuidadorIdosoUpdateWithWhereUniqueWithoutIdosoInput | CuidadorIdosoUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: CuidadorIdosoUpdateManyWithWhereWithoutIdosoInput | CuidadorIdosoUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: CuidadorIdosoScalarWhereInput | CuidadorIdosoScalarWhereInput[]
  }

  export type RelatorioUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<RelatorioCreateWithoutIdosoInput, RelatorioUncheckedCreateWithoutIdosoInput> | RelatorioCreateWithoutIdosoInput[] | RelatorioUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutIdosoInput | RelatorioCreateOrConnectWithoutIdosoInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutIdosoInput | RelatorioUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutIdosoInput | RelatorioUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutIdosoInput | RelatorioUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput = {
    create?: XOR<FeedAtividadeCreateWithoutIdosoInput, FeedAtividadeUncheckedCreateWithoutIdosoInput> | FeedAtividadeCreateWithoutIdosoInput[] | FeedAtividadeUncheckedCreateWithoutIdosoInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutIdosoInput | FeedAtividadeCreateOrConnectWithoutIdosoInput[]
    upsert?: FeedAtividadeUpsertWithWhereUniqueWithoutIdosoInput | FeedAtividadeUpsertWithWhereUniqueWithoutIdosoInput[]
    set?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    disconnect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    delete?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    update?: FeedAtividadeUpdateWithWhereUniqueWithoutIdosoInput | FeedAtividadeUpdateWithWhereUniqueWithoutIdosoInput[]
    updateMany?: FeedAtividadeUpdateManyWithWhereWithoutIdosoInput | FeedAtividadeUpdateManyWithWhereWithoutIdosoInput[]
    deleteMany?: FeedAtividadeScalarWhereInput | FeedAtividadeScalarWhereInput[]
  }

  export type IdosoDoencaCreateNestedManyWithoutDoencaInput = {
    create?: XOR<IdosoDoencaCreateWithoutDoencaInput, IdosoDoencaUncheckedCreateWithoutDoencaInput> | IdosoDoencaCreateWithoutDoencaInput[] | IdosoDoencaUncheckedCreateWithoutDoencaInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutDoencaInput | IdosoDoencaCreateOrConnectWithoutDoencaInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
  }

  export type IdosoDoencaUncheckedCreateNestedManyWithoutDoencaInput = {
    create?: XOR<IdosoDoencaCreateWithoutDoencaInput, IdosoDoencaUncheckedCreateWithoutDoencaInput> | IdosoDoencaCreateWithoutDoencaInput[] | IdosoDoencaUncheckedCreateWithoutDoencaInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutDoencaInput | IdosoDoencaCreateOrConnectWithoutDoencaInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
  }

  export type IdosoDoencaUpdateManyWithoutDoencaNestedInput = {
    create?: XOR<IdosoDoencaCreateWithoutDoencaInput, IdosoDoencaUncheckedCreateWithoutDoencaInput> | IdosoDoencaCreateWithoutDoencaInput[] | IdosoDoencaUncheckedCreateWithoutDoencaInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutDoencaInput | IdosoDoencaCreateOrConnectWithoutDoencaInput[]
    upsert?: IdosoDoencaUpsertWithWhereUniqueWithoutDoencaInput | IdosoDoencaUpsertWithWhereUniqueWithoutDoencaInput[]
    set?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    disconnect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    delete?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    update?: IdosoDoencaUpdateWithWhereUniqueWithoutDoencaInput | IdosoDoencaUpdateWithWhereUniqueWithoutDoencaInput[]
    updateMany?: IdosoDoencaUpdateManyWithWhereWithoutDoencaInput | IdosoDoencaUpdateManyWithWhereWithoutDoencaInput[]
    deleteMany?: IdosoDoencaScalarWhereInput | IdosoDoencaScalarWhereInput[]
  }

  export type IdosoDoencaUncheckedUpdateManyWithoutDoencaNestedInput = {
    create?: XOR<IdosoDoencaCreateWithoutDoencaInput, IdosoDoencaUncheckedCreateWithoutDoencaInput> | IdosoDoencaCreateWithoutDoencaInput[] | IdosoDoencaUncheckedCreateWithoutDoencaInput[]
    connectOrCreate?: IdosoDoencaCreateOrConnectWithoutDoencaInput | IdosoDoencaCreateOrConnectWithoutDoencaInput[]
    upsert?: IdosoDoencaUpsertWithWhereUniqueWithoutDoencaInput | IdosoDoencaUpsertWithWhereUniqueWithoutDoencaInput[]
    set?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    disconnect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    delete?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    connect?: IdosoDoencaWhereUniqueInput | IdosoDoencaWhereUniqueInput[]
    update?: IdosoDoencaUpdateWithWhereUniqueWithoutDoencaInput | IdosoDoencaUpdateWithWhereUniqueWithoutDoencaInput[]
    updateMany?: IdosoDoencaUpdateManyWithWhereWithoutDoencaInput | IdosoDoencaUpdateManyWithWhereWithoutDoencaInput[]
    deleteMany?: IdosoDoencaScalarWhereInput | IdosoDoencaScalarWhereInput[]
  }

  export type DoencaCreateNestedOneWithoutIdososInput = {
    create?: XOR<DoencaCreateWithoutIdososInput, DoencaUncheckedCreateWithoutIdososInput>
    connectOrCreate?: DoencaCreateOrConnectWithoutIdososInput
    connect?: DoencaWhereUniqueInput
  }

  export type IdosoCreateNestedOneWithoutDoencasInput = {
    create?: XOR<IdosoCreateWithoutDoencasInput, IdosoUncheckedCreateWithoutDoencasInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutDoencasInput
    connect?: IdosoWhereUniqueInput
  }

  export type DoencaUpdateOneRequiredWithoutIdososNestedInput = {
    create?: XOR<DoencaCreateWithoutIdososInput, DoencaUncheckedCreateWithoutIdososInput>
    connectOrCreate?: DoencaCreateOrConnectWithoutIdososInput
    upsert?: DoencaUpsertWithoutIdososInput
    connect?: DoencaWhereUniqueInput
    update?: XOR<XOR<DoencaUpdateToOneWithWhereWithoutIdososInput, DoencaUpdateWithoutIdososInput>, DoencaUncheckedUpdateWithoutIdososInput>
  }

  export type IdosoUpdateOneRequiredWithoutDoencasNestedInput = {
    create?: XOR<IdosoCreateWithoutDoencasInput, IdosoUncheckedCreateWithoutDoencasInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutDoencasInput
    upsert?: IdosoUpsertWithoutDoencasInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutDoencasInput, IdosoUpdateWithoutDoencasInput>, IdosoUncheckedUpdateWithoutDoencasInput>
  }

  export type IdosoCreateNestedOneWithoutMedicamentosInput = {
    create?: XOR<IdosoCreateWithoutMedicamentosInput, IdosoUncheckedCreateWithoutMedicamentosInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutMedicamentosInput
    connect?: IdosoWhereUniqueInput
  }

  export type IdosoUpdateOneRequiredWithoutMedicamentosNestedInput = {
    create?: XOR<IdosoCreateWithoutMedicamentosInput, IdosoUncheckedCreateWithoutMedicamentosInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutMedicamentosInput
    upsert?: IdosoUpsertWithoutMedicamentosInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutMedicamentosInput, IdosoUpdateWithoutMedicamentosInput>, IdosoUncheckedUpdateWithoutMedicamentosInput>
  }

  export type AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<AcompanhamentoCuidadorCreateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput> | AcompanhamentoCuidadorCreateWithoutCuidadorInput[] | AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput | AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput[]
    connect?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
  }

  export type AlimentacaoCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<AlimentacaoCreateWithoutCuidadorInput, AlimentacaoUncheckedCreateWithoutCuidadorInput> | AlimentacaoCreateWithoutCuidadorInput[] | AlimentacaoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutCuidadorInput | AlimentacaoCreateOrConnectWithoutCuidadorInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
  }

  export type ProntuarioDiarioCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutCuidadorInput, ProntuarioDiarioUncheckedCreateWithoutCuidadorInput> | ProntuarioDiarioCreateWithoutCuidadorInput[] | ProntuarioDiarioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutCuidadorInput | ProntuarioDiarioCreateOrConnectWithoutCuidadorInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
  }

  export type MediaUploadCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<MediaUploadCreateWithoutCuidadorInput, MediaUploadUncheckedCreateWithoutCuidadorInput> | MediaUploadCreateWithoutCuidadorInput[] | MediaUploadUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutCuidadorInput | MediaUploadCreateOrConnectWithoutCuidadorInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
  }

  export type CuidadorIdosoCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<CuidadorIdosoCreateWithoutCuidadorInput, CuidadorIdosoUncheckedCreateWithoutCuidadorInput> | CuidadorIdosoCreateWithoutCuidadorInput[] | CuidadorIdosoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutCuidadorInput | CuidadorIdosoCreateOrConnectWithoutCuidadorInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
  }

  export type RelatorioCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<RelatorioCreateWithoutCuidadorInput, RelatorioUncheckedCreateWithoutCuidadorInput> | RelatorioCreateWithoutCuidadorInput[] | RelatorioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutCuidadorInput | RelatorioCreateOrConnectWithoutCuidadorInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type FeedAtividadeCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<FeedAtividadeCreateWithoutCuidadorInput, FeedAtividadeUncheckedCreateWithoutCuidadorInput> | FeedAtividadeCreateWithoutCuidadorInput[] | FeedAtividadeUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutCuidadorInput | FeedAtividadeCreateOrConnectWithoutCuidadorInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
  }

  export type AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<AcompanhamentoCuidadorCreateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput> | AcompanhamentoCuidadorCreateWithoutCuidadorInput[] | AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput | AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput[]
    connect?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
  }

  export type AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<AlimentacaoCreateWithoutCuidadorInput, AlimentacaoUncheckedCreateWithoutCuidadorInput> | AlimentacaoCreateWithoutCuidadorInput[] | AlimentacaoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutCuidadorInput | AlimentacaoCreateOrConnectWithoutCuidadorInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
  }

  export type ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutCuidadorInput, ProntuarioDiarioUncheckedCreateWithoutCuidadorInput> | ProntuarioDiarioCreateWithoutCuidadorInput[] | ProntuarioDiarioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutCuidadorInput | ProntuarioDiarioCreateOrConnectWithoutCuidadorInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
  }

  export type MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<MediaUploadCreateWithoutCuidadorInput, MediaUploadUncheckedCreateWithoutCuidadorInput> | MediaUploadCreateWithoutCuidadorInput[] | MediaUploadUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutCuidadorInput | MediaUploadCreateOrConnectWithoutCuidadorInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
  }

  export type CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<CuidadorIdosoCreateWithoutCuidadorInput, CuidadorIdosoUncheckedCreateWithoutCuidadorInput> | CuidadorIdosoCreateWithoutCuidadorInput[] | CuidadorIdosoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutCuidadorInput | CuidadorIdosoCreateOrConnectWithoutCuidadorInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
  }

  export type RelatorioUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<RelatorioCreateWithoutCuidadorInput, RelatorioUncheckedCreateWithoutCuidadorInput> | RelatorioCreateWithoutCuidadorInput[] | RelatorioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutCuidadorInput | RelatorioCreateOrConnectWithoutCuidadorInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput = {
    create?: XOR<FeedAtividadeCreateWithoutCuidadorInput, FeedAtividadeUncheckedCreateWithoutCuidadorInput> | FeedAtividadeCreateWithoutCuidadorInput[] | FeedAtividadeUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutCuidadorInput | FeedAtividadeCreateOrConnectWithoutCuidadorInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
  }

  export type AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<AcompanhamentoCuidadorCreateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput> | AcompanhamentoCuidadorCreateWithoutCuidadorInput[] | AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput | AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput[]
    upsert?: AcompanhamentoCuidadorUpsertWithWhereUniqueWithoutCuidadorInput | AcompanhamentoCuidadorUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    disconnect?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    delete?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    connect?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    update?: AcompanhamentoCuidadorUpdateWithWhereUniqueWithoutCuidadorInput | AcompanhamentoCuidadorUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: AcompanhamentoCuidadorUpdateManyWithWhereWithoutCuidadorInput | AcompanhamentoCuidadorUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: AcompanhamentoCuidadorScalarWhereInput | AcompanhamentoCuidadorScalarWhereInput[]
  }

  export type AlimentacaoUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<AlimentacaoCreateWithoutCuidadorInput, AlimentacaoUncheckedCreateWithoutCuidadorInput> | AlimentacaoCreateWithoutCuidadorInput[] | AlimentacaoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutCuidadorInput | AlimentacaoCreateOrConnectWithoutCuidadorInput[]
    upsert?: AlimentacaoUpsertWithWhereUniqueWithoutCuidadorInput | AlimentacaoUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    disconnect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    delete?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    update?: AlimentacaoUpdateWithWhereUniqueWithoutCuidadorInput | AlimentacaoUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: AlimentacaoUpdateManyWithWhereWithoutCuidadorInput | AlimentacaoUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: AlimentacaoScalarWhereInput | AlimentacaoScalarWhereInput[]
  }

  export type ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutCuidadorInput, ProntuarioDiarioUncheckedCreateWithoutCuidadorInput> | ProntuarioDiarioCreateWithoutCuidadorInput[] | ProntuarioDiarioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutCuidadorInput | ProntuarioDiarioCreateOrConnectWithoutCuidadorInput[]
    upsert?: ProntuarioDiarioUpsertWithWhereUniqueWithoutCuidadorInput | ProntuarioDiarioUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    disconnect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    delete?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    update?: ProntuarioDiarioUpdateWithWhereUniqueWithoutCuidadorInput | ProntuarioDiarioUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: ProntuarioDiarioUpdateManyWithWhereWithoutCuidadorInput | ProntuarioDiarioUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: ProntuarioDiarioScalarWhereInput | ProntuarioDiarioScalarWhereInput[]
  }

  export type MediaUploadUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<MediaUploadCreateWithoutCuidadorInput, MediaUploadUncheckedCreateWithoutCuidadorInput> | MediaUploadCreateWithoutCuidadorInput[] | MediaUploadUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutCuidadorInput | MediaUploadCreateOrConnectWithoutCuidadorInput[]
    upsert?: MediaUploadUpsertWithWhereUniqueWithoutCuidadorInput | MediaUploadUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    disconnect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    delete?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    update?: MediaUploadUpdateWithWhereUniqueWithoutCuidadorInput | MediaUploadUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: MediaUploadUpdateManyWithWhereWithoutCuidadorInput | MediaUploadUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
  }

  export type CuidadorIdosoUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<CuidadorIdosoCreateWithoutCuidadorInput, CuidadorIdosoUncheckedCreateWithoutCuidadorInput> | CuidadorIdosoCreateWithoutCuidadorInput[] | CuidadorIdosoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutCuidadorInput | CuidadorIdosoCreateOrConnectWithoutCuidadorInput[]
    upsert?: CuidadorIdosoUpsertWithWhereUniqueWithoutCuidadorInput | CuidadorIdosoUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    disconnect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    delete?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    update?: CuidadorIdosoUpdateWithWhereUniqueWithoutCuidadorInput | CuidadorIdosoUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: CuidadorIdosoUpdateManyWithWhereWithoutCuidadorInput | CuidadorIdosoUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: CuidadorIdosoScalarWhereInput | CuidadorIdosoScalarWhereInput[]
  }

  export type RelatorioUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<RelatorioCreateWithoutCuidadorInput, RelatorioUncheckedCreateWithoutCuidadorInput> | RelatorioCreateWithoutCuidadorInput[] | RelatorioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutCuidadorInput | RelatorioCreateOrConnectWithoutCuidadorInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutCuidadorInput | RelatorioUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutCuidadorInput | RelatorioUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutCuidadorInput | RelatorioUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type FeedAtividadeUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<FeedAtividadeCreateWithoutCuidadorInput, FeedAtividadeUncheckedCreateWithoutCuidadorInput> | FeedAtividadeCreateWithoutCuidadorInput[] | FeedAtividadeUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutCuidadorInput | FeedAtividadeCreateOrConnectWithoutCuidadorInput[]
    upsert?: FeedAtividadeUpsertWithWhereUniqueWithoutCuidadorInput | FeedAtividadeUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    disconnect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    delete?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    update?: FeedAtividadeUpdateWithWhereUniqueWithoutCuidadorInput | FeedAtividadeUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: FeedAtividadeUpdateManyWithWhereWithoutCuidadorInput | FeedAtividadeUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: FeedAtividadeScalarWhereInput | FeedAtividadeScalarWhereInput[]
  }

  export type AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<AcompanhamentoCuidadorCreateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput> | AcompanhamentoCuidadorCreateWithoutCuidadorInput[] | AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput | AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput[]
    upsert?: AcompanhamentoCuidadorUpsertWithWhereUniqueWithoutCuidadorInput | AcompanhamentoCuidadorUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    disconnect?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    delete?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    connect?: AcompanhamentoCuidadorWhereUniqueInput | AcompanhamentoCuidadorWhereUniqueInput[]
    update?: AcompanhamentoCuidadorUpdateWithWhereUniqueWithoutCuidadorInput | AcompanhamentoCuidadorUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: AcompanhamentoCuidadorUpdateManyWithWhereWithoutCuidadorInput | AcompanhamentoCuidadorUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: AcompanhamentoCuidadorScalarWhereInput | AcompanhamentoCuidadorScalarWhereInput[]
  }

  export type AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<AlimentacaoCreateWithoutCuidadorInput, AlimentacaoUncheckedCreateWithoutCuidadorInput> | AlimentacaoCreateWithoutCuidadorInput[] | AlimentacaoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: AlimentacaoCreateOrConnectWithoutCuidadorInput | AlimentacaoCreateOrConnectWithoutCuidadorInput[]
    upsert?: AlimentacaoUpsertWithWhereUniqueWithoutCuidadorInput | AlimentacaoUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    disconnect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    delete?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    connect?: AlimentacaoWhereUniqueInput | AlimentacaoWhereUniqueInput[]
    update?: AlimentacaoUpdateWithWhereUniqueWithoutCuidadorInput | AlimentacaoUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: AlimentacaoUpdateManyWithWhereWithoutCuidadorInput | AlimentacaoUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: AlimentacaoScalarWhereInput | AlimentacaoScalarWhereInput[]
  }

  export type ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<ProntuarioDiarioCreateWithoutCuidadorInput, ProntuarioDiarioUncheckedCreateWithoutCuidadorInput> | ProntuarioDiarioCreateWithoutCuidadorInput[] | ProntuarioDiarioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: ProntuarioDiarioCreateOrConnectWithoutCuidadorInput | ProntuarioDiarioCreateOrConnectWithoutCuidadorInput[]
    upsert?: ProntuarioDiarioUpsertWithWhereUniqueWithoutCuidadorInput | ProntuarioDiarioUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    disconnect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    delete?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    connect?: ProntuarioDiarioWhereUniqueInput | ProntuarioDiarioWhereUniqueInput[]
    update?: ProntuarioDiarioUpdateWithWhereUniqueWithoutCuidadorInput | ProntuarioDiarioUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: ProntuarioDiarioUpdateManyWithWhereWithoutCuidadorInput | ProntuarioDiarioUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: ProntuarioDiarioScalarWhereInput | ProntuarioDiarioScalarWhereInput[]
  }

  export type MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<MediaUploadCreateWithoutCuidadorInput, MediaUploadUncheckedCreateWithoutCuidadorInput> | MediaUploadCreateWithoutCuidadorInput[] | MediaUploadUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutCuidadorInput | MediaUploadCreateOrConnectWithoutCuidadorInput[]
    upsert?: MediaUploadUpsertWithWhereUniqueWithoutCuidadorInput | MediaUploadUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    disconnect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    delete?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    update?: MediaUploadUpdateWithWhereUniqueWithoutCuidadorInput | MediaUploadUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: MediaUploadUpdateManyWithWhereWithoutCuidadorInput | MediaUploadUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
  }

  export type CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<CuidadorIdosoCreateWithoutCuidadorInput, CuidadorIdosoUncheckedCreateWithoutCuidadorInput> | CuidadorIdosoCreateWithoutCuidadorInput[] | CuidadorIdosoUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: CuidadorIdosoCreateOrConnectWithoutCuidadorInput | CuidadorIdosoCreateOrConnectWithoutCuidadorInput[]
    upsert?: CuidadorIdosoUpsertWithWhereUniqueWithoutCuidadorInput | CuidadorIdosoUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    disconnect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    delete?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    connect?: CuidadorIdosoWhereUniqueInput | CuidadorIdosoWhereUniqueInput[]
    update?: CuidadorIdosoUpdateWithWhereUniqueWithoutCuidadorInput | CuidadorIdosoUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: CuidadorIdosoUpdateManyWithWhereWithoutCuidadorInput | CuidadorIdosoUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: CuidadorIdosoScalarWhereInput | CuidadorIdosoScalarWhereInput[]
  }

  export type RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<RelatorioCreateWithoutCuidadorInput, RelatorioUncheckedCreateWithoutCuidadorInput> | RelatorioCreateWithoutCuidadorInput[] | RelatorioUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutCuidadorInput | RelatorioCreateOrConnectWithoutCuidadorInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutCuidadorInput | RelatorioUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutCuidadorInput | RelatorioUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutCuidadorInput | RelatorioUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput = {
    create?: XOR<FeedAtividadeCreateWithoutCuidadorInput, FeedAtividadeUncheckedCreateWithoutCuidadorInput> | FeedAtividadeCreateWithoutCuidadorInput[] | FeedAtividadeUncheckedCreateWithoutCuidadorInput[]
    connectOrCreate?: FeedAtividadeCreateOrConnectWithoutCuidadorInput | FeedAtividadeCreateOrConnectWithoutCuidadorInput[]
    upsert?: FeedAtividadeUpsertWithWhereUniqueWithoutCuidadorInput | FeedAtividadeUpsertWithWhereUniqueWithoutCuidadorInput[]
    set?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    disconnect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    delete?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    connect?: FeedAtividadeWhereUniqueInput | FeedAtividadeWhereUniqueInput[]
    update?: FeedAtividadeUpdateWithWhereUniqueWithoutCuidadorInput | FeedAtividadeUpdateWithWhereUniqueWithoutCuidadorInput[]
    updateMany?: FeedAtividadeUpdateManyWithWhereWithoutCuidadorInput | FeedAtividadeUpdateManyWithWhereWithoutCuidadorInput[]
    deleteMany?: FeedAtividadeScalarWhereInput | FeedAtividadeScalarWhereInput[]
  }

  export type CuidadorCreateNestedOneWithoutAcompanhamentosInput = {
    create?: XOR<CuidadorCreateWithoutAcompanhamentosInput, CuidadorUncheckedCreateWithoutAcompanhamentosInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutAcompanhamentosInput
    connect?: CuidadorWhereUniqueInput
  }

  export type CuidadorUpdateOneRequiredWithoutAcompanhamentosNestedInput = {
    create?: XOR<CuidadorCreateWithoutAcompanhamentosInput, CuidadorUncheckedCreateWithoutAcompanhamentosInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutAcompanhamentosInput
    upsert?: CuidadorUpsertWithoutAcompanhamentosInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutAcompanhamentosInput, CuidadorUpdateWithoutAcompanhamentosInput>, CuidadorUncheckedUpdateWithoutAcompanhamentosInput>
  }

  export type CuidadorCreateNestedOneWithoutAlimentacoesInput = {
    create?: XOR<CuidadorCreateWithoutAlimentacoesInput, CuidadorUncheckedCreateWithoutAlimentacoesInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutAlimentacoesInput
    connect?: CuidadorWhereUniqueInput
  }

  export type IdosoCreateNestedOneWithoutAlimentacoesInput = {
    create?: XOR<IdosoCreateWithoutAlimentacoesInput, IdosoUncheckedCreateWithoutAlimentacoesInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutAlimentacoesInput
    connect?: IdosoWhereUniqueInput
  }

  export type CuidadorUpdateOneRequiredWithoutAlimentacoesNestedInput = {
    create?: XOR<CuidadorCreateWithoutAlimentacoesInput, CuidadorUncheckedCreateWithoutAlimentacoesInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutAlimentacoesInput
    upsert?: CuidadorUpsertWithoutAlimentacoesInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutAlimentacoesInput, CuidadorUpdateWithoutAlimentacoesInput>, CuidadorUncheckedUpdateWithoutAlimentacoesInput>
  }

  export type IdosoUpdateOneRequiredWithoutAlimentacoesNestedInput = {
    create?: XOR<IdosoCreateWithoutAlimentacoesInput, IdosoUncheckedCreateWithoutAlimentacoesInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutAlimentacoesInput
    upsert?: IdosoUpsertWithoutAlimentacoesInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutAlimentacoesInput, IdosoUpdateWithoutAlimentacoesInput>, IdosoUncheckedUpdateWithoutAlimentacoesInput>
  }

  export type CuidadorCreateNestedOneWithoutUploadsInput = {
    create?: XOR<CuidadorCreateWithoutUploadsInput, CuidadorUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutUploadsInput
    connect?: CuidadorWhereUniqueInput
  }

  export type IdosoCreateNestedOneWithoutUploadsInput = {
    create?: XOR<IdosoCreateWithoutUploadsInput, IdosoUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutUploadsInput
    connect?: IdosoWhereUniqueInput
  }

  export type CuidadorUpdateOneRequiredWithoutUploadsNestedInput = {
    create?: XOR<CuidadorCreateWithoutUploadsInput, CuidadorUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutUploadsInput
    upsert?: CuidadorUpsertWithoutUploadsInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutUploadsInput, CuidadorUpdateWithoutUploadsInput>, CuidadorUncheckedUpdateWithoutUploadsInput>
  }

  export type IdosoUpdateOneWithoutUploadsNestedInput = {
    create?: XOR<IdosoCreateWithoutUploadsInput, IdosoUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutUploadsInput
    upsert?: IdosoUpsertWithoutUploadsInput
    disconnect?: IdosoWhereInput | boolean
    delete?: IdosoWhereInput | boolean
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutUploadsInput, IdosoUpdateWithoutUploadsInput>, IdosoUncheckedUpdateWithoutUploadsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IdosoCreateNestedOneWithoutProntuariosInput = {
    create?: XOR<IdosoCreateWithoutProntuariosInput, IdosoUncheckedCreateWithoutProntuariosInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutProntuariosInput
    connect?: IdosoWhereUniqueInput
  }

  export type CuidadorCreateNestedOneWithoutProntuariosInput = {
    create?: XOR<CuidadorCreateWithoutProntuariosInput, CuidadorUncheckedCreateWithoutProntuariosInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutProntuariosInput
    connect?: CuidadorWhereUniqueInput
  }

  export type IdosoUpdateOneRequiredWithoutProntuariosNestedInput = {
    create?: XOR<IdosoCreateWithoutProntuariosInput, IdosoUncheckedCreateWithoutProntuariosInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutProntuariosInput
    upsert?: IdosoUpsertWithoutProntuariosInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutProntuariosInput, IdosoUpdateWithoutProntuariosInput>, IdosoUncheckedUpdateWithoutProntuariosInput>
  }

  export type CuidadorUpdateOneRequiredWithoutProntuariosNestedInput = {
    create?: XOR<CuidadorCreateWithoutProntuariosInput, CuidadorUncheckedCreateWithoutProntuariosInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutProntuariosInput
    upsert?: CuidadorUpsertWithoutProntuariosInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutProntuariosInput, CuidadorUpdateWithoutProntuariosInput>, CuidadorUncheckedUpdateWithoutProntuariosInput>
  }

  export type IdosoCreateNestedOneWithoutRelatoriosInput = {
    create?: XOR<IdosoCreateWithoutRelatoriosInput, IdosoUncheckedCreateWithoutRelatoriosInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutRelatoriosInput
    connect?: IdosoWhereUniqueInput
  }

  export type CuidadorCreateNestedOneWithoutRelatoriosInput = {
    create?: XOR<CuidadorCreateWithoutRelatoriosInput, CuidadorUncheckedCreateWithoutRelatoriosInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutRelatoriosInput
    connect?: CuidadorWhereUniqueInput
  }

  export type IdosoUpdateOneRequiredWithoutRelatoriosNestedInput = {
    create?: XOR<IdosoCreateWithoutRelatoriosInput, IdosoUncheckedCreateWithoutRelatoriosInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutRelatoriosInput
    upsert?: IdosoUpsertWithoutRelatoriosInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutRelatoriosInput, IdosoUpdateWithoutRelatoriosInput>, IdosoUncheckedUpdateWithoutRelatoriosInput>
  }

  export type CuidadorUpdateOneRequiredWithoutRelatoriosNestedInput = {
    create?: XOR<CuidadorCreateWithoutRelatoriosInput, CuidadorUncheckedCreateWithoutRelatoriosInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutRelatoriosInput
    upsert?: CuidadorUpsertWithoutRelatoriosInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutRelatoriosInput, CuidadorUpdateWithoutRelatoriosInput>, CuidadorUncheckedUpdateWithoutRelatoriosInput>
  }

  export type IdosoCreateNestedOneWithoutRelacaoCuidadoresInput = {
    create?: XOR<IdosoCreateWithoutRelacaoCuidadoresInput, IdosoUncheckedCreateWithoutRelacaoCuidadoresInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutRelacaoCuidadoresInput
    connect?: IdosoWhereUniqueInput
  }

  export type CuidadorCreateNestedOneWithoutRelacaoIdososInput = {
    create?: XOR<CuidadorCreateWithoutRelacaoIdososInput, CuidadorUncheckedCreateWithoutRelacaoIdososInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutRelacaoIdososInput
    connect?: CuidadorWhereUniqueInput
  }

  export type IdosoUpdateOneRequiredWithoutRelacaoCuidadoresNestedInput = {
    create?: XOR<IdosoCreateWithoutRelacaoCuidadoresInput, IdosoUncheckedCreateWithoutRelacaoCuidadoresInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutRelacaoCuidadoresInput
    upsert?: IdosoUpsertWithoutRelacaoCuidadoresInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutRelacaoCuidadoresInput, IdosoUpdateWithoutRelacaoCuidadoresInput>, IdosoUncheckedUpdateWithoutRelacaoCuidadoresInput>
  }

  export type CuidadorUpdateOneRequiredWithoutRelacaoIdososNestedInput = {
    create?: XOR<CuidadorCreateWithoutRelacaoIdososInput, CuidadorUncheckedCreateWithoutRelacaoIdososInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutRelacaoIdososInput
    upsert?: CuidadorUpsertWithoutRelacaoIdososInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutRelacaoIdososInput, CuidadorUpdateWithoutRelacaoIdososInput>, CuidadorUncheckedUpdateWithoutRelacaoIdososInput>
  }

  export type IdosoCreateNestedOneWithoutFeedAtividadesInput = {
    create?: XOR<IdosoCreateWithoutFeedAtividadesInput, IdosoUncheckedCreateWithoutFeedAtividadesInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutFeedAtividadesInput
    connect?: IdosoWhereUniqueInput
  }

  export type CuidadorCreateNestedOneWithoutFeedAtividadesInput = {
    create?: XOR<CuidadorCreateWithoutFeedAtividadesInput, CuidadorUncheckedCreateWithoutFeedAtividadesInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutFeedAtividadesInput
    connect?: CuidadorWhereUniqueInput
  }

  export type IdosoUpdateOneRequiredWithoutFeedAtividadesNestedInput = {
    create?: XOR<IdosoCreateWithoutFeedAtividadesInput, IdosoUncheckedCreateWithoutFeedAtividadesInput>
    connectOrCreate?: IdosoCreateOrConnectWithoutFeedAtividadesInput
    upsert?: IdosoUpsertWithoutFeedAtividadesInput
    connect?: IdosoWhereUniqueInput
    update?: XOR<XOR<IdosoUpdateToOneWithWhereWithoutFeedAtividadesInput, IdosoUpdateWithoutFeedAtividadesInput>, IdosoUncheckedUpdateWithoutFeedAtividadesInput>
  }

  export type CuidadorUpdateOneRequiredWithoutFeedAtividadesNestedInput = {
    create?: XOR<CuidadorCreateWithoutFeedAtividadesInput, CuidadorUncheckedCreateWithoutFeedAtividadesInput>
    connectOrCreate?: CuidadorCreateOrConnectWithoutFeedAtividadesInput
    upsert?: CuidadorUpsertWithoutFeedAtividadesInput
    connect?: CuidadorWhereUniqueInput
    update?: XOR<XOR<CuidadorUpdateToOneWithWhereWithoutFeedAtividadesInput, CuidadorUpdateWithoutFeedAtividadesInput>, CuidadorUncheckedUpdateWithoutFeedAtividadesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IdosoDoencaCreateWithoutIdosoInput = {
    data_diagnostico?: Date | string | null
    observacao?: string | null
    doenca: DoencaCreateNestedOneWithoutIdososInput
  }

  export type IdosoDoencaUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_doenca: number
    data_diagnostico?: Date | string | null
    observacao?: string | null
  }

  export type IdosoDoencaCreateOrConnectWithoutIdosoInput = {
    where: IdosoDoencaWhereUniqueInput
    create: XOR<IdosoDoencaCreateWithoutIdosoInput, IdosoDoencaUncheckedCreateWithoutIdosoInput>
  }

  export type MedicamentoCreateWithoutIdosoInput = {
    nome_medicamento: string
    via_administracao?: string | null
    frequencia?: string | null
    dosagem?: string | null
    horario?: string | null
    observacao?: string | null
  }

  export type MedicamentoUncheckedCreateWithoutIdosoInput = {
    id?: number
    nome_medicamento: string
    via_administracao?: string | null
    frequencia?: string | null
    dosagem?: string | null
    horario?: string | null
    observacao?: string | null
  }

  export type MedicamentoCreateOrConnectWithoutIdosoInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutIdosoInput, MedicamentoUncheckedCreateWithoutIdosoInput>
  }

  export type AlimentacaoCreateWithoutIdosoInput = {
    refeicao: string
    horario: string
    quantidade: string
    observacao?: string | null
    cuidador: CuidadorCreateNestedOneWithoutAlimentacoesInput
  }

  export type AlimentacaoUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_cuidador: number
    refeicao: string
    horario: string
    quantidade: string
    observacao?: string | null
  }

  export type AlimentacaoCreateOrConnectWithoutIdosoInput = {
    where: AlimentacaoWhereUniqueInput
    create: XOR<AlimentacaoCreateWithoutIdosoInput, AlimentacaoUncheckedCreateWithoutIdosoInput>
  }

  export type ProntuarioDiarioCreateWithoutIdosoInput = {
    data?: Date | string
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao?: string | null
    cuidador: CuidadorCreateNestedOneWithoutProntuariosInput
  }

  export type ProntuarioDiarioUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_cuidador: number
    data?: Date | string
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao?: string | null
  }

  export type ProntuarioDiarioCreateOrConnectWithoutIdosoInput = {
    where: ProntuarioDiarioWhereUniqueInput
    create: XOR<ProntuarioDiarioCreateWithoutIdosoInput, ProntuarioDiarioUncheckedCreateWithoutIdosoInput>
  }

  export type MediaUploadCreateWithoutIdosoInput = {
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise?: string | null
    criado_em?: Date | string
    cuidador: CuidadorCreateNestedOneWithoutUploadsInput
  }

  export type MediaUploadUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_cuidador: number
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise?: string | null
    criado_em?: Date | string
  }

  export type MediaUploadCreateOrConnectWithoutIdosoInput = {
    where: MediaUploadWhereUniqueInput
    create: XOR<MediaUploadCreateWithoutIdosoInput, MediaUploadUncheckedCreateWithoutIdosoInput>
  }

  export type CuidadorIdosoCreateWithoutIdosoInput = {
    papel?: string
    criado_em?: Date | string
    cuidador: CuidadorCreateNestedOneWithoutRelacaoIdososInput
  }

  export type CuidadorIdosoUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_cuidador: number
    papel?: string
    criado_em?: Date | string
  }

  export type CuidadorIdosoCreateOrConnectWithoutIdosoInput = {
    where: CuidadorIdosoWhereUniqueInput
    create: XOR<CuidadorIdosoCreateWithoutIdosoInput, CuidadorIdosoUncheckedCreateWithoutIdosoInput>
  }

  export type RelatorioCreateWithoutIdosoInput = {
    tipo: string
    data_inicio: Date | string
    data_fim: Date | string
    resumo_geral?: string | null
    status_geral?: string | null
    criado_em?: Date | string
    cuidador: CuidadorCreateNestedOneWithoutRelatoriosInput
  }

  export type RelatorioUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_cuidador: number
    tipo: string
    data_inicio: Date | string
    data_fim: Date | string
    resumo_geral?: string | null
    status_geral?: string | null
    criado_em?: Date | string
  }

  export type RelatorioCreateOrConnectWithoutIdosoInput = {
    where: RelatorioWhereUniqueInput
    create: XOR<RelatorioCreateWithoutIdosoInput, RelatorioUncheckedCreateWithoutIdosoInput>
  }

  export type FeedAtividadeCreateWithoutIdosoInput = {
    tipo: string
    descricao: string
    criado_em?: Date | string
    cuidador: CuidadorCreateNestedOneWithoutFeedAtividadesInput
  }

  export type FeedAtividadeUncheckedCreateWithoutIdosoInput = {
    id?: number
    id_cuidador: number
    tipo: string
    descricao: string
    criado_em?: Date | string
  }

  export type FeedAtividadeCreateOrConnectWithoutIdosoInput = {
    where: FeedAtividadeWhereUniqueInput
    create: XOR<FeedAtividadeCreateWithoutIdosoInput, FeedAtividadeUncheckedCreateWithoutIdosoInput>
  }

  export type IdosoDoencaUpsertWithWhereUniqueWithoutIdosoInput = {
    where: IdosoDoencaWhereUniqueInput
    update: XOR<IdosoDoencaUpdateWithoutIdosoInput, IdosoDoencaUncheckedUpdateWithoutIdosoInput>
    create: XOR<IdosoDoencaCreateWithoutIdosoInput, IdosoDoencaUncheckedCreateWithoutIdosoInput>
  }

  export type IdosoDoencaUpdateWithWhereUniqueWithoutIdosoInput = {
    where: IdosoDoencaWhereUniqueInput
    data: XOR<IdosoDoencaUpdateWithoutIdosoInput, IdosoDoencaUncheckedUpdateWithoutIdosoInput>
  }

  export type IdosoDoencaUpdateManyWithWhereWithoutIdosoInput = {
    where: IdosoDoencaScalarWhereInput
    data: XOR<IdosoDoencaUpdateManyMutationInput, IdosoDoencaUncheckedUpdateManyWithoutIdosoInput>
  }

  export type IdosoDoencaScalarWhereInput = {
    AND?: IdosoDoencaScalarWhereInput | IdosoDoencaScalarWhereInput[]
    OR?: IdosoDoencaScalarWhereInput[]
    NOT?: IdosoDoencaScalarWhereInput | IdosoDoencaScalarWhereInput[]
    id?: IntFilter<"IdosoDoenca"> | number
    id_doenca?: IntFilter<"IdosoDoenca"> | number
    id_idoso?: IntFilter<"IdosoDoenca"> | number
    data_diagnostico?: DateTimeNullableFilter<"IdosoDoenca"> | Date | string | null
    observacao?: StringNullableFilter<"IdosoDoenca"> | string | null
  }

  export type MedicamentoUpsertWithWhereUniqueWithoutIdosoInput = {
    where: MedicamentoWhereUniqueInput
    update: XOR<MedicamentoUpdateWithoutIdosoInput, MedicamentoUncheckedUpdateWithoutIdosoInput>
    create: XOR<MedicamentoCreateWithoutIdosoInput, MedicamentoUncheckedCreateWithoutIdosoInput>
  }

  export type MedicamentoUpdateWithWhereUniqueWithoutIdosoInput = {
    where: MedicamentoWhereUniqueInput
    data: XOR<MedicamentoUpdateWithoutIdosoInput, MedicamentoUncheckedUpdateWithoutIdosoInput>
  }

  export type MedicamentoUpdateManyWithWhereWithoutIdosoInput = {
    where: MedicamentoScalarWhereInput
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyWithoutIdosoInput>
  }

  export type MedicamentoScalarWhereInput = {
    AND?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
    OR?: MedicamentoScalarWhereInput[]
    NOT?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
    id?: IntFilter<"Medicamento"> | number
    id_idoso?: IntFilter<"Medicamento"> | number
    nome_medicamento?: StringFilter<"Medicamento"> | string
    via_administracao?: StringNullableFilter<"Medicamento"> | string | null
    frequencia?: StringNullableFilter<"Medicamento"> | string | null
    dosagem?: StringNullableFilter<"Medicamento"> | string | null
    horario?: StringNullableFilter<"Medicamento"> | string | null
    observacao?: StringNullableFilter<"Medicamento"> | string | null
  }

  export type AlimentacaoUpsertWithWhereUniqueWithoutIdosoInput = {
    where: AlimentacaoWhereUniqueInput
    update: XOR<AlimentacaoUpdateWithoutIdosoInput, AlimentacaoUncheckedUpdateWithoutIdosoInput>
    create: XOR<AlimentacaoCreateWithoutIdosoInput, AlimentacaoUncheckedCreateWithoutIdosoInput>
  }

  export type AlimentacaoUpdateWithWhereUniqueWithoutIdosoInput = {
    where: AlimentacaoWhereUniqueInput
    data: XOR<AlimentacaoUpdateWithoutIdosoInput, AlimentacaoUncheckedUpdateWithoutIdosoInput>
  }

  export type AlimentacaoUpdateManyWithWhereWithoutIdosoInput = {
    where: AlimentacaoScalarWhereInput
    data: XOR<AlimentacaoUpdateManyMutationInput, AlimentacaoUncheckedUpdateManyWithoutIdosoInput>
  }

  export type AlimentacaoScalarWhereInput = {
    AND?: AlimentacaoScalarWhereInput | AlimentacaoScalarWhereInput[]
    OR?: AlimentacaoScalarWhereInput[]
    NOT?: AlimentacaoScalarWhereInput | AlimentacaoScalarWhereInput[]
    id?: IntFilter<"Alimentacao"> | number
    id_cuidador?: IntFilter<"Alimentacao"> | number
    id_idoso?: IntFilter<"Alimentacao"> | number
    refeicao?: StringFilter<"Alimentacao"> | string
    horario?: StringFilter<"Alimentacao"> | string
    quantidade?: StringFilter<"Alimentacao"> | string
    observacao?: StringNullableFilter<"Alimentacao"> | string | null
  }

  export type ProntuarioDiarioUpsertWithWhereUniqueWithoutIdosoInput = {
    where: ProntuarioDiarioWhereUniqueInput
    update: XOR<ProntuarioDiarioUpdateWithoutIdosoInput, ProntuarioDiarioUncheckedUpdateWithoutIdosoInput>
    create: XOR<ProntuarioDiarioCreateWithoutIdosoInput, ProntuarioDiarioUncheckedCreateWithoutIdosoInput>
  }

  export type ProntuarioDiarioUpdateWithWhereUniqueWithoutIdosoInput = {
    where: ProntuarioDiarioWhereUniqueInput
    data: XOR<ProntuarioDiarioUpdateWithoutIdosoInput, ProntuarioDiarioUncheckedUpdateWithoutIdosoInput>
  }

  export type ProntuarioDiarioUpdateManyWithWhereWithoutIdosoInput = {
    where: ProntuarioDiarioScalarWhereInput
    data: XOR<ProntuarioDiarioUpdateManyMutationInput, ProntuarioDiarioUncheckedUpdateManyWithoutIdosoInput>
  }

  export type ProntuarioDiarioScalarWhereInput = {
    AND?: ProntuarioDiarioScalarWhereInput | ProntuarioDiarioScalarWhereInput[]
    OR?: ProntuarioDiarioScalarWhereInput[]
    NOT?: ProntuarioDiarioScalarWhereInput | ProntuarioDiarioScalarWhereInput[]
    id?: IntFilter<"ProntuarioDiario"> | number
    id_idoso?: IntFilter<"ProntuarioDiario"> | number
    id_cuidador?: IntFilter<"ProntuarioDiario"> | number
    data?: DateTimeFilter<"ProntuarioDiario"> | Date | string
    diurese?: StringFilter<"ProntuarioDiario"> | string
    evacuacao?: StringFilter<"ProntuarioDiario"> | string
    hidratacao?: StringFilter<"ProntuarioDiario"> | string
    observacao?: StringNullableFilter<"ProntuarioDiario"> | string | null
  }

  export type MediaUploadUpsertWithWhereUniqueWithoutIdosoInput = {
    where: MediaUploadWhereUniqueInput
    update: XOR<MediaUploadUpdateWithoutIdosoInput, MediaUploadUncheckedUpdateWithoutIdosoInput>
    create: XOR<MediaUploadCreateWithoutIdosoInput, MediaUploadUncheckedCreateWithoutIdosoInput>
  }

  export type MediaUploadUpdateWithWhereUniqueWithoutIdosoInput = {
    where: MediaUploadWhereUniqueInput
    data: XOR<MediaUploadUpdateWithoutIdosoInput, MediaUploadUncheckedUpdateWithoutIdosoInput>
  }

  export type MediaUploadUpdateManyWithWhereWithoutIdosoInput = {
    where: MediaUploadScalarWhereInput
    data: XOR<MediaUploadUpdateManyMutationInput, MediaUploadUncheckedUpdateManyWithoutIdosoInput>
  }

  export type MediaUploadScalarWhereInput = {
    AND?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
    OR?: MediaUploadScalarWhereInput[]
    NOT?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
    id?: IntFilter<"MediaUpload"> | number
    id_cuidador?: IntFilter<"MediaUpload"> | number
    nome_original?: StringFilter<"MediaUpload"> | string
    caminho?: StringFilter<"MediaUpload"> | string
    tipo_mime?: StringFilter<"MediaUpload"> | string
    tamanho_bytes?: IntFilter<"MediaUpload"> | number
    tipo_midia?: StringFilter<"MediaUpload"> | string
    analise?: StringNullableFilter<"MediaUpload"> | string | null
    id_idoso?: IntNullableFilter<"MediaUpload"> | number | null
    criado_em?: DateTimeFilter<"MediaUpload"> | Date | string
  }

  export type CuidadorIdosoUpsertWithWhereUniqueWithoutIdosoInput = {
    where: CuidadorIdosoWhereUniqueInput
    update: XOR<CuidadorIdosoUpdateWithoutIdosoInput, CuidadorIdosoUncheckedUpdateWithoutIdosoInput>
    create: XOR<CuidadorIdosoCreateWithoutIdosoInput, CuidadorIdosoUncheckedCreateWithoutIdosoInput>
  }

  export type CuidadorIdosoUpdateWithWhereUniqueWithoutIdosoInput = {
    where: CuidadorIdosoWhereUniqueInput
    data: XOR<CuidadorIdosoUpdateWithoutIdosoInput, CuidadorIdosoUncheckedUpdateWithoutIdosoInput>
  }

  export type CuidadorIdosoUpdateManyWithWhereWithoutIdosoInput = {
    where: CuidadorIdosoScalarWhereInput
    data: XOR<CuidadorIdosoUpdateManyMutationInput, CuidadorIdosoUncheckedUpdateManyWithoutIdosoInput>
  }

  export type CuidadorIdosoScalarWhereInput = {
    AND?: CuidadorIdosoScalarWhereInput | CuidadorIdosoScalarWhereInput[]
    OR?: CuidadorIdosoScalarWhereInput[]
    NOT?: CuidadorIdosoScalarWhereInput | CuidadorIdosoScalarWhereInput[]
    id?: IntFilter<"CuidadorIdoso"> | number
    id_idoso?: IntFilter<"CuidadorIdoso"> | number
    id_cuidador?: IntFilter<"CuidadorIdoso"> | number
    papel?: StringFilter<"CuidadorIdoso"> | string
    criado_em?: DateTimeFilter<"CuidadorIdoso"> | Date | string
  }

  export type RelatorioUpsertWithWhereUniqueWithoutIdosoInput = {
    where: RelatorioWhereUniqueInput
    update: XOR<RelatorioUpdateWithoutIdosoInput, RelatorioUncheckedUpdateWithoutIdosoInput>
    create: XOR<RelatorioCreateWithoutIdosoInput, RelatorioUncheckedCreateWithoutIdosoInput>
  }

  export type RelatorioUpdateWithWhereUniqueWithoutIdosoInput = {
    where: RelatorioWhereUniqueInput
    data: XOR<RelatorioUpdateWithoutIdosoInput, RelatorioUncheckedUpdateWithoutIdosoInput>
  }

  export type RelatorioUpdateManyWithWhereWithoutIdosoInput = {
    where: RelatorioScalarWhereInput
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyWithoutIdosoInput>
  }

  export type RelatorioScalarWhereInput = {
    AND?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
    OR?: RelatorioScalarWhereInput[]
    NOT?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
    id?: IntFilter<"Relatorio"> | number
    id_idoso?: IntFilter<"Relatorio"> | number
    id_cuidador?: IntFilter<"Relatorio"> | number
    tipo?: StringFilter<"Relatorio"> | string
    data_inicio?: DateTimeFilter<"Relatorio"> | Date | string
    data_fim?: DateTimeFilter<"Relatorio"> | Date | string
    resumo_geral?: StringNullableFilter<"Relatorio"> | string | null
    status_geral?: StringNullableFilter<"Relatorio"> | string | null
    criado_em?: DateTimeFilter<"Relatorio"> | Date | string
  }

  export type FeedAtividadeUpsertWithWhereUniqueWithoutIdosoInput = {
    where: FeedAtividadeWhereUniqueInput
    update: XOR<FeedAtividadeUpdateWithoutIdosoInput, FeedAtividadeUncheckedUpdateWithoutIdosoInput>
    create: XOR<FeedAtividadeCreateWithoutIdosoInput, FeedAtividadeUncheckedCreateWithoutIdosoInput>
  }

  export type FeedAtividadeUpdateWithWhereUniqueWithoutIdosoInput = {
    where: FeedAtividadeWhereUniqueInput
    data: XOR<FeedAtividadeUpdateWithoutIdosoInput, FeedAtividadeUncheckedUpdateWithoutIdosoInput>
  }

  export type FeedAtividadeUpdateManyWithWhereWithoutIdosoInput = {
    where: FeedAtividadeScalarWhereInput
    data: XOR<FeedAtividadeUpdateManyMutationInput, FeedAtividadeUncheckedUpdateManyWithoutIdosoInput>
  }

  export type FeedAtividadeScalarWhereInput = {
    AND?: FeedAtividadeScalarWhereInput | FeedAtividadeScalarWhereInput[]
    OR?: FeedAtividadeScalarWhereInput[]
    NOT?: FeedAtividadeScalarWhereInput | FeedAtividadeScalarWhereInput[]
    id?: IntFilter<"FeedAtividade"> | number
    id_idoso?: IntFilter<"FeedAtividade"> | number
    id_cuidador?: IntFilter<"FeedAtividade"> | number
    tipo?: StringFilter<"FeedAtividade"> | string
    descricao?: StringFilter<"FeedAtividade"> | string
    criado_em?: DateTimeFilter<"FeedAtividade"> | Date | string
  }

  export type IdosoDoencaCreateWithoutDoencaInput = {
    data_diagnostico?: Date | string | null
    observacao?: string | null
    idoso: IdosoCreateNestedOneWithoutDoencasInput
  }

  export type IdosoDoencaUncheckedCreateWithoutDoencaInput = {
    id?: number
    id_idoso: number
    data_diagnostico?: Date | string | null
    observacao?: string | null
  }

  export type IdosoDoencaCreateOrConnectWithoutDoencaInput = {
    where: IdosoDoencaWhereUniqueInput
    create: XOR<IdosoDoencaCreateWithoutDoencaInput, IdosoDoencaUncheckedCreateWithoutDoencaInput>
  }

  export type IdosoDoencaUpsertWithWhereUniqueWithoutDoencaInput = {
    where: IdosoDoencaWhereUniqueInput
    update: XOR<IdosoDoencaUpdateWithoutDoencaInput, IdosoDoencaUncheckedUpdateWithoutDoencaInput>
    create: XOR<IdosoDoencaCreateWithoutDoencaInput, IdosoDoencaUncheckedCreateWithoutDoencaInput>
  }

  export type IdosoDoencaUpdateWithWhereUniqueWithoutDoencaInput = {
    where: IdosoDoencaWhereUniqueInput
    data: XOR<IdosoDoencaUpdateWithoutDoencaInput, IdosoDoencaUncheckedUpdateWithoutDoencaInput>
  }

  export type IdosoDoencaUpdateManyWithWhereWithoutDoencaInput = {
    where: IdosoDoencaScalarWhereInput
    data: XOR<IdosoDoencaUpdateManyMutationInput, IdosoDoencaUncheckedUpdateManyWithoutDoencaInput>
  }

  export type DoencaCreateWithoutIdososInput = {
    nome_doenca: string
    codigo_cid?: string | null
    categoria?: string | null
  }

  export type DoencaUncheckedCreateWithoutIdososInput = {
    id?: number
    nome_doenca: string
    codigo_cid?: string | null
    categoria?: string | null
  }

  export type DoencaCreateOrConnectWithoutIdososInput = {
    where: DoencaWhereUniqueInput
    create: XOR<DoencaCreateWithoutIdososInput, DoencaUncheckedCreateWithoutIdososInput>
  }

  export type IdosoCreateWithoutDoencasInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutDoencasInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutDoencasInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutDoencasInput, IdosoUncheckedCreateWithoutDoencasInput>
  }

  export type DoencaUpsertWithoutIdososInput = {
    update: XOR<DoencaUpdateWithoutIdososInput, DoencaUncheckedUpdateWithoutIdososInput>
    create: XOR<DoencaCreateWithoutIdososInput, DoencaUncheckedCreateWithoutIdososInput>
    where?: DoencaWhereInput
  }

  export type DoencaUpdateToOneWithWhereWithoutIdososInput = {
    where?: DoencaWhereInput
    data: XOR<DoencaUpdateWithoutIdososInput, DoencaUncheckedUpdateWithoutIdososInput>
  }

  export type DoencaUpdateWithoutIdososInput = {
    nome_doenca?: StringFieldUpdateOperationsInput | string
    codigo_cid?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoencaUncheckedUpdateWithoutIdososInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_doenca?: StringFieldUpdateOperationsInput | string
    codigo_cid?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdosoUpsertWithoutDoencasInput = {
    update: XOR<IdosoUpdateWithoutDoencasInput, IdosoUncheckedUpdateWithoutDoencasInput>
    create: XOR<IdosoCreateWithoutDoencasInput, IdosoUncheckedCreateWithoutDoencasInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutDoencasInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutDoencasInput, IdosoUncheckedUpdateWithoutDoencasInput>
  }

  export type IdosoUpdateWithoutDoencasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutDoencasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoCreateWithoutMedicamentosInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutMedicamentosInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutMedicamentosInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutMedicamentosInput, IdosoUncheckedCreateWithoutMedicamentosInput>
  }

  export type IdosoUpsertWithoutMedicamentosInput = {
    update: XOR<IdosoUpdateWithoutMedicamentosInput, IdosoUncheckedUpdateWithoutMedicamentosInput>
    create: XOR<IdosoCreateWithoutMedicamentosInput, IdosoUncheckedCreateWithoutMedicamentosInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutMedicamentosInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutMedicamentosInput, IdosoUncheckedUpdateWithoutMedicamentosInput>
  }

  export type IdosoUpdateWithoutMedicamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutMedicamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type AcompanhamentoCuidadorCreateWithoutCuidadorInput = {
    humor?: string | null
    sono?: string | null
    nivel_energia?: string | null
    observacao?: string | null
    dia?: Date | string | null
  }

  export type AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput = {
    id?: number
    humor?: string | null
    sono?: string | null
    nivel_energia?: string | null
    observacao?: string | null
    dia?: Date | string | null
  }

  export type AcompanhamentoCuidadorCreateOrConnectWithoutCuidadorInput = {
    where: AcompanhamentoCuidadorWhereUniqueInput
    create: XOR<AcompanhamentoCuidadorCreateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput>
  }

  export type AlimentacaoCreateWithoutCuidadorInput = {
    refeicao: string
    horario: string
    quantidade: string
    observacao?: string | null
    idoso: IdosoCreateNestedOneWithoutAlimentacoesInput
  }

  export type AlimentacaoUncheckedCreateWithoutCuidadorInput = {
    id?: number
    id_idoso: number
    refeicao: string
    horario: string
    quantidade: string
    observacao?: string | null
  }

  export type AlimentacaoCreateOrConnectWithoutCuidadorInput = {
    where: AlimentacaoWhereUniqueInput
    create: XOR<AlimentacaoCreateWithoutCuidadorInput, AlimentacaoUncheckedCreateWithoutCuidadorInput>
  }

  export type ProntuarioDiarioCreateWithoutCuidadorInput = {
    data?: Date | string
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao?: string | null
    idoso: IdosoCreateNestedOneWithoutProntuariosInput
  }

  export type ProntuarioDiarioUncheckedCreateWithoutCuidadorInput = {
    id?: number
    id_idoso: number
    data?: Date | string
    diurese: string
    evacuacao: string
    hidratacao: string
    observacao?: string | null
  }

  export type ProntuarioDiarioCreateOrConnectWithoutCuidadorInput = {
    where: ProntuarioDiarioWhereUniqueInput
    create: XOR<ProntuarioDiarioCreateWithoutCuidadorInput, ProntuarioDiarioUncheckedCreateWithoutCuidadorInput>
  }

  export type MediaUploadCreateWithoutCuidadorInput = {
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise?: string | null
    criado_em?: Date | string
    idoso?: IdosoCreateNestedOneWithoutUploadsInput
  }

  export type MediaUploadUncheckedCreateWithoutCuidadorInput = {
    id?: number
    nome_original: string
    caminho: string
    tipo_mime: string
    tamanho_bytes: number
    tipo_midia: string
    analise?: string | null
    id_idoso?: number | null
    criado_em?: Date | string
  }

  export type MediaUploadCreateOrConnectWithoutCuidadorInput = {
    where: MediaUploadWhereUniqueInput
    create: XOR<MediaUploadCreateWithoutCuidadorInput, MediaUploadUncheckedCreateWithoutCuidadorInput>
  }

  export type CuidadorIdosoCreateWithoutCuidadorInput = {
    papel?: string
    criado_em?: Date | string
    idoso: IdosoCreateNestedOneWithoutRelacaoCuidadoresInput
  }

  export type CuidadorIdosoUncheckedCreateWithoutCuidadorInput = {
    id?: number
    id_idoso: number
    papel?: string
    criado_em?: Date | string
  }

  export type CuidadorIdosoCreateOrConnectWithoutCuidadorInput = {
    where: CuidadorIdosoWhereUniqueInput
    create: XOR<CuidadorIdosoCreateWithoutCuidadorInput, CuidadorIdosoUncheckedCreateWithoutCuidadorInput>
  }

  export type RelatorioCreateWithoutCuidadorInput = {
    tipo: string
    data_inicio: Date | string
    data_fim: Date | string
    resumo_geral?: string | null
    status_geral?: string | null
    criado_em?: Date | string
    idoso: IdosoCreateNestedOneWithoutRelatoriosInput
  }

  export type RelatorioUncheckedCreateWithoutCuidadorInput = {
    id?: number
    id_idoso: number
    tipo: string
    data_inicio: Date | string
    data_fim: Date | string
    resumo_geral?: string | null
    status_geral?: string | null
    criado_em?: Date | string
  }

  export type RelatorioCreateOrConnectWithoutCuidadorInput = {
    where: RelatorioWhereUniqueInput
    create: XOR<RelatorioCreateWithoutCuidadorInput, RelatorioUncheckedCreateWithoutCuidadorInput>
  }

  export type FeedAtividadeCreateWithoutCuidadorInput = {
    tipo: string
    descricao: string
    criado_em?: Date | string
    idoso: IdosoCreateNestedOneWithoutFeedAtividadesInput
  }

  export type FeedAtividadeUncheckedCreateWithoutCuidadorInput = {
    id?: number
    id_idoso: number
    tipo: string
    descricao: string
    criado_em?: Date | string
  }

  export type FeedAtividadeCreateOrConnectWithoutCuidadorInput = {
    where: FeedAtividadeWhereUniqueInput
    create: XOR<FeedAtividadeCreateWithoutCuidadorInput, FeedAtividadeUncheckedCreateWithoutCuidadorInput>
  }

  export type AcompanhamentoCuidadorUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: AcompanhamentoCuidadorWhereUniqueInput
    update: XOR<AcompanhamentoCuidadorUpdateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedUpdateWithoutCuidadorInput>
    create: XOR<AcompanhamentoCuidadorCreateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedCreateWithoutCuidadorInput>
  }

  export type AcompanhamentoCuidadorUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: AcompanhamentoCuidadorWhereUniqueInput
    data: XOR<AcompanhamentoCuidadorUpdateWithoutCuidadorInput, AcompanhamentoCuidadorUncheckedUpdateWithoutCuidadorInput>
  }

  export type AcompanhamentoCuidadorUpdateManyWithWhereWithoutCuidadorInput = {
    where: AcompanhamentoCuidadorScalarWhereInput
    data: XOR<AcompanhamentoCuidadorUpdateManyMutationInput, AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type AcompanhamentoCuidadorScalarWhereInput = {
    AND?: AcompanhamentoCuidadorScalarWhereInput | AcompanhamentoCuidadorScalarWhereInput[]
    OR?: AcompanhamentoCuidadorScalarWhereInput[]
    NOT?: AcompanhamentoCuidadorScalarWhereInput | AcompanhamentoCuidadorScalarWhereInput[]
    id?: IntFilter<"AcompanhamentoCuidador"> | number
    id_cuidador?: IntFilter<"AcompanhamentoCuidador"> | number
    humor?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    sono?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    nivel_energia?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    observacao?: StringNullableFilter<"AcompanhamentoCuidador"> | string | null
    dia?: DateTimeNullableFilter<"AcompanhamentoCuidador"> | Date | string | null
  }

  export type AlimentacaoUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: AlimentacaoWhereUniqueInput
    update: XOR<AlimentacaoUpdateWithoutCuidadorInput, AlimentacaoUncheckedUpdateWithoutCuidadorInput>
    create: XOR<AlimentacaoCreateWithoutCuidadorInput, AlimentacaoUncheckedCreateWithoutCuidadorInput>
  }

  export type AlimentacaoUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: AlimentacaoWhereUniqueInput
    data: XOR<AlimentacaoUpdateWithoutCuidadorInput, AlimentacaoUncheckedUpdateWithoutCuidadorInput>
  }

  export type AlimentacaoUpdateManyWithWhereWithoutCuidadorInput = {
    where: AlimentacaoScalarWhereInput
    data: XOR<AlimentacaoUpdateManyMutationInput, AlimentacaoUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type ProntuarioDiarioUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: ProntuarioDiarioWhereUniqueInput
    update: XOR<ProntuarioDiarioUpdateWithoutCuidadorInput, ProntuarioDiarioUncheckedUpdateWithoutCuidadorInput>
    create: XOR<ProntuarioDiarioCreateWithoutCuidadorInput, ProntuarioDiarioUncheckedCreateWithoutCuidadorInput>
  }

  export type ProntuarioDiarioUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: ProntuarioDiarioWhereUniqueInput
    data: XOR<ProntuarioDiarioUpdateWithoutCuidadorInput, ProntuarioDiarioUncheckedUpdateWithoutCuidadorInput>
  }

  export type ProntuarioDiarioUpdateManyWithWhereWithoutCuidadorInput = {
    where: ProntuarioDiarioScalarWhereInput
    data: XOR<ProntuarioDiarioUpdateManyMutationInput, ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type MediaUploadUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: MediaUploadWhereUniqueInput
    update: XOR<MediaUploadUpdateWithoutCuidadorInput, MediaUploadUncheckedUpdateWithoutCuidadorInput>
    create: XOR<MediaUploadCreateWithoutCuidadorInput, MediaUploadUncheckedCreateWithoutCuidadorInput>
  }

  export type MediaUploadUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: MediaUploadWhereUniqueInput
    data: XOR<MediaUploadUpdateWithoutCuidadorInput, MediaUploadUncheckedUpdateWithoutCuidadorInput>
  }

  export type MediaUploadUpdateManyWithWhereWithoutCuidadorInput = {
    where: MediaUploadScalarWhereInput
    data: XOR<MediaUploadUpdateManyMutationInput, MediaUploadUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type CuidadorIdosoUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: CuidadorIdosoWhereUniqueInput
    update: XOR<CuidadorIdosoUpdateWithoutCuidadorInput, CuidadorIdosoUncheckedUpdateWithoutCuidadorInput>
    create: XOR<CuidadorIdosoCreateWithoutCuidadorInput, CuidadorIdosoUncheckedCreateWithoutCuidadorInput>
  }

  export type CuidadorIdosoUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: CuidadorIdosoWhereUniqueInput
    data: XOR<CuidadorIdosoUpdateWithoutCuidadorInput, CuidadorIdosoUncheckedUpdateWithoutCuidadorInput>
  }

  export type CuidadorIdosoUpdateManyWithWhereWithoutCuidadorInput = {
    where: CuidadorIdosoScalarWhereInput
    data: XOR<CuidadorIdosoUpdateManyMutationInput, CuidadorIdosoUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type RelatorioUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: RelatorioWhereUniqueInput
    update: XOR<RelatorioUpdateWithoutCuidadorInput, RelatorioUncheckedUpdateWithoutCuidadorInput>
    create: XOR<RelatorioCreateWithoutCuidadorInput, RelatorioUncheckedCreateWithoutCuidadorInput>
  }

  export type RelatorioUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: RelatorioWhereUniqueInput
    data: XOR<RelatorioUpdateWithoutCuidadorInput, RelatorioUncheckedUpdateWithoutCuidadorInput>
  }

  export type RelatorioUpdateManyWithWhereWithoutCuidadorInput = {
    where: RelatorioScalarWhereInput
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type FeedAtividadeUpsertWithWhereUniqueWithoutCuidadorInput = {
    where: FeedAtividadeWhereUniqueInput
    update: XOR<FeedAtividadeUpdateWithoutCuidadorInput, FeedAtividadeUncheckedUpdateWithoutCuidadorInput>
    create: XOR<FeedAtividadeCreateWithoutCuidadorInput, FeedAtividadeUncheckedCreateWithoutCuidadorInput>
  }

  export type FeedAtividadeUpdateWithWhereUniqueWithoutCuidadorInput = {
    where: FeedAtividadeWhereUniqueInput
    data: XOR<FeedAtividadeUpdateWithoutCuidadorInput, FeedAtividadeUncheckedUpdateWithoutCuidadorInput>
  }

  export type FeedAtividadeUpdateManyWithWhereWithoutCuidadorInput = {
    where: FeedAtividadeScalarWhereInput
    data: XOR<FeedAtividadeUpdateManyMutationInput, FeedAtividadeUncheckedUpdateManyWithoutCuidadorInput>
  }

  export type CuidadorCreateWithoutAcompanhamentosInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutAcompanhamentosInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutAcompanhamentosInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutAcompanhamentosInput, CuidadorUncheckedCreateWithoutAcompanhamentosInput>
  }

  export type CuidadorUpsertWithoutAcompanhamentosInput = {
    update: XOR<CuidadorUpdateWithoutAcompanhamentosInput, CuidadorUncheckedUpdateWithoutAcompanhamentosInput>
    create: XOR<CuidadorCreateWithoutAcompanhamentosInput, CuidadorUncheckedCreateWithoutAcompanhamentosInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutAcompanhamentosInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutAcompanhamentosInput, CuidadorUncheckedUpdateWithoutAcompanhamentosInput>
  }

  export type CuidadorUpdateWithoutAcompanhamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutAcompanhamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorCreateWithoutAlimentacoesInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutAlimentacoesInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutAlimentacoesInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutAlimentacoesInput, CuidadorUncheckedCreateWithoutAlimentacoesInput>
  }

  export type IdosoCreateWithoutAlimentacoesInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutAlimentacoesInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutAlimentacoesInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutAlimentacoesInput, IdosoUncheckedCreateWithoutAlimentacoesInput>
  }

  export type CuidadorUpsertWithoutAlimentacoesInput = {
    update: XOR<CuidadorUpdateWithoutAlimentacoesInput, CuidadorUncheckedUpdateWithoutAlimentacoesInput>
    create: XOR<CuidadorCreateWithoutAlimentacoesInput, CuidadorUncheckedCreateWithoutAlimentacoesInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutAlimentacoesInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutAlimentacoesInput, CuidadorUncheckedUpdateWithoutAlimentacoesInput>
  }

  export type CuidadorUpdateWithoutAlimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutAlimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type IdosoUpsertWithoutAlimentacoesInput = {
    update: XOR<IdosoUpdateWithoutAlimentacoesInput, IdosoUncheckedUpdateWithoutAlimentacoesInput>
    create: XOR<IdosoCreateWithoutAlimentacoesInput, IdosoUncheckedCreateWithoutAlimentacoesInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutAlimentacoesInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutAlimentacoesInput, IdosoUncheckedUpdateWithoutAlimentacoesInput>
  }

  export type IdosoUpdateWithoutAlimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutAlimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type CuidadorCreateWithoutUploadsInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutUploadsInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutUploadsInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutUploadsInput, CuidadorUncheckedCreateWithoutUploadsInput>
  }

  export type IdosoCreateWithoutUploadsInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutUploadsInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutUploadsInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutUploadsInput, IdosoUncheckedCreateWithoutUploadsInput>
  }

  export type CuidadorUpsertWithoutUploadsInput = {
    update: XOR<CuidadorUpdateWithoutUploadsInput, CuidadorUncheckedUpdateWithoutUploadsInput>
    create: XOR<CuidadorCreateWithoutUploadsInput, CuidadorUncheckedCreateWithoutUploadsInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutUploadsInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutUploadsInput, CuidadorUncheckedUpdateWithoutUploadsInput>
  }

  export type CuidadorUpdateWithoutUploadsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type IdosoUpsertWithoutUploadsInput = {
    update: XOR<IdosoUpdateWithoutUploadsInput, IdosoUncheckedUpdateWithoutUploadsInput>
    create: XOR<IdosoCreateWithoutUploadsInput, IdosoUncheckedCreateWithoutUploadsInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutUploadsInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutUploadsInput, IdosoUncheckedUpdateWithoutUploadsInput>
  }

  export type IdosoUpdateWithoutUploadsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoCreateWithoutProntuariosInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutProntuariosInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutProntuariosInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutProntuariosInput, IdosoUncheckedCreateWithoutProntuariosInput>
  }

  export type CuidadorCreateWithoutProntuariosInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutProntuariosInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutProntuariosInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutProntuariosInput, CuidadorUncheckedCreateWithoutProntuariosInput>
  }

  export type IdosoUpsertWithoutProntuariosInput = {
    update: XOR<IdosoUpdateWithoutProntuariosInput, IdosoUncheckedUpdateWithoutProntuariosInput>
    create: XOR<IdosoCreateWithoutProntuariosInput, IdosoUncheckedCreateWithoutProntuariosInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutProntuariosInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutProntuariosInput, IdosoUncheckedUpdateWithoutProntuariosInput>
  }

  export type IdosoUpdateWithoutProntuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutProntuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type CuidadorUpsertWithoutProntuariosInput = {
    update: XOR<CuidadorUpdateWithoutProntuariosInput, CuidadorUncheckedUpdateWithoutProntuariosInput>
    create: XOR<CuidadorCreateWithoutProntuariosInput, CuidadorUncheckedCreateWithoutProntuariosInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutProntuariosInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutProntuariosInput, CuidadorUncheckedUpdateWithoutProntuariosInput>
  }

  export type CuidadorUpdateWithoutProntuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutProntuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type IdosoCreateWithoutRelatoriosInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutRelatoriosInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutRelatoriosInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutRelatoriosInput, IdosoUncheckedCreateWithoutRelatoriosInput>
  }

  export type CuidadorCreateWithoutRelatoriosInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutRelatoriosInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutRelatoriosInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutRelatoriosInput, CuidadorUncheckedCreateWithoutRelatoriosInput>
  }

  export type IdosoUpsertWithoutRelatoriosInput = {
    update: XOR<IdosoUpdateWithoutRelatoriosInput, IdosoUncheckedUpdateWithoutRelatoriosInput>
    create: XOR<IdosoCreateWithoutRelatoriosInput, IdosoUncheckedCreateWithoutRelatoriosInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutRelatoriosInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutRelatoriosInput, IdosoUncheckedUpdateWithoutRelatoriosInput>
  }

  export type IdosoUpdateWithoutRelatoriosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutRelatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type CuidadorUpsertWithoutRelatoriosInput = {
    update: XOR<CuidadorUpdateWithoutRelatoriosInput, CuidadorUncheckedUpdateWithoutRelatoriosInput>
    create: XOR<CuidadorCreateWithoutRelatoriosInput, CuidadorUncheckedCreateWithoutRelatoriosInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutRelatoriosInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutRelatoriosInput, CuidadorUncheckedUpdateWithoutRelatoriosInput>
  }

  export type CuidadorUpdateWithoutRelatoriosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutRelatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type IdosoCreateWithoutRelacaoCuidadoresInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutRelacaoCuidadoresInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutRelacaoCuidadoresInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutRelacaoCuidadoresInput, IdosoUncheckedCreateWithoutRelacaoCuidadoresInput>
  }

  export type CuidadorCreateWithoutRelacaoIdososInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutRelacaoIdososInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
    feedAtividades?: FeedAtividadeUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutRelacaoIdososInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutRelacaoIdososInput, CuidadorUncheckedCreateWithoutRelacaoIdososInput>
  }

  export type IdosoUpsertWithoutRelacaoCuidadoresInput = {
    update: XOR<IdosoUpdateWithoutRelacaoCuidadoresInput, IdosoUncheckedUpdateWithoutRelacaoCuidadoresInput>
    create: XOR<IdosoCreateWithoutRelacaoCuidadoresInput, IdosoUncheckedCreateWithoutRelacaoCuidadoresInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutRelacaoCuidadoresInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutRelacaoCuidadoresInput, IdosoUncheckedUpdateWithoutRelacaoCuidadoresInput>
  }

  export type IdosoUpdateWithoutRelacaoCuidadoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutRelacaoCuidadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type CuidadorUpsertWithoutRelacaoIdososInput = {
    update: XOR<CuidadorUpdateWithoutRelacaoIdososInput, CuidadorUncheckedUpdateWithoutRelacaoIdososInput>
    create: XOR<CuidadorCreateWithoutRelacaoIdososInput, CuidadorUncheckedCreateWithoutRelacaoIdososInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutRelacaoIdososInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutRelacaoIdososInput, CuidadorUncheckedUpdateWithoutRelacaoIdososInput>
  }

  export type CuidadorUpdateWithoutRelacaoIdososInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutRelacaoIdososInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
    feedAtividades?: FeedAtividadeUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type IdosoCreateWithoutFeedAtividadesInput = {
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioCreateNestedManyWithoutIdosoInput
  }

  export type IdosoUncheckedCreateWithoutFeedAtividadesInput = {
    id?: number
    nome: string
    data_nascimento?: Date | string | null
    cpf: string
    sexo?: string | null
    peso?: number | null
    condicoes_medicinais?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    doencas?: IdosoDoencaUncheckedCreateNestedManyWithoutIdosoInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutIdosoInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutIdosoInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutIdosoInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutIdosoInput
    relacaoCuidadores?: CuidadorIdosoUncheckedCreateNestedManyWithoutIdosoInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutIdosoInput
  }

  export type IdosoCreateOrConnectWithoutFeedAtividadesInput = {
    where: IdosoWhereUniqueInput
    create: XOR<IdosoCreateWithoutFeedAtividadesInput, IdosoUncheckedCreateWithoutFeedAtividadesInput>
  }

  export type CuidadorCreateWithoutFeedAtividadesInput = {
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorUncheckedCreateWithoutFeedAtividadesInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    sexo?: string | null
    cpf: string
    telefone?: string | null
    turno?: string | null
    criado_em?: Date | string
    atualizado_em?: Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedCreateNestedManyWithoutCuidadorInput
    alimentacoes?: AlimentacaoUncheckedCreateNestedManyWithoutCuidadorInput
    prontuarios?: ProntuarioDiarioUncheckedCreateNestedManyWithoutCuidadorInput
    uploads?: MediaUploadUncheckedCreateNestedManyWithoutCuidadorInput
    relacaoIdosos?: CuidadorIdosoUncheckedCreateNestedManyWithoutCuidadorInput
    relatorios?: RelatorioUncheckedCreateNestedManyWithoutCuidadorInput
  }

  export type CuidadorCreateOrConnectWithoutFeedAtividadesInput = {
    where: CuidadorWhereUniqueInput
    create: XOR<CuidadorCreateWithoutFeedAtividadesInput, CuidadorUncheckedCreateWithoutFeedAtividadesInput>
  }

  export type IdosoUpsertWithoutFeedAtividadesInput = {
    update: XOR<IdosoUpdateWithoutFeedAtividadesInput, IdosoUncheckedUpdateWithoutFeedAtividadesInput>
    create: XOR<IdosoCreateWithoutFeedAtividadesInput, IdosoUncheckedCreateWithoutFeedAtividadesInput>
    where?: IdosoWhereInput
  }

  export type IdosoUpdateToOneWithWhereWithoutFeedAtividadesInput = {
    where?: IdosoWhereInput
    data: XOR<IdosoUpdateWithoutFeedAtividadesInput, IdosoUncheckedUpdateWithoutFeedAtividadesInput>
  }

  export type IdosoUpdateWithoutFeedAtividadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUpdateManyWithoutIdosoNestedInput
  }

  export type IdosoUncheckedUpdateWithoutFeedAtividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    condicoes_medicinais?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas?: IdosoDoencaUncheckedUpdateManyWithoutIdosoNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutIdosoNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutIdosoNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutIdosoNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutIdosoNestedInput
    relacaoCuidadores?: CuidadorIdosoUncheckedUpdateManyWithoutIdosoNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutIdosoNestedInput
  }

  export type CuidadorUpsertWithoutFeedAtividadesInput = {
    update: XOR<CuidadorUpdateWithoutFeedAtividadesInput, CuidadorUncheckedUpdateWithoutFeedAtividadesInput>
    create: XOR<CuidadorCreateWithoutFeedAtividadesInput, CuidadorUncheckedCreateWithoutFeedAtividadesInput>
    where?: CuidadorWhereInput
  }

  export type CuidadorUpdateToOneWithWhereWithoutFeedAtividadesInput = {
    where?: CuidadorWhereInput
    data: XOR<CuidadorUpdateWithoutFeedAtividadesInput, CuidadorUncheckedUpdateWithoutFeedAtividadesInput>
  }

  export type CuidadorUpdateWithoutFeedAtividadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUpdateManyWithoutCuidadorNestedInput
  }

  export type CuidadorUncheckedUpdateWithoutFeedAtividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    acompanhamentos?: AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorNestedInput
    alimentacoes?: AlimentacaoUncheckedUpdateManyWithoutCuidadorNestedInput
    prontuarios?: ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorNestedInput
    uploads?: MediaUploadUncheckedUpdateManyWithoutCuidadorNestedInput
    relacaoIdosos?: CuidadorIdosoUncheckedUpdateManyWithoutCuidadorNestedInput
    relatorios?: RelatorioUncheckedUpdateManyWithoutCuidadorNestedInput
  }

  export type IdosoDoencaUpdateWithoutIdosoInput = {
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    doenca?: DoencaUpdateOneRequiredWithoutIdososNestedInput
  }

  export type IdosoDoencaUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_doenca?: IntFieldUpdateOperationsInput | number
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdosoDoencaUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_doenca?: IntFieldUpdateOperationsInput | number
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicamentoUpdateWithoutIdosoInput = {
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicamentoUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicamentoUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_medicamento?: StringFieldUpdateOperationsInput | string
    via_administracao?: NullableStringFieldUpdateOperationsInput | string | null
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentacaoUpdateWithoutIdosoInput = {
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    cuidador?: CuidadorUpdateOneRequiredWithoutAlimentacoesNestedInput
  }

  export type AlimentacaoUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentacaoUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProntuarioDiarioUpdateWithoutIdosoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    cuidador?: CuidadorUpdateOneRequiredWithoutProntuariosNestedInput
  }

  export type ProntuarioDiarioUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProntuarioDiarioUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUploadUpdateWithoutIdosoInput = {
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cuidador?: CuidadorUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type MediaUploadUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoUpdateWithoutIdosoInput = {
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cuidador?: CuidadorUpdateOneRequiredWithoutRelacaoIdososNestedInput
  }

  export type CuidadorIdosoUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUpdateWithoutIdosoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cuidador?: CuidadorUpdateOneRequiredWithoutRelatoriosNestedInput
  }

  export type RelatorioUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeUpdateWithoutIdosoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cuidador?: CuidadorUpdateOneRequiredWithoutFeedAtividadesNestedInput
  }

  export type FeedAtividadeUncheckedUpdateWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeUncheckedUpdateManyWithoutIdosoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cuidador?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdosoDoencaUpdateWithoutDoencaInput = {
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    idoso?: IdosoUpdateOneRequiredWithoutDoencasNestedInput
  }

  export type IdosoDoencaUncheckedUpdateWithoutDoencaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdosoDoencaUncheckedUpdateManyWithoutDoencaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcompanhamentoCuidadorUpdateWithoutCuidadorInput = {
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcompanhamentoCuidadorUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcompanhamentoCuidadorUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    sono?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_energia?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlimentacaoUpdateWithoutCuidadorInput = {
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    idoso?: IdosoUpdateOneRequiredWithoutAlimentacoesNestedInput
  }

  export type AlimentacaoUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentacaoUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    refeicao?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    quantidade?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProntuarioDiarioUpdateWithoutCuidadorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    idoso?: IdosoUpdateOneRequiredWithoutProntuariosNestedInput
  }

  export type ProntuarioDiarioUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProntuarioDiarioUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    diurese?: StringFieldUpdateOperationsInput | string
    evacuacao?: StringFieldUpdateOperationsInput | string
    hidratacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUploadUpdateWithoutCuidadorInput = {
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneWithoutUploadsNestedInput
  }

  export type MediaUploadUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    id_idoso?: NullableIntFieldUpdateOperationsInput | number | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_original?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo_mime?: StringFieldUpdateOperationsInput | string
    tamanho_bytes?: IntFieldUpdateOperationsInput | number
    tipo_midia?: StringFieldUpdateOperationsInput | string
    analise?: NullableStringFieldUpdateOperationsInput | string | null
    id_idoso?: NullableIntFieldUpdateOperationsInput | number | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoUpdateWithoutCuidadorInput = {
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneRequiredWithoutRelacaoCuidadoresNestedInput
  }

  export type CuidadorIdosoUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuidadorIdosoUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    papel?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUpdateWithoutCuidadorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneRequiredWithoutRelatoriosNestedInput
  }

  export type RelatorioUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    resumo_geral?: NullableStringFieldUpdateOperationsInput | string | null
    status_geral?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeUpdateWithoutCuidadorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    idoso?: IdosoUpdateOneRequiredWithoutFeedAtividadesNestedInput
  }

  export type FeedAtividadeUncheckedUpdateWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedAtividadeUncheckedUpdateManyWithoutCuidadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_idoso?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IdosoCountOutputTypeDefaultArgs instead
     */
    export type IdosoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdosoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoencaCountOutputTypeDefaultArgs instead
     */
    export type DoencaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoencaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuidadorCountOutputTypeDefaultArgs instead
     */
    export type CuidadorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuidadorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IdosoDefaultArgs instead
     */
    export type IdosoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdosoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoencaDefaultArgs instead
     */
    export type DoencaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoencaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IdosoDoencaDefaultArgs instead
     */
    export type IdosoDoencaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdosoDoencaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicamentoDefaultArgs instead
     */
    export type MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicamentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuidadorDefaultArgs instead
     */
    export type CuidadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuidadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcompanhamentoCuidadorDefaultArgs instead
     */
    export type AcompanhamentoCuidadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcompanhamentoCuidadorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlimentacaoDefaultArgs instead
     */
    export type AlimentacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlimentacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaUploadDefaultArgs instead
     */
    export type MediaUploadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaUploadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProntuarioDiarioDefaultArgs instead
     */
    export type ProntuarioDiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProntuarioDiarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RelatorioDefaultArgs instead
     */
    export type RelatorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RelatorioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuidadorIdosoDefaultArgs instead
     */
    export type CuidadorIdosoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuidadorIdosoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedAtividadeDefaultArgs instead
     */
    export type FeedAtividadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedAtividadeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}