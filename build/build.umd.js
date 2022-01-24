const path = require('path')
const fs = require('fs')
const { build } = require('esbuild')
const vuePlugin = require('./esbuild-plugin-vue')
const rollup = require('rollup')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { runExec } = require('./utils')
const { terser } = require('rollup-plugin-terser')

const buildEsm = async () => {
  await build({
    plugins: [vuePlugin()],
    entryPoints: [path.resolve(__dirname, '../src/umd.ts')],
    external: ['vue'],
    outdir: `dist/`,
    format: 'esm',
    bundle: true,
    target: ['es2015']
  })
}

const buildUmd = async () => {
  const inputOptions = {
    input: path.resolve(__dirname, '../dist/umd.js'),
    external: ['vue'],
    plugins: [
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      terser()
    ]
  }

  const outOptions = {
    name: 'Vfox',
    format: 'umd',
    file: path.resolve(__dirname, '../dist/index.js'),
    globals: {
      vue: 'Vue'
    },
    sourcemap: true
  }

  const bundle = await rollup.rollup(inputOptions)
  await bundle.write(outOptions)
}

const runBuild = async () => {
  await buildEsm()
  await buildUmd()
  await fs.promises.unlink(path.resolve(__dirname, '../dist/umd.js'))
  await runExec(
    `gulp compressCss --gulpfile ${path.resolve(__dirname, './gulpfile.js')}`
  )
}

runBuild()
