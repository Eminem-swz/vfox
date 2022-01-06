---
sidebarDepth: 2
---

# 指南

## 介紹

移动端 Vue 3.x 组件库。

### 特性

- 提供 100+ 组件，覆盖移动端各类场景
- 单元测试覆盖
- 支持 Vue 2 和 Vue 3
- 支持按需引入

### 附言

该版本已使用 `Composition API` 和 `Typescript` 重构。

## 安装

### npm

```
npm i -S vfox
```

### yarn

```
yarn add vfox
```

## 引入组件

### 通过 Babel 插件按需引入组件

使用 ant 团队提供的 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```
npm i babel-plugin-import -D
```

在 `babel.config.js` 中配置：

```
module.exports = {
  ...
  plugins: [
    [
      "import",
      {
        libraryName: "vfox",
        libraryDirectory: "es",
        style: true,
        camel2DashComponentName: false
      },
      "vfox"
    ]
  ]
}
```

在业务代码中引入 `Vfox` 组件：

```
import { Button } from 'vfox'

app.use(Button)
```

或者在 `SFC` 下引入组件：

```
import { defineComponent } from 'vue'
import { Button } from 'vfox'

export default defineComponent({
  components: { Button },
  ...
})
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。

### 在 Vite 项目中按需引入组件

对于 Vite 项目，可以使用 `vite-plugin-style-import` 实现按需引入, 原理和 `babel-plugin-import` 类似。

```
npm i vite-plugin-style-import -D
```

在 `vite.config.js` 中配置：

```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vfox",
          esModule: true,
          libraryNameChangeCase: "pascalCase",
          resolveStyle: (name) => `vfox/es/${name}/style`
        }
      ]
    }),
    ...
  ]
})
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。

### 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```
import Button from 'vfox/es/Button'
import 'vfox/es/Button/style'

app.use(Button)
```

### 全组件引入（不推荐）

```
import Vfox from 'vfox'
import 'vfox/es/style/index.css'

app.use(Vfox)
```

> 引入所有组件会增大代码包体积，毕竟 99+组件了，除非整个项目是基于此 UI 库开发。

## API 调用

API 调用需要先引入对应的组件，方可调用，引用方式同上。

```
import { Toast } from 'vfox'

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

详情可见 [API](./apis/Toast.md) 。

## 国际化

### 简介

组件库默认的文案语言是中文，支持多语言切换，目前支持 **中文** 和 **英文**。

### Locale

先引入 `Locale` 模块：

```JavaScript
import { Locale } from 'vfox'
```

如果想要使用英文：

```JavaScript
import enUS from 'vfox/es/Locale/lang/en-US'

Locale.use('en-US', enUS)
```

切换回中文：

```JavaScript
Locale.use('zh-CN')
```

如果想要其中的部分文案进行修改：

```JavaScript
Locale.merge('zh-CN', {
  pickerConfirmText: '完成'
})
```

## 黑暗模式

### 介绍

组件库内置黑暗主题，往 `body` 标签添加属性就可以便捷的切换。

### DarkMode

如果想要切换到黑暗模式：

```JavaScript
document.body.setAttribute('fx-theme', 'dark')
```

如果想要恢复明亮模式：

```JavaScript
document.body.removeAttribute('fx-theme')
```

如果要跟随系统切换：

```JavaScript
function setDark(dark) {
  dark ? document.body.setAttribute('fx-theme', 'dark') : document.body.removeAttribute('fx-theme')
}

const mm =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

if (mm) {
  mm.addEventListener('change', e => {
    setDark(e.matches)
  })

  setDark(mm.matches)
}

```

## 主题定制

见 [色彩-主题定制](./design/color.md#主题定制) 。
