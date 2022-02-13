# 国际化

## 简介

组件库默认的文案语言是中文，支持多语言切换，目前支持 **中文** 和 **英文**。

## Locale

先引入 `Locale` 模块：

```JavaScript
import { Locale } from 'vfox'
```

如果想要使用英文：

```JavaScript
import enUS from 'vfox/es/Locale/lang/en-US'

Locale.use('en-US', enUS)
```

切换回中文：

```JavaScript
Locale.use('zh-CN')
```

如果想要其中的部分文案进行修改：

```JavaScript
Locale.merge('zh-CN', {
  pickerConfirmText: '完成'
})
```
