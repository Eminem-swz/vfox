import{_ as n,c as s,o as a,a as t}from"./app.d6348de1.js";const f='{"title":"\u5F15\u5165\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u52A8\u5F15\u5165","slug":"\u81EA\u52A8\u5F15\u5165"},{"level":2,"title":"\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6","slug":"\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6"},{"level":2,"title":"\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":2,"title":"API \u8C03\u7528","slug":"api-\u8C03\u7528"},{"level":2,"title":"TypeScript \u652F\u6301","slug":"typescript-\u652F\u6301"}],"relativePath":"guide/import.md","lastUpdated":1641636855782}',p={},o=t(`<h1 id="\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u81EA\u52A8\u5F15\u5165" tabindex="-1">\u81EA\u52A8\u5F15\u5165 <a class="header-anchor" href="#\u81EA\u52A8\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u5229\u7528 <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a> \u63D2\u4EF6\u7684\u81EA\u52A8\u626B\u7801\u53EF\u4EE5\u81EA\u52A8\u52A0\u8F7D\u7EC4\u4EF6\u4EE3\u7801\u548C\u6837\u5F0F\u6587\u4EF6\u3002</p><ol><li>\u5148\u5B89\u88C5\u63D2\u4EF6\uFF1A</li></ol><div class="language-"><pre><code>npm i unplugin-vue-components -D
</code></pre></div><ol start="2"><li>\u5B89\u88C5\u7EC4\u4EF6 Resolver\uFF1A</li></ol><div class="language-"><pre><code>npm i vfox-resolver -D
</code></pre></div><ol start="3"><li>\u914D\u7F6E config</li></ol><p><code>vite.config.js</code>:</p><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VfoxResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox-resolver&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VfoxResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Or <code>vue.config.js</code></p><div class="language-JavaScript"><pre><code><span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> VfoxResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vfox-resolver&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VfoxResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u73B0\u5728\u5C31\u53EF\u4EE5\u5728\u6A21\u7248\u4E2D\u5F15\u5165\u7EC4\u4EF6</li></ol><div class="language-HTML"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-button</span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728\u4E0D\u4F7F\u7528\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u624B\u52A8\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\u3002</p><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;vfox/es/Button&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vfox/es/Button/style&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> Vfox <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vfox/es/style/index.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vfox<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u5F15\u5165\u6240\u6709\u7EC4\u4EF6\u4F1A\u589E\u5927\u4EE3\u7801\u5305\u4F53\u79EF\uFF0C\u6BD5\u7ADF 99+\u7EC4\u4EF6\u4E86\uFF0C\u9664\u975E\u9879\u76EE\u5BF9\u5927\u5C0F\u8981\u6C42\u4E0D\u9AD8\u3002</p></blockquote><h2 id="api-\u8C03\u7528" tabindex="-1">API \u8C03\u7528 <a class="header-anchor" href="#api-\u8C03\u7528" aria-hidden="true">#</a></h2><p>API \u8C03\u7528\u9700\u8981\u5148\u5F15\u5165\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u65B9\u53EF\u8C03\u7528\uFF0C\u5F15\u7528\u65B9\u5F0F\u540C\u4E0A\u3002</p><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
<span class="token comment">// import Toast from &#39;vfox/es/Toast&#39;</span>
<span class="token comment">// import &#39;vfox/es/ButToastton/style&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Toast<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6210\u529F&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE6\u60C5\u53EF\u89C1 <a href="./../apis/Toast.html">API</a> \u3002</p><h2 id="typescript-\u652F\u6301" tabindex="-1">TypeScript \u652F\u6301 <a class="header-anchor" href="#typescript-\u652F\u6301" aria-hidden="true">#</a></h2><p>\u5728 <code>tsconfig.json</code> \u4E2D\u52A0\u5165\u83B7\u5F97 <code>template</code> \u7C7B\u578B\u63D0\u793A\uFF1A</p><div class="language-"><pre><code>{
  &quot;compilerOptions&quot;: {
    &quot;types&quot;: [&quot;vfox/global&quot;]
  }
}
</code></pre></div>`,27),e=[o];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{f as __pageData,v as default};
