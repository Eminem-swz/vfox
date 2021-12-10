# Cascader 级联选择器

注：

- 可以配合 [Form](./Form.md) 和 [FormItem](./Form.md#formitem) 使用。

## Import

```
import { Cascader } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## Props

| 属性              | 类型                            | 默认值                                                   | 必填 | 说明                                              |
| ----------------- | ------------------------------- | -------------------------------------------------------- | ---- | ------------------------------------------------- |
| name              | string                          |                                                          | 否   | [Form](./Form.md) 的标识                          |
| placeholder       | string                          |                                                          | 否   | 没有选中值的提示，也会用在弹窗标题上              |
| disabled          | boolean                         | false                                                    | 否   | 是否禁用                                          |
| options           | array                           | []                                                       | 否   | 数据集                                            |
| v-modal           | string/number/string[]/number[] | []                                                       | 否   | 选中值                                            |
| format-string     | boolean                         | false                                                    | 否   | value 双向绑定值是为字符串                        |
| initial-separator | string                          | '/'                                                      | 否   | 分隔符                                            |
| field-names       | object                          | { label: 'label', value: 'value', children: 'children' } | 否   | 自定义 options 中 label value children 的字段 key |

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

### modelValue 的结构

```
[ 'xiyiji', 'guntong' ]
```

当 formatString 为 true 时，根据分割线 `/` 返回：

```
xiyiji/guntong
```

## Events

| 事件                 | 描述                        | 回调函数参数                                                 |
| -------------------- | --------------------------- | ------------------------------------------------------------ |
| change               | 选择后 value 发生改变时触发 | [DetailObject](./Cascader.md#detailobject-的结构)            |
| visible-state-change | 展示隐藏时触发              | { state: [VisibleState](./Cascader.md#visiblestate-值说明) } |

### VisibleState 值说明

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |

### DetailObject 的结构

| 值          | 类型              | 说明                 |
| ----------- | ----------------- | -------------------- |
| value       | number[]/string[] | ["zaolei", "lunzao"] |
| valueString | string            | "zaolei/lunzao"      |
| label       | string[]          | ["藻类", "轮藻"]     |
| labelString | string            | "藻类/轮藻"          |
