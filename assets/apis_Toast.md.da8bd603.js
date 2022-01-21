import{_ as t,c as a,o as d,a as e}from"./app.76ef83d6.js";const g='{"title":"Toast \u8F7B\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"showToast(object)","slug":"showtoast-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"hideToast([object])","slug":"hidetoast-object"},{"level":3,"title":"object","slug":"object-1"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":2,"title":"showLoading(object)","slug":"showloading-object"},{"level":3,"title":"object","slug":"object-2"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":2,"title":"hideLoading([object])","slug":"hideloading-object"},{"level":3,"title":"object","slug":"object-3"},{"level":3,"title":"Usage","slug":"usage-3"}],"relativePath":"apis/Toast.md","lastUpdated":1642735277422}',s={},n=e(`<h1 id="toast-\u8F7B\u63D0\u793A" tabindex="-1">Toast \u8F7B\u63D0\u793A <a class="header-anchor" href="#toast-\u8F7B\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A\u76EE\u524D\u4EC5\u652F\u6301\u5355\u4F8B\u6A21\u5F0F\u3002</p><h2 id="showtoast-object" tabindex="-1">showToast(object) <a class="header-anchor" href="#showtoast-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6D88\u606F\u63D0\u793A\u6846\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>type</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009 &#39;success&#39;, &#39;loading&#39;, &#39;fail&#39;</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./../components/Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>type</code></td></tr><tr><td>duration</td><td>number</td><td>1500</td><td>\u5426</td><td>\u63D0\u793A\u7684\u5EF6\u8FDF\u5173\u95ED\u65F6\u95F4</td></tr><tr><td>mask</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u900F\u660E\u8499\u5C42\uFF0C\u9632\u6B62\u89E6\u6478\u7A7F\u900F</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h4 id="object-type-\u7684\u5408\u6CD5\u503C" tabindex="-1">object.type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#object-type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h4><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u4E0D\u663E\u793A\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u53EF\u663E\u793A\u4E24\u884C</td></tr><tr><td>success</td><td>\u663E\u793A\u6210\u529F\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr><tr><td>loading</td><td>\u663E\u793A\u52A0\u8F7D\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr><tr><td>fail</td><td>\u663E\u793A\u9519\u8BEF\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6210\u529F&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="hidetoast-object" tabindex="-1">hideToast([object]) <a class="header-anchor" href="#hidetoast-object" aria-hidden="true">#</a></h2><p>\u9690\u85CF\u6D88\u606F\u63D0\u793A\u6846\u3002</p><h3 id="object-1" tabindex="-1">object <a class="header-anchor" href="#object-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">hideToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="showloading-object" tabindex="-1">showLoading(object) <a class="header-anchor" href="#showloading-object" aria-hidden="true">#</a></h2><p>\u663E\u793A loading \u63D0\u793A\u6846\u3002\u9700\u4E3B\u52A8\u8C03\u7528 <a href="./Toast.html#toast-hideloading-object">hideLoading</a> \u624D\u80FD\u5173\u95ED\u63D0\u793A\u6846\u3002</p><h3 id="object-2" tabindex="-1">object <a class="header-anchor" href="#object-2" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>mask</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u900F\u660E\u8499\u5C42\uFF0C\u9632\u6B62\u89E6\u6478\u7A7F\u900F</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u52A0\u8F7D\u4E2D&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="hideloading-object" tabindex="-1">hideLoading([object]) <a class="header-anchor" href="#hideloading-object" aria-hidden="true">#</a></h2><p>\u9690\u85CF loading \u63D0\u793A\u6846\u3002</p><h3 id="object-3" tabindex="-1">object <a class="header-anchor" href="#object-3" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,32),o=[n];function r(i,c,h,l,p,u){return d(),a("div",null,o)}var f=t(s,[["render",r]]);export{g as __pageData,f as default};
