import svgSprites from 'rollup-plugin-svg-sprites'
import requireContext from '@godxiaoji/rollup-plugin-require-context'

function kebabCase2PascalCase(name) {
  name = name.replace(/-(\w)/g, (all, letter) => {
    return letter.toUpperCase()
  })
  return name.substr(0, 1).toUpperCase() + name.substr(1)
}

export default {
  input: './src/Icon/load-svg.js',
  output: {
    format: 'esm',
    file: `src/Icon/lib/load-svg.js`,
    banner: '/* eslint-disable */'
  },
  plugins: [
    requireContext(),
    svgSprites({
      symbolId(filePath) {
        const paths = filePath
          .replace(/\\/g, '/')
          .split('assets/icons/')[1]
          .split('/')

        const fileName = paths.pop().replace('.svg', '')
        return (
          'icon-' + kebabCase2PascalCase([fileName].concat(paths).join('-'))
        )
      }
    })
  ]
}
