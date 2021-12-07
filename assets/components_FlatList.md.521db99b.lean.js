import{_ as t,c as e,o as d,a}from"./app.6fdd4400.js";const u='{"title":"FlatList \u56DE\u6536\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"recycle-change \u7684\u53C2\u6570","slug":"recycle-change-\u7684\u53C2\u6570"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5217\u8868\u9879\uFF08#default\uFF09","slug":"\u5217\u8868\u9879\uFF08-default\uFF09"},{"level":3,"title":"\u5217\u8868\u4E3A\u7A7A\uFF08#empty\uFF09","slug":"\u5217\u8868\u4E3A\u7A7A\uFF08-empty\uFF09"},{"level":3,"title":"\u5206\u5272\u7EBF\uFF08#separator\uFF09","slug":"\u5206\u5272\u7EBF\uFF08-separator\uFF09"},{"level":3,"title":"\u524D\u7F6E\uFF08#header\uFF09","slug":"\u524D\u7F6E\uFF08-header\uFF09"},{"level":3,"title":"\u540E\u7F6E\uFF08#footer\uFF09","slug":"\u540E\u7F6E\uFF08-footer\uFF09"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"scrollToIndex \u7684\u53C2\u6570","slug":"scrolltoindex-\u7684\u53C2\u6570"}],"relativePath":"components/FlatList.md","lastUpdated":1638869381465}',r={},l=a(`__VP_STATIC_START__<h1 id="flatlist-\u56DE\u6536\u5217\u8868" tabindex="-1">FlatList \u56DE\u6536\u5217\u8868 <a class="header-anchor" href="#flatlist-\u56DE\u6536\u5217\u8868" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u9700\u8981\u7ED9 <code>flat-list</code> \u4E00\u4E2A\u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u901A\u8FC7 CSS \u8BBE\u7F6E height\u3002</li><li>\u5982\u679C\u5217\u8868\u5185\u5BB9\u5B58\u5728\u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u7684\u56FE\u7247\uFF0C\u7531\u4E8E\u56FE\u7247\u52A0\u8F7D\u7684\u673A\u5236\uFF0C\u6BCF\u4E2A item \u7684 DOM \u6E32\u67D3\u4E86\uFF0C\u56FE\u7247\u53EF\u80FD\u8FD8\u672A\u52A0\u8F7D\uFF0C\u5BFC\u81F4\u6BCF\u4E2A item \u7684\u4F4D\u7F6E\u8BA1\u7B97\u9519\u8BEF\uFF0C\u6240\u4EE5\u4F5C\u4E3A\u8C03\u7528\u65B9\uFF0C\u9700\u8981\u5C06\u672A\u52A0\u8F7D\u7684\u56FE\u7247\u7528\u6837\u5F0F\u56FA\u5B9A\u4F4F\u3002\u5728\u5DF2\u77E5\u5BBD\u9AD8\u6BD4\uFF08\u6BD4\u5982\u5E38\u89C1\u7684\u6B63\u65B9\u5F62\u5546\u54C1\u56FE\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Image</code> \u7EC4\u4EF6\u5185\u7F6E <code>aspect-ratio</code> \u6765\u56FA\u5B9A\u56FE\u7247\u5BBD\u9AD8\u3002</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>any[]</td><td></td><td>\u662F</td><td>\u5217\u8868\u6570\u7EC4</td></tr><tr><td>data-key</td><td>string</td><td></td><td>\u5426</td><td>\u8868\u660E\u6BCF\u4E2A item \u9879\u7684\u8EAB\u4EFD\uFF08item[dataKey]\uFF09\uFF0C\u5982\u679C\u60F3\u6307\u5411\u81EA\u5DF1\uFF0C\u5219\u8BBE\u7F6E\u4E3A <code>*this</code> \u3002\u5EFA\u8BAE\u586B\u5199\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u4F7F\u7528 index \u4F5C\u4E3A\u8EAB\u4EFD\u6807\u8BC6</td></tr><tr><td>horizontal</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u8BBE\u7F6E\u4E3A true \u5219\u53D8\u4E3A\u6C34\u5E73\u5E03\u5C40\u6A21\u5F0F</td></tr><tr><td>get-item-size</td><td>Function</td><td></td><td>\u5426</td><td>\u52A8\u6001\u8FD4\u56DE\u5217\u8868\u9879\u5C3A\u5BF8\uFF08\u5782\u76F4\u5E03\u5C40\u4E0B\u6307\u9AD8\u5EA6\uFF0C\u6C34\u5E73\u5E03\u5C40\u4E0B\u6307\u5BBD\u5EA6\uFF09\uFF0C<code>getItemSize(item:any, index:number) =&gt; number</code>\uFF0Citem \u662F data[index] \u7684\u526F\u672C</td></tr><tr><td>item-size</td><td>number</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u5C3A\u5BF8\uFF0C\u4F18\u5148\u4F7F\u7528 <code>get-item-size</code></td></tr><tr><td>end-reached-threshold</td><td>number</td><td>0.5</td><td>\u5426</td><td>\u51B3\u5B9A\u5F53\u8DDD\u79BB\u5185\u5BB9\u6700\u5E95\u90E8\u8FD8\u6709\u591A\u8FDC\u65F6\u89E6\u53D1 onEndReached \u56DE\u8C03\u3002\u6CE8\u610F\u6B64\u53C2\u6570\u662F\u4E00\u4E2A\u6BD4\u503C\u800C\u975E\u50CF\u7D20\u5355\u4F4D\u3002\u6BD4\u5982\uFF0C0.5 \u8868\u793A\u8DDD\u79BB\u5185\u5BB9\u6700\u5E95\u90E8\u7684\u8DDD\u79BB\u4E3A\u5F53\u524D\u5217\u8868\u53EF\u89C1\u957F\u5EA6\u7684\u4E00\u534A\u65F6\u89E6\u53D1</td></tr><tr><td>enable-pull-refresh</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u4E0B\u62C9\u5237\uFF0C\u5982\u679C\u65F6\u6C34\u5E73\u5217\u8868\u5219\u4E3A\u5DE6\u62C9\u5237\u65B0\uFF0C\u642D\u914D <code>refreshing</code> \u4E8B\u4EF6\u4F7F\u7528\u65B0</td></tr><tr><td>lower-loading</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u5E95\u90E8\u52A0\u8F7D\u66F4\u591A\u72B6\u6001\uFF0C\u914D\u5408 <code>end-reached</code> \u4E8B\u4EF6\u52A0\u8F7D\u65E0\u65E0\u9650\u5217\u8868</td></tr><tr><td>initial-waterfall</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u7011\u5E03\u6D41\u5C55\u793A\u65B9\uFF0C\u4EC5\u521D\u59CB\u5316\u65F6\u751F\u6548\u5F0F</td></tr><tr><td>waterfall-col-count</td><td>number</td><td>2</td><td>\u5426</td><td>\u7011\u5E03\u6D41\u5217\u6570\uFF0C<code>initial-waterfall=true</code> \u65F6\u751F\u6548\uFF0C\u652F\u6301 2 ~ 5 \u5217</td></tr><tr><td>item-gutter</td><td>number/number[]</td><td>false</td><td>\u5426</td><td>\u9879\u95F4\u9694\uFF0C\u901A\u8FC7\u6570\u503C\u8BBE\u7F6E\u6C34\u5E73\u548C\u5782\u76F4\u95F4\u9694\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u7684\u5F62\u5F0F\u5206\u522B\u8BBE\u7F6E\u6C34\u5E73\u548C\u5782\u76F4\u95F4\u9694 [\u6C34\u5E73\u95F4\u9694, \u5782\u76F4\u95F4\u9694]\uFF0C<code>getItemSize</code> \u6216\u8005 <code>itemSize</code> \u8BBE\u5B9A\u503C\u9700\u8981\u628A <code>item-gutter</code> \u8003\u8651\u8FDB\u53BB</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>recycle-change</td><td>\u5217\u8868\u9879\u56DE\u6536\u53D8\u5316\u65F6\u89E6\u53D1</td><td>{ item, index, recycled }</td></tr><tr><td>end-reached</td><td>\u6EDA\u52A8\u5230\u672B\u5C3E\u65F6\u89E6\u53D1</td><td>{ distanceFromEnd } \u5176\u4E2D distanceFromEnd \u4E3A\u8DDD\u79BB\u672B\u5C3E\u7684\u8DDD\u79BB\uFF0C\u5355\u4F4D px</td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td>{ scrollLeft, scrollTop, scrollHeight, scrollWidth }</td></tr><tr><td>refreshing</td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td>({ pullDirection: string }, done: Function) \u5176\u4E2D pullDirection \u6307\u4E0B\u62C9\u7684\u65B9\u5411\uFF0Cdone \u6307\u5237\u65B0\u5B8C\u6BD5\u56DE\u8C03\u7684\u51FD\u6570</td></tr></tbody></table><h3 id="recycle-change-\u7684\u53C2\u6570" tabindex="-1">recycle-change \u7684\u53C2\u6570 <a class="header-anchor" href="#recycle-change-\u7684\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>recycled</td><td>boolean</td><td>\u662F\u5426\u88AB\u56DE\u6536</td></tr><tr><td>index</td><td>number</td><td>\u7B2C index \u9879</td></tr><tr><td>item</td><td>any</td><td>\u4F20\u5165 data[index]\u7684\u526F\u672C\uFF0C\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD prop data</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5217\u8868\u9879\uFF08-default\uFF09" tabindex="-1">\u5217\u8868\u9879\uFF08#default\uFF09 <a class="header-anchor" href="#\u5217\u8868\u9879\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-flat-list&gt;
 &lt;template #default=&quot;{ item, index }&quot;&gt;
  {{ index }} : {{ item }}
 &lt;/template&gt;
&lt;/fx-flat-list&gt;
</code></pre></div><h3 id="\u5217\u8868\u4E3A\u7A7A\uFF08-empty\uFF09" tabindex="-1">\u5217\u8868\u4E3A\u7A7A\uFF08#empty\uFF09 <a class="header-anchor" href="#\u5217\u8868\u4E3A\u7A7A\uFF08-empty\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-flat-list&gt;
  &lt;template #empty&gt;\u6682\u65E0\u6570\u636E&lt;/template&gt;
  ...
&lt;/fx-flat-list&gt;
</code></pre></div><h3 id="\u5206\u5272\u7EBF\uFF08-separator\uFF09" tabindex="-1">\u5206\u5272\u7EBF\uFF08#separator\uFF09 <a class="header-anchor" href="#\u5206\u5272\u7EBF\uFF08-separator\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-flat-list&gt;
  &lt;template #separator&gt;
    &lt;div class=&quot;line&quot;&gt;&lt;/div&gt;
  &lt;/template&gt;
&lt;/fx-flat-list&gt;
</code></pre></div><p>\u6CE8\uFF1A<code>getItemSize</code> \u6216\u8005 <code>itemSize</code> \u8BBE\u5B9A\u503C\u9700\u8981\u628A\u5206\u5272\u7EBF\u4E5F\u8003\u8651\u8FDB\u53BB\u3002</p><h3 id="\u524D\u7F6E\uFF08-header\uFF09" tabindex="-1">\u524D\u7F6E\uFF08#header\uFF09 <a class="header-anchor" href="#\u524D\u7F6E\uFF08-header\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-flat-list&gt;
  &lt;template #header&gt;&lt;/template&gt;
  ...
&lt;/fx-flat-list&gt;
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u4F20\u5165 <a href="./Icon.html">Icon</a>\uFF0C\u6BD4\u5982\u5E38\u89C1\u7684\u641C\u7D22\u3002</p><h3 id="\u540E\u7F6E\uFF08-footer\uFF09" tabindex="-1">\u540E\u7F6E\uFF08#footer\uFF09 <a class="header-anchor" href="#\u540E\u7F6E\uFF08-footer\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-flat-list&gt;
  ...
  &lt;template #footer&gt;\u6682\u65F6\u6CA1\u6709\u66F4\u591A\u4E86&lt;/template&gt;
&lt;/fx-flat-list&gt;
</code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollToIndex</td><td>\u5C06\u4F4D\u4E8E\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u7684\u6307\u5B9A\u4F4D\u7F6E</td><td>({ index: number, animated: boolean, viewPosition: string }) =&gt; void</td></tr><tr><td>scrollToOffset</td><td>\u6EDA\u52A8\u5217\u8868\u5230\u6307\u5B9A\u7684\u504F\u79FB\uFF0C\u5355\u4F4D px</td><td>({ offset: number, animated: boolean }) =&gt; void</td></tr><tr><td>scrollToEnd</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8</td><td>({ animated: boolean }) =&gt; void</td></tr><tr><td>recordInteraction</td><td>\u4E3B\u52A8\u901A\u77E5\u5217\u8868\u53D1\u751F\u4E86\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u4EE5\u4F7F\u5217\u8868\u91CD\u65B0\u8BA1\u7B97\u53EF\u89C6\u533A\u57DF</td><td>() =&gt; void</td></tr></tbody></table><h3 id="scrolltoindex-\u7684\u53C2\u6570" tabindex="-1">scrollToIndex \u7684\u53C2\u6570 <a class="header-anchor" href="#scrolltoindex-\u7684\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>index</td><td>number</td><td></td><td>\u662F</td><td>\u5217\u8868\u7B2C <code>index</code> \u9879\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u7684\u6307\u5B9A\u4F4D\u7F6E</td></tr><tr><td>animated</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u662F\u5426\u4F7F\u7528\u8FC7\u5EA6\u52A8\u753B</td></tr><tr><td>viewPosition</td><td>string</td><td>&#39;start&#39;</td><td>\u5426</td><td>&#39;start&#39;/&#39;center&#39;/&#39;end&#39;/0/0.5/1 \u663E\u793A\u5728\u5C4F\u5E55\u7684\u5934\u90E8/\u4E2D\u95F4/\u672B\u5C3E\u4F4D\u7F6E</td></tr></tbody></table>__VP_STATIC_END__`,26),o=[l];function i(n,h,s,c,f,g){return d(),e("div",null,o)}var m=t(r,[["render",i]]);export{u as __pageData,m as default};
