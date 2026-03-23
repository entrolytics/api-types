import { cpSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = fileURLToPath(new URL('.', import.meta.url))
const packageRoot = resolve(scriptDir, '..')
const repoRoot = resolve(packageRoot, '..', '..')
const apiDistDir = resolve(repoRoot, 'apps', 'api', 'dist')
const outDir = resolve(packageRoot, 'dist')

function copyDeclarationTree(src, dest) {
  const entries = readdirSync(src)

  for (const entry of entries) {
    const sourcePath = join(src, entry)
    const targetPath = join(dest, entry)
    const stats = statSync(sourcePath)

    if (stats.isDirectory()) {
      mkdirSync(targetPath, { recursive: true })
      copyDeclarationTree(sourcePath, targetPath)
      continue
    }

    if (!sourcePath.endsWith('.d.ts') && !sourcePath.endsWith('.d.ts.map')) {
      continue
    }

    cpSync(sourcePath, targetPath)
  }
}

rmSync(outDir, { force: true, recursive: true })
mkdirSync(outDir, { recursive: true })
copyDeclarationTree(apiDistDir, outDir)

writeFileSync(resolve(outDir, 'index.d.ts'), "export type { AppRouter } from './types.js'\n")
writeFileSync(resolve(outDir, 'index.js'), 'export {}\n')
