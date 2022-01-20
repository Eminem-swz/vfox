const path = require('path')
const fs = require('fs')
const md5 = require('md5')
const compiler = require('@vue/compiler-sfc')

const VuePlugin = () => {
  return {
    name: 'vue',
    setup(build) {
      const absPath = path.resolve(
        process.cwd(),
        build.initialOptions.absWorkingDir || ''
      )

      const formatPath = (p, resolveDir) => {
        if (p.startsWith('.')) {
          return path.resolve(resolveDir, p)
        }
        if (p.startsWith(absPath + '/')) {
          return p
        }
        return path.join(absPath, p)
      }

      build.onResolve({ filter: /\.vue$/ }, args => {
        return {
          path: args.path,
          namespace: 'vue',
          pluginData: { resolveDir: args.resolveDir }
        }
      })

      build.onLoad({ filter: /\.vue$/, namespace: 'vue' }, async args => {
        const { resolveDir } = args.pluginData
        const filePath = formatPath(args.path, resolveDir)
        const content = await fs.promises.readFile(filePath, 'utf8')
        const sfc = compiler.parse(content)
        const isTS = sfc.descriptor.script?.lang === 'ts'

        let contents = ``

        if (sfc.descriptor.script) {
          contents += compiler.rewriteDefault(
            sfc.descriptor.script.content,
            '_sfc_script'
          )
        } else {
          contents += `let _sfc_script = {};`
        }

        if (sfc.descriptor.template) {
          contents += compiler.compileTemplate({
            id: md5(filePath),
            source: sfc.descriptor.template.content,
            filename: filePath,
            isProd:
              process.env.NODE_ENV === 'production' ||
              process.env.BUILD === 'production',
            slotted: sfc.descriptor.slotted
          }).code

          contents += `
          _sfc_script.render = render;
          _sfc_script.__file = '${path
            .relative(absPath, filePath)
            .replace(/\\/g, '/')}';
          `
        }

        contents += `
          export { _sfc_script as default };
          `

        return {
          contents,
          resolveDir,
          loader: isTS ? 'ts' : 'js',
          watchFiles: [filePath]
        }
      })
    }
  }
}

module.exports = VuePlugin
