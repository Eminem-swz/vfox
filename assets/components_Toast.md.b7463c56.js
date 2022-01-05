import{_ as t,c as d,o as e,a}from"./app.9b8f0faa.js";const u='{"title":"Toast \u8F7B\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"type \u7684\u5408\u6CD5\u503C","slug":"type-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"}],"relativePath":"components/Toast.md","lastUpdated":1641395310635}',r={},s=a(`<h1 id="toast-\u8F7B\u63D0\u793A" tabindex="-1">Toast \u8F7B\u63D0\u793A <a class="header-anchor" href="#toast-\u8F7B\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Toast } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>type</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u7C7B\u578B\uFF0C&#39;default&#39;\u65E0\u56FE\u6807, \u53EF\u9009 &#39;success&#39;, &#39;loading&#39;, &#39;fail&#39;</td></tr><tr><td>image</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E type \u81EA\u5E26\u7684\u56FE\u6807</td></tr><tr><td>mask</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u900F\u660E\u8499\u5C42\uFF0C\u9632\u6B62\u89E6\u6478\u7A7F\u900F</td></tr><tr><td>duration</td><td>number</td><td>0</td><td>\u5426</td><td>visible=true \u5C55\u793A\u540E\uFF0Cduration \u6BEB\u79D2\u540E\u6D88\u5931\uFF0C0 \u4E3A\u4E0D\u6D88\u5931\uFF0C\u5728 <code>v-model:visible</code> \u4E0B\u751F\u6548</td></tr></tbody></table><h3 id="type-\u7684\u5408\u6CD5\u503C" tabindex="-1">type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>\u663E\u793A\u6210\u529F\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr><tr><td>loading</td><td>\u663E\u793A\u52A0\u8F7D\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u663E\u793A 7 \u4E2A\u6C49\u5B57\u957F\u5EA6</td></tr><tr><td>default</td><td>\u4E0D\u663E\u793A\u56FE\u6807\uFF0C\u6B64\u65F6 title \u6587\u672C\u6700\u591A\u53EF\u663E\u793A\u4E24\u884C</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./Toast.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table>`,12),i=[s];function h(l,o,n,c,p,b){return e(),d("div",null,i)}var v=t(r,[["render",h]]);export{u as __pageData,v as default};
