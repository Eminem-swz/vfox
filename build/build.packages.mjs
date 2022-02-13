import { execa } from 'execa'
import { resolve } from 'path'
import ora from 'ora'

const CWD = process.cwd()
const DOCS_CWD = resolve(CWD, './packages/vfox-docs')
const PLAYGROUND_CWD = resolve(CWD, './packages/vfox-playground')
const DEMO_CWD = resolve(CWD, './packages/vfox-demo')

const buildDocs = () => execa('pnpm', ['build'], { cwd: DOCS_CWD })
const buildPlayground = () => execa('pnpm', ['build'], { cwd: PLAYGROUND_CWD })
const buildDemo = () => execa('pnpm', ['build'], { cwd: DEMO_CWD })

const runBuildTask = async (taskName, task) => {
  const start = Date.now()
  const s = ora().start(`Building ${taskName}`)
  try {
    await task()
    s.succeed(`Build ${taskName} successed!(${Date.now() - start}ms)`)
  } catch (e) {
    s.fail(`Build ${taskName} failed!`)
    console.error(e.toString())
  }
}

const runBuild = async () => {
  await runBuildTask('docs', buildDocs) // 前置
  await runBuildTask('playground', buildPlayground)
  await runBuildTask('demo', buildDemo)
}

runBuild()
