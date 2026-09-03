import type { appRouter } from './routers/index.js'
import type { AnyProcedure, BuiltRouter, RouterRecord } from '@trpc/server/unstable-core-do-not-import'

type RouterInternals = '_def' | 'createCaller'

type KnownRouterKey<TKey> = string extends TKey
  ? never
  : number extends TKey
    ? never
    : symbol extends TKey
      ? never
      : TKey

type CleanRouterRecord<TRecord> = {
  [TKey in keyof TRecord as TKey extends RouterInternals ? never : KnownRouterKey<TKey>]: TRecord[TKey] extends AnyProcedure
    ? TRecord[TKey]
    : TRecord[TKey] extends { _def: { record: infer TNestedRecord extends RouterRecord } }
      ? CleanRouterRecord<TNestedRecord>
      : TRecord[TKey] extends RouterRecord
        ? CleanRouterRecord<TRecord[TKey]>
        : never
}

type AppRouterRoot = typeof appRouter['_def']['_config']['$types']
type AppRouterRecord = CleanRouterRecord<typeof appRouter['_def']['record']>

export type AppRouter = BuiltRouter<AppRouterRoot, AppRouterRecord>
