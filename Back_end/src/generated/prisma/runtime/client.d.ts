import { AnyNull } from '@prisma/client-runtime-utils';
import { AnyNullClass } from '@prisma/client-runtime-utils';
import { DbNull } from '@prisma/client-runtime-utils';
import { DbNullClass } from '@prisma/client-runtime-utils';
import { Decimal } from '@prisma/client-runtime-utils';
import { empty } from '@prisma/client-runtime-utils';
import { isAnyNull } from '@prisma/client-runtime-utils';
import { isDbNull } from '@prisma/client-runtime-utils';
import { isJsonNull } from '@prisma/client-runtime-utils';
import { isObjectEnumValue } from '@prisma/client-runtime-utils';
import { join } from '@prisma/client-runtime-utils';
import { JsonNull } from '@prisma/client-runtime-utils';
import { JsonNullClass } from '@prisma/client-runtime-utils';
import { NullTypes } from '@prisma/client-runtime-utils';
import { ObjectEnumValue } from '@prisma/client-runtime-utils';
import { PrismaClientInitializationError } from '@prisma/client-runtime-utils';
import { PrismaClientKnownRequestError } from '@prisma/client-runtime-utils';
import { PrismaClientRustPanicError } from '@prisma/client-runtime-utils';
import { PrismaClientUnknownRequestError } from '@prisma/client-runtime-utils';
import { PrismaClientValidationError } from '@prisma/client-runtime-utils';
import { raw } from '@prisma/client-runtime-utils';
import { RawValue } from '@prisma/client-runtime-utils';
import { Sql } from '@prisma/client-runtime-utils';
import { sql as sqltag } from '@prisma/client-runtime-utils';
import { Value } from '@prisma/client-runtime-utils';


declare function $extends(this: Client, extension: ExtensionArgs | ((client: Client) => Client)): Client;


declare interface AccelerateEngineConfig extends EngineConfig {
    
    accelerateUtils: {
        resolveDatasourceUrl: () => string;
    };
}


declare type AccelerateExtensionFetch = (url: string, options: {
    body?: string;
    method?: string;
    headers: Record<string, string>;
}) => Promise<unknown>;

declare type AccelerateExtensionFetchDecorator = (fetch: AccelerateExtensionFetch) => AccelerateExtensionFetch;

export declare type Action = keyof typeof DMMF_2.ModelAction | 'executeRaw' | 'queryRaw' | 'runCommandRaw';

declare type ActiveConnectorType = Exclude<ConnectorType, 'postgres' | 'prisma+postgres'>;


declare interface AdapterInfo {
    readonly provider: Provider;
    readonly adapterName: (typeof officialPrismaAdapters)[number] | (string & {});
}

export declare type Aggregate = '_count' | '_max' | '_min' | '_avg' | '_sum';

export declare type AllModelsToStringIndex<TypeMap extends TypeMapDef, Args extends Record<string, any>, K extends PropertyKey> = Args extends {
    [P in K]: {
        $allModels: infer AllModels;
    };
} ? {
    [P in K]: Record<TypeMap['meta']['modelProps'], AllModels>;
} : {};

export { AnyNull }

export { AnyNullClass }

export declare type ApplyOmit<T, OmitConfig> = Compute<{
    [K in keyof T as OmitValue<OmitConfig, K> extends true ? never : K]: T[K];
}>;

export declare type Args<T, F extends Operation> = T extends {
    [K: symbol]: {
        types: {
            operations: {
                [K in F]: {
                    args: any;
                };
            };
        };
    };
} ? T[symbol]['types']['operations'][F]['args'] : any;

export declare type Args_3<T, F extends Operation> = Args<T, F>;

declare type ArgScalarType = 'string' | 'int' | 'bigint' | 'float' | 'decimal' | 'boolean' | 'enum' | 'uuid' | 'json' | 'datetime' | 'bytes' | 'unknown';

declare type ArgType = {
    scalarType: ArgScalarType;
    dbType?: string;
    arity: Arity;
};

declare type Arity = 'scalar' | 'list';


declare interface Attributes {
    [attributeKey: string]: AttributeValue | undefined;
}


declare type AttributeValue = string | number | boolean | Array<null | undefined | string> | Array<null | undefined | number> | Array<null | undefined | boolean>;

export declare type BaseDMMF = {
    readonly datamodel: Omit<DMMF_2.Datamodel, 'indexes'>;
};

declare type BatchArgs = {
    queries: BatchQuery[];
    transaction?: {
        isolationLevel?: IsolationLevel_2;
    };
};

declare type BatchInternalParams = {
    requests: RequestParams[];
    customDataProxyFetch?: AccelerateExtensionFetchDecorator;
};

declare type BatchQuery = {
    model: string | undefined;
    operation: string;
    args: JsArgs | RawQueryArgs;
};

declare type BatchQueryEngineResult<T> = QueryEngineResultData<T> | Error;

declare type BatchQueryOptionsCb = (args: BatchQueryOptionsCbArgs) => Promise<any>;

declare type BatchQueryOptionsCbArgs = {
    args: BatchArgs;
    query: (args: BatchArgs, __internalParams?: BatchInternalParams) => Promise<unknown[]>;
    __internalParams: BatchInternalParams;
};

declare type BatchResponse = MultiBatchResponse | CompactedBatchResponse;

declare type BatchTransactionOptions = {
    isolationLevel?: Transaction_2.IsolationLevel;
    maxWait?: number;
    timeout?: number;
};


export declare type Bytes = ReturnType<Uint8Array['slice']>;

export declare type Call<F extends Fn, P> = (F & {
    params: P;
})['returns'];

declare interface CallSite {
    getLocation(): LocationInFile | null;
}

export declare type Cast<A, W> = A extends W ? A : W;

declare type Client = ReturnType<typeof getPrismaClient> extends new (optionsArg: PrismaClientOptions) => infer T ? T : never;

export declare type ClientArg = {
    [MethodName in string]: unknown;
};

export declare type ClientArgs = {
    client: ClientArg;
};

export declare type ClientBuiltInProp = keyof DynamicClientExtensionThisBuiltin<never, never, never>;

export declare type ClientOptionDef = undefined | {
    [K in string]: any;
};

