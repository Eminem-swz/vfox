import{_ as t,c as d,o as e,a}from"./app.8c4fff02.js";const g='{"title":"Badge \u5FBD\u6807\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"}],"relativePath":"components/Badge.md","lastUpdated":1642841591795}',r={},o=a(`<h1 id="badge-\u5FBD\u6807\u6570" tabindex="-1">Badge \u5FBD\u6807\u6570 <a class="header-anchor" href="#badge-\u5FBD\u6807\u6570" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u8FD9\u662F\u4E2A\u5305\u88F9\u7EC4\u4EF6\uFF0C\u9700\u8981 <code>slot</code> \u4E2D\u63D0\u4F9B\u88AB\u6302\u5728\u7684\u5185\u5BB9\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Badge } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>number | string</td><td>0</td><td>\u5426</td><td>\u6D88\u606F\u6761\u6570\u6216\u8005\u6587\u672C</td></tr><tr><td>max-count</td><td>number</td><td>99</td><td>\u5426</td><td>\u6700\u5927\u5B8C\u5168\u663E\u793A\u6D88\u606F\u6761\u6570</td></tr><tr><td>dot</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u4E3A\u5C0F\u7EA2\u70B9</td></tr><tr><td>show-zero</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u6D88\u606F\u6570\u4E3A 0 \u65F6\u662F\u5426\u663E\u793A</td></tr><tr><td>offset</td><td>number[]</td><td>[0, 0]</td><td>\u5426</td><td>\u504F\u79FB\u91CF\uFF0C\u683C\u5F0F\u4E3A [x, y]</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-badge :count=&quot;1&quot; show-zero&gt;
  &lt;fx-button&gt;badge&lt;/fx-button&gt;
&lt;/fx-badge&gt;
</code></pre></div>`,11),l=[o];function s(h,n,i,c,p,f){return e(),d("div",null,l)}var _=t(r,[["render",s]]);export{g as __pageData,_ as default};
