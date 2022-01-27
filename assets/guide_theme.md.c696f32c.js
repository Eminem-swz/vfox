import{_ as s,c as n,o as a,a as p}from"./app.95b08e21.js";const v='{"title":"\u4E3B\u9898\u5B9A\u5236","description":"","frontmatter":{},"relativePath":"guide/theme.md","lastUpdated":1643297645150}',o={},t=p(`<h1 id="\u4E3B\u9898\u5B9A\u5236" tabindex="-1">\u4E3B\u9898\u5B9A\u5236 <a class="header-anchor" href="#\u4E3B\u9898\u5B9A\u5236" aria-hidden="true">#</a></h1><p>\u7EC4\u4EF6\u5E93\u7684\u6837\u5F0F\u662F\u57FA\u4E8E SCSS \u5F00\u53D1\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D0\u4F9B\u7684\u5DE5\u5177\u5B8C\u6210\u4E3B\u9898\u7684\u4E2A\u6027\u5316\u5B9A\u5236\uFF0C\u4E3B\u8981\u662F\u8272\u5F69\u76F8\u5173\u3002</p><p>\u5728\u4E3B\u9898\u5B9A\u5236\u4E4B\u524D\uFF0C\u63A8\u8350\u901A\u8FC7 <a href="https://godxiaoji.github.io/vfox/demo/#/ColorCard" target="_blank" rel="noopener noreferrer">\u8272\u5361</a> \u67E5\u770B\u4E0B\u4F60\u949F\u610F\u7684\u989C\u8272\u5728\u8272\u5361\u4E2D\u7684\u6548\u679C\u3002\u63A8\u8350\u989C\u8272\u503C\u5728 HSV \u6A21\u5F0F\u4E0B <strong>S &gt; 70% \u4E14 V &gt; 70%</strong>\u3002</p><ol><li><p>\u6253\u5F00 <a href="https://godxiaoji.github.io/vfox/demo/#/CustomTheme" target="_blank" rel="noopener noreferrer">\u4E3B\u9898\u5B9A\u5236</a> \u5DE5\u5177\uFF0C\u6309\u64CD\u4F5C\u5B8C\u6210\u5B9A\u5236\u5E76\u590D\u5236\u5B9A\u5236\u540E\u7684\u4EE3\u7801\u3002</p></li><li><p>\u65B0\u5EFA\u81EA\u5B9A\u4E49 SCSS \u6587\u4EF6 <code>my-style.scss</code>\uFF0C\u7C98\u8D34\u5B9A\u5236\u4EE3\u7801\uFF0C\u5982\uFF1A</p><p><code>my-style.scss</code> :</p><div class="language-Scss"><pre><code><span class="token property"><span class="token variable">$primary-color-2</span></span><span class="token punctuation">:</span> #c5c6d1<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color-5</span></span><span class="token punctuation">:</span> #6667ab<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color-6</span></span><span class="token punctuation">:</span> #4a4985<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color-7</span></span><span class="token punctuation">:</span> #312f5e<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> <span class="token variable">$primary-color-6</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$success-color-2</span></span><span class="token punctuation">:</span> #a3b6a6<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$success-color-5</span></span><span class="token punctuation">:</span> #3c9052<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$success-color-6</span></span><span class="token punctuation">:</span> #276a3b<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$success-color-7</span></span><span class="token punctuation">:</span> #154425<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$success-color</span></span><span class="token punctuation">:</span> <span class="token variable">$success-color-6</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warning-color-2</span></span><span class="token punctuation">:</span> #e1d9bf<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warning-color-5</span></span><span class="token punctuation">:</span> #bb9445<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warning-color-6</span></span><span class="token punctuation">:</span> #95702f<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warning-color-7</span></span><span class="token punctuation">:</span> #6e4e1e<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warning-color</span></span><span class="token punctuation">:</span> <span class="token variable">$warning-color-6</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger-color-2</span></span><span class="token punctuation">:</span> #d79996<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger-color-5</span></span><span class="token punctuation">:</span> #b1262d<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger-color-6</span></span><span class="token punctuation">:</span> #8b1721<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger-color-7</span></span><span class="token punctuation">:</span> #650c16<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger-color</span></span><span class="token punctuation">:</span> <span class="token variable">$danger-color-6</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u66F4\u6539\u539F\u6765\u5F15\u5165\u7684\u6837\u5F0F\u6587\u4EF6\uFF1A</p></li></ol><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> Vfox <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>

<span class="token comment">// delete: vfox/es/style/index.css</span>
<span class="token keyword">import</span> <span class="token string">&#39;path/to/my-style.scss&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vfox/es/style/index.scss&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vfox<span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u5B89\u88C5 scss \u4F9D\u8D56</li></ol><p><strong>Vite</strong> \u53EA\u9700\u8981\u9884\u88C5 sass \u9884\u5904\u7406\u5668\uFF0C\u5177\u4F53\u8BF7\u53C2\u9605 <a href="https://cn.vitejs.dev/guide/features.html#css-pre-processors" target="_blank" rel="noopener noreferrer">CSS Pre-processors</a>\u3002</p><div class="language-Shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -D sass
</code></pre></div><p><strong>Vue CLI</strong> \u8FD8\u9700\u8981\u76F8\u5E94\u7684 loader\uFF0C\u5177\u4F53\u8BF7\u53C2\u9605 <a href="https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8" target="_blank" rel="noopener noreferrer">\u9884\u5904\u7406\u5668</a>\u3002</p><div class="language-Shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -D sass-loader sass
</code></pre></div>`,10),e=[t];function c(l,r,i,u,k,d){return a(),n("div",null,e)}var b=s(o,[["render",c]]);export{v as __pageData,b as default};
