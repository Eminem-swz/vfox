import{_ as t,c as d,o as e,a}from"./app.8c4fff02.js";const b='{"title":"Notify \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"showNotify(object)","slug":"shownotify-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"hideNotify([object])","slug":"hidenotify-object"},{"level":3,"title":"object","slug":"object-1"},{"level":3,"title":"Usage","slug":"usage-1"}],"relativePath":"apis/Notify.md","lastUpdated":1642841591795}',n={},o=a(`<h1 id="notify-\u6D88\u606F\u63D0\u793A" tabindex="-1">Notify \u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#notify-\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A\u76EE\u524D\u4EC5\u652F\u6301\u5355\u4F8B\u6A21\u5F0F\u3002</p><h2 id="shownotify-object" tabindex="-1">showNotify(object) <a class="header-anchor" href="#shownotify-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6D88\u606F\u63D0\u793A\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>type</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u63D0\u793A\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\uFF1A&#39;primary&#39; / &#39;success&#39; / &#39;warning&#39; / &#39;danger&#39;</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./../components/Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u56FE\u6807\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>type</code>\uFF0C\u989C\u8272\u968F <code>type</code></td></tr><tr><td>duration</td><td>number</td><td>1500</td><td>\u5426</td><td>\u5C55\u793A\u65F6\u957F(\u5355\u4F4D ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0C<code>notify</code> \u4E0D\u4F1A\u6D88\u5931</td></tr><tr><td>backgroundColor</td><td>string</td><td></td><td>\u5426</td><td>\u6307\u5B9A\u80CC\u666F\u989C\u8272\uFF0C\u4F1A\u8986\u76D6 type \u7684\u989C\u8272</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u6307\u5B9A\u524D\u666F\u989C\u8272\uFF08\u542B\u5B57\u4F53\uFF0C\u56FE\u6807\uFF09</td></tr><tr><td>closable</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h4 id="object-type-\u7684\u5408\u6CD5\u503C" tabindex="-1">object.type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#object-type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h4><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>primary</td><td>\u63D0\u793A</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5371\u9669</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showNotify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A\u5185\u5BB9&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="hidenotify-object" tabindex="-1">hideNotify([object]) <a class="header-anchor" href="#hidenotify-object" aria-hidden="true">#</a></h2><p>\u9690\u85CF\u6D88\u606F\u63D0\u793A\u6846\u3002</p><h3 id="object-1" tabindex="-1">object <a class="header-anchor" href="#object-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">hideNotify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,18),s=[o];function r(i,c,h,p,l,u){return e(),d("div",null,s)}var y=t(n,[["render",r]]);export{b as __pageData,y as default};
