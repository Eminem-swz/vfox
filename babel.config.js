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
    // '@babel/plugin-proposal-class-properties' // @link: https://blog.csdn.net/qq_40072045/article/details/105537557
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'auto', // 现在不能通过webpack来解析s6 module，需要使用babel来解析，所以要开启
            targets: {
              node: 'current' // 指定环境为当前node版本，减少解析不识别语法的范围
            }
          }
        ]
      ]
    }
  }
}
