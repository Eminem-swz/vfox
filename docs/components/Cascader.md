# Cascader 级联选择器

注：

- 支持表单，具体可参考 [Form](./Form.md)。

## Import

```JavaScript
import { Cascader } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性        | 类型                                                                                                         | 默认值                                                   | 必填 | 说明                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ---- | ---------------------------------------------------- |
| name        | string                                                                                                       |                                                          | 否   | 标识                                                 |
| placeholder | string                                                                                                       |                                                          | 否   | 没有选中值的提示                                     |
| disabled    | boolean                                                                                                      | false                                                    | 否   | 是否禁用                                             |
| options     | [Options](./Cascader.md#options-的结构)                                                                      | []                                                       | 否   | 数据集                                               |
| v-model     | [SelectorValue](./Cascader.md#selectorvalue-的类型) \| [SelectorValue](./Cascader.md#selectorvalue-的类型)[] | []                                                       | 否   | 选中值                                               |
| field-names | [CascaderFieldNames](./Cascader.md#cascaderfieldnames)                                                       | { label: 'label', value: 'value', children: 'children' } | 否   | 自定义 options 中 label value children 的字段 key    |
| formatter   | [SelectorValueFormatter](./Cascader.md#selectorvalueformatter)                                               |                                                          | 否   | 和 `parser` 成对设置，对于 v-model 的值进行转化      |
| parser      | [SelectorValueParser](./Cascader.md#selectorvalueparser)                                                     |                                                          | 否   | 和 `formatter` 成对设置，对于 v-model 的值进行反转化 |

### SelectorValue 的类型

允许的类型为：`string | number | Date`

在不自定义 `formatter/parser` 的情况下，v-model 只有 `(string | number)[]` 这种情况。

### SelectorModelValue 的类型

SelectorModelValue 的类型为： `SelectorValue | SelectorValue[]`

### CascaderFieldNames

```TypeScript
interface CascaderFieldNames {
  label?: string
  value?: string
  children?: string
}
```

### Options 的结构

```JavaScript
const options = [
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

```TypeScript
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

```TypeScript
interface SelectorValueParser {
  (value: unknown): SelectorValue[]
}
```

跟 `SelectorValueFormatter` 相反，将自定义 v-model 的值转为组件认识的原始数组。

## Events

| 事件   | 描述                        | 回调函数参数                                                           | 函数 TypeScript  |
| ------ | --------------------------- | ---------------------------------------------------------------------- | ---------------- |
| change | 选择后 value 发生改变时触发 | payload: [SelectorModelValue](./Cascader.md#selectormodelvalue-的类型) | SelectorOnChange |

## showCascader(object)

显示级联选择弹窗。

### object

| 属性       | 类型                                                                                                         | 默认值                                                   | 必填 | 说明                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ---- | ------------------------------------------------------------------------ |
| options    | [Options](./Cascader.md#options-的结构)                                                                      | []                                                       | 否   | 数据集                                                                   |
| value      | [SelectorValue](./Cascader.md#selectorvalue-的类型) \| [SelectorValue](./Cascader.md#selectorvalue-的类型)[] | []                                                       | 否   | 选中值                                                                   |
| fieldNames | [CascaderFieldNames](./Cascader.md#cascaderfieldnames)                                                       | { label: 'label', value: 'value', children: 'children' } | 否   | 自定义 options 中 label value children 的字段 key                        |
| success    | (payload: SuccessPayload) => void                                                                            |                                                          | 否   | 接口调用成功（在用户做出选择后，如取消，选择选项）的回调函数             |
| fail       | (e: Error) => void                                                                                           |                                                          | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出） |
| complete   | () => void                                                                                                   |                                                          | 否   | 弹窗关闭或调用失败的回调函数                                             |

#### SuccessPayload

| 属性          | 类型                 | 说明                                          |
| ------------- | -------------------- | --------------------------------------------- |
| cancel?       | boolean              | 为 true 时，表示取消                          |
| confirm?      | boolean              | 为 true 时，表示点击了确定，此时返回 `detail` |
| detail?.value | (number \| string)[] | ["zaolei", "lunzao"]                          |
| detail?.label | string               | "藻类/轮藻"                                   |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showCascader({
  title: '植物',
  options: cascadeOptions,
  success: ({ confirm, cancel, detail }) => {
    ...
  }
})
```
