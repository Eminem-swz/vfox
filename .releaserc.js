module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: ['dist/**/*.{js,css,map}', 'CHANGELOG.md', 'package.json', 'README.md']
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['dist/**/*.{js,css,map}', 'CHANGELOG.md', 'package.json', 'README.md']
      }
    ]
  ]
}
