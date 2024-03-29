# Swiper/SwiperItem 轮播

## Import

```JavaScript
import { Swiper, SwiperItem } from 'vfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Swiper Props

| 属性                   | 类型    | 默认值                     | 必填 | 说明                                     |
| ---------------------- | ------- | -------------------------- | ---- | ---------------------------------------- |
| indicator-dots         | boolean | false                      | 否   | 是否显示面板指示点                       |
| indicator-color        | color   | 'rgba(0, 0, 0, 0.4)'       | 否   | 指示点颜色                               |
| indicator-active-color | color   | 'rgba(255, 255, 255, 0.8)' | 否   | 当前选中的指示点颜色                     |
| autoplay               | boolean | false                      | 否   | 是否自动切换                             |
| v-model:active-index   | number  | 0                          | 否   | 当前所在滑块的 index                     |
| interval               | number  | 5000                       | 否   | 自动切换时间间隔                         |
| duration               | number  |                            | 否   | 滑动动画时长，没有设置时使用内置调优时长 |
| initial-circular       | boolean | false                      | 否   | 初始设置是否循环切换                     |
| initial-vertical       | boolean | false                      | 否   | 初始设置是否为纵向滑动                   |
| navigation-buttons     | boolean | false                      | 否   | 是否展示上一页/下一页按钮                |

## Swiper Events

| 事件     | 描述                         | 回调函数参数                                | TypeScript 函数  |
| -------- | ---------------------------- | ------------------------------------------- | ---------------- |
| change   | 切换时触发                   | payload: { activeIndex: number } 当前项索引 | SwiperOnChange   |
| animated | 动画结束时触发               | payload: { activeIndex: number } 当前项索引 | SwiperOnAnimated |
| click    | 点击时触发，为了区分滑动情况 | payload: { }                                |                  |

## Swiper Slots

注：其中只可放置 [SwiperItem](./Swiper.md#swiperitem-slots) 组件，否则会导致未定义的行为。

```Vue
<fx-swiper>
  <fx-swiper-item>
    <fx-image src="a.jpg" />
  </fx-swiper-item>
  <fx-swiper-item>
    <fx-image src="b.jpg" />
  </fx-swiper-item>
  ...
</fx-swiper>
```

## SwiperItem Slots

```Vue
<fx-swiper-item>
  <fx-image src="b.jpg" />
</fx-swiper-item>
```
