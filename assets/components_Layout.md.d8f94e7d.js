import{_ as t,c as a,o as s,a as n}from"./app.95b08e21.js";const g='{"title":"Layout \u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Row Props","slug":"row-props"},{"level":2,"title":"Row Slots","slug":"row-slots"},{"level":2,"title":"Col Props","slug":"col-props"},{"level":2,"title":"Col Slots","slug":"col-slots"}],"relativePath":"components/Layout.md","lastUpdated":1644421349617}',o={},p=n(`<h1 id="layout-\u5E03\u5C40" tabindex="-1">Layout \u5E03\u5C40 <a class="header-anchor" href="#layout-\u5E03\u5C40" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E Flex \u6805\u683C\u5316\u7CFB\u7EDF\uFF0C\u5229\u7528 Row \u548C\u5217 Col \u6765\u5B9A\u4E49\u4FE1\u606F\u533A\u5757\u7684\u5916\u90E8\u6846\u67B6\uFF0C\u4EE5\u4FDD\u8BC1\u9875\u9762\u7684\u6BCF\u4E2A\u533A\u57DF\u80FD\u591F\u7A33\u5065\u5730\u6392\u5E03\u8D77\u6765\u3002</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="row-props" tabindex="-1">Row Props <a class="header-anchor" href="#row-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>gutter</td><td>string | number | number[]</td><td>0</td><td>\u5426</td><td>\u6805\u683C\u95F4\u9694\uFF0C\u901A\u8FC7\u6570\u503C\u8BBE\u7F6E\u6C34\u5E73\u95F4\u9694\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u7684\u5F62\u5F0F\u8BBE\u7F6E\u6C34\u5E73\u548C\u5782\u76F4\u95F4\u9694 [\u6C34\u5E73\u95F4\u9694, \u5782\u76F4\u95F4\u9694]</td></tr><tr><td>justify</td><td>RowJustify</td><td>&#39;start&#39;</td><td>\u5426</td><td>\u6C34\u5E73\u6392\u5217\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\uFF1A&#39;start&#39;, &#39;end&#39;, &#39;center&#39;, &#39;space-around&#39;, &#39;space-between&#39;</td></tr><tr><td>align</td><td>RowAlign</td><td>&#39;top&#39;</td><td>\u5426</td><td>\u6C34\u5E73\u6392\u5217\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\uFF1A&#39;top&#39;, &#39;middle&#39;, &#39;bottom&#39;</td></tr></tbody></table><h2 id="row-slots" tabindex="-1">Row Slots <a class="header-anchor" href="#row-slots" aria-hidden="true">#</a></h2><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-row</span> <span class="token attr-name">:gutter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Layout<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-col</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-row</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="col-props" tabindex="-1">Col Props <a class="header-anchor" href="#col-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>span</td><td>string | number</td><td>24</td><td>\u5426</td><td>\u6805\u683C\u5360\u636E\u7684\u5217\u6570\uFF0C\u53EF\u9009 1-24</td></tr><tr><td>offset</td><td>string | number</td><td>0</td><td>\u5426</td><td>\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u53EF\u9009 1-24</td></tr><tr><td>push</td><td>string | number</td><td>0</td><td>\u5426</td><td>\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570\uFF0C\u53EF\u9009 1-24</td></tr><tr><td>pull</td><td>string | number</td><td>0</td><td>\u5426</td><td>\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570\uFF0C\u53EF\u9009 1-24</td></tr></tbody></table><h2 id="col-slots" tabindex="-1">Col Slots <a class="header-anchor" href="#col-slots" aria-hidden="true">#</a></h2><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-row</span> <span class="token attr-name">:gutter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Layout<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-col</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-row</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13),e=[p];function l(c,d,r,u,i,h){return s(),a("div",null,e)}var f=t(o,[["render",l]]);export{g as __pageData,f as default};
