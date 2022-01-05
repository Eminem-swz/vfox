import{_ as t,c as d,o as e,a as r}from"./app.9d79263e.js";const g='{"title":"ScrollView \u6EDA\u52A8\u533A","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":3,"title":"\u4E0B\u62C9\u6307\u793A\u5668\uFF08#indicator\uFF09","slug":"\u4E0B\u62C9\u6307\u793A\u5668\uFF08-indicator\uFF09"}],"relativePath":"components/ScrollView.md","lastUpdated":1640573246015}',l={},o=r(`<h1 id="scrollview-\u6EDA\u52A8\u533A" tabindex="-1">ScrollView \u6EDA\u52A8\u533A <a class="header-anchor" href="#scrollview-\u6EDA\u52A8\u533A" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u9700\u8981\u7ED9 <code>ScrollView</code> \u4E00\u4E2A\u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u901A\u8FC7 CSS \u8BBE\u7F6E height\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { ScrollView } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>scroll-x</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5141\u8BB8\u6A2A\u5411\u6EDA\u52A8</td></tr><tr><td>scroll-y</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5141\u8BB8\u7EB5\u5411\u6EDA\u52A8</td></tr><tr><td>upper-threshold</td><td>number/string</td><td>50</td><td>\u5426</td><td>\u8DDD\u9876\u90E8/\u5DE6\u8FB9\u591A\u8FDC\u65F6\uFF0C\u89E6\u53D1 <code>scroll-to-upper</code> \u4E8B\u4EF6</td></tr><tr><td>lower-threshold</td><td>number/string</td><td>50</td><td>\u5426</td><td>\u8DDD\u5E95\u90E8/\u53F3\u8FB9\u591A\u8FDC\u65F6\uFF0C\u89E6\u53D1 <code>scroll-to-lower</code> \u4E8B\u4EF6</td></tr><tr><td>scroll-top</td><td>number/string</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u7AD6\u5411\u6EDA\u52A8\u6761\u4F4D\u7F6E</td></tr><tr><td>scroll-left</td><td>number/string</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u6A2A\u5411\u6EDA\u52A8\u6761\u4F4D\u7F6E</td></tr><tr><td>scroll-animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5728\u8BBE\u7F6E\u6EDA\u52A8\u6761\u4F4D\u7F6E\u65F6\u4F7F\u7528\u52A8\u753B\u8FC7\u6E21</td></tr><tr><td>enable-pull-directions</td><td>string/string[]</td><td>[]</td><td>\u5426</td><td>\u5F00\u542F\u4E0B\u62C9\u5237\u65B0\uFF0C\u53EF\u4EE5\u540C\u65F6\u5F00\u542F\u591A\u4E2A\u65B9\u5411\uFF0C\u53EF\u9009\u503C\uFF1A&#39;up&#39;, &#39;down&#39;, &#39;left&#39;, &#39;right&#39;\uFF0C\u642D\u914D <code>refreshing</code> \u4E8B\u4EF6\u4F7F\u7528</td></tr><tr><td>pull-refresh-threshold</td><td>number</td><td>48</td><td>\u5426</td><td>\u8BBE\u7F6E\u4E0B\u62C9\u5237\u65B0\u9608\u503C\uFF0C\u81EA\u5B9A\u4E49 indicator slot \u65F6\u53EF\u4EE5\u914D\u5408\u4FEE\u6539</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll-to-upper</td><td>\u6EDA\u52A8\u5230\u9876\u90E8/\u5DE6\u8FB9\u65F6\u89E6\u53D1</td><td>{ direction: &#39;top&#39; | &#39;left&#39; }</td></tr><tr><td>scroll-to-lower</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8/\u53F3\u8FB9\u65F6\u89E6\u53D1</td><td>{ direction: &#39;bottom&#39; | &#39;right&#39; }</td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td>{ scrollLeft: number, scrollTop: number, scrollWidth: number, scrollHeight: number }</td></tr><tr><td>refreshing</td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td>({ pullDirection: &#39;up&#39; | &#39;right&#39; | &#39;down&#39; | &#39;left&#39; }, done: () =&gt;void)\uFF0C\u5176\u4E2D pullDirection \u6307\u4E0B\u62C9\u7684\u65B9\u5411\uFF0Cdone \u6307\u5237\u65B0\u5B8C\u6BD5\u56DE\u8C03\u7684\u51FD\u6570</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-scroll-view&gt;
  ...
&lt;/fx-scroll-view&gt;
</code></pre></div><h3 id="\u4E0B\u62C9\u6307\u793A\u5668\uFF08-indicator\uFF09" tabindex="-1">\u4E0B\u62C9\u6307\u793A\u5668\uFF08#indicator\uFF09 <a class="header-anchor" href="#\u4E0B\u62C9\u6307\u793A\u5668\uFF08-indicator\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-scroll-view&gt;
  &lt;template #indicator=&quot;slotProps&quot;&gt;
    \u65B9\u5411\uFF1A{{ slotProps.pullDirection }} \u72B6\u6001\uFF1A{{
      slotProps.pullRefreshState
    }}
  &lt;/template&gt;
&lt;/fx-scroll-view&gt;
</code></pre></div>`,15),a=[o];function i(s,n,c,h,p,u){return e(),d("div",null,a)}var b=t(l,[["render",i]]);export{g as __pageData,b as default};