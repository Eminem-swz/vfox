# Group 分组

将一组同类别的组件（如 [Cell](./Cell.md) ）放在一起，并加入分组标题。

## Import

```
import { Group } from 'vfox'
```

具体的引入方式可以参考[引入组件](../index.md#引入组件)。

## Props

| 属性  | 类型    | 默认值 | 必填 | 说明             |
| ----- | ------- | ------ | ---- | ---------------- |
| title | string  |        | 是   | 分组标题         |
| card  | boolean | false  | 否   | 显示为卡片的形式 |

## Slots

```
<fx-group title="基础用法">
  <fx-cell label="单元格" content="内容"></fx-cell>
  <fx-cell label="单元格" content="内容" description="描述信息"></fx-cell>
</fx-group>
```
