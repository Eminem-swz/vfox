# 主题定制

组件库的样式是基于 SCSS 开发的，可以通过提供的工具完成主题的个性化定制，主要是色彩相关。

在主题定制之前，推荐通过 [色卡](https://godxiaoji.github.io/vfox/demo/#/ColorCard) 查看下你钟意的颜色在色卡中的效果。推荐颜色值在 HSV 模式下 **S > 70% 且 V > 70%**。

1. 打开 [主题定制](https://godxiaoji.github.io/vfox/demo/#/CustomTheme) 工具，按操作完成定制并复制定制后的代码。
2. 新建自定义 SCSS 文件 `my-style.scss`，粘贴定制代码，如：

   `my-style.scss` :

   ```Scss
   $primary-color-2: #c5c6d1;
   $primary-color-5: #6667ab;
   $primary-color-6: #4a4985;
   $primary-color-7: #312f5e;
   $primary-color: $primary-color-6;
   $success-color-2: #a3b6a6;
   $success-color-5: #3c9052;
   $success-color-6: #276a3b;
   $success-color-7: #154425;
   $success-color: $success-color-6;
   $warning-color-2: #e1d9bf;
   $warning-color-5: #bb9445;
   $warning-color-6: #95702f;
   $warning-color-7: #6e4e1e;
   $warning-color: $warning-color-6;
   $danger-color-2: #d79996;
   $danger-color-5: #b1262d;
   $danger-color-6: #8b1721;
   $danger-color-7: #650c16;
   $danger-color: $danger-color-6;
   ```

3. 更改原来引入的样式文件：

```JavaScript
import Vfox from 'vfox'

// delete: vfox/es/style/index.css
import 'path/to/my-style.scss'
import 'vfox/es/style/index.scss'

app.use(Vfox)
```

4. 安装 scss 依赖

**Vite** 只需要预装 sass 预处理器，具体请参阅 [CSS Pre-processors](https://cn.vitejs.dev/guide/features.html#css-pre-processors)。

```
npm install -D sass
```

**Vue CLI** 还需要相应的 loader，具体请参阅 [预处理器](https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)。

```
npm install -D sass-loader sass
```
