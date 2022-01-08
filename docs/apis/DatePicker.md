# DatePicker 时间选择

## showDatePicker(object)

日期选择弹窗。

### object

| 属性     | 类型     | 默认值                       | 必填 | 说明                                                                                                                            |
| -------- | -------- | ---------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| title    | string   |                              | 否   | 弹窗标题                                                                                                                        |
| value    | Date     |                              | 否   | 默认选择值                                                                                                                      |
| mode     | string   |                              | 否   | 选择的模式，可选 'date', 'time', 'datetime' 等，参考 [DatePicker initialMode](../components/DatePicker.md#initialmode-的合法值) |
| minDate  | Date     | 当天对应 10 年前的 Date 实例 | 否   | 最小时间对应的 Date 实例（含）                                                                                                  |
| maxDate  | Date     | 当天最后一秒的 Date 实例     | 否   | 最大时间对应的 Date 实例（含）                                                                                                  |
| filter   | Function |                              | 否   | 选项过滤器，`filter(number: number, type: 'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second') => boolean`             |
| success  | function |                              | 否   | 接口调用成功（在用户做出选择后，如取消，确定）的回调函数                                                                        |
| fail     | function |                              | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出）                                                        |
| complete | function |                              | 否   | 弹窗关闭或调用失败的回调函数                                                                                                    |

### object.success 回调参数

| 属性               | 类型     | 说明                                          |
| ------------------ | -------- | --------------------------------------------- |
| cancel?            | boolean  | 为 true 时，表示取消                          |
| confirm?           | boolean  | 为 true 时，表示点击了确定，此时返回 `detail` |
| detail?.formatted  | string   | "2021-05-01"                                  |
| detail?.value      | Date     | 对应日期的 Date 实例                          |
| detail?.valueArray | number[] | [2021, 5, 1]                                  |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showDatePicker({
  title: 'DatePicker',
  success: ({ confirm, cancel, detail }) => {
    ...
  }
})
```
