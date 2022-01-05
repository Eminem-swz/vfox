import{_ as e,c as t,o as a,a as r}from"./app.9b8f0faa.js";const v='{"title":"Picker/PickerPopup/PickerView \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"\u516C\u5171 Props","slug":"\u516C\u5171-props"},{"level":3,"title":"PickerValue \u7684\u7C7B\u578B","slug":"pickervalue-\u7684\u7C7B\u578B"},{"level":3,"title":"PickerModelValue \u7684\u7C7B\u578B","slug":"pickermodelvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"PickerDetail \u7684\u7ED3\u6784","slug":"pickerdetail-\u7684\u7ED3\u6784"},{"level":3,"title":"options \u7684\u7ED3\u6784","slug":"options-\u7684\u7ED3\u6784"},{"level":3,"title":"formatter/parser","slug":"formatter-parser"},{"level":2,"title":"Picker","slug":"picker"},{"level":2,"title":"Picker Props","slug":"picker-props"},{"level":2,"title":"Picker Events","slug":"picker-events"},{"level":2,"title":"PickerPopup","slug":"pickerpopup"},{"level":2,"title":"PickerPopup Props","slug":"pickerpopup-props"},{"level":2,"title":"PickerPopup Events","slug":"pickerpopup-events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"PickerView","slug":"pickerview"},{"level":2,"title":"PickerView Events","slug":"pickerview-events"}],"relativePath":"components/Picker.md","lastUpdated":1641397564072}',d={},i=r(`<h1 id="picker-pickerpopup-pickerview-\u9009\u62E9\u5668" tabindex="-1">Picker/PickerPopup/PickerView \u9009\u62E9\u5668 <a class="header-anchor" href="#picker-pickerpopup-pickerview-\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Picker, PickerPopup, PickerView } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="\u516C\u5171-props" tabindex="-1">\u516C\u5171 Props <a class="header-anchor" href="#\u516C\u5171-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td><a href="./Picker.html#pickervalue-\u7684\u7C7B\u578B">PickerValue</a> | <a href="./Picker.html#pickervalue-\u7684\u7C7B\u578B">PickerValue</a>[]</td><td>[]</td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>options</td><td><a href="./Picker.html#options-\u7684\u7ED3\u6784">Options</a></td><td>[]</td><td>\u662F</td><td>\u6570\u636E\u96C6</td></tr><tr><td>field-names</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5 key</td></tr><tr><td>formatter</td><td><a href="./Picker.html#pickervalueformatter">PickerValueFormatter</a></td><td></td><td>\u5426</td><td>\u548C <code>parser</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u8F6C\u5316</td></tr><tr><td>parser</td><td><a href="./Picker.html#pickervalueparser">PickerValueParser</a></td><td></td><td>\u5426</td><td>\u548C <code>formatter</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u53CD\u8F6C\u5316</td></tr></tbody></table><h3 id="pickervalue-\u7684\u7C7B\u578B" tabindex="-1">PickerValue \u7684\u7C7B\u578B <a class="header-anchor" href="#pickervalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u7684\u7C7B\u578B\u4E3A\uFF1A<code>string | number | Date</code></p><p>\u5728\u4E0D\u81EA\u5B9A\u4E49 <code>formatter/parser</code> \u7684\u60C5\u51B5\u4E0B\uFF0Cv-model \u53EA\u6709 <code>(string | number)[]</code> \u8FD9\u79CD\u60C5\u51B5\u3002</p><h3 id="pickermodelvalue-\u7684\u7C7B\u578B" tabindex="-1">PickerModelValue \u7684\u7C7B\u578B <a class="header-anchor" href="#pickermodelvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>PickerModelValue \u7684\u7C7B\u578B\u4E3A\uFF1A <code>PickerValue | PickerValue[]</code></p><h3 id="pickerdetail-\u7684\u7ED3\u6784" tabindex="-1">PickerDetail \u7684\u7ED3\u6784 <a class="header-anchor" href="#pickerdetail-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><a href="./Picker.html#pickermodelvalue-\u7684\u7C7B\u578B">PickerModelValue</a></td><td>[&quot;zaolei&quot;, &quot;lunzao&quot;]\uFF1B<code>formatter/parser</code> \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8</td></tr><tr><td>label</td><td>string</td><td>&quot;\u85FB\u7C7B/\u8F6E\u85FB&quot;</td></tr></tbody></table><h3 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u4F1A\u901A\u8FC7 options \u503C\u7684\u7ED3\u6784\u6765\u5206\u6790\u662F\u5426\u662F\u7EA7\u8054\u6A21\u5F0F\u3002</p><p>\u5224\u65AD\u662F\u7EA7\u8054\u7684\u65B9\u5F0F\u662F\uFF1A\u4E00\u7EF4\u6570\u7EC4\u4E14\u5B50\u6570\u636E\u4E2D\u6709 children \u5217\u8868\u3002</p><h4 id="\u5355\u5217" tabindex="-1">\u5355\u5217 <a class="header-anchor" href="#\u5355\u5217" aria-hidden="true">#</a></h4><div class="language-"><pre><code>[
  2016,
  2017,
  2018,
  2019,
  2020
]
</code></pre></div><p>\u6216\u8005\u5B8C\u6574\u5199\u6CD5\uFF1A</p><div class="language-"><pre><code>[
  {
    &quot;label&quot;: &quot;2016&quot;,
    &quot;value&quot;: 2016,
    &quot;disabled&quot;: false
  },
  {
    &quot;label&quot;: &quot;2017&quot;,
    &quot;value&quot;: 2017,
    &quot;disabled&quot;: false
  },
  {
    &quot;label&quot;: &quot;2018&quot;,
    &quot;value&quot;: 2018,
    &quot;disabled&quot;: false
  },
  {
    &quot;label&quot;: &quot;2019&quot;,
    &quot;value&quot;: 2019,
    &quot;disabled&quot;: false
  },
  {
    &quot;label&quot;: &quot;2020&quot;,
    &quot;value&quot;: 2020,
    &quot;disabled&quot;: false
  }
]
</code></pre></div><h4 id="\u591A\u5217" tabindex="-1">\u591A\u5217 <a class="header-anchor" href="#\u591A\u5217" aria-hidden="true">#</a></h4><div class="language-"><pre><code>[
  [
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ],
  [
    &quot;\u6625&quot;,
    &quot;\u590F&quot;,
    &quot;\u79CB&quot;,
    &quot;\u51AC&quot;
  ]
]
</code></pre></div><h4 id="\u7EA7\u8054" tabindex="-1">\u7EA7\u8054 <a class="header-anchor" href="#\u7EA7\u8054" aria-hidden="true">#</a></h4><div class="language-"><pre><code>[
  {
    label: &#39;\u7A7A\u8C03&#39;,
    value: &#39;kongtiao&#39;,
    children: [
      {
        label: &#39;\u5BB6\u7528\u7A7A\u8C03&#39;,
        value: &#39;jiayongkongtiao&#39;,
        children: [
          {
            label: &#39;\u6302\u5F0F\u7A7A\u8C03&#39;,
            value: &#39;guashikongtiao&#39;
          },
          {
            label: &#39;\u67DC\u5F0F\u7A7A\u8C03&#39;,
            value: &#39;guishikongtiao&#39;
          }
        ]
      },
      {
        label: &#39;\u53A8\u623F\u7A7A\u8C03&#39;,
        value: &#39;chufangkongtiao&#39;
      }
    ]
  },
  {
    label: &#39;\u51B0\u7BB1&#39;,
    value: &#39;bingxiang&#39;,
    children: [
      {
        label: &#39;\u53CC\u95E8&#39;,
        value: &#39;shuangmen&#39;
      },
      {
        label: &#39;\u4E09\u95E8&#39;,
        value: &#39;sanmen&#39;
      },
      {
        label: &#39;\u5BF9\u5F00\u95E8&#39;,
        value: &#39;duikaimen&#39;
      },
      {
        label: &#39;\u591A\u95E8&#39;,
        value: &#39;duomen&#39;
      }
    ]
  },
  {
    label: &#39;\u6D17\u8863\u673A&#39;,
    value: &#39;xiyiji&#39;,
    children: [
      {
        label: &#39;\u6CE2\u8F6E&#39;,
        value: &#39;bolun&#39;
      },
      {
        label: &#39;\u6EDA\u7B52&#39;,
        value: &#39;guntong&#39;
      },
      {
        label: &#39;\u6D17\u70D8\u4E00\u4F53&#39;,
        value: &#39;xihongyiti&#39;
      }
    ]
  }
]
</code></pre></div><h3 id="formatter-parser" tabindex="-1">formatter/parser <a class="header-anchor" href="#formatter-parser" aria-hidden="true">#</a></h3><p>\u9AD8\u9636\u914D\u7F6E\uFF0C<code>formatter</code> \u548C <code>parser</code> \u9700\u8981\u4E00\u540C\u8BBE\u7F6E\uFF0C\u5BF9 v-model \u7684\u503C\u8F6C\u4E3A\u81EA\u5B9A\u4E49\u503C\u3002</p><h4 id="pickervalueformatter" tabindex="-1">PickerValueFormatter <a class="header-anchor" href="#pickervalueformatter" aria-hidden="true">#</a></h4><div class="language-"><pre><code>interface PickerValueFormatter {
  (valueArray: PickerValue[], labelArray: string[]):
    | {
        value: PickerValue | PickerValue[]
        label: string
      }
    | (PickerValue | PickerValue[])
}
</code></pre></div><p>\u5C06 v-model \u7684\u539F\u59CB\u503C\u8F6C\u4E3A\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u503C\uFF0C\u503C\u9700\u8981\u6EE1\u8DB3 <code>PickerValue | PickerValue[]</code> \u7684\u7C7B\u578B\u7EA6\u675F\uFF0C\u53EF\u4EE5\u8FD4\u56DE { value, label } \u5BF9\u4E24\u4E2A\u6570\u636E\u8FDB\u884C\u4FEE\u6539\uFF0C\u6216\u8005\u5355\u72EC\u8FD4\u56DE value\u3002</p><h4 id="pickervalueparser" tabindex="-1">PickerValueParser <a class="header-anchor" href="#pickervalueparser" aria-hidden="true">#</a></h4><div class="language-"><pre><code>interface PickerValueParser {
  (value: unknown): PickerValue[]
}
</code></pre></div><p>\u8DDF <code>PickerValueFormatter</code> \u76F8\u53CD\uFF0C\u5C06\u81EA\u5B9A\u4E49 v-model \u7684\u503C\u8F6C\u4E3A\u7EC4\u4EF6\u8BA4\u8BC6\u7684\u539F\u59CB\u6570\u7EC4\u3002</p><h2 id="picker" tabindex="-1">Picker <a class="header-anchor" href="#picker" aria-hidden="true">#</a></h2><p>\u9009\u62E9\u5668\u3002</p><p>\u6CE8\uFF1A</p><ul><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="picker-props" tabindex="-1">Picker Props <a class="header-anchor" href="#picker-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table><h2 id="picker-events" tabindex="-1">Picker Events <a class="header-anchor" href="#picker-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><a href="./Picker.html#pickermodelvalue-\u7684\u7C7B\u578B">PickerModelValue</a></td></tr></tbody></table><h2 id="pickerpopup" tabindex="-1">PickerPopup <a class="header-anchor" href="#pickerpopup" aria-hidden="true">#</a></h2><p>\u9009\u62E9\u5F39\u7A97\u3002</p><h2 id="pickerpopup-props" tabindex="-1">PickerPopup Props <a class="header-anchor" href="#pickerpopup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5F39\u7A97</td></tr><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr></tbody></table><h2 id="pickerpopup-events" tabindex="-1">PickerPopup Events <a class="header-anchor" href="#pickerpopup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u540E\u89E6\u53D1</td><td></td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u89E6\u53D1</td><td><a href="./Picker.html#pickerdetail-\u7684\u7ED3\u6784">PickerDetail</a></td></tr><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><a href="./Picker.html#pickermodelvalue-\u7684\u7C7B\u578B">PickerModelValue</a></td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./DatePicker.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h2 id="pickerview" tabindex="-1">PickerView <a class="header-anchor" href="#pickerview" aria-hidden="true">#</a></h2><p>\u9009\u62E9\uFF0C\u5E73\u94FA\u5F62\u5F0F\u3002</p><h2 id="pickerview-events" tabindex="-1">PickerView Events <a class="header-anchor" href="#pickerview-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6ED1\u52A8\u540E\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><a href="./Picker.html#pickermodelvalue-\u7684\u7C7B\u578B">PickerModelValue</a></td></tr></tbody></table>`,52),l=[i];function n(o,h,c,p,u,s){return a(),t("div",null,l)}var b=e(d,[["render",n]]);export{v as __pageData,b as default};
