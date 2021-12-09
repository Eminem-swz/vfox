const cp = require('child_process')
const ora = require('ora')
const chalk = require('chalk')
const { resolve } = require('path')
const rollup = require('rollup')
const sass = require('rollup-plugin-sass')

const spinner = ora(`${chalk.blue('Building...')}`).start()

async function buildFullCss() {
  spinner.info(chalk.blue('Building full css...'))

  const bundle = await rollup.rollup({
    input: resolve(__dirname, '../src/style/index.js'),

    plugins: [
      sass({
        output: resolve(__dirname, '../es/style/index.css')
      })
    ]
  })

  await bundle.write({
    format: 'esm',
    file: resolve(__dirname, '../es/style/index.js')
  })

  spinner.succeed(chalk.green('Build full css done.'))
}

const buildOtherCss = () => {
  spinner.info(chalk.blue('Building other css...'))

  cp.exec(
    `gulp build --gulpfile ${resolve(__dirname, './gulpfile.js')}`,
    (error, stdout, stderr) => {
      if (error) {
        spinner.warn(chalk.red(error))
        return
      }
      spinner.succeed(chalk.green(stdout))
    }
  )
}

async function build() {
  await buildFullCss()
  buildOtherCss()
}

build()
