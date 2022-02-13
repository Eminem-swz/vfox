import { runTask } from './utils.mjs'
import { buildManifest } from './buildTask.manifest.mjs'
import { buildCss } from './buildTask.css.mjs'
import { buildDeclaration } from './buildTask.declaration.mjs'
import { buildCompsEsm, buildCompsCjs } from './buildTask.components.mjs'
import { buildEsmBrowser, buildUmd } from './buildTask.umd.mjs'

const runBuild = async () => {
  await runTask('manifest', buildManifest)
  await Promise.all([
    [
      runTask('css', buildCss),
      runTask('declaration', buildDeclaration),
      runTask('components esm', buildCompsEsm),
      runTask('components cjs', buildCompsCjs),
      runTask('esm-browser', buildEsmBrowser),
      runTask('umd', buildUmd)
    ]
  ])
}

runBuild()
