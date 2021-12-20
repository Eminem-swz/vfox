# Rate 评分

注：

- 可以配合 [Form](./Form.md) 和 [FormItem](./Form.md#formitem) 使用。

## Import

```
import { Rate } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## Props

| 属性        | 类型          | 默认值 | 必填 | 说明                             |
| ----------- | ------------- | ------ | ---- | -------------------------------- |
| v-model     | number        |        | 否   |
| name        | string        |        | 否   | [Form](./Form.md) 的标识         |
| count       | number        | 5      | 否   | 有 count 个星星，只支持 > 0 整数 |
| pattern     | string        | ‘star  | 否   | 图标款式，可选 'star' / 'heart'  |
| allow-half  | boolean       | false  | 否   | 是否允许半选                     |
| disabled    | boolean       | false  | 否   | 是否禁用                         |
| readonly    | boolean       | false  | 否   | 是否为只读状态                   |
| color       | string        |        | 否   | 自定义默认态的图标颜色           |
| activeColor | string        |        | 否   | 自定义激活态的图标颜色           |
| size        | number/string |        | 否   | 自定义图标大小，单位 px          |

## Events

| 事件   | 描述                 | 回调函数参数                               |
| ------ | -------------------- | ------------------------------------------ |
| change | 点击星星时触发的事件 | { value }，value 默认情况下是 0-5 之间的值 |