export declare type ClientOtherOps = {
    $queryRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<T>;
    $queryRawTyped<T>(query: TypedSql<unknown[], T>): PrismaPromise<T[]>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;
    $executeRaw(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<number>;
    $executeRawUnsafe(query: string, ...values: any[]): PrismaPromise<number>;
    $runCommandRaw(command: InputJsonObject): PrismaPromise<JsonObject>;
};

declare type ColumnType = (typeof ColumnTypeEnum)[keyof typeof ColumnTypeEnum];

declare const ColumnTypeEnum: {
    readonly Int32: 0;
    readonly Int64: 1;
    readonly Float: 2;
    readonly Double: 3;
    readonly Numeric: 4;
    readonly Boolean: 5;
    readonly Character: 6;
    readonly Text: 7;
    readonly Date: 8;
    readonly Time: 9;
    readonly DateTime: 10;
    readonly Json: 11;
    readonly Enum: 12;
    readonly Bytes: 13;
    readonly Set: 14;
    readonly Uuid: 15;
    readonly Int32Array: 64;
    readonly Int64Array: 65;
    readonly FloatArray: 66;
    readonly DoubleArray: 67;
    readonly NumericArray: 68;
    readonly BooleanArray: 69;
    readonly CharacterArray: 70;
    readonly TextArray: 71;
    readonly DateArray: 72;
    readonly TimeArray: 73;
    readonly DateTimeArray: 74;
    readonly JsonArray: 75;
    readonly EnumArray: 76;
    readonly BytesArray: 77;
    readonly UuidArray: 78;
    readonly UnknownNumber: 128;
};

declare type CompactedBatchResponse = {
    type: 'compacted';
    plan: QueryPlanNode;
    arguments: Record<string, {}>[];
    nestedSelection: string[];
    keys: string[];
    expectNonEmpty: boolean;
};

declare type CompilerWasmLoadingConfig = {
    
    getRuntime: () => Promise<{
        __wbg_set_wasm(exports: unknown): void;
        QueryCompiler: QueryCompilerConstructor;
    }>;
    
    getQueryCompilerWasmModule: () => Promise<unknown>;
    importName: string;
};

export declare type Compute<T> = T extends Function ? T : {
    [K in keyof T]: T[K];
} & unknown;

export declare type ComputeDeep<T> = T extends Function ? T : {
    [K in keyof T]: ComputeDeep<T[K]>;
} & unknown;

declare type ComputedField = {
    name: string;
    needs: string[];
    compute: ResultArgsFieldCompute;
};

declare type ComputedFieldsMap = {
    [fieldName: string]: ComputedField;
};

declare type ConnectionInfo = {
    schemaName?: string;
    maxBindValues?: number;
    supportsRelationJoins: boolean;
};

declare type ConnectorType = 'mysql' | 'mongodb' | 'sqlite' | 'postgresql' | 'postgres' | 'prisma+postgres' | 'sqlserver' | 'cockroachdb';

declare interface Context {
    
    getValue(key: symbol): unknown;
    
    setValue(key: symbol, value: unknown): Context;
    
    deleteValue(key: symbol): Context;
}

declare type Context_2<T> = T extends {
    [K: symbol]: {
        ctx: infer C;
    };
} ? C & T & {
    
    name?: string;
    $name?: string;
    $parent?: unknown;
} : T & {
    
    name?: string;
    $name?: string;
    $parent?: unknown;
};

export declare type Count<O> = {
    [K in keyof O]: Count<number>;
} & {};

export declare function createParam(name: string): Param<unknown, string>;

declare class DataLoader<T = unknown> {
    private options;
    batches: {
        [key: string]: Job[];
    };
    private tickActive;
    constructor(options: DataLoaderOptions<T>);
    request(request: T): Promise<any>;
    private dispatchBatches;
    get [Symbol.toStringTag](): string;
}

declare type DataLoaderOptions<T> = {
    singleLoader: (request: T) => Promise<any>;
    batchLoader: (request: T[]) => Promise<any[]>;
    batchBy: (request: T) => string | undefined;
    batchOrder: (requestA: T, requestB: T) => number;
};

declare type Datamodel = ReadonlyDeep_2<{
    models: Model[];
    enums: DatamodelEnum[];
    types: Model[];
    indexes: Index[];
}>;

declare type DatamodelEnum = ReadonlyDeep_2<{
    name: string;
    values: EnumValue[];
    dbName?: string | null;
    documentation?: string;
}>;

declare function datamodelEnumToSchemaEnum(datamodelEnum: DatamodelEnum): SchemaEnum;

declare type DataRule = {
    type: 'rowCountEq';
    args: number;
} | {
    type: 'rowCountNeq';
    args: number;
} | {
    type: 'affectedRowCountEq';
    args: number;
} | {
    type: 'never';
};

export { DbNull }

export { DbNullClass }

export declare const Debug: typeof debugCreate & {
    enable(namespace: any): void;
    disable(): any;
    enabled(namespace: string): boolean;
    log: (...args: string[]) => void;
    formatters: {};
};


declare function debugCreate(namespace: string): ((...args: any[]) => void) & {
    color: string;
    enabled: boolean;
    namespace: string;
    log: (...args: string[]) => void;
    extend: () => void;
};

export { Decimal }


export declare interface DecimalJsLike {
    d: number[];
    e: number;
    s: number;
    toFixed(): string;
}

export declare type DefaultArgs = InternalArgs<{}, {}, {}, {}>;

export declare type DefaultSelection<Payload extends OperationPayload, Args = {}, GlobalOmitOptions = {}> = Args extends {
    omit: infer LocalOmit;
} ? ApplyOmit<UnwrapPayload<{
    default: Payload;
}>['default'], PatchFlat<LocalOmit, ExtractGlobalOmit<GlobalOmitOptions, Uncapitalize<Payload['name']>>>> : ApplyOmit<UnwrapPayload<{
    default: Payload;
}>['default'], ExtractGlobalOmit<GlobalOmitOptions, Uncapitalize<Payload['name']>>>;

export declare function defineDmmfProperty(target: object, runtimeDataModel: RuntimeDataModel): void;

declare function defineExtension(ext: ExtensionArgs | ((client: Client) => Client)): (client: Client) => Client;

declare const denylist: readonly ["$connect", "$disconnect", "$on", "$use", "$extends"];

declare type Deprecation = ReadonlyDeep_2<{
    sinceVersion: string;
    reason: string;
    plannedRemovalVersion?: string;
}>;

declare type DeserializedResponse = Array<Record<string, unknown>>;

export declare function deserializeJsonObject(result: unknown): unknown;

export declare function deserializeRawResult(response: RawResponse): DeserializedResponse;

export declare type DevTypeMapDef = {
    meta: {
        modelProps: string;
    };
    model: {
        [Model in PropertyKey]: {
            [Operation in PropertyKey]: DevTypeMapFnDef;
        };
    };
    other: {
        [Operation in PropertyKey]: DevTypeMapFnDef;
    };
};

export declare type DevTypeMapFnDef = {
    args: any;
    result: any;
    payload: OperationPayload;
};

export declare namespace DMMF {
    export {
        datamodelEnumToSchemaEnum,
        Datamodel,
        DatamodelEnum,
        Deprecation,
        Document_2 as Document,
        EnumValue,
        Field,
        FieldDefault,
        FieldDefaultScalar,
        FieldKind,
        FieldLocation,
        FieldNamespace,
        FieldRefAllowType,
        FieldRefType,
        Index,
        IndexField,
        IndexType,
        InputType,
        InputTypeRef,
        Mappings,
        Model,
        ModelAction,
        ModelMapping,
        OtherOperationMappings,
        OutputType,
        OutputTypeRef,
        PrimaryKey,
        Query,
        QueryOutput,
        ReadonlyDeep_2 as ReadonlyDeep,
        Schema,
        SchemaArg,
        SchemaEnum,
        SchemaField,
        SortOrder,
        TypeRef,
        uniqueIndex
    }
}

declare namespace DMMF_2 {
    export {
        datamodelEnumToSchemaEnum,
        Datamodel,
        DatamodelEnum,
        Deprecation,
        Document_2 as Document,
        EnumValue,
        Field,
        FieldDefault,
        FieldDefaultScalar,
        FieldKind,
        FieldLocation,
        FieldNamespace,
        FieldRefAllowType,
        FieldRefType,
        Index,
        IndexField,
        IndexType,
        InputType,
        InputTypeRef,
        Mappings,
        Model,
        ModelAction,
        ModelMapping,
        OtherOperationMappings,
        OutputType,
        OutputTypeRef,
        PrimaryKey,
        Query,
        QueryOutput,
        ReadonlyDeep_2 as ReadonlyDeep,
        Schema,
        SchemaArg,
        SchemaEnum,
        SchemaField,
        SortOrder,
        TypeRef,
        uniqueIndex
    }
}

export declare function dmmfToRuntimeDataModel(dmmfDataModel: DMMF_2.Datamodel): RuntimeDataModel;

declare type Document_2 = ReadonlyDeep_2<{
    datamodel: Datamodel;
    schema: Schema;
    mappings: Mappings;
}>;


declare interface DriverAdapterFactory<Query, Result> extends AdapterInfo {
    
    connect(): Promise<Queryable<Query, Result>>;
}

declare type DynamicArgType = ArgType | {
    arity: 'tuple';
    elements: ArgType[];
};


export declare type DynamicClientExtensionArgs<C_, TypeMap extends TypeMapDef, TypeMapCb extends TypeMapCbDef, ExtArgs extends Record<string, any>> = {
    [P in keyof C_]: unknown;
} & {
    [K: symbol]: {
        ctx: Optional<DynamicClientExtensionThis<TypeMap, TypeMapCb, ExtArgs>, ITXClientDenyList> & {
            $parent: Optional<DynamicClientExtensionThis<TypeMap, TypeMapCb, ExtArgs>, ITXClientDenyList>;
        };
    };
};

export declare type DynamicClientExtensionThis<TypeMap extends TypeMapDef, TypeMapCb extends TypeMapCbDef, ExtArgs extends Record<string, any>> = {
    [P in keyof ExtArgs['client']]: Return<ExtArgs['client'][P]>;
} & {
    [P in Exclude<TypeMap['meta']['modelProps'], keyof ExtArgs['client']>]: DynamicModelExtensionThis<TypeMap, ModelKey<TypeMap, P>, ExtArgs>;
} & {
    [P in Exclude<keyof TypeMap['other']['operations'], keyof ExtArgs['client']>]: P extends keyof ClientOtherOps ? ClientOtherOps[P] : never;
} & {
    [P in Exclude<ClientBuiltInProp, keyof ExtArgs['client']>]: DynamicClientExtensionThisBuiltin<TypeMap, TypeMapCb, ExtArgs>[P];
} & {
    [K: symbol]: {
        types: TypeMap['other'];
    };
};

export declare type DynamicClientExtensionThisBuiltin<TypeMap extends TypeMapDef, TypeMapCb extends TypeMapCbDef, ExtArgs extends Record<string, any>> = {
    $extends: ExtendsHook<'extends', TypeMapCb, ExtArgs, Call<TypeMapCb, {
        extArgs: ExtArgs;
    }>>;
    $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TypeMap['meta']['txIsolationLevel'];
    }): Promise<UnwrapTuple<P>>;
    $transaction<R>(fn: (client: Omit<DynamicClientExtensionThis<TypeMap, TypeMapCb, ExtArgs>, ITXClientDenyList>) => Promise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TypeMap['meta']['txIsolationLevel'];
    }): Promise<R>;
    $disconnect(): Promise<void>;
    $connect(): Promise<void>;
};


export declare type DynamicModelExtensionArgs<M_, TypeMap extends TypeMapDef, TypeMapCb extends TypeMapCbDef, ExtArgs extends Record<string, any>> = {
    [K in keyof M_]: K extends '$allModels' ? {
        [P in keyof M_[K]]?: unknown;
    } & {
        [K: symbol]: {};
    } : K extends TypeMap['meta']['modelProps'] ? {
        [P in keyof M_[K]]?: unknown;
    } & {
        [K: symbol]: {
            ctx: DynamicModelExtensionThis<TypeMap, ModelKey<TypeMap, K>, ExtArgs> & {
                $parent: DynamicClientExtensionThis<TypeMap, TypeMapCb, ExtArgs>;
            } & {
                $name: ModelKey<TypeMap, K>;
            } & {
                
                name: ModelKey<TypeMap, K>;
            };
        };
    } : never;
};

export declare type DynamicModelExtensionFluentApi<TypeMap extends TypeMapDef, M extends PropertyKey, P extends PropertyKey, Null> = {
    [K in keyof TypeMap['model'][M]['payload']['objects']]: <A>(args?: Exact<A, Path<TypeMap['model'][M]['operations'][P]['args']['select'], [K]>>) => PrismaPromise<Path<DynamicModelExtensionFnResultBase<TypeMap, M, {
        select: {
            [P in K]: A;
        };
    }, P>, [K]> | Null> & DynamicModelExtensionFluentApi<TypeMap, (TypeMap['model'][M]['payload']['objects'][K] & {})['name'], P, Null | Select<TypeMap['model'][M]['payload']['objects'][K], null>>;
};

export declare type DynamicModelExtensionFnResult<TypeMap extends TypeMapDef, M extends PropertyKey, A, P extends PropertyKey, Null> = P extends FluentOperation ? DynamicModelExtensionFluentApi<TypeMap, M, P, Null> & PrismaPromise<DynamicModelExtensionFnResultBase<TypeMap, M, A, P> | Null> : PrismaPromise<DynamicModelExtensionFnResultBase<TypeMap, M, A, P>>;

export declare type DynamicModelExtensionFnResultBase<TypeMap extends TypeMapDef, M extends PropertyKey, A, P extends PropertyKey> = GetResult<TypeMap['model'][M]['payload'], A, P & Operation, TypeMap['globalOmitOptions']>;

export declare type DynamicModelExtensionFnResultNull<P extends PropertyKey> = P extends 'findUnique' | 'findFirst' ? null : never;

export declare type DynamicModelExtensionOperationFn<TypeMap extends TypeMapDef, M extends PropertyKey, P extends PropertyKey> = {} extends TypeMap['model'][M]['operations'][P]['args'] ? <A extends TypeMap['model'][M]['operations'][P]['args']>(args?: Exact<A, TypeMap['model'][M]['operations'][P]['args']>) => DynamicModelExtensionFnResult<TypeMap, M, A, P, DynamicModelExtensionFnResultNull<P>> : <A extends TypeMap['model'][M]['operations'][P]['args']>(args: Exact<A, TypeMap['model'][M]['operations'][P]['args']>) => DynamicModelExtensionFnResult<TypeMap, M, A, P, DynamicModelExtensionFnResultNull<P>>;

export declare type DynamicModelExtensionThis<TypeMap extends TypeMapDef, M extends PropertyKey, ExtArgs extends Record<string, any>> = {
    [P in keyof ExtArgs['model'][Uncapitalize<M & string>]]: Return<ExtArgs['model'][Uncapitalize<M & string>][P]>;
} & {
    [P in Exclude<keyof TypeMap['model'][M]['operations'], keyof ExtArgs['model'][Uncapitalize<M & string>]>]: DynamicModelExtensionOperationFn<TypeMap, M, P>;
} & {
    [P in Exclude<'fields', keyof ExtArgs['model'][Uncapitalize<M & string>]>]: TypeMap['model'][M]['fields'];
} & {
    [K: symbol]: {
        types: TypeMap['model'][M];
    };
};


