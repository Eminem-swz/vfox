function replaceAlias({ search, replace }) {
  const searchRegex = new RegExp(search, 'g')

  return {
    name: 'replaceAlias',
    transform(code, id) {
      return code.replace(searchRegex, replace)
    }
  }
}

module.exports = {
  replaceAlias
}
