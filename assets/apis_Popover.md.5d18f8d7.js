import{_ as t,c as d,o as e,a as o}from"./app.1d4ac55e.js";const g='{"title":"Popover \u6C14\u6CE1\u7C7B\u578B\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"Popover.showPopover(object)","slug":"popover-showpopover-object"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"PopDialog.showPopDialog(object)","slug":"popdialog-showpopdialog-object"},{"level":3,"title":"Params","slug":"params-1"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":2,"title":"PopMenu.showPopMenu(object)","slug":"popmenu-showpopmenu-object"},{"level":3,"title":"Params","slug":"params-2"},{"level":3,"title":"Usage","slug":"usage-2"}],"relativePath":"apis/Popover.md","lastUpdated":1641524627081}',a={},r=o(`<h1 id="popover-\u6C14\u6CE1\u7C7B\u578B\u5F39\u7A97" tabindex="-1">Popover \u6C14\u6CE1\u7C7B\u578B\u5F39\u7A97 <a class="header-anchor" href="#popover-\u6C14\u6CE1\u7C7B\u578B\u5F39\u7A97" aria-hidden="true">#</a></h1><h2 id="popover-showpopover-object" tabindex="-1">Popover.showPopover(object) <a class="header-anchor" href="#popover-showpopover-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6C14\u6CE1\u3002</p><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>string/element</td><td></td><td>\u662F</td><td>\u4ECE\u54EA\u4E2A\u5143\u7D20\u5C55\u5F00\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>placement</td><td>string</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u5C55\u5F00\u4F4D\u7F6E\uFF0C\u53EF\u9009 &#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>content</td><td>string</td><td></td><td>\u662F</td><td>\u6587\u672C\u5185\u5BB9</td></tr><tr><td>showMask</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u8499\u5C42\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E0D\u5C55\u793A\uFF0C\u6C14\u6CE1\u5219\u662F\u8DDF\u968F <code>selector</code> \u5BF9\u5E94\u7684\u5143\u7D20</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Popover } from &#39;vfox&#39;

Popover.showPopover({
  selector: &#39;#popoverTarget&#39;,
  content: &#39;\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9&#39;,
  success: res =&gt; {
    console.log(&#39;success&#39;, res)
  }
})
</code></pre></div><h2 id="popdialog-showpopdialog-object" tabindex="-1">PopDialog.showPopDialog(object) <a class="header-anchor" href="#popdialog-showpopdialog-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6C14\u6CE1\u5BF9\u8BDD\u6846\u3002</p><h3 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>string/element</td><td></td><td>\u662F</td><td>\u4ECE\u54EA\u4E2A\u5143\u7D20\u5C55\u5F00\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>placement</td><td>string</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u5C55\u5F00\u4F4D\u7F6E\uFF0C\u53EF\u9009 &#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>content</td><td>string</td><td></td><td>\u662F</td><td>\u6587\u672C\u5185\u5BB9</td></tr><tr><td>showCancel</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>cancelText</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C</td></tr><tr><td>confirmText</td><td>string</td><td>&#39;\u786E\u5B9A&#39;</td><td>\u5426</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u6587\u672C</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u53D6\u6D88</td></tr><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u70B9\u51FB\u4E86\u786E\u5B9A</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { PopDialog } from &#39;vfox&#39;

PopDialog.showPopDialog({
  selector: &#39;#popDialogTarget&#39;,
  content: this.content,
  success: (res) =&gt; {
    console.log(&#39;success&#39;, res)
  }
})
</code></pre></div><h2 id="popmenu-showpopmenu-object" tabindex="-1">PopMenu.showPopMenu(object) <a class="header-anchor" href="#popmenu-showpopmenu-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6C14\u6CE1\u83DC\u5355\u3002</p><h3 id="params-2" tabindex="-1">Params <a class="header-anchor" href="#params-2" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>string/element</td><td></td><td>\u662F</td><td>\u4ECE\u54EA\u4E2A\u5143\u7D20\u5C55\u5F00\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>placement</td><td>string</td><td>&#39;bottom&#39;</td><td>\u5426</td><td>\u5C55\u5F00\u4F4D\u7F6E\uFF0C\u53EF\u9009 &#39;bottom&#39;, &#39;top&#39;, &#39;left&#39;, &#39;right&#39;</td></tr><tr><td>options</td><td>array</td><td></td><td>\u5426</td><td>\u9009\u9879\u5217\u8868</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u9009\u62E9\u9009\u9879\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="options-\u7684\u7ED3\u6784" tabindex="-1">options \u7684\u7ED3\u6784 <a class="header-anchor" href="#options-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h4><table><thead><tr><th>options[index] \u503C</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u662F</td><td>\u9009\u9879\u540D</td></tr><tr><td>disabled</td><td>string</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>icon</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./../components/Icon.html">Icon</a> \u7EC4\u4EF6</td></tr></tbody></table><div class="language-"><pre><code>[
  {
    name: &#39;\u9009\u98791&#39;,
    disabled: false,
    icon: &#39;MenuOutlined&#39;
  }
]
</code></pre></div><h4 id="object-success-\u56DE\u8C03\u53C2\u6570-1" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u9009\u9879\uFF0C\u6B64\u65F6\u8FD4\u56DE <code>detail</code></td></tr><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88</td></tr><tr><td>detail?.item</td><td>any</td><td>options[index] \u7684\u526F\u672C</td></tr><tr><td>detail?.index</td><td>number</td><td>\u7D22\u5F15</td></tr></tbody></table><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { PopMenu } from &#39;vfox&#39;

PopMenu.showPopMenu({
  selector: &#39;#popMenuTarget&#39;,
  options: [{
    icon: &#39;HeartOutlined&#39;,
    name: &#39;\u7231\u5FC3&#39;
  },
  {
    icon: &#39;StarOutlined&#39;,
    name: &#39;\u661F\u661F&#39;
  },
  {
    icon: &#39;CircleOutlined&#39;,
    name: &#39;\u5708\u5708&#39;,
    disabled: true
  }],
  placement: &#39;top&#39;,
  success: res =&gt; {
    console.log(&#39;select&#39;, res)
  }
})
</code></pre></div>`,29),n=[r];function s(c,h,i,l,p,u){return e(),d("div",null,n)}var m=t(a,[["render",s]]);export{g as __pageData,m as default};
