import{_ as t,c as e,o as i,a as d}from"./app.9d79263e.js";const u='{"title":"Sticky/StickyView/StickyViewItem \u7C98\u6027\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Sticky","slug":"sticky"},{"level":2,"title":"Sticky Props","slug":"sticky-props"},{"level":2,"title":"Sticky Slots","slug":"sticky-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"StickyView","slug":"stickyview"},{"level":2,"title":"StickyView Props","slug":"stickyview-props"},{"level":2,"title":"StickyView Events","slug":"stickyview-events"},{"level":2,"title":"StickyView Slots","slug":"stickyview-slots"},{"level":2,"title":"StickyViewItem Props","slug":"stickyviewitem-props"},{"level":2,"title":"StickyViewItem Slots","slug":"stickyviewitem-slots"}],"relativePath":"components/Sticky.md","lastUpdated":1640332880107}',s={},a=d(`<h1 id="sticky-stickyview-stickyviewitem-\u7C98\u6027\u5E03\u5C40" tabindex="-1">Sticky/StickyView/StickyViewItem \u7C98\u6027\u5E03\u5C40 <a class="header-anchor" href="#sticky-stickyview-stickyviewitem-\u7C98\u6027\u5E03\u5C40" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Sticky, StickyView, StickyViewItem } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="sticky" tabindex="-1">Sticky <a class="header-anchor" href="#sticky" aria-hidden="true">#</a></h2><p>\u7C98\u6027\u5BB9\u5668\u3002</p><h2 id="sticky-props" tabindex="-1">Sticky Props <a class="header-anchor" href="#sticky-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>contain-selector</td><td>string/element/document</td><td>document</td><td>\u5426</td><td>\u57FA\u4E8E\u54EA\u4E2A\u5BB9\u5668\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>offset-top</td><td>number/string</td><td>0</td><td>\u5426</td><td>\u6570\u503C\u9ED8\u8BA4\u662F px\uFF0C\u4E5F\u652F\u6301 vw/vh</td></tr><tr><td>offset-bottom</td><td>number/string</td><td>0</td><td>\u5426</td><td>\u6570\u503C\u9ED8\u8BA4\u662F px\uFF0C\u4E5F\u652F\u6301 vw/vh</td></tr></tbody></table><h2 id="sticky-slots" tabindex="-1">Sticky Slots <a class="header-anchor" href="#sticky-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-sticky&gt;
  \u81EA\u5B9A\u4E49\u5185\u5BB9
&lt;/fx-sticky&gt;
</code></pre></div><h2 id="stickyview" tabindex="-1">StickyView <a class="header-anchor" href="#stickyview" aria-hidden="true">#</a></h2><p>\u7C98\u6027\u5E03\u5C40\u3002</p><h2 id="stickyview-props" tabindex="-1">StickyView Props <a class="header-anchor" href="#stickyview-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:active-index</td><td>number</td><td>0</td><td>\u5426</td><td>\u5F53\u524D\u5E03\u5C40\u4E2D\u5C55\u73B0\u7684\u5B50\u9879 index</td></tr><tr><td>contain-selector</td><td>string/element/document</td><td>document</td><td>\u5426</td><td>\u57FA\u4E8E\u54EA\u4E2A\u5BB9\u5668\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>offset-top</td><td>number/string</td><td>0</td><td>\u5426</td><td>\u6570\u503C\u9ED8\u8BA4\u662F px\uFF0C\u4E5F\u652F\u6301 vw/vh</td></tr></tbody></table><h2 id="stickyview-events" tabindex="-1">StickyView Events <a class="header-anchor" href="#stickyview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u65F6\u89E6\u53D1</td><td>{ activeIndex } \u5F53\u524D\u9879\u7D22\u5F15</td></tr></tbody></table><h2 id="stickyview-slots" tabindex="-1">StickyView Slots <a class="header-anchor" href="#stickyview-slots" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Sticky.html#stickyviewitem-props">StickyViewItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-"><pre><code>&lt;fx-sticky-view&gt;
  &lt;fx-sticky-view-item name=&quot;Sticky 1&quot;&gt;
    &lt;div class=&quot;sticky-box-1&quot;&gt;&lt;/div&gt;
  &lt;/fx-sticky-view-item&gt;
  &lt;fx-sticky-view-item name=&quot;Sticky 1&quot;&gt;
    &lt;div class=&quot;sticky-box-1&quot;&gt;&lt;/div&gt;
  &lt;/fx-sticky-view-item&gt;
  &lt;fx-sticky-view-item name=&quot;Sticky 2&quot;&gt;
    &lt;div class=&quot;sticky-box-2&quot;&gt;&lt;/div&gt;
  &lt;/fx-sticky-view-item&gt;
  &lt;fx-sticky-view-item name=&quot;Sticky 3&quot;&gt;
    &lt;div class=&quot;sticky-box-3&quot;&gt;&lt;/div&gt;
  &lt;/fx-sticky-view-item&gt;
  &lt;fx-sticky-view-item name=&quot;Sticky 4&quot;&gt;
    &lt;div class=&quot;sticky-box-4&quot;&gt;&lt;/div&gt;
  &lt;/fx-sticky-view-item&gt;
&lt;/fx-sticky-view&gt;
</code></pre></div><h2 id="stickyviewitem-props" tabindex="-1">StickyViewItem Props <a class="header-anchor" href="#stickyviewitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u5206\u7EC4\u540D\uFF0C\u4E5F\u5E94\u7528\u4E8E\u5438\u9644</td></tr></tbody></table><h2 id="stickyviewitem-slots" tabindex="-1">StickyViewItem Slots <a class="header-anchor" href="#stickyviewitem-slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-sticky-view-item name=&quot;Sticky 1&quot;&gt;
  &lt;div class=&quot;sticky-box-1&quot;&gt;&lt;/div&gt;
&lt;/fx-sticky-view-item&gt;
</code></pre></div>`,24),c=[a];function r(l,o,h,n,y,k){return i(),e("div",null,c)}var p=t(s,[["render",r]]);export{u as __pageData,p as default};
