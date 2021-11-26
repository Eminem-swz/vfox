import{_ as e,c as t,o as r,a}from"./app.2d0a5a59.js";const b='{"title":"SelectorQuery","description":"","frontmatter":{},"headers":[{"level":2,"title":"","slug":"vue-prototype-createselectorquery"},{"level":3,"title":"Return","slug":"return"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"","slug":"selectorquery-1"},{"level":3,"title":"SelectorQuery.prototype.in(component)","slug":"selectorquery-prototype-in-component"},{"level":3,"title":"SelectorQuery.prototype.select(selector)","slug":"selectorquery-prototype-select-selector"},{"level":3,"title":"SelectorQuery.prototype.selectAll(selector)","slug":"selectorquery-prototype-selectall-selector"},{"level":3,"title":"SelectorQuery.prototype.selectViewport()","slug":"selectorquery-prototype-selectviewport"},{"level":3,"title":"SelectorQuery.prototype.exec([callback])","slug":"selectorquery-prototype-exec-callback"},{"level":2,"title":"","slug":"nodesref"},{"level":3,"title":"NodesRef.prototype.boundingClientRect([callback])","slug":"nodesref-prototype-boundingclientrect-callback"},{"level":3,"title":"NodesRef.prototype.scrollOffset([callback])","slug":"nodesref-prototype-scrolloffset-callback"},{"level":3,"title":"Return","slug":"return-7"},{"level":3,"title":"NodesRef.prototype.fields(fields[, callback])","slug":"nodesref-prototype-fields-fields-callback"}],"relativePath":"apis/SelectorQuery.md","lastUpdated":1637918371112}',d={},l=a(`__VP_STATIC_START__<h1 id="selectorquery" tabindex="-1">SelectorQuery <a class="header-anchor" href="#selectorquery" aria-hidden="true">#</a></h1><h2 id="vue-prototype-createselectorquery" tabindex="-1"><a name="createSelectorQuery">Vue.prototype.$createSelectorQuery()</a> <a class="header-anchor" href="#vue-prototype-createselectorquery" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u4E00\u4E2A SelectorQuery \u5BF9\u8C61\u5B9E\u4F8B\u3002</p><h3 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h3><p><a href="#SelectorQuery">SelectorQuery</a> \u5B9E\u4F8B</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>const query = this.$createSelectorQuery()
query.select(&#39;#id&#39;).boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res) {
  res[0].top // #id\u8282\u70B9\u7684\u4E0A\u8FB9\u754C\u5750\u6807
  res[1].scrollTop // \u663E\u793A\u533A\u57DF\u7684\u7AD6\u76F4\u6EDA\u52A8\u4F4D\u7F6E
})
</code></pre></div><h2 id="selectorquery-1" tabindex="-1"><a name="SelectorQuery">SelectorQuery</a> <a class="header-anchor" href="#selectorquery-1" aria-hidden="true">#</a></h2><p>\u67E5\u8BE2\u8282\u70B9\u4FE1\u606F\u7684\u5BF9\u8C61\u3002</p><h3 id="selectorquery-prototype-in-component" tabindex="-1"><a href="http://SelectorQuery.prototype.in" target="_blank" rel="noopener noreferrer">SelectorQuery.prototype.in</a>(component) <a class="header-anchor" href="#selectorquery-prototype-in-component" aria-hidden="true">#</a></h3><p>\u5C06\u9009\u62E9\u5668\u7684\u9009\u53D6\u8303\u56F4\u66F4\u6539\u4E3A\u5176\u4ED6 VueComponent \u7EC4\u4EF6\u5185\u3002</p><h4 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>component</td><td>VueComponent</td><td></td><td>\u662F</td><td>Vue \u7EC4\u4EF6\u5B9E\u4F8B</td></tr></tbody></table><h4 id="return-1" tabindex="-1">Return <a class="header-anchor" href="#return-1" aria-hidden="true">#</a></h4><p><a href="#SelectorQuery">SelectorQuery</a> \u5B9E\u4F8B</p><h3 id="selectorquery-prototype-select-selector" tabindex="-1">SelectorQuery.prototype.select(selector) <a class="header-anchor" href="#selectorquery-prototype-select-selector" aria-hidden="true">#</a></h3><p>\u5728\u5F53\u524D\u9875\u9762\u4E0B\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9009\u62E9\u5668 selector \u7684\u8282\u70B9\u3002\u8FD4\u56DE\u4E00\u4E2A NodesRef \u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u7528\u4E8E\u83B7\u53D6\u8282\u70B9\u4FE1\u606F\u3002</p><h4 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>string</td><td></td><td>\u662F</td><td>CSS \u9009\u62E9\u5668\u3002\u540C<code>querySelector</code></td></tr></tbody></table><h4 id="return-2" tabindex="-1">Return <a class="header-anchor" href="#return-2" aria-hidden="true">#</a></h4><p><a href="#NodesRef">NodesRef</a> \u5B9E\u4F8B</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createSelectorQuery()
  .select(&#39;#id&#39;)
  .boundingClientRect(function(rect) {
    rect.id // \u8282\u70B9\u7684ID
    rect.dataset // \u8282\u70B9\u7684dataset
    rect.left // \u8282\u70B9\u7684\u5DE6\u8FB9\u754C\u5750\u6807
    rect.right // \u8282\u70B9\u7684\u53F3\u8FB9\u754C\u5750\u6807
    rect.top // \u8282\u70B9\u7684\u4E0A\u8FB9\u754C\u5750\u6807
    rect.bottom // \u8282\u70B9\u7684\u4E0B\u8FB9\u754C\u5750\u6807
    rect.width // \u8282\u70B9\u7684\u5BBD\u5EA6
    rect.height // \u8282\u70B9\u7684\u9AD8\u5EA6
  })
  .exec()
</code></pre></div><h3 id="selectorquery-prototype-selectall-selector" tabindex="-1">SelectorQuery.prototype.selectAll(selector) <a class="header-anchor" href="#selectorquery-prototype-selectall-selector" aria-hidden="true">#</a></h3><p>\u5728\u5F53\u524D\u9875\u9762\u4E0B\u9009\u62E9\u5339\u914D\u9009\u62E9\u5668 selector \u7684\u6240\u6709\u8282\u70B9\u3002\u8FD4\u56DE\u4E00\u4E2A NodesRef \u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u7528\u4E8E\u83B7\u53D6\u8282\u70B9\u4FE1\u606F\u3002</p><h4 id="params-2" tabindex="-1">Params <a class="header-anchor" href="#params-2" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>string</td><td></td><td>\u662F</td><td>CSS \u9009\u62E9\u5668\u3002\u540C<code>querySelectorAll</code></td></tr></tbody></table><h4 id="return-3" tabindex="-1">Return <a class="header-anchor" href="#return-3" aria-hidden="true">#</a></h4><p><a href="#NodesRef">NodesRef</a> \u5B9E\u4F8B</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createSelectorQuery()
  .selectAll(&#39;.a-class&#39;)
  .boundingClientRect(function(rects) {
    rects.forEach(function(rect) {
      rect.id // \u8282\u70B9\u7684ID
      rect.dataset // \u8282\u70B9\u7684dataset
      rect.left // \u8282\u70B9\u7684\u5DE6\u8FB9\u754C\u5750\u6807
      rect.right // \u8282\u70B9\u7684\u53F3\u8FB9\u754C\u5750\u6807
      rect.top // \u8282\u70B9\u7684\u4E0A\u8FB9\u754C\u5750\u6807
      rect.bottom // \u8282\u70B9\u7684\u4E0B\u8FB9\u754C\u5750\u6807
      rect.width // \u8282\u70B9\u7684\u5BBD\u5EA6
      rect.height // \u8282\u70B9\u7684\u9AD8\u5EA6
    })
  })
  .exec()
</code></pre></div><h3 id="selectorquery-prototype-selectviewport" tabindex="-1">SelectorQuery.prototype.selectViewport() <a class="header-anchor" href="#selectorquery-prototype-selectviewport" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u663E\u793A\u533A\u57DF\u3002\u53EF\u7528\u4E8E\u83B7\u53D6\u663E\u793A\u533A\u57DF\u7684\u5C3A\u5BF8\u3001\u6EDA\u52A8\u4F4D\u7F6E\u7B49\u4FE1\u606F\u3002\u8FD4\u56DE\u4E00\u4E2A NodesRef \u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u7528\u4E8E\u83B7\u53D6\u8282\u70B9\u4FE1\u606F\u3002</p><h4 id="return-4" tabindex="-1">Return <a class="header-anchor" href="#return-4" aria-hidden="true">#</a></h4><p><a href="#NodesRef">NodesRef</a> \u5B9E\u4F8B</p><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createSelectorQuery()
  .selectViewport()
  .scrollOffset(function(res) {
    res.id // \u8282\u70B9\u7684ID
    res.dataset // \u8282\u70B9\u7684dataset
    res.scrollLeft // \u8282\u70B9\u7684\u6C34\u5E73\u6EDA\u52A8\u4F4D\u7F6E
    res.scrollTop // \u8282\u70B9\u7684\u7AD6\u76F4\u6EDA\u52A8\u4F4D\u7F6E
  })
  .exec()
</code></pre></div><h3 id="selectorquery-prototype-exec-callback" tabindex="-1">SelectorQuery.prototype.exec([callback]) <a class="header-anchor" href="#selectorquery-prototype-exec-callback" aria-hidden="true">#</a></h3><p>\u6267\u884C\u6240\u6709\u7684\u8BF7\u6C42\u3002\u8BF7\u6C42\u7ED3\u679C\u6309\u8BF7\u6C42\u6B21\u5E8F\u6784\u6210\u6570\u7EC4\uFF0C\u5728 callback \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E2D\u8FD4\u56DE\u3002</p><h4 id="params-3" tabindex="-1">Params <a class="header-anchor" href="#params-3" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>callback</td><td>Function</td><td></td><td>\u5426</td><td>\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h4 id="return-5" tabindex="-1">Return <a class="header-anchor" href="#return-5" aria-hidden="true">#</a></h4><p><a href="#NodesRef">NodesRef</a> \u5B9E\u4F8B</p><h2 id="nodesref" tabindex="-1"><a name="NodesRef">NodesRef</a> <a class="header-anchor" href="#nodesref" aria-hidden="true">#</a></h2><h3 id="nodesref-prototype-boundingclientrect-callback" tabindex="-1">NodesRef.prototype.boundingClientRect([callback]) <a class="header-anchor" href="#nodesref-prototype-boundingclientrect-callback" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u8282\u70B9\u7684\u5E03\u5C40\u4F4D\u7F6E\u7684\u67E5\u8BE2\u8BF7\u6C42\u3002\u8FD4\u56DE NodesRef \u5BF9\u5E94\u7684 SelectorQuery\u3002</p><h4 id="params-4" tabindex="-1">Params <a class="header-anchor" href="#params-4" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>callback</td><td>Function</td><td></td><td>\u5426</td><td>\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u6267\u884C mySelectorQuery.exec \u65B9\u6CD5\u540E\uFF0C\u8282\u70B9\u4FE1\u606F\u4F1A\u5728 callback \u4E2D\u8FD4\u56DE</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-\u7684\u7ED3\u6784" tabindex="-1">callback \u53C2\u6570 res \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u8282\u70B9\u7684 ID</td></tr><tr><td>dataset</td><td>Object</td><td>\u8282\u70B9\u7684 dataset</td></tr><tr><td>left</td><td>number</td><td>\u8282\u70B9\u7684\u5DE6\u8FB9\u754C\u5750\u6807</td></tr><tr><td>right</td><td>number</td><td>\u8282\u70B9\u7684\u53F3\u8FB9\u754C\u5750\u6807</td></tr><tr><td>top</td><td>number</td><td>\u8282\u70B9\u7684\u4E0A\u8FB9\u754C\u5750\u6807</td></tr><tr><td>bottom</td><td>number</td><td>\u8282\u70B9\u7684\u4E0B\u8FB9\u754C\u5750\u6807</td></tr><tr><td>width</td><td>number</td><td>\u8282\u70B9\u7684\u5BBD\u5EA6</td></tr><tr><td>height</td><td>number</td><td>\u8282\u70B9\u7684\u9AD8\u5EA6</td></tr></tbody></table><h4 id="return-6" tabindex="-1">Return <a class="header-anchor" href="#return-6" aria-hidden="true">#</a></h4><p><a href="#SelectorQuery">SelectorQuery</a> \u5B9E\u4F8B</p><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createSelectorQuery()
  .selectAll(&#39;.a-class&#39;)
  .boundingClientRect(function(rects) {
    rects.forEach(function(rect) {
      rect.id // \u8282\u70B9\u7684ID
      rect.dataset // \u8282\u70B9\u7684dataset
      rect.left // \u8282\u70B9\u7684\u5DE6\u8FB9\u754C\u5750\u6807
      rect.right // \u8282\u70B9\u7684\u53F3\u8FB9\u754C\u5750\u6807
      rect.top // \u8282\u70B9\u7684\u4E0A\u8FB9\u754C\u5750\u6807
      rect.bottom // \u8282\u70B9\u7684\u4E0B\u8FB9\u754C\u5750\u6807
      rect.width // \u8282\u70B9\u7684\u5BBD\u5EA6
      rect.height // \u8282\u70B9\u7684\u9AD8\u5EA6
    })
  })
  .exec()
</code></pre></div><h3 id="nodesref-prototype-scrolloffset-callback" tabindex="-1">NodesRef.prototype.scrollOffset([callback]) <a class="header-anchor" href="#nodesref-prototype-scrolloffset-callback" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u8282\u70B9\u7684\u6EDA\u52A8\u4F4D\u7F6E\u67E5\u8BE2\u8BF7\u6C42\u3002\u8FD4\u56DE NodesRef \u5BF9\u5E94\u7684 SelectorQuery\u3002</p><h4 id="params-5" tabindex="-1">Params <a class="header-anchor" href="#params-5" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>callback</td><td>Function</td><td></td><td>\u5426</td><td>\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u6267\u884C mySelectorQuery.exec \u65B9\u6CD5\u540E\uFF0C\u8282\u70B9\u4FE1\u606F\u4F1A\u5728 callback \u4E2D\u8FD4\u56DE</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-\u7684\u7ED3\u6784-1" tabindex="-1">callback \u53C2\u6570 res \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-\u7684\u7ED3\u6784-1" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u8282\u70B9\u7684 ID</td></tr><tr><td>dataset</td><td>Object</td><td>\u8282\u70B9\u7684 dataset</td></tr><tr><td>scrollLeft</td><td>number</td><td>\u8282\u70B9\u7684\u6C34\u5E73\u6EDA\u52A8\u4F4D\u7F6E</td></tr><tr><td>scrollTop</td><td>number</td><td>\u8282\u70B9\u7684\u7AD6\u76F4\u6EDA\u52A8\u4F4D\u7F6E</td></tr></tbody></table><h3 id="return-7" tabindex="-1">Return <a class="header-anchor" href="#return-7" aria-hidden="true">#</a></h3><p><a href="#SelectorQuery">SelectorQuery</a> \u5B9E\u4F8B</p><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createSelectorQuery()
  .selectViewport()
  .scrollOffset(function(res) {
    res.id // \u8282\u70B9\u7684ID
    res.dataset // \u8282\u70B9\u7684dataset
    res.scrollLeft // \u8282\u70B9\u7684\u6C34\u5E73\u6EDA\u52A8\u4F4D\u7F6E
    res.scrollTop // \u8282\u70B9\u7684\u7AD6\u76F4\u6EDA\u52A8\u4F4D\u7F6E
  })
  .exec()
</code></pre></div><h3 id="nodesref-prototype-fields-fields-callback" tabindex="-1">NodesRef.prototype.fields(fields[, callback]) <a class="header-anchor" href="#nodesref-prototype-fields-fields-callback" aria-hidden="true">#</a></h3><p>\u83B7\u53D6\u8282\u70B9\u7684\u76F8\u5173\u4FE1\u606F\u3002\u9700\u8981\u83B7\u53D6\u7684\u5B57\u6BB5\u5728 fields \u4E2D\u6307\u5B9A\u3002\u8FD4\u56DE NodesRef \u5BF9\u5E94\u7684 SelectorQuery\u3002</p><h4 id="params-6" tabindex="-1">Params <a class="header-anchor" href="#params-6" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>fields</td><td>Object</td><td></td><td>\u662F</td><td>\u6307\u5B9A\u83B7\u53D6\u5B57\u6BB5</td></tr><tr><td>callback</td><td>Function</td><td></td><td>\u5426</td><td>\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u6267\u884C mySelectorQuery.exec \u65B9\u6CD5\u540E\uFF0C\u8282\u70B9\u4FE1\u606F\u4F1A\u5728 callback \u4E2D\u8FD4\u56DE</td></tr></tbody></table><h4 id="fields-\u7684\u5408\u6CD5\u503C" tabindex="-1">fields \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#fields-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u8FD4\u56DE\u8282\u70B9 id</td></tr><tr><td>dataset</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u8FD4\u56DE\u8282\u70B9 dataset</td></tr><tr><td>rect</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u8FD4\u56DE\u8282\u70B9\u5E03\u5C40\u4F4D\u7F6E\uFF08left right top bottom\uFF09</td></tr><tr><td>size</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u8FD4\u56DE\u8282\u70B9\u5C3A\u5BF8\uFF08width height\uFF09</td></tr><tr><td>scrollOffset</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u8FD4\u56DE\u8282\u70B9\u7684\uFF08scrollLeft scrollTop\uFF09</td></tr><tr><td>properties</td><td>string[]</td><td>[]</td><td>\u5426</td><td>\u6307\u5B9A\u5C5E\u6027\u540D\u5217\u8868\uFF0C\u8FD4\u56DE\u8282\u70B9\u5BF9\u5E94\u5C5E\u6027\u540D\u7684\u5F53\u524D\u5C5E\u6027\u503C</td></tr><tr><td>computedStyle</td><td>string[]</td><td>[]</td><td>\u5426</td><td>\u6307\u5B9A\u6837\u5F0F\u540D\u5217\u8868\uFF0C\u8FD4\u56DE\u8282\u70B9\u5BF9\u5E94\u6837\u5F0F\u540D\u7684\u5F53\u524D\u503C</td></tr></tbody></table><h4 id="callback-\u53C2\u6570-res-\u7684\u7ED3\u6784-2" tabindex="-1">callback \u53C2\u6570 res \u7684\u7ED3\u6784 <a class="header-anchor" href="#callback-\u53C2\u6570-res-\u7684\u7ED3\u6784-2" aria-hidden="true">#</a></h4><p>\u8282\u70B9\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><h4 id="return-8" tabindex="-1">Return <a class="header-anchor" href="#return-8" aria-hidden="true">#</a></h4><p><a href="#SelectorQuery">SelectorQuery</a> \u5B9E\u4F8B</p><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-hidden="true">#</a></h4><div class="language-"><pre><code>this.$createSelectorQuery()
  .select(&#39;#id&#39;)
  .fields(
    {
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: [&#39;scrollWidth&#39;],
      computedStyle: [&#39;margin&#39;, &#39;backgroundColor&#39;]
    },
    function(res) {
      res.dataset // \u8282\u70B9\u7684 dataset
      res.width // \u8282\u70B9\u7684\u5BBD\u5EA6
      res.height // \u8282\u70B9\u7684\u9AD8\u5EA6
      res.scrollLeft // \u8282\u70B9\u7684\u6C34\u5E73\u6EDA\u52A8\u4F4D\u7F6E
      res.scrollTop // \u8282\u70B9\u7684\u7AD6\u76F4\u6EDA\u52A8\u4F4D\u7F6E
      res.scrollWidth // \u8282\u70B9 scrollWidth \u5C5E\u6027\u7684\u5F53\u524D\u503C
      // \u6B64\u5904\u8FD4\u56DE\u6307\u5B9A\u8981\u8FD4\u56DE\u7684\u6837\u5F0F\u540D
      res.margin
      res.backgroundColor
    }
  )
  .exec()
</code></pre></div>__VP_STATIC_END__`,76),c=[l];function o(h,s,n,i,u,p){return r(),t("div",null,c)}var y=e(d,[["render",o]]);export{b as __pageData,y as default};
