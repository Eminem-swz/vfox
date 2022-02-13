import{_ as t,c as a,o as s,a as n}from"./app.6b4e8d9e.js";const g='{"title":"Result \u7ED3\u679C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9644\u52A0\u5185\u5BB9\uFF08#default\uFF09","slug":"\u9644\u52A0\u5185\u5BB9\uFF08-default\uFF09"}],"relativePath":"components/Result.md","lastUpdated":1644766148477}',e={},d=n(`<h1 id="result-\u7ED3\u679C" tabindex="-1">Result \u7ED3\u679C <a class="header-anchor" href="#result-\u7ED3\u679C" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Result <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>&#39;info&#39;</td><td>\u5426</td><td>\u7C7B\u578B\uFF0C\u5BF9\u5E94\u4E0D\u540C\u7684\u63D0\u793A\u56FE\u6807\uFF0C\u53EF\u9009 &#39;info&#39;, &#39;warning&#39;, &#39;success&#39;, &#39;fail&#39;</td></tr><tr><td>title</td><td>string</td><td>&#39;&#39;</td><td>\u5426</td><td>\u6807\u9898</td></tr><tr><td>description</td><td>string</td><td>&#39;&#39;</td><td>\u5426</td><td>\u5C0F\u6807\u9898\uFF0C\u526F\u6807\u9898\uFF0C\u63CF\u8FF0</td></tr><tr><td>show-back</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u8FD4\u56DE\u6309\u94AE</td></tr><tr><td>confirm-text</td><td>string</td><td>&#39;\u786E\u5B9A&#39;</td><td>\u5426</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57</td></tr><tr><td>back-text</td><td>string</td><td>&#39;\u8FD4\u56DE&#39;</td><td>\u5426</td><td>\u8FD4\u56DE\u6309\u94AE\u7684\u6587\u5B57</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u8BA4\u6309\u94AE\u70B9\u51FB</td><td>e: Event</td></tr><tr><td>back</td><td>\u8FD4\u56DE\u6309\u94AE\u70B9\u51FB</td><td>e: Event</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9644\u52A0\u5185\u5BB9\uFF08-default\uFF09" tabindex="-1">\u9644\u52A0\u5185\u5BB9\uFF08#default\uFF09 <a class="header-anchor" href="#\u9644\u52A0\u5185\u5BB9\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-result</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fail<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u652F\u4ED8\u5931\u8D25<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u5728\u8FD9\u91CC\u53EF\u4EE5\u9644\u52A0\u7EC4\u4EF6\u5143\u7D20\u6216\u8005\u76F8\u5E94\u7684\u63D0\u793A\u6587\u6848\uFF0C\u6837\u5F0F\u81EA\u5B9A\u3002
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-result</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,11),p=[d];function o(l,r,c,u,i,h){return s(),a("div",null,p)}var f=t(e,[["render",o]]);export{g as __pageData,f as default};
