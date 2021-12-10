# Radio/RadioGroup 单选项

## Import

```
import { Radio, RadioGroup } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## Radio Props

| 属性            | 类型          | 默认值 | 必填 | 说明                                                                                          |
| --------------- | ------------- | ------ | ---- | --------------------------------------------------------------------------------------------- |
| value           | string/number | ''     | 否   | 该项值，[RadioGroup](./Radio.md#radiogroup-单项选择器) 的 change 事件会携带 `radio` 的 value |
| disabled        | boolean       | false  | 否   | 是否禁用                                                                                      |
| v-model:checked | boolean       | false  | 否   | 当前是否选中，可用来设置默认选中                                                              |

## Radio CSS

| 属性                 | 默认值  | 说明       |
| -------------------- | ------- | ---------- |
| --radio-color        | #d9d9d9 | 图标色     |
| --radio-active-color | #1890ff | 图标激活色 |
| --radio-font-color   | #262626 | 文本色     |

## Radio Events

| 事件名称 | 描述               | 回调函数参数         |
| -------- | ------------------ | -------------------- |
| change   | 勾选发生改变时触发 | { checked: boolean } |

## Radio Slots

```
<fx-radio>男</fx-radio>
<fx-radio>女</fx-radio>
```

## RadioGroup

注：

- 内部由多个 [Radio](./Radio.md#Radio-单选项) 组成。
- 可以配合 [Form](./Form.md) 和 [FormItem](./Form.md#formitem) 使用。

## RadioGroup Props

| 属性    | 类型          | 默认值 | 必填 | 说明                           |
| ------- | ------------- | ------ | ---- | ------------------------------ |
| name    | string        |        | 否   | [Form](./Form.md) 的标识       |
| inline  | boolean       | false  | 否   | 是否使用内联布局，默认纵向布局 |
| v-model | string/number | ''     | 否   | 当前选择子项的 value 值        |

## RadioGroup Events

| 事件   | 描述                 | 回调函数参数 |
| ------ | -------------------- | ------------ |
| change | 选中项发生改变时触发 | { value }    |

## RadioGroup Slots

### 默认（#default）

```
<fx-radio-group>
  <fx-radio>男</fx-radio>
  <fx-radio>女</fx-radio>
  ...
</fx-radio-group>
```
