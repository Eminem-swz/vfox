import{_ as a,c as t,o as s,a as n}from"./app.95b08e21.js";const b='{"title":"TabView/TabViewItem \u6807\u7B7E\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"TabView Props","slug":"tabview-props"},{"level":2,"title":"TabView Events","slug":"tabview-events"},{"level":2,"title":"TabView Slots","slug":"tabview-slots"},{"level":2,"title":"TabViewItem Props","slug":"tabviewitem-props"},{"level":2,"title":"TabViewItem Slots","slug":"tabviewitem-slots"}],"relativePath":"components/TabView.md","lastUpdated":1643560485195}',e={},p=n(`<h1 id="tabview-tabviewitem-\u6807\u7B7E\u9875" tabindex="-1">TabView/TabViewItem \u6807\u7B7E\u9875 <a class="header-anchor" href="#tabview-tabviewitem-\u6807\u7B7E\u9875" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TabView<span class="token punctuation">,</span> TabViewItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="tabview-props" tabindex="-1">TabView Props <a class="header-anchor" href="#tabview-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>initial-vertical</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u521D\u59CB\u5316\u662F\u5426\u4FA7\u8FB9\u83DC\u5355\u5C55\u793A\u65B9\u5F0F</td></tr><tr><td>scroll-threshold</td><td>number</td><td>4</td><td>\u5426</td><td>\u8D85\u8FC7 <code>scrollThreshold</code> \u4E2A Tab \u4F7F\u7528\u6EDA\u52A8\u5F62\u5F0F</td></tr><tr><td>back-upper-when-change</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5207\u6362\u9762\u677F\u65F6\uFF0C\u5982\u679C\u662F\u65E7\u9762\u677F\uFF0C\u662F\u5426\u8FD4\u56DE\u9876\u90E8/\u5DE6\u4FA7\u4F4D\u7F6E</td></tr></tbody></table><h2 id="tabview-events" tabindex="-1">TabView Events <a class="header-anchor" href="#tabview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u65F6\u89E6\u53D1</td><td>payload: { activeIndex: number } \u5F53\u524D\u9879\u7D22\u5F15</td><td>TabViewOnChange</td></tr><tr><td>animated</td><td>\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td>payload: { activeIndex: number } \u5F53\u524D\u9879\u7D22\u5F15</td><td>TabViewOnAnimated</td></tr></tbody></table><h2 id="tabview-slots" tabindex="-1">TabView Slots <a class="header-anchor" href="#tabview-slots" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./TabView.html#tabviewitem-props">TabViewItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-tab-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-tab-view-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tab 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-empty</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tab 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-tab-view-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-tab-view-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tab 2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-empty</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tab 1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-tab-view-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-tab-view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="tabviewitem-props" tabindex="-1">TabViewItem Props <a class="header-anchor" href="#tabviewitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u5BF9\u5E94\u7684\u83DC\u5355\u540D\u79F0</td></tr></tbody></table><h2 id="tabviewitem-slots" tabindex="-1">TabViewItem Slots <a class="header-anchor" href="#tabviewitem-slots" aria-hidden="true">#</a></h2><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-tab-view-item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tab 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-empty</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tab 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-tab-view-item</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),o=[p];function i(l,c,d,u,r,h){return s(),t("div",null,o)}var v=a(e,[["render",i]]);export{b as __pageData,v as default};
