import{_ as t,c as e,o as a,a as l}from"./app.cafa4a5d.js";const v='{"title":"Collapse \u6298\u53E0\u9762\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Collapse Props","slug":"collapse-props"},{"level":2,"title":"Collapse Events","slug":"collapse-events"},{"level":2,"title":"Collapse Slots","slug":"collapse-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"CollapseItem \u6298\u53E0\u9762\u677F\u5B50\u9879","slug":"collapseitem-\u6298\u53E0\u9762\u677F\u5B50\u9879"},{"level":2,"title":"CollapseItem Props","slug":"collapseitem-props"},{"level":2,"title":"CollapseItem Events","slug":"collapseitem-events"}],"relativePath":"components/Collapse.md","lastUpdated":1636797248907}',d={},o=l(`__VP_STATIC_START__<h1 id="collapse-\u6298\u53E0\u9762\u677F" tabindex="-1">Collapse \u6298\u53E0\u9762\u677F <a class="header-anchor" href="#collapse-\u6298\u53E0\u9762\u677F" aria-hidden="true">#</a></h1><h2 id="collapse-props" tabindex="-1">Collapse Props <a class="header-anchor" href="#collapse-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:active-names</td><td>string[]</td><td>[]</td><td>\u5426</td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 <code>name</code> \u5217\u8868\uFF0C\u9700\u8981\u6BCF\u4E2A <code>CollapseItem</code> \u90FD\u8BBE\u7F6E\u4E0A <code>name</code></td></tr><tr><td>accordion</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td></tr></tbody></table><h2 id="collapse-events" tabindex="-1">Collapse Events <a class="header-anchor" href="#collapse-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td>activeNames: \u7C7B\u578B\u4E0E v-model:active-names \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4</td></tr></tbody></table><h2 id="collapse-slots" tabindex="-1">Collapse Slots <a class="header-anchor" href="#collapse-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Collapse.html#collapseitem-\u6298\u53E0\u9762\u677F\u5B50\u9879">CollapseItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-"><pre><code>&lt;fx-collapse&gt;
  &lt;fx-collapse-item title=&quot;\u6807\u98981&quot; name=&quot;row1&quot;&gt;
    &lt;div class=&quot;pad&quot;&gt;
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
    &lt;/div&gt;
  &lt;/fx-collapse-item&gt;
  &lt;fx-collapse-item title=&quot;\u6807\u98982&quot; name=&quot;row2&quot;&gt;
    &lt;div class=&quot;pad&quot;&gt;
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
    &lt;/div&gt;
  &lt;/fx-collapse-item&gt;
  &lt;fx-collapse-item title=&quot;\u6807\u98983&quot; name=&quot;row3&quot;&gt;
    &lt;div class=&quot;pad&quot;&gt;
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
    &lt;/div&gt;
  &lt;/fx-collapse-item&gt;
&lt;/fx-collapse&gt;
</code></pre></div><h2 id="collapseitem-\u6298\u53E0\u9762\u677F\u5B50\u9879" tabindex="-1">CollapseItem \u6298\u53E0\u9762\u677F\u5B50\u9879 <a class="header-anchor" href="#collapseitem-\u6298\u53E0\u9762\u677F\u5B50\u9879" aria-hidden="true">#</a></h2><h2 id="collapseitem-props" tabindex="-1">CollapseItem Props <a class="header-anchor" href="#collapseitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>&#39;&#39;</td><td>\u5426</td><td>\u9762\u677F\u5B50\u9879\u6807\u9898</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u9762\u677F\u5B50\u9879\u6807\u9898\u524D\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u552F\u4E00\u6807\u8BC6\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u914D\u5408 <code>v-model:active-names</code> \u4F7F\u7528</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table><h2 id="collapseitem-events" tabindex="-1">CollapseItem Events <a class="header-anchor" href="#collapseitem-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>toggle</td><td>\u9762\u677F\u5B50\u9879\u5C55\u5F00/\u6536\u8D77\u65F6\u89E6\u53D1</td><td>{spread: boolean}\uFF0C\u5176\u4E2D spread=true \u5C55\u5F00/spread=false \u6536\u8D77</td></tr></tbody></table>__VP_STATIC_END__`,14),s=[o];function r(h,n,i,c,p,m){return a(),e("div",null,s)}var f=t(d,[["render",r]]);export{v as __pageData,f as default};
