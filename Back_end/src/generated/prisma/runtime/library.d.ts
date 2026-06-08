
declare function $extends(this: Client, extension: ExtensionArgs | ((client: Client) => Client)): Client;

declare type AccelerateEngineConfig = {
    inlineSchema: EngineConfig['inlineSchema'];
    inlineSchemaHash: EngineConfig['inlineSchemaHash'];
    env: EngineConfig['env'];
    generator?: {
        previewFeatures: string[];
    };
    inlineDatasources: EngineConfig['inlineDatasources'];
    overrideDatasources: EngineConfig['overrideDatasources'];
    clientVersion: EngineConfig['clientVersion'];
    engineVersion: EngineConfig['engineVersion'];
    logEmitter: EngineConfig['logEmitter'];
    logQueries?: EngineConfig['logQueries'];
    logLevel?: EngineConfig['logLevel'];
    tracingHelper: EngineConfig['tracingHelper'];
    accelerateUtils?: EngineConfig['accelerateUtils'];
};

export declare type Action = keyof typeof DMMF.ModelAction | 'executeRaw' | 'queryRaw' | 'runCommandRaw';

export declare type Aggregate = '_count' | '_max' | '_min' | '_avg' | '_sum';

export declare type AllModelsToStringIndex<TypeMap extends TypeMapDef, Args extends Record<string, any>, K extends PropertyKey> = Args extends {
    [P in K]: {
        $allModels: infer AllModels;
    };
} ? {
    [P in K]: Record<TypeMap['meta']['modelProps'], AllModels>;
} : {};

declare class AnyNull extends NullTypesEnumValue {
}

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


declare interface Attributes {
    [attributeKey: string]: AttributeValue | undefined;
}


declare type AttributeValue = string | number | boolean | Array<null | undefined | string> | Array<null | undefined | number> | Array<null | undefined | boolean>;

export declare type BaseDMMF = Pick<DMMF.Document, 'datamodel'>;

declare type BatchArgs = {
    queries: BatchQuery[];
    transaction?: {
        isolationLevel?: IsolationLevel;
    };
};

declare type BatchInternalParams = {
    requests: RequestParams[];
    customDataProxyFetch?: CustomDataProxyFetch;
};

declare type BatchQuery = {
    model: string | undefined;
    operation: string;
    args: JsArgs | RawQueryArgs;
};

declare type BatchQueryEngineResult<T> = QueryEngineResult<T> | Error;

declare type BatchQueryOptionsCb = (args: BatchQueryOptionsCbArgs) => Promise<any>;

declare type BatchQueryOptionsCbArgs = {
    args: BatchArgs;
    query: (args: BatchArgs, __internalParams?: BatchInternalParams) => Promise<unknown[]>;
    __internalParams: BatchInternalParams;
};

declare type BatchTransactionOptions = {
    isolationLevel?: Transaction_2.IsolationLevel;
};

declare interface BinaryTargetsEnvValue {
    fromEnvVar: string | null;
    value: string;
    native?: boolean;
}

export declare type Call<F extends Fn, P> = (F & {
    params: P;
})['returns'];

declare interface CallSite {
    getLocation(): LocationInFile | null;
}

export declare type Cast<A, W> = A extends W ? A : W;

declare type Client = ReturnType<typeof getPrismaClient> extends new () => infer T ? T : never;

export declare type ClientArg = {
    [MethodName in string]: unknown;
};

export declare type ClientArgs = {
    client: ClientArg;
};

export declare type ClientBuiltInProp = keyof DynamicClientExtensionThisBuiltin<never, never, never>;

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
};

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

declare type CustomDataProxyFetch = (fetch: Fetch) => Fetch;

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

declare type Datasource = {
    url?: string;
};

declare type Datasources = {
    [name in string]: Datasource;
};

declare class DbNull extends NullTypesEnumValue {
}

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

export declare namespace Decimal {
    export type Constructor = typeof Decimal;
    export type Instance = Decimal;
    export type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    export type Modulo = Rounding | 9;
    export type Value = string | number | Decimal;
    export interface Config {
        precision?: number;
        rounding?: Rounding;
        toExpNeg?: number;
        toExpPos?: number;
        minE?: number;
        maxE?: number;
        crypto?: boolean;
        modulo?: Modulo;
        defaults?: boolean;
    }
}

export declare class Decimal {
    readonly d: number[];
    readonly e: number;
    readonly s: number;

    constructor(n: Decimal.Value);

    absoluteValue(): Decimal;
    abs(): Decimal;

    ceil(): Decimal;

    clampedTo(min: Decimal.Value, max: Decimal.Value): Decimal;
    clamp(min: Decimal.Value, max: Decimal.Value): Decimal;

    comparedTo(n: Decimal.Value): number;
    cmp(n: Decimal.Value): number;

    cosine(): Decimal;
    cos(): Decimal;

    cubeRoot(): Decimal;
    cbrt(): Decimal;

    decimalPlaces(): number;
    dp(): number;

    dividedBy(n: Decimal.Value): Decimal;
    div(n: Decimal.Value): Decimal;

    dividedToIntegerBy(n: Decimal.Value): Decimal;
    divToInt(n: Decimal.Value): Decimal;

    equals(n: Decimal.Value): boolean;
    eq(n: Decimal.Value): boolean;

    floor(): Decimal;

    greaterThan(n: Decimal.Value): boolean;
    gt(n: Decimal.Value): boolean;

    greaterThanOrEqualTo(n: Decimal.Value): boolean;
    gte(n: Decimal.Value): boolean;

    hyperbolicCosine(): Decimal;
    cosh(): Decimal;

    hyperbolicSine(): Decimal;
    sinh(): Decimal;

    hyperbolicTangent(): Decimal;
    tanh(): Decimal;

    inverseCosine(): Decimal;
    acos(): Decimal;

    inverseHyperbolicCosine(): Decimal;
    acosh(): Decimal;

    inverseHyperbolicSine(): Decimal;
    asinh(): Decimal;

    inverseHyperbolicTangent(): Decimal;
    atanh(): Decimal;

    inverseSine(): Decimal;
    asin(): Decimal;

    inverseTangent(): Decimal;
    atan(): Decimal;

    isFinite(): boolean;

    isInteger(): boolean;
    isInt(): boolean;

    isNaN(): boolean;

    isNegative(): boolean;
    isNeg(): boolean;

    isPositive(): boolean;
    isPos(): boolean;

    isZero(): boolean;

    lessThan(n: Decimal.Value): boolean;
    lt(n: Decimal.Value): boolean;

    lessThanOrEqualTo(n: Decimal.Value): boolean;
    lte(n: Decimal.Value): boolean;

    logarithm(n?: Decimal.Value): Decimal;
    log(n?: Decimal.Value): Decimal;

    minus(n: Decimal.Value): Decimal;
    sub(n: Decimal.Value): Decimal;

    modulo(n: Decimal.Value): Decimal;
    mod(n: Decimal.Value): Decimal;

