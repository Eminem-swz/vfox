import{_ as n,c as a,o as s,a as t}from"./app.082b569a.js";const h='{"title":"\u9ED1\u6697\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"DarkMode","slug":"darkmode"}],"relativePath":"guide/dark.md","lastUpdated":1643041641362}',p={},e=t(`<h1 id="\u9ED1\u6697\u6A21\u5F0F" tabindex="-1">\u9ED1\u6697\u6A21\u5F0F <a class="header-anchor" href="#\u9ED1\u6697\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5E93\u5185\u7F6E\u9ED1\u6697\u4E3B\u9898\uFF0C\u5F80 <code>body</code> \u6807\u7B7E\u6DFB\u52A0\u5C5E\u6027\u5C31\u53EF\u4EE5\u4FBF\u6377\u7684\u5207\u6362\u3002</p><h2 id="darkmode" tabindex="-1">DarkMode <a class="header-anchor" href="#darkmode" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60F3\u8981\u5207\u6362\u5230\u9ED1\u6697\u6A21\u5F0F\uFF1A</p><div class="language-JavaScript"><pre><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;fx-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u6062\u590D\u660E\u4EAE\u6A21\u5F0F\uFF1A</p><div class="language-JavaScript"><pre><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;fx-theme&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u8981\u8DDF\u968F\u7CFB\u7EDF\u5207\u6362\uFF1A</p><div class="language-JavaScript"><pre><code><span class="token keyword">function</span> <span class="token function">setDark</span><span class="token punctuation">(</span><span class="token parameter">dark</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  dark <span class="token operator">?</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;fx-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;fx-theme&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mm <span class="token operator">=</span>
  window<span class="token punctuation">.</span>matchMedia <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">&#39;(prefers-color-scheme: dark)&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>mm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mm<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setDark</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>matches<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">setDark</span><span class="token punctuation">(</span>mm<span class="token punctuation">.</span>matches<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div>`,10),o=[e];function c(u,i,l,r,k,d){return s(),a("div",null,o)}var _=n(p,[["render",c]]);export{h as __pageData,_ as default};
