import{_ as t,c as a,o as e,a as n}from"./app.8c4fff02.js";const b='{"title":"Picker \u9009\u62E9","description":"","frontmatter":{},"headers":[{"level":2,"title":"showPicker(object)","slug":"showpicker-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"object.success \u56DE\u8C03\u53C2\u6570","slug":"object-success-\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"apis/Picker.md","lastUpdated":1642841591795}',s={},d=n(`<h1 id="picker-\u9009\u62E9" tabindex="-1">Picker \u9009\u62E9 <a class="header-anchor" href="#picker-\u9009\u62E9" aria-hidden="true">#</a></h1><h2 id="showpicker-object" tabindex="-1">showPicker(object) <a class="header-anchor" href="#showpicker-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>options</td><td>array</td><td>[]</td><td>\u5426</td><td>\u6570\u636E\u96C6\uFF0C\u53C2\u8003 <a href="./../components/Picker.html#options-\u7684\u7ED3\u6784">Picker options</a></td></tr><tr><td>value</td><td>string/number/string[]/number[]</td><td>[]</td><td>\u5426</td><td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879\uFF0C\u53C2\u8003 <a href="./../components/Picker.html#modelvalue-\u7684\u7ED3\u6784">Picker modelValue</a></td></tr><tr><td>fieldNames</td><td>object</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label value children \u7684\u5B57\u6BB5 key</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.value</td><td>number[]/string[]</td><td>[&quot;zaolei&quot;, &quot;lunzao&quot;]</td></tr><tr><td>detail?.valueString</td><td>string</td><td>&quot;zaolei/lunzao&quot;</td></tr><tr><td>detail?.label</td><td>string[]</td><td>[&quot;\u85FB\u7C7B&quot;, &quot;\u8F6E\u85FB&quot;]</td></tr><tr><td>detail?.labelString</td><td>string</td><td>&quot;\u85FB\u7C7B/\u8F6E\u85FB&quot;</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showPicker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Picker&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> multiOptions<span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> confirm<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,10),o=[d];function r(c,i,p,l,u,h){return e(),a("div",null,o)}var f=t(s,[["render",r]]);export{b as __pageData,f as default};
