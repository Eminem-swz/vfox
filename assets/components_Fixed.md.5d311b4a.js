import{_ as t,c as a,o as n,a as s}from"./app.95b08e21.js";const m='{"title":"Fixed \u56FA\u5B9A\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5E95\u90E8\uFF08#default\uFF09","slug":"\u5E95\u90E8\uFF08-default\uFF09"}],"relativePath":"components/Fixed.md","lastUpdated":1644421349617}',e={},o=s(`<h1 id="fixed-\u56FA\u5B9A\u5E03\u5C40" tabindex="-1">Fixed \u56FA\u5B9A\u5E03\u5C40 <a class="header-anchor" href="#fixed-\u56FA\u5B9A\u5E03\u5C40" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Fixed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>placement</td><td>PlacementType</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u53EF\u9009 &#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>background</td><td>string</td><td></td><td>\u5426</td><td>\u56FA\u5B9A\u80CC\u666F\u8272\uFF0C\u540C CSS \u503C</td></tr><tr><td>z-index</td><td>number</td><td>1</td><td>\u5426</td><td>\u8BBE\u5B9A\u56FA\u5B9A\u7684 zIndex</td></tr><tr><td>space-hold</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u9884\u7559\u5360\u4F4D\u5143\u7D20\uFF0C\u5F00\u542F\u540E\u5143\u7D20\u4F4D\u7F6E\u9884\u7559\u8DDF\u56FA\u5B9A\u5143\u7D20\u4E00\u6837\u5927\u5C0F\u7684\u5360\u4F4D\u5143\u7D20\uFF0C\u9632\u6B62\u6321\u4F4F\u5176\u4ED6\u5143\u7D20</td></tr><tr><td>enable-safe-area-insets</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u5B89\u5168\u533A\u9002\u914D</td></tr></tbody></table><p>\u6CE8\uFF1A</p><p>\u5728 iPhoneX \u7B49\u673A\u578B\u5F00\u542F <code>enableSafeAreaInsets</code>\uFF0C\u9700\u8981\u5728 head \u6807\u7B7E\u4E2D\u6DFB\u52A0 meta \u6807\u7B7E\uFF0C\u5E76\u8BBE\u7F6E viewport-fit=cover \u503C</p><div class="language-HTML"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5E95\u90E8\uFF08-default\uFF09" tabindex="-1">\u5E95\u90E8\uFF08#default\uFF09 <a class="header-anchor" href="#\u5E95\u90E8\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-fixed</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u56FA\u5B9A\u5185\u5BB9
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-fixed</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),d=[o];function p(l,c,r,i,u,h){return n(),a("div",null,d)}var f=t(e,[["render",p]]);export{m as __pageData,f as default};
