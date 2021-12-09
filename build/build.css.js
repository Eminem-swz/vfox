const { resolve } = require('path')
const rollup = require('rollup')
const sass = require('rollup-plugin-sass')

async function buildFullCss() {
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
}

buildFullCss()
