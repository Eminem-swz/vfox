import{_ as e,c as t,o as a,a as d}from"./app.9b8f0faa.js";const m='{"title":"Preview \u9884\u89C8\u7C7B\u578B\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"ImagePreview.previewImage(object)","slug":"imagepreview-previewimage-object"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"apis/Preview.md","lastUpdated":1641395310631}',r={},i=d(`<h1 id="preview-\u9884\u89C8\u7C7B\u578B\u5F39\u7A97" tabindex="-1">Preview \u9884\u89C8\u7C7B\u578B\u5F39\u7A97 <a class="header-anchor" href="#preview-\u9884\u89C8\u7C7B\u578B\u5F39\u7A97" aria-hidden="true">#</a></h1><h2 id="imagepreview-previewimage-object" tabindex="-1">ImagePreview.previewImage(object) <a class="header-anchor" href="#imagepreview-previewimage-object" aria-hidden="true">#</a></h2><p>\u9884\u89C8\u56FE\u7247\u3002</p><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>urls</td><td>string[]</td><td></td><td>\u662F</td><td>\u56FE\u7247\u5730\u5740\u6570\u7EC4</td></tr><tr><td>current</td><td>string</td><td></td><td>\u5426</td><td>\u9ED8\u8BA4\u663E\u793A\u7684\u56FE\u7247\u5730\u5740</td></tr><tr><td>showClose</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u663E\u793A\u6309\u94AE\u540E\u5C55\u793A\u5934\u90E8\u680F</td></tr><tr><td>navigationButtons</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u4E0A\u4E00\u9875/\u4E0B\u4E00\u9875\u6309\u94AE</td></tr><tr><td>imageHighRendering</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u9AD8\u6E05\u6E32\u67D3\uFF0C\u5F00\u542F\u540E\u56FE\u7247\u6309\u7269\u7406\u5206\u8FA8\u7387\u5C55\u793A</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { ImagePreview } from &#39;vfox&#39;

ImagePreview.previewImage({
  urls: [
    &#39;https://cdn.fox2.cn/vfox/empty/default@2x.png&#39;,
    &#39;https://cdn.fox2.cn/vfox/empty/network@2x.png&#39;
  ],
  current: &#39;https://cdn.fox2.cn/vfox/empty/network@2x.png&#39;
})
</code></pre></div>`,8),n=[i];function s(o,h,c,p,l,g){return a(),t("div",null,n)}var _=e(r,[["render",s]]);export{m as __pageData,_ as default};
