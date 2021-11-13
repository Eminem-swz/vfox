import{_ as t,c as d,o as e,a}from"./app.cafa4a5d.js";const _='{"title":"Modal \u6A21\u6001\u6846\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dialog.showDialog(object)","slug":"dialog-showdialog-object"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"apis/Modal.md","lastUpdated":1636797248903}',o={},r=a(`<h1 id="modal-\u6A21\u6001\u6846\u5F39\u7A97" tabindex="-1">Modal \u6A21\u6001\u6846\u5F39\u7A97 <a class="header-anchor" href="#modal-\u6A21\u6001\u6846\u5F39\u7A97" aria-hidden="true">#</a></h1><h2 id="dialog-showdialog-object" tabindex="-1">Dialog.showDialog(object) <a class="header-anchor" href="#dialog-showdialog-object" aria-hidden="true">#</a></h2><p>\u663E\u793A\u6A21\u6001\u5BF9\u8BDD\u6846\u3002</p><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u63D0\u793A\u7684\u6807\u9898</td></tr><tr><td>content</td><td>string</td><td></td><td>\u662F</td><td>\u63D0\u793A\u7684\u5185\u5BB9</td></tr><tr><td>maskClosable</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u89E6\u53D1\u5173\u95ED\u64CD\u4F5C</td></tr><tr><td>showCancel</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td></tr><tr><td>confirmText</td><td>string</td><td>&#39;\u786E\u5B9A&#39;</td><td>\u5426</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57</td></tr><tr><td>cancelText</td><td>string</td><td>&#39;\u53D6\u6D88&#39;</td><td>\u5426</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\uFF08\u5728\u7528\u6237\u505A\u51FA\u9009\u62E9\u540E\uFF0C\u5982\u53D6\u6D88\uFF0C\u786E\u5B9A\uFF09\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF08\u5982\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\uFF09\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u4E0D\u4F20\u5165 fail \u9047\u9519\u8BEF\u76F4\u63A5\u629B\u51FA\uFF09</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u5F39\u7A97\u5173\u95ED\u6216\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="object-success-\u56DE\u8C03\u53C2\u6570" tabindex="-1">object.success \u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#object-success-\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>confirm?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE</td></tr><tr><td>cancel?</td><td>boolean</td><td>\u4E3A true \u65F6\uFF0C\u8868\u793A\u7528\u6237\u53D6\u6D88\u4E86</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Dialog } from &#39;vfox&#39;

Dialog.showDialog({
  title: &#39;\u63D0\u793A&#39;,
  content: &#39;\u8FD9\u662F\u4E00\u4E2A\u6A21\u6001\u5F39\u7A97&#39;,
  success (res) {
    if (res.confirm) {
      console.log(&#39;\u7528\u6237\u70B9\u51FB\u786E\u5B9A&#39;)
    } else if (res.cancel) {
      console.log(&#39;\u7528\u6237\u70B9\u51FB\u53D6\u6D88&#39;)
    }
  }
})
</code></pre></div>`,10),s=[r];function l(n,c,i,h,g,b){return e(),d("div",null,s)}var f=t(o,[["render",l]]);export{_ as __pageData,f as default};
