import { execa } from 'execa'
import { resolve } from 'path'

const CWD = process.cwd()
const DOCS_CWD = resolve(CWD, './packages/vfox-docs')
const PLAYGROUND_CWD = resolve(CWD, './packages/vfox-playground')
const DEMO_CWD = resolve(CWD, './packages/vfox-demo')

export const buildDocs = () => execa('pnpm', ['build'], { cwd: DOCS_CWD })
export const buildPlayground = () =>
  execa('pnpm', ['build'], { cwd: PLAYGROUND_CWD })
export const buildDemo = () => execa('pnpm', ['build'], { cwd: DEMO_CWD })
