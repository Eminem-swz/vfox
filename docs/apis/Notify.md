# Notify 消息提示

注：目前仅支持单例模式。

## showNotify(object)

显示消息提示。

### object

| 属性            | 类型     | 默认值    | 必填 | 说明                                                                                |
| --------------- | -------- | --------- | ---- | ----------------------------------------------------------------------------------- |
| title           | string   |           | 是   | 提示内容                                                                            |
| type            | string   | 'default' | 否   | 提示类型，可选值：'primary' / 'success' / 'warning' / 'danger'                      |
| icon            | string   |           | 否   | 图标，使用 [Icon](../components/Icon.md) 组件，图标优先级高于 `type`，颜色随 `type` |
| duration        | number   | 1500      | 否   | 展示时长(单位 ms)，值为 0 时，`notify` 不会消失                                     |
| backgroundColor | string   |           | 否   | 指定背景颜色，会覆盖 type 的颜色                                                    |
| color           | string   |           | 否   | 指定前景颜色（含字体，图标）                                                        |
| closable        | boolean  | false     | 是   | 是否显示关闭按钮                                                                    |
| success         | function |           | 否   | 接口调用成功的回调函数                                                              |
| fail            | function |           | 否   | 接口调用失败的回调函数（不传入 fail 遇错误直接抛出）                                |
| complete        | function |           | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）                                    |

#### object.type 的合法值

| 值      | 说明 |
| ------- | ---- |
| primary | 提示 |
| success | 成功 |
| warning | 警告 |
| danger  | 危险 |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showNotify({
  title: '提示内容',
  duration: 2000
})
```

## hideNotify([object])

隐藏消息提示框。

### object

| 属性     | 类型     | 默认值 | 必填 | 说明                                             |
| -------- | -------- | ------ | ---- | ------------------------------------------------ |
| success  | function |        | 否   | 接口调用成功的回调函数                           |
| fail     | function |        | 否   | 接口调用失败的回调函数                           |
| complete | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
hideNotify()
```
