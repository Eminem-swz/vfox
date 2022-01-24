const path = require('path')
const { runExec } = require('./utils')

const runBuild = async () => {
  await runExec(`svgjs -c ${path.resolve(__dirname, './svgjs.config.js')}`)
  await runExec(
    `gulp copyIcons --gulpfile ${path.resolve(__dirname, './gulpfile.js')}`
  )
}

runBuild()
