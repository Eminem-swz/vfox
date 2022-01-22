import{_ as e,c as t,o as a,a as r}from"./app.8c4fff02.js";const m='{"title":"Cascader \u7EA7\u8054\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"SelectorValue \u7684\u7C7B\u578B","slug":"selectorvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"SelectorModelValue \u7684\u7C7B\u578B","slug":"selectormodelvalue-\u7684\u7C7B\u578B"},{"level":3,"title":"options \u7684\u7ED3\u6784","slug":"options-\u7684\u7ED3\u6784"},{"level":3,"title":"formatter/parser","slug":"formatter-parser"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/Cascader.md","lastUpdated":1642841591795}',l={},d=r(`<h1 id="cascader-\u7EA7\u8054\u9009\u62E9\u5668" tabindex="-1">Cascader \u7EA7\u8054\u9009\u62E9\u5668 <a class="header-anchor" href="#cascader-\u7EA7\u8054\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Cascader } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>options</td><td><a href="./Cascader.html#options-\u7684\u7ED3\u6784">Options</a></td><td>[]</td><td>\u5426</td><td>\u6570\u636E\u96C6</td></tr><tr><td>v-model</td><td><a href="./Cascader.html#selectorvalue-\u7684\u7C7B\u578B">SelectorValue</a> | <a href="./Cascader.html#selectorvalue-\u7684\u7C7B\u578B">SelectorValue</a>[]</td><td>[]</td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>field-names</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5 key</td></tr><tr><td>formatter</td><td><a href="./Cascader.html#selectorvalueformatter">SelectorValueFormatter</a></td><td></td><td>\u5426</td><td>\u548C <code>parser</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u8F6C\u5316</td></tr><tr><td>parser</td><td><a href="./Cascader.html#selectorvalueparser">SelectorValueParser</a></td><td></td><td>\u5426</td><td>\u548C <code>formatter</code> \u6210\u5BF9\u8BBE\u7F6E\uFF0C\u5BF9\u4E8E v-model \u7684\u503C\u8FDB\u884C\u53CD\u8F6C\u5316</td></tr></tbody></table><h3 id="selectorvalue-\u7684\u7C7B\u578B" tabindex="-1">SelectorValue \u7684\u7C7B\u578B <a class="header-anchor" href="#selectorvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u7684\u7C7B\u578B\u4E3A\uFF1A<code>string | number | Date</code></p><p>\u5728\u4E0D\u81EA\u5B9A\u4E49 <code>formatter/parser</code> \u7684\u60C5\u51B5\u4E0B\uFF0Cv-model \u53EA\u6709 <code>(string | number)[]</code> \u8FD9\u79CD\u60C5\u51B5\u3002</p><h3 id="selectormodelvalue-\u7684\u7C7B\u578B" tabindex="-1">SelectorModelValue \u7684\u7C7B\u578B <a class="header-anchor" href="#selectormodelvalue-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>SelectorModelValue \u7684\u7C7B\u578B\u4E3A\uFF1A <code>SelectorValue | SelectorValue[]</code></p><h3 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[
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
</code></pre></div><h3 id="formatter-parser" tabindex="-1">formatter/parser <a class="header-anchor" href="#formatter-parser" aria-hidden="true">#</a></h3><p>\u9AD8\u9636\u914D\u7F6E\uFF0C<code>formatter</code> \u548C <code>parser</code> \u9700\u8981\u4E00\u540C\u8BBE\u7F6E\uFF0C\u5BF9 v-model \u7684\u503C\u8F6C\u4E3A\u81EA\u5B9A\u4E49\u503C\u3002</p><h4 id="selectorvalueformatter" tabindex="-1">SelectorValueFormatter <a class="header-anchor" href="#selectorvalueformatter" aria-hidden="true">#</a></h4><div class="language-"><pre><code>interface SelectorValueFormatter {
  (valueArray: SelectorValue[], labelArray: string[]):
    | {
        value: SelectorValue | SelectorValue[]
        label: string
      }
    | (SelectorValue | SelectorValue[])
}
</code></pre></div><p>\u5C06 v-model \u7684\u539F\u59CB\u503C\u8F6C\u4E3A\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u503C\uFF0C\u503C\u9700\u8981\u6EE1\u8DB3 <code>SelectorValue | SelectorValue[]</code> \u7684\u7C7B\u578B\u7EA6\u675F\uFF0C\u53EF\u4EE5\u8FD4\u56DE { value, label } \u5BF9\u4E24\u4E2A\u6570\u636E\u8FDB\u884C\u4FEE\u6539\uFF0C\u6216\u8005\u5355\u72EC\u8FD4\u56DE value\u3002</p><h4 id="selectorvalueparser" tabindex="-1">SelectorValueParser <a class="header-anchor" href="#selectorvalueparser" aria-hidden="true">#</a></h4><div class="language-"><pre><code>interface SelectorValueParser {
  (value: unknown): SelectorValue[]
}
</code></pre></div><p>\u8DDF <code>SelectorValueFormatter</code> \u76F8\u53CD\uFF0C\u5C06\u81EA\u5B9A\u4E49 v-model \u7684\u503C\u8F6C\u4E3A\u7EC4\u4EF6\u8BA4\u8BC6\u7684\u539F\u59CB\u6570\u7EC4\u3002</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>\u51FD\u6570 TypeScript</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E value \u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td><a href="./Cascader.html#selectormodelvalue-\u7684\u7C7B\u578B">SelectorModelValue</a></td><td>SelectorOnChange</td></tr></tbody></table>`,25),o=[d];function n(c,s,i,h,u,p){return a(),t("div",null,o)}var f=e(l,[["render",n]]);export{m as __pageData,f as default};