export declare type DynamicQueryExtensionArgs<Q_, TypeMap extends TypeMapDef> = {
    [K in keyof Q_]: K extends '$allOperations' ? (args: {
        model?: string;
        operation: string;
        args: any;
        query: (args: any) => PrismaPromise<any>;
    }) => Promise<any> : K extends '$allModels' ? {
        [P in keyof Q_[K] | keyof TypeMap['model'][keyof TypeMap['model']]['operations'] | '$allOperations']?: P extends '$allOperations' ? DynamicQueryExtensionCb<TypeMap, 'model', keyof TypeMap['model'], keyof TypeMap['model'][keyof TypeMap['model']]['operations']> : P extends keyof TypeMap['model'][keyof TypeMap['model']]['operations'] ? DynamicQueryExtensionCb<TypeMap, 'model', keyof TypeMap['model'], P> : never;
    } : K extends TypeMap['meta']['modelProps'] ? {
        [P in keyof Q_[K] | keyof TypeMap['model'][ModelKey<TypeMap, K>]['operations'] | '$allOperations']?: P extends '$allOperations' ? DynamicQueryExtensionCb<TypeMap, 'model', ModelKey<TypeMap, K>, keyof TypeMap['model'][ModelKey<TypeMap, K>]['operations']> : P extends keyof TypeMap['model'][ModelKey<TypeMap, K>]['operations'] ? DynamicQueryExtensionCb<TypeMap, 'model', ModelKey<TypeMap, K>, P> : never;
    } : K extends keyof TypeMap['other']['operations'] ? DynamicQueryExtensionCb<[TypeMap], 0, 'other', K> : never;
};

export declare type DynamicQueryExtensionCb<TypeMap extends TypeMapDef, _0 extends PropertyKey, _1 extends PropertyKey, _2 extends PropertyKey> = <A extends DynamicQueryExtensionCbArgs<TypeMap, _0, _1, _2>>(args: A) => Promise<TypeMap[_0][_1][_2]['result']>;

export declare type DynamicQueryExtensionCbArgs<TypeMap extends TypeMapDef, _0 extends PropertyKey, _1 extends PropertyKey, _2 extends PropertyKey> = (_1 extends unknown ? _2 extends unknown ? {
    args: DynamicQueryExtensionCbArgsArgs<TypeMap, _0, _1, _2>;
    model: _0 extends 0 ? undefined : _1;
    operation: _2;
    query: <A extends DynamicQueryExtensionCbArgsArgs<TypeMap, _0, _1, _2>>(args: A) => PrismaPromise<TypeMap[_0][_1]['operations'][_2]['result']>;
} : never : never) & {
    query: (args: DynamicQueryExtensionCbArgsArgs<TypeMap, _0, _1, _2>) => PrismaPromise<TypeMap[_0][_1]['operations'][_2]['result']>;
};

export declare type DynamicQueryExtensionCbArgsArgs<TypeMap extends TypeMapDef, _0 extends PropertyKey, _1 extends PropertyKey, _2 extends PropertyKey> = _2 extends '$queryRaw' | '$executeRaw' ? Sql : TypeMap[_0][_1]['operations'][_2]['args'];


export declare type DynamicResultExtensionArgs<R_, TypeMap extends TypeMapDef> = {
    [K in keyof R_]: {
        [P in keyof R_[K]]?: {
            needs?: DynamicResultExtensionNeeds<TypeMap, ModelKey<TypeMap, K>, R_[K][P]>;
            compute(data: DynamicResultExtensionData<TypeMap, ModelKey<TypeMap, K>, R_[K][P]>): any;
        };
    };
};

export declare type DynamicResultExtensionData<TypeMap extends TypeMapDef, M extends PropertyKey, S> = GetFindResult<TypeMap['model'][M]['payload'], {
    select: S;
}, {}>;

export declare type DynamicResultExtensionNeeds<TypeMap extends TypeMapDef, M extends PropertyKey, S> = {
    [K in keyof S]: K extends keyof TypeMap['model'][M]['payload']['scalars'] ? S[K] : never;
} & {
    [N in keyof TypeMap['model'][M]['payload']['scalars']]?: boolean;
};

export { empty }

export declare type EmptyToUnknown<T> = T;

declare interface Engine<InteractiveTransactionPayload = unknown> {
    
    readonly name: string;
    onBeforeExit(callback: () => Promise<void>): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    version(forceRun?: boolean): Promise<string> | string;
    request<T>(query: JsonQuery, options: RequestOptions<InteractiveTransactionPayload>): Promise<QueryEngineResultData<T>>;
    requestBatch<T>(queries: JsonQuery[], options: RequestBatchOptions<InteractiveTransactionPayload>): Promise<BatchQueryEngineResult<T>[]>;
    transaction(action: 'start', headers: Transaction_2.TransactionHeaders, options: Transaction_2.Options): Promise<Transaction_2.InteractiveTransactionInfo<unknown>>;
    transaction(action: 'commit', headers: Transaction_2.TransactionHeaders, info: Transaction_2.InteractiveTransactionInfo<unknown>): Promise<void>;
    transaction(action: 'rollback', headers: Transaction_2.TransactionHeaders, info: Transaction_2.InteractiveTransactionInfo<unknown>): Promise<void>;
}

declare interface EngineConfig {
    enableDebugLogs?: boolean;
    prismaPath?: string;
    logQueries?: boolean;
    logLevel?: 'info' | 'warn';
    clientVersion: string;
    previewFeatures?: string[];
    activeProvider?: string;
    logEmitter: LogEmitter;
    transactionOptions: Transaction_2.Options;
    
    adapter?: SqlDriverAdapterFactory;
    
    accelerateUrl?: string;
    
    inlineSchema: string;
    
    tracingHelper: TracingHelper;
    
    compilerWasm?: CompilerWasmLoadingConfig;
    
    sqlCommenters?: SqlCommenterPlugin[];
    
    parameterizationSchema: SerializedParamGraph;
    
    runtimeDataModel: RuntimeDataModel;
    
    queryPlanCacheMaxSize?: number;
}

declare type EngineEvent<E extends EngineEventType> = E extends QueryEventType ? QueryEvent : LogEvent;

declare type EngineEventType = QueryEventType | LogEventType;

declare type EngineSpan = {
    id: EngineSpanId;
    parentId: string | null;
    name: string;
    startTime: HrTime;
    endTime: HrTime;
    kind: EngineSpanKind;
    attributes?: Record<string, unknown>;
    links?: EngineSpanId[];
};

declare type EngineSpanId = string;

declare type EngineSpanKind = 'client' | 'internal';

declare type EnumValue = ReadonlyDeep_2<{
    name: string;
    dbName: string | null;
}>;

export declare type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? 1 : 0;

declare type ErrorFormat = 'pretty' | 'colorless' | 'minimal';

declare type EventCallback<E extends ExtendedEventType> = [E] extends ['beforeExit'] ? () => Promise<void> : [E] extends [LogLevel] ? (event: EngineEvent<E>) => void : never;

export declare type Exact<A, W> = (A extends unknown ? (W extends A ? {
    [K in keyof A]: Exact<A[K], W[K]>;
} : W) : never) | (A extends Narrowable ? A : never);


declare type Exception = ExceptionWithCode | ExceptionWithMessage | ExceptionWithName | string;

declare interface ExceptionWithCode {
    code: string | number;
    name?: string;
    message?: string;
    stack?: string;
}

declare interface ExceptionWithMessage {
    code?: string | number;
    message: string;
    name?: string;
    stack?: string;
}

declare interface ExceptionWithName {
    code?: string | number;
    message?: string;
    name: string;
    stack?: string;
}

declare type ExtendedEventType = LogLevel | 'beforeExit';

declare interface ExtendedSpanOptions extends SpanOptions {
    
    name: string;
    internal?: boolean;
    
    active?: boolean;
    
    context?: Context;
}


export declare interface ExtendsHook<Variant extends 'extends' | 'define', TypeMapCb extends TypeMapCbDef, ExtArgs extends Record<string, any>, TypeMap extends TypeMapDef = Call<TypeMapCb, {
    extArgs: ExtArgs;
}>> {
    extArgs: ExtArgs;
    <R_ extends {
        [K in TypeMap['meta']['modelProps'] | '$allModels']?: unknown;
    }, R, M_ extends {
        [K in TypeMap['meta']['modelProps'] | '$allModels']?: unknown;
    }, M, Q_ extends {
        [K in TypeMap['meta']['modelProps'] | '$allModels' | keyof TypeMap['other']['operations'] | '$allOperations']?: unknown;
    }, C_ extends {
        [K in string]?: unknown;
    }, C, Args extends InternalArgs = InternalArgs<R, M, {}, C>, MergedArgs extends InternalArgs = MergeExtArgs<TypeMap, ExtArgs, Args>>(extension: ((client: DynamicClientExtensionThis<TypeMap, TypeMapCb, ExtArgs>) => {
        $extends: {
            extArgs: Args;
        };
    }) | {
        name?: string;
        query?: DynamicQueryExtensionArgs<Q_, TypeMap>;
        result?: DynamicResultExtensionArgs<R_, TypeMap> & R;
        model?: DynamicModelExtensionArgs<M_, TypeMap, TypeMapCb, ExtArgs> & M;
        client?: DynamicClientExtensionArgs<C_, TypeMap, TypeMapCb, ExtArgs> & C;
    }): {
        extends: DynamicClientExtensionThis<Call<TypeMapCb, {
            extArgs: MergedArgs;
        }>, TypeMapCb, MergedArgs>;
        define: (client: any) => {
            $extends: {
                extArgs: Args;
            };
        };
    }[Variant];
}

export declare type ExtensionArgs = Optional<RequiredExtensionArgs>;

declare namespace Extensions {
    export {
        defineExtension,
        getExtensionContext
    }
}
export { Extensions }

declare namespace Extensions_2 {
    export {
        InternalArgs,
        DefaultArgs,
        GetPayloadResultExtensionKeys,
        GetPayloadResultExtensionObject,
        GetPayloadResult,
        GetSelect,
        GetOmit,
        DynamicQueryExtensionArgs,
        DynamicQueryExtensionCb,
        DynamicQueryExtensionCbArgs,
        DynamicQueryExtensionCbArgsArgs,
        DynamicResultExtensionArgs,
        DynamicResultExtensionNeeds,
        DynamicResultExtensionData,
        DynamicModelExtensionArgs,
        DynamicModelExtensionThis,
        DynamicModelExtensionOperationFn,
        DynamicModelExtensionFnResult,
        DynamicModelExtensionFnResultBase,
        DynamicModelExtensionFluentApi,
        DynamicModelExtensionFnResultNull,
        DynamicClientExtensionArgs,
        DynamicClientExtensionThis,
        ClientBuiltInProp,
        DynamicClientExtensionThisBuiltin,
        ExtendsHook,
        MergeExtArgs,
        AllModelsToStringIndex,
        TypeMapDef,
        DevTypeMapDef,
        DevTypeMapFnDef,
        ClientOptionDef,
        ClientOtherOps,
        TypeMapCbDef,
        ModelKey,
        RequiredExtensionArgs as UserArgs
    }
}

export declare type ExtractGlobalOmit<Options, ModelName extends string> = Options extends {
    omit: {
        [K in ModelName]: infer GlobalOmit;
    };
} ? GlobalOmit : {};

declare type Field = ReadonlyDeep_2<{
    kind: FieldKind;
    name: string;
    isRequired: boolean;
    isList: boolean;
    isUnique: boolean;
    isId: boolean;
    isReadOnly: boolean;
    isGenerated?: boolean;
    isUpdatedAt?: boolean;
    
    type: string;
    
    nativeType?: [string, string[]] | null;
    dbName?: string | null;
    hasDefaultValue: boolean;
    default?: FieldDefault | FieldDefaultScalar | FieldDefaultScalar[];
    relationFromFields?: string[];
    relationToFields?: string[];
    relationOnDelete?: string;
    relationOnUpdate?: string;
    relationName?: string;
    documentation?: string;
}>;

declare type FieldDefault = ReadonlyDeep_2<{
    name: string;
    args: Array<string | number>;
}>;

declare type FieldDefaultScalar = string | boolean | number;

declare type FieldInitializer = {
    type: 'value';
    value: PrismaValue;
} | {
    type: 'lastInsertId';
};

declare type FieldKind = 'scalar' | 'object' | 'enum' | 'unsupported';

declare type FieldLocation = 'scalar' | 'inputObjectTypes' | 'outputObjectTypes' | 'enumTypes' | 'fieldRefTypes';

declare type FieldNamespace = 'model' | 'prisma';

declare type FieldOperation = {
    type: 'set';
    value: PrismaValue;
} | {
    type: 'add';
    value: PrismaValue;
} | {
    type: 'subtract';
    value: PrismaValue;
} | {
    type: 'multiply';
    value: PrismaValue;
} | {
    type: 'divide';
    value: PrismaValue;
};


export declare interface FieldRef<Model, FieldType> {
    readonly modelName: Model;
    readonly name: string;
    readonly typeName: FieldType;
    readonly isList: boolean;
}

declare type FieldRefAllowType = TypeRef<'scalar' | 'enumTypes'>;

declare type FieldRefType = ReadonlyDeep_2<{
    name: string;
    allowTypes: FieldRefAllowType[];
    fields: SchemaArg[];
}>;

declare type FieldScalarType = {
    type: 'string' | 'int' | 'bigint' | 'float' | 'boolean' | 'json' | 'object' | 'datetime' | 'decimal' | 'unsupported';
} | {
    type: 'enum';
    name: string;
} | {
    type: 'bytes';
    encoding: 'array' | 'base64' | 'hex';
};

declare type FieldType = {
    arity: Arity;
} & FieldScalarType;

declare type FluentOperation = 'findUnique' | 'findUniqueOrThrow' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'update' | 'upsert' | 'delete';

export declare interface Fn<Params = unknown, Returns = unknown> {
    params: Params;
    returns: Returns;
}

declare type Fragment = {
    type: 'stringChunk';
    chunk: string;
} | {
    type: 'parameter';
} | {
    type: 'parameterTuple';
    itemPrefix: string;
    itemSeparator: string;
    itemSuffix: string;
} | {
    type: 'parameterTupleList';
    itemPrefix: string;
    itemSeparator: string;
    itemSuffix: string;
    groupSeparator: string;
};

export declare type GetAggregateResult<P extends OperationPayload, A> = {
    [K in keyof A as K extends Aggregate ? K : never]: K extends '_count' ? A[K] extends true ? number : Count<A[K]> : {
        [J in keyof A[K] & string]: P['scalars'][J] | null;
    };
};

export declare type GetBatchResult = {
    count: number;
};

export declare type GetCountResult<A> = A extends {
    select: infer S;
} ? (S extends true ? number : Count<S>) : number;

declare function getExtensionContext<T>(that: T): Context_2<T>;

export declare type GetFindResult<P extends OperationPayload, A, GlobalOmitOptions> = Equals<A, any> extends 1 ? DefaultSelection<P, A, GlobalOmitOptions> : A extends {
    select: infer S extends object;
} & Record<string, unknown> | {
    include: infer I extends object;
} & Record<string, unknown> ? {
    [K in keyof S | keyof I as (S & I)[K] extends false | undefined | Skip | null ? never : K]: (S & I)[K] extends object ? P extends SelectablePayloadFields<K, (infer O)[]> ? O extends OperationPayload ? GetFindResult<O, (S & I)[K], GlobalOmitOptions>[] : never : P extends SelectablePayloadFields<K, infer O | null> ? O extends OperationPayload ? GetFindResult<O, (S & I)[K], GlobalOmitOptions> | SelectField<P, K> & null : never : K extends '_count' ? Count<GetFindResult<P, (S & I)[K], GlobalOmitOptions>> : never : P extends SelectablePayloadFields<K, (infer O)[]> ? O extends OperationPayload ? DefaultSelection<O, {}, GlobalOmitOptions>[] : never : P extends SelectablePayloadFields<K, infer O | null> ? O extends OperationPayload ? DefaultSelection<O, {}, GlobalOmitOptions> | SelectField<P, K> & null : never : P extends {
        scalars: {
            [k in K]: infer O;
        };
    } ? O : K extends '_count' ? Count<P['objects']> : never;
} & (A extends {
    include: any;
} & Record<string, unknown> ? DefaultSelection<P, A & {
    omit: A['omit'];
}, GlobalOmitOptions> : unknown) : DefaultSelection<P, A, GlobalOmitOptions>;

export declare type GetGroupByResult<P extends OperationPayload, A> = A extends {
    by: string[];
} ? Array<GetAggregateResult<P, A> & {
    [K in A['by'][number]]: P['scalars'][K];
}> : A extends {
    by: string;
} ? Array<GetAggregateResult<P, A> & {
    [K in A['by']]: P['scalars'][K];
}> : {}[];

export declare type GetOmit<BaseKeys extends string, R extends InternalArgs['result'][string], ExtraType = never> = {
    [K in (string extends keyof R ? never : keyof R) | BaseKeys]?: boolean | ExtraType;
};

export declare type GetPayloadResult<Base extends Record<any, any>, R extends InternalArgs['result'][string]> = Omit<Base, GetPayloadResultExtensionKeys<R>> & GetPayloadResultExtensionObject<R>;

export declare type GetPayloadResultExtensionKeys<R extends InternalArgs['result'][string], KR extends keyof R = string extends keyof R ? never : keyof R> = KR;

export declare type GetPayloadResultExtensionObject<R extends InternalArgs['result'][string]> = {
    [K in GetPayloadResultExtensionKeys<R>]: R[K] extends () => {
        compute: (...args: any) => infer C;
    } ? C : never;
};

export declare function getPrismaClient(config: GetPrismaClientConfig): {
    new (optionsArg: PrismaClientOptions): {
        _originalClient: any;
        _runtimeDataModel: RuntimeDataModel;
        _requestHandler: RequestHandler;
        _connectionPromise?: Promise<any> | undefined;
        _disconnectionPromise?: Promise<any> | undefined;
        _engineConfig: EngineConfig;
        _accelerateEngineConfig: AccelerateEngineConfig;
        _clientVersion: string;
        _errorFormat: ErrorFormat;
        _tracingHelper: TracingHelper;
        _previewFeatures: string[];
        _activeProvider: string;
        _globalOmit?: GlobalOmitOptions | undefined;
        _extensions: MergedExtensionsList;
        
        _engine: Engine;
        
        _appliedParent: any;
        _createPrismaPromise: PrismaPromiseFactory;
        $on<E extends ExtendedEventType>(eventType: E, callback: EventCallback<E>): any;
        $connect(): Promise<void>;
        
        $disconnect(): Promise<void>;
        
        $executeRawInternal(transaction: PrismaPromiseTransaction | undefined, clientMethod: string, args: RawQueryArgs, middlewareArgsMapper?: MiddlewareArgsMapper<unknown, unknown>): Promise<number>;
        
        $executeRaw(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise_2<unknown, any>;
        
        $executeRawUnsafe(query: string, ...values: RawValue[]): PrismaPromise_2<unknown, any>;
        
        $runCommandRaw(command: Record<string, JsInputValue>): PrismaPromise_2<unknown, any>;
        
        $queryRawInternal(transaction: PrismaPromiseTransaction | undefined, clientMethod: string, args: RawQueryArgs, middlewareArgsMapper?: MiddlewareArgsMapper<unknown, unknown>): Promise<any>;
        
        $queryRaw(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise_2<unknown, any>;
        
        $queryRawTyped(typedSql: UnknownTypedSql): PrismaPromise_2<unknown, any>;
        
        $queryRawUnsafe(query: string, ...values: RawValue[]): PrismaPromise_2<unknown, any>;
        
        _transactionWithArray({ promises, options, }: {
            promises: Array<PrismaPromise_2<any>>;
            options?: BatchTransactionOptions;
        }): Promise<any>;
        
        _transactionWithCallback({ callback, options, }: {
            callback: (client: Client) => Promise<unknown>;
            options?: Options;
        }): Promise<unknown>;
        _createItxClient(transaction: PrismaPromiseInteractiveTransaction, scopeId: string, scopeState: ItxScopeState): Client;
        
        $transaction(input: any, options?: any): Promise<any>;
        
        _request(internalParams: InternalRequestParams): Promise<any>;
        _executeRequest({ args, clientMethod, dataPath, callsite, action, model, argsMapper, transaction, unpacker, otelParentCtx, customDataProxyFetch, }: InternalRequestParams): Promise<any>;
        
        _hasPreviewFlag(feature: string): boolean;
        $extends: typeof $extends;
        readonly [Symbol.toStringTag]: string;
    };
};


export declare type GetPrismaClientConfig = {
    runtimeDataModel: RuntimeDataModel;
    previewFeatures: string[];
    clientVersion: string;
    engineVersion: string;
    activeProvider: ActiveConnectorType;
    
    inlineSchema: string;
    
    compilerWasm?: CompilerWasmLoadingConfig;
    
    parameterizationSchema: SerializedParamGraph;
};

export declare type GetResult<Payload extends OperationPayload, Args, OperationName extends Operation = 'findUniqueOrThrow', GlobalOmitOptions = {}> = {
    findUnique: GetFindResult<Payload, Args, GlobalOmitOptions> | null;
    findUniqueOrThrow: GetFindResult<Payload, Args, GlobalOmitOptions>;
    findFirst: GetFindResult<Payload, Args, GlobalOmitOptions> | null;
    findFirstOrThrow: GetFindResult<Payload, Args, GlobalOmitOptions>;
    findMany: GetFindResult<Payload, Args, GlobalOmitOptions>[];
    create: GetFindResult<Payload, Args, GlobalOmitOptions>;
    createMany: GetBatchResult;
    createManyAndReturn: GetFindResult<Payload, Args, GlobalOmitOptions>[];
    update: GetFindResult<Payload, Args, GlobalOmitOptions>;
    updateMany: GetBatchResult;
    updateManyAndReturn: GetFindResult<Payload, Args, GlobalOmitOptions>[];
    upsert: GetFindResult<Payload, Args, GlobalOmitOptions>;
    delete: GetFindResult<Payload, Args, GlobalOmitOptions>;
    deleteMany: GetBatchResult;
    aggregate: GetAggregateResult<Payload, Args>;
    count: GetCountResult<Args>;
    groupBy: GetGroupByResult<Payload, Args>;
    $queryRaw: unknown;
    $queryRawTyped: unknown;
    $executeRaw: number;
    $queryRawUnsafe: unknown;
    $executeRawUnsafe: number;
    $runCommandRaw: JsonObject;
    findRaw: JsonObject;
    aggregateRaw: JsonObject;
}[OperationName];

export declare function getRuntime(): GetRuntimeOutput;

declare type GetRuntimeOutput = {
    id: RuntimeName;
    prettyName: string;
    isEdge: boolean;
};

export declare type GetSelect<Base extends Record<any, any>, R extends InternalArgs['result'][string], KR extends keyof R = string extends keyof R ? never : keyof R> = {
    [K in KR | keyof Base]?: K extends KR ? boolean : Base[K];
};

declare type GlobalOmitOptions = {
    [modelName: string]: {
        [fieldName: string]: boolean;
    };
};

declare type HandleErrorParams = {
    args: JsArgs;
    error: any;
    clientMethod: string;
    callsite?: CallSite;
    transaction?: PrismaPromiseTransaction;
    modelName?: string;
    globalOmit?: GlobalOmitOptions;
};

declare type HrTime = [number, number];


declare type HrTime_2 = [number, number];

declare type Index = ReadonlyDeep_2<{
    model: string;
    type: IndexType;
    isDefinedOnField: boolean;
    name?: string;
    dbName?: string;
    algorithm?: string;
    clustered?: boolean;
    fields: IndexField[];
}>;

declare type IndexField = ReadonlyDeep_2<{
    name: string;
    sortOrder?: SortOrder;
    length?: number;
    operatorClass?: string;
}>;

declare type IndexType = 'id' | 'normal' | 'unique' | 'fulltext';

declare type InMemoryOps = {
    pagination: Pagination | null;
    distinct: string[] | null;
    reverse: boolean;
    linkingFields: string[] | null;
    nested: Record<string, InMemoryOps>;
};


export declare interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {
}


export declare type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
};


export declare type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | {
    toJSON(): unknown;
};

declare type InputType = ReadonlyDeep_2<{
    name: string;
    constraints: {
        maxNumFields: number | null;
        minNumFields: number | null;
        fields?: string[];
    };
    meta?: {
        source?: string;
        grouping?: string;
    };
    fields: SchemaArg[];
}>;

declare type InputTypeRef = TypeRef<'scalar' | 'inputObjectTypes' | 'enumTypes' | 'fieldRefTypes'>;

declare type InteractiveTransactionInfo<Payload = unknown> = {
    
    id: string;
    
    payload: Payload;
};

declare type InteractiveTransactionOptions<Payload> = Transaction_2.InteractiveTransactionInfo<Payload>;

export declare type InternalArgs<R = {
    [K in string]: {
        [K in string]: unknown;
    };
}, M = {
    [K in string]: {
        [K in string]: unknown;
    };
}, Q = {
    [K in string]: {
        [K in string]: unknown;
    };
}, C = {
    [K in string]: unknown;
}> = {
    result: {
        [K in keyof R]: {
            [P in keyof R[K]]: () => R[K][P];
        };
    };
    model: {
        [K in keyof M]: {
            [P in keyof M[K]]: () => M[K][P];
        };
    };
    query: {
        [K in keyof Q]: {
            [P in keyof Q[K]]: () => Q[K][P];
        };
    };
    client: {
        [K in keyof C]: () => C[K];
    };
};

declare type InternalRequestParams = {
    
    clientMethod: string;
    
    jsModelName?: string;
    callsite?: CallSite;
    transaction?: PrismaPromiseTransaction;
    unpacker?: Unpacker;
    otelParentCtx?: Context;
    
    argsMapper?: (args?: UserArgs_2) => UserArgs_2;
    
    middlewareArgsMapper?: MiddlewareArgsMapper<unknown, unknown>;
    
    customDataProxyFetch?: AccelerateExtensionFetchDecorator;
} & Omit<QueryMiddlewareParams, 'runInTransaction'>;

export { isAnyNull }

export { isDbNull }

export { isJsonNull }

export { isObjectEnumValue }

declare type IsolationLevel = 'READ UNCOMMITTED' | 'READ COMMITTED' | 'REPEATABLE READ' | 'SNAPSHOT' | 'SERIALIZABLE';

declare type IsolationLevel_2 = 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Snapshot' | 'Serializable';

declare function isSkip(value: unknown): value is Skip;

export declare function isTypedSql(value: unknown): value is UnknownTypedSql;

export declare type ITXClientDenyList = (typeof denylist)[number];

export declare const itxClientDenyList: readonly (string | symbol)[];

declare type ItxScopeState = {
    stack: string[];
};

declare interface Job {
    resolve: (data: any) => void;
    reject: (data: any) => void;
    request: any;
}

export { join }

declare type JoinExpression = {
    child: QueryPlanNode;
    on: [left: string, right: string][];
    parentField: string;
    isRelationUnique: boolean;
};

export declare type JsArgs = {
    select?: Selection_2;
    include?: Selection_2;
    omit?: Omission;
    [argName: string]: JsInputValue;
};

export declare type JsInputValue = null | undefined | string | number | boolean | bigint | Uint8Array | Date | DecimalJsLike | ObjectEnumValue | RawParameters | JsonConvertible | FieldRef<string, unknown> | JsInputValue[] | Skip | {
    [key: string]: JsInputValue;
};

declare type JsonArgumentValue = number | string | boolean | null | RawTaggedValue | JsonArgumentValue[] | {
    [key: string]: JsonArgumentValue;
};


export declare interface JsonArray extends Array<JsonValue> {
}

export declare type JsonBatchQuery = {
    batch: JsonQuery[];
    transaction?: {
        isolationLevel?: IsolationLevel_2;
    };
};

export declare interface JsonConvertible {
    toJSON(): unknown;
}

declare type JsonFieldSelection = {
    arguments?: Record<string, JsonArgumentValue> | RawTaggedValue;
    selection: JsonSelectionSet;
};

export { JsonNull }

export { JsonNullClass }


export declare type JsonObject = {
    [Key in string]?: JsonValue;
};

export declare type JsonQuery = {
    modelName?: string;
    action: JsonQueryAction_2;
    query: JsonFieldSelection;
};

declare type JsonQueryAction = 'findUnique' | 'findUniqueOrThrow' | 'findFirst' | 'findFirstOrThrow' | 'findMany' | 'createOne' | 'createMany' | 'createManyAndReturn' | 'updateOne' | 'updateMany' | 'updateManyAndReturn' | 'deleteOne' | 'deleteMany' | 'upsertOne' | 'aggregate' | 'groupBy' | 'executeRaw' | 'queryRaw' | 'runCommandRaw' | 'findRaw' | 'aggregateRaw';

declare type JsonQueryAction_2 = 'findUnique' | 'findUniqueOrThrow' | 'findFirst' | 'findFirstOrThrow' | 'findMany' | 'createOne' | 'createMany' | 'createManyAndReturn' | 'updateOne' | 'updateMany' | 'updateManyAndReturn' | 'deleteOne' | 'deleteMany' | 'upsertOne' | 'aggregate' | 'groupBy' | 'executeRaw' | 'queryRaw' | 'runCommandRaw' | 'findRaw' | 'aggregateRaw';

declare type JsonSelectionSet = {
    $scalars?: boolean;
    $composites?: boolean;
} & {
    [fieldName: string]: boolean | JsonFieldSelection;
};


export declare type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

export declare type JsOutputValue = null | string | number | boolean | bigint | Uint8Array | Date | Decimal | JsOutputValue[] | {
    [key: string]: JsOutputValue;
};

export declare type JsPromise<T> = Promise<T> & {};


declare interface Link {
    
    context: SpanContext;
    
    attributes?: SpanAttributes;
    
    droppedAttributesCount?: number;
}

declare type LocationInFile = {
    fileName: string;
    lineNumber: number | null;
    columnNumber: number | null;
};

declare type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};


declare type LogEmitter = {
    on<E extends EngineEventType>(event: E, listener: (event: EngineEvent<E>) => void): LogEmitter;
    emit(event: QueryEventType, payload: QueryEvent): boolean;
    emit(event: LogEventType, payload: LogEvent): boolean;
};

declare type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};

declare type LogEventType = 'info' | 'warn' | 'error';

declare type LogLevel = 'info' | 'query' | 'warn' | 'error';


export declare function makeStrictEnum<T extends Record<PropertyKey, string | number>>(definition: T): T;

export declare function makeTypedQueryFactory(sql: string): (...values: any[]) => TypedSql<any[], unknown>;

declare type Mappings = ReadonlyDeep_2<{
    modelOperations: ModelMapping[];
    otherOperations: {
        read: string[];
        write: string[];
    };
}>;


declare class MergedExtensionsList {
    private head?;
    private constructor();
    static empty(): MergedExtensionsList;
    static single(extension: ExtensionArgs): MergedExtensionsList;
    isEmpty(): boolean;
    append(extension: ExtensionArgs): MergedExtensionsList;
    getAllComputedFields(dmmfModelName: string): ComputedFieldsMap | undefined;
    getAllClientExtensions(): ClientArg | undefined;
    getAllModelExtensions(dmmfModelName: string): ModelArg | undefined;
    getAllQueryCallbacks(jsModelName: string, operation: string): any;
    getAllBatchQueryCallbacks(): BatchQueryOptionsCb[];
}

export declare type MergeExtArgs<TypeMap extends TypeMapDef, ExtArgs extends Record<any, any>, Args extends Record<any, any>> = ComputeDeep<ExtArgs & Args & AllModelsToStringIndex<TypeMap, Args, 'result'> & AllModelsToStringIndex<TypeMap, Args, 'model'>>;

