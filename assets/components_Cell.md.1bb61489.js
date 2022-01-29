import{_ as t,c as a,o as s,a as n}from"./app.95b08e21.js";const f='{"title":"Cell \u5355\u5143\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5185\u5BB9\u533A\uFF08#default\uFF09","slug":"\u5185\u5BB9\u533A\uFF08-default\uFF09"}],"relativePath":"components/Cell.md","lastUpdated":1643469744738}',e={},d=n(`<h1 id="cell-\u5355\u5143\u683C" tabindex="-1">Cell \u5355\u5143\u683C <a class="header-anchor" href="#cell-\u5355\u5143\u683C" aria-hidden="true">#</a></h1><p>\u5355\u5143\u683C\u4E3A\u5217\u8868\u4E2D\u7684\u5355\u4E2A\u5C55\u793A\u9879\u3002</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td>string</td><td></td><td>\u662F</td><td>\u5DE6\u4FA7\u6587\u5B57</td></tr><tr><td>description</td><td>string</td><td></td><td>\u5426</td><td>\u5DE6\u4FA7\u9644\u52A0\u63CF\u8FF0\u6587\u5B57</td></tr><tr><td>content</td><td>string</td><td></td><td>\u5426</td><td>\u53F3\u4FA7\u6587\u5B57</td></tr><tr><td>required</td><td>boolean</td><td>false</td><td>\u5426</td><td>true \u5728\u5DE6\u4FA7\u6587\u5B57\u8FB9\u4E0A\u4F1A\u5C55\u793A\u4E00\u4E2A \u7EA2\u8272<code>*</code>\u7BAD\u5934</td></tr><tr><td>clickable</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988\uFF0Cclickable=true \u6709\u70B9\u51FB\u6001\u548C\u7BAD\u5934</td></tr><tr><td>is-link</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td></tr><tr><td>arrow-direction</td><td>CellArrowDirection</td><td>&#39;right&#39;</td><td>\u5426</td><td>isLink=true \u65F6\u5C55\u793A\u7684\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\uFF1A&#39;right&#39;, &#39;up&#39;, &#39;down&#39;, &#39;left&#39;</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5185\u5BB9\u533A\uFF08-default\uFF09" tabindex="-1">\u5185\u5BB9\u533A\uFF08#default\uFF09 <a class="header-anchor" href="#\u5185\u5BB9\u533A\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-cell</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u53F3\u4FA7\u56FE\u6807<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CloseOutlined<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-icon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-cell</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\uFF1A\u6DFB\u52A0 slot \u540E <code>content</code> prop \u5C5E\u6027\u5931\u6548\u3002</p>`,11),o=[d];function l(p,r,c,i,u,h){return s(),a("div",null,o)}var g=t(e,[["render",l]]);export{f as __pageData,g as default};
