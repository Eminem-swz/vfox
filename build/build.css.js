const path = require('path')
const rollup = require('rollup')
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

const runBuild = async () => {
  await buildIndexScss()
  await runExec(
    `gulp build --gulpfile ${path.resolve(__dirname, './gulpfile.js')}`
  )
}

runBuild()
