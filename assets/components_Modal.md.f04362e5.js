import{_ as t,c as e,o as d,a}from"./app.6fdd4400.js";const u='{"title":"Modal \u6A21\u6001\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":3,"title":"\u5934\u90E8\uFF08#header\uFF09","slug":"\u5934\u90E8\uFF08-header\uFF09"},{"level":3,"title":"\u5C3E\u90E8\uFF08#footer\uFF09","slug":"\u5C3E\u90E8\uFF08-footer\uFF09"}],"relativePath":"components/Modal.md","lastUpdated":1638869381465}',l={},r=a(`<h1 id="modal-\u6A21\u6001\u6846" tabindex="-1">Modal \u6A21\u6001\u6846 <a class="header-anchor" href="#modal-\u6A21\u6001\u6846" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>width</td><td>string</td><td></td><td>\u5426</td><td>\u6A21\u6001\u6846\u7684\u5BBD\u5EA6</td></tr><tr><td>mask-closable</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u89E6\u53D1\u5173\u95ED\u64CD\u4F5C</td></tr><tr><td>show-close</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./Modal.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-modal&gt;
  \u63D0\u793A\u5185\u5BB9
  ...
&lt;/fx-modal&gt;
</code></pre></div><h3 id="\u5934\u90E8\uFF08-header\uFF09" tabindex="-1">\u5934\u90E8\uFF08#header\uFF09 <a class="header-anchor" href="#\u5934\u90E8\uFF08-header\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-modal&gt;
  &lt;template #header&gt;\u6807\u9898&lt;/template&gt;
&lt;/fx-modal&gt;
</code></pre></div><h3 id="\u5C3E\u90E8\uFF08-footer\uFF09" tabindex="-1">\u5C3E\u90E8\uFF08#footer\uFF09 <a class="header-anchor" href="#\u5C3E\u90E8\uFF08-footer\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-modal&gt;
  &lt;template #footer&gt;
    &lt;fx-button type=&quot;primary&quot;&gt;
      \u786E\u5B9A
    &lt;/fx-button&gt;
  &lt;/template&gt;
&lt;/fx-modal&gt;
</code></pre></div>`,14),s=[r];function h(o,i,n,c,f,b){return d(),e("div",null,s)}var g=t(l,[["render",h]]);export{u as __pageData,g as default};
