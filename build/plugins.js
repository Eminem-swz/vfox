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

module.exports = {
  replaceAlias,
  replaceImportToSassImport
}
