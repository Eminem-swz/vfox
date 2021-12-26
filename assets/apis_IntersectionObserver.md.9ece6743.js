import{_ as t,c as e,o as r,a as d}from"./app.9d79263e.js";const v='{"title":"IntersectionObserver","description":"","frontmatter":{},"headers":[{"level":2,"title":"","slug":"vue-prototype-createintersectionobserver-options"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"options \u7684\u5408\u6CD5\u503C","slug":"options-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"Return","slug":"return"},{"level":2,"title":"","slug":"intersectionobserver-1"},{"level":3,"title":"IntersectionObserver.prototype.relativeTo(selector[, margins])","slug":"intersectionobserver-prototype-relativeto-selector-margins"},{"level":3,"title":"IntersectionObserver.prototype.relativeToViewport([margins])","slug":"intersectionobserver-prototype-relativetoviewport-margins"},{"level":3,"title":"IntersectionObserver.prototype.observe(targetSelector[, callback])","slug":"intersectionobserver-prototype-observe-targetselector-callback"},{"level":3,"title":"IntersectionObserver.prototype.disconnect()","slug":"intersectionobserver-prototype-disconnect"}],"relativePath":"apis/IntersectionObserver.md","lastUpdated":1640530429625}',a={},n=d(`<h1 id="intersectionobserver" tabindex="-1">IntersectionObserver <a class="header-anchor" href="#intersectionobserver" aria-hidden="true">#</a></h1><h2 id="vue-prototype-createintersectionobserver-options" tabindex="-1"><a name="createIntersectionObserver">Vue.prototype.$createIntersectionObserver([options])</a> <a class="header-anchor" href="#vue-prototype-createintersectionobserver-options" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u4E00\u4E2A IntersectionObserver \u5BF9\u8C61\u5B9E\u4F8B\u3002</p><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>options</td><td>Object</td><td></td><td>\u5426</td><td>\u9009\u9879</td></tr></tbody></table><h3 id="options-\u7684\u5408\u6CD5\u503C" tabindex="-1">options \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#options-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u5C5E\u6027</td><td>\u7C7B\u578B</td><td>\u9ED8\u8BA4\u503C</td><td>\u5FC5\u586B</td><td>\u8BF4\u660E</td></tr><tr><td>thresholds</td><td>number[]</td><td>[0]</td><td>\u5426</td><td>\u4E00\u4E2A\u6570\u503C\u6570\u7EC4\uFF0C\u5305\u542B\u6240\u6709\u9608\u503C\u3002</td></tr><tr><td>observeAll</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u540C\u65F6\u89C2\u6D4B\u591A\u4E2A\u76EE\u6807\u8282\u70B9\uFF08\u800C\u975E\u4E00\u4E2A\uFF09\uFF0C\u5982\u679C\u8BBE\u4E3A true \uFF0Cobserve \u7684 targetSelector \u5C06\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\uFF08\u6CE8\u610F\uFF1A\u540C\u65F6\u9009\u4E2D\u8FC7\u591A\u8282\u70B9\u5C06\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF09</td></tr></tbody></table><h3 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h3><p><a href="#IntersectionObserver">IntersectionObserver</a> \u5B9E\u4F8B</p><h2 id="intersectionobserver-1" tabindex="-1"><a name="IntersectionObserver">IntersectionObserver</a> <a class="header-anchor" href="#intersectionobserver-1" aria-hidden="true">#</a></h2><p>IntersectionObserver \u5BF9\u8C61\uFF0C\u7528\u4E8E\u63A8\u65AD\u67D0\u4E9B\u8282\u70B9\u662F\u5426\u53EF\u4EE5\u88AB\u7528\u6237\u770B\u89C1\u3001\u6709\u591A\u5927\u6BD4\u4F8B\u53EF\u4EE5\u88AB\u7528\u6237\u770B\u89C1\u3002</p><h3 id="intersectionobserver-prototype-relativeto-selector-margins" tabindex="-1">IntersectionObserver.prototype.relativeTo(selector[, margins]) <a class="header-anchor" href="#intersectionobserver-prototype-relativeto-selector-margins" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u9009\u62E9\u5668\u6307\u5B9A\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F5C\u4E3A\u53C2\u7167\u533A\u57DF\u4E4B\u4E00\u3002</p><h4 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>string</td><td></td><td>\u662F</td><td>CSS \u9009\u62E9\u5668\u3002\u540C<code>querySelector</code>\u53C2\u6570</td></tr><tr><td>margins</td><td>Object</td><td></td><td>\u5426</td><td>\u7528\u6765\u6269\u5C55\uFF08\u6216\u6536\u7F29\uFF09\u53C2\u7167\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u8FB9\u754C</td></tr></tbody></table><h4 id="margins-\u7684\u5408\u6CD5\u503C" tabindex="-1">margins \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#margins-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u5DE6\u8FB9\u754C</td></tr><tr><td>right</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u53F3\u8FB9\u754C</td></tr><tr><td>top</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u4E0A\u8FB9\u754C</td></tr><tr><td>bottom</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u4E0B\u8FB9\u754C</td></tr></tbody></table><h4 id="return-1" tabindex="-1">Return <a class="header-anchor" href="#return-1" aria-hidden="true">#</a></h4><p><a href="#IntersectionObserver">IntersectionObserver</a> \u5B9E\u4F8B</p><h3 id="intersectionobserver-prototype-relativetoviewport-margins" tabindex="-1">IntersectionObserver.prototype.relativeToViewport([margins]) <a class="header-anchor" href="#intersectionobserver-prototype-relativetoviewport-margins" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u9875\u9762\u663E\u793A\u533A\u57DF\u4F5C\u4E3A\u53C2\u7167\u533A\u57DF\u4E4B\u4E00\u3002</p><h4 id="params-2" tabindex="-1">Params <a class="header-anchor" href="#params-2" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>margins</td><td>Object</td><td></td><td>\u5426</td><td>\u7528\u6765\u6269\u5C55\uFF08\u6216\u6536\u7F29\uFF09\u53C2\u7167\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u8FB9\u754C</td></tr></tbody></table><h4 id="margins-\u7684\u5408\u6CD5\u503C-1" tabindex="-1">margins \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#margins-\u7684\u5408\u6CD5\u503C-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u5DE6\u8FB9\u754C</td></tr><tr><td>right</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u53F3\u8FB9\u754C</td></tr><tr><td>top</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u4E0A\u8FB9\u754C</td></tr><tr><td>bottom</td><td>number</td><td></td><td>\u5426</td><td>\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684\u4E0B\u8FB9\u754C</td></tr></tbody></table><h4 id="return-2" tabindex="-1">Return <a class="header-anchor" href="#return-2" aria-hidden="true">#</a></h4><p><a href="#IntersectionObserver">IntersectionObserver</a> \u5B9E\u4F8B</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createIntersectionObserver()
  .relativeToViewport({ bottom: 100 })
  .observe(&#39;.target-class&#39;, res =&gt; {
    res.intersectionRatio // \u76F8\u4EA4\u533A\u57DF\u5360\u76EE\u6807\u8282\u70B9\u7684\u5E03\u5C40\u533A\u57DF\u7684\u6BD4\u4F8B
    res.intersectionRect // \u76F8\u4EA4\u533A\u57DF
    res.intersectionRect.left // \u76F8\u4EA4\u533A\u57DF\u7684\u5DE6\u8FB9\u754C\u5750\u6807
    res.intersectionRect.top // \u76F8\u4EA4\u533A\u57DF\u7684\u4E0A\u8FB9\u754C\u5750\u6807
    res.intersectionRect.width // \u76F8\u4EA4\u533A\u57DF\u7684\u5BBD\u5EA6
    res.intersectionRect.height // \u76F8\u4EA4\u533A\u57DF\u7684\u9AD8\u5EA6
  })
</code></pre></div><h3 id="intersectionobserver-prototype-observe-targetselector-callback" tabindex="-1">IntersectionObserver.prototype.observe(targetSelector[, callback]) <a class="header-anchor" href="#intersectionobserver-prototype-observe-targetselector-callback" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u76EE\u6807\u8282\u70B9\u5E76\u5F00\u59CB\u76D1\u542C\u76F8\u4EA4\u72B6\u6001\u53D8\u5316\u60C5\u51B5\u3002</p><h4 id="params-3" tabindex="-1">Params <a class="header-anchor" href="#params-3" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>targetSelector</td><td>string</td><td></td><td>\u662F</td><td>CSS \u9009\u62E9\u5668\u3002\u540C<code>querySelector</code>\u53C2\u6570</td></tr><tr><td>callback</td><td>Function</td><td></td><td>\u5426</td><td>\u76D1\u542C\u76F8\u4EA4\u72B6\u6001\u53D8\u5316\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-\u7684\u7ED3\u6784" tabindex="-1">callback \u53C2\u6570 res \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>intersectionRatio</td><td>number</td><td>\u76F8\u4EA4\u6BD4\u4F8B</td></tr><tr><td>intersectionRect</td><td>Object</td><td>\u76F8\u4EA4\u533A\u57DF\u7684\u8FB9\u754C</td></tr><tr><td>boundingClientRect</td><td>Object</td><td>\u76EE\u6807\u8FB9\u754C</td></tr><tr><td>relativeRect</td><td>Object</td><td>\u53C2\u7167\u533A\u57DF\u7684\u8FB9\u754C</td></tr><tr><td>time</td><td>number</td><td>\u76F8\u4EA4\u68C0\u6D4B\u65F6\u7684\u65F6\u95F4\u6233</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-intersectionrect-\u7684\u7ED3\u6784" tabindex="-1">callback \u53C2\u6570 res.intersectionRect \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-intersectionrect-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>number</td><td>\u5DE6\u8FB9\u754C</td></tr><tr><td>right</td><td>number</td><td>\u53F3\u8FB9\u754C</td></tr><tr><td>top</td><td>number</td><td>\u4E0A\u8FB9\u754C</td></tr><tr><td>bottom</td><td>number</td><td>\u4E0B\u8FB9\u754C</td></tr><tr><td>width</td><td>number</td><td>\u5BBD\u5EA6</td></tr><tr><td>height</td><td>number</td><td>\u9AD8\u5EA6</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-boundingclientrect-\u7684\u7ED3\u6784" tabindex="-1">callback \u53C2\u6570 res.boundingClientRect \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-boundingclientrect-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>number</td><td>\u5DE6\u8FB9\u754C</td></tr><tr><td>right</td><td>number</td><td>\u53F3\u8FB9\u754C</td></tr><tr><td>top</td><td>number</td><td>\u4E0A\u8FB9\u754C</td></tr><tr><td>bottom</td><td>number</td><td>\u4E0B\u8FB9\u754C</td></tr><tr><td>width</td><td>number</td><td>\u5BBD\u5EA6</td></tr><tr><td>height</td><td>number</td><td>\u9AD8\u5EA6</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-relativerect-\u7684\u7ED3\u6784" tabindex="-1">callback \u53C2\u6570 res.relativeRect \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-relativerect-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>number</td><td>\u5DE6\u8FB9\u754C</td></tr><tr><td>right</td><td>number</td><td>\u53F3\u8FB9\u754C</td></tr><tr><td>top</td><td>number</td><td>\u4E0A\u8FB9\u754C</td></tr><tr><td>bottom</td><td>number</td><td>\u4E0B\u8FB9\u754C</td></tr></tbody></table><h3 id="intersectionobserver-prototype-disconnect" tabindex="-1">IntersectionObserver.prototype.disconnect() <a class="header-anchor" href="#intersectionobserver-prototype-disconnect" aria-hidden="true">#</a></h3><p>\u505C\u6B62\u76D1\u542C\u3002\u56DE\u8C03\u51FD\u6570\u5C06\u4E0D\u518D\u89E6\u53D1\u3002</p>`,43),o=[n];function i(h,s,c,b,l,p){return r(),e("div",null,o)}var m=t(a,[["render",i]]);export{v as __pageData,m as default};
