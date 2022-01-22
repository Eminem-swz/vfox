import{_ as t,c as e,o as d,a as o}from"./app.8c4fff02.js";const k='{"title":"Checkbox/CheckboxGroup \u591A\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Checkbox Props","slug":"checkbox-props"},{"level":2,"title":"Checkbox Events","slug":"checkbox-events"},{"level":2,"title":"Checkbox Slots","slug":"checkbox-slots"},{"level":2,"title":"CheckboxGroup","slug":"checkboxgroup"},{"level":2,"title":"CheckboxGroup Props","slug":"checkboxgroup-props"},{"level":3,"title":"CheckboxOptionItem","slug":"checkboxoptionitem"},{"level":2,"title":"CheckboxGroup Events","slug":"checkboxgroup-events"},{"level":2,"title":"CheckboxGroup Slots","slug":"checkboxgroup-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"}],"relativePath":"components/Checkbox.md","lastUpdated":1642841591795}',h={},c=o(`<h1 id="checkbox-checkboxgroup-\u591A\u9009\u9879" tabindex="-1">Checkbox/CheckboxGroup \u591A\u9009\u9879 <a class="header-anchor" href="#checkbox-checkboxgroup-\u591A\u9009\u9879" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Checkbox, CheckboxGroup } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="checkbox-props" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td>&#39;&#39;</td><td>\u5426</td><td>\u8BE5\u9879\u503C\uFF0C<a href="./Checkbox.html#checkboxgroup-\u591A\u9879\u9009\u62E9\u5668">CheckboxGroup</a> \u7684 change \u4E8B\u4EF6\u4F1A\u643A\u5E26 <code>checkbox</code> \u7684 value</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>v-model:checked</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u5F53\u524D\u662F\u5426\u9009\u4E2D\uFF0C\u53EF\u7528\u6765\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D</td></tr><tr><td>active-color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u6001\u7684\u56FE\u6807\u989C\u8272</td></tr></tbody></table><h2 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u52FE\u9009\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>checked: boolean</td></tr></tbody></table><h2 id="checkbox-slots" tabindex="-1">Checkbox Slots <a class="header-anchor" href="#checkbox-slots" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;fx-checkbox&gt;\u5F00\u6717&lt;/fx-checkbox&gt;
&lt;fx-checkbox&gt;\u6D3B\u6CFC&lt;/fx-checkbox&gt;
...
</code></pre></div><h2 id="checkboxgroup" tabindex="-1">CheckboxGroup <a class="header-anchor" href="#checkboxgroup" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A</p><ul><li>\u5185\u90E8\u7531\u591A\u4E2A <a href="./Checkbox.html#Checkbox-\u591A\u9009\u9879">Checkbox</a> \u7EC4\u6210\u3002</li><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props <a class="header-anchor" href="#checkboxgroup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u5426</td><td>\u6807\u8BC6</td></tr><tr><td>inline</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u4F7F\u7528\u5185\u8054\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u7EB5\u5411\u5E03\u5C40</td></tr><tr><td>v-model</td><td>(string | number)[]</td><td>[]</td><td>\u5426</td><td>\u5F53\u524D\u9009\u62E9\u5B50\u9879\u7684 value \u5217\u8868</td></tr><tr><td>active-color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u5B50\u9879\u6FC0\u6D3B\u6001\u7684\u56FE\u6807\u989C\u8272</td></tr><tr><td>options</td><td>CheckboxOptionItem[]</td><td></td><td>\u5426</td><td>\u5B50\u9879\u914D\u7F6E\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E slot \u653E\u5165 <code>Checkbox</code> \u7EC4\u4EF6</td></tr></tbody></table><h3 id="checkboxoptionitem" tabindex="-1">CheckboxOptionItem <a class="header-anchor" href="#checkboxoptionitem" aria-hidden="true">#</a></h3><table><thead><tr><th>key</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td>string | number</td><td></td><td>\u662F</td><td>\u503C\uFF0C \u540C <code>Checkbox</code> \u7EC4\u4EF6 value</td></tr><tr><td>label</td><td>string</td><td></td><td>\u662F</td><td>\u63CF\u8FF0\uFF0C\u540C <code>Checkbox</code> \u7EC4\u4EF6 slot default</td></tr></tbody></table><h2 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value: (string | number)[]</td></tr></tbody></table><h2 id="checkboxgroup-slots" tabindex="-1">CheckboxGroup Slots <a class="header-anchor" href="#checkboxgroup-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-checkbox-group&gt;
  &lt;fx-checkbox&gt;\u5F00\u6717&lt;/fx-checkbox&gt;
  &lt;fx-checkbox&gt;\u6D3B\u6CFC&lt;/fx-checkbox&gt;
  ...
&lt;/fx-checkbox-group&gt;
</code></pre></div>`,22),r=[c];function a(l,b,s,i,n,x){return d(),e("div",null,r)}var u=t(h,[["render",a]]);export{k as __pageData,u as default};
