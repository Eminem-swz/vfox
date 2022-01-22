import{_ as t,c as d,o as a,a as e}from"./app.8c4fff02.js";const f='{"title":"Radio/RadioGroup \u5355\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Radio Props","slug":"radio-props"},{"level":2,"title":"Radio Events","slug":"radio-events"},{"level":2,"title":"Radio Slots","slug":"radio-slots"},{"level":2,"title":"RadioGroup","slug":"radiogroup"},{"level":2,"title":"RadioGroup Props","slug":"radiogroup-props"},{"level":3,"title":"RadioOptionItem","slug":"radiooptionitem"},{"level":2,"title":"RadioGroup Events","slug":"radiogroup-events"},{"level":2,"title":"RadioGroup Slots","slug":"radiogroup-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"}],"relativePath":"components/Radio.md","lastUpdated":1642841591799}',r={},o=e(`<h1 id="radio-radiogroup-\u5355\u9009\u9879" tabindex="-1">Radio/RadioGroup \u5355\u9009\u9879 <a class="header-anchor" href="#radio-radiogroup-\u5355\u9009\u9879" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Radio, RadioGroup } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="radio-props" tabindex="-1">Radio Props <a class="header-anchor" href="#radio-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td>&#39;&#39;</td><td>\u5426</td><td>\u8BE5\u9879\u503C\uFF0C<a href="./Radio.html#radiogroup-\u5355\u9879\u9009\u62E9\u5668">RadioGroup</a> \u7684 change \u4E8B\u4EF6\u4F1A\u643A\u5E26 <code>radio</code> \u7684 value</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>v-model:checked</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F53\u524D\u662F\u5426\u9009\u4E2D\uFF0C\u53EF\u7528\u6765\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D</td></tr><tr><td>active-color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u6001\u7684\u56FE\u6807\u989C\u8272</td></tr></tbody></table><h2 id="radio-events" tabindex="-1">Radio Events <a class="header-anchor" href="#radio-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u52FE\u9009\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>checked: boolean</td></tr></tbody></table><h2 id="radio-slots" tabindex="-1">Radio Slots <a class="header-anchor" href="#radio-slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-radio&gt;\u7537&lt;/fx-radio&gt;
&lt;fx-radio&gt;\u5973&lt;/fx-radio&gt;
</code></pre></div><h2 id="radiogroup" tabindex="-1">RadioGroup <a class="header-anchor" href="#radiogroup" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A</p><ul><li>\u5185\u90E8\u7531\u591A\u4E2A <a href="./Radio.html#Radio-\u5355\u9009\u9879">Radio</a> \u7EC4\u6210\u3002</li><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="radiogroup-props" tabindex="-1">RadioGroup Props <a class="header-anchor" href="#radiogroup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>inline</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u4F7F\u7528\u5185\u8054\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u7EB5\u5411\u5E03\u5C40</td></tr><tr><td>v-model</td><td>string | number</td><td>&#39;&#39;</td><td>\u5426</td><td>\u5F53\u524D\u9009\u62E9\u5B50\u9879\u7684 value \u503C</td></tr><tr><td>active-color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u5B50\u9879\u6FC0\u6D3B\u6001\u7684\u56FE\u6807\u989C\u8272</td></tr><tr><td>options</td><td>RadioOptionItem[]</td><td></td><td>\u5426</td><td>\u5B50\u9879\u914D\u7F6E\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E slot \u653E\u5165 <code>Radio</code> \u7EC4\u4EF6</td></tr></tbody></table><h3 id="radiooptionitem" tabindex="-1">RadioOptionItem <a class="header-anchor" href="#radiooptionitem" aria-hidden="true">#</a></h3><table><thead><tr><th>key</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td></td><td>\u662F</td><td>\u503C\uFF0C \u540C <code>Radio</code> \u7EC4\u4EF6 value</td></tr><tr><td>label</td><td>string</td><td></td><td>\u662F</td><td>\u63CF\u8FF0\uFF0C\u540C <code>Radio</code> \u7EC4\u4EF6 slot default</td></tr></tbody></table><div class="language-"><pre><code>[
  { label: &#39;\u7537&#39;, value: 1 },
  { label: &#39;\u5973&#39;, value: 2 }
]
</code></pre></div><h2 id="radiogroup-events" tabindex="-1">RadioGroup Events <a class="header-anchor" href="#radiogroup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value: string | number</td></tr></tbody></table><h2 id="radiogroup-slots" tabindex="-1">RadioGroup Slots <a class="header-anchor" href="#radiogroup-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-radio-group&gt;
  &lt;fx-radio&gt;\u7537&lt;/fx-radio&gt;
  &lt;fx-radio&gt;\u5973&lt;/fx-radio&gt;
  ...
&lt;/fx-radio-group&gt;
</code></pre></div>`,23),i=[o];function l(h,s,n,p,u,c){return a(),d("div",null,i)}var v=t(r,[["render",l]]);export{f as __pageData,v as default};
