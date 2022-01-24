const path = require('path')
const { runExec } = require('./utils')

const runBuild = async () => {
  await runExec(
    `vue-tsc --project ${path.resolve(
      __dirname,
      './tsconfig.declaration.json'
    )}`
  )
  await runExec(
    `gulp copyDeclaration --gulpfile ${path.resolve(
      __dirname,
      './gulpfile.js'
    )}`
  )
}

runBuild()
