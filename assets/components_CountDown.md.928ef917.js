import{_ as t,c as d,o as e,a as r}from"./app.9d79263e.js";const _='{"title":"CountDown \u5012\u8BA1\u65F6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"countTime \u7684\u7ED3\u6784","slug":"counttime-\u7684\u7ED3\u6784"}],"relativePath":"components/CountDown.md","lastUpdated":1640454096543}',a={},n=r(`<h1 id="countdown-\u5012\u8BA1\u65F6" tabindex="-1">CountDown \u5012\u8BA1\u65F6 <a class="header-anchor" href="#countdown-\u5012\u8BA1\u65F6" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u672C\u7EC4\u4EF6\u6CA1\u6709\u6307\u5B9A\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EF\u5BF9\u6587\u5B57\u6837\u5F0F\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { CountDown } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:timestamp</td><td>number</td><td>99</td><td>\u5426</td><td>\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D ms</td></tr><tr><td>show-days</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5929\u6570</td></tr><tr><td>paused</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u6682\u505C</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>pause</td><td>\u8BA1\u65F6\u6682\u505C\u65F6\u89E6\u53D1</td><td>{ remainTime: number } remainTime \u5269\u4F59\u65F6\u95F4\uFF0C\u5355\u4F4D ms</td></tr><tr><td>resume</td><td>\u6062\u590D\u8BA1\u65F6\u65F6\u89E6\u53D1</td><td>{ remainTime: number } remainTime \u5269\u4F59\u65F6\u95F4\uFF0C\u5355\u4F4D ms</td></tr><tr><td>end</td><td>\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1</td><td>{ startTime: number, endTime: number } startTime \u672C\u5730\u5F00\u59CB\u65F6\u95F4\u6233\uFF0CendTime \u672C\u5730\u7ED3\u675F\u65F6\u95F4\u6233\uFF0C\u5355\u4F4D ms</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><p>\u652F\u6301\u81EA\u5B9A\u4E49\u98CE\u683C\u663E\u793A</p><div class="language-"><pre><code>&lt;fx-count-down v-model:timestamp=&quot;timestamp&quot;&gt;
  &lt;template #default=&quot;countTime&quot;&gt;
    {{ countTime.fullHours }}:{{ countTime.minutes }}:{{
        countTime.seconds
    }}.{{ countTime.milliseconds }}
  &lt;/template&gt;
&lt;/fx-count-down&gt;
</code></pre></div><h3 id="counttime-\u7684\u7ED3\u6784" tabindex="-1">countTime \u7684\u7ED3\u6784 <a class="header-anchor" href="#counttime-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>time</td><td>number</td><td>\u6301\u7EED\u65F6\u95F4</td></tr><tr><td>days</td><td>string</td><td>\u5929\u6570</td></tr><tr><td>hours</td><td>string</td><td>\u5C0F\u65F6\u6570\uFF08&lt;24\uFF09\uFF0C\u9700\u8981\u8DDF days \u914D\u5408\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>fullHours</td><td>string</td><td>\u5C0F\u65F6\u6570\uFF0C\u542B\u5929\u6570\u7EFC\u5408\uFF0C\u5982 &#39;124&#39;\uFF0C\u81F3\u5C11\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>thousandsFullHours</td><td>string</td><td>\u5343\u5206\u4F4D\u5F62\u5F0F\u7684\u5C0F\u65F6\u6570\uFF0C\u542B\u5929\u6570\u7EFC\u5408\uFF0C\u5982 &#39;1,234&#39;</td></tr><tr><td>minutes</td><td>string</td><td>\u5206\u949F\u6570\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>seconds</td><td>string</td><td>\u79D2\u949F\u6570\uFF0C\u4FDD\u7559 2 \u4F4D</td></tr><tr><td>milliseconds</td><td>string</td><td>\u6BEB\u79D2\u6570\uFF0C\u4FDD\u7559 3 \u4F4D</td></tr></tbody></table>`,15),o=[n];function s(i,l,h,u,m,c){return e(),d("div",null,o)}var b=t(a,[["render",s]]);export{_ as __pageData,b as default};
