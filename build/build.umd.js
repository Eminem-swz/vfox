/* eslint-disable */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import { terser } from "rollup-plugin-terser"

export default [
  {
    input: './es/index.js',
    output: {
      name: 'Vfox',
      format: 'umd',
      file: 'dist/index.js',
      globals: {
        vue: 'Vue'
      }
    },
    external: ['vue'],
    plugins: [
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelHelpers: 'bundled'
      }),
      terser()
    ]
  }
]
