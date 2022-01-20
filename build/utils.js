const cp = require('child_process')

function replaceAlias({ search, replace }) {
  const searchRegex = new RegExp(search, 'g')

  return {
    name: 'replaceAlias',
    transform(code, id) {
      return code.replace(searchRegex, replace)
    }
  }
}

function replaceImportToSassImport() {
  return {
    name: 'replaceImportToSassImport',
    renderChunk(code) {
      return code.replace(/import/g, '@import')
    }
  }
}

const runExec = cmd => {
  return new Promise(function (resolve, reject) {
    cp.exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve(stdout)
      }
    })
  })
}

module.exports = {
  replaceAlias,
  replaceImportToSassImport,
  runExec
}
