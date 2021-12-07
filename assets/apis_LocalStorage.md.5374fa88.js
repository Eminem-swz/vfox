import{_ as e,c as t,o as a,a as r}from"./app.6fdd4400.js";const p='{"title":"LocalStorage \u672C\u5730\u7F13\u5B58","description":"","frontmatter":{},"headers":[{"level":2,"title":"LocalStorage.getStorage(key)","slug":"localstorage-getstorage-key"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Return","slug":"return"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"LocalStorage.setStorage(key, value)","slug":"localstorage-setstorage-key-value"},{"level":3,"title":"Params","slug":"params-1"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":2,"title":"LocalStorage.removeStorage(key)","slug":"localstorage-removestorage-key"},{"level":3,"title":"Params","slug":"params-2"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":2,"title":"LocalStorage.clearStorage()","slug":"localstorage-clearstorage"},{"level":3,"title":"Usage","slug":"usage-3"},{"level":2,"title":"LocalStorage.getStorageInfo()","slug":"localstorage-getstorageinfo"},{"level":3,"title":"Return","slug":"return-1"},{"level":3,"title":"Usage","slug":"usage-4"},{"level":2,"title":"LocalStorage.createStorage(areaName[, options])","slug":"localstorage-createstorage-areaname-options"},{"level":3,"title":"Params","slug":"params-3"},{"level":3,"title":"Return","slug":"return-2"},{"level":3,"title":"Usage","slug":"usage-5"}],"relativePath":"apis/LocalStorage.md","lastUpdated":1638869381461}',o={},d=r(`<h1 id="localstorage-\u672C\u5730\u7F13\u5B58" tabindex="-1">LocalStorage \u672C\u5730\u7F13\u5B58 <a class="header-anchor" href="#localstorage-\u672C\u5730\u7F13\u5B58" aria-hidden="true">#</a></h1><ul><li><p>\u539F\u672C\u5B9A\u4E49\u7684 <code>localStorage</code> \u662F\u53EA\u6709 string \u7C7B\u578B\u7684 value \u3002</p></li><li><p>\u5C01\u88C5\u7684\u63A5\u53E3\u652F\u6301\u5E8F\u5217\u5316\u6570\u636E\uFF0C\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u64CD\u4F5C\u7531\u63A5\u53E3\u5185\u90E8\u5B9E\u73B0\u3002</p></li></ul><h2 id="localstorage-getstorage-key" tabindex="-1">LocalStorage.getStorage(key) <a class="header-anchor" href="#localstorage-getstorage-key" aria-hidden="true">#</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td></td><td>\u662F</td><td>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</td></tr></tbody></table><h3 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h3><p>any data</p><p>key \u5BF9\u5E94\u7684\u5185\u5BB9</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { LocalStorage } from &#39;vfox&#39;

try {
  const value = LocalStorage.getStorageSync(&#39;key&#39;)
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
</code></pre></div><h2 id="localstorage-setstorage-key-value" tabindex="-1">LocalStorage.setStorage(key, value) <a class="header-anchor" href="#localstorage-setstorage-key-value" aria-hidden="true">#</a></h2><h3 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td></td><td>\u662F</td><td>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</td></tr><tr><td>data</td><td>any</td><td></td><td>\u662F</td><td>\u9700\u8981\u5B58\u50A8\u7684\u5185\u5BB9\u3002\u53EA\u652F\u6301\u539F\u751F\u7C7B\u578B\u3001Date\u3001\u53CA\u80FD\u591F\u901A\u8FC7 JSON.stringify \u5E8F\u5217\u5316\u7684\u5BF9\u8C61</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { LocalStorage } from &#39;vfox&#39;

try {
  LocalStorage.setStorageSync(&#39;key&#39;, &#39;value&#39;)
} catch (e) { }
</code></pre></div><h2 id="localstorage-removestorage-key" tabindex="-1">LocalStorage.removeStorage(key) <a class="header-anchor" href="#localstorage-removestorage-key" aria-hidden="true">#</a></h2><h3 id="params-2" tabindex="-1">Params <a class="header-anchor" href="#params-2" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td></td><td>\u662F</td><td>\u672C\u5730\u7F13\u5B58\u4E2D\u6307\u5B9A\u7684 key</td></tr></tbody></table><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { LocalStorage } from &#39;vfox&#39;

try {
  LocalStorage.removeStorageSync(&#39;key&#39;)
} catch (e) {
  // Do something when catch error
}
</code></pre></div><h2 id="localstorage-clearstorage" tabindex="-1">LocalStorage.clearStorage() <a class="header-anchor" href="#localstorage-clearstorage" aria-hidden="true">#</a></h2><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { LocalStorage } from &#39;vfox&#39;

try {
  LocalStorage.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
</code></pre></div><h2 id="localstorage-getstorageinfo" tabindex="-1">LocalStorage.getStorageInfo() <a class="header-anchor" href="#localstorage-getstorageinfo" aria-hidden="true">#</a></h2><h3 id="return-1" tabindex="-1">Return <a class="header-anchor" href="#return-1" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>keys</td><td>string</td><td>\u5F53\u524D storage \u4E2D\u6240\u6709\u7684 key</td></tr><tr><td>currentSize</td><td>number</td><td>\u5F53\u524D\u5360\u7528\u7684\u7A7A\u95F4\u5927\u5C0F, \u5355\u4F4D KB</td></tr><tr><td>limitSize</td><td>number</td><td>\u9650\u5236\u7684\u7A7A\u95F4\u5927\u5C0F\uFF0C\u5355\u4F4D KB</td></tr></tbody></table><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { LocalStorage } from &#39;vfox&#39;

try {
  const res = LocalStorage.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
</code></pre></div><h2 id="localstorage-createstorage-areaname-options" tabindex="-1">LocalStorage.createStorage(areaName[, options]) <a class="header-anchor" href="#localstorage-createstorage-areaname-options" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\u6307\u5B9A\u5206\u533A\u7684\u5B9E\u4F8B\uFF0C\u6765\u7EF4\u62A4\u81EA\u8EAB\u7F13\u5B58\uFF0C\u907F\u514D\u7F13\u5B58\u6C61\u67D3\u5168\u5C40\u3002</p><h3 id="params-3" tabindex="-1">Params <a class="header-anchor" href="#params-3" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td></td><td>\u662F</td><td>\u5206\u533A\u540D\uFF0C\u5982 <code>myArea</code></td></tr><tr><td>options</td><td>object</td><td></td><td>\u5426</td><td>\u914D\u7F6E\u9879</td></tr></tbody></table><h4 id="options-\u7684-params" tabindex="-1">options \u7684 Params <a class="header-anchor" href="#options-\u7684-params" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>perLimitSize</td><td>number</td><td>1024</td><td>\u5426</td><td>\u5355\u6B21\u7F13\u5B58\u6700\u5927 kb</td></tr><tr><td>limitSize</td><td>number</td><td>2560</td><td>\u5426</td><td>\u5206\u533A\u7F13\u5B58\u6700\u5927 kb</td></tr></tbody></table><h3 id="return-2" tabindex="-1">Return <a class="header-anchor" href="#return-2" aria-hidden="true">#</a></h3><p><code>StorageArea</code> \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u64CD\u4F5C\u6307\u5B9A\u5206\u533A\u7684\u672C\u5730\u7F13\u5B58\u3002</p><h3 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { LocalStorage } from &#39;vfox&#39;

const myArea = LocalStorage.createStorage(&#39;myArea&#39;, { limitSize: 1000 })
myArea.setStorage(&#39;a&#39;, 1)
</code></pre></div>`,39),l=[d];function s(h,n,i,c,g,u){return a(),t("div",null,l)}var S=e(o,[["render",s]]);export{p as __pageData,S as default};