    naturalExponential(): Decimal;
    exp(): Decimal;

    naturalLogarithm(): Decimal;
    ln(): Decimal;

    negated(): Decimal;
    neg(): Decimal;

    plus(n: Decimal.Value): Decimal;
    add(n: Decimal.Value): Decimal;

    precision(includeZeros?: boolean): number;
    sd(includeZeros?: boolean): number;

    round(): Decimal;

    sine() : Decimal;
    sin() : Decimal;

    squareRoot(): Decimal;
    sqrt(): Decimal;

    tangent() : Decimal;
    tan() : Decimal;

    times(n: Decimal.Value): Decimal;
    mul(n: Decimal.Value) : Decimal;

    toBinary(significantDigits?: number): string;
    toBinary(significantDigits: number, rounding: Decimal.Rounding): string;

    toDecimalPlaces(decimalPlaces?: number): Decimal;
    toDecimalPlaces(decimalPlaces: number, rounding: Decimal.Rounding): Decimal;
    toDP(decimalPlaces?: number): Decimal;
    toDP(decimalPlaces: number, rounding: Decimal.Rounding): Decimal;

    toExponential(decimalPlaces?: number): string;
    toExponential(decimalPlaces: number, rounding: Decimal.Rounding): string;

    toFixed(decimalPlaces?: number): string;
    toFixed(decimalPlaces: number, rounding: Decimal.Rounding): string;

    toFraction(max_denominator?: Decimal.Value): Decimal[];

    toHexadecimal(significantDigits?: number): string;
    toHexadecimal(significantDigits: number, rounding: Decimal.Rounding): string;
    toHex(significantDigits?: number): string;
    toHex(significantDigits: number, rounding?: Decimal.Rounding): string;

    toJSON(): string;

    toNearest(n: Decimal.Value, rounding?: Decimal.Rounding): Decimal;

    toNumber(): number;

    toOctal(significantDigits?: number): string;
    toOctal(significantDigits: number, rounding: Decimal.Rounding): string;

    toPower(n: Decimal.Value): Decimal;
    pow(n: Decimal.Value): Decimal;

    toPrecision(significantDigits?: number): string;
    toPrecision(significantDigits: number, rounding: Decimal.Rounding): string;

    toSignificantDigits(significantDigits?: number): Decimal;
    toSignificantDigits(significantDigits: number, rounding: Decimal.Rounding): Decimal;
    toSD(significantDigits?: number): Decimal;
    toSD(significantDigits: number, rounding: Decimal.Rounding): Decimal;

    toString(): string;

    truncated(): Decimal;
    trunc(): Decimal;

    valueOf(): string;

    static abs(n: Decimal.Value): Decimal;
    static acos(n: Decimal.Value): Decimal;
    static acosh(n: Decimal.Value): Decimal;
    static add(x: Decimal.Value, y: Decimal.Value): Decimal;
    static asin(n: Decimal.Value): Decimal;
    static asinh(n: Decimal.Value): Decimal;
    static atan(n: Decimal.Value): Decimal;
    static atanh(n: Decimal.Value): Decimal;
    static atan2(y: Decimal.Value, x: Decimal.Value): Decimal;
    static cbrt(n: Decimal.Value): Decimal;
    static ceil(n: Decimal.Value): Decimal;
    static clamp(n: Decimal.Value, min: Decimal.Value, max: Decimal.Value): Decimal;
    static clone(object?: Decimal.Config): Decimal.Constructor;
    static config(object: Decimal.Config): Decimal.Constructor;
    static cos(n: Decimal.Value): Decimal;
    static cosh(n: Decimal.Value): Decimal;
    static div(x: Decimal.Value, y: Decimal.Value): Decimal;
    static exp(n: Decimal.Value): Decimal;
    static floor(n: Decimal.Value): Decimal;
    static hypot(...n: Decimal.Value[]): Decimal;
    static isDecimal(object: any): object is Decimal;
    static ln(n: Decimal.Value): Decimal;
    static log(n: Decimal.Value, base?: Decimal.Value): Decimal;
    static log2(n: Decimal.Value): Decimal;
    static log10(n: Decimal.Value): Decimal;
    static max(...n: Decimal.Value[]): Decimal;
    static min(...n: Decimal.Value[]): Decimal;
    static mod(x: Decimal.Value, y: Decimal.Value): Decimal;
    static mul(x: Decimal.Value, y: Decimal.Value): Decimal;
    static noConflict(): Decimal.Constructor;   // Browser only
    static pow(base: Decimal.Value, exponent: Decimal.Value): Decimal;
    static random(significantDigits?: number): Decimal;
    static round(n: Decimal.Value): Decimal;
    static set(object: Decimal.Config): Decimal.Constructor;
    static sign(n: Decimal.Value): number;
    static sin(n: Decimal.Value): Decimal;
    static sinh(n: Decimal.Value): Decimal;
    static sqrt(n: Decimal.Value): Decimal;
    static sub(x: Decimal.Value, y: Decimal.Value): Decimal;
    static sum(...n: Decimal.Value[]): Decimal;
    static tan(n: Decimal.Value): Decimal;
    static tanh(n: Decimal.Value): Decimal;
    static trunc(n: Decimal.Value): Decimal;

    static readonly default?: Decimal.Constructor;
    static readonly Decimal?: Decimal.Constructor;

    static readonly precision: number;
    static readonly rounding: Decimal.Rounding;
    static readonly toExpNeg: number;
    static readonly toExpPos: number;
    static readonly minE: number;
    static readonly maxE: number;
    static readonly crypto: boolean;
    static readonly modulo: Decimal.Modulo;

    static readonly ROUND_UP: 0;
    static readonly ROUND_DOWN: 1;
    static readonly ROUND_CEIL: 2;
    static readonly ROUND_FLOOR: 3;
    static readonly ROUND_HALF_UP: 4;
    static readonly ROUND_HALF_DOWN: 5;
    static readonly ROUND_HALF_EVEN: 6;
    static readonly ROUND_HALF_CEIL: 7;
    static readonly ROUND_HALF_FLOOR: 8;
    static readonly EUCLID: 9;
}


export declare interface DecimalJsLike {
    d: number[];
    e: number;
    s: number;
    toFixed(): string;
}

export declare type DefaultArgs = InternalArgs<{}, {}, {}, {}>;

export declare type DefaultSelection<P> = UnwrapPayload<{
    default: P;
}>['default'];

export declare function defineDmmfProperty(target: object, runtimeDataModel: RuntimeDataModel): void;

declare function defineExtension(ext: ExtensionArgs | ((client: Client) => Client)): (client: Client) => Client;

declare const denylist: readonly ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];


export declare function detectRuntime(): Runtime;

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

declare type Dictionary<T> = {
    [key: string]: T | undefined;
};

