import{_ as t,c as d,o as e,a}from"./app.6fdd4400.js";const _='{"title":"Stopwatch \u79D2\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"CountTime \u7684\u7ED3\u6784","slug":"counttime-\u7684\u7ED3\u6784"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/Stopwatch.md","lastUpdated":1638797921629}',r={},s=a(`<h1 id="stopwatch-\u79D2\u8868" tabindex="-1">Stopwatch \u79D2\u8868 <a class="header-anchor" href="#stopwatch-\u79D2\u8868" aria-hidden="true">#</a></h1><p>PS\uFF1A\u672C\u7EC4\u4EF6\u6CA1\u6709\u6307\u5B9A\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EF\u5BF9\u6587\u5B57\u6837\u5F0F\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>show-milliseconds</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u6BEB\u79D2\u6570</td></tr><tr><td>thousands</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u5C0F\u65F6\u4F4D\u662F\u5426\u4EE5\u5343\u5206\u4F4D\u5F62\u5F0F\u663E\u793A</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u8BA1\u65F6\u542F\u52A8\u65F6\u89E6\u53D1</td><td>{ }</td></tr><tr><td>stop</td><td>\u8BA1\u65F6\u505C\u6B62\u65F6\u89E6\u53D1</td><td>{ }</td></tr><tr><td>reset</td><td>\u8BA1\u65F6\u590D\u4F4D\u65F6\u89E6\u53D1</td><td>{ detail: CountTime, laps: CountTime[] } detail \u5468\u671F\u603B\u65F6\u95F4\uFF0Claps\uFF0C\u5468\u671F\u5185\u6240\u6709\u8BA1\u6B21\u65F6\u95F4</td></tr></tbody></table><h3 id="counttime-\u7684\u7ED3\u6784" tabindex="-1">CountTime \u7684\u7ED3\u6784 <a class="header-anchor" href="#counttime-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>time</td><td>number</td><td>\u6301\u7EED\u65F6\u95F4</td></tr><tr><td>days</td><td>string</td><td>\u5929\u6570</td></tr><tr><td>hours</td><td>string</td><td>\u5C0F\u65F6\u6570\uFF08&lt;24\uFF09\uFF0C\u9700\u8981\u8DDF days \u914D\u5408\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>fullHours</td><td>string</td><td>\u5C0F\u65F6\u6570\uFF0C\u542B\u5929\u6570\u7EFC\u5408\uFF0C\u5982 &#39;124&#39;\uFF0C\u81F3\u5C11\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>thousandsFullHours</td><td>string</td><td>\u5343\u5206\u4F4D\u5F62\u5F0F\u7684\u5C0F\u65F6\u6570\uFF0C\u542B\u5929\u6570\u7EFC\u5408\uFF0C\u5982 &#39;1,234&#39;</td></tr><tr><td>minutes</td><td>string</td><td>\u5206\u949F\u6570\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>seconds</td><td>string</td><td>\u79D2\u949F\u6570\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>milliseconds</td><td>string</td><td>\u6BEB\u79D2\u6570\uFF0C\u4FDD\u7559 3 \u4F4D</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u5F00\u59CB\u8BA1\u65F6</td><td>() =&gt; void</td></tr><tr><td>stop</td><td>\u505C\u6B62\u8BA1\u65F6</td><td>() =&gt; void</td></tr><tr><td>reset</td><td>\u590D\u4F4D/\u91CD\u7F6E</td><td>() =&gt; void</td></tr><tr><td>lap</td><td>\u89E6\u53D1 1 \u6B21\u8BA1\u6B21\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5468\u671F</td><td>() =&gt; CountTime[]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><p>\u652F\u6301\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A</p><div class="language-"><pre><code>&lt;fx-stopwatch&gt;
  &lt;template #default=&quot;countTime&quot;&gt;
    {{ countTime.fullHours }}:{{ countTime.minutes }}:{{
        countTime.seconds
    }}.{{ countTime.milliseconds }}
  &lt;/template&gt;
&lt;/fx-stopwatch&gt;
</code></pre></div>`,13),o=[s];function h(n,i,l,c,u,p){return e(),d("div",null,o)}var b=t(r,[["render",h]]);export{_ as __pageData,b as default};
