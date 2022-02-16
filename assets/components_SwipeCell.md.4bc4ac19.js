import{_ as t,c as a,o as n,a as s}from"./app.6b4e8d9e.js";const g='{"title":"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"SwipeCellButtonOption \u7684\u7ED3\u6784","slug":"swipecellbuttonoption-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u88AB\u6302\u8F7D\u5143\u7D20\uFF08#default\uFF09","slug":"\u88AB\u6302\u8F7D\u5143\u7D20\uFF08-default\uFF09"}],"relativePath":"components/SwipeCell.md","lastUpdated":1644976879945}',e={},p=s(`<h1 id="swipecell-\u6ED1\u52A8\u5355\u5143\u683C" tabindex="-1">SwipeCell \u6ED1\u52A8\u5355\u5143\u683C <a class="header-anchor" href="#swipecell-\u6ED1\u52A8\u5355\u5143\u683C" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SwipeCell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>buttons</td><td>SwipeCellButtonOption[]</td><td></td><td>\u662F</td><td>\u6309\u94AE\u5217\u8868</td></tr></tbody></table><h3 id="swipecellbuttonoption-\u7684\u7ED3\u6784" tabindex="-1">SwipeCellButtonOption \u7684\u7ED3\u6784 <a class="header-anchor" href="#swipecellbuttonoption-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">SwipeCellButtonOption</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  type<span class="token operator">?</span><span class="token operator">:</span> StateType
<span class="token punctuation">}</span>

<span class="token keyword">const</span> buttons<span class="token operator">:</span> SwipeCellButtonOption<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u52A0\u5165\u6536\u85CF&#39;</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h4 id="statetype-\u7684\u5408\u6CD5\u503C" tabindex="-1">StateType \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#statetype-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h4><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>primary</td><td>\u4E3B\u8981</td></tr><tr><td>default</td><td>\u6B21\u8981</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5371\u9669</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>button-click</td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1</td><td>payload: { item: SwipeCellButtonOption, index: number }</td><td>SwipeCellOnButtonClick</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u88AB\u6302\u8F7D\u5143\u7D20\uFF08-default\uFF09" tabindex="-1">\u88AB\u6302\u8F7D\u5143\u7D20\uFF08#default\uFF09 <a class="header-anchor" href="#\u88AB\u6302\u8F7D\u5143\u7D20\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-swipe-cell</span> <span class="token attr-name">:buttons</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>buttons<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-cell</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5411\u5DE6\u5212<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-cell</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-swipe-cell</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),o=[p];function l(c,r,i,d,u,h){return n(),a("div",null,o)}var b=t(e,[["render",l]]);export{g as __pageData,b as default};
