# Radio/RadioGroup 单选项

## Import

```JavaScript
import { Radio, RadioGroup } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Radio Props

| 属性            | 类型             | 默认值 | 必填 | 说明                                                                                         |
| --------------- | ---------------- | ------ | ---- | -------------------------------------------------------------------------------------------- |
| value           | string \| number | ''     | 否   | 该项值，[RadioGroup](./Radio.md#radiogroup-单项选择器) 的 change 事件会携带 `radio` 的 value |
| disabled        | boolean          | false  | 否   | 是否禁用                                                                                     |
| v-model:checked | boolean          | false  | 否   | 当前是否选中，可用来设置默认选中                                                             |
| active-color    | string           |        | 否   | 自定义激活态的图标颜色                                                                       |

## Radio Events

| 事件名称 | 描述               | 回调函数参数     |
| -------- | ------------------ | ---------------- |
| change   | 勾选发生改变时触发 | checked: boolean |

## Radio Slots

```Vue
<fx-radio>男</fx-radio>
<fx-radio>女</fx-radio>
```

## RadioGroup

注：

- 内部由多个 [Radio](./Radio.md#Radio-单选项) 组成。
- 支持表单，具体可参考 [Form](./Form.md)。

## RadioGroup Props

| 属性         | 类型              | 默认值 | 必填 | 说明                                        |
| ------------ | ----------------- | ------ | ---- | ------------------------------------------- |
| name         | string            |        | 否   | 标识                                        |
| inline       | boolean           | false  | 否   | 是否使用内联布局，默认纵向布局              |
| v-model      | string \| number  | ''     | 否   | 当前选择子项的 value 值                     |
| active-color | string            |        | 否   | 自定义子项激活态的图标颜色                  |
| options      | RadioOptionItem[] |        | 否   | 子项配置，优先级低于 slot 放入 `Radio` 组件 |

### RadioOptionItem

| key   | 类型             | 默认值 | 必填 | 说明                               |
| ----- | ---------------- | ------ | ---- | ---------------------------------- |
| value | string \| number |        | 是   | 值， 同 `Radio` 组件 value         |
| label | string           |        | 是   | 描述，同 `Radio` 组件 slot default |

## RadioGroup Events

| 事件   | 描述                 | 回调函数参数            |
| ------ | -------------------- | ----------------------- |
| change | 选中项发生改变时触发 | value: string \| number |

## RadioGroup Slots

### 默认（#default）

```Vue
<fx-radio-group>
  <fx-radio>男</fx-radio>
  <fx-radio>女</fx-radio>
  ...
</fx-radio-group>
```
