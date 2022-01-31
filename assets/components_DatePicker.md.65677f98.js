import{_ as t,c as e,o as a,a as d}from"./app.95b08e21.js";const m='{"title":"DatePicker/DatePickerPopup/DatePickerView \u65F6\u95F4\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"\u516C\u5171 Props","slug":"\u516C\u5171-props"},{"level":3,"title":"SelectorValue \u7684\u7C7B\u578B","slug":"selectorvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"SelectorModelValue \u7684\u7C7B\u578B","slug":"selectormodelvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"SelectorDetail \u7684\u7ED3\u6784","slug":"selectordetail-\u7684\u7ED3\u6784"},{"level":3,"title":"DatePickerMode","slug":"datepickermode"},{"level":3,"title":"DatePickerOptionFilter","slug":"datepickeroptionfilter"},{"level":3,"title":"formatter/parser","slug":"formatter-parser"},{"level":2,"title":"DatePicker","slug":"datepicker"},{"level":2,"title":"DatePicker Props","slug":"datepicker-props"},{"level":2,"title":"DatePicker Events","slug":"datepicker-events"},{"level":2,"title":"DatePickerPopup","slug":"datepickerpopup"},{"level":2,"title":"DatePickerPopup Props","slug":"datepickerpopup-props"},{"level":2,"title":"DatePickerPopup Events","slug":"datepickerpopup-events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"DatePickerView","slug":"datepickerview"},{"level":2,"title":"DatePickerView Events","slug":"datepickerview-events"},{"level":2,"title":"showDatePicker(object)","slug":"showdatepicker-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"SuccessPayload","slug":"successpayload"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"components/DatePicker.md","lastUpdated":1643596843673}',r={},s=d(`<h1 id="datepicker-datepickerpopup-datepickerview-\u65F6\u95F4\u9009\u62E9\u5668" tabindex="-1">DatePicker/DatePickerPopup/DatePickerView \u65F6\u95F4\u9009\u62E9\u5668 <a class="header-anchor" href="#datepicker-datepickerpopup-datepickerview-\u65F6\u95F4\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker<span class="token punctuation">,</span> DatePickerPopup<span class="token punctuation">,</span> DatePickerView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="\u516C\u5171-props" tabindex="-1">\u516C\u5171 Props <a class="header-anchor" href="#\u516C\u5171-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td><a href="./DatePicker.html#selectorvalue-\u7684\u7C7B\u578B">SelectorValue</a> | <a href="./DatePicker.html#selectorvalue-\u7684\u7C7B\u578B">SelectorValue</a>[]</td><td></td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>initial-mode</td><td><a href="./DatePicker.html#datepickermode">DatePickerMode</a></td><td></td><td>\u5426</td><td>\u9009\u62E9\u7684\u6A21\u5F0F\uFF0C\u53EF\u9009 &#39;date&#39;, &#39;time&#39;, &#39;datetime&#39; \u7B49</td></tr><tr><td>min-date</td><td>Date</td><td>\u5F53\u5929\u5BF9\u5E94 10 \u5E74\u524D\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5C0F\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>max-date</td><td>Date</td><td>\u5F53\u5929\u6700\u540E\u4E00\u79D2\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5927\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>format-template</td><td>string</td><td></td><td>\u5426</td><td>\u683C\u5F0F\u7684\u6A21\u677F\uFF0C\u5982 <code>YYYY-MM-DD</code>\uFF0C\u6A21\u677F\u89C4\u5219\u53C2\u8003 <a href="https://dayjs.fenxianglu.cn/category/parse.html#%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noopener noreferrer">Dayjs</a>\u3002\u8BBE\u7F6E\u540E v-model \u7684\u7ED1\u5B9A\u53D8\u4E3A\u683C\u5F0F\u5316\u540E\u7684 string \u7C7B\u578B\uFF0C\u4E0D\u518D\u662F Date \u5B9E\u4F8B\u3002\u63A8\u8350\u6839\u636E <code>initialMode</code> \u9009\u578B\u6765\u786E\u5B9A\uFF0C\u5982 <code>initialMode=&#39;minute-second&#39;</code>\uFF0C\u5219\u53EF\u8BBE\u7F6E <code>formatTemplate=&#39;mm\u5206ss\u79D2&#39;</code></td></tr><tr><td>filter</td><td><a href="./DatePicker.html#datepickeroptionfilter">DatePickerOptionFilter</a></td><td></td><td>\u5426</td><td>\u9009\u9879\u8FC7\u6EE4\u5668</td></tr><tr><td>formatter</td><td><a href="./DatePicker.html#selectorvalueformatter">SelectorValueFormatter</a></td><td></td><td>\u5426</td><td>\u548C <code>parser</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u8F6C\u5316</td></tr><tr><td>parser</td><td><a href="./DatePicker.html#selectorvalueparser">SelectorValueParser</a></td><td></td><td>\u5426</td><td>\u548C <code>formatter</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u53CD\u8F6C\u5316</td></tr></tbody></table><p>\u6CE8\uFF1ADate \u5B9E\u4F8B\u5BF9\u672A\u8BBE\u7F6E\u7684\u524D\u6BB5\u503C\u91C7\u7528\u5F53\u524D\u65F6\u95F4\u8865\u4E0A\uFF0C\u540E\u6BB5\u5219\u91C7\u7528\u521D\u59CB\u65F6\u95F4\uFF0C\u5982\uFF1AinitialMode=&#39;month-day-hour&#39;\u4E0B\uFF0C \u9009\u53D6 5 \u6708 7 \u65E5 12 \u70B9\uFF0C\u5219 Date \u5B9E\u4F8B\u5BF9\u5E94\u7684\u65F6\u95F4\u4E3A\uFF1A<code>Fri May 07 2021 12:00:00 GMT+0800</code>\uFF0C\u8BBE\u7F6E <code>minDate</code>\uFF0C<code>maxDate</code> \u7684\u65F6\u5019\u9700\u8981\u8003\u8651\u5230\u3002</p><h3 id="selectorvalue-\u7684\u7C7B\u578B" tabindex="-1">SelectorValue \u7684\u7C7B\u578B <a class="header-anchor" href="#selectorvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u7684\u7C7B\u578B\u4E3A\uFF1A<code>string | number | Date</code></p><p>\u5728\u4E0D\u81EA\u5B9A\u4E49 <code>formatter/parser</code> \u7684\u60C5\u51B5\u4E0B\uFF0Cv-model \u53EA\u6709 <code>Date</code> \u8FD9\u79CD\u60C5\u51B5\u3002</p><h3 id="selectormodelvalue-\u7684\u7C7B\u578B" tabindex="-1">SelectorModelValue \u7684\u7C7B\u578B <a class="header-anchor" href="#selectormodelvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>SelectorModelValue \u7684\u7C7B\u578B\u4E3A\uFF1A <code>SelectorValue | SelectorValue[]</code></p><h3 id="selectordetail-\u7684\u7ED3\u6784" tabindex="-1">SelectorDetail \u7684\u7ED3\u6784 <a class="header-anchor" href="#selectordetail-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><a href="./DatePicker.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>\u9ED8\u8BA4\u4E3A\u9009\u62E9\u65F6\u95F4\u7684 Date \u5B9E\u4F8B\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 <code>formatTemplate</code> \u5219\u4E3A <code>formatTemplate</code> \u8F6C\u4E3A\u7ED3\u679C\uFF1B\u8FD8\u6709 <code>formatter/parser</code> \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8</td></tr><tr><td>label</td><td>string</td><td>\u683C\u5F0F\u5316\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E <code>formatTemplate</code>\uFF0C\u5219\u91C7\u7528\u5185\u7F6E\u6A21\u677F</td></tr></tbody></table><h3 id="datepickermode" tabindex="-1">DatePickerMode <a class="header-anchor" href="#datepickermode" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date</td><td>\u65E5\u671F (year-month-day)</td></tr><tr><td>time</td><td>\u65F6\u95F4 (hour-minute-second)</td></tr><tr><td>datetime</td><td>\u65E5\u671F\u65F6\u95F4 (year-month-day-hour-minute-second)</td></tr><tr><td>minute-second</td><td>\u5206\u79D2</td></tr><tr><td>hour-minute</td><td>\u65F6\u5206</td></tr><tr><td>hour-minute-second</td><td>\u65F6\u5206\u79D2</td></tr><tr><td>day-hour</td><td>\u5929\u65F6</td></tr><tr><td>month-day</td><td>\u6708\u65E5</td></tr><tr><td>month-day-hour</td><td>\u6708\u65E5\u65F6</td></tr><tr><td>month-day-hour-minute</td><td>\u6708\u65E5\u65F6\u5206</td></tr><tr><td>year-month</td><td>\u5E74\u6708</td></tr><tr><td>year-month-day</td><td>\u5E74\u6708\u65E5</td></tr><tr><td>year-month-day-hour</td><td>\u5E74\u6708\u65E5\u65F6</td></tr><tr><td>year-month-day-hour-minute</td><td>\u5E74\u6708\u65E5\u65F6\u5206</td></tr><tr><td>year-month-day-hour-minute-second</td><td>\u5E74\u6708\u65E5\u65F6\u5206\u79D2</td></tr></tbody></table><h3 id="datepickeroptionfilter" tabindex="-1">DatePickerOptionFilter <a class="header-anchor" href="#datepickeroptionfilter" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">DatePickerOptionFilter</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token builtin">number</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">&#39;year&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;month&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;day&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hour&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;minute&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7\u8FD4\u56DE <code>false</code> \u6765\u8FC7\u6EE4\u6307\u5B9A\u9009\u9879\u3002</p><h3 id="formatter-parser" tabindex="-1">formatter/parser <a class="header-anchor" href="#formatter-parser" aria-hidden="true">#</a></h3><p>\u9AD8\u9636\u914D\u7F6E\uFF0C<code>formatter</code> \u548C <code>parser</code> \u9700\u8981\u4E00\u540C\u8BBE\u7F6E\uFF0C\u5BF9 v-model \u7684\u503C\u8F6C\u4E3A\u81EA\u5B9A\u4E49\u503C\u3002</p><h4 id="selectorvalueformatter" tabindex="-1">SelectorValueFormatter <a class="header-anchor" href="#selectorvalueformatter" aria-hidden="true">#</a></h4><div class="language-TypeScript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">SelectorValueFormatter</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>valueArray<span class="token operator">:</span> SelectorValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> labelArray<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> SelectorValue <span class="token operator">|</span> SelectorValue<span class="token punctuation">[</span><span class="token punctuation">]</span>
        label<span class="token operator">:</span> <span class="token builtin">string</span>
      <span class="token punctuation">}</span>
    <span class="token operator">|</span> <span class="token punctuation">(</span>SelectorValue <span class="token operator">|</span> SelectorValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5C06 v-model \u7684\u539F\u59CB\u503C\u8F6C\u4E3A\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u503C\uFF0C\u503C\u9700\u8981\u6EE1\u8DB3 <a href="./DatePicker.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a> \u7684\u7C7B\u578B\u7EA6\u675F\uFF0C\u53EF\u4EE5\u8FD4\u56DE { value, label } \u5BF9\u4E24\u4E2A\u6570\u636E\u8FDB\u884C\u4FEE\u6539\uFF0C\u6216\u8005\u5355\u72EC\u8FD4\u56DE value\u3002</p><h4 id="selectorvalueparser" tabindex="-1">SelectorValueParser <a class="header-anchor" href="#selectorvalueparser" aria-hidden="true">#</a></h4><div class="language-TypeScript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">SelectorValueParser</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> SelectorValue<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8DDF <code>SelectorValueFormatter</code> \u76F8\u53CD\uFF0C\u5C06\u81EA\u5B9A\u4E49 v-model \u7684\u503C\u8F6C\u4E3A\u7EC4\u4EF6\u8BA4\u8BC6\u7684\u539F\u59CB\u6570\u7EC4\u3002</p><h2 id="datepicker" tabindex="-1">DatePicker <a class="header-anchor" href="#datepicker" aria-hidden="true">#</a></h2><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><p>\u6CE8\uFF1A</p><ul><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="datepicker-props" tabindex="-1">DatePicker Props <a class="header-anchor" href="#datepicker-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table><h2 id="datepicker-events" tabindex="-1">DatePicker Events <a class="header-anchor" href="#datepicker-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>payload: <a href="./DatePicker.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>SelectorOnChange</td></tr></tbody></table><h2 id="datepickerpopup" tabindex="-1">DatePickerPopup <a class="header-anchor" href="#datepickerpopup" aria-hidden="true">#</a></h2><p>\u65F6\u95F4\u9009\u62E9\u5F39\u7A97\u3002</p><h2 id="datepickerpopup-props" tabindex="-1">DatePickerPopup Props <a class="header-anchor" href="#datepickerpopup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5F39\u7A97</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr></tbody></table><h2 id="datepickerpopup-events" tabindex="-1">DatePickerPopup Events <a class="header-anchor" href="#datepickerpopup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u540E\u89E6\u53D1</td><td></td><td>PopupOnCancel</td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u89E6\u53D1</td><td>payload: <a href="./DatePicker.html#selectordetail-\u7684\u7ED3\u6784">SelectorDetail</a></td><td>DatePickerOnConfirm | SelectorOnConfirm</td></tr><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>payload: <a href="./DatePicker.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>SelectorOnChange</td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>payload: { state: <a href="./DatePicker.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td><td>PopupOnVisibleStateChange</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="datepickerview" tabindex="-1">DatePickerView <a class="header-anchor" href="#datepickerview" aria-hidden="true">#</a></h2><p>\u65F6\u95F4\u9009\u62E9\uFF0C\u5E73\u94FA\u5F62\u5F0F\u7684\u9009\u62E9\u5668\u3002</p><h2 id="datepickerview-events" tabindex="-1">DatePickerView Events <a class="header-anchor" href="#datepickerview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>change</td><td>\u6ED1\u52A8\u540E\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>payload: <a href="./DatePicker.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>SelectorOnChange</td></tr></tbody></table><h2 id="showdatepicker-object" tabindex="-1">showDatePicker(object) <a class="header-anchor" href="#showdatepicker-object" aria-hidden="true">#</a></h2><p>\u65E5\u671F\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>value</td><td>Date</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4\u9009\u62E9\u503C</td></tr><tr><td>mode</td><td><a href="./DatePicker.html#datepickermode">DatePickerMode</a></td><td></td><td>\u5426</td><td>\u9009\u62E9\u7684\u6A21\u5F0F\uFF0C\u53EF\u9009 &#39;date&#39;, &#39;time&#39;, &#39;datetime&#39; \u7B49</td></tr><tr><td>minDate</td><td>Date</td><td>\u5F53\u5929\u5BF9\u5E94 10 \u5E74\u524D\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5C0F\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>maxDate</td><td>Date</td><td>\u5F53\u5929\u6700\u540E\u4E00\u79D2\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5927\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>filter</td><td><a href="./DatePicker.html#datepickeroptionfilter">DatePickerOptionFilter</a></td><td></td><td>\u5426</td><td>\u9009\u9879\u8FC7\u6EE4\u5668</td></tr><tr><td>success</td><td>(payload: SuccessPayload) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u9009\u62E9\u9009\u9879\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>(e: Error) =&gt; void</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>() =&gt; void</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="successpayload" tabindex="-1">SuccessPayload <a class="header-anchor" href="#successpayload" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.label</td><td>string</td><td>&quot;2021-05-01&quot;</td></tr><tr><td>detail?.value</td><td>Date</td><td>\u5BF9\u5E94\u65E5\u671F\u7684 Date \u5B9E\u4F8B</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showDatePicker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;DatePicker&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> confirm<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,56),n=[s];function o(l,p,c,i,h,u){return a(),e("div",null,n)}var b=t(r,[["render",o]]);export{m as __pageData,b as default};
