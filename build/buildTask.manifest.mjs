import fs from 'fs'
import { execa } from 'execa'

const buildJSON = async () => {
  const fileStrPath = './build/ts-files.txt'
  const fileStr = await fs.promises.readFile(fileStrPath, 'utf-8')

  const paths = fileStr
    .split(`\n`)
    .filter(function (path) {
      return (
        ![
          'style/index.ts',
          'style/index.ts',
          'types.ts',
          '.d.ts',
          'umd.ts',
          '__tests__'
        ].some(v => path.includes(v)) && path !== ''
      )
    })
    .map(v => v.replace(/.ts$/, ''))
    .sort()

  await fs.promises.writeFile(
    './build/ts-files.json',
    JSON.stringify(paths, null, 2),
    'utf-8'
  )
  await fs.promises.unlink(fileStrPath)
}

export const buildManifest = async () => {
  await execa('gulp', [
    'buildFilePathsCache',
    '--gulpfile',
    './build/gulpfile.js'
  ])
  await buildJSON()
}
