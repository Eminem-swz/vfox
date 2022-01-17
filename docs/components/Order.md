# Order 调整排序布局

宫格类排序组件，类似于微信朋友圈上传图片，支持删除功能。

## Import

```
import { Order } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性          | 类型    | 默认值 | 必填 | 说明       |
| ------------- | ------- | ------ | ---- | ---------- |
| v-model:items | Item[]  |        | 是   | 列表数组   |
| column-number | number  | 3      | 否   | 渲染列数   |
| aspect-ratio  | number  | 1      | 否   | 渲染宽高比 |
| deletable     | boolean | false  | 否   | 支持删除   |

PS： 由于该组件是宫格类排序，所以需要预设列数和每项固定宽高。

### items 的结构

```
interface Item {
  id: string | number
  [propName: string]: any
}

const items: Item[] = [
  { id: 1, type: 'primary' },
  { id: 2, type: 'success' },
  { id: 3, type: 'warning' },
  { id: 4, type: 'danger' }
]
```

PS：要求一定要有 `id` 作为唯一键。

## Events

| 事件   | 描述             | 回调函数参数                                      | TypeScript 函数 |
| ------ | ---------------- | ------------------------------------------------- | --------------- |
| delete | 单项被删除时触发 | { item: { id: string \| number }, index: number } | OrderOnDelete   |

## Slots

### 列表项（#default）

```
<fx-order>
 <template #default="{ item, index }">
  {{ index }} : {{ item }}
 </template>
</fx-order>
```
