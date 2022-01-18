import{_ as t,c as a,o as n,a as s}from"./app.76ef83d6.js";const b='{"title":"ActionSheet \u52A8\u4F5C\u9762\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"showActionSheet(object)","slug":"showactionsheet-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"apis/ActionSheet.md","lastUpdated":1642474891708}',e={},o=s(`<h1 id="actionsheet-\u52A8\u4F5C\u9762\u677F" tabindex="-1">ActionSheet \u52A8\u4F5C\u9762\u677F <a class="header-anchor" href="#actionsheet-\u52A8\u4F5C\u9762\u677F" aria-hidden="true">#</a></h1><h2 id="showactionsheet-object" tabindex="-1">showActionSheet(object) <a class="header-anchor" href="#showactionsheet-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u52A8\u4F5C\u9762\u677F\u3002</p><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u63D0\u793A\u7684\u6807\u9898\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u4E0D\u5C55\u793A</td></tr><tr><td>options</td><td>array</td><td></td><td>\u5426</td><td>\u9009\u9879\u5217\u8868\uFF0C\u53C2\u8003 <a href="./../components/ActionSheet.html#options-\u7684\u7ED3\u6784">ActionSheet options</a></td></tr><tr><td>showCancel</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>cancelText</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u9009\u62E9\u9009\u9879\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u9009\u9879\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88</td></tr><tr><td>detail?.item</td><td>any</td><td>options[index] \u7684\u526F\u672C</td></tr><tr><td>detail?.index</td><td>number</td><td>\u7D22\u5F15</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html#api-\u8C03\u7528">API \u8C03\u7528</a>\u3002</p><div class="language-JavaScript"><pre><code><span class="token function">showActionSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6807\u9898&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9009\u98791&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9009\u98792&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9009\u98793&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showCancel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> confirm<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,10),p=[o];function c(d,r,i,l,u,h){return n(),a("div",null,p)}var _=t(e,[["render",c]]);export{b as __pageData,_ as default};
