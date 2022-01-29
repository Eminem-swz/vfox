import{_ as a,c as n,o as s,a as e}from"./app.95b08e21.js";const h='{"title":"\u56FD\u9645\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"Locale","slug":"locale"}],"relativePath":"guide/locale.md","lastUpdated":1643471815193}',t={},p=e(`<h1 id="\u56FD\u9645\u5316" tabindex="-1">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5E93\u9ED8\u8BA4\u7684\u6587\u6848\u8BED\u8A00\u662F\u4E2D\u6587\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u76EE\u524D\u652F\u6301 <strong>\u4E2D\u6587</strong> \u548C <strong>\u82F1\u6587</strong>\u3002</p><h2 id="locale" tabindex="-1">Locale <a class="header-anchor" href="#locale" aria-hidden="true">#</a></h2><p>\u5148\u5F15\u5165 <code>Locale</code> \u6A21\u5757\uFF1A</p><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Locale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u4F7F\u7528\u82F1\u6587\uFF1A</p><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">&#39;vfox/es/Locale/lang/en-US&#39;</span>

Locale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span> enUS<span class="token punctuation">)</span>
</code></pre></div><p>\u5207\u6362\u56DE\u4E2D\u6587\uFF1A</p><div class="language-JavaScript"><pre><code>Locale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u5176\u4E2D\u7684\u90E8\u5206\u6587\u6848\u8FDB\u884C\u4FEE\u6539\uFF1A</p><div class="language-JavaScript"><pre><code>Locale<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pickerConfirmText</span><span class="token operator">:</span> <span class="token string">&#39;\u5B8C\u6210&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,12),o=[p];function c(l,r,i,d,u,k){return s(),n("div",null,o)}var g=a(t,[["render",c]]);export{h as __pageData,g as default};
