const path = require('path')
const rollup = require('rollup')
const sass = require('rollup-plugin-sass')
const { replaceImportToSassImport, runExec } = require('./utils')

const buildIndexScss = async () => {
  const bundle = await rollup.rollup({
    input: path.resolve(__dirname, '../src/style/index.js'),
    external: id => {
      if (id.indexOf('.scss') !== -1) {
        return true
      }
      return false
    },
    plugins: [replaceImportToSassImport()]
  })

  await bundle.write({
    format: 'esm',
    file: path.resolve(__dirname, '../src/style/index.scss')
  })
}

const buildFullCss = async () => {
  const bundle = await rollup.rollup({
    input: path.resolve(__dirname, '../src/style/index.js'),

    plugins: [
      sass({
        output: path.resolve(__dirname, '../es/style/index.css')
      })
    ]
  })

  await bundle.write({
    format: 'esm',
    file: path.resolve(__dirname, '../es/style/index.js')
  })
}

const runBuild = async () => {
  await buildIndexScss()
  await buildFullCss()
  await runExec(
    `gulp build --gulpfile ${path.resolve(__dirname, './gulpfile.js')}`
  )
}

runBuild()
