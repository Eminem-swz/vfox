import{_ as t,c as d,o as e,a}from"./app.1d4ac55e.js";const u='{"title":"PopMenu \u6C14\u6CE1\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"options \u7684\u7ED3\u6784","slug":"options-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":3,"title":"confirm \u56DE\u8C03\u53C2\u6570\u7ED3\u6784","slug":"confirm-\u56DE\u8C03\u53C2\u6570\u7ED3\u6784"}],"relativePath":"components/PopMenu.md","lastUpdated":1641534212231}',r={},o=a(`<h1 id="popmenu-\u6C14\u6CE1\u83DC\u5355" tabindex="-1">PopMenu \u6C14\u6CE1\u83DC\u5355 <a class="header-anchor" href="#popmenu-\u6C14\u6CE1\u83DC\u5355" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { PopMenu } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>selector</td><td>string/element</td><td></td><td>\u662F</td><td>\u4ECE\u54EA\u4E2A\u5143\u7D20\u5C55\u5F00\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>placement</td><td>string</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u5C55\u5F00\u4F4D\u7F6E\uFF0C\u53EF\u9009 &#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>show-mask</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u8499\u5C42\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E0D\u5C55\u793A\uFF0C\u6C14\u6CE1\u5219\u662F\u8DDF\u968F <code>selector</code> \u5BF9\u5E94\u7684\u5143\u7D20</td></tr><tr><td>options</td><td>array</td><td></td><td>\u5426</td><td>\u9009\u9879\u5217\u8868</td></tr></tbody></table><h3 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>options[index] \u503C</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u9009\u9879\u540D</td></tr><tr><td>disabled</td><td>string</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr></tbody></table><div class="language-"><pre><code>[
  {
    name: &#39;\u9009\u98791&#39;,
    disabled: false,
    icon: &#39;MenuOutlined&#39;
  }
]
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u8BA4\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>{item: {name: string}: index: number}</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./PopMenu.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h3 id="confirm-\u56DE\u8C03\u53C2\u6570\u7ED3\u6784" tabindex="-1">confirm \u56DE\u8C03\u53C2\u6570\u7ED3\u6784 <a class="header-anchor" href="#confirm-\u56DE\u8C03\u53C2\u6570\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>item</td><td>any</td><td>options[index] \u7684\u526F\u672C</td></tr><tr><td>index</td><td>number</td><td>\u7D22\u5F15</td></tr></tbody></table>`,15),i=[o];function n(h,s,l,c,p,b){return e(),d("div",null,i)}var f=t(r,[["render",n]]);export{u as __pageData,f as default};
