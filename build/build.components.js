const { resolve } = require('path')
const { build } = require('esbuild')
const vuePlugin = require('./esbuild-plugin-vue')

const pkg = require('../package.json')
const tss = require('./ts-files.json')

const deps = Object.keys(pkg.dependencies)

const runBuild = async () => {
  const entryPoints = {}

  tss.forEach(name => {
    entryPoints[name] = resolve(__dirname, `../src/${name}.ts`)
  })

  await build({
    plugins: [vuePlugin()],
    entryPoints: entryPoints,
    external: ['vue', '../*', './*', ...deps],
    outdir: `es/`,
    format: 'esm',
    bundle: true,
    target: ['es2019']
  })

  await build({
    plugins: [vuePlugin()],
    entryPoints: entryPoints,
    external: ['vue', '../*', './*', ...deps],
    outdir: `lib/`,
    format: 'cjs',
    bundle: true,
    target: ['es2019']
  })
}

runBuild()
