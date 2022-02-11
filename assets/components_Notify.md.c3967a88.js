import{_ as t,c as d,o as e,a}from"./app.2f12dd10.js";const f='{"title":"Notify \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"StateType \u7684\u5408\u6CD5\u503C","slug":"statetype-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"showNotify(object)","slug":"shownotify-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"hideNotify([object])","slug":"hidenotify-object"},{"level":3,"title":"object","slug":"object-1"},{"level":3,"title":"Usage","slug":"usage-1"}],"relativePath":"components/Notify.md","lastUpdated":1644565853667}',r={},s=a(`<h1 id="notify-\u6D88\u606F\u63D0\u793A" tabindex="-1">Notify \u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#notify-\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>closable</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u56FE\u6807\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>type</code></td></tr><tr><td>type</td><td>StateType</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u63D0\u793A\u7C7B\u578B</td></tr><tr><td>duration</td><td>number</td><td>0</td><td>\u5426</td><td>visible=true \u5C55\u793A\u540E\uFF0Cduration \u6BEB\u79D2\u540E\u6D88\u5931\uFF0C0 \u4E3A\u4E0D\u6D88\u5931\uFF0C\u5728 <code>v-model:visible</code> \u4E0B\u751F\u6548</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr></tbody></table><h3 id="statetype-\u7684\u5408\u6CD5\u503C" tabindex="-1">StateType \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#statetype-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u8B66\u544A\uFF0C\u540C warning</td></tr><tr><td>primary</td><td>\u63D0\u793A</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5F3A\u70C8\u8B66\u544A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>close-click</td><td>\u5173\u95ED\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td></td><td></td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>payload: { state: <a href="./Notify.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td><td>PopupOnVisibleStateChange</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="shownotify-object" tabindex="-1">showNotify(object) <a class="header-anchor" href="#shownotify-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6D88\u606F\u63D0\u793A\u3002</p><p>\u6CE8\uFF1ANotify \u63A5\u53E3\u76EE\u524D\u4EC5\u652F\u6301\u5355\u4F8B\u6A21\u5F0F\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>type</td><td><a href="./Notify.html#statetype-\u7684\u5408\u6CD5\u503C">StateType</a></td><td>&#39;default&#39;</td><td>\u5426</td><td>\u63D0\u793A\u7C7B\u578B</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./../components/Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u56FE\u6807\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>type</code></td></tr><tr><td>duration</td><td>number</td><td>1500</td><td>\u5426</td><td>\u5C55\u793A\u65F6\u957F(\u5355\u4F4D ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0C<code>notify</code> \u4E0D\u4F1A\u6D88\u5931</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr><tr><td>closable</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td></tr><tr><td>success</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>(e: Error) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showNotify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A\u5185\u5BB9&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="hidenotify-object" tabindex="-1">hideNotify([object]) <a class="header-anchor" href="#hidenotify-object" aria-hidden="true">#</a></h2><p>\u9690\u85CF\u6D88\u606F\u63D0\u793A\u6846\u3002</p><h3 id="object-1" tabindex="-1">object <a class="header-anchor" href="#object-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>success</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>(e: Error) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">hideNotify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,27),o=[s];function n(i,h,l,c,p,b){return e(),d("div",null,o)}var y=t(r,[["render",n]]);export{f as __pageData,y as default};
