# IndexView/IndexViewItem 索引栏

## Import

```
import { IndexView, IndexViewItem } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## IndexView Props

| 属性              | 类型          | 默认值 | 必填 | 说明                        |
| ----------------- | ------------- | ------ | ---- | --------------------------- |
| sticky-offset-top | number/string | 0      | 否   | 数值默认是 px，也支持 vw/vh |

## IndexView Events

| 事件   | 描述       | 回调函数参数               |
| ------ | ---------- | -------------------------- |
| change | 切换时触发 | { activeIndex } 当前项索引 |

## Methods

| 方法名         | 说明                                                    | 参数                         |
| -------------- | ------------------------------------------------------- | ---------------------------- |
| scrollToIndex  | 将位于指定位置的 `IndexViewItem` 滚动到可视区的指定位置 | ({ index: number }) => void  |
| scrollToOffset | 滚动列表到指定的偏移，单位 px                           | ({ offset: number }) => void |

## IndexView Slots

注：其中只可放置 [IndexViewItem](./IndexView.md#indexviewitem-索引子项) 组件，否则会导致未定义的行为。

```
<fx-index-view>
  <fx-index-view-item name="A">
    <fx-cell label="单元格"></fx-cell>
    <fx-cell label="单元格"></fx-cell>
    <fx-cell label="单元格"></fx-cell>
  </fx-index-view-item>
  ...
</fx-index-view>
```

## IndexViewItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明                       |
| ---- | ------ | ------ | ---- | -------------------------- |
| name | string |        | 是   | 分组名，也应用于吸附和菜单 |

## IndexViewItem Slots

```
<fx-index-view-item name="A">
  <fx-cell label="单元格"></fx-cell>
  <fx-cell label="单元格"></fx-cell>
  <fx-cell label="单元格"></fx-cell>
  ...
</fx-index-view-item>
```
