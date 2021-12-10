# Switch 开关选择器

注：

- 可以配合 [Form](./Form.md) 和 [FormItem](./Form.md#formitem) 使用。

## Import

```
import { SwipeCell } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## Props

| 属性     | 类型    | 默认值 | 必填 | 说明                     |
| -------- | ------- | ------ | ---- | ------------------------ |
| name     | string  |        | 否   | [Form](./Form.md) 的标识 |
| disabled | boolean | false  | 否   | 是否禁用                 |
| v-model  | boolean | false  | 否   | 是否开启                 |

## CSS

| 属性               | 默认值  | 说明               |
| ------------------ | ------- | ------------------ |
| --switch-on-color  | #1890ff | 激活背景色         |
| --switch-off-color | #d9d9d9 | 未激活背景色       |
| --switch-size      | 32px    | 选择器大小，高度值 |

## Events

| 事件   | 描述               | 回调函数参数                            |
| ------ | ------------------ | --------------------------------------- |
| change | 点击切换状态时触发 | { value }, value = true(开) / false(关) |