declare type MiddlewareArgsMapper<RequestArgs, MiddlewareArgs> = {
    requestArgsToMiddlewareArgs(requestArgs: RequestArgs): MiddlewareArgs;
    middlewareArgsToRequestArgs(middlewareArgs: MiddlewareArgs): RequestArgs;
};

declare type Model = ReadonlyDeep_2<{
    name: string;
    dbName: string | null;
    schema: string | null;
    fields: Field[];
    uniqueFields: string[][];
    uniqueIndexes: uniqueIndex[];
    documentation?: string;
    primaryKey: PrimaryKey | null;
    isGenerated?: boolean;
}>;

declare enum ModelAction {
    findUnique = "findUnique",
    findUniqueOrThrow = "findUniqueOrThrow",
    findFirst = "findFirst",
    findFirstOrThrow = "findFirstOrThrow",
    findMany = "findMany",
    create = "create",
    createMany = "createMany",
    createManyAndReturn = "createManyAndReturn",
    update = "update",
    updateMany = "updateMany",
    updateManyAndReturn = "updateManyAndReturn",
    upsert = "upsert",
    delete = "delete",
    deleteMany = "deleteMany",
    groupBy = "groupBy",
    count = "count",// TODO: count does not actually exist in DMMF
    aggregate = "aggregate",
    findRaw = "findRaw",
    aggregateRaw = "aggregateRaw"
}

export declare type ModelArg = {
    [MethodName in string]: unknown;
};

export declare type ModelArgs = {
    model: {
        [ModelName in string]: ModelArg;
    };
};

export declare type ModelKey<TypeMap extends TypeMapDef, M extends PropertyKey> = M extends keyof TypeMap['model'] ? M : Capitalize<M & string>;

declare type ModelMapping = ReadonlyDeep_2<{
    model: string;
    plural: string;
    findUnique?: string | null;
    findUniqueOrThrow?: string | null;
    findFirst?: string | null;
    findFirstOrThrow?: string | null;
    findMany?: string | null;
    create?: string | null;
    createMany?: string | null;
    createManyAndReturn?: string | null;
    update?: string | null;
    updateMany?: string | null;
    updateManyAndReturn?: string | null;
    upsert?: string | null;
    delete?: string | null;
    deleteMany?: string | null;
    aggregate?: string | null;
    groupBy?: string | null;
    count?: string | null;
    findRaw?: string | null;
    aggregateRaw?: string | null;
}>;

export declare type ModelQueryOptionsCb = (args: ModelQueryOptionsCbArgs) => Promise<any>;

export declare type ModelQueryOptionsCbArgs = {
    model: string;
    operation: string;
    args: JsArgs;
    query: (args: JsArgs) => Promise<unknown>;
};

declare type MultiBatchResponse = {
    type: 'multi';
    plans: QueryPlanNode[];
};

export declare type NameArgs = {
    name?: string;
};

export declare type Narrow<A> = {
    [K in keyof A]: A[K] extends Function ? A[K] : Narrow<A[K]>;
} | (A extends Narrowable ? A : never);

export declare type Narrowable = string | number | bigint | boolean | [];

export declare type NeverToUnknown<T> = [T] extends [never] ? unknown : T;

export { NullTypes }

export { ObjectEnumValue }

declare const officialPrismaAdapters: readonly ["@prisma/adapter-planetscale", "@prisma/adapter-neon", "@prisma/adapter-libsql", "@prisma/adapter-better-sqlite3", "@prisma/adapter-d1", "@prisma/adapter-pg", "@prisma/adapter-mssql", "@prisma/adapter-mariadb"];

export declare type Omission = Record<string, boolean | Skip>;

declare type Omit_2<T, K extends string | number | symbol> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
export { Omit_2 as Omit }

export declare type OmitValue<Omit, Key> = Key extends keyof Omit ? Omit[Key] : false;

export declare type Operation = 'findFirst' | 'findFirstOrThrow' | 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'aggregate' | 'count' | 'groupBy' | '$queryRaw' | '$executeRaw' | '$queryRawUnsafe' | '$executeRawUnsafe' | 'findRaw' | 'aggregateRaw' | '$runCommandRaw';

export declare type OperationPayload = {
    name: string;
    scalars: {
        [ScalarName in string]: unknown;
    };
    objects: {
        [ObjectName in string]: unknown;
    };
    composites: {
        [CompositeName in string]: unknown;
    };
};

export declare type Optional<O, K extends keyof any = keyof O> = {
    [P in K & keyof O]?: O[P];
} & {
    [P in Exclude<keyof O, K>]: O[P];
};

export declare type OptionalFlat<T> = {
    [K in keyof T]?: T[K];
};

export declare type OptionalKeys<O> = {
    [K in keyof O]-?: {} extends Pick_2<O, K> ? K : never;
}[keyof O];

declare type Options = {
    
    maxWait?: number;
    
    timeout?: number;
    
    isolationLevel?: IsolationLevel_2;
    
    newTxId?: string;
};

export declare type Or<A extends 1 | 0, B extends 1 | 0> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[A][B];

declare type OtherOperationMappings = ReadonlyDeep_2<{
    read: string[];
    write: string[];
}>;

declare type OutputType = ReadonlyDeep_2<{
    name: string;
    fields: SchemaField[];
}>;

declare type OutputTypeRef = TypeRef<'scalar' | 'outputObjectTypes' | 'enumTypes'>;

declare type Pagination = {
    cursor: Record<string, unknown> | null;
    take: number | null;
    skip: number | null;
};

export declare function Param<$Type, $Value extends string>(name: $Value): Param<$Type, $Value>;

export declare type Param<out $Type, $Value extends string> = {
    readonly name: $Value;
};

export declare type PatchFlat<O1, O2> = O1 & Omit_2<O2, keyof O1>;

export declare type Path<O, P, Default = never> = O extends unknown ? P extends [infer K, ...infer R] ? K extends keyof O ? Path<O[K], R> : Default : O : never;

export declare type Payload<T, F extends Operation = never> = T extends {
    [K: symbol]: {
        types: {
            payload: any;
        };
    };
} ? T[symbol]['types']['payload'] : any;

export declare type PayloadToResult<P, O extends Record_2<any, any> = RenameAndNestPayloadKeys<P>> = {
    [K in keyof O]?: O[K][K] extends any[] ? PayloadToResult<O[K][K][number]>[] : O[K][K] extends object ? PayloadToResult<O[K][K]> : O[K][K];
};

declare type Pick_2<T, K extends string | number | symbol> = {
    [P in keyof T as P extends K ? P : never]: T[P];
};
export { Pick_2 as Pick }

declare interface PlaceholderFormat {
    prefix: string;
    hasNumbering: boolean;
}

declare type PrimaryKey = ReadonlyDeep_2<{
    name: string | null;
    fields: string[];
}>;

export { PrismaClientInitializationError }

export { PrismaClientKnownRequestError }


declare type PrismaClientMutuallyExclusiveOptions = {
    
    adapter: SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    
    accelerateUrl: string;
    adapter?: never;
};

export declare type PrismaClientOptions = PrismaClientMutuallyExclusiveOptions & {
    
    errorFormat?: ErrorFormat;
    
    transactionOptions?: Transaction_2.Options;
    
    log?: Array<LogLevel | LogDefinition>;
    omit?: GlobalOmitOptions;
    
    comments?: SqlCommenterPlugin[];
    
    queryPlanCacheMaxSize?: number;
    
    __internal?: {
        debug?: boolean;
        
        configOverride?: (config: GetPrismaClientConfig) => GetPrismaClientConfig;
    };
};

export { PrismaClientRustPanicError }

export { PrismaClientUnknownRequestError }

export { PrismaClientValidationError }

declare type PrismaOperationSpec<TArgs, TAction = string> = {
    args: TArgs;
    action: TAction;
    model: string;
};

export declare interface PrismaPromise<T> extends Promise<T> {
    [Symbol.toStringTag]: 'PrismaPromise';
}


declare interface PrismaPromise_2<TResult, TSpec extends PrismaOperationSpec<unknown> = any> extends Promise<TResult> {
    get spec(): TSpec;
    
    then<R1 = TResult, R2 = never>(onfulfilled?: (value: TResult) => R1 | PromiseLike<R1>, onrejected?: (error: unknown) => R2 | PromiseLike<R2>, transaction?: PrismaPromiseTransaction): Promise<R1 | R2>;
    
    catch<R = never>(onrejected?: ((reason: any) => R | PromiseLike<R>) | undefined | null, transaction?: PrismaPromiseTransaction): Promise<TResult | R>;
    
    finally(onfinally?: (() => void) | undefined | null, transaction?: PrismaPromiseTransaction): Promise<TResult>;
    
    requestTransaction?(transaction: PrismaPromiseBatchTransaction): PromiseLike<unknown>;
}

declare type PrismaPromiseBatchTransaction = {
    kind: 'batch';
    id: number;
    isolationLevel?: IsolationLevel_2;
    maxWait?: number;
    timeout?: number;
    index: number;
    lock: PromiseLike<void>;
};

declare type PrismaPromiseCallback = (transaction?: PrismaPromiseTransaction) => Promise<unknown>;


declare type PrismaPromiseFactory = <T extends PrismaOperationSpec<unknown>>(callback: PrismaPromiseCallback, op?: T) => PrismaPromise_2<unknown>;

declare type PrismaPromiseInteractiveTransaction<PayloadType = unknown> = {
    kind: 'itx';
    id: string;
    payload: PayloadType;
};

declare type PrismaPromiseTransaction<PayloadType = unknown> = PrismaPromiseBatchTransaction | PrismaPromiseInteractiveTransaction<PayloadType>;

declare type PrismaValue = string | boolean | number | PrismaValue[] | null | Record<string, unknown> | PrismaValuePlaceholder | PrismaValueGenerator;

declare type PrismaValueGenerator = {
    prisma__type: 'generatorCall';
    prisma__value: {
        name: string;
        args: PrismaValue[];
    };
};

declare type PrismaValuePlaceholder = {
    prisma__type: 'param';
    prisma__value: {
        name: string;
        type: string;
    };
};

export declare const PrivateResultType: unique symbol;

declare type Provider = 'mysql' | 'postgres' | 'sqlite' | 'sqlserver';

declare namespace Public {
    export {
        validator
    }
}
export { Public }

declare namespace Public_2 {
    export {
        Args,
        Result,
        Payload,
        PrismaPromise,
        Operation,
        Exact
    }
}

declare type Query = ReadonlyDeep_2<{
    name: string;
    args: SchemaArg[];
    output: QueryOutput;
}>;

declare interface Queryable<Query, Result> extends AdapterInfo {
    
    queryRaw(params: Query): Promise<Result>;
    
    executeRaw(params: Query): Promise<number>;
}

