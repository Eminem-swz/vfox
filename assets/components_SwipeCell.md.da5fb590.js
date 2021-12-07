import{_ as t,c as e,o as d,a}from"./app.6fdd4400.js";const _='{"title":"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"buttons \u7684\u7ED3\u6784","slug":"buttons-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"button-click \u7684\u53C2\u6570","slug":"button-click-\u7684\u53C2\u6570"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u88AB\u6302\u8F7D\u5143\u7D20\uFF08#default\uFF09","slug":"\u88AB\u6302\u8F7D\u5143\u7D20\uFF08-default\uFF09"}],"relativePath":"components/SwipeCell.md","lastUpdated":1638869381465}',r={},l=a(`<h1 id="swipecell-\u6ED1\u52A8\u5355\u5143\u683C" tabindex="-1">SwipeCell \u6ED1\u52A8\u5355\u5143\u683C <a class="header-anchor" href="#swipecell-\u6ED1\u52A8\u5355\u5143\u683C" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>buttons</td><td>object[]</td><td></td><td>\u662F</td><td>\u6309\u94AE\u5217\u8868</td></tr></tbody></table><h3 id="buttons-\u7684\u7ED3\u6784" tabindex="-1">buttons \u7684\u7ED3\u6784 <a class="header-anchor" href="#buttons-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[
  {
    text: &#39;\u52A0\u5165\u6536\u85CF&#39;,
    type: &#39;warning&#39;
  },
  {
    text: &#39;\u5220\u9664&#39;,
    type: &#39;danger&#39;
  }
]
</code></pre></div><h4 id="buttons-\u9879\u4E2D-type-\u7684\u5408\u6CD5\u503C" tabindex="-1">buttons \u9879\u4E2D type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#buttons-\u9879\u4E2D-type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h4><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>primary</td><td>\u4E3B\u8981</td></tr><tr><td>default</td><td>\u6B21\u8981</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5371\u9669</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>button-click</td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1</td><td>{ item: object, index }</td></tr></tbody></table><h3 id="button-click-\u7684\u53C2\u6570" tabindex="-1">button-click \u7684\u53C2\u6570 <a class="header-anchor" href="#button-click-\u7684\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>index</td><td>number</td><td>\u7B2C index \u4E2A\u6309\u94AE</td></tr><tr><td>item</td><td>any</td><td>\u4F20\u5165 buttons[index]\u7684\u526F\u672C\uFF0C\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD prop buttons</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u88AB\u6302\u8F7D\u5143\u7D20\uFF08-default\uFF09" tabindex="-1">\u88AB\u6302\u8F7D\u5143\u7D20\uFF08#default\uFF09 <a class="header-anchor" href="#\u88AB\u6302\u8F7D\u5143\u7D20\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-swipe-cell :buttons=&quot;buttons&quot;&gt;
  &lt;fx-cell label=&quot;\u5355\u5143\u683C&quot; content=&quot;\u5411\u5DE6\u5212&quot;&gt;&lt;/fx-cell&gt;
&lt;/fx-swipe-cell&gt;
</code></pre></div>`,14),n=[l];function h(s,o,i,c,u,b){return d(),e("div",null,n)}var f=t(r,[["render",h]]);export{_ as __pageData,f as default};
