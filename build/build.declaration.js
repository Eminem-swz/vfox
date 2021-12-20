const { unlink } = require('fs').promises
const { resolve } = require('path')
const ora = require('ora')
const chalk = require('chalk')
const pkg = require('../package.json')

const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const commonjs = require('@rollup/plugin-commonjs')
const sass = require('rollup-plugin-sass')
const { replaceAlias } = require('./plugins')

const deps = Object.keys(pkg.dependencies)

/**
 * 改模块主要是为了生成d.ts文件列表
 */
async function build() {
  const spinner = ora(`${chalk.blue('Building...')}`).start()

  const inputOptions = {
    input: resolve(__dirname, '../src/index.ts'),
    external: id => {
      if (id === 'vue') {
        return true
      }

      //   if (/^@\//.test(id)) {
      //     return true
      //   }

      if (id === './style') {
        // 样式不打包
        return true
      }

      // 依赖包不打包
      if (deps.some(k => new RegExp('^' + k).test(id))) {
        return true
      }

      return false
    },
    plugins: [
      replaceAlias('@/', '../'),
      sass({
        output: true
      }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true
          },
          include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue']
        },
        abortOnError: false,
        clean: true
      }),
      vue({
        target: 'browser',
        css: false
      })
    ]
  }

  const outputPath = resolve(__dirname, '../es/index.full.js')
  const outOptions = {
    format: 'esm',
    file: outputPath,
    paths(id) {
      if (/^@\//.test(id)) {
        return id.replace('@/', '../')
      }
    }
  }

  const bundle = await rollup.rollup(inputOptions)
  await bundle.write(outOptions)
  spinner.succeed(chalk.green('Build declaration done.'))

  // 删掉无用的 index.full.js
  await unlink(outputPath)
  spinner.succeed(chalk.green('Clear Temp done.'))
}

build()
