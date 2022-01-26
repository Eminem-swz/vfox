# PopDialog 气泡对话框

## Import

```JavaScript
import { PopDialog } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性            | 类型                  | 默认值   | 必填 | 说明                                                                              |
| --------------- | --------------------- | -------- | ---- | --------------------------------------------------------------------------------- |
| v-model:visible | boolean               | false    | 否   | 是否显示                                                                          |
| selector        | string \| HTMLElement |          | 是   | 从哪个元素展开，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| placement       | PlacementType         | 'bottom' | 否   | 展开位置，可选 'bottom', 'top', 'left', 'right'                                   |
| show-mask       | boolean               | true     | 否   | 是否展示蒙层，如果设置不展示，气泡则是跟随 `selector` 对应的元素                  |
| content         | string                |          | 是   | 文本内容                                                                          |
| show-cancel     | boolean               | true     | 否   | 是否显示取消按钮                                                                  |
| cancel-text     | string                | '取消'   | 否   | 取消按钮的文本                                                                    |
| confirm-text    | string                | '确定'   | 否   | 确定按钮的文本                                                                    |

## Events

| 事件                 | 描述               | 回调函数参数                                                           | TypeScript 函数           |
| -------------------- | ------------------ | ---------------------------------------------------------------------- | ------------------------- |
| cancel               | 取消按钮点击时触发 | payload: { source: string }                                            | PopupOnCancel             |
| confirm              | 确认按钮点击时触发 |                                                                        |
| visible-state-change | 展示隐藏时触发     | payload: { state: [VisibleState](./PopDialog.md#visiblestate-值说明) } | PopupOnVisibleStateChange |

### VisibleState 值说明

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |
