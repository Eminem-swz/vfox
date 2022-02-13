import fs from 'fs'
import { execa } from 'execa'

const buildJSON = async () => {
  const fileStr = await fs.promises.readFile('./build/ts-files.txt', 'utf-8')

  const paths = fileStr
    .split(`\n`)
    .filter(function (v) {
      return (
        v.indexOf('style/index.ts') === -1 &&
        v.indexOf('types.ts') === -1 &&
        v.indexOf('.d.ts') === -1 &&
        v.indexOf('umd.ts') === -1 &&
        v !== ''
      )
    })
    .map(v => v.replace(/.ts$/, ''))
    .sort()

  await fs.promises.writeFile(
    './build/ts-files.json',
    JSON.stringify(paths, null, 2),
    'utf-8'
  )
  await fs.promises.unlink('./build/ts-files.txt')
}

export const buildManifest = async () => {
  await execa('gulp', [
    'buildFilePathsCache',
    '--gulpfile',
    './build/gulpfile.js'
  ])
  await buildJSON()
}
