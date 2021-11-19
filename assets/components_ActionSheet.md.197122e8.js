import{_ as t,c as d,o as e,a}from"./app.8ec95c28.js";const _='{"title":"ActionSheet","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"options \u7684\u7ED3\u6784","slug":"options-\u7684\u7ED3\u6784"},{"level":2,"title":"CSS","slug":"css"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":3,"title":"confirm \u56DE\u8C03\u53C2\u6570\u7ED3\u6784","slug":"confirm-\u56DE\u8C03\u53C2\u6570\u7ED3\u6784"}],"relativePath":"components/ActionSheet.md","lastUpdated":1637313578558}',r={},h=a(`<h1 id="actionsheet" tabindex="-1">ActionSheet <a class="header-anchor" href="#actionsheet" aria-hidden="true">#</a></h1><p>\u52A8\u4F5C\u9762\u677F\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u9898\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u4E0D\u5C55\u793A\u6807\u9898\u680F</td></tr><tr><td>options</td><td>array</td><td></td><td>\u5426</td><td>\u9009\u9879\u5217\u8868</td></tr><tr><td>mask-closable</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u89E6\u53D1\u5173\u95ED\u64CD\u4F5C</td></tr><tr><td>show-cancel</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>cancel-text</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C</td></tr></tbody></table><h3 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>options[index] \u503C</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u5C55\u793A\u540D\u79F0</td></tr><tr><td>description</td><td>string</td><td></td><td>\u5426</td><td>\u9644\u52A0\u63CF\u8FF0</td></tr><tr><td>disabled</td><td>string</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>highlight</td><td>string</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u9AD8\u4EAE\u663E\u793A</td></tr></tbody></table><div class="language-"><pre><code>[
  {
    name: &#39;\u9009\u98791&#39;,
    disabled: false,
    description: &#39;\u9009\u9879\u63CF\u8FF0&#39;,
    highlight: false
  }
]
</code></pre></div><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--action-sheet-highlight-color</td><td>#ff4d4f</td><td>\u9AD8\u4EAE\u989C\u8272</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1</td><td>{item: {name: string}: index: number}</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./ActionSheet.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h3 id="confirm-\u56DE\u8C03\u53C2\u6570\u7ED3\u6784" tabindex="-1">confirm \u56DE\u8C03\u53C2\u6570\u7ED3\u6784 <a class="header-anchor" href="#confirm-\u56DE\u8C03\u53C2\u6570\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>item</td><td>any</td><td>options[index] \u7684\u526F\u672C</td></tr><tr><td>index</td><td>number</td><td>\u7D22\u5F15</td></tr></tbody></table>`,15),i=[h];function s(n,o,l,c,b,p){return e(),d("div",null,i)}var m=t(r,[["render",s]]);export{_ as __pageData,m as default};
