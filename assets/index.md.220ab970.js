import{_ as e,c as a,o as n,a as o}from"./app.9b8f0faa.js";const g='{"title":"\u6307\u5357","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"\u4ECB\u7D39","slug":"\u4ECB\u7D39"},{"level":3,"title":"\u7279\u6027","slug":"\u7279\u6027"},{"level":3,"title":"\u9644\u8A00","slug":"\u9644\u8A00"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"npm","slug":"npm"},{"level":3,"title":"yarn","slug":"yarn"},{"level":2,"title":"\u5F15\u5165\u7EC4\u4EF6","slug":"\u5F15\u5165\u7EC4\u4EF6"},{"level":3,"title":"\u901A\u8FC7 Babel \u63D2\u4EF6\u6309\u9700\u5F15\u5165\u7EC4\u4EF6","slug":"\u901A\u8FC7-babel-\u63D2\u4EF6\u6309\u9700\u5F15\u5165\u7EC4\u4EF6"},{"level":3,"title":"\u5728 Vite \u9879\u76EE\u4E2D\u6309\u9700\u5F15\u5165\u7EC4\u4EF6","slug":"\u5728-vite-\u9879\u76EE\u4E2D\u6309\u9700\u5F15\u5165\u7EC4\u4EF6"},{"level":3,"title":"\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6","slug":"\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6"},{"level":3,"title":"\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":2,"title":"API \u8C03\u7528","slug":"api-\u8C03\u7528"},{"level":2,"title":"\u56FD\u9645\u5316","slug":"\u56FD\u9645\u5316"},{"level":3,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":3,"title":"Locale","slug":"locale"},{"level":2,"title":"\u4E3B\u9898\u5B9A\u5236","slug":"\u4E3B\u9898\u5B9A\u5236"}],"relativePath":"index.md","lastUpdated":1641378634830}',t={},i=o(`<h1 id="\u6307\u5357" tabindex="-1">\u6307\u5357 <a class="header-anchor" href="#\u6307\u5357" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7D39" tabindex="-1">\u4ECB\u7D39 <a class="header-anchor" href="#\u4ECB\u7D39" aria-hidden="true">#</a></h2><p>\u79FB\u52A8\u7AEF Vue 3.x \u7EC4\u4EF6\u5E93\u3002</p><h3 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h3><ul><li>\u63D0\u4F9B 100+ \u7EC4\u4EF6\uFF0C\u8986\u76D6\u79FB\u52A8\u7AEF\u5404\u7C7B\u573A\u666F</li><li>\u5355\u5143\u6D4B\u8BD5\u8986\u76D6</li><li>\u652F\u6301 Vue 2 \u548C Vue 3</li><li>\u652F\u6301\u6309\u9700\u5F15\u5165</li></ul><h3 id="\u9644\u8A00" tabindex="-1">\u9644\u8A00 <a class="header-anchor" href="#\u9644\u8A00" aria-hidden="true">#</a></h3><p>\u8BE5\u7248\u672C\u5DF2\u4F7F\u7528 <code>Composition API</code> \u548C <code>Typescript</code> \u91CD\u6784\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i -S vfox
</code></pre></div><h3 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h3><div class="language-"><pre><code>yarn add vfox
</code></pre></div><h2 id="\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h2><h3 id="\u901A\u8FC7-babel-\u63D2\u4EF6\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u901A\u8FC7 Babel \u63D2\u4EF6\u6309\u9700\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u901A\u8FC7-babel-\u63D2\u4EF6\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 ant \u56E2\u961F\u63D0\u4F9B\u7684 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a> babel \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C06 import \u7684\u5199\u6CD5\u81EA\u52A8\u8F6C\u6362\u4E3A\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F\u3002</p><div class="language-"><pre><code>npm i babel-plugin-import -D
</code></pre></div><p>\u5728 <code>babel.config.js</code> \u4E2D\u914D\u7F6E\uFF1A</p><div class="language-"><pre><code>module.exports = {
  ...
  plugins: [
    [
      &quot;import&quot;,
      {
        libraryName: &quot;vfox&quot;,
        libraryDirectory: &quot;es&quot;,
        style: true,
        camel2DashComponentName: false
      },
      &quot;vfox&quot;
    ]
  ]
}
</code></pre></div><p>\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u5F15\u5165 <code>Vfox</code> \u7EC4\u4EF6\uFF1A</p><div class="language-"><pre><code>import { Button } from &#39;vfox&#39;

app.use(Button)
</code></pre></div><p>\u6216\u8005\u5728 <code>SFC</code> \u4E0B\u5F15\u5165\u7EC4\u4EF6\uFF1A</p><div class="language-"><pre><code>import { defineComponent } from &#39;vue&#39;
import { Button } from &#39;vfox&#39;

export default defineComponent({
  components: { Button },
  ...
})
</code></pre></div><blockquote><p>Tips: \u914D\u7F6E\u6309\u9700\u5F15\u5165\u540E\uFF0C\u5C06\u4E0D\u5141\u8BB8\u76F4\u63A5\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6\u3002</p></blockquote><h3 id="\u5728-vite-\u9879\u76EE\u4E2D\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u5728 Vite \u9879\u76EE\u4E2D\u6309\u9700\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u5728-vite-\u9879\u76EE\u4E2D\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E Vite \u9879\u76EE\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>vite-plugin-style-import</code> \u5B9E\u73B0\u6309\u9700\u5F15\u5165, \u539F\u7406\u548C <code>babel-plugin-import</code> \u7C7B\u4F3C\u3002</p><div class="language-"><pre><code>npm i vite-plugin-style-import -D
</code></pre></div><p>\u5728 <code>vite.config.js</code> \u4E2D\u914D\u7F6E\uFF1A</p><div class="language-"><pre><code>import { defineConfig } from &quot;vite&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;
import styleImport from &quot;vite-plugin-style-import&quot;;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: &quot;vfox&quot;,
          esModule: true,
          libraryNameChangeCase: &quot;pascalCase&quot;,
          resolveStyle: (name) =&gt; \`vfox/es/\${name}/style\`
        }
      ]
    }),
    ...
  ]
})
</code></pre></div><blockquote><p>Tips: \u914D\u7F6E\u6309\u9700\u5F15\u5165\u540E\uFF0C\u5C06\u4E0D\u5141\u8BB8\u76F4\u63A5\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6\u3002</p></blockquote><h3 id="\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u5728\u4E0D\u4F7F\u7528\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u624B\u52A8\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\u3002</p><div class="language-"><pre><code>import Button from &#39;vfox/es/Button&#39;
import &#39;vfox/es/Button/style&#39;

app.use(Button)
</code></pre></div><h3 id="\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u5168\u7EC4\u4EF6\u5F15\u5165\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import Vfox from &#39;vfox&#39;
import &#39;vfox/es/style/index.css&#39;

app.use(Vfox)
</code></pre></div><blockquote><p>\u5F15\u5165\u6240\u6709\u7EC4\u4EF6\u4F1A\u589E\u5927\u4EE3\u7801\u5305\u4F53\u79EF\uFF0C\u6BD5\u7ADF 99+\u7EC4\u4EF6\u4E86\uFF0C\u9664\u975E\u6574\u4E2A\u9879\u76EE\u662F\u57FA\u4E8E\u6B64 UI \u5E93\u5F00\u53D1\u3002</p></blockquote><h2 id="api-\u8C03\u7528" tabindex="-1">API \u8C03\u7528 <a class="header-anchor" href="#api-\u8C03\u7528" aria-hidden="true">#</a></h2><p>API \u8C03\u7528\u9700\u8981\u5148\u5F15\u5165\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u65B9\u53EF\u8C03\u7528\uFF0C\u5F15\u7528\u65B9\u5F0F\u540C\u4E0A\u3002</p><div class="language-"><pre><code>import { Toast } from &#39;vfox&#39;

export default {
  mounted() {
    Toast.showToast({
      title: &#39;\u6210\u529F&#39;,
      type: &#39;success&#39;,
      duration: 2000
    })
  }
}
</code></pre></div><p>\u8BE6\u60C5\u53EF\u89C1 <a href="./apis/Toast.html">API</a> \u3002</p><h2 id="\u56FD\u9645\u5316" tabindex="-1">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a></h2><h3 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5E93\u9ED8\u8BA4\u7684\u6587\u6848\u8BED\u8A00\u662F\u4E2D\u6587\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u76EE\u524D\u652F\u6301 <strong>\u4E2D\u6587</strong> \u548C <strong>\u82F1\u6587</strong>\u3002</p><h3 id="locale" tabindex="-1">Locale <a class="header-anchor" href="#locale" aria-hidden="true">#</a></h3><p>\u5148\u5F15\u5165 <code>Locale</code> \u6A21\u5757\uFF1A</p><div class="language-"><pre><code>import { Locale } from &#39;vfox&#39;
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u4F7F\u7528\u82F1\u6587\uFF1A</p><div class="language-"><pre><code>import enUS from &#39;vfox/es/Locale/lang/en-US&#39;

Locale.use(&#39;en-US&#39;, enUS)
</code></pre></div><p>\u5207\u6362\u56DE\u4E2D\u6587\uFF1A</p><div class="language-"><pre><code>Locale.use(&#39;zh-CN&#39;)
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u5176\u4E2D\u7684\u90E8\u5206\u6587\u6848\u8FDB\u884C\u4FEE\u6539\uFF1A</p><div class="language-"><pre><code>Locale.merge(&#39;zh-CN&#39;, {
  pickerConfirmText: &#39;\u5B8C\u6210&#39;
})
</code></pre></div><h2 id="\u4E3B\u9898\u5B9A\u5236" tabindex="-1">\u4E3B\u9898\u5B9A\u5236 <a class="header-anchor" href="#\u4E3B\u9898\u5B9A\u5236" aria-hidden="true">#</a></h2><p>\u89C1 <a href="./design/color.html#\u4E3B\u9898\u5B9A\u5236">\u8272\u5F69-\u4E3B\u9898\u5B9A\u5236</a> \u3002</p>`,53),r=[i];function l(d,s,p,c,h,u){return n(),a("div",null,r)}var f=e(t,[["render",l]]);export{g as __pageData,f as default};