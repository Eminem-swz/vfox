import { rollup } from 'rollup'
import { execa } from 'execa'

const replaceImportToSassImport = () => {
  return {
    name: 'replaceImportToSassImport',
    renderChunk(code) {
      return code.replace(/import/g, '@import')
    }
  }
}

const buildIndexScss = async () => {
  const bundle = await rollup({
    input: './packages/vfox/src/style/index.js',
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
    file: './packages/vfox/src/style/index.scss'
  })
}

export const buildCss = async () => {
  await buildIndexScss()
  await execa('gulp', ['build', '--gulpfile', './build/gulpfile.js'])
}
