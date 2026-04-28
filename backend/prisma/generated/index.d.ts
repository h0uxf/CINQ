
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Hall
 * 
 */
export type Hall = $Result.DefaultSelection<Prisma.$HallPayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Screening
 * 
 */
export type Screening = $Result.DefaultSelection<Prisma.$ScreeningPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingSeat
 * 
 */
export type BookingSeat = $Result.DefaultSelection<Prisma.$BookingSeatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.hall`: Exposes CRUD operations for the **Hall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Halls
    * const halls = await prisma.hall.findMany()
    * ```
    */
  get hall(): Prisma.HallDelegate<ExtArgs>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs>;

  /**
   * `prisma.screening`: Exposes CRUD operations for the **Screening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screenings
    * const screenings = await prisma.screening.findMany()
    * ```
    */
  get screening(): Prisma.ScreeningDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.bookingSeat`: Exposes CRUD operations for the **BookingSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingSeats
    * const bookingSeats = await prisma.bookingSeat.findMany()
    * ```
    */
  get bookingSeat(): Prisma.BookingSeatDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.2
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
    User: 'User',
    Genre: 'Genre',
    Movie: 'Movie',
    Hall: 'Hall',
    Seat: 'Seat',
    Screening: 'Screening',
    Booking: 'Booking',
    BookingSeat: 'BookingSeat'
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
      modelProps: 'user' | 'genre' | 'movie' | 'hall' | 'seat' | 'screening' | 'booking' | 'bookingSeat'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>,
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Hall: {
        payload: Prisma.$HallPayload<ExtArgs>
        fields: Prisma.HallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HallFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HallFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          findFirst: {
            args: Prisma.HallFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HallFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          findMany: {
            args: Prisma.HallFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>[]
          }
          create: {
            args: Prisma.HallCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          createMany: {
            args: Prisma.HallCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HallDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          update: {
            args: Prisma.HallUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          deleteMany: {
            args: Prisma.HallDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HallUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HallUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HallPayload>
          }
          aggregate: {
            args: Prisma.HallAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHall>
          }
          groupBy: {
            args: Prisma.HallGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HallGroupByOutputType>[]
          }
          count: {
            args: Prisma.HallCountArgs<ExtArgs>,
            result: $Utils.Optional<HallCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>,
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Screening: {
        payload: Prisma.$ScreeningPayload<ExtArgs>
        fields: Prisma.ScreeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreeningFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreeningFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          findFirst: {
            args: Prisma.ScreeningFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreeningFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          findMany: {
            args: Prisma.ScreeningFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>[]
          }
          create: {
            args: Prisma.ScreeningCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          createMany: {
            args: Prisma.ScreeningCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScreeningDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          update: {
            args: Prisma.ScreeningUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          deleteMany: {
            args: Prisma.ScreeningDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScreeningUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScreeningUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScreeningPayload>
          }
          aggregate: {
            args: Prisma.ScreeningAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScreening>
          }
          groupBy: {
            args: Prisma.ScreeningGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScreeningGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreeningCountArgs<ExtArgs>,
            result: $Utils.Optional<ScreeningCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingSeat: {
        payload: Prisma.$BookingSeatPayload<ExtArgs>
        fields: Prisma.BookingSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingSeatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingSeatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          findFirst: {
            args: Prisma.BookingSeatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingSeatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          findMany: {
            args: Prisma.BookingSeatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>[]
          }
          create: {
            args: Prisma.BookingSeatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          createMany: {
            args: Prisma.BookingSeatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookingSeatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          update: {
            args: Prisma.BookingSeatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          deleteMany: {
            args: Prisma.BookingSeatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingSeatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingSeatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingSeatPayload>
          }
          aggregate: {
            args: Prisma.BookingSeatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookingSeat>
          }
          groupBy: {
            args: Prisma.BookingSeatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingSeatCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingSeatCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }



  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    movies: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | GenreCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }



  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    genres: number
    screenings: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | MovieCountOutputTypeCountGenresArgs
    screenings?: boolean | MovieCountOutputTypeCountScreeningsArgs
  }

  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
  }



  /**
   * Count Type HallCountOutputType
   */

  export type HallCountOutputType = {
    seats: number
    screenings: number
  }

  export type HallCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | HallCountOutputTypeCountSeatsArgs
    screenings?: boolean | HallCountOutputTypeCountScreeningsArgs
  }

  // Custom InputTypes

  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallCountOutputType
     */
    select?: HallCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }


  /**
   * HallCountOutputType without action
   */
  export type HallCountOutputTypeCountScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
  }



  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    bookings: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SeatCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSeatWhereInput
  }



  /**
   * Count Type ScreeningCountOutputType
   */

  export type ScreeningCountOutputType = {
    bookings: number
  }

  export type ScreeningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ScreeningCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes

  /**
   * ScreeningCountOutputType without action
   */
  export type ScreeningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningCountOutputType
     */
    select?: ScreeningCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ScreeningCountOutputType without action
   */
  export type ScreeningCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }



  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    seats: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | BookingCountOutputTypeCountSeatsArgs
  }

  // Custom InputTypes

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSeatWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstName: number
    lastName: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      firstName: string
      lastName: string
      email: string
      passwordHash: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }


  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreCreateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends Genre$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre.movies
   */
  export type Genre$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
  }



  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    durationMinutes: number | null
    posterUrl: string | null
    trailerUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    durationMinutes: number | null
    posterUrl: string | null
    trailerUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    description: number
    durationMinutes: number
    posterUrl: number
    trailerUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    durationMinutes?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    durationMinutes?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    durationMinutes?: true
    posterUrl?: true
    trailerUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    durationMinutes?: true
    posterUrl?: true
    trailerUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    durationMinutes?: true
    posterUrl?: true
    trailerUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    title: string
    description: string
    durationMinutes: number
    posterUrl: string | null
    trailerUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    posterUrl?: boolean
    trailerUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    genres?: boolean | Movie$genresArgs<ExtArgs>
    screenings?: boolean | Movie$screeningsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    posterUrl?: boolean
    trailerUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | Movie$genresArgs<ExtArgs>
    screenings?: boolean | Movie$screeningsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      genres: Prisma.$GenrePayload<ExtArgs>[]
      screenings: Prisma.$ScreeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      durationMinutes: number
      posterUrl: string | null
      trailerUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }


  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    genres<T extends Movie$genresArgs<ExtArgs> = {}>(args?: Subset<T, Movie$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'> | Null>;

    screenings<T extends Movie$screeningsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$screeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Movie model
   */ 
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly description: FieldRef<"Movie", 'String'>
    readonly durationMinutes: FieldRef<"Movie", 'Int'>
    readonly posterUrl: FieldRef<"Movie", 'String'>
    readonly trailerUrl: FieldRef<"Movie", 'String'>
    readonly isActive: FieldRef<"Movie", 'Boolean'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }


  /**
   * Movie.genres
   */
  export type Movie$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Movie.screenings
   */
  export type Movie$screeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    cursor?: ScreeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }


  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
  }



  /**
   * Model Hall
   */

  export type AggregateHall = {
    _count: HallCountAggregateOutputType | null
    _avg: HallAvgAggregateOutputType | null
    _sum: HallSumAggregateOutputType | null
    _min: HallMinAggregateOutputType | null
    _max: HallMaxAggregateOutputType | null
  }

  export type HallAvgAggregateOutputType = {
    id: number | null
  }

  export type HallSumAggregateOutputType = {
    id: number | null
  }

  export type HallMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type HallMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type HallCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HallAvgAggregateInputType = {
    id?: true
  }

  export type HallSumAggregateInputType = {
    id?: true
  }

  export type HallMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HallMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HallCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hall to aggregate.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Halls
    **/
    _count?: true | HallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HallMaxAggregateInputType
  }

  export type GetHallAggregateType<T extends HallAggregateArgs> = {
        [P in keyof T & keyof AggregateHall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHall[P]>
      : GetScalarType<T[P], AggregateHall[P]>
  }




  export type HallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HallWhereInput
    orderBy?: HallOrderByWithAggregationInput | HallOrderByWithAggregationInput[]
    by: HallScalarFieldEnum[] | HallScalarFieldEnum
    having?: HallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HallCountAggregateInputType | true
    _avg?: HallAvgAggregateInputType
    _sum?: HallSumAggregateInputType
    _min?: HallMinAggregateInputType
    _max?: HallMaxAggregateInputType
  }

  export type HallGroupByOutputType = {
    id: number
    name: string
    _count: HallCountAggregateOutputType | null
    _avg: HallAvgAggregateOutputType | null
    _sum: HallSumAggregateOutputType | null
    _min: HallMinAggregateOutputType | null
    _max: HallMaxAggregateOutputType | null
  }

  type GetHallGroupByPayload<T extends HallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HallGroupByOutputType[P]>
            : GetScalarType<T[P], HallGroupByOutputType[P]>
        }
      >
    >


  export type HallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seats?: boolean | Hall$seatsArgs<ExtArgs>
    screenings?: boolean | Hall$screeningsArgs<ExtArgs>
    _count?: boolean | HallCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hall"]>

  export type HallSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type HallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | Hall$seatsArgs<ExtArgs>
    screenings?: boolean | Hall$screeningsArgs<ExtArgs>
    _count?: boolean | HallCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hall"
    objects: {
      seats: Prisma.$SeatPayload<ExtArgs>[]
      screenings: Prisma.$ScreeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["hall"]>
    composites: {}
  }


  type HallGetPayload<S extends boolean | null | undefined | HallDefaultArgs> = $Result.GetResult<Prisma.$HallPayload, S>

  type HallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HallFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HallCountAggregateInputType | true
    }

  export interface HallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hall'], meta: { name: 'Hall' } }
    /**
     * Find zero or one Hall that matches the filter.
     * @param {HallFindUniqueArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HallFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HallFindUniqueArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hall that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HallFindUniqueOrThrowArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HallFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HallFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindFirstArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HallFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HallFindFirstArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindFirstOrThrowArgs} args - Arguments to find a Hall
     * @example
     * // Get one Hall
     * const hall = await prisma.hall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HallFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HallFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Halls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Halls
     * const halls = await prisma.hall.findMany()
     * 
     * // Get first 10 Halls
     * const halls = await prisma.hall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hallWithIdOnly = await prisma.hall.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HallFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HallFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hall.
     * @param {HallCreateArgs} args - Arguments to create a Hall.
     * @example
     * // Create one Hall
     * const Hall = await prisma.hall.create({
     *   data: {
     *     // ... data to create a Hall
     *   }
     * })
     * 
    **/
    create<T extends HallCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HallCreateArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Halls.
     *     @param {HallCreateManyArgs} args - Arguments to create many Halls.
     *     @example
     *     // Create many Halls
     *     const hall = await prisma.hall.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HallCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HallCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hall.
     * @param {HallDeleteArgs} args - Arguments to delete one Hall.
     * @example
     * // Delete one Hall
     * const Hall = await prisma.hall.delete({
     *   where: {
     *     // ... filter to delete one Hall
     *   }
     * })
     * 
    **/
    delete<T extends HallDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HallDeleteArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hall.
     * @param {HallUpdateArgs} args - Arguments to update one Hall.
     * @example
     * // Update one Hall
     * const hall = await prisma.hall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HallUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HallUpdateArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Halls.
     * @param {HallDeleteManyArgs} args - Arguments to filter Halls to delete.
     * @example
     * // Delete a few Halls
     * const { count } = await prisma.hall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HallDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HallDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Halls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Halls
     * const hall = await prisma.hall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HallUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HallUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hall.
     * @param {HallUpsertArgs} args - Arguments to update or create a Hall.
     * @example
     * // Update or create a Hall
     * const hall = await prisma.hall.upsert({
     *   create: {
     *     // ... data to create a Hall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hall we want to update
     *   }
     * })
    **/
    upsert<T extends HallUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HallUpsertArgs<ExtArgs>>
    ): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Halls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallCountArgs} args - Arguments to filter Halls to count.
     * @example
     * // Count the number of Halls
     * const count = await prisma.hall.count({
     *   where: {
     *     // ... the filter for the Halls we want to count
     *   }
     * })
    **/
    count<T extends HallCountArgs>(
      args?: Subset<T, HallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HallAggregateArgs>(args: Subset<T, HallAggregateArgs>): Prisma.PrismaPromise<GetHallAggregateType<T>>

    /**
     * Group by Hall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallGroupByArgs} args - Group by arguments.
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
      T extends HallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HallGroupByArgs['orderBy'] }
        : { orderBy?: HallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hall model
   */
  readonly fields: HallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    seats<T extends Hall$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Hall$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findMany'> | Null>;

    screenings<T extends Hall$screeningsArgs<ExtArgs> = {}>(args?: Subset<T, Hall$screeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Hall model
   */ 
  interface HallFieldRefs {
    readonly id: FieldRef<"Hall", 'Int'>
    readonly name: FieldRef<"Hall", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Hall findUnique
   */
  export type HallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where: HallWhereUniqueInput
  }


  /**
   * Hall findUniqueOrThrow
   */
  export type HallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where: HallWhereUniqueInput
  }


  /**
   * Hall findFirst
   */
  export type HallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Halls.
     */
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }


  /**
   * Hall findFirstOrThrow
   */
  export type HallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Hall to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Halls.
     */
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }


  /**
   * Hall findMany
   */
  export type HallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter, which Halls to fetch.
     */
    where?: HallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Halls to fetch.
     */
    orderBy?: HallOrderByWithRelationInput | HallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Halls.
     */
    cursor?: HallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Halls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Halls.
     */
    skip?: number
    distinct?: HallScalarFieldEnum | HallScalarFieldEnum[]
  }


  /**
   * Hall create
   */
  export type HallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The data needed to create a Hall.
     */
    data: XOR<HallCreateInput, HallUncheckedCreateInput>
  }


  /**
   * Hall createMany
   */
  export type HallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Halls.
     */
    data: HallCreateManyInput | HallCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Hall update
   */
  export type HallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The data needed to update a Hall.
     */
    data: XOR<HallUpdateInput, HallUncheckedUpdateInput>
    /**
     * Choose, which Hall to update.
     */
    where: HallWhereUniqueInput
  }


  /**
   * Hall updateMany
   */
  export type HallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Halls.
     */
    data: XOR<HallUpdateManyMutationInput, HallUncheckedUpdateManyInput>
    /**
     * Filter which Halls to update
     */
    where?: HallWhereInput
  }


  /**
   * Hall upsert
   */
  export type HallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * The filter to search for the Hall to update in case it exists.
     */
    where: HallWhereUniqueInput
    /**
     * In case the Hall found by the `where` argument doesn't exist, create a new Hall with this data.
     */
    create: XOR<HallCreateInput, HallUncheckedCreateInput>
    /**
     * In case the Hall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HallUpdateInput, HallUncheckedUpdateInput>
  }


  /**
   * Hall delete
   */
  export type HallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
    /**
     * Filter which Hall to delete.
     */
    where: HallWhereUniqueInput
  }


  /**
   * Hall deleteMany
   */
  export type HallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Halls to delete
     */
    where?: HallWhereInput
  }


  /**
   * Hall.seats
   */
  export type Hall$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }


  /**
   * Hall.screenings
   */
  export type Hall$screeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    cursor?: ScreeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }


  /**
   * Hall without action
   */
  export type HallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hall
     */
    select?: HallSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HallInclude<ExtArgs> | null
  }



  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    id: number | null
    seatNumber: number | null
    hallId: number | null
  }

  export type SeatSumAggregateOutputType = {
    id: number | null
    seatNumber: number | null
    hallId: number | null
  }

  export type SeatMinAggregateOutputType = {
    id: number | null
    rowLabel: string | null
    seatNumber: number | null
    hallId: number | null
  }

  export type SeatMaxAggregateOutputType = {
    id: number | null
    rowLabel: string | null
    seatNumber: number | null
    hallId: number | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    rowLabel: number
    seatNumber: number
    hallId: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    id?: true
    seatNumber?: true
    hallId?: true
  }

  export type SeatSumAggregateInputType = {
    id?: true
    seatNumber?: true
    hallId?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    rowLabel?: true
    seatNumber?: true
    hallId?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    rowLabel?: true
    seatNumber?: true
    hallId?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    rowLabel?: true
    seatNumber?: true
    hallId?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: number
    rowLabel: string
    seatNumber: number
    hallId: number
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rowLabel?: boolean
    seatNumber?: boolean
    hallId?: boolean
    hall?: boolean | HallDefaultArgs<ExtArgs>
    bookings?: boolean | Seat$bookingsArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectScalar = {
    id?: boolean
    rowLabel?: boolean
    seatNumber?: boolean
    hallId?: boolean
  }

  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hall?: boolean | HallDefaultArgs<ExtArgs>
    bookings?: boolean | Seat$bookingsArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      hall: Prisma.$HallPayload<ExtArgs>
      bookings: Prisma.$BookingSeatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rowLabel: string
      seatNumber: number
      hallId: number
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }


  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Seat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
    **/
    create<T extends SeatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SeatCreateArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Seats.
     *     @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     *     @example
     *     // Create many Seats
     *     const seat = await prisma.seat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
    **/
    delete<T extends SeatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
    **/
    upsert<T extends SeatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>
    ): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hall<T extends HallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HallDefaultArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bookings<T extends Seat$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Seat model
   */ 
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'Int'>
    readonly rowLabel: FieldRef<"Seat", 'String'>
    readonly seatNumber: FieldRef<"Seat", 'Int'>
    readonly hallId: FieldRef<"Seat", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }


  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }


  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }


  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }


  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }


  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }


  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }


  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
  }


  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }


  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }


  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
  }


  /**
   * Seat.bookings
   */
  export type Seat$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    where?: BookingSeatWhereInput
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    cursor?: BookingSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }


  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeatInclude<ExtArgs> | null
  }



  /**
   * Model Screening
   */

  export type AggregateScreening = {
    _count: ScreeningCountAggregateOutputType | null
    _avg: ScreeningAvgAggregateOutputType | null
    _sum: ScreeningSumAggregateOutputType | null
    _min: ScreeningMinAggregateOutputType | null
    _max: ScreeningMaxAggregateOutputType | null
  }

  export type ScreeningAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    hallId: number | null
    price: number | null
  }

  export type ScreeningSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    hallId: number | null
    price: number | null
  }

  export type ScreeningMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    hallId: number | null
    startTime: Date | null
    endTime: Date | null
    price: number | null
    createdAt: Date | null
  }

  export type ScreeningMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    hallId: number | null
    startTime: Date | null
    endTime: Date | null
    price: number | null
    createdAt: Date | null
  }

  export type ScreeningCountAggregateOutputType = {
    id: number
    movieId: number
    hallId: number
    startTime: number
    endTime: number
    price: number
    createdAt: number
    _all: number
  }


  export type ScreeningAvgAggregateInputType = {
    id?: true
    movieId?: true
    hallId?: true
    price?: true
  }

  export type ScreeningSumAggregateInputType = {
    id?: true
    movieId?: true
    hallId?: true
    price?: true
  }

  export type ScreeningMinAggregateInputType = {
    id?: true
    movieId?: true
    hallId?: true
    startTime?: true
    endTime?: true
    price?: true
    createdAt?: true
  }

  export type ScreeningMaxAggregateInputType = {
    id?: true
    movieId?: true
    hallId?: true
    startTime?: true
    endTime?: true
    price?: true
    createdAt?: true
  }

  export type ScreeningCountAggregateInputType = {
    id?: true
    movieId?: true
    hallId?: true
    startTime?: true
    endTime?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type ScreeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screening to aggregate.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screenings
    **/
    _count?: true | ScreeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreeningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreeningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreeningMaxAggregateInputType
  }

  export type GetScreeningAggregateType<T extends ScreeningAggregateArgs> = {
        [P in keyof T & keyof AggregateScreening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreening[P]>
      : GetScalarType<T[P], AggregateScreening[P]>
  }




  export type ScreeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningWhereInput
    orderBy?: ScreeningOrderByWithAggregationInput | ScreeningOrderByWithAggregationInput[]
    by: ScreeningScalarFieldEnum[] | ScreeningScalarFieldEnum
    having?: ScreeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreeningCountAggregateInputType | true
    _avg?: ScreeningAvgAggregateInputType
    _sum?: ScreeningSumAggregateInputType
    _min?: ScreeningMinAggregateInputType
    _max?: ScreeningMaxAggregateInputType
  }

  export type ScreeningGroupByOutputType = {
    id: number
    movieId: number
    hallId: number
    startTime: Date
    endTime: Date
    price: number
    createdAt: Date
    _count: ScreeningCountAggregateOutputType | null
    _avg: ScreeningAvgAggregateOutputType | null
    _sum: ScreeningSumAggregateOutputType | null
    _min: ScreeningMinAggregateOutputType | null
    _max: ScreeningMaxAggregateOutputType | null
  }

  type GetScreeningGroupByPayload<T extends ScreeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreeningGroupByOutputType[P]>
            : GetScalarType<T[P], ScreeningGroupByOutputType[P]>
        }
      >
    >


  export type ScreeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    hallId?: boolean
    startTime?: boolean
    endTime?: boolean
    price?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    hall?: boolean | HallDefaultArgs<ExtArgs>
    bookings?: boolean | Screening$bookingsArgs<ExtArgs>
    _count?: boolean | ScreeningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screening"]>

  export type ScreeningSelectScalar = {
    id?: boolean
    movieId?: boolean
    hallId?: boolean
    startTime?: boolean
    endTime?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type ScreeningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    hall?: boolean | HallDefaultArgs<ExtArgs>
    bookings?: boolean | Screening$bookingsArgs<ExtArgs>
    _count?: boolean | ScreeningCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ScreeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screening"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      hall: Prisma.$HallPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      hallId: number
      startTime: Date
      endTime: Date
      price: number
      createdAt: Date
    }, ExtArgs["result"]["screening"]>
    composites: {}
  }


  type ScreeningGetPayload<S extends boolean | null | undefined | ScreeningDefaultArgs> = $Result.GetResult<Prisma.$ScreeningPayload, S>

  type ScreeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScreeningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScreeningCountAggregateInputType | true
    }

  export interface ScreeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screening'], meta: { name: 'Screening' } }
    /**
     * Find zero or one Screening that matches the filter.
     * @param {ScreeningFindUniqueArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScreeningFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScreeningFindUniqueArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Screening that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScreeningFindUniqueOrThrowArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScreeningFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScreeningFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Screening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningFindFirstArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScreeningFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScreeningFindFirstArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Screening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningFindFirstOrThrowArgs} args - Arguments to find a Screening
     * @example
     * // Get one Screening
     * const screening = await prisma.screening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScreeningFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScreeningFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Screenings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screenings
     * const screenings = await prisma.screening.findMany()
     * 
     * // Get first 10 Screenings
     * const screenings = await prisma.screening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screeningWithIdOnly = await prisma.screening.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScreeningFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScreeningFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Screening.
     * @param {ScreeningCreateArgs} args - Arguments to create a Screening.
     * @example
     * // Create one Screening
     * const Screening = await prisma.screening.create({
     *   data: {
     *     // ... data to create a Screening
     *   }
     * })
     * 
    **/
    create<T extends ScreeningCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScreeningCreateArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Screenings.
     *     @param {ScreeningCreateManyArgs} args - Arguments to create many Screenings.
     *     @example
     *     // Create many Screenings
     *     const screening = await prisma.screening.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScreeningCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScreeningCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Screening.
     * @param {ScreeningDeleteArgs} args - Arguments to delete one Screening.
     * @example
     * // Delete one Screening
     * const Screening = await prisma.screening.delete({
     *   where: {
     *     // ... filter to delete one Screening
     *   }
     * })
     * 
    **/
    delete<T extends ScreeningDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScreeningDeleteArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Screening.
     * @param {ScreeningUpdateArgs} args - Arguments to update one Screening.
     * @example
     * // Update one Screening
     * const screening = await prisma.screening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScreeningUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScreeningUpdateArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Screenings.
     * @param {ScreeningDeleteManyArgs} args - Arguments to filter Screenings to delete.
     * @example
     * // Delete a few Screenings
     * const { count } = await prisma.screening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScreeningDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScreeningDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screenings
     * const screening = await prisma.screening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScreeningUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScreeningUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Screening.
     * @param {ScreeningUpsertArgs} args - Arguments to update or create a Screening.
     * @example
     * // Update or create a Screening
     * const screening = await prisma.screening.upsert({
     *   create: {
     *     // ... data to create a Screening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screening we want to update
     *   }
     * })
    **/
    upsert<T extends ScreeningUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScreeningUpsertArgs<ExtArgs>>
    ): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Screenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningCountArgs} args - Arguments to filter Screenings to count.
     * @example
     * // Count the number of Screenings
     * const count = await prisma.screening.count({
     *   where: {
     *     // ... the filter for the Screenings we want to count
     *   }
     * })
    **/
    count<T extends ScreeningCountArgs>(
      args?: Subset<T, ScreeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScreeningAggregateArgs>(args: Subset<T, ScreeningAggregateArgs>): Prisma.PrismaPromise<GetScreeningAggregateType<T>>

    /**
     * Group by Screening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningGroupByArgs} args - Group by arguments.
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
      T extends ScreeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreeningGroupByArgs['orderBy'] }
        : { orderBy?: ScreeningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScreeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screening model
   */
  readonly fields: ScreeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    hall<T extends HallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HallDefaultArgs<ExtArgs>>): Prisma__HallClient<$Result.GetResult<Prisma.$HallPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bookings<T extends Screening$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Screening$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Screening model
   */ 
  interface ScreeningFieldRefs {
    readonly id: FieldRef<"Screening", 'Int'>
    readonly movieId: FieldRef<"Screening", 'Int'>
    readonly hallId: FieldRef<"Screening", 'Int'>
    readonly startTime: FieldRef<"Screening", 'DateTime'>
    readonly endTime: FieldRef<"Screening", 'DateTime'>
    readonly price: FieldRef<"Screening", 'Float'>
    readonly createdAt: FieldRef<"Screening", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Screening findUnique
   */
  export type ScreeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where: ScreeningWhereUniqueInput
  }


  /**
   * Screening findUniqueOrThrow
   */
  export type ScreeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where: ScreeningWhereUniqueInput
  }


  /**
   * Screening findFirst
   */
  export type ScreeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenings.
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenings.
     */
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }


  /**
   * Screening findFirstOrThrow
   */
  export type ScreeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screening to fetch.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenings.
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenings.
     */
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }


  /**
   * Screening findMany
   */
  export type ScreeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter, which Screenings to fetch.
     */
    where?: ScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenings to fetch.
     */
    orderBy?: ScreeningOrderByWithRelationInput | ScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screenings.
     */
    cursor?: ScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenings.
     */
    skip?: number
    distinct?: ScreeningScalarFieldEnum | ScreeningScalarFieldEnum[]
  }


  /**
   * Screening create
   */
  export type ScreeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * The data needed to create a Screening.
     */
    data: XOR<ScreeningCreateInput, ScreeningUncheckedCreateInput>
  }


  /**
   * Screening createMany
   */
  export type ScreeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screenings.
     */
    data: ScreeningCreateManyInput | ScreeningCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Screening update
   */
  export type ScreeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * The data needed to update a Screening.
     */
    data: XOR<ScreeningUpdateInput, ScreeningUncheckedUpdateInput>
    /**
     * Choose, which Screening to update.
     */
    where: ScreeningWhereUniqueInput
  }


  /**
   * Screening updateMany
   */
  export type ScreeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screenings.
     */
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyInput>
    /**
     * Filter which Screenings to update
     */
    where?: ScreeningWhereInput
  }


  /**
   * Screening upsert
   */
  export type ScreeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * The filter to search for the Screening to update in case it exists.
     */
    where: ScreeningWhereUniqueInput
    /**
     * In case the Screening found by the `where` argument doesn't exist, create a new Screening with this data.
     */
    create: XOR<ScreeningCreateInput, ScreeningUncheckedCreateInput>
    /**
     * In case the Screening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreeningUpdateInput, ScreeningUncheckedUpdateInput>
  }


  /**
   * Screening delete
   */
  export type ScreeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
    /**
     * Filter which Screening to delete.
     */
    where: ScreeningWhereUniqueInput
  }


  /**
   * Screening deleteMany
   */
  export type ScreeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screenings to delete
     */
    where?: ScreeningWhereInput
  }


  /**
   * Screening.bookings
   */
  export type Screening$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Screening without action
   */
  export type ScreeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screening
     */
    select?: ScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScreeningInclude<ExtArgs> | null
  }



  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    screeningId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    screeningId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    screeningId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    screeningId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    screeningId: number
    status: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
    screeningId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
    screeningId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    screeningId?: true
    status?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    screeningId?: true
    status?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    screeningId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: number
    screeningId: number
    status: $Enums.BookingStatus
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    screeningId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    screening?: boolean | ScreeningDefaultArgs<ExtArgs>
    seats?: boolean | Booking$seatsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    screeningId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    screening?: boolean | ScreeningDefaultArgs<ExtArgs>
    seats?: boolean | Booking$seatsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      screening: Prisma.$ScreeningPayload<ExtArgs>
      seats: Prisma.$BookingSeatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      screeningId: number
      status: $Enums.BookingStatus
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }


  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
    **/
    create<T extends BookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookings.
     *     @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
    **/
    delete<T extends BookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
    **/
    upsert<T extends BookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    screening<T extends ScreeningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreeningDefaultArgs<ExtArgs>>): Prisma__ScreeningClient<$Result.GetResult<Prisma.$ScreeningPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    seats<T extends Booking$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly screeningId: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }


  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }


  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }


  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }


  /**
   * Booking.seats
   */
  export type Booking$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    where?: BookingSeatWhereInput
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    cursor?: BookingSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }


  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
  }



  /**
   * Model BookingSeat
   */

  export type AggregateBookingSeat = {
    _count: BookingSeatCountAggregateOutputType | null
    _avg: BookingSeatAvgAggregateOutputType | null
    _sum: BookingSeatSumAggregateOutputType | null
    _min: BookingSeatMinAggregateOutputType | null
    _max: BookingSeatMaxAggregateOutputType | null
  }

  export type BookingSeatAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    seatId: number | null
  }

  export type BookingSeatSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    seatId: number | null
  }

  export type BookingSeatMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    seatId: number | null
  }

  export type BookingSeatMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    seatId: number | null
  }

  export type BookingSeatCountAggregateOutputType = {
    id: number
    bookingId: number
    seatId: number
    _all: number
  }


  export type BookingSeatAvgAggregateInputType = {
    id?: true
    bookingId?: true
    seatId?: true
  }

  export type BookingSeatSumAggregateInputType = {
    id?: true
    bookingId?: true
    seatId?: true
  }

  export type BookingSeatMinAggregateInputType = {
    id?: true
    bookingId?: true
    seatId?: true
  }

  export type BookingSeatMaxAggregateInputType = {
    id?: true
    bookingId?: true
    seatId?: true
  }

  export type BookingSeatCountAggregateInputType = {
    id?: true
    bookingId?: true
    seatId?: true
    _all?: true
  }

  export type BookingSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSeat to aggregate.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingSeats
    **/
    _count?: true | BookingSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingSeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingSeatMaxAggregateInputType
  }

  export type GetBookingSeatAggregateType<T extends BookingSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingSeat[P]>
      : GetScalarType<T[P], AggregateBookingSeat[P]>
  }




  export type BookingSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSeatWhereInput
    orderBy?: BookingSeatOrderByWithAggregationInput | BookingSeatOrderByWithAggregationInput[]
    by: BookingSeatScalarFieldEnum[] | BookingSeatScalarFieldEnum
    having?: BookingSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingSeatCountAggregateInputType | true
    _avg?: BookingSeatAvgAggregateInputType
    _sum?: BookingSeatSumAggregateInputType
    _min?: BookingSeatMinAggregateInputType
    _max?: BookingSeatMaxAggregateInputType
  }

  export type BookingSeatGroupByOutputType = {
    id: number
    bookingId: number
    seatId: number
    _count: BookingSeatCountAggregateOutputType | null
    _avg: BookingSeatAvgAggregateOutputType | null
    _sum: BookingSeatSumAggregateOutputType | null
    _min: BookingSeatMinAggregateOutputType | null
    _max: BookingSeatMaxAggregateOutputType | null
  }

  type GetBookingSeatGroupByPayload<T extends BookingSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingSeatGroupByOutputType[P]>
            : GetScalarType<T[P], BookingSeatGroupByOutputType[P]>
        }
      >
    >


  export type BookingSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    seatId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSeat"]>

  export type BookingSeatSelectScalar = {
    id?: boolean
    bookingId?: boolean
    seatId?: boolean
  }

  export type BookingSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }


  export type $BookingSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingSeat"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      seatId: number
    }, ExtArgs["result"]["bookingSeat"]>
    composites: {}
  }


  type BookingSeatGetPayload<S extends boolean | null | undefined | BookingSeatDefaultArgs> = $Result.GetResult<Prisma.$BookingSeatPayload, S>

  type BookingSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingSeatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingSeatCountAggregateInputType | true
    }

  export interface BookingSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingSeat'], meta: { name: 'BookingSeat' } }
    /**
     * Find zero or one BookingSeat that matches the filter.
     * @param {BookingSeatFindUniqueArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingSeatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingSeatFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BookingSeat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookingSeatFindUniqueOrThrowArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingSeatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingSeatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BookingSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatFindFirstArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingSeatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingSeatFindFirstArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BookingSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatFindFirstOrThrowArgs} args - Arguments to find a BookingSeat
     * @example
     * // Get one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingSeatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingSeatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BookingSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingSeats
     * const bookingSeats = await prisma.bookingSeat.findMany()
     * 
     * // Get first 10 BookingSeats
     * const bookingSeats = await prisma.bookingSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingSeatWithIdOnly = await prisma.bookingSeat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookingSeatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingSeatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BookingSeat.
     * @param {BookingSeatCreateArgs} args - Arguments to create a BookingSeat.
     * @example
     * // Create one BookingSeat
     * const BookingSeat = await prisma.bookingSeat.create({
     *   data: {
     *     // ... data to create a BookingSeat
     *   }
     * })
     * 
    **/
    create<T extends BookingSeatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingSeatCreateArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BookingSeats.
     *     @param {BookingSeatCreateManyArgs} args - Arguments to create many BookingSeats.
     *     @example
     *     // Create many BookingSeats
     *     const bookingSeat = await prisma.bookingSeat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookingSeatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingSeatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingSeat.
     * @param {BookingSeatDeleteArgs} args - Arguments to delete one BookingSeat.
     * @example
     * // Delete one BookingSeat
     * const BookingSeat = await prisma.bookingSeat.delete({
     *   where: {
     *     // ... filter to delete one BookingSeat
     *   }
     * })
     * 
    **/
    delete<T extends BookingSeatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingSeatDeleteArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BookingSeat.
     * @param {BookingSeatUpdateArgs} args - Arguments to update one BookingSeat.
     * @example
     * // Update one BookingSeat
     * const bookingSeat = await prisma.bookingSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingSeatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingSeatUpdateArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BookingSeats.
     * @param {BookingSeatDeleteManyArgs} args - Arguments to filter BookingSeats to delete.
     * @example
     * // Delete a few BookingSeats
     * const { count } = await prisma.bookingSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingSeatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingSeatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingSeats
     * const bookingSeat = await prisma.bookingSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingSeatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingSeatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingSeat.
     * @param {BookingSeatUpsertArgs} args - Arguments to update or create a BookingSeat.
     * @example
     * // Update or create a BookingSeat
     * const bookingSeat = await prisma.bookingSeat.upsert({
     *   create: {
     *     // ... data to create a BookingSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingSeat we want to update
     *   }
     * })
    **/
    upsert<T extends BookingSeatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingSeatUpsertArgs<ExtArgs>>
    ): Prisma__BookingSeatClient<$Result.GetResult<Prisma.$BookingSeatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BookingSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatCountArgs} args - Arguments to filter BookingSeats to count.
     * @example
     * // Count the number of BookingSeats
     * const count = await prisma.bookingSeat.count({
     *   where: {
     *     // ... the filter for the BookingSeats we want to count
     *   }
     * })
    **/
    count<T extends BookingSeatCountArgs>(
      args?: Subset<T, BookingSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingSeatAggregateArgs>(args: Subset<T, BookingSeatAggregateArgs>): Prisma.PrismaPromise<GetBookingSeatAggregateType<T>>

    /**
     * Group by BookingSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSeatGroupByArgs} args - Group by arguments.
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
      T extends BookingSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingSeatGroupByArgs['orderBy'] }
        : { orderBy?: BookingSeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingSeat model
   */
  readonly fields: BookingSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the BookingSeat model
   */ 
  interface BookingSeatFieldRefs {
    readonly id: FieldRef<"BookingSeat", 'Int'>
    readonly bookingId: FieldRef<"BookingSeat", 'Int'>
    readonly seatId: FieldRef<"BookingSeat", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BookingSeat findUnique
   */
  export type BookingSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where: BookingSeatWhereUniqueInput
  }


  /**
   * BookingSeat findUniqueOrThrow
   */
  export type BookingSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where: BookingSeatWhereUniqueInput
  }


  /**
   * BookingSeat findFirst
   */
  export type BookingSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSeats.
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSeats.
     */
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }


  /**
   * BookingSeat findFirstOrThrow
   */
  export type BookingSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeat to fetch.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSeats.
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSeats.
     */
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }


  /**
   * BookingSeat findMany
   */
  export type BookingSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter, which BookingSeats to fetch.
     */
    where?: BookingSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSeats to fetch.
     */
    orderBy?: BookingSeatOrderByWithRelationInput | BookingSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingSeats.
     */
    cursor?: BookingSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSeats.
     */
    skip?: number
    distinct?: BookingSeatScalarFieldEnum | BookingSeatScalarFieldEnum[]
  }


  /**
   * BookingSeat create
   */
  export type BookingSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingSeat.
     */
    data: XOR<BookingSeatCreateInput, BookingSeatUncheckedCreateInput>
  }


  /**
   * BookingSeat createMany
   */
  export type BookingSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingSeats.
     */
    data: BookingSeatCreateManyInput | BookingSeatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BookingSeat update
   */
  export type BookingSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingSeat.
     */
    data: XOR<BookingSeatUpdateInput, BookingSeatUncheckedUpdateInput>
    /**
     * Choose, which BookingSeat to update.
     */
    where: BookingSeatWhereUniqueInput
  }


  /**
   * BookingSeat updateMany
   */
  export type BookingSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingSeats.
     */
    data: XOR<BookingSeatUpdateManyMutationInput, BookingSeatUncheckedUpdateManyInput>
    /**
     * Filter which BookingSeats to update
     */
    where?: BookingSeatWhereInput
  }


  /**
   * BookingSeat upsert
   */
  export type BookingSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingSeat to update in case it exists.
     */
    where: BookingSeatWhereUniqueInput
    /**
     * In case the BookingSeat found by the `where` argument doesn't exist, create a new BookingSeat with this data.
     */
    create: XOR<BookingSeatCreateInput, BookingSeatUncheckedCreateInput>
    /**
     * In case the BookingSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingSeatUpdateInput, BookingSeatUncheckedUpdateInput>
  }


  /**
   * BookingSeat delete
   */
  export type BookingSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
    /**
     * Filter which BookingSeat to delete.
     */
    where: BookingSeatWhereUniqueInput
  }


  /**
   * BookingSeat deleteMany
   */
  export type BookingSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSeats to delete
     */
    where?: BookingSeatWhereInput
  }


  /**
   * BookingSeat without action
   */
  export type BookingSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSeat
     */
    select?: BookingSeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingSeatInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    durationMinutes: 'durationMinutes',
    posterUrl: 'posterUrl',
    trailerUrl: 'trailerUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const HallScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HallScalarFieldEnum = (typeof HallScalarFieldEnum)[keyof typeof HallScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    rowLabel: 'rowLabel',
    seatNumber: 'seatNumber',
    hallId: 'hallId'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const ScreeningScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    hallId: 'hallId',
    startTime: 'startTime',
    endTime: 'endTime',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type ScreeningScalarFieldEnum = (typeof ScreeningScalarFieldEnum)[keyof typeof ScreeningScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    screeningId: 'screeningId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingSeatScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    seatId: 'seatId'
  };

  export type BookingSeatScalarFieldEnum = (typeof BookingSeatScalarFieldEnum)[keyof typeof BookingSeatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    movies?: MovieListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    movies?: MovieListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    description?: StringFilter<"Movie"> | string
    durationMinutes?: IntFilter<"Movie"> | number
    posterUrl?: StringNullableFilter<"Movie"> | string | null
    trailerUrl?: StringNullableFilter<"Movie"> | string | null
    isActive?: BoolFilter<"Movie"> | boolean
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    genres?: GenreListRelationFilter
    screenings?: ScreeningListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    trailerUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    genres?: GenreOrderByRelationAggregateInput
    screenings?: ScreeningOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    description?: StringFilter<"Movie"> | string
    durationMinutes?: IntFilter<"Movie"> | number
    posterUrl?: StringNullableFilter<"Movie"> | string | null
    trailerUrl?: StringNullableFilter<"Movie"> | string | null
    isActive?: BoolFilter<"Movie"> | boolean
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    genres?: GenreListRelationFilter
    screenings?: ScreeningListRelationFilter
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    trailerUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    description?: StringWithAggregatesFilter<"Movie"> | string
    durationMinutes?: IntWithAggregatesFilter<"Movie"> | number
    posterUrl?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    trailerUrl?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    isActive?: BoolWithAggregatesFilter<"Movie"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type HallWhereInput = {
    AND?: HallWhereInput | HallWhereInput[]
    OR?: HallWhereInput[]
    NOT?: HallWhereInput | HallWhereInput[]
    id?: IntFilter<"Hall"> | number
    name?: StringFilter<"Hall"> | string
    seats?: SeatListRelationFilter
    screenings?: ScreeningListRelationFilter
  }

  export type HallOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seats?: SeatOrderByRelationAggregateInput
    screenings?: ScreeningOrderByRelationAggregateInput
  }

  export type HallWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HallWhereInput | HallWhereInput[]
    OR?: HallWhereInput[]
    NOT?: HallWhereInput | HallWhereInput[]
    name?: StringFilter<"Hall"> | string
    seats?: SeatListRelationFilter
    screenings?: ScreeningListRelationFilter
  }, "id">

  export type HallOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HallCountOrderByAggregateInput
    _avg?: HallAvgOrderByAggregateInput
    _max?: HallMaxOrderByAggregateInput
    _min?: HallMinOrderByAggregateInput
    _sum?: HallSumOrderByAggregateInput
  }

  export type HallScalarWhereWithAggregatesInput = {
    AND?: HallScalarWhereWithAggregatesInput | HallScalarWhereWithAggregatesInput[]
    OR?: HallScalarWhereWithAggregatesInput[]
    NOT?: HallScalarWhereWithAggregatesInput | HallScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hall"> | number
    name?: StringWithAggregatesFilter<"Hall"> | string
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: IntFilter<"Seat"> | number
    rowLabel?: StringFilter<"Seat"> | string
    seatNumber?: IntFilter<"Seat"> | number
    hallId?: IntFilter<"Seat"> | number
    hall?: XOR<HallRelationFilter, HallWhereInput>
    bookings?: BookingSeatListRelationFilter
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
    hall?: HallOrderByWithRelationInput
    bookings?: BookingSeatOrderByRelationAggregateInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hallId_rowLabel_seatNumber?: SeatHallIdRowLabelSeatNumberCompoundUniqueInput
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    rowLabel?: StringFilter<"Seat"> | string
    seatNumber?: IntFilter<"Seat"> | number
    hallId?: IntFilter<"Seat"> | number
    hall?: XOR<HallRelationFilter, HallWhereInput>
    bookings?: BookingSeatListRelationFilter
  }, "id" | "hallId_rowLabel_seatNumber">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seat"> | number
    rowLabel?: StringWithAggregatesFilter<"Seat"> | string
    seatNumber?: IntWithAggregatesFilter<"Seat"> | number
    hallId?: IntWithAggregatesFilter<"Seat"> | number
  }

  export type ScreeningWhereInput = {
    AND?: ScreeningWhereInput | ScreeningWhereInput[]
    OR?: ScreeningWhereInput[]
    NOT?: ScreeningWhereInput | ScreeningWhereInput[]
    id?: IntFilter<"Screening"> | number
    movieId?: IntFilter<"Screening"> | number
    hallId?: IntFilter<"Screening"> | number
    startTime?: DateTimeFilter<"Screening"> | Date | string
    endTime?: DateTimeFilter<"Screening"> | Date | string
    price?: FloatFilter<"Screening"> | number
    createdAt?: DateTimeFilter<"Screening"> | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    hall?: XOR<HallRelationFilter, HallWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ScreeningOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    hall?: HallOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ScreeningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScreeningWhereInput | ScreeningWhereInput[]
    OR?: ScreeningWhereInput[]
    NOT?: ScreeningWhereInput | ScreeningWhereInput[]
    movieId?: IntFilter<"Screening"> | number
    hallId?: IntFilter<"Screening"> | number
    startTime?: DateTimeFilter<"Screening"> | Date | string
    endTime?: DateTimeFilter<"Screening"> | Date | string
    price?: FloatFilter<"Screening"> | number
    createdAt?: DateTimeFilter<"Screening"> | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    hall?: XOR<HallRelationFilter, HallWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type ScreeningOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: ScreeningCountOrderByAggregateInput
    _avg?: ScreeningAvgOrderByAggregateInput
    _max?: ScreeningMaxOrderByAggregateInput
    _min?: ScreeningMinOrderByAggregateInput
    _sum?: ScreeningSumOrderByAggregateInput
  }

  export type ScreeningScalarWhereWithAggregatesInput = {
    AND?: ScreeningScalarWhereWithAggregatesInput | ScreeningScalarWhereWithAggregatesInput[]
    OR?: ScreeningScalarWhereWithAggregatesInput[]
    NOT?: ScreeningScalarWhereWithAggregatesInput | ScreeningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Screening"> | number
    movieId?: IntWithAggregatesFilter<"Screening"> | number
    hallId?: IntWithAggregatesFilter<"Screening"> | number
    startTime?: DateTimeWithAggregatesFilter<"Screening"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Screening"> | Date | string
    price?: FloatWithAggregatesFilter<"Screening"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Screening"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    screeningId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    screening?: XOR<ScreeningRelationFilter, ScreeningWhereInput>
    seats?: BookingSeatListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    screening?: ScreeningOrderByWithRelationInput
    seats?: BookingSeatOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: IntFilter<"Booking"> | number
    screeningId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    screening?: XOR<ScreeningRelationFilter, ScreeningWhereInput>
    seats?: BookingSeatListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    screeningId?: IntWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BookingSeatWhereInput = {
    AND?: BookingSeatWhereInput | BookingSeatWhereInput[]
    OR?: BookingSeatWhereInput[]
    NOT?: BookingSeatWhereInput | BookingSeatWhereInput[]
    id?: IntFilter<"BookingSeat"> | number
    bookingId?: IntFilter<"BookingSeat"> | number
    seatId?: IntFilter<"BookingSeat"> | number
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    seat?: XOR<SeatRelationFilter, SeatWhereInput>
  }

  export type BookingSeatOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
  }

  export type BookingSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookingId_seatId?: BookingSeatBookingIdSeatIdCompoundUniqueInput
    AND?: BookingSeatWhereInput | BookingSeatWhereInput[]
    OR?: BookingSeatWhereInput[]
    NOT?: BookingSeatWhereInput | BookingSeatWhereInput[]
    bookingId?: IntFilter<"BookingSeat"> | number
    seatId?: IntFilter<"BookingSeat"> | number
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    seat?: XOR<SeatRelationFilter, SeatWhereInput>
  }, "id" | "bookingId_seatId">

  export type BookingSeatOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
    _count?: BookingSeatCountOrderByAggregateInput
    _avg?: BookingSeatAvgOrderByAggregateInput
    _max?: BookingSeatMaxOrderByAggregateInput
    _min?: BookingSeatMinOrderByAggregateInput
    _sum?: BookingSeatSumOrderByAggregateInput
  }

  export type BookingSeatScalarWhereWithAggregatesInput = {
    AND?: BookingSeatScalarWhereWithAggregatesInput | BookingSeatScalarWhereWithAggregatesInput[]
    OR?: BookingSeatScalarWhereWithAggregatesInput[]
    NOT?: BookingSeatScalarWhereWithAggregatesInput | BookingSeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingSeat"> | number
    bookingId?: IntWithAggregatesFilter<"BookingSeat"> | number
    seatId?: IntWithAggregatesFilter<"BookingSeat"> | number
  }

  export type UserCreateInput = {
    username: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    name: string
    movies?: MovieCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    movies?: MovieUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    movies?: MovieUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    genres?: GenreCreateNestedManyWithoutMoviesInput
    screenings?: ScreeningCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    screenings?: ScreeningUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    screenings?: ScreeningUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    screenings?: ScreeningUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallCreateInput = {
    name: string
    seats?: SeatCreateNestedManyWithoutHallInput
    screenings?: ScreeningCreateNestedManyWithoutHallInput
  }

  export type HallUncheckedCreateInput = {
    id?: number
    name: string
    seats?: SeatUncheckedCreateNestedManyWithoutHallInput
    screenings?: ScreeningUncheckedCreateNestedManyWithoutHallInput
  }

  export type HallUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    seats?: SeatUpdateManyWithoutHallNestedInput
    screenings?: ScreeningUpdateManyWithoutHallNestedInput
  }

  export type HallUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seats?: SeatUncheckedUpdateManyWithoutHallNestedInput
    screenings?: ScreeningUncheckedUpdateManyWithoutHallNestedInput
  }

  export type HallCreateManyInput = {
    id?: number
    name: string
  }

  export type HallUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HallUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SeatCreateInput = {
    rowLabel: string
    seatNumber: number
    hall: HallCreateNestedOneWithoutSeatsInput
    bookings?: BookingSeatCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateInput = {
    id?: number
    rowLabel: string
    seatNumber: number
    hallId: number
    bookings?: BookingSeatUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    hall?: HallUpdateOneRequiredWithoutSeatsNestedInput
    bookings?: BookingSeatUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
    bookings?: BookingSeatUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: number
    rowLabel: string
    seatNumber: number
    hallId: number
  }

  export type SeatUpdateManyMutationInput = {
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
  }

  export type ScreeningCreateInput = {
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutScreeningsInput
    hall: HallCreateNestedOneWithoutScreeningsInput
    bookings?: BookingCreateNestedManyWithoutScreeningInput
  }

  export type ScreeningUncheckedCreateInput = {
    id?: number
    movieId: number
    hallId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutScreeningInput
  }

  export type ScreeningUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutScreeningsNestedInput
    hall?: HallUpdateOneRequiredWithoutScreeningsNestedInput
    bookings?: BookingUpdateManyWithoutScreeningNestedInput
  }

  export type ScreeningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutScreeningNestedInput
  }

  export type ScreeningCreateManyInput = {
    id?: number
    movieId: number
    hallId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
  }

  export type ScreeningUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    screening: ScreeningCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: number
    screeningId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    screening?: ScreeningUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    screeningId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: number
    screeningId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    screeningId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSeatCreateInput = {
    booking: BookingCreateNestedOneWithoutSeatsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingSeatUncheckedCreateInput = {
    id?: number
    bookingId: number
    seatId: number
  }

  export type BookingSeatUpdateInput = {
    booking?: BookingUpdateOneRequiredWithoutSeatsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingSeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingSeatCreateManyInput = {
    id?: number
    bookingId: number
    seatId: number
  }

  export type BookingSeatUpdateManyMutationInput = {

  }

  export type BookingSeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type ScreeningListRelationFilter = {
    every?: ScreeningWhereInput
    some?: ScreeningWhereInput
    none?: ScreeningWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreeningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    posterUrl?: SortOrder
    trailerUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    posterUrl?: SortOrder
    trailerUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    posterUrl?: SortOrder
    trailerUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HallCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HallAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HallMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HallMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HallSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HallRelationFilter = {
    is?: HallWhereInput
    isNot?: HallWhereInput
  }

  export type BookingSeatListRelationFilter = {
    every?: BookingSeatWhereInput
    some?: BookingSeatWhereInput
    none?: BookingSeatWhereInput
  }

  export type BookingSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatHallIdRowLabelSeatNumberCompoundUniqueInput = {
    hallId: number
    rowLabel: string
    seatNumber: number
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    hallId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MovieRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type ScreeningCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    price?: SortOrder
  }

  export type ScreeningMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    hallId?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScreeningRelationFilter = {
    is?: ScreeningWhereInput
    isNot?: ScreeningWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    screeningId?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type SeatRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type BookingSeatBookingIdSeatIdCompoundUniqueInput = {
    bookingId: number
    seatId: number
  }

  export type BookingSeatCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
  }

  export type BookingSeatAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
  }

  export type BookingSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
  }

  export type BookingSeatMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
  }

  export type BookingSeatSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    seatId?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutGenresInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUpdateManyWithoutGenresNestedInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutGenresInput | MovieUpsertWithWhereUniqueWithoutGenresInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutGenresInput | MovieUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutGenresInput | MovieUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutGenresInput | MovieUpsertWithWhereUniqueWithoutGenresInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutGenresInput | MovieUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutGenresInput | MovieUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type GenreCreateNestedManyWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type ScreeningCreateNestedManyWithoutMovieInput = {
    create?: XOR<ScreeningCreateWithoutMovieInput, ScreeningUncheckedCreateWithoutMovieInput> | ScreeningCreateWithoutMovieInput[] | ScreeningUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMovieInput | ScreeningCreateOrConnectWithoutMovieInput[]
    createMany?: ScreeningCreateManyMovieInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type ScreeningUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ScreeningCreateWithoutMovieInput, ScreeningUncheckedCreateWithoutMovieInput> | ScreeningCreateWithoutMovieInput[] | ScreeningUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMovieInput | ScreeningCreateOrConnectWithoutMovieInput[]
    createMany?: ScreeningCreateManyMovieInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GenreUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutMoviesInput | GenreUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutMoviesInput | GenreUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutMoviesInput | GenreUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type ScreeningUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ScreeningCreateWithoutMovieInput, ScreeningUncheckedCreateWithoutMovieInput> | ScreeningCreateWithoutMovieInput[] | ScreeningUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMovieInput | ScreeningCreateOrConnectWithoutMovieInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutMovieInput | ScreeningUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ScreeningCreateManyMovieInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutMovieInput | ScreeningUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutMovieInput | ScreeningUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutMoviesInput | GenreUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutMoviesInput | GenreUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutMoviesInput | GenreUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type ScreeningUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ScreeningCreateWithoutMovieInput, ScreeningUncheckedCreateWithoutMovieInput> | ScreeningCreateWithoutMovieInput[] | ScreeningUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutMovieInput | ScreeningCreateOrConnectWithoutMovieInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutMovieInput | ScreeningUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ScreeningCreateManyMovieInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutMovieInput | ScreeningUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutMovieInput | ScreeningUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type SeatCreateNestedManyWithoutHallInput = {
    create?: XOR<SeatCreateWithoutHallInput, SeatUncheckedCreateWithoutHallInput> | SeatCreateWithoutHallInput[] | SeatUncheckedCreateWithoutHallInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutHallInput | SeatCreateOrConnectWithoutHallInput[]
    createMany?: SeatCreateManyHallInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ScreeningCreateNestedManyWithoutHallInput = {
    create?: XOR<ScreeningCreateWithoutHallInput, ScreeningUncheckedCreateWithoutHallInput> | ScreeningCreateWithoutHallInput[] | ScreeningUncheckedCreateWithoutHallInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallInput | ScreeningCreateOrConnectWithoutHallInput[]
    createMany?: ScreeningCreateManyHallInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutHallInput = {
    create?: XOR<SeatCreateWithoutHallInput, SeatUncheckedCreateWithoutHallInput> | SeatCreateWithoutHallInput[] | SeatUncheckedCreateWithoutHallInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutHallInput | SeatCreateOrConnectWithoutHallInput[]
    createMany?: SeatCreateManyHallInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ScreeningUncheckedCreateNestedManyWithoutHallInput = {
    create?: XOR<ScreeningCreateWithoutHallInput, ScreeningUncheckedCreateWithoutHallInput> | ScreeningCreateWithoutHallInput[] | ScreeningUncheckedCreateWithoutHallInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallInput | ScreeningCreateOrConnectWithoutHallInput[]
    createMany?: ScreeningCreateManyHallInputEnvelope
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
  }

  export type SeatUpdateManyWithoutHallNestedInput = {
    create?: XOR<SeatCreateWithoutHallInput, SeatUncheckedCreateWithoutHallInput> | SeatCreateWithoutHallInput[] | SeatUncheckedCreateWithoutHallInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutHallInput | SeatCreateOrConnectWithoutHallInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutHallInput | SeatUpsertWithWhereUniqueWithoutHallInput[]
    createMany?: SeatCreateManyHallInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutHallInput | SeatUpdateWithWhereUniqueWithoutHallInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutHallInput | SeatUpdateManyWithWhereWithoutHallInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ScreeningUpdateManyWithoutHallNestedInput = {
    create?: XOR<ScreeningCreateWithoutHallInput, ScreeningUncheckedCreateWithoutHallInput> | ScreeningCreateWithoutHallInput[] | ScreeningUncheckedCreateWithoutHallInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallInput | ScreeningCreateOrConnectWithoutHallInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutHallInput | ScreeningUpsertWithWhereUniqueWithoutHallInput[]
    createMany?: ScreeningCreateManyHallInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutHallInput | ScreeningUpdateWithWhereUniqueWithoutHallInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutHallInput | ScreeningUpdateManyWithWhereWithoutHallInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutHallNestedInput = {
    create?: XOR<SeatCreateWithoutHallInput, SeatUncheckedCreateWithoutHallInput> | SeatCreateWithoutHallInput[] | SeatUncheckedCreateWithoutHallInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutHallInput | SeatCreateOrConnectWithoutHallInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutHallInput | SeatUpsertWithWhereUniqueWithoutHallInput[]
    createMany?: SeatCreateManyHallInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutHallInput | SeatUpdateWithWhereUniqueWithoutHallInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutHallInput | SeatUpdateManyWithWhereWithoutHallInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ScreeningUncheckedUpdateManyWithoutHallNestedInput = {
    create?: XOR<ScreeningCreateWithoutHallInput, ScreeningUncheckedCreateWithoutHallInput> | ScreeningCreateWithoutHallInput[] | ScreeningUncheckedCreateWithoutHallInput[]
    connectOrCreate?: ScreeningCreateOrConnectWithoutHallInput | ScreeningCreateOrConnectWithoutHallInput[]
    upsert?: ScreeningUpsertWithWhereUniqueWithoutHallInput | ScreeningUpsertWithWhereUniqueWithoutHallInput[]
    createMany?: ScreeningCreateManyHallInputEnvelope
    set?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    disconnect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    delete?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    connect?: ScreeningWhereUniqueInput | ScreeningWhereUniqueInput[]
    update?: ScreeningUpdateWithWhereUniqueWithoutHallInput | ScreeningUpdateWithWhereUniqueWithoutHallInput[]
    updateMany?: ScreeningUpdateManyWithWhereWithoutHallInput | ScreeningUpdateManyWithWhereWithoutHallInput[]
    deleteMany?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
  }

  export type HallCreateNestedOneWithoutSeatsInput = {
    create?: XOR<HallCreateWithoutSeatsInput, HallUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: HallCreateOrConnectWithoutSeatsInput
    connect?: HallWhereUniqueInput
  }

  export type BookingSeatCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingSeatCreateWithoutSeatInput, BookingSeatUncheckedCreateWithoutSeatInput> | BookingSeatCreateWithoutSeatInput[] | BookingSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutSeatInput | BookingSeatCreateOrConnectWithoutSeatInput[]
    createMany?: BookingSeatCreateManySeatInputEnvelope
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
  }

  export type BookingSeatUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingSeatCreateWithoutSeatInput, BookingSeatUncheckedCreateWithoutSeatInput> | BookingSeatCreateWithoutSeatInput[] | BookingSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutSeatInput | BookingSeatCreateOrConnectWithoutSeatInput[]
    createMany?: BookingSeatCreateManySeatInputEnvelope
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
  }

  export type HallUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<HallCreateWithoutSeatsInput, HallUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: HallCreateOrConnectWithoutSeatsInput
    upsert?: HallUpsertWithoutSeatsInput
    connect?: HallWhereUniqueInput
    update?: XOR<XOR<HallUpdateToOneWithWhereWithoutSeatsInput, HallUpdateWithoutSeatsInput>, HallUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingSeatUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingSeatCreateWithoutSeatInput, BookingSeatUncheckedCreateWithoutSeatInput> | BookingSeatCreateWithoutSeatInput[] | BookingSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutSeatInput | BookingSeatCreateOrConnectWithoutSeatInput[]
    upsert?: BookingSeatUpsertWithWhereUniqueWithoutSeatInput | BookingSeatUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingSeatCreateManySeatInputEnvelope
    set?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    disconnect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    delete?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    update?: BookingSeatUpdateWithWhereUniqueWithoutSeatInput | BookingSeatUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingSeatUpdateManyWithWhereWithoutSeatInput | BookingSeatUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
  }

  export type BookingSeatUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingSeatCreateWithoutSeatInput, BookingSeatUncheckedCreateWithoutSeatInput> | BookingSeatCreateWithoutSeatInput[] | BookingSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutSeatInput | BookingSeatCreateOrConnectWithoutSeatInput[]
    upsert?: BookingSeatUpsertWithWhereUniqueWithoutSeatInput | BookingSeatUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingSeatCreateManySeatInputEnvelope
    set?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    disconnect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    delete?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    update?: BookingSeatUpdateWithWhereUniqueWithoutSeatInput | BookingSeatUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingSeatUpdateManyWithWhereWithoutSeatInput | BookingSeatUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutScreeningsInput = {
    create?: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutScreeningsInput
    connect?: MovieWhereUniqueInput
  }

  export type HallCreateNestedOneWithoutScreeningsInput = {
    create?: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: HallCreateOrConnectWithoutScreeningsInput
    connect?: HallWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutScreeningInput = {
    create?: XOR<BookingCreateWithoutScreeningInput, BookingUncheckedCreateWithoutScreeningInput> | BookingCreateWithoutScreeningInput[] | BookingUncheckedCreateWithoutScreeningInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScreeningInput | BookingCreateOrConnectWithoutScreeningInput[]
    createMany?: BookingCreateManyScreeningInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutScreeningInput = {
    create?: XOR<BookingCreateWithoutScreeningInput, BookingUncheckedCreateWithoutScreeningInput> | BookingCreateWithoutScreeningInput[] | BookingUncheckedCreateWithoutScreeningInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScreeningInput | BookingCreateOrConnectWithoutScreeningInput[]
    createMany?: BookingCreateManyScreeningInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieUpdateOneRequiredWithoutScreeningsNestedInput = {
    create?: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutScreeningsInput
    upsert?: MovieUpsertWithoutScreeningsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutScreeningsInput, MovieUpdateWithoutScreeningsInput>, MovieUncheckedUpdateWithoutScreeningsInput>
  }

  export type HallUpdateOneRequiredWithoutScreeningsNestedInput = {
    create?: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
    connectOrCreate?: HallCreateOrConnectWithoutScreeningsInput
    upsert?: HallUpsertWithoutScreeningsInput
    connect?: HallWhereUniqueInput
    update?: XOR<XOR<HallUpdateToOneWithWhereWithoutScreeningsInput, HallUpdateWithoutScreeningsInput>, HallUncheckedUpdateWithoutScreeningsInput>
  }

  export type BookingUpdateManyWithoutScreeningNestedInput = {
    create?: XOR<BookingCreateWithoutScreeningInput, BookingUncheckedCreateWithoutScreeningInput> | BookingCreateWithoutScreeningInput[] | BookingUncheckedCreateWithoutScreeningInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScreeningInput | BookingCreateOrConnectWithoutScreeningInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutScreeningInput | BookingUpsertWithWhereUniqueWithoutScreeningInput[]
    createMany?: BookingCreateManyScreeningInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutScreeningInput | BookingUpdateWithWhereUniqueWithoutScreeningInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutScreeningInput | BookingUpdateManyWithWhereWithoutScreeningInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutScreeningNestedInput = {
    create?: XOR<BookingCreateWithoutScreeningInput, BookingUncheckedCreateWithoutScreeningInput> | BookingCreateWithoutScreeningInput[] | BookingUncheckedCreateWithoutScreeningInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutScreeningInput | BookingCreateOrConnectWithoutScreeningInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutScreeningInput | BookingUpsertWithWhereUniqueWithoutScreeningInput[]
    createMany?: BookingCreateManyScreeningInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutScreeningInput | BookingUpdateWithWhereUniqueWithoutScreeningInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutScreeningInput | BookingUpdateManyWithWhereWithoutScreeningInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ScreeningCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ScreeningCreateWithoutBookingsInput, ScreeningUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ScreeningCreateOrConnectWithoutBookingsInput
    connect?: ScreeningWhereUniqueInput
  }

  export type BookingSeatCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
  }

  export type BookingSeatUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ScreeningUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ScreeningCreateWithoutBookingsInput, ScreeningUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ScreeningCreateOrConnectWithoutBookingsInput
    upsert?: ScreeningUpsertWithoutBookingsInput
    connect?: ScreeningWhereUniqueInput
    update?: XOR<XOR<ScreeningUpdateToOneWithWhereWithoutBookingsInput, ScreeningUpdateWithoutBookingsInput>, ScreeningUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingSeatUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    upsert?: BookingSeatUpsertWithWhereUniqueWithoutBookingInput | BookingSeatUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    set?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    disconnect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    delete?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    update?: BookingSeatUpdateWithWhereUniqueWithoutBookingInput | BookingSeatUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingSeatUpdateManyWithWhereWithoutBookingInput | BookingSeatUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
  }

  export type BookingSeatUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput> | BookingSeatCreateWithoutBookingInput[] | BookingSeatUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingSeatCreateOrConnectWithoutBookingInput | BookingSeatCreateOrConnectWithoutBookingInput[]
    upsert?: BookingSeatUpsertWithWhereUniqueWithoutBookingInput | BookingSeatUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingSeatCreateManyBookingInputEnvelope
    set?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    disconnect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    delete?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    connect?: BookingSeatWhereUniqueInput | BookingSeatWhereUniqueInput[]
    update?: BookingSeatUpdateWithWhereUniqueWithoutBookingInput | BookingSeatUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingSeatUpdateManyWithWhereWithoutBookingInput | BookingSeatUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutSeatsInput = {
    create?: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSeatsInput
    connect?: BookingWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutBookingsInput = {
    create?: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBookingsInput
    connect?: SeatWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSeatsInput
    upsert?: BookingUpsertWithoutSeatsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutSeatsInput, BookingUpdateWithoutSeatsInput>, BookingUncheckedUpdateWithoutSeatsInput>
  }

  export type SeatUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBookingsInput
    upsert?: SeatUpsertWithoutBookingsInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutBookingsInput, SeatUpdateWithoutBookingsInput>, SeatUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    screening: ScreeningCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    screeningId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    screeningId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type MovieCreateWithoutGenresInput = {
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    screenings?: ScreeningCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    screenings?: ScreeningUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutGenresInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutGenresInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutGenresInput, MovieUncheckedUpdateWithoutGenresInput>
    create: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutGenresInput, MovieUncheckedUpdateWithoutGenresInput>
  }

  export type MovieUpdateManyWithWhereWithoutGenresInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutGenresInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    description?: StringFilter<"Movie"> | string
    durationMinutes?: IntFilter<"Movie"> | number
    posterUrl?: StringNullableFilter<"Movie"> | string | null
    trailerUrl?: StringNullableFilter<"Movie"> | string | null
    isActive?: BoolFilter<"Movie"> | boolean
    createdAt?: DateTimeFilter<"Movie"> | Date | string
  }

  export type GenreCreateWithoutMoviesInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type ScreeningCreateWithoutMovieInput = {
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    hall: HallCreateNestedOneWithoutScreeningsInput
    bookings?: BookingCreateNestedManyWithoutScreeningInput
  }

  export type ScreeningUncheckedCreateWithoutMovieInput = {
    id?: number
    hallId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutScreeningInput
  }

  export type ScreeningCreateOrConnectWithoutMovieInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutMovieInput, ScreeningUncheckedCreateWithoutMovieInput>
  }

  export type ScreeningCreateManyMovieInputEnvelope = {
    data: ScreeningCreateManyMovieInput | ScreeningCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreUpdateManyWithWhereWithoutMoviesInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutMoviesInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
  }

  export type ScreeningUpsertWithWhereUniqueWithoutMovieInput = {
    where: ScreeningWhereUniqueInput
    update: XOR<ScreeningUpdateWithoutMovieInput, ScreeningUncheckedUpdateWithoutMovieInput>
    create: XOR<ScreeningCreateWithoutMovieInput, ScreeningUncheckedCreateWithoutMovieInput>
  }

  export type ScreeningUpdateWithWhereUniqueWithoutMovieInput = {
    where: ScreeningWhereUniqueInput
    data: XOR<ScreeningUpdateWithoutMovieInput, ScreeningUncheckedUpdateWithoutMovieInput>
  }

  export type ScreeningUpdateManyWithWhereWithoutMovieInput = {
    where: ScreeningScalarWhereInput
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyWithoutMovieInput>
  }

  export type ScreeningScalarWhereInput = {
    AND?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
    OR?: ScreeningScalarWhereInput[]
    NOT?: ScreeningScalarWhereInput | ScreeningScalarWhereInput[]
    id?: IntFilter<"Screening"> | number
    movieId?: IntFilter<"Screening"> | number
    hallId?: IntFilter<"Screening"> | number
    startTime?: DateTimeFilter<"Screening"> | Date | string
    endTime?: DateTimeFilter<"Screening"> | Date | string
    price?: FloatFilter<"Screening"> | number
    createdAt?: DateTimeFilter<"Screening"> | Date | string
  }

  export type SeatCreateWithoutHallInput = {
    rowLabel: string
    seatNumber: number
    bookings?: BookingSeatCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutHallInput = {
    id?: number
    rowLabel: string
    seatNumber: number
    bookings?: BookingSeatUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutHallInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutHallInput, SeatUncheckedCreateWithoutHallInput>
  }

  export type SeatCreateManyHallInputEnvelope = {
    data: SeatCreateManyHallInput | SeatCreateManyHallInput[]
    skipDuplicates?: boolean
  }

  export type ScreeningCreateWithoutHallInput = {
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutScreeningsInput
    bookings?: BookingCreateNestedManyWithoutScreeningInput
  }

  export type ScreeningUncheckedCreateWithoutHallInput = {
    id?: number
    movieId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutScreeningInput
  }

  export type ScreeningCreateOrConnectWithoutHallInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutHallInput, ScreeningUncheckedCreateWithoutHallInput>
  }

  export type ScreeningCreateManyHallInputEnvelope = {
    data: ScreeningCreateManyHallInput | ScreeningCreateManyHallInput[]
    skipDuplicates?: boolean
  }

  export type SeatUpsertWithWhereUniqueWithoutHallInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutHallInput, SeatUncheckedUpdateWithoutHallInput>
    create: XOR<SeatCreateWithoutHallInput, SeatUncheckedCreateWithoutHallInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutHallInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutHallInput, SeatUncheckedUpdateWithoutHallInput>
  }

  export type SeatUpdateManyWithWhereWithoutHallInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutHallInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: IntFilter<"Seat"> | number
    rowLabel?: StringFilter<"Seat"> | string
    seatNumber?: IntFilter<"Seat"> | number
    hallId?: IntFilter<"Seat"> | number
  }

  export type ScreeningUpsertWithWhereUniqueWithoutHallInput = {
    where: ScreeningWhereUniqueInput
    update: XOR<ScreeningUpdateWithoutHallInput, ScreeningUncheckedUpdateWithoutHallInput>
    create: XOR<ScreeningCreateWithoutHallInput, ScreeningUncheckedCreateWithoutHallInput>
  }

  export type ScreeningUpdateWithWhereUniqueWithoutHallInput = {
    where: ScreeningWhereUniqueInput
    data: XOR<ScreeningUpdateWithoutHallInput, ScreeningUncheckedUpdateWithoutHallInput>
  }

  export type ScreeningUpdateManyWithWhereWithoutHallInput = {
    where: ScreeningScalarWhereInput
    data: XOR<ScreeningUpdateManyMutationInput, ScreeningUncheckedUpdateManyWithoutHallInput>
  }

  export type HallCreateWithoutSeatsInput = {
    name: string
    screenings?: ScreeningCreateNestedManyWithoutHallInput
  }

  export type HallUncheckedCreateWithoutSeatsInput = {
    id?: number
    name: string
    screenings?: ScreeningUncheckedCreateNestedManyWithoutHallInput
  }

  export type HallCreateOrConnectWithoutSeatsInput = {
    where: HallWhereUniqueInput
    create: XOR<HallCreateWithoutSeatsInput, HallUncheckedCreateWithoutSeatsInput>
  }

  export type BookingSeatCreateWithoutSeatInput = {
    booking: BookingCreateNestedOneWithoutSeatsInput
  }

  export type BookingSeatUncheckedCreateWithoutSeatInput = {
    id?: number
    bookingId: number
  }

  export type BookingSeatCreateOrConnectWithoutSeatInput = {
    where: BookingSeatWhereUniqueInput
    create: XOR<BookingSeatCreateWithoutSeatInput, BookingSeatUncheckedCreateWithoutSeatInput>
  }

  export type BookingSeatCreateManySeatInputEnvelope = {
    data: BookingSeatCreateManySeatInput | BookingSeatCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type HallUpsertWithoutSeatsInput = {
    update: XOR<HallUpdateWithoutSeatsInput, HallUncheckedUpdateWithoutSeatsInput>
    create: XOR<HallCreateWithoutSeatsInput, HallUncheckedCreateWithoutSeatsInput>
    where?: HallWhereInput
  }

  export type HallUpdateToOneWithWhereWithoutSeatsInput = {
    where?: HallWhereInput
    data: XOR<HallUpdateWithoutSeatsInput, HallUncheckedUpdateWithoutSeatsInput>
  }

  export type HallUpdateWithoutSeatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    screenings?: ScreeningUpdateManyWithoutHallNestedInput
  }

  export type HallUncheckedUpdateWithoutSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    screenings?: ScreeningUncheckedUpdateManyWithoutHallNestedInput
  }

  export type BookingSeatUpsertWithWhereUniqueWithoutSeatInput = {
    where: BookingSeatWhereUniqueInput
    update: XOR<BookingSeatUpdateWithoutSeatInput, BookingSeatUncheckedUpdateWithoutSeatInput>
    create: XOR<BookingSeatCreateWithoutSeatInput, BookingSeatUncheckedCreateWithoutSeatInput>
  }

  export type BookingSeatUpdateWithWhereUniqueWithoutSeatInput = {
    where: BookingSeatWhereUniqueInput
    data: XOR<BookingSeatUpdateWithoutSeatInput, BookingSeatUncheckedUpdateWithoutSeatInput>
  }

  export type BookingSeatUpdateManyWithWhereWithoutSeatInput = {
    where: BookingSeatScalarWhereInput
    data: XOR<BookingSeatUpdateManyMutationInput, BookingSeatUncheckedUpdateManyWithoutSeatInput>
  }

  export type BookingSeatScalarWhereInput = {
    AND?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
    OR?: BookingSeatScalarWhereInput[]
    NOT?: BookingSeatScalarWhereInput | BookingSeatScalarWhereInput[]
    id?: IntFilter<"BookingSeat"> | number
    bookingId?: IntFilter<"BookingSeat"> | number
    seatId?: IntFilter<"BookingSeat"> | number
  }

  export type MovieCreateWithoutScreeningsInput = {
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    genres?: GenreCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutScreeningsInput = {
    id?: number
    title: string
    description: string
    durationMinutes: number
    posterUrl?: string | null
    trailerUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutScreeningsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
  }

  export type HallCreateWithoutScreeningsInput = {
    name: string
    seats?: SeatCreateNestedManyWithoutHallInput
  }

  export type HallUncheckedCreateWithoutScreeningsInput = {
    id?: number
    name: string
    seats?: SeatUncheckedCreateNestedManyWithoutHallInput
  }

  export type HallCreateOrConnectWithoutScreeningsInput = {
    where: HallWhereUniqueInput
    create: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
  }

  export type BookingCreateWithoutScreeningInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    seats?: BookingSeatCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutScreeningInput = {
    id?: number
    userId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    seats?: BookingSeatUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutScreeningInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutScreeningInput, BookingUncheckedCreateWithoutScreeningInput>
  }

  export type BookingCreateManyScreeningInputEnvelope = {
    data: BookingCreateManyScreeningInput | BookingCreateManyScreeningInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithoutScreeningsInput = {
    update: XOR<MovieUpdateWithoutScreeningsInput, MovieUncheckedUpdateWithoutScreeningsInput>
    create: XOR<MovieCreateWithoutScreeningsInput, MovieUncheckedCreateWithoutScreeningsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutScreeningsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutScreeningsInput, MovieUncheckedUpdateWithoutScreeningsInput>
  }

  export type MovieUpdateWithoutScreeningsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutScreeningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type HallUpsertWithoutScreeningsInput = {
    update: XOR<HallUpdateWithoutScreeningsInput, HallUncheckedUpdateWithoutScreeningsInput>
    create: XOR<HallCreateWithoutScreeningsInput, HallUncheckedCreateWithoutScreeningsInput>
    where?: HallWhereInput
  }

  export type HallUpdateToOneWithWhereWithoutScreeningsInput = {
    where?: HallWhereInput
    data: XOR<HallUpdateWithoutScreeningsInput, HallUncheckedUpdateWithoutScreeningsInput>
  }

  export type HallUpdateWithoutScreeningsInput = {
    name?: StringFieldUpdateOperationsInput | string
    seats?: SeatUpdateManyWithoutHallNestedInput
  }

  export type HallUncheckedUpdateWithoutScreeningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seats?: SeatUncheckedUpdateManyWithoutHallNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutScreeningInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutScreeningInput, BookingUncheckedUpdateWithoutScreeningInput>
    create: XOR<BookingCreateWithoutScreeningInput, BookingUncheckedCreateWithoutScreeningInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutScreeningInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutScreeningInput, BookingUncheckedUpdateWithoutScreeningInput>
  }

  export type BookingUpdateManyWithWhereWithoutScreeningInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutScreeningInput>
  }

  export type UserCreateWithoutBookingsInput = {
    username: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    username: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ScreeningCreateWithoutBookingsInput = {
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutScreeningsInput
    hall: HallCreateNestedOneWithoutScreeningsInput
  }

  export type ScreeningUncheckedCreateWithoutBookingsInput = {
    id?: number
    movieId: number
    hallId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
  }

  export type ScreeningCreateOrConnectWithoutBookingsInput = {
    where: ScreeningWhereUniqueInput
    create: XOR<ScreeningCreateWithoutBookingsInput, ScreeningUncheckedCreateWithoutBookingsInput>
  }

  export type BookingSeatCreateWithoutBookingInput = {
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingSeatUncheckedCreateWithoutBookingInput = {
    id?: number
    seatId: number
  }

  export type BookingSeatCreateOrConnectWithoutBookingInput = {
    where: BookingSeatWhereUniqueInput
    create: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput>
  }

  export type BookingSeatCreateManyBookingInputEnvelope = {
    data: BookingSeatCreateManyBookingInput | BookingSeatCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningUpsertWithoutBookingsInput = {
    update: XOR<ScreeningUpdateWithoutBookingsInput, ScreeningUncheckedUpdateWithoutBookingsInput>
    create: XOR<ScreeningCreateWithoutBookingsInput, ScreeningUncheckedCreateWithoutBookingsInput>
    where?: ScreeningWhereInput
  }

  export type ScreeningUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ScreeningWhereInput
    data: XOR<ScreeningUpdateWithoutBookingsInput, ScreeningUncheckedUpdateWithoutBookingsInput>
  }

  export type ScreeningUpdateWithoutBookingsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutScreeningsNestedInput
    hall?: HallUpdateOneRequiredWithoutScreeningsNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSeatUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingSeatWhereUniqueInput
    update: XOR<BookingSeatUpdateWithoutBookingInput, BookingSeatUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingSeatCreateWithoutBookingInput, BookingSeatUncheckedCreateWithoutBookingInput>
  }

  export type BookingSeatUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingSeatWhereUniqueInput
    data: XOR<BookingSeatUpdateWithoutBookingInput, BookingSeatUncheckedUpdateWithoutBookingInput>
  }

  export type BookingSeatUpdateManyWithWhereWithoutBookingInput = {
    where: BookingSeatScalarWhereInput
    data: XOR<BookingSeatUpdateManyMutationInput, BookingSeatUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingCreateWithoutSeatsInput = {
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    screening: ScreeningCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutSeatsInput = {
    id?: number
    userId: number
    screeningId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutSeatsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
  }

  export type SeatCreateWithoutBookingsInput = {
    rowLabel: string
    seatNumber: number
    hall: HallCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutBookingsInput = {
    id?: number
    rowLabel: string
    seatNumber: number
    hallId: number
  }

  export type SeatCreateOrConnectWithoutBookingsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
  }

  export type BookingUpsertWithoutSeatsInput = {
    update: XOR<BookingUpdateWithoutSeatsInput, BookingUncheckedUpdateWithoutSeatsInput>
    create: XOR<BookingCreateWithoutSeatsInput, BookingUncheckedCreateWithoutSeatsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutSeatsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutSeatsInput, BookingUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingUpdateWithoutSeatsInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    screening?: ScreeningUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    screeningId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatUpsertWithoutBookingsInput = {
    update: XOR<SeatUpdateWithoutBookingsInput, SeatUncheckedUpdateWithoutBookingsInput>
    create: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutBookingsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutBookingsInput, SeatUncheckedUpdateWithoutBookingsInput>
  }

  export type SeatUpdateWithoutBookingsInput = {
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    hall?: HallUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyUserInput = {
    id?: number
    screeningId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screening?: ScreeningUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    screeningId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    screeningId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenings?: ScreeningUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenings?: ScreeningUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trailerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningCreateManyMovieInput = {
    id?: number
    hallId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
  }

  export type GenreUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScreeningUpdateWithoutMovieInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hall?: HallUpdateOneRequiredWithoutScreeningsNestedInput
    bookings?: BookingUpdateManyWithoutScreeningNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutScreeningNestedInput
  }

  export type ScreeningUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    hallId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatCreateManyHallInput = {
    id?: number
    rowLabel: string
    seatNumber: number
  }

  export type ScreeningCreateManyHallInput = {
    id?: number
    movieId: number
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
  }

  export type SeatUpdateWithoutHallInput = {
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    bookings?: BookingSeatUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutHallInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    bookings?: BookingSeatUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutHallInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
  }

  export type ScreeningUpdateWithoutHallInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutScreeningsNestedInput
    bookings?: BookingUpdateManyWithoutScreeningNestedInput
  }

  export type ScreeningUncheckedUpdateWithoutHallInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutScreeningNestedInput
  }

  export type ScreeningUncheckedUpdateManyWithoutHallInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSeatCreateManySeatInput = {
    id?: number
    bookingId: number
  }

  export type BookingSeatUpdateWithoutSeatInput = {
    booking?: BookingUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type BookingSeatUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingSeatUncheckedUpdateManyWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyScreeningInput = {
    id?: number
    userId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutScreeningInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    seats?: BookingSeatUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutScreeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: BookingSeatUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutScreeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSeatCreateManyBookingInput = {
    id?: number
    seatId: number
  }

  export type BookingSeatUpdateWithoutBookingInput = {
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingSeatUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingSeatUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreCountOutputTypeDefaultArgs instead
     */
    export type GenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieCountOutputTypeDefaultArgs instead
     */
    export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HallCountOutputTypeDefaultArgs instead
     */
    export type HallCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HallCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatCountOutputTypeDefaultArgs instead
     */
    export type SeatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScreeningCountOutputTypeDefaultArgs instead
     */
    export type ScreeningCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScreeningCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingCountOutputTypeDefaultArgs instead
     */
    export type BookingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDefaultArgs instead
     */
    export type MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HallDefaultArgs instead
     */
    export type HallArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HallDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatDefaultArgs instead
     */
    export type SeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScreeningDefaultArgs instead
     */
    export type ScreeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScreeningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingSeatDefaultArgs instead
     */
    export type BookingSeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingSeatDefaultArgs<ExtArgs>

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