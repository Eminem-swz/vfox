import{_ as t,c as a,o as e,a as d}from"./app.6b4e8d9e.js";const k='{"title":"Calendar/CalendarPopup/CalendarView \u65E5\u5386","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"\u516C\u5171 Props","slug":"\u516C\u5171-props"},{"level":3,"title":"SelectorValue \u7684\u7C7B\u578B","slug":"selectorvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"SelectorModelValue \u7684\u7C7B\u578B","slug":"selectormodelvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"CalendarDetail \u7684\u7ED3\u6784","slug":"calendardetail-\u7684\u7ED3\u6784"},{"level":3,"title":"CalendarMode","slug":"calendarmode"},{"level":3,"title":"CalendarDayHandler","slug":"calendardayhandler"},{"level":3,"title":"formatter/parser","slug":"formatter-parser"},{"level":2,"title":"Calendar","slug":"calendar"},{"level":2,"title":"Calendar Props","slug":"calendar-props"},{"level":2,"title":"Calendar Events","slug":"calendar-events"},{"level":2,"title":"CalendarPopup","slug":"calendarpopup"},{"level":2,"title":"CalendarPopup Props","slug":"calendarpopup-props"},{"level":2,"title":"CalendarPopup Events","slug":"calendarpopup-events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"CalendarView","slug":"calendarview"},{"level":2,"title":"CalendarView Events","slug":"calendarview-events"},{"level":2,"title":"showCalendar(object)","slug":"showcalendar-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"SuccessPayload","slug":"successpayload"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"components/Calendar.md","lastUpdated":1644766148473}',n={},s=d(`<h1 id="calendar-calendarpopup-calendarview-\u65E5\u5386" tabindex="-1">Calendar/CalendarPopup/CalendarView \u65E5\u5386 <a class="header-anchor" href="#calendar-calendarpopup-calendarview-\u65E5\u5386" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> CalendarPopup<span class="token punctuation">,</span> CalendarView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="\u516C\u5171-props" tabindex="-1">\u516C\u5171 Props <a class="header-anchor" href="#\u516C\u5171-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td><a href="./Calendar.html#selectorvalue-\u7684\u7C7B\u578B">SelectorValue</a> | <a href="./Calendar.html#selectorvalue-\u7684\u7C7B\u578B">SelectorValue</a>[]</td><td>[]</td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>min-date</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5C0F\u503C</td></tr><tr><td>max-date</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5927\u503C</td></tr><tr><td>initial-mode</td><td><a href="./Calendar.html#calendarmode">CalendarMode</a></td><td>&#39;single&#39;</td><td>\u5426</td><td>\u6A21\u5F0F</td></tr><tr><td>allow-same-day</td><td>boolean</td><td>false</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u8BBE\u7F6E\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u53EF\u4EE5\u540C\u4E00\u5929</td></tr><tr><td>max-range</td><td>number</td><td>Infinity</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u9009\u62E9\u533A\u95F4\u7684\u6700\u957F\u5929\u6570</td></tr><tr><td>day-handler</td><td><a href="./Calendar.html#calendardayhandler">CalendarDayHandler</a></td><td></td><td>\u5426</td><td>\u65E5\u5386\u6BCF\u4E2A\u65E5\u671F\u5904\u7406\u51FD\u6570</td></tr><tr><td>formatter</td><td><a href="./Calendar.html#calendarvalueformatter">CalendarValueFormatter</a></td><td></td><td>\u5426</td><td>\u548C <code>parser</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u8F6C\u5316</td></tr><tr><td>parser</td><td><a href="./Calendar.html#calendarvalueparser">CalendarValueParser</a></td><td></td><td>\u5426</td><td>\u548C <code>formatter</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u53CD\u8F6C\u5316</td></tr></tbody></table><h3 id="selectorvalue-\u7684\u7C7B\u578B" tabindex="-1">SelectorValue \u7684\u7C7B\u578B <a class="header-anchor" href="#selectorvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u7684\u7C7B\u578B\u4E3A\uFF1A<code>string | number | Date</code></p><p>\u5728\u4E0D\u81EA\u5B9A\u4E49 <code>formatter/parser</code> \u7684\u60C5\u51B5\u4E0B\uFF0Cv-model \u53EA\u6709 <code>Date[]</code> \u8FD9\u79CD\u60C5\u51B5\u3002</p><h3 id="selectormodelvalue-\u7684\u7C7B\u578B" tabindex="-1">SelectorModelValue \u7684\u7C7B\u578B <a class="header-anchor" href="#selectormodelvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>SelectorModelValue \u7684\u7C7B\u578B\u4E3A\uFF1A <code>SelectorValue | SelectorValue[]</code></p><h3 id="calendardetail-\u7684\u7ED3\u6784" tabindex="-1">CalendarDetail \u7684\u7ED3\u6784 <a class="header-anchor" href="#calendardetail-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><a href="./Calendar.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>\u9009\u62E9\u7684\u503C\uFF0C<code>range</code> \u6A21\u5F0F\u4E0B\u6709\u5F00\u59CB Date \u548C\u7ED3\u675F Date \u4E24\u4E2A\u5B9E\u4F8B\uFF1B<code>formatter/parser</code> \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8</td></tr><tr><td>label</td><td>string</td><td>\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u63CF\u8FF0\u6587\u672C</td></tr><tr><td>valueArray</td><td>number[][]</td><td>\u5982\uFF1A[[2021, 5, 1], [2021, 5, 30]]</td></tr><tr><td>rangeCount</td><td>number</td><td>\u9009\u62E9\u533A\u95F4\u6301\u7EED\u7684\u5929\u6570\uFF08\u542B\u9996\u5C3E\uFF09</td></tr></tbody></table><h3 id="calendarmode" tabindex="-1">CalendarMode <a class="header-anchor" href="#calendarmode" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">CalendarMode</span> <span class="token operator">=</span> <span class="token string">&#39;single&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;range&#39;</span>
</code></pre></div><p><code>single</code> \u8868\u793A\u9009\u62E9\u4E00\u5929\uFF0C<code>range</code> \u9009\u62E9\u4E00\u4E2A\u65E5\u671F\u533A\u95F4\u3002</p><h3 id="calendardayhandler" tabindex="-1">CalendarDayHandler <a class="header-anchor" href="#calendardayhandler" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">CalendarDayHandler</span> <span class="token operator">=</span> <span class="token function">dayHandler</span><span class="token punctuation">(</span>dayInfo<span class="token operator">:</span> DayInfo<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DayInfo

<span class="token keyword">interface</span> <span class="token class-name">DayInfo</span> <span class="token punctuation">{</span>
  topHighlight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  topText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  state<span class="token operator">:</span> <span class="token builtin">string</span>
  bottomHighlight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  bottomText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  dateString<span class="token operator">:</span> <span class="token builtin">string</span>
  date<span class="token operator">?</span><span class="token operator">:</span> Date
  timestamp<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u65E5\u5386\u4E2D\u7684\u6BCF\u4E2A\u65E5\u671F\u90FD\u5BF9\u5E94\u4E00\u4E2A DayInfo \u5BF9\u8C61\uFF0C\u901A\u8FC7 <code>day-handler</code> \u5C5E\u6027\u53EF\u4EE5\u4FEE\u6539 DayInfo \u5BF9\u8C61\u7684\u5185\u5BB9\u540E\u8FD4\u56DE\u3002</p><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date</td><td>Date</td><td>\u65E5\u671F\u5BF9\u5E94\u7684 Date \u5BF9\u8C61\uFF0C\u8BE5\u5B57\u6BB5\u4FEE\u6539\u65E0\u6548</td></tr><tr><td>state</td><td>string</td><td>\u65E5\u671F\u5F53\u524D\u7684\u72B6\u6001\uFF0C\u6709\uFF1A<code>selected</code> \u9009\u4E2D\uFF0C<code>startSelected</code> \u5F00\u59CB\uFF08initialMode=&quot;range&quot;\u4E0B\uFF09\uFF0C<code>endSelected</code> \u7ED3\u675F\uFF08initialMode=&quot;range&quot;\u4E0B\uFF09\uFF0C<code>disabled</code> \u7981\u7528\u3002\u5728\u7A7A\u5B57\u7B26\u4E32\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>disabled</code> \u5F3A\u5236\u8BBE\u7F6E\u8BE5\u65E5\u671F\u4E3A\u7981\u7528\uFF08\u4E00\u822C\u5728\u7968\u5356\u5B8C\u7684\u60C5\u51B5\u4E0B\u8BBE\u7F6E\uFF09</td></tr><tr><td>text</td><td>string</td><td>\u65E5\u671F\u6587\u672C\uFF0C\u4E0D\u5EFA\u8BAE\u4FEE\u6539</td></tr><tr><td>topText</td><td>string</td><td>\u65E5\u671F\u4E0A\u65B9\u5C55\u793A\u6587\u672C\uFF0C\u4E00\u822C\u53EF\u4FEE\u6539\u4E3A\u201C\u8282\u65E5\u540D\u79F0\u201D\u3001\u201C\u4ECA\u5929\u201D\u3001\u201C\u660E\u5929\u201D\u3001\u201C\u5F00\u59CB\u201D\u3001\u201C\u7ED3\u675F\u201D\u7B49</td></tr><tr><td>topHighlight</td><td>boolean</td><td>\u65E5\u671F\u4E0A\u65B9\u5C55\u793A\u6587\u672C\u662F\u5426\u9AD8\u4EAE</td></tr><tr><td>bottomText</td><td>string</td><td>\u65E5\u671F\u4E0B\u65B9\u5C55\u793A\u6587\u672C\uFF0C\u4E00\u822C\u53EF\u4FEE\u6539\u4E3A\u201C\u673A\u7968\u4EF7\u683C\u201D\u3001\u201C\u9152\u5E97\u4EF7\u683C\u201D\u3001\u201C\u7279\u4EF7\u201D\u3001\u201C\u70ED\u95E8\u201D\u7B49</td></tr><tr><td>bottomHighlight</td><td>boolean</td><td>\u65E5\u671F\u4E0B\u65B9\u5C55\u793A\u6587\u672C\u662F\u5426\u9AD8\u4EAE</td></tr><tr><td>dateString</td><td>string</td><td>\u65E5\u671F\u5BF9\u5E94\u7684\u683C\u5F0F\u5316\u65F6\u95F4\uFF08<code>YYYY-MM-DD</code>\uFF09\uFF0C\u5982\uFF1A2020-11-11\uFF0C\u8BE5\u5B57\u6BB5\u4E0D\u5F71\u54CD\u5C55\u793A</td></tr></tbody></table><h3 id="formatter-parser" tabindex="-1">formatter/parser <a class="header-anchor" href="#formatter-parser" aria-hidden="true">#</a></h3><p>\u9AD8\u9636\u914D\u7F6E\uFF0C<code>formatter</code> \u548C <code>parser</code> \u9700\u8981\u4E00\u540C\u8BBE\u7F6E\uFF0C\u5BF9 v-model \u7684\u503C\u8F6C\u4E3A\u81EA\u5B9A\u4E49\u503C\u3002</p><h4 id="calendarvalueformatter" tabindex="-1">CalendarValueFormatter <a class="header-anchor" href="#calendarvalueformatter" aria-hidden="true">#</a></h4><div class="language-TypeScript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">CalendarValueFormatter</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>valueArray<span class="token operator">:</span> Date<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> mode<span class="token operator">:</span> CalendarMode<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> SelectorValue <span class="token operator">|</span> SelectorValue<span class="token punctuation">[</span><span class="token punctuation">]</span>
        label<span class="token operator">:</span> <span class="token builtin">string</span>
      <span class="token punctuation">}</span>
    <span class="token operator">|</span> <span class="token punctuation">(</span>SelectorValue <span class="token operator">|</span> SelectorValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5C06 v-model \u7684\u539F\u59CB\u503C\u8F6C\u4E3A\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u503C\uFF0C\u503C\u9700\u8981\u6EE1\u8DB3 <code>SelectorValue | SelectorValue[]</code> \u7684\u7C7B\u578B\u7EA6\u675F\uFF0C\u53EF\u4EE5\u8FD4\u56DE { value, label } \u5BF9\u4E24\u4E2A\u6570\u636E\u8FDB\u884C\u4FEE\u6539\uFF0C\u6216\u8005\u5355\u72EC\u8FD4\u56DE value\u3002</p><h4 id="calendarvalueparser" tabindex="-1">CalendarValueParser <a class="header-anchor" href="#calendarvalueparser" aria-hidden="true">#</a></h4><div class="language-TypeScript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">CalendarValueParser</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> mode<span class="token operator">:</span> CalendarMode<span class="token punctuation">)</span><span class="token operator">:</span> Date<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8DDF <code>CalendarValueFormatter</code> \u76F8\u53CD\uFF0C\u5C06\u81EA\u5B9A\u4E49 v-model \u7684\u503C\u8F6C\u4E3A\u7EC4\u4EF6\u8BA4\u8BC6\u7684\u539F\u59CB\u6570\u7EC4\u3002</p><h2 id="calendar" tabindex="-1">Calendar <a class="header-anchor" href="#calendar" aria-hidden="true">#</a></h2><p>\u65E5\u5386\u9009\u62E9\u5668\u3002</p><p>\u6CE8\uFF1A</p><ul><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="calendar-props" tabindex="-1">Calendar Props <a class="header-anchor" href="#calendar-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>show-confirm</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F39\u7A97\u662F\u5426\u5C55\u793A\u786E\u5B9A\u6309\u94AE</td></tr><tr><td>show-close</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F39\u7A97\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td></tr></tbody></table><h2 id="calendar-events" tabindex="-1">Calendar Events <a class="header-anchor" href="#calendar-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>payload: <a href="./Calendar.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>SelectorOnChange</td></tr></tbody></table><h2 id="calendarpopup" tabindex="-1">CalendarPopup <a class="header-anchor" href="#calendarpopup" aria-hidden="true">#</a></h2><p>\u65E5\u5386\u5F39\u7A97\u3002</p><h2 id="calendarpopup-props" tabindex="-1">CalendarPopup Props <a class="header-anchor" href="#calendarpopup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>show-confirm</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u9009\u62E9\u65F6\u662F\u5426\u5C55\u793A\u786E\u5B9A\u6309\u94AE</td></tr><tr><td>show-close</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td></tr></tbody></table><h2 id="calendarpopup-events" tabindex="-1">CalendarPopup Events <a class="header-anchor" href="#calendarpopup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>confirm</td><td>\u9009\u62E9\u5B8C\u6BD5\u540E\u89E6\u53D1 / <code>showConfirm</code> \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u89E6\u53D1</td><td>payload: <a href="./Calendar.html#calendardetail-\u7684\u7ED3\u6784">CalendarDetail</a></td><td>CalendarOnConfirm</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>payload: { state: <a href="./Calendar.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td><td>PopupOnVisibleStateChange</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="calendarview" tabindex="-1">CalendarView <a class="header-anchor" href="#calendarview" aria-hidden="true">#</a></h2><p>\u65E5\u5386\u9009\u62E9\uFF0C\u5E73\u94FA\u5F62\u5F0F\u3002</p><h2 id="calendarview-events" tabindex="-1">CalendarView Events <a class="header-anchor" href="#calendarview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>select</td><td>\u9009\u62E9\u540E\u89E6\u53D1</td><td>payload: <a href="./Calendar.html#calendardetail-\u7684\u7ED3\u6784">CalendarDetail</a></td><td>CalendarOnSelect</td></tr></tbody></table><h2 id="showcalendar-object" tabindex="-1">showCalendar(object) <a class="header-anchor" href="#showcalendar-object" aria-hidden="true">#</a></h2><p>\u65E5\u5386\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>mode</td><td><a href="./Calendar.html#calendarmode">CalendarMode</a></td><td>&#39;single&#39;</td><td>\u5426</td><td>\u6A21\u5F0F</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>value</td><td>Date/Date[]</td><td>[]</td><td>\u5426</td><td>\u9ED8\u8BA4\u9009\u62E9\u503C\uFF0C<code>range</code> \u6A21\u5F0F\u4E0B\u9700\u8981\u63D0\u4F9B\u4E24\u4E2A</td></tr><tr><td>minDate</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5C0F\u503C</td></tr><tr><td>maxDate</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5927\u503C</td></tr><tr><td>allowSameDay</td><td>boolean</td><td>false</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u8BBE\u7F6E\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u53EF\u4EE5\u540C\u4E00\u5929</td></tr><tr><td>maxRange</td><td>number</td><td>Infinity</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u9009\u62E9\u533A\u95F4\u7684\u6700\u957F\u5929\u6570</td></tr><tr><td>dayHandler</td><td><a href="./Calendar.html#calendardayhandler">CalendarDayHandler</a></td><td></td><td>\u5426</td><td>\u65E5\u5386\u6BCF\u4E2A\u65E5\u671F\u5904\u7406\u51FD\u6570</td></tr><tr><td>success</td><td>(payload: SuccessPayload) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u9009\u62E9\u9009\u9879\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>(e: Error) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="successpayload" tabindex="-1">SuccessPayload <a class="header-anchor" href="#successpayload" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.value</td><td>Date[]</td><td>\u5F00\u59CB 1 \u4E2A Date \u5B9E\u4F8B \u6216 \u5F00\u59CB\u548C\u7ED3\u675F 2 \u4E2A Date \u5B9E\u4F8B</td></tr><tr><td>detail?.valueArray</td><td>number[][]</td><td>\u5982\uFF1A[[2021, 5, 1], [2021, 5, 30]]</td></tr><tr><td>detail?.label</td><td>string</td><td>2021-05-21 \u6216 05-21 ~ 05-22</td></tr><tr><td>detail?.rangeCount</td><td>number</td><td>\u9009\u62E9\u533A\u95F4\u6301\u7EED\u7684\u5929\u6570\uFF08\u542B\u9996\u5C3E\uFF09</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showCalendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;range&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showClose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> confirm<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,57),r=[s];function l(o,p,c,i,h,u){return e(),a("div",null,r)}var m=t(n,[["render",l]]);export{k as __pageData,m as default};
