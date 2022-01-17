# ActionSheet 动作面板

## Import

```
import { ActionSheet } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性            | 类型                | 默认值 | 必填 | 说明                       |
| --------------- | ------------------- | ------ | ---- | -------------------------- |
| v-model:visible | boolean             | false  | 否   | 是否显示                   |
| title           | string              |        | 否   | 标题，不设置则不展示标题栏 |
| options         | ActionSheetOption[] |        | 否   | 选项列表                   |
| mask-closable   | boolean             | true   | 否   | 点击蒙层是否触发关闭操作   |
| show-cancel     | boolean             | false  | 否   | 是否显示取消按钮           |
| cancel-text     | string              | '取消' | 否   | 取消按钮的文本             |

### ActionSheetOption 的结构

| key         | 类型   | 默认值 | 必填 | 说明         |
| ----------- | ------ | ------ | ---- | ------------ |
| name        | string |        | 是   | 展示名称     |
| description | string |        | 否   | 附加描述     |
| disabled    | string | false  | 否   | 是否禁用     |
| highlight   | string | false  | 否   | 是否高亮显示 |

```TypeScript
const options: ActionSheetOption[] = [
  {
    name: '选项1',
    disabled: false,
    description: '选项描述',
    highlight: false
  }
]
```

## Events

| 事件                 | 描述           | 回调函数参数                                                    | 函数 TypeScript           |
| -------------------- | -------------- | --------------------------------------------------------------- | ------------------------- |
| confirm              | 点击选项时触发 | { item: { name: string }: index: number }                       | ActionSheetOnConfirm      |
| visible-state-change | 展示隐藏时触发 | { state: [VisibleState](./ActionSheet.md#visiblestate-值说明) } | PopupOnVisibleStateChange |

### VisibleState 值说明

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |
