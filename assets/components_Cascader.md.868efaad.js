import{_ as t,c as e,o as d,a}from"./app.6fdd4400.js";const g='{"title":"Cascader \u7EA7\u8054\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"options \u7684\u7ED3\u6784","slug":"options-\u7684\u7ED3\u6784"},{"level":3,"title":"modelValue \u7684\u7ED3\u6784","slug":"modelvalue-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":3,"title":"DetailObject \u7684\u7ED3\u6784","slug":"detailobject-\u7684\u7ED3\u6784"}],"relativePath":"components/Cascader.md","lastUpdated":1638797921625}',n={},l=a(`<h1 id="cascader-\u7EA7\u8054\u9009\u62E9\u5668" tabindex="-1">Cascader \u7EA7\u8054\u9009\u62E9\u5668 <a class="header-anchor" href="#cascader-\u7EA7\u8054\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><ul><li>\u53EF\u4EE5\u914D\u5408 <a href="./Form.html">Form</a> \u548C <a href="./Form.html#formitem-\u8868\u5355\u9879">FormItem</a> \u4F7F\u7528\u3002</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td><a href="./Form.html">Form</a> \u7684\u6807\u8BC6</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u6CA1\u6709\u9009\u4E2D\u503C\u7684\u63D0\u793A\uFF0C\u4E5F\u4F1A\u7528\u5728\u5F39\u7A97\u6807\u9898\u4E0A</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>options</td><td>array</td><td>[]</td><td>\u5426</td><td>\u6570\u636E\u96C6</td></tr><tr><td>v-modal</td><td>string/number/string[]/number[]</td><td>[]</td><td>\u5426</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>format-string</td><td>boolean</td><td>false</td><td>\u5426</td><td>value \u53CC\u5411\u7ED1\u5B9A\u503C\u662F\u4E3A\u5B57\u7B26\u4E32</td></tr><tr><td>initial-separator</td><td>string</td><td>&#39;/&#39;</td><td>\u5426</td><td>\u5206\u9694\u7B26</td></tr><tr><td>field-names</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5 key</td></tr></tbody></table><h3 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[
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
</code></pre></div><h3 id="modelvalue-\u7684\u7ED3\u6784" tabindex="-1">modelValue \u7684\u7ED3\u6784 <a class="header-anchor" href="#modelvalue-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[ &#39;xiyiji&#39;, &#39;guntong&#39; ]
</code></pre></div><p>\u5F53 formatString \u4E3A true \u65F6\uFF0C\u6839\u636E\u5206\u5272\u7EBF <code>/</code> \u8FD4\u56DE\uFF1A</p><div class="language-"><pre><code>xiyiji/guntong
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u540E value \u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td><a href="./Cascader.html#detailobject-\u7684\u7ED3\u6784">DetailObject</a></td></tr><tr><td>visible-state-change</td><td>\u5C55\u793A\u9690\u85CF\u65F6\u89E6\u53D1</td><td>{ state: <a href="./Cascader.html#visiblestate-\u503C\u8BF4\u660E">VisibleState</a> }</td></tr></tbody></table><h3 id="visiblestate-\u503C\u8BF4\u660E" tabindex="-1">VisibleState \u503C\u8BF4\u660E <a class="header-anchor" href="#visiblestate-\u503C\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>shown</td><td>\u5C55\u793A\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr><tr><td>hidden</td><td>\u9690\u85CF\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>\u53EF\u80FD\u643A\u5E26\u5176\u4ED6\u53C2\u6570 cancel, maskClick, closeClick \u7B49</td></tr></tbody></table><h3 id="detailobject-\u7684\u7ED3\u6784" tabindex="-1">DetailObject \u7684\u7ED3\u6784 <a class="header-anchor" href="#detailobject-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>number[]/string[]</td><td>[&quot;zaolei&quot;, &quot;lunzao&quot;]</td></tr><tr><td>valueString</td><td>string</td><td>&quot;zaolei/lunzao&quot;</td></tr><tr><td>label</td><td>string[]</td><td>[&quot;\u85FB\u7C7B&quot;, &quot;\u8F6E\u85FB&quot;]</td></tr><tr><td>labelString</td><td>string</td><td>&quot;\u85FB\u7C7B/\u8F6E\u85FB&quot;</td></tr></tbody></table>`,16),r=[l];function i(o,h,s,c,u,b){return d(),e("div",null,r)}var m=t(n,[["render",i]]);export{g as __pageData,m as default};
