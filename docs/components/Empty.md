# Empty 空状态

## Import

```JavaScript
import { Empty } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性        | 类型      | 默认值    | 必填 | 说明                                                                            |
| ----------- | --------- | --------- | ---- | ------------------------------------------------------------------------------- |
| description | string    |           | 否   | 描述文字                                                                        |
| type        | EmptyType | 'default' | 否   | 图片类型，可选 'default', 'error', 'network', 'search', 'permission', 'service' |

## Slots

### 底部（#default）

```Vue
<fx-empty description="网络错误" type="network">
  <fx-button>刷新试试</fx-button>
</fx-empty>
```

### 图片区域（#image）

```Vue
<fx-empty description="描述文字">
  <template #image>
    <fx-image src="xxx.jpg" />
  </template>
</fx-empty>
```

注：设置了该 `slot` 则不展示内置图片