export declare namespace DMMF {
    export type Document = ReadonlyDeep_2<{
        datamodel: Datamodel;
        schema: Schema;
        mappings: Mappings;
    }>;
    export type Mappings = ReadonlyDeep_2<{
        modelOperations: ModelMapping[];
        otherOperations: {
            read: string[];
            write: string[];
        };
    }>;
    export type OtherOperationMappings = ReadonlyDeep_2<{
        read: string[];
        write: string[];
    }>;
    export type DatamodelEnum = ReadonlyDeep_2<{
        name: string;
        values: EnumValue[];
        dbName?: string | null;
        documentation?: string;
    }>;
    export type SchemaEnum = ReadonlyDeep_2<{
        name: string;
        values: string[];
    }>;
    export type EnumValue = ReadonlyDeep_2<{
        name: string;
        dbName: string | null;
    }>;
    export type Datamodel = ReadonlyDeep_2<{
        models: Model[];
        enums: DatamodelEnum[];
        types: Model[];
    }>;
    export type uniqueIndex = ReadonlyDeep_2<{
        name: string;
        fields: string[];
    }>;
    export type PrimaryKey = ReadonlyDeep_2<{
        name: string | null;
        fields: string[];
    }>;
    export type Model = ReadonlyDeep_2<{
        name: string;
        dbName: string | null;
        fields: Field[];
        uniqueFields: string[][];
        uniqueIndexes: uniqueIndex[];
        documentation?: string;
        primaryKey: PrimaryKey | null;
        isGenerated?: boolean;
    }>;
    export type FieldKind = 'scalar' | 'object' | 'enum' | 'unsupported';
    export type FieldNamespace = 'model' | 'prisma';
    export type FieldLocation = 'scalar' | 'inputObjectTypes' | 'outputObjectTypes' | 'enumTypes' | 'fieldRefTypes';
    export type Field = ReadonlyDeep_2<{
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
        dbName?: string | null;
        hasDefaultValue: boolean;
        default?: FieldDefault | FieldDefaultScalar | FieldDefaultScalar[];
        relationFromFields?: string[];
        relationToFields?: string[];
        relationOnDelete?: string;
        relationName?: string;
        documentation?: string;
    }>;
    export type FieldDefault = ReadonlyDeep_2<{
        name: string;
        args: any[];
    }>;
    export type FieldDefaultScalar = string | boolean | number;
    export type Schema = ReadonlyDeep_2<{
        rootQueryType?: string;
        rootMutationType?: string;
        inputObjectTypes: {
            model?: InputType[];
            prisma: InputType[];
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
    export type Query = ReadonlyDeep_2<{
        name: string;
        args: SchemaArg[];
        output: QueryOutput;
    }>;
    export type QueryOutput = ReadonlyDeep_2<{
        name: string;
        isRequired: boolean;
        isList: boolean;
    }>;
    export type TypeRef<AllowedLocations extends FieldLocation> = {
        isList: boolean;
        type: string;
        location: AllowedLocations;
        namespace?: FieldNamespace;
    };
    export type InputTypeRef = TypeRef<'scalar' | 'inputObjectTypes' | 'enumTypes' | 'fieldRefTypes'>;
    export type SchemaArg = ReadonlyDeep_2<{
        name: string;
        comment?: string;
        isNullable: boolean;
        isRequired: boolean;
        inputTypes: InputTypeRef[];
        deprecation?: Deprecation;
    }>;
    export type OutputType = ReadonlyDeep_2<{
        name: string;
        fields: SchemaField[];
    }>;
    export type SchemaField = ReadonlyDeep_2<{
        name: string;
        isNullable?: boolean;
        outputType: OutputTypeRef;
        args: SchemaArg[];
        deprecation?: Deprecation;
        documentation?: string;
    }>;
    export type OutputTypeRef = TypeRef<'scalar' | 'outputObjectTypes' | 'enumTypes'>;
    export type Deprecation = ReadonlyDeep_2<{
        sinceVersion: string;
        reason: string;
        plannedRemovalVersion?: string;
    }>;
    export type InputType = ReadonlyDeep_2<{
        name: string;
        constraints: {
            maxNumFields: number | null;
            minNumFields: number | null;
            fields?: string[];
        };
        meta?: {
            source?: string;
        };
        fields: SchemaArg[];
    }>;
    export type FieldRefType = ReadonlyDeep_2<{
        name: string;
        allowTypes: FieldRefAllowType[];
        fields: SchemaArg[];
    }>;
    export type FieldRefAllowType = TypeRef<'scalar' | 'enumTypes'>;
    export type ModelMapping = ReadonlyDeep_2<{
        model: string;
        plural: string;
        findUnique?: string | null;
        findUniqueOrThrow?: string | null;
        findFirst?: string | null;
        findFirstOrThrow?: string | null;
        findMany?: string | null;
        create?: string | null;
        createMany?: string | null;
        update?: string | null;
        updateMany?: string | null;
        upsert?: string | null;
        delete?: string | null;
        deleteMany?: string | null;
        aggregate?: string | null;
        groupBy?: string | null;
        count?: string | null;
        findRaw?: string | null;
        aggregateRaw?: string | null;
    }>;
    export enum ModelAction {
        findUnique = "findUnique",
        findUniqueOrThrow = "findUniqueOrThrow",
        findFirst = "findFirst",
        findFirstOrThrow = "findFirstOrThrow",
        findMany = "findMany",
        create = "create",
        createMany = "createMany",
        update = "update",
        updateMany = "updateMany",
        upsert = "upsert",
        delete = "delete",
        deleteMany = "deleteMany",
        groupBy = "groupBy",
        count = "count",// TODO: count does not actually exist, why?
        aggregate = "aggregate",
        findRaw = "findRaw",
        aggregateRaw = "aggregateRaw"
    }
}

export declare interface DriverAdapter extends Queryable {
    
    startTransaction(): Promise<Result_4<Transaction>>;
    
    getConnectionInfo?(): Result_4<ConnectionInfo>;
}


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
    [P in Exclude<keyof TypeMap['other']['operations'], keyof ExtArgs['client']>]: <R = GetResult<TypeMap['other']['payload'], any, P & Operation>>(...args: ToTuple<TypeMap['other']['operations'][P]['args']>) => PrismaPromise<R>;
} & {
    [P in Exclude<ClientBuiltInProp, keyof ExtArgs['client']>]: DynamicClientExtensionThisBuiltin<TypeMap, TypeMapCb, ExtArgs>[P];
} & {
    [K: symbol]: {
        types: TypeMap['other'];
    };
};

export declare type DynamicClientExtensionThisBuiltin<TypeMap extends TypeMapDef, TypeMapCb extends TypeMapCbDef, ExtArgs extends Record<string, any>> = {
    $extends: ExtendsHook<'extends', TypeMapCb, ExtArgs>;
    $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: {
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

export declare type DynamicModelExtensionFnResult<TypeMap extends TypeMapDef, M extends PropertyKey, A, P extends PropertyKey, Null = DynamicModelExtensionFnResultNull<P>> = P extends FluentOperation ? DynamicModelExtensionFluentApi<TypeMap, M, P, Null> & PrismaPromise<DynamicModelExtensionFnResultBase<TypeMap, M, A, P> | Null> : PrismaPromise<DynamicModelExtensionFnResultBase<TypeMap, M, A, P>>;

export declare type DynamicModelExtensionFnResultBase<TypeMap extends TypeMapDef, M extends PropertyKey, A, P extends PropertyKey> = GetResult<TypeMap['model'][M]['payload'], A, P & Operation>;

export declare type DynamicModelExtensionFnResultNull<P extends PropertyKey> = P extends 'findUnique' | 'findFirst' ? null : never;

export declare type DynamicModelExtensionOperationFn<TypeMap extends TypeMapDef, M extends PropertyKey, P extends PropertyKey> = {} extends TypeMap['model'][M]['operations'][P]['args'] ? <A extends TypeMap['model'][M]['operations'][P]['args']>(args?: Exact<A, TypeMap['model'][M]['operations'][P]['args']>) => DynamicModelExtensionFnResult<TypeMap, M, A, P> : <A extends TypeMap['model'][M]['operations'][P]['args']>(args: Exact<A, TypeMap['model'][M]['operations'][P]['args']>) => DynamicModelExtensionFnResult<TypeMap, M, A, P>;

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
}>;

export declare type DynamicResultExtensionNeeds<TypeMap extends TypeMapDef, M extends PropertyKey, S> = {
    [K in keyof S]: K extends keyof TypeMap['model'][M]['payload']['scalars'] ? S[K] : never;
} & {
    [N in keyof TypeMap['model'][M]['payload']['scalars']]?: boolean;
};


export declare const empty: Sql;

export declare type EmptyToUnknown<T> = T;

declare interface Engine<InteractiveTransactionPayload = unknown> {
    
    readonly name: string;
    onBeforeExit(callback: () => Promise<void>): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    version(forceRun?: boolean): Promise<string> | string;
    request<T>(query: JsonQuery, options: RequestOptions_2<InteractiveTransactionPayload>): Promise<QueryEngineResult<T>>;
    requestBatch<T>(queries: JsonQuery[], options: RequestBatchOptions<InteractiveTransactionPayload>): Promise<BatchQueryEngineResult<T>[]>;
    transaction(action: 'start', headers: Transaction_2.TransactionHeaders, options: Transaction_2.Options): Promise<Transaction_2.InteractiveTransactionInfo<unknown>>;
    transaction(action: 'commit', headers: Transaction_2.TransactionHeaders, info: Transaction_2.InteractiveTransactionInfo<unknown>): Promise<void>;
    transaction(action: 'rollback', headers: Transaction_2.TransactionHeaders, info: Transaction_2.InteractiveTransactionInfo<unknown>): Promise<void>;
    metrics(options: MetricsOptionsJson): Promise<Metrics>;
    metrics(options: MetricsOptionsPrometheus): Promise<string>;
}

declare interface EngineConfig {
    cwd: string;
    dirname: string;
    datamodelPath: string;
    enableDebugLogs?: boolean;
    allowTriggerPanic?: boolean;
    prismaPath?: string;
    generator?: GeneratorConfig;
    overrideDatasources: Datasources;
    showColors?: boolean;
    logQueries?: boolean;
    logLevel?: 'info' | 'warn';
    env: Record<string, string>;
    flags?: string[];
    clientVersion: string;
    engineVersion: string;
    previewFeatures?: string[];
    engineEndpoint?: string;
    activeProvider?: string;
    logEmitter: LogEmitter;
    transactionOptions: Transaction_2.Options;
    
    adapter?: ErrorCapturingDriverAdapter;
    
    inlineSchema: string;
    
    inlineDatasources: GetPrismaClientConfig['inlineDatasources'];
    
    inlineSchemaHash: string;
    
    tracingHelper: TracingHelper;
    
    isBundled?: boolean;
    
    engineWasm?: WasmLoadingConfig;
    
    accelerateUtils?: {
        resolveDatasourceUrl: typeof resolveDatasourceUrl;
        getBatchRequestPayload: typeof getBatchRequestPayload;
        prismaGraphQLToJSError: typeof prismaGraphQLToJSError;
        PrismaClientUnknownRequestError: typeof PrismaClientUnknownRequestError;
        PrismaClientInitializationError: typeof PrismaClientInitializationError;
        PrismaClientKnownRequestError: typeof PrismaClientKnownRequestError;
        debug: (...args: any[]) => void;
        engineVersion: string;
        clientVersion: string;
    };
}

declare type EngineEvent<E extends EngineEventType> = E extends QueryEventType ? QueryEvent : LogEvent;

declare type EngineEventType = QueryEventType | LogEventType;

declare type EngineProtocol = 'graphql' | 'json';

declare type EngineSpan = {
    span: boolean;
    name: string;
    trace_id: string;
    span_id: string;
    parent_span_id: string;
    start_time: [number, number];
    end_time: [number, number];
    attributes?: Record<string, string>;
    links?: {
        trace_id: string;
        span_id: string;
    }[];
};

declare type EngineSpanEvent = {
    span: boolean;
    spans: EngineSpan[];
};

declare interface EnvValue {
    fromEnvVar: null | string;
    value: null | string;
}

export declare type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? 1 : 0;

declare type Error_2 = {
    kind: 'GenericJs';
    id: number;
} | {
    kind: 'UnsupportedNativeDataType';
    type: string;
} | {
    kind: 'Postgres';
    code: string;
    severity: string;
    message: string;
    detail: string | undefined;
    column: string | undefined;
    hint: string | undefined;
} | {
    kind: 'Mysql';
    code: number;
    message: string;
    state: string;
} | {
    kind: 'Sqlite';
    
    extendedCode: number;
    message: string;
};

declare interface ErrorCapturingDriverAdapter extends DriverAdapter {
    readonly errorRegistry: ErrorRegistry;
}

declare type ErrorFormat = 'pretty' | 'colorless' | 'minimal';

declare type ErrorRecord = {
    error: unknown;
};

declare interface ErrorRegistry {
    consumeError(id: number): ErrorRecord | undefined;
}

declare interface ErrorWithBatchIndex {
    batchRequestIdx?: number;
}

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

declare type ExtendedSpanOptions = SpanOptions & {
    
    name: string;
    internal?: boolean;
    middleware?: boolean;
    
    active?: boolean;
    
    context?: Context;
};


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
        GetPayloadResult,
        GetSelect,
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
        TypeMapCbDef,
        ModelKey,
        RequiredExtensionArgs as UserArgs
    }
}

