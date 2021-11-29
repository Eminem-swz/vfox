import{_ as t,c as d,o as e,a}from"./app.2d0a5a59.js";const p='{"title":"NavBar \u5BFC\u822A\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"right-buttons \u7684\u7ED3\u6784","slug":"right-buttons-\u7684\u7ED3\u6784"},{"level":2,"title":"CSS","slug":"css"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"right-button-click \u7684\u56DE\u8C03\u53C2\u6570","slug":"right-button-click-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#left\uFF09","slug":"\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-left\uFF09"},{"level":3,"title":"\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#right\uFF09","slug":"\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-right\uFF09"}],"relativePath":"components/NavBar.md","lastUpdated":1638174346091}',r={},h=a(`__VP_STATIC_START__<h1 id="navbar-\u5BFC\u822A\u680F" tabindex="-1">NavBar \u5BFC\u822A\u680F <a class="header-anchor" href="#navbar-\u5BFC\u822A\u680F" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>&#39;&#39;</td><td>\u5426</td><td>\u6807\u9898</td></tr><tr><td>show-back</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u8FD4\u56DE\u6309\u94AE</td></tr><tr><td>show-home</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u9996\u9875\u6309\u94AE</td></tr><tr><td>right-buttons</td><td>array</td><td>[]</td><td></td><td>\u53F3\u4FA7\u6309\u94AE\u5217\u8868</td></tr><tr><td>icon-only</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u7EAF\u56FE\u6807\u6309\u94AE</td></tr></tbody></table><h3 id="right-buttons-\u7684\u7ED3\u6784" tabindex="-1">right-buttons \u7684\u7ED3\u6784 <a class="header-anchor" href="#right-buttons-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[
  { icon: &#39;MenuOutlined&#39;, text: &#39;\u83DC\u5355&#39; }
]
</code></pre></div><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--nav-bar-height</td><td>52px</td><td>\u5BFC\u822A\u9AD8\u5EA6</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>back-click</td><td>\u8FD4\u56DE\u6309\u94AE\u70B9\u51FB\u65F6\u51FA\u53D1</td><td></td></tr><tr><td>home-click</td><td>\u5230\u9996\u9875\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>title-click</td><td>\u6807\u9898\u53CC\u51FB\u65F6\u89E6\u53D1\uFF0C\u53EF\u914D\u5408\u505A\u53CC\u51FB\u8FD4\u56DE\u9876\u90E8</td><td></td></tr><tr><td>click</td><td>\u56DE\u5230\u9876\u90E8\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>right-button-click</td><td>\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>{index, text, icon}</td></tr></tbody></table><h3 id="right-button-click-\u7684\u56DE\u8C03\u53C2\u6570" tabindex="-1">right-button-click \u7684\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#right-button-click-\u7684\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>text</td><td>string</td><td>\u70B9\u51FB\u6309\u94AE\u7684\u6587\u672C</td></tr><tr><td>icon</td><td>string</td><td>\u70B9\u51FB\u6309\u94AE\u7684\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>index</td><td>number</td><td>\u70B9\u51FB\u6309\u94AE\u7684\u7D22\u5F15\u503C</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-left\uFF09" tabindex="-1">\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#left\uFF09 <a class="header-anchor" href="#\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-left\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-nav-bar
  title=&quot;\u6807\u9898&quot;
  :right-buttons=&quot;[{ icon: &#39;MenuOutlined&#39;, text: &#39;\u83DC\u5355&#39; }]&quot;
&gt;
  &lt;template #left&gt;Left Slot&lt;/template&gt;
&lt;/fx-nav-bar&gt;
</code></pre></div><h3 id="\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-right\uFF09" tabindex="-1">\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#right\uFF09 <a class="header-anchor" href="#\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-right\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-nav-bar title=&quot;\u6807\u9898&quot; :show-back=&quot;true&quot; :show-home=&quot;true&quot;&gt;
  &lt;template #right&gt;Right Slot&lt;/template&gt;
&lt;/fx-nav-bar&gt;
</code></pre></div>__VP_STATIC_END__`,16),l=[h];function i(n,o,s,c,u,b){return e(),d("div",null,l)}var v=t(r,[["render",i]]);export{p as __pageData,v as default};
