# NavBar 导航栏

## Import

```
import { NavBar } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## Props

| 属性          | 类型    | 默认值 | 必填 | 说明               |
| ------------- | ------- | ------ | ---- | ------------------ |
| title         | string  | ''     | 否   | 标题               |
| show-back     | boolean | false  | 否   | 是否展示返回按钮   |
| show-home     | boolean | false  | 否   | 是否展示首页按钮   |
| right-buttons | array   | []     |      | 右侧按钮列表       |
| icon-only     | boolean | true   | 否   | 是否展示纯图标按钮 |

### right-buttons 的结构

```
[
  { icon: 'MenuOutlined', text: '菜单' }
]
```

## Events

| 事件               | 描述                                 | 回调函数参数        |
| ------------------ | ------------------------------------ | ------------------- |
| back-click         | 返回按钮点击时出发                   |                     |
| home-click         | 到首页按钮点击时触发                 |                     |
| title-click        | 标题双击时触发，可配合做双击返回顶部 |                     |
| click              | 回到顶部按钮点击时触发               |                     |
| right-button-click | 右侧按钮点击时触发                   | {index, text, icon} |

### right-button-click 的回调参数

| 参数  | 类型   | 描述                                        |
| ----- | ------ | ------------------------------------------- |
| text  | string | 点击按钮的文本                              |
| icon  | string | 点击按钮的图标，使用 [Icon](./Icon.md) 组件 |
| index | number | 点击按钮的索引值                            |

## Slots

### 左侧区域自定义（#left）

```
<fx-nav-bar
  title="标题"
  :right-buttons="[{ icon: 'MenuOutlined', text: '菜单' }]"
>
  <template #left>Left Slot</template>
</fx-nav-bar>
```

### 右侧区域自定义（#right）

```
<fx-nav-bar title="标题" :show-back="true" :show-home="true">
  <template #right>Right Slot</template>
</fx-nav-bar>
```