declare type QueryCompiler = {
    compile(request: string): QueryPlanNode;
    compileBatch(batchRequest: string): BatchResponse;
    free(): void;
};

declare interface QueryCompilerConstructor {
    new (options: QueryCompilerOptions): QueryCompiler;
}

declare type QueryCompilerOptions = {
    datamodel: string;
    provider: Provider;
    connectionInfo: ConnectionInfo;
};

declare type QueryEngineResultData<T> = {
    data: T;
};

declare type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};

declare type QueryEventType = 'query';

declare type QueryIntrospectionBuiltinType = 'int' | 'bigint' | 'float' | 'double' | 'string' | 'enum' | 'bytes' | 'bool' | 'char' | 'decimal' | 'json' | 'xml' | 'uuid' | 'datetime' | 'date' | 'time' | 'int-array' | 'bigint-array' | 'float-array' | 'double-array' | 'string-array' | 'char-array' | 'bytes-array' | 'bool-array' | 'decimal-array' | 'json-array' | 'xml-array' | 'uuid-array' | 'datetime-array' | 'date-array' | 'time-array' | 'null' | 'unknown';

declare type QueryMiddlewareParams = {
    
    model?: string;
    
    action: Action;
    
    dataPath: string[];
    
    runInTransaction: boolean;
    args?: UserArgs_2;
};

export declare type QueryOptions = {
    query: {
        [ModelName in string]: {
            [ModelAction in string]: ModelQueryOptionsCb;
        } | QueryOptionsCb;
    };
};

export declare type QueryOptionsCb = (args: QueryOptionsCbArgs) => Promise<any>;

export declare type QueryOptionsCbArgs = {
    model?: string;
    operation: string;
    args: JsArgs | RawQueryArgs;
    query: (args: JsArgs | RawQueryArgs) => Promise<unknown>;
};

declare type QueryOutput = ReadonlyDeep_2<{
    name: string;
    isRequired: boolean;
    isList: boolean;
}>;

declare type QueryPlanBinding = {
    name: string;
    expr: QueryPlanNode;
};

declare type QueryPlanDbQuery = {
    type: 'rawSql';
    sql: string;
    args: PrismaValue[];
    argTypes: ArgType[];
} | {
    type: 'templateSql';
    fragments: Fragment[];
    placeholderFormat: PlaceholderFormat;
    args: PrismaValue[];
    argTypes: DynamicArgType[];
    chunkable: boolean;
};

declare type QueryPlanNode = {
    type: 'value';
    args: PrismaValue;
} | {
    type: 'seq';
    args: QueryPlanNode[];
} | {
    type: 'get';
    args: {
        name: string;
    };
} | {
    type: 'let';
    args: {
        bindings: QueryPlanBinding[];
        expr: QueryPlanNode;
    };
} | {
    type: 'getFirstNonEmpty';
    args: {
        names: string[];
    };
} | {
    type: 'query';
    args: QueryPlanDbQuery;
} | {
    type: 'execute';
    args: QueryPlanDbQuery;
} | {
    type: 'reverse';
    args: QueryPlanNode;
} | {
    type: 'sum';
    args: QueryPlanNode[];
} | {
    type: 'concat';
    args: QueryPlanNode[];
} | {
    type: 'unique';
    args: QueryPlanNode;
} | {
    type: 'required';
    args: QueryPlanNode;
} | {
    type: 'join';
    args: {
        parent: QueryPlanNode;
        children: JoinExpression[];
        canAssumeStrictEquality: boolean;
    };
} | {
    type: 'mapField';
    args: {
        field: string;
        records: QueryPlanNode;
    };
} | {
    type: 'transaction';
    args: QueryPlanNode;
} | {
    type: 'dataMap';
    args: {
        expr: QueryPlanNode;
        structure: ResultNode;
        enums: Record<string, Record<string, string>>;
    };
} | {
    type: 'validate';
    args: {
        expr: QueryPlanNode;
        rules: DataRule[];
    } & ValidationError;
} | {
    type: 'if';
    args: {
        value: QueryPlanNode;
        rule: DataRule;
        then: QueryPlanNode;
        else: QueryPlanNode;
    };
} | {
    type: 'unit';
} | {
    type: 'diff';
    args: {
        from: QueryPlanNode;
        to: QueryPlanNode;
        fields: string[];
    };
} | {
    type: 'initializeRecord';
    args: {
        expr: QueryPlanNode;
        fields: Record<string, FieldInitializer>;
    };
} | {
    type: 'mapRecord';
    args: {
        expr: QueryPlanNode;
        fields: Record<string, FieldOperation>;
    };
} | {
    type: 'process';
    args: {
        expr: QueryPlanNode;
        operations: InMemoryOps;
    };
};

export { raw }

export declare type RawParameters = {
    __prismaRawParameters__: true;
    values: string;
};

export declare type RawQueryArgs = Sql | UnknownTypedSql | [query: string, ...values: RawValue[]];

declare type RawResponse = {
    columns: string[];
    types: QueryIntrospectionBuiltinType[];
    rows: unknown[][];
};

declare type RawTaggedValue = {
    $type: 'Raw';
    value: unknown;
};

export { RawValue }

export declare type ReadonlyDeep<T> = {
    readonly [K in keyof T]: ReadonlyDeep<T[K]>;
};

declare type ReadonlyDeep_2<O> = {
    +readonly [K in keyof O]: ReadonlyDeep_2<O[K]>;
};

declare type Record_2<T extends string | number | symbol, U> = {
    [P in T]: U;
};
export { Record_2 as Record }

export declare type RenameAndNestPayloadKeys<P> = {
    [K in keyof P as K extends 'scalars' | 'objects' | 'composites' ? keyof P[K] : never]: P[K];
};

declare type RequestBatchOptions<InteractiveTransactionPayload> = {
    transaction?: TransactionOptions_2<InteractiveTransactionPayload>;
    traceparent?: string;
    numTry?: number;
    containsWrite: boolean;
    customDataProxyFetch?: AccelerateExtensionFetchDecorator;
};

declare class RequestHandler {
    client: Client;
    dataloader: DataLoader<RequestParams>;
    private logEmitter?;
    constructor(client: Client, logEmitter?: LogEmitter);
    request(params: RequestParams): Promise<any>;
    mapQueryEngineResult({ dataPath, unpacker }: RequestParams, response: QueryEngineResultData<any>): any;
    
    handleAndLogRequestError(params: HandleErrorParams): never;
    handleRequestError({ error, clientMethod, callsite, transaction, args, modelName, globalOmit, }: HandleErrorParams): never;
    sanitizeMessage(message: any): any;
    unpack(data: unknown, dataPath: string[], unpacker?: Unpacker): any;
    get [Symbol.toStringTag](): string;
}

declare type RequestOptions<InteractiveTransactionPayload> = {
    traceparent?: string;
    numTry?: number;
    interactiveTransaction?: InteractiveTransactionOptions<InteractiveTransactionPayload>;
    isWrite: boolean;
    customDataProxyFetch?: AccelerateExtensionFetchDecorator;
};

declare type RequestParams = {
    modelName?: string;
    action: Action;
    protocolQuery: JsonQuery;
    dataPath: string[];
    clientMethod: string;
    callsite?: CallSite;
    transaction?: PrismaPromiseTransaction;
    extensions: MergedExtensionsList;
    args?: any;
    headers?: Record<string, string>;
    unpacker?: Unpacker;
    otelParentCtx?: Context;
    otelChildCtx?: Context;
    globalOmit?: GlobalOmitOptions;
    customDataProxyFetch?: AccelerateExtensionFetchDecorator;
};

declare type RequiredExtensionArgs = NameArgs & ResultArgs & ModelArgs & ClientArgs & QueryOptions;
export { RequiredExtensionArgs }
export { RequiredExtensionArgs as UserArgs }

export declare type RequiredKeys<O> = {
    [K in keyof O]-?: {} extends Pick_2<O, K> ? never : K;
}[keyof O];

export declare type Result<T, A, F extends Operation> = T extends {
    [K: symbol]: {
        types: {
            payload: any;
        };
    };
} ? GetResult<T[symbol]['types']['payload'], A, F> : GetResult<{
    composites: {};
    objects: {};
    scalars: {};
    name: '';
}, {}, F>;

export declare type Result_2<T, A, F extends Operation> = Result<T, A, F>;

declare namespace Result_3 {
    export {
        Count,
        GetFindResult,
        SelectablePayloadFields,
        SelectField,
        DefaultSelection,
        UnwrapPayload,
        ApplyOmit,
        OmitValue,
        GetCountResult,
        Aggregate,
        GetAggregateResult,
        GetBatchResult,
        GetGroupByResult,
        GetResult,
        ExtractGlobalOmit
    }
}

export declare type ResultArg = {
    [FieldName in string]: ResultFieldDefinition;
};

export declare type ResultArgs = {
    result: {
        [ModelName in string]: ResultArg;
    };
};

export declare type ResultArgsFieldCompute = (model: any) => unknown;

export declare type ResultFieldDefinition = {
    needs?: {
        [FieldName in string]: boolean;
    };
    compute: ResultArgsFieldCompute;
};

declare type ResultNode = {
    type: 'affectedRows';
} | {
    type: 'object';
    fields: Record<string, ResultNode>;
    serializedName: string | null;
    skipNulls: boolean;
} | {
    type: 'field';
    dbName: string;
    fieldType: FieldType;
};

export declare type Return<T> = T extends (...args: any[]) => infer R ? R : T;

export declare type RuntimeDataModel = {
    readonly models: Record<string, RuntimeModel>;
    readonly enums: Record<string, RuntimeEnum>;
    readonly types: Record<string, RuntimeModel>;
};

declare type RuntimeEnum = Omit<DMMF_2.DatamodelEnum, 'name'>;

declare type RuntimeModel = Omit<DMMF_2.Model, 'name'>;

declare type RuntimeName = 'workerd' | 'deno' | 'netlify' | 'node' | 'bun' | 'edge-light' | '';

declare type Schema = ReadonlyDeep_2<{
    rootQueryType?: string;
    rootMutationType?: string;
    inputObjectTypes: {
        model?: InputType[];
        prisma?: InputType[];
    };
    outputObjectTypes: {
        model: OutputType[];
        prisma: OutputType[];
    };
    enumTypes: {
        model?: SchemaEnum[];
        prisma: SchemaEnum[];
    };
    fieldRefTypes: {
        prisma?: FieldRefType[];
    };
}>;

declare type SchemaArg = ReadonlyDeep_2<{
    name: string;
    comment?: string;
    isNullable: boolean;
    isRequired: boolean;
    inputTypes: InputTypeRef[];
    isParameterizable: boolean;
    requiresOtherFields?: string[];
    deprecation?: Deprecation;
}>;

declare type SchemaEnum = ReadonlyDeep_2<{
    name: string;
    values: string[];
}>;

