# Avatar/AvatarGroup 头像

## Import

```JavaScript
import { Avatar, AvatarGroup } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Avatar Props

| 属性   | 类型        | 默认值   | 必填 | 说明                                                                               |
| ------ | ----------- | -------- | ---- | ---------------------------------------------------------------------------------- |
| src    | string      |          | 否   | 图片连接，显示自定义图片                                                           |
| size   | AvatarSize  | 'middle' | 否   | 头像尺寸，处除了预设值，还支持传入 number                                          |
| shape  | AvatarShape | 'circle' | 否   | 头像形状                                                                           |
| badge  | BadgeOption |          | 否   | 徽标，使用 [Badge](./Badge.md) 组件                                                |
| gender | string      |          | 否   | 显示男女角标，优先级高于 badge                                                     |
| color  | string      |          | 否   | 自定义色彩，支持 hex rgb hsl 等写法，详细效果[查看](../design/color.md#自定义色彩) |

### AvatarSize 的合法值

| 值     | 说明                                            |
| ------ | ----------------------------------------------- |
| large  | 大尺寸，宽高 64px，文字 32px，图标 43px         |
| middle | 默认值，中尺寸，宽高 48px，文字 24px，图标 32px |
| large  | 小尺寸，宽高 36px，文字 18px，图标 21px         |

### AvatarShape 的合法值

| 值     | 说明         |
| ------ | ------------ |
| circle | 圆形头像     |
| square | 圆角方形头像 |

### BadgeOption

```TypeScript
type BadgeOption = number | string | Partial<{
  color: string
  content: string | number
  offset: number[]
  animated: boolean
  dot: boolean
  maxCount: number
  showZero: boolean
}>
```

参数主要是基于 [Badge](./Badge.md) 组件的 props，如果传入是 `number` 或者 `string` 则设置直接设置 content 属性。

## Avatar Slots

### 默认（#default）

```Vue
<fx-avatar>曹</fx-avatar>
```

## AvatarGroup Props

| 属性        | 类型       | 默认值   | 必填 | 说明                                                                                           |
| ----------- | ---------- | -------- | ---- | ---------------------------------------------------------------------------------------------- |
| size        | AvatarSize | 'middle' | 否   | 组内头像尺寸，处除了预设值，还支持传入 number                                                  |
| total-count | number     |          | 否   | 尾部显示头像数，如果数值过高，会对数值简化处理，如 1.1w                                        |
| count-color | string     |          | 否   | 头像数模块的自定义色彩，支持 hex rgb hsl 等写法，详细效果[查看](../design/color.md#自定义色彩) |

## AvatarGroup Slots

### 默认（#default）

注：其中只可放置 [Avatar](./Collapse.md#avatar-头像) 组件，否则会导致未定义的行为。

```Vue
<fx-avatar-group>
  <fx-avatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
  <fx-avatar src="https://cdn.fox2.cn/vfox/avatar/6.png" />
  <fx-avatar src="https://cdn.fox2.cn/vfox/avatar/7.png" />
</fx-avatar-group>
```
