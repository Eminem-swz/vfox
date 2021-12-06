import{_ as t,c as e,o as d,a}from"./app.6fdd4400.js";const m='{"title":"DatePicker \u65F6\u95F4\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"DatePicker/DatePickerPopup/DatePickerView \u7684\u516C\u5171 Props","slug":"datepicker-datepickerpopup-datepickerview-\u7684\u516C\u5171-props"},{"level":3,"title":"initialMode \u7684\u5408\u6CD5\u503C","slug":"initialmode-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"DatePicker \u65F6\u95F4\u9009\u62E9\u5668","slug":"datepicker-\u65F6\u95F4\u9009\u62E9\u5668-1"},{"level":2,"title":"DatePicker Props","slug":"datepicker-props"},{"level":2,"title":"DatePicker Events","slug":"datepicker-events"},{"level":3,"title":"DetailObject \u7684\u7ED3\u6784","slug":"detailobject-\u7684\u7ED3\u6784"},{"level":2,"title":"DatePickerPopup \u65F6\u95F4\u9009\u62E9\u5F39\u7A97","slug":"datepickerpopup-\u65F6\u95F4\u9009\u62E9\u5F39\u7A97"},{"level":2,"title":"DatePickerPopup Props","slug":"datepickerpopup-props"},{"level":2,"title":"DatePickerPopup Events","slug":"datepickerpopup-events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"DatePickerView \u65F6\u95F4\u9009\u62E9","slug":"datepickerview-\u65F6\u95F4\u9009\u62E9"},{"level":2,"title":"DatePickerView Events","slug":"datepickerview-events"}],"relativePath":"components/DatePicker.md","lastUpdated":1638786115823}',r={},i=a('<h1 id="datepicker-\u65F6\u95F4\u9009\u62E9\u5668" tabindex="-1">DatePicker \u65F6\u95F4\u9009\u62E9\u5668 <a class="header-anchor" href="#datepicker-\u65F6\u95F4\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h2 id="datepicker-datepickerpopup-datepickerview-\u7684\u516C\u5171-props" tabindex="-1">DatePicker/DatePickerPopup/DatePickerView \u7684\u516C\u5171 Props <a class="header-anchor" href="#datepicker-datepickerpopup-datepickerview-\u7684\u516C\u5171-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-modal</td><td>Date/string</td><td></td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>initial-mode</td><td>string</td><td></td><td>\u5426</td><td>\u9009\u62E9\u7684\u6A21\u5F0F\uFF0C\u53EF\u9009 &#39;date&#39;, &#39;time&#39;, &#39;datetime&#39; \u7B49</td></tr><tr><td>min-date</td><td>Date</td><td>\u5F53\u5929\u5BF9\u5E94 10 \u5E74\u524D\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5C0F\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>max-date</td><td>Date</td><td>\u5F53\u5929\u6700\u540E\u4E00\u79D2\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5927\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>format-template</td><td>string</td><td></td><td>\u5426</td><td>\u683C\u5F0F\u7684\u6A21\u677F\uFF0C\u5982 <code>YYYY-MM-DD</code>\uFF0C\u6A21\u677F\u89C4\u5219\u53C2\u8003 <a href="https://dayjs.fenxianglu.cn/category/parse.html#%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noopener noreferrer">Dayjs</a>\u3002\u8BBE\u7F6E\u540E v-model \u7684\u7ED1\u5B9A\u53D8\u4E3A\u683C\u5F0F\u5316\u540E\u7684 string \u7C7B\u578B\uFF0C\u4E0D\u518D\u662F Date \u5B9E\u4F8B\u3002\u63A8\u8350\u6839\u636E <code>initialMode</code> \u9009\u578B\u6765\u786E\u5B9A\uFF0C\u5982 <code>initialMode=&#39;minute-second&#39;</code>\uFF0C\u5219\u53EF\u8BBE\u7F6E <code>formatTemplate=&#39;mm\u5206ss\u79D2&#39;</code></td></tr><tr><td>filter</td><td>Function</td><td></td><td>\u5426</td><td>\u9009\u9879\u8FC7\u6EE4\u5668\uFF0C<code>filter(number: number, type: &#39;year&#39; | &#39;month&#39; | &#39;day&#39; | &#39;hour&#39; | &#39;minute&#39; | &#39;second&#39;) =&gt; boolean</code></td></tr></tbody></table><p>PS\uFF1ADate \u5B9E\u4F8B\u5BF9\u672A\u8BBE\u7F6E\u7684\u524D\u6BB5\u503C\u91C7\u7528\u5F53\u524D\u65F6\u95F4\u8865\u4E0A\uFF0C\u540E\u6BB5\u5219\u91C7\u7528\u521D\u59CB\u65F6\u95F4\uFF0C\u5982\uFF1AinitialMode=&#39;month-day-hour&#39;\u4E0B\uFF0C \u9009\u53D6 5 \u6708 7 \u65E5 12 \u70B9\uFF0C\u5219 Date \u5B9E\u4F8B\u5BF9\u5E94\u7684\u65F6\u95F4\u4E3A\uFF1A<code>Fri May 07 2021 12:00:00 GMT+0800</code>\uFF0C\u8BBE\u7F6E <code>minDate</code>\uFF0C<code>maxDate</code> \u7684\u65F6\u5019\u9700\u8981\u8003\u8651\u5230\u3002</p><h3 id="initialmode-\u7684\u5408\u6CD5\u503C" tabindex="-1">initialMode \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#initialmode-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date</td><td>\u65E5\u671F (year-month-day)</td></tr><tr><td>time</td><td>\u65F6\u95F4 (hour-minute-second)</td></tr><tr><td>datetime</td><td>\u65E5\u671F\u65F6\u95F4 (year-month-day-hour-minute-second)</td></tr><tr><td>minute-second</td><td>\u5206\u79D2</td></tr><tr><td>hour-minute</td><td>\u65F6\u5206</td></tr><tr><td>hour-minute-second</td><td>\u65F6\u5206\u79D2</td></tr><tr><td>day-hour</td><td>\u5929\u65F6</td></tr><tr><td>month-day</td><td>\u6708\u65E5</td></tr><tr><td>month-day-hour</td><td>\u6708\u65E5\u65F6</td></tr><tr><td>month-day-hour-minute</td><td>\u6708\u65E5\u65F6\u5206</td></tr><tr><td>year-month</td><td>\u5E74\u6708</td></tr><tr><td>year-month-day</td><td>\u5E74\u6708\u65E5</td></tr><tr><td>year-month-day-hour</td><td>\u5E74\u6708\u65E5\u65F6</td></tr><tr><td>year-month-day-hour-minute</td><td>\u5E74\u6708\u65E5\u65F6\u5206</td></tr><tr><td>year-month-day-hour-minute-second</td><td>\u5E74\u6708\u65E5\u65F6\u5206\u79D2</td></tr></tbody></table><h2 id="datepicker-\u65F6\u95F4\u9009\u62E9\u5668-1" tabindex="-1">DatePicker \u65F6\u95F4\u9009\u62E9\u5668 <a class="header-anchor" href="#datepicker-\u65F6\u95F4\u9009\u62E9\u5668-1" aria-hidden="true">#</a></h2><ul><li>\u53EF\u4EE5\u914D\u5408 <a href="./Form.html">Form</a> \u548C <a href="./Form.html#formitem-\u8868\u5355\u9879">FormItem</a> \u4F7F\u7528\u3002</li></ul><h2 id="datepicker-props" tabindex="-1">DatePicker Props <a class="header-anchor" href="#datepicker-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td><a href="./Form.html">Form</a> \u7684\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table><h2 id="datepicker-events" tabindex="-1">DatePicker Events <a class="header-anchor" href="#datepicker-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><a href="./DatePicker.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr></tbody></table><h3 id="detailobject-\u7684\u7ED3\u6784" tabindex="-1">DetailObject \u7684\u7ED3\u6784 <a class="header-anchor" href="#detailobject-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>Date</td><td>\u9009\u62E9\u65F6\u95F4\u7684 Date \u5B9E\u4F8B</td></tr><tr><td>formatted</td><td>string</td><td>\u683C\u5F0F\u5316\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E <code>formatTemplate</code>\uFF0C\u5219\u91C7\u7528\u5185\u7F6E\u6A21\u677F</td></tr><tr><td>valueArray</td><td>number[]</td><td>\u9009\u9879\u5BF9\u5E94\u7684\u6570\u7EC4</td></tr></tbody></table><h2 id="datepickerpopup-\u65F6\u95F4\u9009\u62E9\u5F39\u7A97" tabindex="-1">DatePickerPopup \u65F6\u95F4\u9009\u62E9\u5F39\u7A97 <a class="header-anchor" href="#datepickerpopup-\u65F6\u95F4\u9009\u62E9\u5F39\u7A97" aria-hidden="true">#</a></h2><h2 id="datepickerpopup-props" tabindex="-1">DatePickerPopup Props <a class="header-anchor" href="#datepickerpopup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5F39\u7A97</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr></tbody></table><h2 id="datepickerpopup-events" tabindex="-1">DatePickerPopup Events <a class="header-anchor" href="#datepickerpopup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u540E\u89E6\u53D1</td><td></td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u89E6\u53D1</td><td><a href="./DatePicker.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><a href="./DatePicker.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./DatePicker.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="datepickerview-\u65F6\u95F4\u9009\u62E9" tabindex="-1">DatePickerView \u65F6\u95F4\u9009\u62E9 <a class="header-anchor" href="#datepickerview-\u65F6\u95F4\u9009\u62E9" aria-hidden="true">#</a></h2><p>\u5E73\u94FA\u5F62\u5F0F\u7684\u9009\u62E9\u5668\u3002</p><h2 id="datepickerview-events" tabindex="-1">DatePickerView Events <a class="header-anchor" href="#datepickerview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6ED1\u52A8\u540E\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>{ detail: <a href="./DatePicker.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a> }</td></tr></tbody></table>',25),h=[i];function o(c,l,n,p,s,u){return d(),e("div",null,h)}var k=t(r,[["render",o]]);export{m as __pageData,k as default};
