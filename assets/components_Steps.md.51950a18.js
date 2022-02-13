import{_ as a,c as t,o as s,a as n}from"./app.6b4e8d9e.js";const g='{"title":"Steps \u6B65\u9AA4\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Steps Props","slug":"steps-props"},{"level":2,"title":"Steps Slots","slug":"steps-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"Step Props","slug":"step-props"},{"level":2,"title":"Step Slots","slug":"step-slots"},{"level":3,"title":"\u5185\u5BB9\uFF08#default\uFF09","slug":"\u5185\u5BB9\uFF08-default\uFF09"},{"level":3,"title":"\u6807\u9898\uFF08#title\uFF09","slug":"\u6807\u9898\uFF08-title\uFF09"},{"level":3,"title":"\u6B65\u9AA4\u6807\uFF08#step\uFF09","slug":"\u6B65\u9AA4\u6807\uFF08-step\uFF09"}],"relativePath":"components/Steps.md","lastUpdated":1644765401401}',p={},e=n(`<h1 id="steps-\u6B65\u9AA4\u6761" tabindex="-1">Steps \u6B65\u9AA4\u6761 <a class="header-anchor" href="#steps-\u6B65\u9AA4\u6761" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Steps<span class="token punctuation">,</span> Step <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="steps-props" tabindex="-1">Steps Props <a class="header-anchor" href="#steps-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:active-index</td><td>number</td><td>0</td><td>\u5426</td><td>\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u7D22\u5F15\u503C</td></tr><tr><td>dot</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u5C0F\u70B9\u6837\u5F0F</td></tr></tbody></table><h2 id="steps-slots" tabindex="-1">Steps Slots <a class="header-anchor" href="#steps-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Steps.html#step-props">Step</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-steps</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6210\u529F\u83B7\u5F970.01\u5143\u6536\u76CA<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u641E\u534A\u5929\u5C31\u8FD9\u70B9\uFF1F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-step</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5341\u5929\u540E\u5230\u8D26<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0.01\u5143\u8FD8\u8981\u5341\u5929\u5230\u8D26\uFF1F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-step</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7231\u8981\u4E0D\u8981<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0D\u8981\u4E86\uFF0C\u6EDA\u3002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-step</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-steps</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="step-props" tabindex="-1">Step Props <a class="header-anchor" href="#step-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u6B65\u9AA4\u5B50\u9879\u6807\u9898</td></tr></tbody></table><h2 id="step-slots" tabindex="-1">Step Slots <a class="header-anchor" href="#step-slots" aria-hidden="true">#</a></h2><h3 id="\u5185\u5BB9\uFF08-default\uFF09" tabindex="-1">\u5185\u5BB9\uFF08#default\uFF09 <a class="header-anchor" href="#\u5185\u5BB9\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6807\u9898<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u81EA\u5B9A\u4E49\u5185\u5BB9
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-step</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u6807\u9898\uFF08-title\uFF09" tabindex="-1">\u6807\u9898\uFF08#title\uFF09 <a class="header-anchor" href="#\u6807\u9898\uFF08-title\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-step</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
  \u3010\u73E0\u6D77\u5E02\u3011\u3010\u73E0\u6D77\u4E00\u90E8\u3011\u5FEB\u9012\u5C0F\u54E5\u6B63\u5728\u6D3E\u4EF6\uFF08<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tel:10000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>10000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\uFF09
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  2021-04-13 11:22:16
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-step</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\uFF1A\u4F18\u5148\u7EA7\u9AD8\u4E8E Props <code>title</code>\u3002</p><h3 id="\u6B65\u9AA4\u6807\uFF08-step\uFF09" tabindex="-1">\u6B65\u9AA4\u6807\uFF08#step\uFF09 <a class="header-anchor" href="#\u6B65\u9AA4\u6807\uFF08-step\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-step</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ finish, index, active }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-icon</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>finish<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CheckOutlined<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-step</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\uFF1A\u53EA\u63A8\u8350\u5199\u5165 text \u548C <a href="./Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u5176\u4ED6\u5143\u7D20\u6216\u7EC4\u4EF6\u53EF\u80FD\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p>`,21),o=[e];function l(c,u,i,r,d,k){return s(),t("div",null,o)}var f=a(p,[["render",l]]);export{g as __pageData,f as default};
