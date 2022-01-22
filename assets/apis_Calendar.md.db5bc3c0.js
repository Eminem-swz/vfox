import{_ as t,c as a,o as d,a as e}from"./app.8c4fff02.js";const f='{"title":"Calendar \u65E5\u5386\u9009\u62E9","description":"","frontmatter":{},"headers":[{"level":2,"title":"showCalendar(object)","slug":"showcalendar-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"object.success \u56DE\u8C03\u53C2\u6570","slug":"object-success-\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"apis/Calendar.md","lastUpdated":1642843932672}',n={},s=e(`<h1 id="calendar-\u65E5\u5386\u9009\u62E9" tabindex="-1">Calendar \u65E5\u5386\u9009\u62E9 <a class="header-anchor" href="#calendar-\u65E5\u5386\u9009\u62E9" aria-hidden="true">#</a></h1><h2 id="showcalendar-object" tabindex="-1">showCalendar(object) <a class="header-anchor" href="#showcalendar-object" aria-hidden="true">#</a></h2><p>\u65E5\u5386\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>&#39;single&#39;</td><td>\u5426</td><td>\u6A21\u5F0F\uFF1A<code>single</code> \u8868\u793A\u9009\u62E9\u4E00\u5929\uFF0C<code>range</code> \u9009\u62E9\u4E00\u4E2A\u65E5\u671F\u533A\u95F4</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>value</td><td>Date/Date[]</td><td>[]</td><td>\u5426</td><td>\u9ED8\u8BA4\u9009\u62E9\u503C\uFF0C<code>range</code> \u6A21\u5F0F\u4E0B\u9700\u8981\u63D0\u4F9B\u4E24\u4E2A</td></tr><tr><td>minDate</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5C0F\u503C</td></tr><tr><td>maxDate</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5927\u503C</td></tr><tr><td>allowSameDay</td><td>boolean</td><td>false</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u8BBE\u7F6E\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u53EF\u4EE5\u540C\u4E00\u5929</td></tr><tr><td>maxRange</td><td>number</td><td>Infinity</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u9009\u62E9\u533A\u95F4\u7684\u6700\u957F\u5929\u6570</td></tr><tr><td>dayHandler</td><td>Function</td><td></td><td>\u5426</td><td>\u65E5\u5386\u6BCF\u4E2A\u65E5\u671F\u5904\u7406\u51FD\u6570\uFF0C\u53C2\u8003 <a href="./../components/Calendar.html#dayhandler-\u51FD\u6570">Calendar dayHandler</a></td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.value</td><td>Date[]</td><td>\u5F00\u59CB 1 \u4E2A Date \u5B9E\u4F8B \u6216 \u5F00\u59CB\u548C\u7ED3\u675F 2 \u4E2A Date \u5B9E\u4F8B</td></tr><tr><td>detail?.valueArray</td><td>number[][]</td><td>\u5982\uFF1A[[2021, 5, 1], [2021, 5, 30]]</td></tr><tr><td>detail?.formatted</td><td>string</td><td>05-21 ~ 05-22</td></tr><tr><td>detail?.rangeCount</td><td>number</td><td>\u9009\u62E9\u533A\u95F4\u6301\u7EED\u7684\u5929\u6570\uFF08\u542B\u9996\u5C3E\uFF09</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showCalendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;range&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showClose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> confirm<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,10),r=[s];function o(c,l,p,i,u,h){return d(),a("div",null,r)}var k=t(n,[["render",o]]);export{f as __pageData,k as default};
