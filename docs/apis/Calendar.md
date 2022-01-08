# Calendar 日历选择

## showCalendar(object)

日历选择弹窗。

### object

| 属性         | 类型        | 默认值             | 必填 | 说明                                                                                        |
| ------------ | ----------- | ------------------ | ---- | ------------------------------------------------------------------------------------------- |
| mode         | string      | 'single'           | 否   | 模式：`single` 表示选择一天，`range` 选择一个日期区间                                       |
| title        | string      |                    | 否   | 弹窗标题                                                                                    |
| value        | Date/Date[] | []                 | 否   | 默认选择值，`range` 模式下需要提供两个                                                      |
| minDate      | Date        | 当前日期           | 否   | 可选最小值                                                                                  |
| maxDate      | Date        | 当前日期的六个月后 | 否   | 可选最大值                                                                                  |
| allowSameDay | boolean     | false              | 否   | `range` 模式生效，设置开始结束时间是否可以同一天                                            |
| maxRange     | number      | Infinity           | 否   | `range` 模式生效，选择区间的最长天数                                                        |
| dayHandler   | Function    |                    | 否   | 日历每个日期处理函数，参考 [Calendar dayHandler](../components/Calendar.md#dayhandler-函数) |
| success      | function    |                    | 否   | 接口调用成功（在用户做出选择后，如取消，确定）的回调函数                                    |
| fail         | function    |                    | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出）                    |
| complete     | function    |                    | 否   | 弹窗关闭或调用失败的回调函数                                                                |

### object.success 回调参数

| 属性               | 类型       | 说明                                             |
| ------------------ | ---------- | ------------------------------------------------ |
| cancel?            | boolean    | 为 true 时，表示取消                             |
| confirm?           | boolean    | 为 true 时，表示点击了确定，此时返回 `detail`    |
| detail?.value      | Date[]     | 开始 1 个 Date 实例 或 开始和结束 2 个 Date 实例 |
| detail?.valueArray | number[][] | 如：[[2021, 5, 1], [2021, 5, 30]]                |
| detail?.formatted  | string     | 05-21 ~ 05-22                                    |
| detail?.rangeCount | number     | 选择区间持续的天数（含首尾）                     |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showCalendar({
  type: 'range',
  showClose: true,
  success: ({ confirm, cancel, detail }) => {
    ...
  }
})
```
