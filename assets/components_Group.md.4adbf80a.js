import{_ as a,c as t,o as n,a as s}from"./app.95b08e21.js";const g='{"title":"Group \u5206\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":3,"title":"\u53F3\u4E0A\u89D2\uFF08#header\uFF09","slug":"\u53F3\u4E0A\u89D2\uFF08-header\uFF09"}],"relativePath":"components/Group.md","lastUpdated":1643297645146}',p={},e=s(`<h1 id="group-\u5206\u7EC4" tabindex="-1">Group \u5206\u7EC4 <a class="header-anchor" href="#group-\u5206\u7EC4" aria-hidden="true">#</a></h1><p>\u5C06\u4E00\u7EC4\u540C\u7C7B\u522B\u7684\u7EC4\u4EF6\uFF08\u5982 <a href="./Cell.html">Cell</a> \uFF09\u653E\u5728\u4E00\u8D77\uFF0C\u5E76\u52A0\u5165\u5206\u7EC4\u6807\u9898\u3002</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Group <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u5206\u7EC4\u6807\u9898</td></tr><tr><td>strong-header</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F3A\u5316\u6807\u9898\u7684\u98CE\u683C</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u7840\u7528\u6CD5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-cell</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-cell</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-cell</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63CF\u8FF0\u4FE1\u606F<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-cell</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-group</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u53F3\u4E0A\u89D2\uFF08-header\uFF09" tabindex="-1">\u53F3\u4E0A\u89D2\uFF08#header\uFF09 <a class="header-anchor" href="#\u53F3\u4E0A\u89D2\uFF08-header\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u7840\u98CE\u683C<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span> \u53F3\u4FA7\u6587\u6848 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-group</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),o=[e];function l(c,u,r,i,d,k){return n(),t("div",null,o)}var f=a(p,[["render",l]]);export{g as __pageData,f as default};
