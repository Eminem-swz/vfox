module.exports = {
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