declare type SchemaField = ReadonlyDeep_2<{
    name: string;
    isNullable?: boolean;
    outputType: OutputTypeRef;
    args: SchemaArg[];
    deprecation?: Deprecation;
    documentation?: string;
}>;

export declare type Select<T, U> = T extends U ? T : never;

export declare type SelectablePayloadFields<K extends PropertyKey, O> = {
    objects: {
        [k in K]: O;
    };
} | {
    composites: {
        [k in K]: O;
    };
};

export declare type SelectField<P extends SelectablePayloadFields<any, any>, K extends PropertyKey> = P extends {
    objects: Record<K, any>;
} ? P['objects'][K] : P extends {
    composites: Record<K, any>;
} ? P['composites'][K] : never;

declare type Selection_2 = Record<string, boolean | Skip | JsArgs>;
export { Selection_2 as Selection }


declare interface SerializedParamGraph {
    
    strings: string[];
    
    graph: string;
}

export declare function serializeJsonQuery({ modelName, action, args, runtimeDataModel, extensions, callsite, clientMethod, errorFormat, clientVersion, previewFeatures, globalOmit, wrapRawValues, }: SerializeParams): JsonQuery;

declare type SerializeParams = {
    runtimeDataModel: RuntimeDataModel;
    modelName?: string;
    action: Action;
    args?: JsArgs;
    extensions?: MergedExtensionsList;
    callsite?: CallSite;
    clientMethod: string;
    clientVersion: string;
    errorFormat: ErrorFormat;
    previewFeatures: string[];
    globalOmit?: GlobalOmitOptions;
    wrapRawValues?: boolean;
};

declare class Skip {
    constructor(param?: symbol);
    ifUndefined<T>(value: T | undefined): T | Skip;
}

export declare const skip: Skip;

declare type SortOrder = 'asc' | 'desc';


declare interface Span {
    
    spanContext(): SpanContext;
    
    setAttribute(key: string, value: SpanAttributeValue): this;
    
    setAttributes(attributes: SpanAttributes): this;
    
    addEvent(name: string, attributesOrStartTime?: SpanAttributes | TimeInput, startTime?: TimeInput): this;
    
    addLink(link: Link): this;
    
    addLinks(links: Link[]): this;
    
    setStatus(status: SpanStatus): this;
    
    updateName(name: string): this;
    
    end(endTime?: TimeInput): void;
    
    isRecording(): boolean;
    
    recordException(exception: Exception, time?: TimeInput): void;
}


declare type SpanAttributes = Attributes;


declare type SpanAttributeValue = AttributeValue;

declare type SpanCallback<R> = (span?: Span, context?: Context) => R;


declare interface SpanContext {
    
    traceId: string;
    
    spanId: string;
    
    isRemote?: boolean;
    
    traceFlags: number;
    
    traceState?: TraceState;
}

declare enum SpanKind {
    
    INTERNAL = 0,
    
    SERVER = 1,
    
    CLIENT = 2,
    
    PRODUCER = 3,
    
    CONSUMER = 4
}


declare interface SpanOptions {
    
    kind?: SpanKind;
    
    attributes?: SpanAttributes;
    
    links?: Link[];
    
    startTime?: TimeInput;
    
    root?: boolean;
}

declare interface SpanStatus {
    
    code: SpanStatusCode;
    
    message?: string;
}


declare enum SpanStatusCode {
    
    UNSET = 0,
    
    OK = 1,
    
    ERROR = 2
}

export { Sql }


declare interface SqlCommenterCompactedQueryInfo {
    
    readonly modelName: string;
    
    readonly action: SqlCommenterQueryAction;
    
    readonly queries: ReadonlyArray<unknown>;
}


export declare interface SqlCommenterContext {
    
    readonly query: SqlCommenterQueryInfo;
    
    readonly sql?: string;
}


export declare interface SqlCommenterPlugin {
    (context: SqlCommenterContext): SqlCommenterTags;
}


declare type SqlCommenterQueryAction = JsonQueryAction;


export declare type SqlCommenterQueryInfo = ({
    readonly type: 'single';
} & SqlCommenterSingleQueryInfo) | ({
    readonly type: 'compacted';
} & SqlCommenterCompactedQueryInfo);


export declare interface SqlCommenterSingleQueryInfo {
    
    readonly modelName?: string;
    
    readonly action: SqlCommenterQueryAction;
    
    readonly query: unknown;
}


export declare type SqlCommenterTags = {
    readonly [key: string]: string | undefined;
};

declare interface SqlDriverAdapter extends SqlQueryable {
    
    executeScript(script: string): Promise<void>;
    
    startTransaction(isolationLevel?: IsolationLevel): Promise<Transaction>;
    
    getConnectionInfo?(): ConnectionInfo;
    
    dispose(): Promise<void>;
}

export declare interface SqlDriverAdapterFactory extends DriverAdapterFactory<SqlQuery, SqlResultSet> {
    connect(): Promise<SqlDriverAdapter>;
}

declare type SqlQuery = {
    sql: string;
    args: Array<unknown>;
    argTypes: Array<ArgType>;
};

declare interface SqlQueryable extends Queryable<SqlQuery, SqlResultSet> {
}

declare interface SqlResultSet {
    
    columnTypes: Array<ColumnType>;
    
    columnNames: Array<string>;
    
    rows: Array<Array<unknown>>;
    
    lastInsertId?: string;
}

export { sqltag }


declare type TimeInput = HrTime_2 | number | Date;

export declare type ToTuple<T> = T extends any[] ? T : [T];

declare interface TraceState {
    
    set(key: string, value: string): TraceState;
    
    unset(key: string): TraceState;
    
    get(key: string): string | undefined;
    
    serialize(): string;
}

declare interface TracingHelper {
    isEnabled(): boolean;
    getTraceParent(context?: Context): string;
    dispatchEngineSpans(spans: EngineSpan[]): void;
    getActiveContext(): Context | undefined;
    runInChildSpan<R>(nameOrOptions: string | ExtendedSpanOptions, callback: SpanCallback<R>): R;
}

declare interface Transaction extends AdapterInfo, SqlQueryable {
    
    readonly options: TransactionOptions;
    
    commit(): Promise<void>;
    
    rollback(): Promise<void>;
    
    createSavepoint?(name: string): Promise<void>;
    
    rollbackToSavepoint?(name: string): Promise<void>;
    
    releaseSavepoint?(name: string): Promise<void>;
}

declare namespace Transaction_2 {
    export {
        IsolationLevel_2 as IsolationLevel,
        Options,
        InteractiveTransactionInfo,
        TransactionHeaders
    }
}

declare type TransactionHeaders = {
    traceparent?: string;
};

declare type TransactionOptions = {
    usePhantomQuery: boolean;
};

declare type TransactionOptions_2<InteractiveTransactionPayload> = {
    kind: 'itx';
    options: InteractiveTransactionOptions<InteractiveTransactionPayload>;
} | {
    kind: 'batch';
    options: BatchTransactionOptions;
};

export declare class TypedSql<Values extends readonly unknown[], Result> {
    [PrivateResultType]: Result;
    constructor(sql: string, values: Values);
    get sql(): string;
    get values(): Values;
}

export declare type TypeMapCbDef = Fn<{
    extArgs: InternalArgs;
}, TypeMapDef>;


export declare type TypeMapDef = Record<any, any>;

declare type TypeRef<AllowedLocations extends FieldLocation> = {
    isList: boolean;
    type: string;
    location: AllowedLocations;
    namespace?: FieldNamespace;
};

declare namespace Types {
    export {
        Result_3 as Result,
        Extensions_2 as Extensions,
        Utils,
        Public_2 as Public,
        isSkip,
        Skip,
        skip,
        UnknownTypedSql,
        OperationPayload as Payload
    }
}
export { Types }

declare type uniqueIndex = ReadonlyDeep_2<{
    name: string;
    fields: string[];
}>;

export declare type UnknownTypedSql = TypedSql<unknown[], unknown>;

declare type Unpacker = (data: any) => any;

export declare type UnwrapPayload<P> = {} extends P ? unknown : {
    [K in keyof P]: P[K] extends {
        scalars: infer S;
        composites: infer C;
    }[] ? Array<S & UnwrapPayload<C>> : P[K] extends {
        scalars: infer S;
        composites: infer C;
    } | null ? S & UnwrapPayload<C> | Select<P[K], null> : never;
};

export declare type UnwrapPromise<P> = P extends Promise<infer R> ? R : P;

export declare type UnwrapTuple<Tuple extends readonly unknown[]> = {
    [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>;
};


declare type UserArgs_2 = any;

declare namespace Utils {
    export {
        EmptyToUnknown,
        NeverToUnknown,
        PatchFlat,
        Omit_2 as Omit,
        Pick_2 as Pick,
        ComputeDeep,
        Compute,
        OptionalFlat,
        ReadonlyDeep,
        Narrowable,
        Narrow,
        Exact,
        Cast,
        Record_2 as Record,
        UnwrapPromise,
        UnwrapTuple,
        Path,
        Fn,
        Call,
        RequiredKeys,
        OptionalKeys,
        Optional,
        Return,
        ToTuple,
        RenameAndNestPayloadKeys,
        PayloadToResult,
        Select,
        Equals,
        Or,
        JsPromise
    }
}

declare type ValidationError = {
    errorIdentifier: 'RELATION_VIOLATION';
    context: {
        relation: string;
        modelA: string;
        modelB: string;
    };
} | {
    errorIdentifier: 'MISSING_RELATED_RECORD';
    context: {
        model: string;
        relation: string;
        relationType: string;
        operation: string;
        neededFor?: string;
    };
} | {
    errorIdentifier: 'MISSING_RECORD';
    context: {
        operation: string;
    };
} | {
    errorIdentifier: 'INCOMPLETE_CONNECT_INPUT';
    context: {
        expectedRows: number;
    };
} | {
    errorIdentifier: 'INCOMPLETE_CONNECT_OUTPUT';
    context: {
        expectedRows: number;
        relation: string;
        relationType: string;
    };
} | {
    errorIdentifier: 'RECORDS_NOT_CONNECTED';
    context: {
        relation: string;
        parent: string;
        child: string;
    };
};

declare function validator<V>(): <S>(select: Exact<S, V>) => S;

declare function validator<C, M extends Exclude<keyof C, `$${string}`>, O extends keyof C[M] & Operation>(client: C, model: M, operation: O): <S>(select: Exact<S, Args<C[M], O>>) => S;

declare function validator<C, M extends Exclude<keyof C, `$${string}`>, O extends keyof C[M] & Operation, P extends keyof Args<C[M], O>>(client: C, model: M, operation: O, prop: P): <S>(select: Exact<S, Args<C[M], O>[P]>) => S;

export { Value }

export declare const warnOnce: (key: string, message: string, ...args: unknown[]) => void;

export { }
