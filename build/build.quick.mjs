import { runTask } from './utils.mjs'
import { buildManifest } from './buildTask.manifest.mjs'
import { buildCss } from './buildTask.css.mjs'
import { buildCompsEsm, buildCompsCjs } from './buildTask.components.mjs'

const runBuild = async () => {
  await runTask('manifest', buildManifest)
  await Promise.all([
    [
      runTask('css', buildCss),
      runTask('components esm', buildCompsEsm),
      runTask('components cjs', buildCompsCjs)
    ]
  ])
}

runBuild()
