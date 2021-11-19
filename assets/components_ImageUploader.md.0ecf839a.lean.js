import{_ as t,c as e,o as d,a}from"./app.8ec95c28.js";const c='{"title":"ImageUploader \u56FE\u7247\u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"beforeUpload(file: File, handlers: Object) => boolean | file | Promise","slug":"beforeupload-file-file-handlers-object-boolean-file-promise-boolean-file"},{"level":3,"title":"uploadReady(file: File, handlers: Object) => void","slug":"uploadready-file-file-handlers-object-void"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"delete \u7684\u56DE\u8C03\u53C2\u6570 item","slug":"delete-\u7684\u56DE\u8C03\u53C2\u6570-item"}],"relativePath":"components/ImageUploader.md","lastUpdated":1637303582773}',r={},l=a(`__VP_STATIC_START__<h1 id="imageuploader-\u56FE\u7247\u4E0A\u4F20" tabindex="-1">ImageUploader \u56FE\u7247\u4E0A\u4F20 <a class="header-anchor" href="#imageuploader-\u56FE\u7247\u4E0A\u4F20" aria-hidden="true">#</a></h1><ul><li>\u7C7B\u4F3C\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u4E0A\u4F20\u56FE\u7247\u7684\u7EC4\u4EF6\u3002</li><li>\u53EF\u4EE5\u914D\u5408 <a href="./Form.html">Form</a> \u548C <a href="./Form.html#formitem-\u8868\u5355\u9879">FormItem</a> \u4F7F\u7528\u3002</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>string[]</td><td></td><td>\u662F</td><td>\u5DF2\u4E0A\u4F20\u7684\u56FE\u7247 URL \u5217\u8868</td></tr><tr><td>accept</td><td>string</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4 &#39;all&#39;, \u53EF\u9009 &#39;jpg&#39; &#39;jpeg&#39; &#39;png&#39; &#39;webp&#39;\uFF0C\u76EE\u524D\u79FB\u52A8\u7AEF\u56FE\u7247\u7C7B\u578B\u4E0D\u591A\uFF0C\u9650\u5236\u6BD4\u8F83\u6B7B</td></tr><tr><td>column-number</td><td>number</td><td>3</td><td>\u5426</td><td>\u6E32\u67D3\u5217\u6570\uFF0C\u540C <a href="./Order.html">Order</a> \u7EC4\u4EF6</td></tr><tr><td>max-count</td><td>number</td><td>9</td><td>\u5426</td><td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236\uFF0C\u4E0A\u4F20\u4E2D/\u4E0A\u4F20\u5931\u8D25\u4E5F\u4F1A\u5360\u4E00\u4E2A\u5751\u4F4D</td></tr><tr><td>preview</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5728\u70B9\u51FB\u7F29\u7565\u56FE\u540E\u5C55\u793A\u5168\u5C4F\u56FE\u7247\u9884\u89C8</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</td></tr><tr><td>multiple</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301</td></tr><tr><td>deletable</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5141\u8BB8\u5220\u9664\u56FE\u7247</td></tr><tr><td>image-mode</td><td>string</td><td>&#39;aspectFill&#39;</td><td>\u5426</td><td>\u56FE\u7247\u7684\u586B\u5145\u6A21\u5F0F\uFF0C\u901A <a href="./Image.html">Image</a> \u7EC4\u4EF6\u7684 mode \u5C5E\u6027</td></tr><tr><td>before-upload</td><td>Function</td><td></td><td>\u5426</td><td>\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE false \u6216 Promise&lt;false&gt; \u53EF\u7EC8\u6B62\u6587\u4EF6\u4E0A\u4F20</td></tr><tr><td>upload-ready</td><td>Function</td><td></td><td>\u5426</td><td>\u8F6C\u5165\u4E0A\u4F20\u6587\u4EF6\u64CD\u4F5C\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="beforeupload-file-file-handlers-object-boolean-file-promise-boolean-file" tabindex="-1">beforeUpload(file: File, handlers: Object) =&gt; boolean | file | Promise&lt;boolean | file&gt; <a class="header-anchor" href="#beforeupload-file-file-handlers-object-boolean-file-promise-boolean-file" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u4F20\u5165 beforeUpload \u51FD\u6570\u53EF\u4EE5\u5728\u4E0A\u4F20\u524D\u8FDB\u884C\u6821\u9A8C\u548C\u5904\u7406\uFF0C\u8FD4\u56DE false \u6216 Promise&lt;false&gt; \u8868\u793A\u6821\u9A8C\u5931\u8D25\u3002</p><p>\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4FEE\u6539\u8FC7\u7684 file \u5BF9\u8C61\uFF0C\u5982\u679C\u538B\u7F29\u56FE\u7247\u7B49\u3002</p><h4 id="beforeupload-\u7684-handlers-\u63D0\u4F9B\u7684\u65B9\u6CD5" tabindex="-1">beforeUpload \u7684 handlers \u63D0\u4F9B\u7684\u65B9\u6CD5 <a class="header-anchor" href="#beforeupload-\u7684-handlers-\u63D0\u4F9B\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h4><table><thead><tr><th>handlers \u65B9\u6CD5</th><th>\u53C2\u6570\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>handlers.formatSize</td><td>(size: number) =&gt; string</td><td>\u628A\u56FE\u7247\u7684\u6587\u4EF6\u5927\u5C0F\u6570\u503C\u8F6C\u4E3A\u53EF\u8BFB\u7684\uFF0C\u5982 10MB, 10.5KB</td></tr></tbody></table><div class="language-"><pre><code>&lt;fx-image-uploader :beforeUpload=&quot;onBeforeUpload&quot; /&gt;
</code></pre></div><div class="language-"><pre><code>export default {
  methods: {
    onBeforeUpload(file, { formatSize }) {
      if (file.size &gt; 1024 * 1024) {
        Toast.showToast(\`\u4E0A\u4F20\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E \${formatSize(1024 * 1024)}\`)
        return false
      }
      Toast.showToast(\`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E3A \${formatSize(file.size)}\`)
    }
  }
}
</code></pre></div><h3 id="uploadready-file-file-handlers-object-void" tabindex="-1">uploadReady(file: File, handlers: Object) =&gt; void <a class="header-anchor" href="#uploadready-file-file-handlers-object-void" aria-hidden="true">#</a></h3><p>\u5728\u8BE5\u8282\u70B9\u4E2D\u5C06\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002</p><table><thead><tr><th>handlers \u65B9\u6CD5</th><th>\u53C2\u6570\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>handlers.getUploadId</td><td>() =&gt; number</td><td>\u83B7\u53D6\u56FE\u7247\u4E0A\u4F20\u5206\u914D\u7684\u552F\u4E00\u503C</td></tr><tr><td>handlers.formatSize</td><td>(size: number) =&gt; string</td><td>\u628A\u56FE\u7247\u7684\u6587\u4EF6\u5927\u5C0F\u6570\u503C\u8F6C\u4E3A\u53EF\u8BFB\u7684\uFF0C\u5982 10MB, 10.5KB</td></tr><tr><td>handlers.setUploading</td><td>(message: string) =&gt; void</td><td>\u8BBE\u7F6E\u56FE\u7247\u4E0A\u4F20\u72B6\u6001\u4E3A\u4E0A\u4F20\u4E2D</td></tr><tr><td>handlers.success</td><td>(url: string) =&gt; void</td><td>\u8BBE\u7F6E\u56FE\u7247\u4E0A\u4F20\u72B6\u6001\u4E3A\u4E0A\u4F20\u6210\u529F\uFF0C\u4F20\u5165\u63A5\u53E3\u8FD4\u56DE\u7684 URL</td></tr><tr><td>handlers.fail</td><td>(e: Error | string ) =&gt; void</td><td>\u8BBE\u7F6E\u56FE\u7247\u4E0A\u4F20\u72B6\u6001\u4E3A\u4E0A\u4F20\u5931\u8D25\uFF0C\u4F20\u5165\u9519\u8BEF\u4FE1\u606F</td></tr></tbody></table><p>PS\uFF1A\u6574\u4E2A\u4E0A\u4F20\u6D41\u7A0B\u5206\u4E3A 3 \u4E2A\u9636\u6BB5\uFF1Areading -&gt; uploading -&gt; uploaded | failed\uFF0Chandlers \u63D0\u4F9B\u7684\u6539\u53D8\u72B6\u6001\u65B9\u6CD5\u662F\u4E0D\u53EF\u9006\u7684\u3002</p><div class="language-"><pre><code>&lt;fx-image-uploader :uploadReady=&quot;onUpload&quot; /&gt;
</code></pre></div><div class="language-"><pre><code>export default {
  methods: {
    onUpload(file, handlers) {
      handlers.setUploading(&#39;\u4E0A\u4F20\u4E2D...&#39;)

      setTimeout(() =&gt; {
        customGetFileUrl(file).then(url =&gt; {
          if (Math.random() &gt; 0.5) {
            handlers.fail(&#39;\u6A21\u62DF\u5931\u8D25&#39;)
          } else {
            handlers.success(url)
          }
        })
      }, 2000)
    }
  }
}
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>delete</td><td>\u56FE\u7247\u88AB\u5220\u9664\u65F6\u89E6\u53D1</td><td>{ index: number, item: { id: number, status: string, url: string } }</td></tr><tr><td>change</td><td>\u5DF2\u4E0A\u4F20\u7684\u56FE\u7247 URL \u5217\u8868\u6539\u53D8\u65F6</td><td>{ value: string[] }</td></tr></tbody></table><h3 id="delete-\u7684\u56DE\u8C03\u53C2\u6570-item" tabindex="-1">delete \u7684\u56DE\u8C03\u53C2\u6570 item <a class="header-anchor" href="#delete-\u7684\u56DE\u8C03\u53C2\u6570-item" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>id</td><td>number</td><td>\u56FE\u7247\u4E0A\u4F20\u9879\u5206\u914D\u7684\u552F\u4E00\u503C</td></tr><tr><td>status</td><td>string</td><td>reading(uploadReady \u540E)\uFF0Cuploading\uFF0Cuploaded\uFF0Cfailed</td></tr><tr><td>url</td><td>string</td><td>\u56FE\u7247 URL \u5730\u5740</td></tr></tbody></table>__VP_STATIC_END__`,21),o=[l];function i(n,s,h,p,f,u){return d(),e("div",null,o)}var g=t(r,[["render",i]]);export{c as __pageData,g as default};