declare type Fetch = typeof nodeFetch;


export declare interface FieldRef<Model, FieldType> {
    readonly modelName: Model;
    readonly name: string;
    readonly typeName: FieldType;
    readonly isList: boolean;
}

export declare type FluentOperation = 'findUnique' | 'findUniqueOrThrow' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'update' | 'upsert' | 'delete';

export declare interface Fn<Params = unknown, Returns = unknown> {
    params: Params;
    returns: Returns;
}

declare interface GeneratorConfig {
    name: string;
    output: EnvValue | null;
    isCustomOutput?: boolean;
    provider: EnvValue;
    config: Dictionary<string | string[]>;
    binaryTargets: BinaryTargetsEnvValue[];
    previewFeatures: string[];
}

export declare type GetAggregateResult<P extends OperationPayload, A> = {
    [K in keyof A as K extends Aggregate ? K : never]: K extends '_count' ? A[K] extends true ? number : Count<A[K]> : {
        [J in keyof A[K] & string]: P['scalars'][J] | null;
    };
};

declare function getBatchRequestPayload(batch: JsonQuery[], transaction?: TransactionOptions_2<unknown>): QueryEngineBatchRequest;

export declare type GetBatchResult = {
    count: number;
};

export declare type GetCountResult<A> = A extends {
    select: infer S;
} ? (S extends true ? number : Count<S>) : number;

