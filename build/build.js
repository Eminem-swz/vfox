const { runExec } = require('./utils')

const names = ['manifest', 'svg', 'css', 'declaration', 'components', 'umd']
let index = 0

const runBuild = async () => {
  const start = Date.now()
  const name = names[index]
  await runExec(`node ./build/build.${name}.js`)
  console.log(`${name}: ${Date.now() - start}ms`)

  index++

  if (index < names.length) {
    await runBuild()
  }
}

runBuild()
