import{_ as t,c as e,o as a,a as d}from"./app.6b4e8d9e.js";const _='{"title":"Drawer \u62BD\u5C49","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/Drawer.md","lastUpdated":1644765401401}',r={},s=d(`<h1 id="drawer-\u62BD\u5C49" tabindex="-1">Drawer \u62BD\u5C49 <a class="header-anchor" href="#drawer-\u62BD\u5C49" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u5728\u5C4F\u5E55\u8FB9\u7F18\u663E\u793A\u5E94\u7528\u5BFC\u822A\u7B49\u5185\u5BB9\u7684\u9762\u677F\u3002</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Drawer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u9898\uFF0C\u8BBE\u7F6E\u6807\u9898\u540E\u5C55\u793A\u5934\u90E8\u680F</td></tr><tr><td>placement</td><td>PlacementType</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u4ECE\u54EA\u5C55\u5F00\uFF0C\u53EF\u9009\u503C\uFF1A&#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>show-close</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u663E\u793A\u6309\u94AE\u540E\u5C55\u793A\u5934\u90E8\u680F</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>payload: { state: <a href="./Drawer.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td><td>PopupOnVisibleStateChange</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-drawer title=&quot;\u83DC\u5355&quot; placement=&quot;right&quot;&gt;
  &lt;fx-tab /&gt;
&lt;/fx-drawer&gt;
</code></pre></div>`,13),l=[s];function o(i,h,n,c,p,b){return a(),e("div",null,l)}var v=t(r,[["render",o]]);export{_ as __pageData,v as default};
