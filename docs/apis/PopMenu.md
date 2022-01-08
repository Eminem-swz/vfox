# PopMenu 气泡菜单

## showPopMenu(object)

显示气泡菜单。

### object

| 属性      | 类型           | 默认值   | 必填 | 说明                                                                              |
| --------- | -------------- | -------- | ---- | --------------------------------------------------------------------------------- |
| selector  | string/element |          | 是   | 从哪个元素展开，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| placement | string         | 'bottom' | 否   | 展开位置，可选 'bottom', 'top', 'left', 'right'                                   |
| options   | array          |          | 否   | 选项列表                                                                          |
| success   | function       |          | 否   | 接口调用成功（在用户做出选择后，如取消，选择选项）的回调函数                      |
| fail      | function       |          | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出）          |
| complete  | function       |          | 否   | 弹窗关闭或调用失败的回调函数                                                      |

#### options 的结构

| options[index] 值 | 类型   | 默认值 | 必填 | 说明                                          |
| ----------------- | ------ | ------ | ---- | --------------------------------------------- |
| name              | string |        | 是   | 选项名                                        |
| disabled          | string | false  | 否   | 是否禁用                                      |
| icon              | string |        | 否   | 图标，使用 [Icon](../components/Icon.md) 组件 |

```
[
  {
    name: '选项1',
    disabled: false,
    icon: 'MenuOutlined'
  }
]
```

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
showPopMenu({
  selector: '#popMenuTarget',
  options: [{
    icon: 'HeartOutlined',
    name: '爱心'
  },
  {
    icon: 'StarOutlined',
    name: '星星'
  },
  {
    icon: 'CircleOutlined',
    name: '圈圈',
    disabled: true
  }],
  placement: 'top',
  success: res => {
    console.log('select', res)
  }
})
```
