# TabView/TabViewItem 标签页

## Import

```JavaScript
import { TabView, TabViewItem } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## TabView Props

| 属性                   | 类型    | 默认值 | 必填 | 说明                                            |
| ---------------------- | ------- | ------ | ---- | ----------------------------------------------- |
| initial-vertical       | boolean | false  | 否   | 初始化是否侧边菜单展示方式                      |
| scroll-threshold       | number  | 4      | 否   | 超过 `scrollThreshold` 个 Tab 使用滚动形式      |
| back-upper-when-change | boolean | false  | 否   | 切换面板时，如果是旧面板，是否返回顶部/左侧位置 |

## TabView Events

| 事件     | 描述           | 回调函数参数                                | TypeScript 函数   |
| -------- | -------------- | ------------------------------------------- | ----------------- |
| change   | 切换时触发     | payload: { activeIndex: number } 当前项索引 | TabViewOnChange   |
| animated | 动画结束时触发 | payload: { activeIndex: number } 当前项索引 | TabViewOnAnimated |

## TabView Slots

注：其中只可放置 [TabViewItem](./TabView.md#tabviewitem-props) 组件，否则会导致未定义的行为。

```Vue
<fx-tab-view>
  <fx-tab-view-item name="Tab 1">
    <fx-empty description="Tab 1"/>
  </fx-tab-view-item>
  <fx-tab-view-item name="Tab 2">
    <fx-empty description="Tab 1" />
  </fx-tab-view-item>
</fx-tab-view>
```

## TabViewItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明           |
| ---- | ------ | ------ | ---- | -------------- |
| name | string |        | 是   | 对应的菜单名称 |

## TabViewItem Slots

```Vue
<fx-tab-view-item name="Tab 1">
  <fx-empty description="Tab 1"/>
</fx-tab-view-item>
```
