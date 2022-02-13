import{_ as t,c as a,o as s,a as n}from"./app.6b4e8d9e.js";const g='{"title":"Swiper/SwiperItem \u8F6E\u64AD","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Swiper Props","slug":"swiper-props"},{"level":2,"title":"Swiper Events","slug":"swiper-events"},{"level":2,"title":"Swiper Slots","slug":"swiper-slots"},{"level":2,"title":"SwiperItem Slots","slug":"swiperitem-slots"}],"relativePath":"components/Swiper.md","lastUpdated":1644766148477}',e={},p=n(`<h1 id="swiper-swiperitem-\u8F6E\u64AD" tabindex="-1">Swiper/SwiperItem \u8F6E\u64AD <a class="header-anchor" href="#swiper-swiperitem-\u8F6E\u64AD" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Swiper<span class="token punctuation">,</span> SwiperItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="swiper-props" tabindex="-1">Swiper Props <a class="header-anchor" href="#swiper-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>indicator-dots</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u9762\u677F\u6307\u793A\u70B9</td></tr><tr><td>indicator-color</td><td>color</td><td>&#39;rgba(0, 0, 0, 0.4)&#39;</td><td>\u5426</td><td>\u6307\u793A\u70B9\u989C\u8272</td></tr><tr><td>indicator-active-color</td><td>color</td><td>&#39;rgba(255, 255, 255, 0.8)&#39;</td><td>\u5426</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u6307\u793A\u70B9\u989C\u8272</td></tr><tr><td>autoplay</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u81EA\u52A8\u5207\u6362</td></tr><tr><td>v-model:active-index</td><td>number</td><td>0</td><td>\u5426</td><td>\u5F53\u524D\u6240\u5728\u6ED1\u5757\u7684 index</td></tr><tr><td>interval</td><td>number</td><td>5000</td><td>\u5426</td><td>\u81EA\u52A8\u5207\u6362\u65F6\u95F4\u95F4\u9694</td></tr><tr><td>duration</td><td>number</td><td></td><td>\u5426</td><td>\u6ED1\u52A8\u52A8\u753B\u65F6\u957F\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u65F6\u4F7F\u7528\u5185\u7F6E\u8C03\u4F18\u65F6\u957F</td></tr><tr><td>initial-circular</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u521D\u59CB\u8BBE\u7F6E\u662F\u5426\u5FAA\u73AF\u5207\u6362</td></tr><tr><td>initial-vertical</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u521D\u59CB\u8BBE\u7F6E\u662F\u5426\u4E3A\u7EB5\u5411\u6ED1\u52A8</td></tr><tr><td>navigation-buttons</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\u6309\u94AE</td></tr></tbody></table><h2 id="swiper-events" tabindex="-1">Swiper Events <a class="header-anchor" href="#swiper-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u65F6\u89E6\u53D1</td><td>payload: { activeIndex: number } \u5F53\u524D\u9879\u7D22\u5F15</td><td>SwiperOnChange</td></tr><tr><td>animated</td><td>\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td>payload: { activeIndex: number } \u5F53\u524D\u9879\u7D22\u5F15</td><td>SwiperOnAnimated</td></tr><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1\uFF0C\u4E3A\u4E86\u533A\u5206\u6ED1\u52A8\u60C5\u51B5</td><td>payload: { }</td><td></td></tr></tbody></table><h2 id="swiper-slots" tabindex="-1">Swiper Slots <a class="header-anchor" href="#swiper-slots" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Swiper.html#swiperitem-slots">SwiperItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-swiper</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-swiper-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-swiper-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-swiper-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-swiper-item</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-swiper</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="swiperitem-slots" tabindex="-1">SwiperItem Slots <a class="header-anchor" href="#swiperitem-slots" aria-hidden="true">#</a></h2><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-swiper-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-swiper-item</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13),d=[p];function o(r,i,l,c,u,k){return s(),a("div",null,d)}var m=t(e,[["render",o]]);export{g as __pageData,m as default};
