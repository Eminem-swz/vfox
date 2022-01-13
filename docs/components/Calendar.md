# Calendar/CalendarPopup/CalendarView 日历

## Import

```
import { Calendar, CalendarPopup, CalendarView } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## 公共 Props

| 属性           | 类型                                                                                                     | 默认值             | 必填 | 说明                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------------------ | ---- | ---------------------------------------------------- |
| v-model        | [SelectorValue](./Calendar.md#selectorvalue-的类型) \| [SelectorValue](./Calendar.md#selectorvalue-的类型)[] | []                 | 否   | 选中值                                               |
| min-date       | Date                                                                                                     | 当前日期           | 否   | 可选最小值                                           |
| max-date       | Date                                                                                                     | 当前日期的六个月后 | 否   | 可选最大值                                           |
| initial-mode   | [CalendarMode](./Calendar.md#calendarmode)                                                               | 'single'           | 否   | 模式                                                 |
| allow-same-day | boolean                                                                                                  | false              | 否   | `range` 模式生效，设置开始结束时间是否可以同一天     |
| max-range      | number                                                                                                   | Infinity           | 否   | `range` 模式生效，选择区间的最长天数                 |
| day-handler    | Function                                                                                                 |                    | 否   | 日历每个日期处理函数                                 |
| formatter      | [CalendarValueFormatter](./Calendar.md#calendarvalueformatter)                                           |                    | 否   | 和 `parser` 成对设置，对于 v-model 的值进行转化      |
| parser         | [CalendarValueParser](./Calendar.md#calendarvalueparser)                                                 |                    | 否   | 和 `formatter` 成对设置，对于 v-model 的值进行反转化 |

### SelectorValue 的类型

允许的类型为：`string | number | Date`

在不自定义 `formatter/parser` 的情况下，v-model 只有 `Date[]` 这种情况。

### SelectorModelValue 的类型

SelectorModelValue 的类型为： `SelectorValue | SelectorValue[]`

### CalendarDetail 的结构

| 值         | 类型                                                        | 说明                                                                                      |
| ---------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| value      | [SelectorModelValue](./Calendar.md#selectormodelvalue-的类型) | 选择的值，`range` 模式下有开始 Date 和结束 Date 两个实例；`formatter/parser` 的优先级更高 |
| label      | string                                                      | 选中值对应的描述文本                                                                      |
| valueArray | number[][]                                                  | 如：[[2021, 5, 1], [2021, 5, 30]]                                                         |
| rangeCount | number                                                      | 选择区间持续的天数（含首尾）                                                              |

### CalendarMode

```
'single' | 'range'
```

`single` 表示选择一天，`range` 选择一个日期区间。

### dayHandler 函数

```
dayHandler(Object: Day) => Day
```

日历中的每个日期都对应一个 Day 对象，通过 `day-handler` 属性可以修改 Day 对象的内容后返回。

| 值              | 类型    | 说明                                                                                                                                                                                                                                         |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date            | Date    | 日期对应的 Date 对象，该字段修改无效                                                                                                                                                                                                         |
| state           | string  | 日期当前的状态，有：`selected` 选中，`startSelected` 开始（initialMode="range"下），`endSelected` 结束（initialMode="range"下），`disabled` 禁用。在空字符串的情况下，可以设置为 `disabled` 强制设置该日期为禁用（一般在票卖完的情况下设置） |
| text            | string  | 日期文本，不建议修改                                                                                                                                                                                                                         |
| topText         | string  | 日期上方展示文本，一般可修改为“节日名称”、“今天”、“明天”、“开始”、“结束”等                                                                                                                                                                   |
| topHighlight    | boolean | 日期上方展示文本是否高亮                                                                                                                                                                                                                     |
| bottomText      | string  | 日期下方展示文本，一般可修改为“机票价格”、“酒店价格”、“特价”、“热门”等                                                                                                                                                                       |
| bottomHighlight | boolean | 日期下方展示文本是否高亮                                                                                                                                                                                                                     |
| dateString      | string  | 日期对应的格式化时间（`YYYY-MM-DD`），如：2020-11-11，该字段不影响展示                                                                                                                                                                       |

### formatter/parser

高阶配置，`formatter` 和 `parser` 需要一同设置，对 v-model 的值转为自定义值。

#### CalendarValueFormatter

```
interface CalendarValueFormatter {
  (valueArray: Date[], mode: CalendarMode):
    | {
        value: SelectorValue | SelectorValue[]
        label: string
      }
    | (SelectorValue | SelectorValue[])
}
```

将 v-model 的原始值转为需要的自定义值，值需要满足 `SelectorValue | SelectorValue[]` 的类型约束，可以返回 { value, label } 对两个数据进行修改，或者单独返回 value。

#### CalendarValueParser

```
interface CalendarValueParser {
  (value: unknown, mode: CalendarMode): Date[]
}
```

跟 `CalendarValueFormatter` 相反，将自定义 v-model 的值转为组件认识的原始数组。

## Calendar

日历选择器。

注：

- 支持表单，具体可参考 [Form](./Form.md)。

## Calendar Props

| 属性         | 类型    | 默认值 | 必填 | 说明                                 |
| ------------ | ------- | ------ | ---- | ------------------------------------ |
| name         | string  |        | 否   | 标识                                 |
| placeholder  | string  |        | 否   | 没有选中值的提示，也会用在弹窗标题上 |
| disabled     | boolean | false  | 否   | 是否禁用                             |
| show-confirm | boolean | false  | 否   | 弹窗是否展示确定按钮                 |
| show-close   | boolean | false  | 否   | 弹窗是否展示关闭按钮                 |

## Calendar Events

| 事件   | 描述                   | 回调函数参数                                                | 函数 TypeScript  |
| ------ | ---------------------- | ----------------------------------------------------------- | ---------------- |
| change | 选择后值发生改变时触发 | [SelectorModelValue](./Calendar.md#selectormodelvalue-的类型) | SelectorOnChange |

## CalendarPopup

日历弹窗。

## CalendarPopup Props

| 属性            | 类型    | 默认值 | 必填 | 说明                   |
| --------------- | ------- | ------ | ---- | ---------------------- |
| v-model:visible | boolean | false  | 否   | 是否显示               |
| title           | string  |        | 否   | 弹窗标题               |
| show-confirm    | boolean | false  | 否   | 选择时是否展示确定按钮 |
| show-close      | boolean | false  | 否   | 是否展示关闭按钮       |

## CalendarPopup Events

| 事件                 | 描述                                              | 回调函数参数                                                 | 函数 TypeScript           |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------- |
| confirm              | 选择完毕后触发 / `showConfirm` 点击确定按钮后触发 | [CalendarDetail](./Calendar.md#calendardetail-的结构)        | CalendarOnConfirm         |
| visible-state-change | 展示隐藏时触发                                    | { state: [VisibleState](./Calendar.md#visiblestate-值说明) } | PopupOnVisibleStateChange |

### VisibleState 值说明

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |

## CalendarView

日历选择，平铺形式。

## CalendarView Events

| 事件   | 描述       | 回调函数参数                                          | 函数 TypeScript  |
| ------ | ---------- | ----------------------------------------------------- | ---------------- |
| select | 选择后触发 | [CalendarDetail](./Calendar.md#calendardetail-的结构) | CalendarOnSelect |
