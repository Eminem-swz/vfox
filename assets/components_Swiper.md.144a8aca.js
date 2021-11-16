import{_ as t,c as e,o as d,a as r}from"./app.957b1e9a.js";const m='{"title":"Swiper \u8F6E\u64AD","description":"","frontmatter":{},"headers":[{"level":2,"title":"Swiper Props","slug":"swiper-props"},{"level":2,"title":"Swiper Events","slug":"swiper-events"},{"level":2,"title":"Swiper Slots","slug":"swiper-slots"},{"level":2,"title":"SwiperItem \u8F6E\u64AD\u9879","slug":"swiperitem-\u8F6E\u64AD\u9879"},{"level":2,"title":"SwiperItem Slots","slug":"swiperitem-slots"}],"relativePath":"components/Swiper.md","lastUpdated":1637032039594}',i={},a=r(`<h1 id="swiper-\u8F6E\u64AD" tabindex="-1">Swiper \u8F6E\u64AD <a class="header-anchor" href="#swiper-\u8F6E\u64AD" aria-hidden="true">#</a></h1><h2 id="swiper-props" tabindex="-1">Swiper Props <a class="header-anchor" href="#swiper-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>indicator-dots</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u9762\u677F\u6307\u793A\u70B9</td></tr><tr><td>indicator-color</td><td>color</td><td>&#39;rgba(255, 255, 255, 0.4)&#39;</td><td>\u5426</td><td>\u6307\u793A\u70B9\u989C\u8272</td></tr><tr><td>indicator-active-color</td><td>color</td><td>&#39;#ffffff&#39;</td><td>\u5426</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u6307\u793A\u70B9\u989C\u8272</td></tr><tr><td>autoplay</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u81EA\u52A8\u5207\u6362</td></tr><tr><td>v-model:active-index</td><td>number</td><td>0</td><td>\u5426</td><td>\u5F53\u524D\u6240\u5728\u6ED1\u5757\u7684 index</td></tr><tr><td>interval</td><td>number</td><td>5000</td><td>\u5426</td><td>\u81EA\u52A8\u5207\u6362\u65F6\u95F4\u95F4\u9694</td></tr><tr><td>duration</td><td>number</td><td></td><td>\u5426</td><td>\u6ED1\u52A8\u52A8\u753B\u65F6\u957F\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u65F6\u4F7F\u7528\u5185\u7F6E\u8C03\u4F18\u65F6\u957F</td></tr><tr><td>initial-circular</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u521D\u59CB\u8BBE\u7F6E\u662F\u5426\u5FAA\u73AF\u5207\u6362</td></tr><tr><td>initial-vertical</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u521D\u59CB\u8BBE\u7F6E\u662F\u5426\u4E3A\u7EB5\u5411\u6ED1\u52A8</td></tr><tr><td>navigation-buttons</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\u6309\u94AE</td></tr></tbody></table><h2 id="swiper-events" tabindex="-1">Swiper Events <a class="header-anchor" href="#swiper-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u65F6\u89E6\u53D1</td><td>{ activeIndex } \u5F53\u524D\u9879\u7D22\u5F15</td></tr><tr><td>animated</td><td>\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td>{ activeIndex } \u5F53\u524D\u9879\u7D22\u5F15</td></tr><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1\uFF0C\u4E3A\u4E86\u533A\u5206\u6ED1\u52A8\u60C5\u51B5</td><td>{}</td></tr></tbody></table><h2 id="swiper-slots" tabindex="-1">Swiper Slots <a class="header-anchor" href="#swiper-slots" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Swiper.html#SwiperItem-\u8F6E\u64AD\u9879">SwiperItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-"><pre><code>&lt;fx-swiper&gt;
  &lt;fx-swiper-item&gt;
    &lt;fx-image src=&quot;a.jpg&quot; /&gt;
  &lt;/fx-swiper-item&gt;
  &lt;fx-swiper-item&gt;
    &lt;fx-image src=&quot;b.jpg&quot; /&gt;
  &lt;/fx-swiper-item&gt;
  ...
&lt;/fx-swiper&gt;
</code></pre></div><h2 id="swiperitem-\u8F6E\u64AD\u9879" tabindex="-1">SwiperItem \u8F6E\u64AD\u9879 <a class="header-anchor" href="#swiperitem-\u8F6E\u64AD\u9879" aria-hidden="true">#</a></h2><h2 id="swiperitem-slots" tabindex="-1">SwiperItem Slots <a class="header-anchor" href="#swiperitem-slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-swiper-item&gt;
  &lt;fx-image src=&quot;b.jpg&quot; /&gt;
&lt;/fx-swiper-item&gt;
</code></pre></div>`,11),s=[a];function l(o,n,p,h,c,w){return d(),e("div",null,s)}var u=t(i,[["render",l]]);export{m as __pageData,u as default};
