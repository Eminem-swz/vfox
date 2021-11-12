module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3' // 新增
      }
    ]
  ],
  plugins: [
    // [
    //   '@babel/plugin-transform-runtime',
    //   {
    //     useESModules: true, // 使用 esm 形式的 helper
    //     corejs: 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
    //   }
    // ],
    // '@babel/plugin-external-helpers',
    '@babel/plugin-proposal-class-properties' // @link: https://blog.csdn.net/qq_40072045/article/details/105537557
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
    }
  }
}
