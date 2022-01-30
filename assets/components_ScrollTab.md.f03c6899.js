import{_ as a,c as t,o as s,a as n}from"./app.95b08e21.js";const b='{"title":"ScrollTab/ScrollTabItem \u6807\u7B7E\u6EDA\u52A8\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"ScrollTab Props","slug":"scrolltab-props"},{"level":2,"title":"ScrollTab Events","slug":"scrolltab-events"},{"level":2,"title":"ScrollTab Slots","slug":"scrolltab-slots"},{"level":2,"title":"ScrollTabItem Props","slug":"scrolltabitem-props"},{"level":2,"title":"ScrollTabItem Slots","slug":"scrolltabitem-slots"}],"relativePath":"components/ScrollTab.md","lastUpdated":1643559098144}',p={},o=n(`<h1 id="scrolltab-scrolltabitem-\u6807\u7B7E\u6EDA\u52A8\u5E03\u5C40" tabindex="-1">ScrollTab/ScrollTabItem \u6807\u7B7E\u6EDA\u52A8\u5E03\u5C40 <a class="header-anchor" href="#scrolltab-scrolltabitem-\u6807\u7B7E\u6EDA\u52A8\u5E03\u5C40" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollTab<span class="token punctuation">,</span> ScrollTabItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="scrolltab-props" tabindex="-1">ScrollTab Props <a class="header-anchor" href="#scrolltab-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>sticky-offset-top</td><td>string | number</td><td>0</td><td>\u5426</td><td>\u6570\u503C\u9ED8\u8BA4\u662F px\uFF0C\u4E5F\u652F\u6301 vw/vh</td></tr><tr><td>sticky-offset-bottom</td><td>string | number</td><td>0</td><td>\u5426</td><td>\u6570\u503C\u9ED8\u8BA4\u662F px\uFF0C\u4E5F\u652F\u6301 vw/vh</td></tr></tbody></table><h2 id="scrolltab-events" tabindex="-1">ScrollTab Events <a class="header-anchor" href="#scrolltab-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u65F6\u89E6\u53D1</td><td>payload: { activeIndex: number } \u5F53\u524D\u9879\u7D22\u5F15</td><td>ScrollTabOnChange</td></tr></tbody></table><h2 id="scrolltab-slots" tabindex="-1">ScrollTab Slots <a class="header-anchor" href="#scrolltab-slots" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./ScrollTab.html#scrolltabitem-props">ScrollTabItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-scroll-tab</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-scroll-tab-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dust Red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scroll-tab-box box-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-scroll-tab-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-scroll-tab-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Volcano<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scroll-tab-box box-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-scroll-tab-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-scroll-tab-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Sunset Orange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scroll-tab-box box-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-scroll-tab-item</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-scroll-tab</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="scrolltabitem-props" tabindex="-1">ScrollTabItem Props <a class="header-anchor" href="#scrolltabitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u5206\u7EC4\u540D\uFF0C\u4E5F\u5E94\u7528\u4E8E\u5438\u9644\u548C\u83DC\u5355</td></tr></tbody></table><h2 id="scrolltabitem-slots" tabindex="-1">ScrollTabItem Slots <a class="header-anchor" href="#scrolltabitem-slots" aria-hidden="true">#</a></h2><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-scroll-tab-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dust Red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scroll-tab-box box-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-scroll-tab-item</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),l=[o];function e(c,u,r,i,d,k){return s(),t("div",null,l)}var g=a(p,[["render",e]]);export{b as __pageData,g as default};
