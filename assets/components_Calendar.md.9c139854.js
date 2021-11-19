import{_ as t,c as d,o as e,a}from"./app.8ec95c28.js";const v='{"title":"Calendar \u65E5\u5386","description":"","frontmatter":{},"headers":[{"level":2,"title":"Calendar/CalendarPopup/CalendarView \u7684\u516C\u5171 Props","slug":"calendar-calendarpopup-calendarview-\u7684\u516C\u5171-props"},{"level":3,"title":"v-modal \u7684\u5408\u6CD5\u503C","slug":"v-modal-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"dayHandler \u51FD\u6570","slug":"dayhandler-\u51FD\u6570"},{"level":2,"title":"Calendar \u65E5\u5386\u9009\u62E9\u5668","slug":"calendar-\u65E5\u5386\u9009\u62E9\u5668"},{"level":2,"title":"Calendar Props","slug":"calendar-props"},{"level":3,"title":"formatter \u51FD\u6570","slug":"formatter-\u51FD\u6570"},{"level":2,"title":"Calendar Events","slug":"calendar-events"},{"level":3,"title":"DetailObject \u7684\u7ED3\u6784","slug":"detailobject-\u7684\u7ED3\u6784"},{"level":2,"title":"CalendarPopup \u65E5\u5386\u5F39\u7A97","slug":"calendarpopup-\u65E5\u5386\u5F39\u7A97"},{"level":2,"title":"CalendarPopup Props","slug":"calendarpopup-props"},{"level":2,"title":"CalendarPopup Events","slug":"calendarpopup-events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"CalendarView \u65E5\u5386\u9009\u62E9","slug":"calendarview-\u65E5\u5386\u9009\u62E9"},{"level":2,"title":"CalendarView Events","slug":"calendarview-events"}],"relativePath":"components/Calendar.md","lastUpdated":1637303582769}',r={},l=a('<h1 id="calendar-\u65E5\u5386" tabindex="-1">Calendar \u65E5\u5386 <a class="header-anchor" href="#calendar-\u65E5\u5386" aria-hidden="true">#</a></h1><h2 id="calendar-calendarpopup-calendarview-\u7684\u516C\u5171-props" tabindex="-1">Calendar/CalendarPopup/CalendarView \u7684\u516C\u5171 Props <a class="header-anchor" href="#calendar-calendarpopup-calendarview-\u7684\u516C\u5171-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-modal</td><td>Date/Date[]</td><td>[]</td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>min-date</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5C0F\u503C</td></tr><tr><td>max-date</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5927\u503C</td></tr><tr><td>initial-mode</td><td>string</td><td>&#39;single&#39;</td><td>\u5426</td><td>\u6A21\u5F0F\uFF1A<code>single</code> \u8868\u793A\u9009\u62E9\u4E00\u5929\uFF0C<code>range</code> \u9009\u62E9\u4E00\u4E2A\u65E5\u671F\u533A\u95F4</td></tr><tr><td>allow-same-day</td><td>boolean</td><td>false</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u8BBE\u7F6E\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u53EF\u4EE5\u540C\u4E00\u5929</td></tr><tr><td>max-range</td><td>number</td><td>Infinity</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u9009\u62E9\u533A\u95F4\u7684\u6700\u957F\u5929\u6570</td></tr><tr><td>day-handler</td><td>Function</td><td></td><td>\u5426</td><td>\u65E5\u5386\u6BCF\u4E2A\u65E5\u671F\u5904\u7406\u51FD\u6570</td></tr></tbody></table><h3 id="v-modal-\u7684\u5408\u6CD5\u503C" tabindex="-1">v-modal \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#v-modal-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><p><code>Date</code> \u7C7B\u578B\uFF0C\u6216\u8005\u53EF\u4EE5\u88AB <code>new Date(value)</code>\u7684\u6709\u6548\u503C\uFF0C\u5982\u679C\u662F <code>range</code> \u6A21\u5F0F\uFF0C\u5219\u4E3A\u6570\u7EC4\u5F62\u5F0F\u3002</p><h3 id="dayhandler-\u51FD\u6570" tabindex="-1">dayHandler \u51FD\u6570 <a class="header-anchor" href="#dayhandler-\u51FD\u6570" aria-hidden="true">#</a></h3><p>dayHandler(Object: Day) =&gt; Day</p><p>\u65E5\u5386\u4E2D\u7684\u6BCF\u4E2A\u65E5\u671F\u90FD\u5BF9\u5E94\u4E00\u4E2A Day \u5BF9\u8C61\uFF0C\u901A\u8FC7 <code>day-handler</code> \u5C5E\u6027\u53EF\u4EE5\u4FEE\u6539 Day \u5BF9\u8C61\u7684\u5185\u5BB9\u540E\u8FD4\u56DE\u3002</p><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date</td><td>Date</td><td>\u65E5\u671F\u5BF9\u5E94\u7684 Date \u5BF9\u8C61\uFF0C\u8BE5\u5B57\u6BB5\u4FEE\u6539\u65E0\u6548</td></tr><tr><td>state</td><td>string</td><td>\u65E5\u671F\u5F53\u524D\u7684\u72B6\u6001\uFF0C\u6709\uFF1A<code>selected</code> \u9009\u4E2D\uFF0C<code>startSelected</code> \u5F00\u59CB\uFF08initialMode=&quot;range&quot;\u4E0B\uFF09\uFF0C<code>endSelected</code> \u7ED3\u675F\uFF08initialMode=&quot;range&quot;\u4E0B\uFF09\uFF0C<code>disabled</code> \u7981\u7528\u3002\u5728\u7A7A\u5B57\u7B26\u4E32\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>disabled</code> \u5F3A\u5236\u8BBE\u7F6E\u8BE5\u65E5\u671F\u4E3A\u7981\u7528\uFF08\u4E00\u822C\u5728\u7968\u5356\u5B8C\u7684\u60C5\u51B5\u4E0B\u8BBE\u7F6E\uFF09</td></tr><tr><td>text</td><td>string</td><td>\u65E5\u671F\u6587\u672C\uFF0C\u4E0D\u5EFA\u8BAE\u4FEE\u6539</td></tr><tr><td>topText</td><td>string</td><td>\u65E5\u671F\u4E0A\u65B9\u5C55\u793A\u6587\u672C\uFF0C\u4E00\u822C\u53EF\u4FEE\u6539\u4E3A\u201C\u8282\u65E5\u540D\u79F0\u201D\u3001\u201C\u4ECA\u5929\u201D\u3001\u201C\u660E\u5929\u201D\u3001\u201C\u5F00\u59CB\u201D\u3001\u201C\u7ED3\u675F\u201D\u7B49</td></tr><tr><td>topHighlight</td><td>boolean</td><td>\u65E5\u671F\u4E0A\u65B9\u5C55\u793A\u6587\u672C\u662F\u5426\u9AD8\u4EAE</td></tr><tr><td>bottomText</td><td>string</td><td>\u65E5\u671F\u4E0B\u65B9\u5C55\u793A\u6587\u672C\uFF0C\u4E00\u822C\u53EF\u4FEE\u6539\u4E3A\u201C\u673A\u7968\u4EF7\u683C\u201D\u3001\u201C\u9152\u5E97\u4EF7\u683C\u201D\u3001\u201C\u7279\u4EF7\u201D\u3001\u201C\u70ED\u95E8\u201D\u7B49</td></tr><tr><td>bottomHighlight</td><td>boolean</td><td>\u65E5\u671F\u4E0B\u65B9\u5C55\u793A\u6587\u672C\u662F\u5426\u9AD8\u4EAE</td></tr><tr><td>dateString</td><td>string</td><td>\u65E5\u671F\u5BF9\u5E94\u7684\u683C\u5F0F\u5316\u65F6\u95F4\uFF08<code>YYYY-MM-DD</code>\uFF09\uFF0C\u5982\uFF1A2020-11-11\uFF0C\u8BE5\u5B57\u6BB5\u4E0D\u5F71\u54CD\u5C55\u793A</td></tr></tbody></table><h2 id="calendar-\u65E5\u5386\u9009\u62E9\u5668" tabindex="-1">Calendar \u65E5\u5386\u9009\u62E9\u5668 <a class="header-anchor" href="#calendar-\u65E5\u5386\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><ul><li>\u53EF\u4EE5\u914D\u5408 <a href="./Form.html">Form</a> \u548C <a href="./Form.html#formitem-\u8868\u5355\u9879">FormItem</a> \u4F7F\u7528\u3002</li></ul><h2 id="calendar-props" tabindex="-1">Calendar Props <a class="header-anchor" href="#calendar-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td><a href="./Form.html">Form</a> \u7684\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>formatter</td><td>Function</td><td></td><td>\u5426</td><td>\u9009\u4E2D\u9879\u683C\u5F0F\u5316\u51FD\u6570</td></tr><tr><td>show-confirm</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F39\u7A97\u662F\u5426\u5C55\u793A\u786E\u5B9A\u6309\u94AE</td></tr><tr><td>show-close</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F39\u7A97\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td></tr></tbody></table><h3 id="formatter-\u51FD\u6570" tabindex="-1">formatter \u51FD\u6570 <a class="header-anchor" href="#formatter-\u51FD\u6570" aria-hidden="true">#</a></h3><p>formatter(value: Date[]) =&gt; any</p><p>\u53EF\u4EE5\u5BF9\u9009\u4E2D\u540E\u7684 value \u8FDB\u884C\u4FEE\u6539\uFF0C\u4F1A\u5E94\u7528\u5728 <code>v-modal</code> \u548C\u8868\u5355\u6821\u9A8C\u4E2D</p><h2 id="calendar-events" tabindex="-1">Calendar Events <a class="header-anchor" href="#calendar-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td><a href="./Calendar.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr></tbody></table><h3 id="detailobject-\u7684\u7ED3\u6784" tabindex="-1">DetailObject \u7684\u7ED3\u6784 <a class="header-anchor" href="#detailobject-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>[Date]/[Date, Date]</td><td>\u9009\u62E9\u7684\u503C\uFF0C<code>range</code> \u6A21\u5F0F\u4E0B\u6709\u5F00\u59CB Date \u548C\u7ED3\u675F Date \u4E24\u4E2A\u5B9E\u4F8B</td></tr><tr><td>valueArray</td><td>number[][]</td><td>\u5982\uFF1A[[2021, 5, 1], [2021, 5, 30]]</td></tr><tr><td>formatted</td><td>string</td><td>\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u63CF\u8FF0\u6587\u672C</td></tr><tr><td>rangeCount</td><td>number</td><td>\u9009\u62E9\u533A\u95F4\u6301\u7EED\u7684\u5929\u6570\uFF08\u542B\u9996\u5C3E\uFF09</td></tr></tbody></table><h2 id="calendarpopup-\u65E5\u5386\u5F39\u7A97" tabindex="-1">CalendarPopup \u65E5\u5386\u5F39\u7A97 <a class="header-anchor" href="#calendarpopup-\u65E5\u5386\u5F39\u7A97" aria-hidden="true">#</a></h2><h2 id="calendarpopup-props" tabindex="-1">CalendarPopup Props <a class="header-anchor" href="#calendarpopup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>show-confirm</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u9009\u62E9\u65F6\u662F\u5426\u5C55\u793A\u786E\u5B9A\u6309\u94AE</td></tr><tr><td>show-close</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</td></tr></tbody></table><h2 id="calendarpopup-events" tabindex="-1">CalendarPopup Events <a class="header-anchor" href="#calendarpopup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u9009\u62E9\u5B8C\u6BD5\u540E\u89E6\u53D1 / <code>showConfirm</code> \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u89E6\u53D1</td><td><a href="./Calendar.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./Calendar.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="calendarview-\u65E5\u5386\u9009\u62E9" tabindex="-1">CalendarView \u65E5\u5386\u9009\u62E9 <a class="header-anchor" href="#calendarview-\u65E5\u5386\u9009\u62E9" aria-hidden="true">#</a></h2><p>\u5E73\u94FA\u5F62\u5F0F\u3002</p><h2 id="calendarview-events" tabindex="-1">CalendarView Events <a class="header-anchor" href="#calendarview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u9009\u62E9\u540E\u89E6\u53D1</td><td><a href="./Calendar.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr></tbody></table>',31),h=[l];function n(o,i,c,s,p,b){return e(),d("div",null,h)}var m=t(r,[["render",n]]);export{v as __pageData,m as default};
