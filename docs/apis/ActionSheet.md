# ActionSheet 动作面板

## showActionSheet(object)

显示动作面板。

### object

| 属性       | 类型     | 默认值 | 必填 | 说明                                                                              |
| ---------- | -------- | ------ | ---- | --------------------------------------------------------------------------------- |
| title      | string   |        | 否   | 提示的标题，不设置则不展示                                                        |
| options    | array    |        | 否   | 选项列表，参考 [ActionSheet options](../components/ActionSheet.md#options-的结构) |
| showCancel | boolean  | false  | 否   | 是否显示取消按钮                                                                  |
| cancelText | string   | '取消' | 否   | 取消按钮的文字                                                                    |
| success    | function |        | 否   | 接口调用成功（在用户做出选择后，如取消，选择选项）的回调函数                      |
| fail       | function |        | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出）          |
| complete   | function |        | 否   | 弹窗关闭或调用失败的回调函数                                                      |

#### object.success 回调参数

| 属性          | 类型    | 说明                                              |
| ------------- | ------- | ------------------------------------------------- |
| confirm?      | boolean | 为 true 时，表示用户点击了选项，此时返回 `detail` |
| cancel?       | boolean | 为 true 时，表示用户点击了取消                    |
| detail?.item  | any     | options[index] 的副本                             |
| detail?.index | number  | 索引                                              |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```JavaScript
showActionSheet({
  title: '标题',
  options: [
    {
      name: '选项1',
      description: '选项1的描述文案'
    },
    {
      name: '选项2'
    },
    {
      name: '选项3'
    }
  ],
  showCancel: true,
  success: ({ confirm, cancel, detail }) => {
    ...
  }
})
```