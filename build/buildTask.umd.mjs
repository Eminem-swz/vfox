import fs from 'fs'
import { build } from 'esbuild'
import vuePlugin from './esbuild-plugin-vue.mjs'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { execa } from 'execa'

export const buildEsmBrowser = () =>
  build({
    plugins: [vuePlugin()],
    entryPoints: ['./packages/vfox/src/index.ts'],
    external: ['vue'],
    outfile: `dist/index.esm-browser.js`,
    format: 'esm',
    bundle: true,
    target: ['es2015']
  })

const buildUmdEsm = async () => {
  await build({
    plugins: [vuePlugin()],
    entryPoints: ['./packages/vfox/src/umd.ts'],
    external: ['vue'],
    outfile: `dist/umd.js`,
    format: 'esm',
    bundle: true,
    target: ['es2015']
  })
}

const buildUmdJs = async () => {
  const inputOptions = {
    input: './dist/umd.js',
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
    file: 'dist/index.js',
    globals: {
      vue: 'Vue'
    },
    sourcemap: true
  }

  const bundle = await rollup(inputOptions)
  await bundle.write(outOptions)
}

export const buildUmd = async () => {
  await buildUmdEsm()
  await buildUmdJs()
  await fs.promises.unlink('./dist/umd.js')
  await execa('gulp', ['compressCss', '--gulpfile', './build/gulpfile.js'])
}
