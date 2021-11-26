import{_ as e,c as t,o as d,a as i}from"./app.2d0a5a59.js";const u='{"title":"IndexView \u7D22\u5F15\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"IndexView Props","slug":"indexview-props"},{"level":2,"title":"IndexView Events","slug":"indexview-events"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"IndexView Slots","slug":"indexview-slots"},{"level":2,"title":"IndexViewItem \u7D22\u5F15\u5B50\u9879","slug":"indexviewitem-\u7D22\u5F15\u5B50\u9879"},{"level":2,"title":"IndexViewItem Props","slug":"indexviewitem-props"},{"level":2,"title":"IndexViewItem Slots","slug":"indexviewitem-slots"}],"relativePath":"components/IndexView.md","lastUpdated":1637918371112}',a={},l=i(`__VP_STATIC_START__<h1 id="indexview-\u7D22\u5F15\u680F" tabindex="-1">IndexView \u7D22\u5F15\u680F <a class="header-anchor" href="#indexview-\u7D22\u5F15\u680F" aria-hidden="true">#</a></h1><h2 id="indexview-props" tabindex="-1">IndexView Props <a class="header-anchor" href="#indexview-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>sticky-offset-top</td><td>number/string</td><td>0</td><td>\u5426</td><td>\u6570\u503C\u9ED8\u8BA4\u662F px\uFF0C\u4E5F\u652F\u6301 vw/vh</td></tr></tbody></table><h2 id="indexview-events" tabindex="-1">IndexView Events <a class="header-anchor" href="#indexview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u65F6\u89E6\u53D1</td><td>{ activeIndex } \u5F53\u524D\u9879\u7D22\u5F15</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollToIndex</td><td>\u5C06\u4F4D\u4E8E\u6307\u5B9A\u4F4D\u7F6E\u7684 <code>IndexViewItem</code> \u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u7684\u6307\u5B9A\u4F4D\u7F6E</td><td>({ index: number }) =&gt; void</td></tr><tr><td>scrollToOffset</td><td>\u6EDA\u52A8\u5217\u8868\u5230\u6307\u5B9A\u7684\u504F\u79FB\uFF0C\u5355\u4F4D px</td><td>({ offset: number }) =&gt; void</td></tr></tbody></table><h2 id="indexview-slots" tabindex="-1">IndexView Slots <a class="header-anchor" href="#indexview-slots" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./IndexView.html#indexviewitem-\u7D22\u5F15\u5B50\u9879">IndexViewItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-"><pre><code>&lt;fx-index-view&gt;
  &lt;fx-index-view-item name=&quot;A&quot;&gt;
    &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot;&gt;&lt;/fx-cell&gt;
    &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot;&gt;&lt;/fx-cell&gt;
    &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot;&gt;&lt;/fx-cell&gt;
  &lt;/fx-index-view-item&gt;
  ...
&lt;/fx-index-view&gt;
</code></pre></div><h2 id="indexviewitem-\u7D22\u5F15\u5B50\u9879" tabindex="-1">IndexViewItem \u7D22\u5F15\u5B50\u9879 <a class="header-anchor" href="#indexviewitem-\u7D22\u5F15\u5B50\u9879" aria-hidden="true">#</a></h2><h2 id="indexviewitem-props" tabindex="-1">IndexViewItem Props <a class="header-anchor" href="#indexviewitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u5206\u7EC4\u540D\uFF0C\u4E5F\u5E94\u7528\u4E8E\u5438\u9644\u548C\u83DC\u5355</td></tr></tbody></table><h2 id="indexviewitem-slots" tabindex="-1">IndexViewItem Slots <a class="header-anchor" href="#indexviewitem-slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-index-view-item name=&quot;A&quot;&gt;
  &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot;&gt;&lt;/fx-cell&gt;
  &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot;&gt;&lt;/fx-cell&gt;
  &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot;&gt;&lt;/fx-cell&gt;
  ...
&lt;/fx-index-view-item&gt;
</code></pre></div>__VP_STATIC_END__`,15),n=[l];function h(r,o,s,x,c,v){return d(),t("div",null,n)}var f=e(a,[["render",h]]);export{u as __pageData,f as default};
