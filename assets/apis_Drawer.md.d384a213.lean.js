import{_ as t,c as d,o as e,a}from"./app.8ec95c28.js";const p='{"title":"Drawer \u62BD\u5C49\u7C7B\u578B\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"Picker.showPicker(object)","slug":"picker-showpicker-object"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"object.success \u56DE\u8C03\u53C2\u6570","slug":"object-success-\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"Cascader.showCascader(object)","slug":"cascader-showcascader-object"},{"level":3,"title":"Params","slug":"params-1"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":2,"title":"ActionSheet.showActionSheet(object)","slug":"actionsheet-showactionsheet-object"},{"level":3,"title":"Params","slug":"params-2"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":2,"title":"DatePicker.showDatePicker(object)","slug":"datepicker-showdatepicker-object"},{"level":3,"title":"Params","slug":"params-3"},{"level":3,"title":"object.success \u56DE\u8C03\u53C2\u6570","slug":"object-success-\u56DE\u8C03\u53C2\u6570-3"},{"level":3,"title":"Usage","slug":"usage-3"},{"level":2,"title":"Calendar.showCalendar(object)","slug":"calendar-showcalendar-object"},{"level":3,"title":"Params","slug":"params-4"},{"level":3,"title":"object.success \u56DE\u8C03\u53C2\u6570","slug":"object-success-\u56DE\u8C03\u53C2\u6570-4"},{"level":3,"title":"Usage","slug":"usage-4"}],"relativePath":"apis/Drawer.md","lastUpdated":1637060426075}',r={},c=a(`__VP_STATIC_START__<h1 id="drawer-\u62BD\u5C49\u7C7B\u578B\u5F39\u7A97" tabindex="-1">Drawer \u62BD\u5C49\u7C7B\u578B\u5F39\u7A97 <a class="header-anchor" href="#drawer-\u62BD\u5C49\u7C7B\u578B\u5F39\u7A97" aria-hidden="true">#</a></h1><h2 id="picker-showpicker-object" tabindex="-1">Picker.showPicker(object) <a class="header-anchor" href="#picker-showpicker-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>options</td><td>array</td><td>[]</td><td>\u5426</td><td>\u6570\u636E\u96C6\uFF0C\u53C2\u8003 <a href="./../components/Picker.html#options-\u7684\u7ED3\u6784">Picker options</a></td></tr><tr><td>value</td><td>string/number/string[]/number[]</td><td>[]</td><td>\u5426</td><td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879\uFF0C\u53C2\u8003 <a href="./../components/Picker.html#modelvalue-\u7684\u7ED3\u6784">Picker modelValue</a></td></tr><tr><td>fieldNames</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5 key</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.value</td><td>number[]/string[]</td><td>[&quot;zaolei&quot;, &quot;lunzao&quot;]</td></tr><tr><td>detail?.valueString</td><td>string</td><td>&quot;zaolei/lunzao&quot;</td></tr><tr><td>detail?.label</td><td>string[]</td><td>[&quot;\u85FB\u7C7B&quot;, &quot;\u8F6E\u85FB&quot;]</td></tr><tr><td>detail?.labelString</td><td>string</td><td>&quot;\u85FB\u7C7B/\u8F6E\u85FB&quot;</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Picker } from &#39;vfox&#39;

Picker.showPicker({
  title: &#39;Picker&#39;,
  options: multiOptions,
  success: ({ confirm, cancel, detail }) =&gt; {
    ...
  }
})
</code></pre></div><h2 id="cascader-showcascader-object" tabindex="-1">Cascader.showCascader(object) <a class="header-anchor" href="#cascader-showcascader-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u7EA7\u8054\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u62E9\u65F6\u5F39\u7A97\u7684\u6807\u9898\u6587\u6848</td></tr><tr><td>options</td><td>array</td><td>[]</td><td>\u5426</td><td>\u6570\u636E\u96C6\uFF0C\u53C2\u8003 <a href="./../components/Cascader.html#options-\u7684\u7ED3\u6784">Cascader options</a></td></tr><tr><td>value</td><td>string/number/string[]/number[]</td><td>[]</td><td>\u5426</td><td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879\uFF0C\u8003\u53C2\u8003 <a href="./../components/Cascader.html#modelvalue-\u7684\u7ED3\u6784">Cascader modelValue</a></td></tr><tr><td>fieldNames</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5 key</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="object-success-\u56DE\u8C03\u53C2\u6570-1" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.value</td><td>number[]/string[]</td><td>[&quot;zaolei&quot;, &quot;lunzao&quot;]</td></tr><tr><td>detail?.valueString</td><td>string</td><td>&quot;zaolei/lunzao&quot;</td></tr><tr><td>detail?.label</td><td>string[]</td><td>[&quot;\u85FB\u7C7B&quot;, &quot;\u8F6E\u85FB&quot;]</td></tr><tr><td>detail?.labelString</td><td>string</td><td>&quot;\u85FB\u7C7B/\u8F6E\u85FB&quot;</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Cascader } from &#39;vfox&#39;

Cascader.showCascader({
  title: &#39;\u690D\u7269&#39;,
  options: cascadeOptions,
  success: ({ confirm, cancel, detail }) =&gt; {
    ...
  }
})
</code></pre></div><h2 id="actionsheet-showactionsheet-object" tabindex="-1">ActionSheet.showActionSheet(object) <a class="header-anchor" href="#actionsheet-showactionsheet-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u52A8\u4F5C\u9762\u677F\u3002</p><h3 id="params-2" tabindex="-1">Params <a class="header-anchor" href="#params-2" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u63D0\u793A\u7684\u6807\u9898\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u4E0D\u5C55\u793A</td></tr><tr><td>options</td><td>array</td><td></td><td>\u5426</td><td>\u9009\u9879\u5217\u8868\uFF0C\u53C2\u8003 <a href="./../components/ActionSheet.html#options-\u7684\u7ED3\u6784">ActionSheet options</a></td></tr><tr><td>showCancel</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>cancelText</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u9009\u62E9\u9009\u9879\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="object-success-\u56DE\u8C03\u53C2\u6570-2" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570-2" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u9009\u9879\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88</td></tr><tr><td>detail?.item</td><td>any</td><td>options[index] \u7684\u526F\u672C</td></tr><tr><td>detail?.index</td><td>number</td><td>\u7D22\u5F15</td></tr></tbody></table><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { ActionSheet } from &#39;vfox&#39;

ActionSheet.showActionSheet({
  title: &#39;\u6807\u9898&#39;,
  options: [
    {
      name: &#39;\u9009\u98791&#39;,
      description: &#39;\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848&#39;
    },
    {
      name: &#39;\u9009\u98792&#39;
    },
    {
      name: &#39;\u9009\u98793&#39;
    }
  ],
  showCancel: true,
  success: ({ confirm, cancel, detail }) =&gt; {
    ...
  }
})
</code></pre></div><h2 id="datepicker-showdatepicker-object" tabindex="-1">DatePicker.showDatePicker(object) <a class="header-anchor" href="#datepicker-showdatepicker-object" aria-hidden="true">#</a></h2><p>\u65E5\u671F\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="params-3" tabindex="-1">Params <a class="header-anchor" href="#params-3" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>value</td><td>Date</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4\u9009\u62E9\u503C</td></tr><tr><td>mode</td><td>string</td><td></td><td>\u5426</td><td>\u9009\u62E9\u7684\u6A21\u5F0F\uFF0C\u53EF\u9009 &#39;date&#39;, &#39;time&#39;, &#39;datetime&#39; \u7B49\uFF0C\u53C2\u8003 <a href="./../components/DatePicker.html#initialmode-\u7684\u5408\u6CD5\u503C">DatePicker initialMode</a></td></tr><tr><td>minDate</td><td>Date</td><td>\u5F53\u5929\u5BF9\u5E94 10 \u5E74\u524D\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5C0F\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>maxDate</td><td>Date</td><td>\u5F53\u5929\u6700\u540E\u4E00\u79D2\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5927\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>filter</td><td>Function</td><td></td><td>\u5426</td><td>\u9009\u9879\u8FC7\u6EE4\u5668\uFF0C<code>filter(number: number, type: &#39;year&#39; | &#39;month&#39; | &#39;day&#39; | &#39;hour&#39; | &#39;minute&#39; | &#39;second&#39;) =&gt; boolean</code></td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u53C2\u6570-3" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570-3" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.formatted</td><td>string</td><td>&quot;2021-05-01&quot;</td></tr><tr><td>detail?.value</td><td>Date</td><td>\u5BF9\u5E94\u65E5\u671F\u7684 Date \u5B9E\u4F8B</td></tr><tr><td>detail?.valueArray</td><td>number[]</td><td>[2021, 5, 1]</td></tr></tbody></table><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { DatePicker } from &#39;vfox&#39;

DatePicker.showDatePicker({
  title: &#39;DatePicker&#39;,
  success: ({ confirm, cancel, detail }) =&gt; {
    ...
  }
})
</code></pre></div><h2 id="calendar-showcalendar-object" tabindex="-1">Calendar.showCalendar(object) <a class="header-anchor" href="#calendar-showcalendar-object" aria-hidden="true">#</a></h2><p>\u65E5\u5386\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="params-4" tabindex="-1">Params <a class="header-anchor" href="#params-4" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>&#39;single&#39;</td><td>\u5426</td><td>\u6A21\u5F0F\uFF1A<code>single</code> \u8868\u793A\u9009\u62E9\u4E00\u5929\uFF0C<code>range</code> \u9009\u62E9\u4E00\u4E2A\u65E5\u671F\u533A\u95F4</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>value</td><td>Date/Date[]</td><td>[]</td><td>\u5426</td><td>\u9ED8\u8BA4\u9009\u62E9\u503C\uFF0C<code>range</code> \u6A21\u5F0F\u4E0B\u9700\u8981\u63D0\u4F9B\u4E24\u4E2A</td></tr><tr><td>minDate</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5C0F\u503C</td></tr><tr><td>maxDate</td><td>Date</td><td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td><td>\u5426</td><td>\u53EF\u9009\u6700\u5927\u503C</td></tr><tr><td>allowSameDay</td><td>boolean</td><td>false</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u8BBE\u7F6E\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u53EF\u4EE5\u540C\u4E00\u5929</td></tr><tr><td>maxRange</td><td>number</td><td>Infinity</td><td>\u5426</td><td><code>range</code> \u6A21\u5F0F\u751F\u6548\uFF0C\u9009\u62E9\u533A\u95F4\u7684\u6700\u957F\u5929\u6570</td></tr><tr><td>dayHandler</td><td>Function</td><td></td><td>\u5426</td><td>\u65E5\u5386\u6BCF\u4E2A\u65E5\u671F\u5904\u7406\u51FD\u6570\uFF0C\u53C2\u8003 <a href="./../components/Calendar.html#dayhandler-\u51FD\u6570">Calendar dayHandler</a></td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u53C2\u6570-4" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570-4" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.value</td><td>Date[]</td><td>\u5F00\u59CB 1 \u4E2A Date \u5B9E\u4F8B \u6216 \u5F00\u59CB\u548C\u7ED3\u675F 2 \u4E2A Date \u5B9E\u4F8B</td></tr><tr><td>detail?.valueArray</td><td>number[][]</td><td>\u5982\uFF1A[[2021, 5, 1], [2021, 5, 30]]</td></tr><tr><td>detail?.formatted</td><td>string</td><td>05-21 ~ 05-22</td></tr><tr><td>detail?.rangeCount</td><td>number</td><td>\u9009\u62E9\u533A\u95F4\u6301\u7EED\u7684\u5929\u6570\uFF08\u542B\u9996\u5C3E\uFF09</td></tr></tbody></table><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Calendar } from &#39;vfox&#39;

Calendar.showCalendar({
  type: &#39;range&#39;,
  showClose: true,
  success: ({ confirm, cancel, detail }) =&gt; {
    ...
  }
})
</code></pre></div>__VP_STATIC_END__`,46),o=[c];function n(s,i,l,h,u,b){return e(),d("div",null,o)}var g=t(r,[["render",n]]);export{p as __pageData,g as default};