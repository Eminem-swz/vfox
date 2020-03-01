# GodVueComponents

Vue 组件集合，提供一系列跟小程序组件很相似的组件集。

## Install

### CDN

```
<link rel="stylesheet" href="path/to/dist/index.css"/>
<script type="text/javascript" src="path/to/vue.min.js"></script>
<script type="text/javascript" src="path/to/dist/index.js"></script>
```

### Mount

```
npm i @godxiaoji/vue-components -S
```

#### 全局注册

```
import Vue from 'vue'
import GodVueComponents from '@godxiaoji/vue-components'

// require styles
import '@godxiaoji/vue-components/dist/index.css'

Vue.use(GodVueComponents, {
  prefix: 'god' // 组件前缀，默认god
})

```

#### 引入单个组件

```
import Toast from '@godxiaoji/vue-components/src/components/Toast/Toast.vue'

export default {
  components: {
    Toast
  }
}
```

#### 引入单个接口

```
import { showToast } from '@godxiaoji/vue-components/src/apis/Toast'

showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
})
```

其中接口`createIntersectionObserver`，`createSelectorQuery`单独使用需要传入组件本身

```
const query = createSelectorQuery(this)
const io = createIntersectionObserver(this, options)
```

## Documents

[Documents](./doc/README.md)

## Author

[Travis](https://github.com/godxiaoji)