declare function getExtensionContext<T>(that: T): Context_2<T>;

export declare type GetFindResult<P extends OperationPayload, A> = Equals<A, any> extends 1 ? DefaultSelection<P> : A extends {
    select: infer S extends object;
} & Record<string, unknown> | {
    include: infer I extends object;
} & Record<string, unknown> ? {
    [K in keyof S | keyof I as (S & I)[K] extends false | undefined | null ? never : K]: (S & I)[K] extends object ? P extends SelectablePayloadFields<K, (infer O)[]> ? O extends OperationPayload ? GetFindResult<O, (S & I)[K]>[] : never : P extends SelectablePayloadFields<K, infer O | null> ? O extends OperationPayload ? GetFindResult<O, (S & I)[K]> | SelectField<P, K> & null : never : K extends '_count' ? Count<GetFindResult<P, (S & I)[K]>> : never : P extends SelectablePayloadFields<K, (infer O)[]> ? O extends OperationPayload ? DefaultSelection<O>[] : never : P extends SelectablePayloadFields<K, infer O | null> ? O extends OperationPayload ? DefaultSelection<O> | SelectField<P, K> & null : never : P extends {
        scalars: {
            [k in K]: infer O;
        };
    } ? O : K extends '_count' ? Count<P['objects']> : never;
} & (A extends {
    include: any;
} & Record<string, unknown> ? DefaultSelection<P> : unknown) : DefaultSelection<P>;

export declare type GetGroupByResult<P extends OperationPayload, A> = A extends {
    by: string[];
} ? Array<GetAggregateResult<P, A> & {
    [K in A['by'][number]]: P['scalars'][K];
}> : A extends {
    by: string;
} ? Array<GetAggregateResult<P, A> & {
    [K in A['by']]: P['scalars'][K];
}> : {}[];

export declare type GetPayloadResult<Base extends Record<any, any>, R extends InternalArgs['result'][string], KR extends keyof R = string extends keyof R ? never : keyof R> = unknown extends R ? Base : {
    [K in KR | keyof Base]: K extends KR ? R[K] extends () => {
        compute: (...args: any) => infer C;
    } ? C : never : Base[K];
};

export declare function getPrismaClient(config: GetPrismaClientConfig): {
    new (optionsArg?: PrismaClientOptions): {
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
        _metrics: MetricsClient;
        _middlewares: MiddlewareHandler<QueryMiddleware>;
        _previewFeatures: string[];
        _activeProvider: string;
        _extensions: MergedExtensionsList;
        _engine: Engine;
        
        _appliedParent: any;
        _createPrismaPromise: PrismaPromiseFactory;
        
        $use(middleware: QueryMiddleware): void;
        $on<E extends ExtendedEventType>(eventType: E, callback: EventCallback<E>): void;
        $connect(): Promise<void>;
        
        $disconnect(): Promise<void>;
        
        $executeRawInternal(transaction: PrismaPromiseTransaction | undefined, clientMethod: string, args: RawQueryArgs, middlewareArgsMapper?: MiddlewareArgsMapper<unknown, unknown>): Promise<number>;
        
        $executeRaw(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise_2<unknown>;
        
        $executeRawUnsafe(query: string, ...values: RawValue[]): PrismaPromise_2<unknown>;
        
        $runCommandRaw(command: Record<string, JsInputValue>): PrismaPromise_2<unknown>;
        
        $queryRawInternal(transaction: PrismaPromiseTransaction | undefined, clientMethod: string, args: RawQueryArgs, middlewareArgsMapper?: MiddlewareArgsMapper<unknown, unknown>): Promise<unknown[]>;
        
        $queryRaw(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise_2<unknown>;
        
        $queryRawUnsafe(query: string, ...values: RawValue[]): PrismaPromise_2<unknown>;
        
        _transactionWithArray({ promises, options, }: {
            promises: Array<PrismaPromise_2<any>>;
            options?: BatchTransactionOptions | undefined;
        }): Promise<any>;
        
        _transactionWithCallback({ callback, options, }: {
            callback: (client: Client) => Promise<unknown>;
            options?: Options | undefined;
        }): Promise<unknown>;
        _createItxClient(transaction: PrismaPromiseInteractiveTransaction): Client;
        
        $transaction(input: any, options?: any): Promise<any>;
        
        _request(internalParams: InternalRequestParams): Promise<any>;
        _executeRequest({ args, clientMethod, dataPath, callsite, action, model, argsMapper, transaction, unpacker, otelParentCtx, customDataProxyFetch, }: InternalRequestParams): Promise<any>;
        readonly $metrics: MetricsClient;
        
        _hasPreviewFlag(feature: string): boolean;
        $extends: typeof $extends;
        readonly [Symbol.toStringTag]: string;
    };
};


declare type GetPrismaClientConfig = {
    runtimeDataModel: RuntimeDataModel;
    generator?: GeneratorConfig;
    relativeEnvPaths: {
        rootEnvPath?: string | null;
        schemaEnvPath?: string | null;
    };
    relativePath: string;
    dirname: string;
    filename?: string;
    clientVersion: string;
    engineVersion: string;
    datasourceNames: string[];
    activeProvider: string;
    
    inlineSchema: string;
    
    injectableEdgeEnv?: () => LoadedEnv;
    
    inlineDatasources: {
        [name in string]: {
            url: EnvValue;
        };
    };
    
    inlineSchemaHash: string;
    
    postinstall?: boolean;
    
    ciName?: string;
    
    isBundled?: boolean;
    
    copyEngine?: boolean;
    
    engineWasm?: WasmLoadingConfig;
};

export declare type GetResult<P extends OperationPayload, A, O extends Operation = 'findUniqueOrThrow'> = {
    findUnique: GetFindResult<P, A> | null;
    findUniqueOrThrow: GetFindResult<P, A>;
    findFirst: GetFindResult<P, A> | null;
    findFirstOrThrow: GetFindResult<P, A>;
    findMany: GetFindResult<P, A>[];
    create: GetFindResult<P, A>;
    createMany: GetBatchResult;
    update: GetFindResult<P, A>;
    updateMany: GetBatchResult;
    upsert: GetFindResult<P, A>;
    delete: GetFindResult<P, A>;
    deleteMany: GetBatchResult;
    aggregate: GetAggregateResult<P, A>;
    count: GetCountResult<A>;
    groupBy: GetGroupByResult<P, A>;
    $queryRaw: unknown;
    $executeRaw: number;
    $queryRawUnsafe: unknown;
    $executeRawUnsafe: number;
    $runCommandRaw: JsonObject;
    findRaw: JsonObject;
    aggregateRaw: JsonObject;
}[O];

export declare type GetSelect<Base extends Record<any, any>, R extends InternalArgs['result'][string], KR extends keyof R = string extends keyof R ? never : keyof R> = {
    [K in KR | keyof Base]?: K extends KR ? boolean : Base[K];
};

declare type HandleErrorParams = {
    args: JsArgs;
    error: any;
    clientMethod: string;
    callsite?: CallSite;
    transaction?: PrismaPromiseTransaction;
    modelName?: string;
};


declare type HrTime = [number, number];

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
    
    customDataProxyFetch?: (fetch: Fetch) => Fetch;
} & Omit<QueryMiddlewareParams, 'runInTransaction'>;

declare enum IsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Snapshot = "Snapshot",
    Serializable = "Serializable"
}

