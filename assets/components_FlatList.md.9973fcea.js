import{_ as t,c as a,o as s,a as n}from"./app.6b4e8d9e.js";const k='{"title":"FlatList \u56DE\u6536\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"visible-items-change \u7684 items \u53C2\u6570","slug":"visible-items-change-\u7684-items-\u53C2\u6570"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5217\u8868\u9879\uFF08#default\uFF09","slug":"\u5217\u8868\u9879\uFF08-default\uFF09"},{"level":3,"title":"\u5217\u8868\u4E3A\u7A7A\uFF08#empty\uFF09","slug":"\u5217\u8868\u4E3A\u7A7A\uFF08-empty\uFF09"},{"level":3,"title":"\u5206\u5272\u7EBF\uFF08#separator\uFF09","slug":"\u5206\u5272\u7EBF\uFF08-separator\uFF09"},{"level":3,"title":"\u524D\u7F6E\uFF08#header\uFF09","slug":"\u524D\u7F6E\uFF08-header\uFF09"},{"level":3,"title":"\u540E\u7F6E\uFF08#footer\uFF09","slug":"\u540E\u7F6E\uFF08-footer\uFF09"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"scrollToIndex \u7684\u53C2\u6570","slug":"scrolltoindex-\u7684\u53C2\u6570"}],"relativePath":"components/FlatList.md","lastUpdated":1644767210112}',e={},d=n(`<h1 id="flatlist-\u56DE\u6536\u5217\u8868" tabindex="-1">FlatList \u56DE\u6536\u5217\u8868 <a class="header-anchor" href="#flatlist-\u56DE\u6536\u5217\u8868" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u9700\u8981\u7ED9 <code>flat-list</code> \u4E00\u4E2A\u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u901A\u8FC7 CSS \u8BBE\u7F6E height\u3002</li><li>\u5982\u679C\u5217\u8868\u5185\u5BB9\u5B58\u5728\u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u7684\u56FE\u7247\uFF0C\u7531\u4E8E\u56FE\u7247\u52A0\u8F7D\u7684\u673A\u5236\uFF0C\u6BCF\u4E2A item \u7684 DOM \u6E32\u67D3\u4E86\uFF0C\u56FE\u7247\u53EF\u80FD\u8FD8\u672A\u52A0\u8F7D\uFF0C\u5BFC\u81F4\u6BCF\u4E2A item \u7684\u4F4D\u7F6E\u8BA1\u7B97\u9519\u8BEF\uFF0C\u6240\u4EE5\u4F5C\u4E3A\u8C03\u7528\u65B9\uFF0C\u9700\u8981\u5C06\u672A\u52A0\u8F7D\u7684\u56FE\u7247\u7528\u6837\u5F0F\u56FA\u5B9A\u4F4F\u3002\u5728\u5DF2\u77E5\u5BBD\u9AD8\u6BD4\uFF08\u6BD4\u5982\u5E38\u89C1\u7684\u6B63\u65B9\u5F62\u5546\u54C1\u56FE\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Image</code> \u7EC4\u4EF6\u5185\u7F6E <code>aspect-ratio</code> \u6765\u56FA\u5B9A\u56FE\u7247\u5BBD\u9AD8\u3002</li><li>\u8BE5\u7EC4\u4EF6\u4F7F\u7528\u7684\u662F Virtual List \u865A\u62DF\u5217\u8868\u6280\u672F\uFF0C\u5C06\u6E32\u67D3\u7684\u6570\u636E\u63A7\u5236\u5728\u4E00\u5B9A\u8303\u56F4\u5185\uFF0C\u5728\u6D77\u91CF\u6570\u636E\u6EDA\u52A8\u4E2D\u8FBE\u5230\u66F4\u597D\u7684\u6027\u80FD\u548C\u4F53\u9A8C\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FlatList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>any[]</td><td></td><td>\u662F</td><td>\u5217\u8868\u6570\u7EC4</td></tr><tr><td>data-key</td><td>string</td><td>&#39;id&#39;</td><td>\u5426</td><td>\u8868\u660E\u6BCF\u4E2A item \u9879\u7684\u8EAB\u4EFD\uFF08data[index][datakey]\uFF09\uFF0C\u4E3A\u4E86\u63D0\u5347\u6E32\u67D3\u6027\u80FD\uFF0C\u5217\u8868\u6570\u7EC4\u5FC5\u987B\u6709\u552F\u4E00 key</td></tr><tr><td>horizontal</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u8BBE\u7F6E\u4E3A true \u5219\u53D8\u4E3A\u6C34\u5E73\u5E03\u5C40\u6A21\u5F0F</td></tr><tr><td>get-item-size</td><td>(index: number) =&gt; number</td><td></td><td>\u5426</td><td>\u52A8\u6001\u8FD4\u56DE\u5217\u8868\u9879\u5C3A\u5BF8\uFF08\u5782\u76F4\u5E03\u5C40\u4E0B\u6307\u9AD8\u5EA6\uFF0C\u6C34\u5E73\u5E03\u5C40\u4E0B\u6307\u5BBD\u5EA6\uFF09\uFF0C\u63A8\u8350\u8BBE\u7F6E\uFF0C\u63D0\u5347\u6027\u80FD</td></tr><tr><td>item-size</td><td>number</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u56FA\u5B9A\u5C3A\u5BF8\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E <code>get-item-size</code></td></tr><tr><td>end-reached-threshold</td><td>number</td><td>0.5</td><td>\u5426</td><td>\u51B3\u5B9A\u5F53\u8DDD\u79BB\u5185\u5BB9\u6700\u5E95\u90E8\u8FD8\u6709\u591A\u8FDC\u65F6\u89E6\u53D1 onEndReached \u56DE\u8C03\u3002\u6CE8\u610F\u6B64\u53C2\u6570\u662F\u4E00\u4E2A\u6BD4\u503C\u800C\u975E\u50CF\u7D20\u5355\u4F4D\u3002\u6BD4\u5982\uFF0C0.5 \u8868\u793A\u8DDD\u79BB\u5185\u5BB9\u6700\u5E95\u90E8\u7684\u8DDD\u79BB\u4E3A\u5F53\u524D\u5217\u8868\u53EF\u89C1\u957F\u5EA6\u7684 50%\u65F6\u89E6\u53D1</td></tr><tr><td>enable-pull-refresh</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u4E0B\u62C9\u5237\uFF0C\u5982\u679C\u65F6\u6C34\u5E73\u5217\u8868\u5219\u4E3A\u5DE6\u62C9\u5237\u65B0\uFF0C\u642D\u914D <code>refreshing</code> \u4E8B\u4EF6\u4F7F\u7528\u65B0</td></tr><tr><td>lower-loading</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F00\u542F\u540E\u4F1A\u5728\u5217\u8868\u6700\u540E\u5C55\u793A\u52A0\u8F7D\u66F4\u591A\u6548\u679C\uFF0C\u914D\u5408 <code>end-reached</code> \u4E8B\u4EF6\u52A0\u8F7D\u65E0\u9650\u5217\uFF0C\u5F53\u591A\u6B21\u52A0\u8F7D\u5B8C\u6240\u6709\u6570\u636E\u540E\u8BBE\u7F6E\u4E3A false \u5173\u95ED</td></tr><tr><td>initial-waterfall</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u7011\u5E03\u6D41\u5C55\u793A\u65B9\uFF0C\u4EC5\u521D\u59CB\u5316\u65F6\u751F\u6548\u5F0F</td></tr><tr><td>waterfall-col-count</td><td>number</td><td>2</td><td>\u5426</td><td>\u7011\u5E03\u6D41\u5217\u6570\uFF0C<code>initial-waterfall=true</code> \u65F6\u751F\u6548\uFF0C\u652F\u6301 2 ~ 5 \u5217</td></tr><tr><td>approved-item-visible-scale</td><td>number</td><td>0.5</td><td>\u5426</td><td>\u53EF\u9009 0-1\uFF0C \u4E3B\u8981\u662F\u914D\u5408 <code>visible-items-change</code> \u4E8B\u4EF6\u4F7F\u7528\uFF0C0.5 \u8868\u793A\u6BCF\u9879\u9700\u8981\u5C55\u793A\u8D85\u8FC7\u81EA\u8EAB 50%\u624D\u8BA4\u4E3A\u662F\u53EF\u89C6 visible=true\uFF0C\u5728\u4E00\u4E9B\u6570\u6570\u636E\u7EDF\u8BA1\u548C\u5C55\u793A\u89E6\u53D1\u884C\u4E3A\u5E38\u7528</td></tr><tr><td>preLoad</td><td>number</td><td>1.5</td><td>\u5426</td><td>\u9884\u52A0\u8F7D\u5C4F\u6570\uFF0C1.5 \u6807\u8BC6\u5728\u5728\u53EF\u89C6\u7A97\u53E3\u4E4B\u5916\u518D\u9884\u52A0\u8F7D\u5927\u4E8E 1.5 \u4E2A\u7A97\u53E3\u7684\u6570\u636E\uFF0C\u9632\u6B62\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u767D\u5C4F\u3002\u9884\u52A0\u8F7D\u7684\u5C4F\u6570\u8BBE\u7F6E\u8D8A\u9AD8\uFF0C\u52A0\u8F7D\u7684\u6570\u636E\u8D8A\u591A\uFF0C\u9AD8\u901F\u6EDA\u52A8\u4EA7\u751F\u767D\u5C4F\u7684\u51E0\u7387\u8D8A\u5C0F\uFF0C\u4F46\u662F\u76F8\u5E94\u6027\u80FD\u6D88\u8017\u66F4\u5927</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>visible-items-change</td><td>\u5217\u8868\u9879\u53EF\u89C6\u60C5\u51B5\u53D8\u5316\u65F6\u89E6\u53D1</td><td>payload: { items: { index: number, visible: boolean }[] }</td><td>FlatListOnVisibleItemsChange</td></tr><tr><td>end-reached</td><td>\u6EDA\u52A8\u5230\u672B\u5C3E\u65F6\u89E6\u53D1</td><td>payload: { distanceFromEnd: number } \u5176\u4E2D distanceFromEnd \u4E3A\u8DDD\u79BB\u672B\u5C3E\u7684\u8DDD\u79BB\uFF0C\u5355\u4F4D px</td><td>FlatListOnEndReached</td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td>payload: { scrollLeft: number, scrollTop: number, scrollWidth: number, scrollHeight: number }</td><td>FlatListOnScroll</td></tr><tr><td>refreshing</td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td>payload: ({ pullDirection: &#39;up&#39; | &#39;right&#39; | &#39;down&#39; | &#39;left&#39; }, done: () =&gt;void) \u5176\u4E2D pullDirection \u6307\u4E0B\u62C9\u7684\u65B9\u5411\uFF0Cdone \u6307\u5237\u65B0\u5B8C\u6BD5\u56DE\u8C03\u7684\u51FD\u6570</td><td>FlatListOnRefreshing</td></tr></tbody></table><h3 id="visible-items-change-\u7684-items-\u53C2\u6570" tabindex="-1">visible-items-change \u7684 items \u53C2\u6570 <a class="header-anchor" href="#visible-items-change-\u7684-items-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>item</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>visible</td><td>boolean</td><td>\u8FD9\u91CC\u7684\u53EF\u89C6\u60C5\u51B5\u53D7\u5230 <code>approved-item-visible-scale</code> \u5B57\u6BB5\u5F71\u54CD\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5B83\u6765\u8FBE\u5230\u4F60\u8BA4\u53EF\u7684\u53EF\u89C6\u60C5\u51B5</td></tr><tr><td>index</td><td>number</td><td>\u7B2C index \u9879</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5217\u8868\u9879\uFF08-default\uFF09" tabindex="-1">\u5217\u8868\u9879\uFF08#default\uFF09 <a class="header-anchor" href="#\u5217\u8868\u9879\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item, index }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ index }} : {{ item }}
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5217\u8868\u4E3A\u7A7A\uFF08-empty\uFF09" tabindex="-1">\u5217\u8868\u4E3A\u7A7A\uFF08#empty\uFF09 <a class="header-anchor" href="#\u5217\u8868\u4E3A\u7A7A\uFF08-empty\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#empty</span><span class="token punctuation">&gt;</span></span>\u6682\u65E0\u6570\u636E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5206\u5272\u7EBF\uFF08-separator\uFF09" tabindex="-1">\u5206\u5272\u7EBF\uFF08#separator\uFF09 <a class="header-anchor" href="#\u5206\u5272\u7EBF\uFF08-separator\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#separator</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\uFF1A<code>getItemSize</code> \u6216\u8005 <code>itemSize</code> \u8BBE\u5B9A\u503C\u9700\u8981\u628A\u5206\u5272\u7EBF\u4E5F\u8003\u8651\u8FDB\u53BB\u3002</p><h3 id="\u524D\u7F6E\uFF08-header\uFF09" tabindex="-1">\u524D\u7F6E\uFF08#header\uFF09 <a class="header-anchor" href="#\u524D\u7F6E\uFF08-header\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u4F20\u5165 <a href="./Icon.html">Icon</a>\uFF0C\u6BD4\u5982\u5E38\u89C1\u7684\u641C\u7D22\u3002</p><h3 id="\u540E\u7F6E\uFF08-footer\uFF09" tabindex="-1">\u540E\u7F6E\uFF08#footer\uFF09 <a class="header-anchor" href="#\u540E\u7F6E\uFF08-footer\uFF09" aria-hidden="true">#</a></h3><p>\u5E38\u89C1\u7684\u65B9\u5F0F\u662F\u53EF\u4EE5\u901A\u8FC7 footer \u63D2\u69FD\u6765\u5B9A\u4E49\u5E95\u90E8\u6548\u679C\uFF0C\u66FF\u4EE3\u9ED8\u8BA4\u7684 <code>lowerLoading</code> \u6765\u5B9E\u73B0\u65E0\u9650\u6EDA\u52A8\u7684\u52A0\u8F7D\u6548\u679C\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>\u6682\u65F6\u6CA1\u6709\u66F4\u591A\u4E86<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-flat-list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollToIndex</td><td>\u5C06\u4F4D\u4E8E\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u7684\u6307\u5B9A\u4F4D\u7F6E</td><td>({ index: number, animated: boolean, viewPosition: ViewPosition }) =&gt; void</td></tr><tr><td>scrollTo</td><td>\u6EDA\u52A8\u5217\u8868\u5230\u6307\u5B9A\u7684\u504F\u79FB\uFF0C\u5355\u4F4D px</td><td>({ offset: number, animated: boolean }) =&gt; void</td></tr><tr><td>scrollToEnd</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8</td><td>( animated: boolean ) =&gt; void</td></tr><tr><td>recordInteraction</td><td>\u4E3B\u52A8\u901A\u77E5\u5217\u8868\u53D1\u751F\u4E86\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u4EE5\u4F7F\u5217\u8868\u91CD\u65B0\u8BA1\u7B97\u53EF\u89C6\u533A\u57DF</td><td>() =&gt; void</td></tr></tbody></table><h3 id="scrolltoindex-\u7684\u53C2\u6570" tabindex="-1">scrollToIndex \u7684\u53C2\u6570 <a class="header-anchor" href="#scrolltoindex-\u7684\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>index</td><td>number</td><td></td><td>\u662F</td><td>\u5217\u8868\u7B2C <code>index</code> \u9879\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u7684\u6307\u5B9A\u4F4D\u7F6E</td></tr><tr><td>animated</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u662F\u5426\u4F7F\u7528\u8FC7\u5EA6\u52A8\u753B</td></tr><tr><td>viewPosition</td><td>string</td><td>&#39;start&#39;</td><td>\u5426</td><td>&#39;start&#39;/&#39;center&#39;/&#39;end&#39;/0/0.5/1 \u663E\u793A\u5728\u5C4F\u5E55\u7684\u5934\u90E8/\u4E2D\u95F4/\u672B\u5C3E\u4F4D\u7F6E</td></tr></tbody></table>`,30),l=[d];function o(p,i,c,r,u,h){return s(),a("div",null,l)}var m=t(e,[["render",o]]);export{k as __pageData,m as default};
