import{_ as t,c as e,o as r,a}from"./app.8ec95c28.js";const p='{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"Form Props","slug":"form-props"},{"level":3,"title":"rules \u7ED3\u6784","slug":"rules-\u7ED3\u6784"},{"level":2,"title":"Form Events","slug":"form-events"},{"level":3,"title":"\u56DE\u8C03\u53C2\u6570 value \u7684\u7ED3\u6784","slug":"\u56DE\u8C03\u53C2\u6570-value-\u7684\u7ED3\u6784"},{"level":2,"title":"Form Slots","slug":"form-slots"},{"level":2,"title":"FormItem \u8868\u5355\u9879","slug":"formitem-\u8868\u5355\u9879"},{"level":2,"title":"FormItem Props","slug":"formitem-props"},{"level":3,"title":"rules \u7ED3\u6784","slug":"rules-\u7ED3\u6784-1"}],"relativePath":"components/Form.md","lastUpdated":1637303582769}',d={},o=a(`__VP_STATIC_START__<h1 id="form-\u8868\u5355" tabindex="-1">Form \u8868\u5355 <a class="header-anchor" href="#form-\u8868\u5355" aria-hidden="true">#</a></h1><ul><li><p>\u5F53\u70B9\u51FB <code>Form</code> \u4E2D form-type \u4E3A submit \u7684 <a href="./Button.html">Button</a> \u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u5C06\u8868\u5355\u7EC4\u4EF6\u4E2D\u7684 value \u503C\u8FDB\u884C\u63D0\u4EA4\uFF0C\u9700\u8981\u5728\u8868\u5355\u7EC4\u4EF6\u4E2D\u52A0\u4E0A name \u6765\u4F5C\u4E3A key\u3002</p></li><li><p>\u914D\u5408 <a href="./Form.html#formitem-\u8868\u5355\u9879">FormItem</a> \u7EC4\u4EF6\u53EF\u4EE5\u5B8C\u6210\u4E00\u5957\u5E26\u6821\u9A8C\u7684\u8868\u5355\u3002</p></li></ul><h2 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>rules</td><td>Object</td><td></td><td>\u5426</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td></tr></tbody></table><h3 id="rules-\u7ED3\u6784" tabindex="-1">rules \u7ED3\u6784 <a class="header-anchor" href="#rules-\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>{
  nickname: [
    { required: true, message: &#39;\u8BF7\u8F93\u5165\u6635\u79F0&#39;, trigger: &#39;blur&#39; },
    { min: 3, max: 5, message: &#39;\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26&#39;, trigger: &#39;blur&#39; }
  ],
  agreement: [
    {
      validator(rule, value, callback) {
        if (value === true) {
          callback()
        } else {
          callback(new Error(&#39;\u4F60\u5FC5\u987B\u540C\u610F\u8BE5\u534F\u8BAE&#39;))
        }
      }
    }
  ]
}
</code></pre></div><blockquote><p>\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 <a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a>\u3002</p></blockquote><h2 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>submit</td><td>\u643A\u5E26 form \u4E2D\u7684\u6570\u636E\u89E6\u53D1 submit \u4E8B\u4EF6</td><td>{ value : {&#39;name&#39;: &#39;value&#39;} }</td></tr><tr><td>reset</td><td>\u8868\u5355\u91CD\u7F6E\u65F6\u4F1A\u89E6\u53D1 reset \u4E8B\u4EF6</td><td>{}</td></tr><tr><td>validate-submit</td><td>\u6709\u68C0\u9A8C\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355 submit \u89E6\u53D1\u65F6</td><td>{ valid: true, value : {&#39;name&#39;: &#39;value&#39;}</td></tr></tbody></table><h3 id="\u56DE\u8C03\u53C2\u6570-value-\u7684\u7ED3\u6784" tabindex="-1">\u56DE\u8C03\u53C2\u6570 value \u7684\u7ED3\u6784 <a class="header-anchor" href="#\u56DE\u8C03\u53C2\u6570-value-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><p>\u8BE5\u6570\u636E\u6C47\u96C6\u4E86\u6240\u6709\u8BBE\u7F6E name \u7684\u8868\u5355\u6807\u7B7E\u6570\u636E\uFF08\u542B\u539F\u751F\u6807\u7B7E\uFF09\uFF0C\u90E8\u5206\u6570\u636E\u7C7B\u578B\u662F Array\uFF0C\u5982\uFF1A<code>checbox</code>\uFF0C<code>select multiple</code>\u7B49</p><h2 id="form-slots" tabindex="-1">Form Slots <a class="header-anchor" href="#form-slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-form&gt;
  ...
  &lt;fx-input type=&quot;text&quot; /&gt;
  &lt;fx-button form-type=&quot;submit&quot;&gt;\u63D0\u4EA4&lt;/fx-button&gt;
&lt;/fx-form&gt;
</code></pre></div><h2 id="formitem-\u8868\u5355\u9879" tabindex="-1">FormItem \u8868\u5355\u9879 <a class="header-anchor" href="#formitem-\u8868\u5355\u9879" aria-hidden="true">#</a></h2><h2 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u4E3A\u5B50\u8868\u5355\u7EC4\u4EF6\u8BBE\u7F6E\u76F8\u5E94\u7684<code>name</code>\u503C</td></tr><tr><td>rules</td><td>Object</td><td></td><td>\u5426</td><td>\u72EC\u7ACB\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u6839\u636E<code>name</code>\u7684\u503C\u53BB\u5916\u5C42<code>form</code>\u7EC4\u4EF6\u67E5\u627E\u76F8\u5E94\u7684\u89C4\u5219</td></tr><tr><td>label</td><td>string</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u8BE5\u884C\u540D\u79F0\uFF0C\u6BD4\u5982 <code>\u6635\u79F0</code></td></tr><tr><td>required</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u8BBE\u7F6E <code>true</code> \u540E label \u4F1A\u5C55\u793A\u5FC5\u586B<code>*</code>\uFF0C\u5728\u627E\u4E0D\u5230\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u9ED8\u8BA4\u52A0\u5165 1 \u6761\u5FC5\u586B\u89C4\u5219</td></tr></tbody></table><h3 id="rules-\u7ED3\u6784-1" tabindex="-1">rules \u7ED3\u6784 <a class="header-anchor" href="#rules-\u7ED3\u6784-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[
  { required: true, message: &#39;\u8BF7\u8F93\u5165\u6635\u79F0&#39;, trigger: &#39;blur&#39; },
  { min: 3, max: 5, message: &#39;\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26&#39;, trigger: &#39;blur&#39; }
]
</code></pre></div>__VP_STATIC_END__`,18),l=[o];function s(n,i,h,m,c,u){return r(),e("div",null,l)}var b=t(d,[["render",s]]);export{p as __pageData,b as default};
