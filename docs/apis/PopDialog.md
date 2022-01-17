# PopDialog 气泡对话框

## showPopDialog(object)

显示气泡对话框。

### object

| 属性        | 类型                  | 默认值   | 必填 | 说明                                                                              |
| ----------- | --------------------- | -------- | ---- | --------------------------------------------------------------------------------- |
| selector    | string \| HTMLElement |          | 是   | 从哪个元素展开，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| placement   | string                | 'bottom' | 否   | 展开位置，可选 'bottom', 'top', 'left', 'right'                                   |
| content     | string                |          | 是   | 文本内容                                                                          |
| showCancel  | boolean               | true     | 否   | 是否显示取消按钮                                                                  |
| cancelText  | string                | '取消'   | 否   | 取消按钮的文本                                                                    |
| confirmText | string                | '确定'   | 否   | 确定按钮的文本                                                                    |
| success     | function              |          | 否   | 接口调用成功（在用户做出选择后，如取消，确定）的回调函数                          |
| fail        | function              |          | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出）          |
| complete    | function              |          | 否   | 弹窗关闭或调用失败的回调函数                                                      |

#### object.success 回调参数

| 属性     | 类型    | 说明                       |
| -------- | ------- | -------------------------- |
| cancel?  | boolean | 为 true 时，表示取消       |
| confirm? | boolean | 为 true 时，表示点击了确定 |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showPopDialog({
  selector: '#popDialogTarget',
  content: this.content,
  success: (res) => {
    console.log('success', res)
  }
})
```
