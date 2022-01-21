import{_ as t,c as e,o as a,a as d}from"./app.76ef83d6.js";const b='{"title":"DatePicker \u65F6\u95F4\u9009\u62E9","description":"","frontmatter":{},"headers":[{"level":2,"title":"showDatePicker(object)","slug":"showdatepicker-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"object.success \u56DE\u8C03\u53C2\u6570","slug":"object-success-\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"apis/DatePicker.md","lastUpdated":1642735277422}',n={},s=d(`<h1 id="datepicker-\u65F6\u95F4\u9009\u62E9" tabindex="-1">DatePicker \u65F6\u95F4\u9009\u62E9 <a class="header-anchor" href="#datepicker-\u65F6\u95F4\u9009\u62E9" aria-hidden="true">#</a></h1><h2 id="showdatepicker-object" tabindex="-1">showDatePicker(object) <a class="header-anchor" href="#showdatepicker-object" aria-hidden="true">#</a></h2><p>\u65E5\u671F\u9009\u62E9\u5F39\u7A97\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u6807\u9898</td></tr><tr><td>value</td><td>Date</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4\u9009\u62E9\u503C</td></tr><tr><td>mode</td><td>string</td><td></td><td>\u5426</td><td>\u9009\u62E9\u7684\u6A21\u5F0F\uFF0C\u53EF\u9009 &#39;date&#39;, &#39;time&#39;, &#39;datetime&#39; \u7B49\uFF0C\u53C2\u8003 <a href="./../components/DatePicker.html#initialmode-\u7684\u5408\u6CD5\u503C">DatePicker initialMode</a></td></tr><tr><td>minDate</td><td>Date</td><td>\u5F53\u5929\u5BF9\u5E94 10 \u5E74\u524D\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5C0F\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>maxDate</td><td>Date</td><td>\u5F53\u5929\u6700\u540E\u4E00\u79D2\u7684 Date \u5B9E\u4F8B</td><td>\u5426</td><td>\u6700\u5927\u65F6\u95F4\u5BF9\u5E94\u7684 Date \u5B9E\u4F8B\uFF08\u542B\uFF09</td></tr><tr><td>filter</td><td>Function</td><td></td><td>\u5426</td><td>\u9009\u9879\u8FC7\u6EE4\u5668\uFF0C<code>filter(number: number, type: &#39;year&#39; | &#39;month&#39; | &#39;day&#39; | &#39;hour&#39; | &#39;minute&#39; | &#39;second&#39;) =&gt; boolean</code></td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>detail?.formatted</td><td>string</td><td>&quot;2021-05-01&quot;</td></tr><tr><td>detail?.value</td><td>Date</td><td>\u5BF9\u5E94\u65E5\u671F\u7684 Date \u5B9E\u4F8B</td></tr><tr><td>detail?.valueArray</td><td>number[]</td><td>[2021, 5, 1]</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showDatePicker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;DatePicker&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> confirm<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,10),c=[s];function r(o,i,p,l,u,h){return a(),e("div",null,c)}var f=t(n,[["render",r]]);export{b as __pageData,f as default};