export declare type ITXClientDenyList = (typeof denylist)[number];

export declare const itxClientDenyList: readonly (string | symbol)[];

declare interface Job {
    resolve: (data: any) => void;
    reject: (data: any) => void;
    request: any;
}


export declare function join(values: readonly RawValue[], separator?: string, prefix?: string, suffix?: string): Sql;

export declare type JsArgs = {
    select?: Selection_2;
    include?: Selection_2;
    [argName: string]: JsInputValue;
};

export declare type JsInputValue = null | undefined | string | number | boolean | bigint | Uint8Array | Date | DecimalJsLike | ObjectEnumValue | RawParameters | JsonConvertible | FieldRef<string, unknown> | JsInputValue[] | {
    [key: string]: JsInputValue;
};

declare type JsonArgumentValue = number | string | boolean | null | RawTaggedValue | JsonArgumentValue[] | {
    [key: string]: JsonArgumentValue;
};

export declare interface JsonArray extends Array<JsonValue> {
}

declare type JsonBatchQuery = {
    batch: JsonQuery[];
    transaction?: {
        isolationLevel?: Transaction_2.IsolationLevel;
    };
};

export declare interface JsonConvertible {
    toJSON(): unknown;
}

declare type JsonFieldSelection = {
    arguments?: Record<string, JsonArgumentValue> | RawTaggedValue;
    selection: JsonSelectionSet;
};

declare class JsonNull extends NullTypesEnumValue {
}

export declare type JsonObject = {
    [Key in string]?: JsonValue;
};

declare type JsonQuery = {
    modelName?: string;
    action: JsonQueryAction;
    query: JsonFieldSelection;
};

declare type JsonQueryAction = 'findUnique' | 'findUniqueOrThrow' | 'findFirst' | 'findFirstOrThrow' | 'findMany' | 'createOne' | 'createMany' | 'updateOne' | 'updateMany' | 'deleteOne' | 'deleteMany' | 'upsertOne' | 'aggregate' | 'groupBy' | 'executeRaw' | 'queryRaw' | 'runCommandRaw' | 'findRaw' | 'aggregateRaw';

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

declare type KnownErrorParams = {
    code: string;
    clientVersion: string;
    meta?: Record<string, unknown>;
    batchRequestIdx?: number;
};


declare interface Link {
    
    context: SpanContext;
    
    attributes?: SpanAttributes;
    
    droppedAttributesCount?: number;
}

declare type LoadedEnv = {
    message?: string;
    parsed: {
        [x: string]: string;
    };
} | undefined;

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

export declare type Metric<T> = {
    key: string;
    value: T;
    labels: Record<string, string>;
    description: string;
};

export declare type MetricHistogram = {
    buckets: MetricHistogramBucket[];
    sum: number;
    count: number;
};

export declare type MetricHistogramBucket = [maxValue: number, count: number];

export declare type Metrics = {
    counters: Metric<number>[];
    gauges: Metric<number>[];
    histograms: Metric<MetricHistogram>[];
};

export declare class MetricsClient {
    private _engine;
    constructor(engine: Engine);
    
    prometheus(options?: MetricsOptions): Promise<string>;
    
    json(options?: MetricsOptions): Promise<Metrics>;
}

declare type MetricsOptions = {
    
    globalLabels?: Record<string, string>;
};

declare type MetricsOptionsCommon = {
    globalLabels?: Record<string, string>;
};

declare type MetricsOptionsJson = {
    format: 'json';
} & MetricsOptionsCommon;

declare type MetricsOptionsPrometheus = {
    format: 'prometheus';
} & MetricsOptionsCommon;

declare type MiddlewareArgsMapper<RequestArgs, MiddlewareArgs> = {
    requestArgsToMiddlewareArgs(requestArgs: RequestArgs): MiddlewareArgs;
    middlewareArgsToRequestArgs(middlewareArgs: MiddlewareArgs): RequestArgs;
};

declare class MiddlewareHandler<M extends Function> {
    private _middlewares;
    use(middleware: M): void;
    get(id: number): M | undefined;
    has(id: number): boolean;
    length(): number;
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

export declare type ModelQueryOptionsCb = (args: ModelQueryOptionsCbArgs) => Promise<any>;

export declare type ModelQueryOptionsCbArgs = {
    model: string;
    operation: string;
    args: JsArgs;
    query: (args: JsArgs) => Promise<unknown>;
};

export declare type NameArgs = {
    name?: string;
};

export declare type Narrow<A> = {
    [K in keyof A]: A[K] extends Function ? A[K] : Narrow<A[K]>;
} | (A extends Narrowable ? A : never);

export declare type Narrowable = string | number | bigint | boolean | [];

export declare type NeverToUnknown<T> = [T] extends [never] ? unknown : T;


declare function nodeFetch(url: string, options?: RequestOptions): Promise<RequestResponse>;

declare class NodeHeaders {
    readonly headers: Map<string, string>;
    constructor(init?: Record<any, any>);
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: this) => void, thisArg?: any): void;
}


export declare class NotFoundError extends PrismaClientKnownRequestError {
    constructor(message: string, clientVersion: string);
}

declare class NullTypesEnumValue extends ObjectEnumValue {
    _getNamespace(): string;
}


export declare const objectEnumNames: string[];


export declare abstract class ObjectEnumValue {
    constructor(arg?: symbol);
    abstract _getNamespace(): string;
    _getName(): string;
    toString(): string;
}

export declare const objectEnumValues: {
    classes: {
        DbNull: typeof DbNull;
        JsonNull: typeof JsonNull;
        AnyNull: typeof AnyNull;
    };
    instances: {
        DbNull: DbNull;
        JsonNull: JsonNull;
        AnyNull: AnyNull;
    };
};

