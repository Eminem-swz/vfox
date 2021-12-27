import{_ as t,c as e,o as d,a}from"./app.9d79263e.js";const g='{"title":"ImagePreview \u56FE\u7247\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":3,"title":"change \u7684\u56DE\u8C03\u53C2\u6570","slug":"change-\u7684\u56DE\u8C03\u53C2\u6570"}],"relativePath":"components/ImagePreview.md","lastUpdated":1640573246011}',r={},h=a(`<h1 id="imagepreview-\u56FE\u7247\u9884\u89C8" tabindex="-1">ImagePreview \u56FE\u7247\u9884\u89C8 <a class="header-anchor" href="#imagepreview-\u56FE\u7247\u9884\u89C8" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { ImagePreview } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>v-model:current</td><td>string</td><td></td><td>\u5426</td><td>\u6307\u5B9A\u5F53\u524D\u663E\u793A\u7684\u56FE\u7247 url</td></tr><tr><td>urls</td><td>string[]</td><td></td><td>\u5426</td><td>\u56FE\u7247 url \u6570\u7EC4</td></tr><tr><td>show-close</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u663E\u793A\u6309\u94AE\u540E\u5C55\u793A\u5934\u90E8\u680F</td></tr><tr><td>navigation-buttons</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\u6309\u94AE</td></tr><tr><td>image-high-rendering</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u9AD8\u6E05\u6E32\u67D3\uFF0C\u5F00\u542F\u540E\u56FE\u7247\u6309\u7269\u7406\u5206\u8FA8\u7387\u5C55\u793A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>{ activeIndex: number, current: string }</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./ImagePreview.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h3 id="change-\u7684\u56DE\u8C03\u53C2\u6570" tabindex="-1">change \u7684\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#change-\u7684\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>activeIndex</td><td>number</td><td>\u5F53\u524D\u56FE\u7247\u7684\u7D22\u5F15</td></tr><tr><td>current</td><td>string</td><td>\u5F53\u524D\u56FE\u7247\u7684 url</td></tr></tbody></table>`,12),i=[h];function s(l,n,o,c,b,v){return d(),e("div",null,i)}var m=t(r,[["render",s]]);export{g as __pageData,m as default};
