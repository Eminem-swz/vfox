import{_ as t,c as d,o as e,a}from"./app.6fdd4400.js";const f='{"title":"Notify \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"type \u7684\u5408\u6CD5\u503C","slug":"type-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"}],"relativePath":"components/Notify.md","lastUpdated":1638869381465}',r={},i=a('<h1 id="notify-\u6D88\u606F\u63D0\u793A" tabindex="-1">Notify \u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#notify-\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>closable</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>type</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u63D0\u793A\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\uFF1A&#39;primary&#39;, &#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;</td></tr><tr><td>duration</td><td>number</td><td>0</td><td>\u5426</td><td>visible=true \u5C55\u793A\u540E\uFF0Cduration \u6BEB\u79D2\u540E\u6D88\u5931\uFF0C0 \u4E3A\u4E0D\u6D88\u5931\uFF0C\u5728 <code>v-model:visible</code> \u4E0B\u751F\u6548</td></tr><tr><td>backgroundColor</td><td>string</td><td></td><td>\u5426</td><td>\u6307\u5B9A\u80CC\u666F\u989C\u8272\uFF0C\u4F1A\u8986\u76D6 type \u7684\u989C\u8272</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u6307\u5B9A\u524D\u666F\u989C\u8272\u989C\u8272\uFF08\u542B\u5B57\u4F53\uFF0C\u56FE\u6807\uFF09\uFF0C\u4F1A\u8986\u76D6 type \u7684\u989C\u8272</td></tr></tbody></table><h3 id="type-\u7684\u5408\u6CD5\u503C" tabindex="-1">type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>primary</td><td>\u63D0\u793A</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5F3A\u70C8\u8B66\u544A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>close-click</td><td>\u5173\u95ED\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>{}</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./Notify.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table>',9),s=[i];function h(l,o,n,c,b,p){return e(),d("div",null,s)}var y=t(r,[["render",h]]);export{f as __pageData,y as default};
