import{_ as a,c as n,o as s,a as t}from"./app.6b4e8d9e.js";const g='{"title":"ImageUploader \u56FE\u7247\u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"ImageUploaderBeforeUpload","slug":"imageuploaderbeforeupload"},{"level":3,"title":"ImageUploaderUploadReady","slug":"imageuploaderuploadready"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"delete \u7684\u56DE\u8C03\u53C2\u6570","slug":"delete-\u7684\u56DE\u8C03\u53C2\u6570"}],"relativePath":"components/ImageUploader.md","lastUpdated":1644765401401}',p={},e=t(`<h1 id="imageuploader-\u56FE\u7247\u4E0A\u4F20" tabindex="-1">ImageUploader \u56FE\u7247\u4E0A\u4F20 <a class="header-anchor" href="#imageuploader-\u56FE\u7247\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u6CE8\uFF1A</p><ul><li>\u7C7B\u4F3C\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u4E0A\u4F20\u56FE\u7247\u7684\u7EC4\u4EF6\u3002</li><li>\u652F\u6301\u8868\u5355\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 <a href="./Form.html">Form</a>\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageUploader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>string[]</td><td></td><td>\u662F</td><td>\u5DF2\u4E0A\u4F20\u7684\u56FE\u7247 URL \u5217\u8868</td></tr><tr><td>accept</td><td>ImageUploaderAccept</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4 &#39;all&#39;, \u53EF\u9009 &#39;jpg&#39; &#39;jpeg&#39; &#39;png&#39; &#39;webp&#39;\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u7EC4</td></tr><tr><td>column-number</td><td>number</td><td>3</td><td>\u5426</td><td>\u6E32\u67D3\u5217\u6570\uFF0C\u540C <a href="./Order.html">Order</a> \u7EC4\u4EF6</td></tr><tr><td>max-count</td><td>number</td><td>9</td><td>\u5426</td><td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236\uFF0C\u4E0A\u4F20\u4E2D/\u4E0A\u4F20\u5931\u8D25\u4E5F\u4F1A\u5360\u4E00\u4E2A\u5751\u4F4D</td></tr><tr><td>preview</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5728\u70B9\u51FB\u7F29\u7565\u56FE\u540E\u5C55\u793A\u5168\u5C4F\u56FE\u7247\u9884\u89C8</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</td></tr><tr><td>multiple</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301</td></tr><tr><td>deletable</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5141\u8BB8\u5220\u9664\u56FE\u7247</td></tr><tr><td>image-mode</td><td>ImageMode</td><td>&#39;aspectFill&#39;</td><td>\u5426</td><td>\u56FE\u7247\u7684\u586B\u5145\u6A21\u5F0F\uFF0C\u901A <a href="./Image.html">Image</a> \u7EC4\u4EF6\u7684 mode \u5C5E\u6027</td></tr><tr><td>before-upload</td><td>ImageUploaderBeforeUpload</td><td></td><td>\u5426</td><td>\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE false \u6216 Promise&lt;false&gt; \u53EF\u7EC8\u6B62\u6587\u4EF6\u4E0A\u4F20</td></tr><tr><td>upload-ready</td><td>ImageUploaderUploadReady</td><td></td><td>\u5426</td><td>\u8F6C\u5165\u4E0A\u4F20\u6587\u4EF6\u64CD\u4F5C\u7684\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><h3 id="imageuploaderbeforeupload" tabindex="-1">ImageUploaderBeforeUpload <a class="header-anchor" href="#imageuploaderbeforeupload" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">ImageUploaderBeforeUpload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> File<span class="token punctuation">,</span> handlers<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">formatSize</span><span class="token punctuation">(</span>size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> \\<span class="token operator">|</span> <span class="token keyword">void</span> \\<span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span> <span class="token operator">|</span> File\\<span class="token operator">&gt;</span>
</code></pre></div><p>\u4E0A\u4F20\u524D\u8FDB\u884C\u6821\u9A8C\u548C\u5904\u7406\uFF0C\u8FD4\u56DE <code>false</code> \u6216 <code>Promise&lt;false&gt;</code> \u8868\u793A\u6821\u9A8C\u5931\u8D25\u3002\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4FEE\u6539\u8FC7\u7684 File \u5BF9\u8C61\uFF0C\u5982\u679C\u538B\u7F29\u56FE\u7247\u7B49\u3002</p><h4 id="handlers-\u63D0\u4F9B\u7684\u65B9\u6CD5" tabindex="-1">handlers \u63D0\u4F9B\u7684\u65B9\u6CD5 <a class="header-anchor" href="#handlers-\u63D0\u4F9B\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h4><table><thead><tr><th>handlers \u65B9\u6CD5</th><th>\u53C2\u6570\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>handlers.formatSize</td><td>(size: number) =&gt; string</td><td>\u628A\u56FE\u7247\u7684\u6587\u4EF6\u5927\u5C0F\u6570\u503C\u8F6C\u4E3A\u53EF\u8BFB\u7684\uFF0C\u5982 10MB, 10.5KB</td></tr></tbody></table><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-image-uploader</span> <span class="token attr-name">:beforeUpload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onBeforeUpload<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onBeforeUpload</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> <span class="token punctuation">{</span> formatSize <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Toast<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u4E0A\u4F20\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatSize</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      Toast<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E3A </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">formatSize</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="imageuploaderuploadready" tabindex="-1">ImageUploaderUploadReady <a class="header-anchor" href="#imageuploaderuploadready" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">ImageUploaderUploadReady</span> <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> File<span class="token punctuation">,</span> handlers<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">getUploadId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">formatSize</span><span class="token punctuation">(</span>size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">setUploading</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">fail</span><span class="token punctuation">(</span>e<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">success</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre></div><p>\u5728\u8BE5\u8282\u70B9\u4E2D\u5C06\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002</p><h4 id="handlers-\u63D0\u4F9B\u7684\u65B9\u6CD5-1" tabindex="-1">handlers \u63D0\u4F9B\u7684\u65B9\u6CD5 <a class="header-anchor" href="#handlers-\u63D0\u4F9B\u7684\u65B9\u6CD5-1" aria-hidden="true">#</a></h4><table><thead><tr><th>handlers \u65B9\u6CD5</th><th>\u53C2\u6570\u8FD4\u56DE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>handlers.getUploadId</td><td>() =&gt; number</td><td>\u83B7\u53D6\u56FE\u7247\u4E0A\u4F20\u5206\u914D\u7684\u552F\u4E00\u503C</td></tr><tr><td>handlers.formatSize</td><td>(size: number) =&gt; string</td><td>\u628A\u56FE\u7247\u7684\u6587\u4EF6\u5927\u5C0F\u6570\u503C\u8F6C\u4E3A\u53EF\u8BFB\u7684\uFF0C\u5982 10MB, 10.5KB</td></tr><tr><td>handlers.setUploading</td><td>(message: string) =&gt; void</td><td>\u8BBE\u7F6E\u56FE\u7247\u4E0A\u4F20\u72B6\u6001\u4E3A\u4E0A\u4F20\u4E2D</td></tr><tr><td>handlers.success</td><td>(url: string) =&gt; void</td><td>\u8BBE\u7F6E\u56FE\u7247\u4E0A\u4F20\u72B6\u6001\u4E3A\u4E0A\u4F20\u6210\u529F\uFF0C\u4F20\u5165\u63A5\u53E3\u8FD4\u56DE\u7684 URL</td></tr><tr><td>handlers.fail</td><td>(e?: string | Error) =&gt; void</td><td>\u8BBE\u7F6E\u56FE\u7247\u4E0A\u4F20\u72B6\u6001\u4E3A\u4E0A\u4F20\u5931\u8D25\uFF0C\u4F20\u5165\u9519\u8BEF\u4FE1\u606F</td></tr></tbody></table><p>\u6CE8\uFF1A\u6574\u4E2A\u4E0A\u4F20\u6D41\u7A0B\u5206\u4E3A 3 \u4E2A\u9636\u6BB5\uFF1Areading -&gt; uploading -&gt; uploaded | failed\uFF0Chandlers \u63D0\u4F9B\u7684\u6539\u53D8\u72B6\u6001\u65B9\u6CD5\u662F\u4E0D\u53EF\u9006\u7684\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-image-uploader</span> <span class="token attr-name">:uploadReady</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onUpload<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onUpload</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> handlers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      handlers<span class="token punctuation">.</span><span class="token function">setUploading</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0A\u4F20\u4E2D...&#39;</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">customGetFileUrl</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">url</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            handlers<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&#39;\u6A21\u62DF\u5931\u8D25&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            handlers<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>delete</td><td>\u56FE\u7247\u88AB\u5220\u9664\u65F6\u89E6\u53D1</td><td>payload: { index: number, item: { id: number, status: string, url: string } }</td><td>ImageUploaderOnDelete</td></tr><tr><td>change</td><td>\u5DF2\u4E0A\u4F20\u7684\u56FE\u7247 URL \u5217\u8868\u6539\u53D8\u65F6</td><td>value: string[]</td><td></td></tr></tbody></table><h3 id="delete-\u7684\u56DE\u8C03\u53C2\u6570" tabindex="-1">delete \u7684\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#delete-\u7684\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>index</td><td>number</td><td>\u56FE\u7247\u7D22\u5F15</td></tr><tr><td><a href="http://item.id" target="_blank" rel="noopener noreferrer">item.id</a></td><td>number</td><td>\u56FE\u7247\u4E0A\u4F20\u9879\u5206\u914D\u7684\u552F\u4E00\u503C</td></tr><tr><td>item.status</td><td>string</td><td>reading(uploadReady \u540E)\uFF0Cuploading\uFF0Cuploaded\uFF0Cfailed</td></tr><tr><td>item.url</td><td>string</td><td>\u56FE\u7247 URL \u5730\u5740</td></tr></tbody></table>`,25),o=[e];function l(c,d,r,u,i,k){return s(),n("div",null,o)}var m=a(p,[["render",l]]);export{g as __pageData,m as default};
