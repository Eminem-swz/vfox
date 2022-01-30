import{_ as a,c as t,o as n,a as s}from"./app.95b08e21.js";const k='{"title":"Pagination \u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":3,"title":"\u7FFB\u9875\u6309\u94AE\uFF08#prev/#next\uFF09","slug":"\u7FFB\u9875\u6309\u94AE\uFF08-prev-next\uFF09"}],"relativePath":"components/Pagination.md","lastUpdated":1643559098144}',e={},p=s(`<h1 id="pagination-\u5206\u9875" tabindex="-1">Pagination \u5206\u9875 <a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:current</td><td>number</td><td>1</td><td>\u5426</td><td>\u5F53\u524D\u9875\u7801</td></tr><tr><td>total</td><td>number</td><td>1</td><td>\u5426</td><td>\u603B\u9875\u6570</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u70B9\u51FB\u7FFB\u9875\u6309\u94AE\u65F6\u89E6\u53D1</td><td>payload: { current: number, total: number }</td><td>PaginationOnChange</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-pagination</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ current, total }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u7B2C {{ current }} / {{ total }} \u9875 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-pagination</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u7FFB\u9875\u6309\u94AE\uFF08-prev-next\uFF09" tabindex="-1">\u7FFB\u9875\u6309\u94AE\uFF08#prev/#next\uFF09 <a class="header-anchor" href="#\u7FFB\u9875\u6309\u94AE\uFF08-prev-next\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-pagination</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prev</span><span class="token punctuation">&gt;</span></span> \u4E0A\u4E00\u9875 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#next</span><span class="token punctuation">&gt;</span></span> \u4E0B\u4E00\u9875 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-pagination</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13),o=[p];function l(c,r,i,d,u,h){return n(),t("div",null,o)}var m=a(e,[["render",l]]);export{k as __pageData,m as default};
