export interface VfoxResolverOptions {
  /**
   * import style css or sass along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'sass'
  /**
   * use commonjs lib or es module
   *
   * @default "esm"
   */
  format?: 'esm' | 'cjs'
}

function getSideEffects(dirName: string, options: VfoxResolverOptions) {
  const { importStyle = true } = options
  const path = getPath(options)

  if (importStyle === 'sass') {
    return `${path}/${dirName}/style/sass`
  }

  if (importStyle === 'css' || importStyle === true) {
    return `${path}/${dirName}/style/index`
  }

  return
}

function getPath(options: VfoxResolverOptions) {
  return `vfox/${options.format === 'cjs' ? 'lib' : 'es'}`
}

/**
 * Resolver for Vfox
 *
 * @link https://github.com/godxiaoji/vfox
 */
export function VfoxResolver(options: VfoxResolverOptions = {}) {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Fx')) {
        const partialName = name.slice(2)
        return {
          importName: partialName,
          path: getPath(options),
          sideEffects: getSideEffects(partialName, options)
        }
      }
    }
  }
}
