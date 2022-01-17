# Popover 气泡

## showPopover(object)

显示气泡。

### object

| 属性      | 类型                  | 默认值   | 必填 | 说明                                                                              |
| --------- | --------------------- | -------- | ---- | --------------------------------------------------------------------------------- |
| selector  | string \| HTMLElement |          | 是   | 从哪个元素展开，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| placement | string                | 'bottom' | 否   | 展开位置，可选 'bottom', 'top', 'left', 'right'                                   |
| content   | string                |          | 是   | 文本内容                                                                          |
| showMask  | boolean               | true     | 否   | 是否展示蒙层，如果设置不展示，气泡则是跟随 `selector` 对应的元素                  |
| success   | function              |          | 否   | 接口调用成功的回调函数                                                            |
| fail      | function              |          | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出）          |
| complete  | function              |          | 否   | 弹窗关闭或调用失败的回调函数                                                      |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showPopover({
  selector: '#popoverTarget',
  content: '这是气泡内容',
  success: res => {
    console.log('success', res)
  }
})
```
