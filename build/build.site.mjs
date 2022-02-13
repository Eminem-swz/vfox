import { runTask } from './utils.mjs'
import { buildDemo, buildDocs, buildPlayground } from './buildTask.site.mjs'
import { buildCss } from './buildTask.css.mjs'
import { buildUmd } from './buildTask.umd.mjs'

const runBuild = async () => {
  await Promise.all([
    [
      runTask('css', buildCss),
      runTask('umd', buildUmd),
      runTask('docs', buildDocs)
    ]
  ])
  await Promise.all([
    runTask('playground', buildPlayground),
    runTask('demo', buildDemo)
  ])
}

runBuild()
