import{_ as t,c as d,o as e,a}from"./app.2d0a5a59.js";const v='{"title":"SideTab \u4FA7\u8FB9\u6807\u7B7E\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"options \u7684\u7ED3\u6784","slug":"options-\u7684\u7ED3\u6784"},{"level":2,"title":"CSS","slug":"css"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"change \u7684\u56DE\u8C03\u53C2\u6570","slug":"change-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/SideTab.md","lastUpdated":1638174346091}',r={},n=a(`__VP_STATIC_START__<h1 id="sidetab-\u4FA7\u8FB9\u6807\u7B7E\u680F" tabindex="-1">SideTab \u4FA7\u8FB9\u6807\u7B7E\u680F <a class="header-anchor" href="#sidetab-\u4FA7\u8FB9\u6807\u7B7E\u680F" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>options</td><td>object[]/string[]/number[]</td><td>[]</td><td>\u662F</td><td>tab \u6570\u636E\u96C6</td></tr><tr><td>v-model:active-value</td><td>string, number</td><td></td><td>\u5426</td><td>\u5F53\u524D\u6FC0\u6D3B\u9879\u7684 value \u503C</td></tr><tr><td>field-names</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value \u7684\u5B57\u6BB5 key</td></tr></tbody></table><h3 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>key</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string/number</td><td></td><td>\u662F</td><td>\u552F\u4E00\u503C\uFF08v-model:active-value \u4F7F\u7528\uFF09</td></tr><tr><td>label</td><td>string</td><td></td><td>\u662F</td><td>\u6807\u7B7E\u540D</td></tr><tr><td>icon</td><td>string/Component</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>activeIcon</td><td>string/Component</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u6FC0\u6D3B\u6001\u56FE\u6807\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u5219\u6CBF\u7528 <code>icon</code> \u5C5E\u6027\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>badge</td><td>string/number/object</td><td></td><td>\u5426</td><td>\u5FBD\u6807\uFF0C\u4F7F\u7528 <a href="./Badge.html">Badge</a> \u7EC4\u4EF6\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u57FA\u4E8E Badge props \u7684\u5BF9\u8C61</td></tr></tbody></table><div class="language-"><pre><code>[
  {
    value: 1,
    label: &#39;\u9996\u9875&#39;,
    icon: &#39;HomeOutlined&#39;,
    badge: &#39;\u70ED&#39;
  },
  {
    value: 2,
    label: &#39;\u641C\u7D22&#39;,
    icon: &#39;SearchOutlined&#39;,
    badge: {
      dot: true,
      content: 1
    }
  }
]
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u4E3A <code>string[]</code> \u6216 <code>number[]</code>\uFF0C\u5982\uFF1A</p><div class="language-"><pre><code>[&#39;aaa&#39;, &#39;bbb&#39;, &#39;ccc&#39;]
</code></pre></div><p>\u5C06\u88AB\u8F6C\u4E3A\uFF1A</p><div class="language-"><pre><code>[
  {
    value: &#39;aaa&#39;,
    label: &#39;aaa&#39;
  },
  {
    value: &#39;bbb&#39;,
    label: &#39;bbb&#39;
  }
  {
    value: &#39;ccc&#39;,
    label: &#39;ccc&#39;
  }
]
</code></pre></div><p>\u6CE8\uFF1A\u6CE8\u610F\u6570\u7EC4\u9879\u8981\u4FDD\u6301\u552F\u4E00\u6027\u3002</p><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--side-tab-active-color</td><td>#262626</td><td>\u6FC0\u6D3B\u8272</td></tr><tr><td>--side-tab-color</td><td>#595959</td><td>\u9ED8\u8BA4\u8272</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u70B9\u51FB\u5207\u6362 tab \u65F6\u89E6\u53D1</td><td>{ value, index }</td></tr></tbody></table><h3 id="change-\u7684\u56DE\u8C03\u53C2\u6570" tabindex="-1">change \u7684\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#change-\u7684\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>value</td><td>string/number</td><td>\u5F53\u524D\u6FC0\u6D3B\u9879\u7684 value \u503C</td></tr><tr><td>index</td><td>number</td><td>\u5F53\u524D\u6FC0\u6D3B\u9879\u7684\u7D22\u5F15\u503C</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>switchTo</td><td>\u5207\u6362\u5230\u6307\u5B9A Tab</td><td>(value: string/number) =&gt; void</td></tr><tr><td>switchToIndex</td><td>\u5207\u6362\u5230\u6307\u5B9A\u7D22\u5F15\u7684 Tab</td><td>(index: number) =&gt; void</td></tr></tbody></table>__VP_STATIC_END__`,19),h=[n];function o(l,i,s,c,b,u){return e(),d("div",null,h)}var g=t(r,[["render",o]]);export{v as __pageData,g as default};
