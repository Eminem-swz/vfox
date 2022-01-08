# 引入组件

## 自动引入

利用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件的自动扫码可以自动加载组件代码和样式文件。

1. 先安装插件：

```
npm i unplugin-vue-components -D
```

2. 安装组件 Resolver：

```
npm i vfox-resolver -D
```

3. 配置 config

`vite.config.js`:

```JavaScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VfoxResolver } from 'vfox-resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VfoxResolver()]
    })
  ]
})
```

Or `vue.config.js`

```JavaScript
const Components = require('unplugin-vue-components/webpack')
const { VfoxResolver } = require('vfox-resolver')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VfoxResolver()]
      })
    ]
  }
}
```

4. 现在就可以在模版中引入组件

```HTML
<template>
  <fx-button>提交</fx-button>
</template>
```

## 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```JavaScript
import Button from 'vfox/es/Button'
import 'vfox/es/Button/style'

app.use(Button)
```

## 全组件引入（不推荐）

```JavaScript
import Vfox from 'vfox'
import 'vfox/es/style/index.css'

app.use(Vfox)
```

> 引入所有组件会增大代码包体积，毕竟 99+组件了，除非项目对大小要求不高。

## API 调用

API 调用需要先引入对应的组件，方可调用，引用方式同上。

```JavaScript
import { Toast } from 'vfox'
// import Toast from 'vfox/es/Toast'
// import 'vfox/es/ButToastton/style'

export default {
  mounted() {
    Toast.showToast({
      title: '成功',
      type: 'success',
      duration: 2000
    })
  }
}
```

详情可见 [API](../apis/Toast.md) 。

## TypeScript 支持

在 `tsconfig.json` 中加入获得 `template` 类型提示：

```
{
  "compilerOptions": {
    "types": ["vfox/global"]
  }
}
```
