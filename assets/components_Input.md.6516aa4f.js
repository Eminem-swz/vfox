import{_ as t,c as d,o as e,a as r}from"./app.8ec95c28.js";const b='{"title":"Input \u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"type \u7684\u5408\u6CD5\u503C","slug":"type-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u524D\u7F6E\u5143\u7D20\uFF08#prepend\uFF09","slug":"\u524D\u7F6E\u5143\u7D20\uFF08-prepend\uFF09"},{"level":3,"title":"\u540E\u7F6E\u5143\u7D20\uFF08#append\uFF09","slug":"\u540E\u7F6E\u5143\u7D20\uFF08-append\uFF09"}],"relativePath":"components/Input.md","lastUpdated":1637313578562}',a={},n=r(`<h1 id="input-\u8F93\u5165\u6846" tabindex="-1">Input \u8F93\u5165\u6846 <a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><ul><li>\u53EF\u4EE5\u914D\u5408 <a href="./Form.html">Form</a> \u548C <a href="./Form.html#formitem-\u8868\u5355\u9879">FormItem</a> \u4F7F\u7528\u3002</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>string, number</td><td>&#39;&#39;</td><td>\u5426</td><td></td></tr><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td><a href="./Form.html">Form</a> \u7684\u6807\u8BC6</td></tr><tr><td>type</td><td>string</td><td>&#39;text&#39;</td><td>\u5426</td><td>\u7C7B\u578B</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>\u5426</td><td>\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>readonly</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u53EA\u8BFB</td></tr><tr><td>maxlength</td><td>number, string</td><td>140</td><td>\u5426</td><td>\u6700\u5927\u957F\u5EA6</td></tr><tr><td>focus</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u83B7\u53D6\u7126\u70B9</td></tr><tr><td>show-clear</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u6E05\u9664\u56FE\u6807</td></tr></tbody></table><h3 id="type-\u7684\u5408\u6CD5\u503C" tabindex="-1">type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>\u6587\u672C</td></tr><tr><td>digit</td><td>\u6574\u6570</td></tr><tr><td>number</td><td>\u6570\u5B57</td></tr><tr><td>password</td><td>\u5BC6\u7801</td></tr><tr><td>search</td><td>\u641C\u7D22</td></tr><tr><td>password</td><td>\u5BC6\u7801</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>input</td><td>\u8F93\u5165\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>{ value }</td></tr><tr><td>change</td><td>\u8F93\u5165\u503C\u6539\u53D8\u4E14\u5931\u7126\u540E\u89E6\u53D1</td><td>{ value }</td></tr><tr><td>focus</td><td>\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td>FocusEvent</td></tr><tr><td>blur</td><td>\u79FB\u51FA\u7126\u70B9\u65F6\u89E6\u53D1</td><td>FocusEvent</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u524D\u7F6E\u5143\u7D20\uFF08-prepend\uFF09" tabindex="-1">\u524D\u7F6E\u5143\u7D20\uFF08#prepend\uFF09 <a class="header-anchor" href="#\u524D\u7F6E\u5143\u7D20\uFF08-prepend\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-input&gt;
  &lt;template #prepend&gt;https://&lt;/template&gt;
&lt;/fx-input&gt;
</code></pre></div><p>\u6CE8\uFF1A\u4E5F\u53EF\u4EE5\u4F20\u5165 <code>Icon</code>\uFF0C\u6BD4\u5982\u5E38\u89C1\u7684\u641C\u7D22\u3002</p><h3 id="\u540E\u7F6E\u5143\u7D20\uFF08-append\uFF09" tabindex="-1">\u540E\u7F6E\u5143\u7D20\uFF08#append\uFF09 <a class="header-anchor" href="#\u540E\u7F6E\u5143\u7D20\uFF08-append\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-input&gt;
  &lt;template #append&gt;.com&lt;/template&gt;
&lt;/fx-input&gt;
</code></pre></div>`,14),l=[n];function h(s,o,p,i,c,u){return e(),d("div",null,l)}var f=t(a,[["render",h]]);export{b as __pageData,f as default};
