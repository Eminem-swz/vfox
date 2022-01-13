# Cascader 级联选择器

注：

- 支持表单，具体可参考 [Form](./Form.md)。

## Import

```
import { Cascader } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性        | 类型                                                                                                     | 默认值                                                   | 必填 | 说明                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---- | ---------------------------------------------------- |
| name        | string                                                                                                   |                                                          | 否   | 标识                                                 |
| placeholder | string                                                                                                   |                                                          | 否   | 没有选中值的提示，也会用在弹窗标题上                 |
| disabled    | boolean                                                                                                  | false                                                    | 否   | 是否禁用                                             |
| options     | [Options](./Cascader.md#options-的结构)                                                                  | []                                                       | 否   | 数据集                                               |
| v-model     | [SelectorValue](./Cascader.md#selectorvalue-的类型) \| [SelectorValue](./Cascader.md#selectorvalue-的类型)[] | []                                                       | 否   | 选中值                                               |
| field-names | object                                                                                                   | { label: 'label', value: 'value', children: 'children' } | 否   | 自定义 options 中 label value children 的字段 key    |
| formatter   | [SelectorValueFormatter](./Cascader.md#selectorvalueformatter)                                             |                                                          | 否   | 和 `parser` 成对设置，对于 v-model 的值进行转化      |
| parser      | [SelectorValueParser](./Cascader.md#selectorvalueparser)                                                   |                                                          | 否   | 和 `formatter` 成对设置，对于 v-model 的值进行反转化 |

### SelectorValue 的类型

允许的类型为：`string | number | Date`

在不自定义 `formatter/parser` 的情况下，v-model 只有 `(string | number)[]` 这种情况。

### SelectorModelValue 的类型

SelectorModelValue 的类型为： `SelectorValue | SelectorValue[]`

### options 的结构

```
[
  {
    label: '空调',
    value: 'kongtiao',
    children: [
      {
        label: '家用空调',
        value: 'jiayongkongtiao',
        children: [
          {
            label: '挂式空调',
            value: 'guashikongtiao'
          },
          {
            label: '柜式空调',
            value: 'guishikongtiao'
          }
        ]
      },
      {
        label: '厨房空调',
        value: 'chufangkongtiao'
      }
    ]
  },
  {
    label: '冰箱',
    value: 'bingxiang',
    children: [
      {
        label: '双门',
        value: 'shuangmen'
      },
      {
        label: '三门',
        value: 'sanmen'
      },
      {
        label: '对开门',
        value: 'duikaimen'
      },
      {
        label: '多门',
        value: 'duomen'
      }
    ]
  },
  {
    label: '洗衣机',
    value: 'xiyiji',
    children: [
      {
        label: '波轮',
        value: 'bolun'
      },
      {
        label: '滚筒',
        value: 'guntong'
      },
      {
        label: '洗烘一体',
        value: 'xihongyiti'
      }
    ]
  }
]
```

### formatter/parser

高阶配置，`formatter` 和 `parser` 需要一同设置，对 v-model 的值转为自定义值。

#### SelectorValueFormatter

```
interface SelectorValueFormatter {
  (valueArray: SelectorValue[], labelArray: string[]):
    | {
        value: SelectorValue | SelectorValue[]
        label: string
      }
    | (SelectorValue | SelectorValue[])
}
```

将 v-model 的原始值转为需要的自定义值，值需要满足 `SelectorValue | SelectorValue[]` 的类型约束，可以返回 { value, label } 对两个数据进行修改，或者单独返回 value。

#### SelectorValueParser

```
interface SelectorValueParser {
  (value: unknown): SelectorValue[]
}
```

跟 `SelectorValueFormatter` 相反，将自定义 v-model 的值转为组件认识的原始数组。

## Events

| 事件   | 描述                        | 回调函数参数                                                | 函数 TypeScript  |
| ------ | --------------------------- | ----------------------------------------------------------- | ---------------- |
| change | 选择后 value 发生改变时触发 | [SelectorModelValue](./Cascader.md#selectormodelvalue-的类型) | SelectorOnChange |