declare type Omit_2<T, K extends string | number | symbol> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
export { Omit_2 as Omit }

export declare type Operation = 'findFirst' | 'findFirstOrThrow' | 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'create' | 'createMany' | 'update' | 'updateMany' | 'upsert' | 'delete' | 'deleteMany' | 'aggregate' | 'count' | 'groupBy' | '$queryRaw' | '$executeRaw' | '$queryRawUnsafe' | '$executeRawUnsafe' | 'findRaw' | 'aggregateRaw' | '$runCommandRaw';

export declare type OperationPayload = {
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
    isolationLevel?: IsolationLevel;
};

declare type Options_2 = {
    clientVersion: string;
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

export declare class PrismaClientInitializationError extends Error {
    clientVersion: string;
    errorCode?: string;
    retryable?: boolean;
    constructor(message: string, clientVersion: string, errorCode?: string);
    get [Symbol.toStringTag](): string;
}

export declare class PrismaClientKnownRequestError extends Error implements ErrorWithBatchIndex {
    code: string;
    meta?: Record<string, unknown>;
    clientVersion: string;
    batchRequestIdx?: number;
    constructor(message: string, { code, clientVersion, meta, batchRequestIdx }: KnownErrorParams);
    get [Symbol.toStringTag](): string;
}

export declare type PrismaClientOptions = {
    
    datasourceUrl?: string;
    
    adapter?: DriverAdapter | null;
    
    datasources?: Datasources;
    
    errorFormat?: ErrorFormat;
    
    transactionOptions?: Transaction_2.Options;
    
    log?: Array<LogLevel | LogDefinition>;
    
    __internal?: {
        debug?: boolean;
        engine?: {
            cwd?: string;
            binaryPath?: string;
            endpoint?: string;
            allowTriggerPanic?: boolean;
        };
        
        configOverride?: (config: GetPrismaClientConfig) => GetPrismaClientConfig;
    };
};

export declare class PrismaClientRustPanicError extends Error {
    clientVersion: string;
    constructor(message: string, clientVersion: string);
    get [Symbol.toStringTag](): string;
}

export declare class PrismaClientUnknownRequestError extends Error implements ErrorWithBatchIndex {
    clientVersion: string;
    batchRequestIdx?: number;
    constructor(message: string, { clientVersion, batchRequestIdx }: UnknownErrorParams);
    get [Symbol.toStringTag](): string;
}

export declare class PrismaClientValidationError extends Error {
    name: string;
    clientVersion: string;
    constructor(message: string, { clientVersion }: Options_2);
    get [Symbol.toStringTag](): string;
}

declare function prismaGraphQLToJSError({ error, user_facing_error }: RequestError, clientVersion: string, activeProvider: string): PrismaClientKnownRequestError | PrismaClientUnknownRequestError;

export declare interface PrismaPromise<T> extends Promise<T> {
    [Symbol.toStringTag]: 'PrismaPromise';
}


declare interface PrismaPromise_2<A> extends Promise<A> {
    
    then<R1 = A, R2 = never>(onfulfilled?: (value: A) => R1 | PromiseLike<R1>, onrejected?: (error: unknown) => R2 | PromiseLike<R2>, transaction?: PrismaPromiseTransaction): Promise<R1 | R2>;
    
    catch<R = never>(onrejected?: ((reason: any) => R | PromiseLike<R>) | undefined | null, transaction?: PrismaPromiseTransaction): Promise<A | R>;
    
    finally(onfinally?: (() => void) | undefined | null, transaction?: PrismaPromiseTransaction): Promise<A>;
    
    requestTransaction?(transaction: PrismaPromiseBatchTransaction): PromiseLike<unknown>;
}

declare type PrismaPromiseBatchTransaction = {
    kind: 'batch';
    id: number;
    isolationLevel?: IsolationLevel;
    index: number;
    lock: PromiseLike<void>;
};

declare type PrismaPromiseCallback = (transaction?: PrismaPromiseTransaction) => PrismaPromise_2<unknown>;


declare type PrismaPromiseFactory = (callback: PrismaPromiseCallback) => PrismaPromise_2<unknown>;

declare type PrismaPromiseInteractiveTransaction<PayloadType = unknown> = {
    kind: 'itx';
    id: string;
    payload: PayloadType;
};

declare type PrismaPromiseTransaction<PayloadType = unknown> = PrismaPromiseBatchTransaction | PrismaPromiseInteractiveTransaction<PayloadType>;

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

declare type Query = {
    sql: string;
    args: Array<unknown>;
};

declare interface Queryable {
    readonly provider: 'mysql' | 'postgres' | 'sqlite';
    
    queryRaw(params: Query): Promise<Result_4<ResultSet>>;
    
    executeRaw(params: Query): Promise<Result_4<number>>;
}

declare type QueryEngineBatchGraphQLRequest = {
    batch: QueryEngineRequest[];
    transaction?: boolean;
    isolationLevel?: Transaction_2.IsolationLevel;
};

declare type QueryEngineBatchRequest = QueryEngineBatchGraphQLRequest | JsonBatchQuery;

declare type QueryEngineConfig = {
    datamodel: string;
    configDir: string;
    logQueries: boolean;
    ignoreEnvVarErrors: boolean;
    datasourceOverrides: Record<string, string>;
    env: Record<string, string | undefined>;
    logLevel: QueryEngineLogLevel;
    telemetry?: QueryEngineTelemetry;
    engineProtocol: EngineProtocol;
};

declare interface QueryEngineConstructor {
    new (config: QueryEngineConfig, logger: (log: string) => void, adapter?: ErrorCapturingDriverAdapter): QueryEngineInstance;
}

declare type QueryEngineInstance = {
    connect(headers: string): Promise<void>;
    disconnect(headers: string): Promise<void>;
    
    query(requestStr: string, headersStr: string, transactionId?: string): Promise<string>;
    sdlSchema(): Promise<string>;
    dmmf(traceparent: string): Promise<string>;
    startTransaction(options: string, traceHeaders: string): Promise<string>;
    commitTransaction(id: string, traceHeaders: string): Promise<string>;
    rollbackTransaction(id: string, traceHeaders: string): Promise<string>;
    metrics(options: string): Promise<string>;
};

declare type QueryEngineLogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'off';

declare type QueryEngineRequest = {
    query: string;
    variables: Object;
};

declare type QueryEngineResult<T> = {
    data: T;
    elapsed: number;
};

declare type QueryEngineTelemetry = {
    enabled: Boolean;
    endpoint: string;
};

declare type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};

declare type QueryEventType = 'query';

declare type QueryMiddleware = (params: QueryMiddlewareParams, next: (params: QueryMiddlewareParams) => Promise<unknown>) => Promise<unknown>;

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


export declare function raw(value: string): Sql;

export declare type RawParameters = {
    __prismaRawParameters__: true;
    values: string;
};

export declare type RawQueryArgs = Sql | [query: string, ...values: RawValue[]];

declare type RawTaggedValue = {
    $type: 'Raw';
    value: unknown;
};


