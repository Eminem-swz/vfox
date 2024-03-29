# Pagination 分页

## Import

```JavaScript
import { Pagination } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性            | 类型   | 默认值 | 必填 | 说明     |
| --------------- | ------ | ------ | ---- | -------- |
| v-model:current | number | 1      | 否   | 当前页码 |
| total           | number | 1      | 否   | 总页数   |

## Events

| 事件   | 描述               | 回调函数参数                                | TypeScript 函数    |
| ------ | ------------------ | ------------------------------------------- | ------------------ |
| change | 点击翻页按钮时触发 | payload: { current: number, total: number } | PaginationOnChange |

## Slots

### 默认（#default）

```Vue
<fx-pagination>
  <template #default="{ current, total }"> 第 {{ current }} / {{ total }} 页 </template>
</fx-pagination>
```

### 翻页按钮（#prev/#next）

```Vue
<fx-pagination>
  <template #prev> 上一页 </template>
  <template #next> 下一页 </template>
</fx-pagination>
```
