import{_ as t,c as d,o as e,a}from"./app.96fdaeb7.js";const _='{"title":"PopDialog \u6C14\u6CE1\u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"}],"relativePath":"components/PopDialog.md","lastUpdated":1639147310319}',r={},o=a(`<h1 id="popdialog-\u6C14\u6CE1\u5BF9\u8BDD\u6846" tabindex="-1">PopDialog \u6C14\u6CE1\u5BF9\u8BDD\u6846 <a class="header-anchor" href="#popdialog-\u6C14\u6CE1\u5BF9\u8BDD\u6846" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { PopDialog } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>selector</td><td>string/element</td><td></td><td>\u662F</td><td>\u4ECE\u54EA\u4E2A\u5143\u7D20\u5C55\u5F00\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>placement</td><td>string</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u5C55\u5F00\u4F4D\u7F6E\uFF0C\u53EF\u9009 &#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>show-mask</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u8499\u5C42\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E0D\u5C55\u793A\uFF0C\u6C14\u6CE1\u5219\u662F\u8DDF\u968F <code>selector</code> \u5BF9\u5E94\u7684\u5143\u7D20</td></tr><tr><td>content</td><td>string</td><td></td><td>\u662F</td><td>\u6587\u672C\u5185\u5BB9</td></tr><tr><td>show-cancel</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>cancel-text</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C</td></tr><tr><td>confirm-text</td><td>string</td><td>&#39;\u786E\u5B9A&#39;</td><td>\u5426</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u6587\u672C</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>{ confirm: false, cancel: true }</td></tr><tr><td>confirm</td><td>\u786E\u8BA4\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>{ confirm: true, cancel: false }</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./PopDialog.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table>`,10),i=[o];function s(l,h,n,c,p,b){return e(),d("div",null,i)}var f=t(r,[["render",s]]);export{_ as __pageData,f as default};
