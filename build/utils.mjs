import fs from 'fs'
import url from 'url'
import path from 'path'
import ora from 'ora'

export const runTask = async (taskName, task) => {
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

export const getPath = importUrl => {
  console.log(process.cwd())
  const __filename = url.fileURLToPath(importUrl)
  const __dirname = path.dirname(__filename)
  return { __filename, __dirname }
}

export const getJSON = async filePath => {
  const str = await fs.promises.readFile(filePath)
  return JSON.parse(str)
}
