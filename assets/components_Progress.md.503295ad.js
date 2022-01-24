import{_ as t,c as e,o as r,a}from"./app.082b569a.js";const _='{"title":"Progress \u8FDB\u5EA6\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5185\u5BB9\u533A\uFF08#default\uFF09","slug":"\u5185\u5BB9\u533A\uFF08-default\uFF09"}],"relativePath":"components/Progress.md","lastUpdated":1643041641358}',d={},s=a(`<h1 id="progress-\u8FDB\u5EA6\u6761" tabindex="-1">Progress \u8FDB\u5EA6\u6761 <a class="header-anchor" href="#progress-\u8FDB\u5EA6\u6761" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Progress } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>percentage</td><td>string | number</td><td></td><td>\u662F</td><td>\u767E\u5206\u6BD4\uFF0C\u4F8B\u5982\uFF1A50</td></tr><tr><td>show-text</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u6587\u5B57</td></tr><tr><td>fixed-bar</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u56FA\u5B9A\u8FDB\u5EA6\u6761\u5BBD\u5EA6\uFF0C\u914D\u5408 <code>show-text=true</code> \u4F7F\u7528\uFF0C\u9632\u6B62\u7531\u4E8E\u6587\u5B57 5% \u548C 100% \u5BBD\u5EA6\u4E0D\u4E00\u6837\u5BFC\u81F4\u8FDB\u5EA6\u6761\u957F\u77ED\u4E0D\u4E00</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5185\u5BB9\u533A\uFF08-default\uFF09" tabindex="-1">\u5185\u5BB9\u533A\uFF08#default\uFF09 <a class="header-anchor" href="#\u5185\u5BB9\u533A\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-progress :percentage=&quot;5&quot;&gt;
  &lt;template #default=&quot;{ progress }&quot;&gt; \u5DF2\u62A2{{ progress }} &lt;/template&gt;
&lt;/fx-progress&gt;
</code></pre></div><p>\u6CE8\uFF1A\u6DFB\u52A0 slot \u540E <code>show-text</code> prop \u5C5E\u6027\u5931\u6548\u3002</p>`,10),o=[s];function l(h,p,i,n,c,u){return r(),e("div",null,o)}var f=t(d,[["render",l]]);export{_ as __pageData,f as default};
