const { resolve } = require('path')
const { build } = require('esbuild')
const vuePlugin = require('./esbuild-plugin-vue')

const pkg = require('../package.json')
const tss = require('./ts-files.json')

const deps = Object.keys(pkg.dependencies).concat(['vue'])

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

const runBuild = async () => {
  const entryPoints = {}

  tss.forEach(name => {
    entryPoints[name] = resolve(__dirname, `../src/${name}.ts`)
  })

  await build({
    plugins: [vuePlugin(), externalPlugin()],
    entryPoints: entryPoints,
    external: deps,
    outdir: `es/`,
    format: 'esm',
    bundle: true,
    target: ['es2019']
  })

  await build({
    plugins: [vuePlugin(), externalPlugin()],
    entryPoints: entryPoints,
    external: deps,
    outdir: `lib/`,
    format: 'cjs',
    bundle: true,
    target: ['es2019']
  })

  await build({
    plugins: [vuePlugin()],
    entryPoints: [resolve(__dirname, `../src/index.ts`)],
    external: ['vue'],
    outfile: `dist/index.esm-browser.js`,
    format: 'esm',
    bundle: true,
    target: ['es2019']
  })
}

runBuild()
