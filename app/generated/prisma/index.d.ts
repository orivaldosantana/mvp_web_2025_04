
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
 * Model Colaborator
 * 
 */
export type Colaborator = $Result.DefaultSelection<Prisma.$ColaboratorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Colaborators
 * const colaborators = await prisma.colaborator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Colaborators
   * const colaborators = await prisma.colaborator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.colaborator`: Exposes CRUD operations for the **Colaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colaborators
    * const colaborators = await prisma.colaborator.findMany()
    * ```
    */
  get colaborator(): Prisma.ColaboratorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Colaborator: 'Colaborator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "colaborator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Colaborator: {
        payload: Prisma.$ColaboratorPayload<ExtArgs>
        fields: Prisma.ColaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          findFirst: {
            args: Prisma.ColaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          findMany: {
            args: Prisma.ColaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>[]
          }
          create: {
            args: Prisma.ColaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          createMany: {
            args: Prisma.ColaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>[]
          }
          delete: {
            args: Prisma.ColaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          update: {
            args: Prisma.ColaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          deleteMany: {
            args: Prisma.ColaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>[]
          }
          upsert: {
            args: Prisma.ColaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboratorPayload>
          }
          aggregate: {
            args: Prisma.ColaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColaborator>
          }
          groupBy: {
            args: Prisma.ColaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<ColaboratorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    colaborator?: ColaboratorOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Colaborator
   */

  export type AggregateColaborator = {
    _count: ColaboratorCountAggregateOutputType | null
    _avg: ColaboratorAvgAggregateOutputType | null
    _sum: ColaboratorSumAggregateOutputType | null
    _min: ColaboratorMinAggregateOutputType | null
    _max: ColaboratorMaxAggregateOutputType | null
  }

  export type ColaboratorAvgAggregateOutputType = {
    id: number | null
  }

  export type ColaboratorSumAggregateOutputType = {
    id: number | null
  }

  export type ColaboratorMinAggregateOutputType = {
    id: number | null
    name: string | null
    mat: string | null
  }

  export type ColaboratorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    mat: string | null
  }

  export type ColaboratorCountAggregateOutputType = {
    id: number
    name: number
    mat: number
    _all: number
  }


  export type ColaboratorAvgAggregateInputType = {
    id?: true
  }

  export type ColaboratorSumAggregateInputType = {
    id?: true
  }

  export type ColaboratorMinAggregateInputType = {
    id?: true
    name?: true
    mat?: true
  }

  export type ColaboratorMaxAggregateInputType = {
    id?: true
    name?: true
    mat?: true
  }

  export type ColaboratorCountAggregateInputType = {
    id?: true
    name?: true
    mat?: true
    _all?: true
  }

  export type ColaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborator to aggregate.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colaborators
    **/
    _count?: true | ColaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColaboratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColaboratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColaboratorMaxAggregateInputType
  }

  export type GetColaboratorAggregateType<T extends ColaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateColaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColaborator[P]>
      : GetScalarType<T[P], AggregateColaborator[P]>
  }




  export type ColaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboratorWhereInput
    orderBy?: ColaboratorOrderByWithAggregationInput | ColaboratorOrderByWithAggregationInput[]
    by: ColaboratorScalarFieldEnum[] | ColaboratorScalarFieldEnum
    having?: ColaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColaboratorCountAggregateInputType | true
    _avg?: ColaboratorAvgAggregateInputType
    _sum?: ColaboratorSumAggregateInputType
    _min?: ColaboratorMinAggregateInputType
    _max?: ColaboratorMaxAggregateInputType
  }

  export type ColaboratorGroupByOutputType = {
    id: number
    name: string
    mat: string
    _count: ColaboratorCountAggregateOutputType | null
    _avg: ColaboratorAvgAggregateOutputType | null
    _sum: ColaboratorSumAggregateOutputType | null
    _min: ColaboratorMinAggregateOutputType | null
    _max: ColaboratorMaxAggregateOutputType | null
  }

  type GetColaboratorGroupByPayload<T extends ColaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], ColaboratorGroupByOutputType[P]>
        }
      >
    >


  export type ColaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mat?: boolean
  }, ExtArgs["result"]["colaborator"]>

  export type ColaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mat?: boolean
  }, ExtArgs["result"]["colaborator"]>

  export type ColaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mat?: boolean
  }, ExtArgs["result"]["colaborator"]>

  export type ColaboratorSelectScalar = {
    id?: boolean
    name?: boolean
    mat?: boolean
  }

  export type ColaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mat", ExtArgs["result"]["colaborator"]>

  export type $ColaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Colaborator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      mat: string
    }, ExtArgs["result"]["colaborator"]>
    composites: {}
  }

  type ColaboratorGetPayload<S extends boolean | null | undefined | ColaboratorDefaultArgs> = $Result.GetResult<Prisma.$ColaboratorPayload, S>

  type ColaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColaboratorCountAggregateInputType | true
    }

  export interface ColaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Colaborator'], meta: { name: 'Colaborator' } }
    /**
     * Find zero or one Colaborator that matches the filter.
     * @param {ColaboratorFindUniqueArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColaboratorFindUniqueArgs>(args: SelectSubset<T, ColaboratorFindUniqueArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColaboratorFindUniqueOrThrowArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorFindFirstArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColaboratorFindFirstArgs>(args?: SelectSubset<T, ColaboratorFindFirstArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorFindFirstOrThrowArgs} args - Arguments to find a Colaborator
     * @example
     * // Get one Colaborator
     * const colaborator = await prisma.colaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colaborators
     * const colaborators = await prisma.colaborator.findMany()
     * 
     * // Get first 10 Colaborators
     * const colaborators = await prisma.colaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colaboratorWithIdOnly = await prisma.colaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColaboratorFindManyArgs>(args?: SelectSubset<T, ColaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colaborator.
     * @param {ColaboratorCreateArgs} args - Arguments to create a Colaborator.
     * @example
     * // Create one Colaborator
     * const Colaborator = await prisma.colaborator.create({
     *   data: {
     *     // ... data to create a Colaborator
     *   }
     * })
     * 
     */
    create<T extends ColaboratorCreateArgs>(args: SelectSubset<T, ColaboratorCreateArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colaborators.
     * @param {ColaboratorCreateManyArgs} args - Arguments to create many Colaborators.
     * @example
     * // Create many Colaborators
     * const colaborator = await prisma.colaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColaboratorCreateManyArgs>(args?: SelectSubset<T, ColaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colaborators and returns the data saved in the database.
     * @param {ColaboratorCreateManyAndReturnArgs} args - Arguments to create many Colaborators.
     * @example
     * // Create many Colaborators
     * const colaborator = await prisma.colaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colaborators and only return the `id`
     * const colaboratorWithIdOnly = await prisma.colaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colaborator.
     * @param {ColaboratorDeleteArgs} args - Arguments to delete one Colaborator.
     * @example
     * // Delete one Colaborator
     * const Colaborator = await prisma.colaborator.delete({
     *   where: {
     *     // ... filter to delete one Colaborator
     *   }
     * })
     * 
     */
    delete<T extends ColaboratorDeleteArgs>(args: SelectSubset<T, ColaboratorDeleteArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colaborator.
     * @param {ColaboratorUpdateArgs} args - Arguments to update one Colaborator.
     * @example
     * // Update one Colaborator
     * const colaborator = await prisma.colaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColaboratorUpdateArgs>(args: SelectSubset<T, ColaboratorUpdateArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colaborators.
     * @param {ColaboratorDeleteManyArgs} args - Arguments to filter Colaborators to delete.
     * @example
     * // Delete a few Colaborators
     * const { count } = await prisma.colaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColaboratorDeleteManyArgs>(args?: SelectSubset<T, ColaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colaborators
     * const colaborator = await prisma.colaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColaboratorUpdateManyArgs>(args: SelectSubset<T, ColaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaborators and returns the data updated in the database.
     * @param {ColaboratorUpdateManyAndReturnArgs} args - Arguments to update many Colaborators.
     * @example
     * // Update many Colaborators
     * const colaborator = await prisma.colaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colaborators and only return the `id`
     * const colaboratorWithIdOnly = await prisma.colaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colaborator.
     * @param {ColaboratorUpsertArgs} args - Arguments to update or create a Colaborator.
     * @example
     * // Update or create a Colaborator
     * const colaborator = await prisma.colaborator.upsert({
     *   create: {
     *     // ... data to create a Colaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colaborator we want to update
     *   }
     * })
     */
    upsert<T extends ColaboratorUpsertArgs>(args: SelectSubset<T, ColaboratorUpsertArgs<ExtArgs>>): Prisma__ColaboratorClient<$Result.GetResult<Prisma.$ColaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorCountArgs} args - Arguments to filter Colaborators to count.
     * @example
     * // Count the number of Colaborators
     * const count = await prisma.colaborator.count({
     *   where: {
     *     // ... the filter for the Colaborators we want to count
     *   }
     * })
    **/
    count<T extends ColaboratorCountArgs>(
      args?: Subset<T, ColaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColaboratorAggregateArgs>(args: Subset<T, ColaboratorAggregateArgs>): Prisma.PrismaPromise<GetColaboratorAggregateType<T>>

    /**
     * Group by Colaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboratorGroupByArgs} args - Group by arguments.
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
      T extends ColaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColaboratorGroupByArgs['orderBy'] }
        : { orderBy?: ColaboratorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Colaborator model
   */
  readonly fields: ColaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Colaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Colaborator model
   */
  interface ColaboratorFieldRefs {
    readonly id: FieldRef<"Colaborator", 'Int'>
    readonly name: FieldRef<"Colaborator", 'String'>
    readonly mat: FieldRef<"Colaborator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Colaborator findUnique
   */
  export type ColaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator findUniqueOrThrow
   */
  export type ColaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator findFirst
   */
  export type ColaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaborators.
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaborators.
     */
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Colaborator findFirstOrThrow
   */
  export type ColaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Colaborator to fetch.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaborators.
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaborators.
     */
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Colaborator findMany
   */
  export type ColaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Colaborators to fetch.
     */
    where?: ColaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaborators to fetch.
     */
    orderBy?: ColaboratorOrderByWithRelationInput | ColaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colaborators.
     */
    cursor?: ColaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaborators.
     */
    skip?: number
    distinct?: ColaboratorScalarFieldEnum | ColaboratorScalarFieldEnum[]
  }

  /**
   * Colaborator create
   */
  export type ColaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The data needed to create a Colaborator.
     */
    data: XOR<ColaboratorCreateInput, ColaboratorUncheckedCreateInput>
  }

  /**
   * Colaborator createMany
   */
  export type ColaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colaborators.
     */
    data: ColaboratorCreateManyInput | ColaboratorCreateManyInput[]
  }

  /**
   * Colaborator createManyAndReturn
   */
  export type ColaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many Colaborators.
     */
    data: ColaboratorCreateManyInput | ColaboratorCreateManyInput[]
  }

  /**
   * Colaborator update
   */
  export type ColaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The data needed to update a Colaborator.
     */
    data: XOR<ColaboratorUpdateInput, ColaboratorUncheckedUpdateInput>
    /**
     * Choose, which Colaborator to update.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator updateMany
   */
  export type ColaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colaborators.
     */
    data: XOR<ColaboratorUpdateManyMutationInput, ColaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Colaborators to update
     */
    where?: ColaboratorWhereInput
    /**
     * Limit how many Colaborators to update.
     */
    limit?: number
  }

  /**
   * Colaborator updateManyAndReturn
   */
  export type ColaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The data used to update Colaborators.
     */
    data: XOR<ColaboratorUpdateManyMutationInput, ColaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Colaborators to update
     */
    where?: ColaboratorWhereInput
    /**
     * Limit how many Colaborators to update.
     */
    limit?: number
  }

  /**
   * Colaborator upsert
   */
  export type ColaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * The filter to search for the Colaborator to update in case it exists.
     */
    where: ColaboratorWhereUniqueInput
    /**
     * In case the Colaborator found by the `where` argument doesn't exist, create a new Colaborator with this data.
     */
    create: XOR<ColaboratorCreateInput, ColaboratorUncheckedCreateInput>
    /**
     * In case the Colaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColaboratorUpdateInput, ColaboratorUncheckedUpdateInput>
  }

  /**
   * Colaborator delete
   */
  export type ColaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
    /**
     * Filter which Colaborator to delete.
     */
    where: ColaboratorWhereUniqueInput
  }

  /**
   * Colaborator deleteMany
   */
  export type ColaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborators to delete
     */
    where?: ColaboratorWhereInput
    /**
     * Limit how many Colaborators to delete.
     */
    limit?: number
  }

  /**
   * Colaborator without action
   */
  export type ColaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborator
     */
    select?: ColaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborator
     */
    omit?: ColaboratorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ColaboratorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mat: 'mat'
  };

  export type ColaboratorScalarFieldEnum = (typeof ColaboratorScalarFieldEnum)[keyof typeof ColaboratorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ColaboratorWhereInput = {
    AND?: ColaboratorWhereInput | ColaboratorWhereInput[]
    OR?: ColaboratorWhereInput[]
    NOT?: ColaboratorWhereInput | ColaboratorWhereInput[]
    id?: IntFilter<"Colaborator"> | number
    name?: StringFilter<"Colaborator"> | string
    mat?: StringFilter<"Colaborator"> | string
  }

  export type ColaboratorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mat?: SortOrder
  }

  export type ColaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColaboratorWhereInput | ColaboratorWhereInput[]
    OR?: ColaboratorWhereInput[]
    NOT?: ColaboratorWhereInput | ColaboratorWhereInput[]
    name?: StringFilter<"Colaborator"> | string
    mat?: StringFilter<"Colaborator"> | string
  }, "id">

  export type ColaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mat?: SortOrder
    _count?: ColaboratorCountOrderByAggregateInput
    _avg?: ColaboratorAvgOrderByAggregateInput
    _max?: ColaboratorMaxOrderByAggregateInput
    _min?: ColaboratorMinOrderByAggregateInput
    _sum?: ColaboratorSumOrderByAggregateInput
  }

  export type ColaboratorScalarWhereWithAggregatesInput = {
    AND?: ColaboratorScalarWhereWithAggregatesInput | ColaboratorScalarWhereWithAggregatesInput[]
    OR?: ColaboratorScalarWhereWithAggregatesInput[]
    NOT?: ColaboratorScalarWhereWithAggregatesInput | ColaboratorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Colaborator"> | number
    name?: StringWithAggregatesFilter<"Colaborator"> | string
    mat?: StringWithAggregatesFilter<"Colaborator"> | string
  }

  export type ColaboratorCreateInput = {
    name: string
    mat: string
  }

  export type ColaboratorUncheckedCreateInput = {
    id?: number
    name: string
    mat: string
  }

  export type ColaboratorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mat?: StringFieldUpdateOperationsInput | string
  }

  export type ColaboratorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mat?: StringFieldUpdateOperationsInput | string
  }

  export type ColaboratorCreateManyInput = {
    id?: number
    name: string
    mat: string
  }

  export type ColaboratorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mat?: StringFieldUpdateOperationsInput | string
  }

  export type ColaboratorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mat?: StringFieldUpdateOperationsInput | string
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

  export type ColaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mat?: SortOrder
  }

  export type ColaboratorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mat?: SortOrder
  }

  export type ColaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mat?: SortOrder
  }

  export type ColaboratorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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