export declare type RawValue = Value | Sql;

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
    customDataProxyFetch?: (fetch: Fetch) => Fetch;
};

declare interface RequestError {
    error: string;
    user_facing_error: {
        is_panic: boolean;
        message: string;
        meta?: Record<string, unknown>;
        error_code?: string;
        batch_request_idx?: number;
    };
}

declare class RequestHandler {
    client: Client;
    dataloader: DataLoader<RequestParams>;
    private logEmitter?;
    constructor(client: Client, logEmitter?: LogEmitter);
    request(params: RequestParams): Promise<any>;
    mapQueryEngineResult({ dataPath, unpacker }: RequestParams, response: QueryEngineResult<any>): any;
    
    handleAndLogRequestError(params: HandleErrorParams): never;
    handleRequestError({ error, clientMethod, callsite, transaction, args, modelName }: HandleErrorParams): never;
    sanitizeMessage(message: any): any;
    unpack(data: unknown, dataPath: string[], unpacker?: Unpacker): any;
    get [Symbol.toStringTag](): string;
}

declare type RequestOptions = {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
};

declare type RequestOptions_2<InteractiveTransactionPayload> = {
    traceparent?: string;
    numTry?: number;
    interactiveTransaction?: InteractiveTransactionOptions<InteractiveTransactionPayload>;
    isWrite: boolean;
    customDataProxyFetch?: (fetch: Fetch) => Fetch;
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
    customDataProxyFetch?: (fetch: Fetch) => Fetch;
};

declare type RequestResponse = {
    ok: boolean;
    url: string;
    statusText?: string;
    status: number;
    headers: NodeHeaders;
    text: () => Promise<string>;
    json: () => Promise<any>;
};

declare type RequiredExtensionArgs = NameArgs & ResultArgs & ModelArgs & ClientArgs & QueryOptions;
export { RequiredExtensionArgs }
export { RequiredExtensionArgs as UserArgs }

export declare type RequiredKeys<O> = {
    [K in keyof O]-?: {} extends Pick_2<O, K> ? never : K;
}[keyof O];

declare function resolveDatasourceUrl({ inlineDatasources, overrideDatasources, env, clientVersion, }: {
    inlineDatasources: GetPrismaClientConfig['inlineDatasources'];
    overrideDatasources: Datasources;
    env: Record<string, string | undefined>;
    clientVersion: string;
}): string;

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
}, {}, F>;

export declare type Result_2<T, A, F extends Operation> = Result<T, A, F>;

declare namespace Result_3 {
    export {
        Operation,
        FluentOperation,
        Count,
        GetFindResult,
        SelectablePayloadFields,
        SelectField,
        DefaultSelection,
        UnwrapPayload,
        GetCountResult,
        Aggregate,
        GetAggregateResult,
        GetBatchResult,
        GetGroupByResult,
        GetResult
    }
}

declare type Result_4<T> = {
    map<U>(fn: (value: T) => U): Result_4<U>;
    flatMap<U>(fn: (value: T) => Result_4<U>): Result_4<U>;
} & ({
    readonly ok: true;
    readonly value: T;
} | {
    readonly ok: false;
    readonly error: Error_2;
});

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

declare interface ResultSet {
    
    columnTypes: Array<ColumnType>;
    
    columnNames: Array<string>;
    
    rows: Array<Array<unknown>>;
    
    lastInsertId?: string;
}

export declare type Return<T> = T extends (...args: any[]) => infer R ? R : T;

declare type Runtime = "edge-routine" | "workerd" | "deno" | "lagon" | "react-native" | "netlify" | "electron" | "node" | "bun" | "edge-light" | "fastly" | "unknown";

declare type RuntimeDataModel = {
    readonly models: Record<string, RuntimeModel>;
    readonly enums: Record<string, RuntimeEnum>;
    readonly types: Record<string, RuntimeModel>;
};

declare type RuntimeEnum = Omit<DMMF.DatamodelEnum, 'name'>;

declare type RuntimeModel = Omit<DMMF.Model, 'name'>;

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

declare type Selection_2 = Record<string, boolean | JsArgs>;
export { Selection_2 as Selection }


declare interface Span {
    
    spanContext(): SpanContext;
    
    setAttribute(key: string, value: SpanAttributeValue): this;
    
    setAttributes(attributes: SpanAttributes): this;
    
    addEvent(name: string, attributesOrStartTime?: SpanAttributes | TimeInput, startTime?: TimeInput): this;
    
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


export declare class Sql {
    readonly values: Value[];
    readonly strings: string[];
    constructor(rawStrings: readonly string[], rawValues: readonly RawValue[]);
    get text(): string;
    get sql(): string;
    get statement(): string;
    inspect(): {
        text: string;
        sql: string;
        values: unknown[];
    };
}


export declare function sqltag(strings: readonly string[], ...values: readonly RawValue[]): Sql;


declare type TimeInput = HrTime | number | Date;

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
    createEngineSpan(engineSpanEvent: EngineSpanEvent): void;
    getActiveContext(): Context | undefined;
    runInChildSpan<R>(nameOrOptions: string | ExtendedSpanOptions, callback: SpanCallback<R>): R;
}

declare interface Transaction extends Queryable {
    
    readonly options: TransactionOptions;
    
    commit(): Promise<Result_4<void>>;
    
    rollback(): Promise<Result_4<void>>;
}

declare namespace Transaction_2 {
    export {
        IsolationLevel,
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

export declare type TypeMapCbDef = Fn<{
    extArgs: InternalArgs;
}, TypeMapDef>;


export declare type TypeMapDef = Record<any, any>;

declare namespace Types {
    export {
        Result_3 as Result,
        Extensions_2 as Extensions,
        Utils,
        Public_2 as Public,
        OperationPayload as Payload
    }
}
export { Types }

declare type UnknownErrorParams = {
    clientVersion: string;
    batchRequestIdx?: number;
};

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
        JsonObject,
        JsonArray,
        JsonValue,
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

declare function validator<V>(): <S>(select: Exact<S, V>) => S;

declare function validator<C, M extends Exclude<keyof C, `$${string}`>, O extends keyof C[M] & Operation>(client: C, model: M, operation: O): <S>(select: Exact<S, Args<C[M], O>>) => S;

declare function validator<C, M extends Exclude<keyof C, `$${string}`>, O extends keyof C[M] & Operation, P extends keyof Args<C[M], O>>(client: C, model: M, operation: O, prop: P): <S>(select: Exact<S, Args<C[M], O>[P]>) => S;


export declare type Value = unknown;

export declare function warnEnvConflicts(envPaths: any): void;

export declare const warnOnce: (key: string, message: string, ...args: unknown[]) => void;

declare type WasmLoadingConfig = {
    
    getRuntime: () => {
        __wbg_set_wasm(exports: unknown): any;
        QueryEngine: QueryEngineConstructor;
    };
    
    getQueryEngineWasmModule: () => Promise<unknown>;
};

export { }
