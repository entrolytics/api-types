import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = fileURLToPath(new URL('.', import.meta.url))
const packageRoot = resolve(scriptDir, '..')
const repoRoot = resolve(packageRoot, '..', '..')
const apiDistDir = resolve(repoRoot, 'apps', 'api', 'dist')
const outDir = resolve(packageRoot, 'dist')

function copyDeclarationFile(relativePath: string): void {
  const sourcePath = resolve(apiDistDir, relativePath)
  const targetPath = resolve(outDir, relativePath)

  if (!existsSync(sourcePath)) throw new Error(`Missing API declaration: ${relativePath}`)

  mkdirSync(resolve(targetPath, '..'), { recursive: true })
  cpSync(sourcePath, targetPath)

  const mapPath = `${sourcePath}.map`
  if (existsSync(mapPath)) cpSync(mapPath, `${targetPath}.map`)
}

function copyDeclarationDirectory(relativeDir: string): void {
  const sourceDir = resolve(apiDistDir, relativeDir)
  const targetDir = resolve(outDir, relativeDir)
  mkdirSync(targetDir, { recursive: true })

  for (const entry of readdirSync(sourceDir)) {
    if (entry.endsWith('.d.ts')) copyDeclarationFile(join(relativeDir, entry))
  }
}

rmSync(outDir, { force: true, recursive: true })
mkdirSync(outDir, { recursive: true })

copyDeclarationDirectory('routers')
copyDeclarationFile(join('middleware', 'auth.d.ts'))

for (const service of ['analytics', 'deployments', 'forms', 'vitals']) {
  copyDeclarationFile(join('services', `${service}.d.ts`))
}

writeFileSync(
  resolve(outDir, 'index.d.ts'),
  `import type { appRouter } from './routers/index.js'
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
`,
)
writeFileSync(resolve(outDir, 'index.js'), 'export {}\n')
