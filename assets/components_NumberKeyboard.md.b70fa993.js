import{_ as t,c as d,o as e,a as r}from"./app.d6348de1.js";const m='{"title":"NumberKeyboard \u6570\u5B57\u952E\u76D8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"}],"relativePath":"components/NumberKeyboard.md","lastUpdated":1641636855778}',a={},s=r(`<h1 id="numberkeyboard-\u6570\u5B57\u952E\u76D8" tabindex="-1">NumberKeyboard \u6570\u5B57\u952E\u76D8 <a class="header-anchor" href="#numberkeyboard-\u6570\u5B57\u952E\u76D8" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { NumberKeyboard } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u9898\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u4E0D\u5C55\u793A\u6807\u9898\u680F</td></tr><tr><td>v-model</td><td>string</td><td></td><td>\u5426</td><td>\u5F53\u524D\u8F93\u5165\u503C</td></tr><tr><td>type</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u952E\u76D8\u6A21\u5F0F\uFF0C\u53EF\u9009&#39;default&#39;, &#39;rightColumn&#39;</td></tr><tr><td>custom-key</td><td>string/string[]</td><td></td><td>\u5426</td><td>&#39;rightColumn&#39; \u6A21\u5F0F\u4E0B\u6700\u591A\u652F\u6301\u6DFB\u52A0 2 \u4E2A\uFF0C&#39;default&#39; \u6A21\u5F0F\u4E0B\u6700\u591A\u652F\u6301\u6DFB\u52A0 1 \u4E2A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>input</td><td>\u70B9\u51FB\u6309\u952E\u65F6\u89E6\u53D1</td><td>{ key: string }</td></tr><tr><td>delete</td><td>\u70B9\u51FB\u5220\u9664\u952E\u65F6\u89E6\u53D1</td><td>{ deleteKey: string }</td></tr><tr><td>close</td><td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u975E\u952E\u76D8\u533A\u57DF\u65F6\u89E6\u53D1</td><td>{ value: string }</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./NumberKeyboard.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table>`,10),i=[s];function h(l,o,n,c,b,p){return e(),d("div",null,i)}var _=t(a,[["render",h]]);export{m as __pageData,_ as default};
