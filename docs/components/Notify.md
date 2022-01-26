# Notify 消息提示

## Import

```JavaScript
import { Notify } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性            | 类型      | 默认值    | 必填 | 说明                                                                               |
| --------------- | --------- | --------- | ---- | ---------------------------------------------------------------------------------- |
| v-model:visible | boolean   | false     | 是   | 是否显示                                                                           |
| closable        | boolean   | false     | 是   | 是否显示关闭按钮                                                                   |
| icon            | string    |           | 否   | 图标，使用 [Icon](./Icon.md) 组件                                                  |
| type            | StateType | 'default' | 否   | 提示类型                                                                           |
| duration        | number    | 0         | 否   | visible=true 展示后，duration 毫秒后消失，0 为不消失，在 `v-model:visible` 下生效  |
| color           | string    |           | 否   | 自定义色彩，支持 hex rgb hsl 等写法，详细效果[查看](../design/color.md#自定义色彩) |

### StateType 的合法值

| 值      | 说明             |
| ------- | ---------------- |
| default | 警告，同 warning |
| primary | 提示             |
| success | 成功             |
| warning | 警告             |
| danger  | 强烈警告         |

## Events

| 事件                 | 描述               | 回调函数参数                                                        | TypeScript 函数           |
| -------------------- | ------------------ | ------------------------------------------------------------------- | ------------------------- |
| close-click          | 关闭按钮点击时触发 |                                                                     |                           |
| visible-state-change | 展示隐藏时触发     | payload: { state: [VisibleState](./Notify.md#visiblestate-值说明) } | PopupOnVisibleStateChange |

### VisibleState 值说明

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |
