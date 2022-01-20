/* eslint-disable */
const fs = require('fs')
const { resolve } = require('path')
const { runExec } = require('./utils')

const buildJSON = async () => {
  const fileStr = await fs.promises.readFile(
    resolve(__dirname, './ts-files.txt'),
    'utf8'
  )

  const paths = fileStr
    .split(`\n`)
    .filter(function (v) {
      return (
        v.indexOf('style/index.ts') === -1 &&
        v.indexOf('types.ts') === -1 &&
        v.indexOf('.d.ts') === -1 &&
        v !== ''
      )
    })
    .map(v => v.replace(/.ts$/, ''))
    .sort()

  await fs.promises.writeFile(
    resolve(__dirname, './ts-files.json'),
    JSON.stringify(paths, null, 2)
  )
  await fs.promises.unlink(resolve(__dirname, './ts-files.txt'))
}

const runBuild = async () => {
  await runExec(
    `gulp buildFilePathsCache --gulpfile ${resolve(__dirname, './gulpfile.js')}`
  )
  await buildJSON()
}

runBuild()
