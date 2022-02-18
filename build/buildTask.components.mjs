import { build } from 'esbuild'
import { resolve } from 'path'
import vuePlugin from './esbuild-plugin-vue.mjs'
import { getJSON, getPath } from './utils.mjs'

const { __dirname } = getPath(import.meta.url)
const pkg = await getJSON('./package.json')
const deps = Object.keys(pkg.dependencies).concat(['vue'])

const getEntryPoints = async () => {
  const tss = await getJSON('./build/ts-files.json')

  const entryPoints = {}
  tss.forEach(name => {
    entryPoints[name] = resolve(__dirname, `../packages/vfox/src/${name}.ts`)
  })

  return entryPoints
}

const externalPlugin = () => {
  return {
    name: 'external',
    setup(build) {
      // Match an import called "./*" and mark it as external
      build.onResolve({ filter: /^\.\// }, () => ({ external: true }))
      build.onResolve({ filter: /^\.\.\// }, () => ({ external: true }))
    }
  }
}

export const buildCompsEsm = async () => {
  const entryPoints = await getEntryPoints()

  await build({
    plugins: [vuePlugin(), externalPlugin()],
    entryPoints: entryPoints,
    external: deps,
    outdir: `es/`,
    format: 'esm',
    bundle: true,
    target: ['es2019']
  })
}

export const buildCompsCjs = async () => {
  const entryPoints = await getEntryPoints()

  await build({
    plugins: [vuePlugin(), externalPlugin()],
    entryPoints: entryPoints,
    external: deps,
    outdir: `lib/`,
    format: 'cjs',
    bundle: true,
    target: ['es2019']
  })
}