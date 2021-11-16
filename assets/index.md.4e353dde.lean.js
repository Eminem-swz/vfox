import{_ as e,c as a,o as i,a as l}from"./app.8ec95c28.js";const f='{"title":"\u6307\u5357","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"\u4ECB\u7D39","slug":"\u4ECB\u7D39"},{"level":3,"title":"\u7279\u6027","slug":"\u7279\u6027"},{"level":3,"title":"\u9644\u8A00","slug":"\u9644\u8A00"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"NPM","slug":"npm"},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165"},{"level":3,"title":"\u5168\u7EC4\u4EF6\u5F15\u5165","slug":"\u5168\u7EC4\u4EF6\u5F15\u5165"},{"level":3,"title":"\u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6","slug":"\u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6"},{"level":3,"title":"\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6","slug":"\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6"},{"level":3,"title":"API \u8C03\u7528","slug":"api-\u8C03\u7528"},{"level":2,"title":"\u4E3B\u9898\u5B9A\u5236","slug":"\u4E3B\u9898\u5B9A\u5236"},{"level":2,"title":"\u4ECE v1\uFF08\u57FA\u4E8E Vue2\uFF09\u7248\u672C\u5347\u7EA7","slug":"\u4ECE-v1\uFF08\u57FA\u4E8E-vue2\uFF09\u7248\u672C\u5347\u7EA7"},{"level":3,"title":"\u5347\u7EA7 Vue 3","slug":"\u5347\u7EA7-vue-3"},{"level":3,"title":"\u4E0D\u517C\u5BB9\u66F4\u65B0","slug":"\u4E0D\u517C\u5BB9\u66F4\u65B0"}],"relativePath":"index.md","lastUpdated":1637041750064}',o={},r=l(`__VP_STATIC_START__<h1 id="\u6307\u5357" tabindex="-1">\u6307\u5357 <a class="header-anchor" href="#\u6307\u5357" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7D39" tabindex="-1">\u4ECB\u7D39 <a class="header-anchor" href="#\u4ECB\u7D39" aria-hidden="true">#</a></h2><p>\u79FB\u52A8\u7AEF Vue 3.x \u7EC4\u4EF6\u5E93\u3002</p><h3 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h3><ul><li>\u63D0\u4F9B 100+ \u7EC4\u4EF6\uFF0C\u8986\u76D6\u79FB\u52A8\u7AEF\u5404\u7C7B\u573A\u666F</li><li>\u5355\u5143\u6D4B\u8BD5\u8986\u76D6</li><li>\u652F\u6301 Vue 2 \u548C Vue 3</li><li>\u652F\u6301\u6309\u9700\u5F15\u5165</li></ul><h3 id="\u9644\u8A00" tabindex="-1">\u9644\u8A00 <a class="header-anchor" href="#\u9644\u8A00" aria-hidden="true">#</a></h3><p>\u8BE5\u7248\u672C\u5DF2\u4F7F\u7528 <code>Composition API</code> \u548C <code>Typescript</code> \u91CD\u6784\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i -S vfox@next
</code></pre></div><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><h3 id="\u5168\u7EC4\u4EF6\u5F15\u5165" tabindex="-1">\u5168\u7EC4\u4EF6\u5F15\u5165 <a class="header-anchor" href="#\u5168\u7EC4\u4EF6\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import Vfox from &#39;vfox&#39;
import &#39;vfox/es/style/index.css&#39;

app.use(Vfox)
</code></pre></div><h3 id="\u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 ant \u56E2\u961F\u63D0\u4F9B\u7684 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a> babel \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C06 import \u7684\u5199\u6CD5\u81EA\u52A8\u8F6C\u6362\u4E3A\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F\u3002</p><div class="language-"><pre><code>npm i babel-plugin-import -D
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
</code></pre></div><h3 id="\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u624B\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u5728\u4E0D\u4F7F\u7528\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u624B\u52A8\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\u3002</p><div class="language-"><pre><code>import { Button } from &#39;vfox/es/Button&#39;
import &#39;vfox/src/Button/style&#39;

app.use(Button)
</code></pre></div><h3 id="api-\u8C03\u7528" tabindex="-1">API \u8C03\u7528 <a class="header-anchor" href="#api-\u8C03\u7528" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Toast } from &#39;vfox&#39;

export default {
  mounted() {
    Toast.showToast({
      title: &#39;\u6210\u529F&#39;,
      type: &#39;success&#39;,
      duration: 2000
    })
  }
}
</code></pre></div><h2 id="\u4E3B\u9898\u5B9A\u5236" tabindex="-1">\u4E3B\u9898\u5B9A\u5236 <a class="header-anchor" href="#\u4E3B\u9898\u5B9A\u5236" aria-hidden="true">#</a></h2><p>Vfox \u7684\u6837\u5F0F\u662F\u57FA\u4E8E SCSS \u5F00\u53D1\u7684\uFF0C\u5B9A\u4E49\u4E86\u4E00\u5957\u9ED8\u8BA4\u6837\u5F0F\u53D8\u91CF\uFF0C\u53D8\u91CF\u53EF\u53C2\u8003 <a href="https://github.com/godxiaoji/vfox/blob/beta/src/style/var.scss" target="_blank" rel="noopener noreferrer">var.scss</a>\u3002</p><ol><li>\u65B0\u5EFA\u81EA\u5B9A\u4E49 SCSS \u6587\u4EF6 <code>my-var.scss</code>\uFF0C\u5B9A\u4E49\u4E00\u4E9B\u53D8\u91CF\uFF0C\u5982\uFF1A</li></ol><div class="language-"><pre><code>$primary-color: #ff0000;
$warning: #ffff00;
...
</code></pre></div><ol start="2"><li>\u65B0\u5EFA\u8981\u5165\u53E3 SCSS \u6587\u4EF6 <code>my-style.scss</code>\uFF0C\u5F15\u5165\u81EA\u5B9A\u4E49\u53D8\u91CF\u6587\u4EF6\u548C\u9ED8\u8BA4\u4E3B\u9898\u6587\u4EF6\u3002</li></ol><div class="language-"><pre><code>@import &#39;path/to/my-var.scss&#39;;
@import &#39;vfox/src/style/index.scss&#39;;
</code></pre></div><ol start="3"><li>\u66F4\u6539\u539F\u6765\u5F15\u5165\u7684\u6837\u5F0F\u6587\u4EF6</li></ol><p><code>import &#39;vfox/es/style/index.css&#39;</code> =&gt; <code>import &#39;path/to/my-style.scss&#39;</code></p><h2 id="\u4ECE-v1\uFF08\u57FA\u4E8E-vue2\uFF09\u7248\u672C\u5347\u7EA7" tabindex="-1">\u4ECE v1\uFF08\u57FA\u4E8E Vue2\uFF09\u7248\u672C\u5347\u7EA7 <a class="header-anchor" href="#\u4ECE-v1\uFF08\u57FA\u4E8E-vue2\uFF09\u7248\u672C\u5347\u7EA7" aria-hidden="true">#</a></h2><h3 id="\u5347\u7EA7-vue-3" tabindex="-1">\u5347\u7EA7 Vue 3 <a class="header-anchor" href="#\u5347\u7EA7-vue-3" aria-hidden="true">#</a></h3><p>\u5347\u7EA7\u95EE\u9898\u8BF7\u67E5\u770B <a href="https://v3.vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer">Vue3 \u6587\u6863</a>\u3002</p><h3 id="\u4E0D\u517C\u5BB9\u66F4\u65B0" tabindex="-1">\u4E0D\u517C\u5BB9\u66F4\u65B0 <a class="header-anchor" href="#\u4E0D\u517C\u5BB9\u66F4\u65B0" aria-hidden="true">#</a></h3><h4 id="\u5F39\u7A97\u7EC4\u4EF6-visible-\u5B57\u6BB5\u53D8\u66F4" tabindex="-1">\u5F39\u7A97\u7EC4\u4EF6 visible \u5B57\u6BB5\u53D8\u66F4 <a class="header-anchor" href="#\u5F39\u7A97\u7EC4\u4EF6-visible-\u5B57\u6BB5\u53D8\u66F4" aria-hidden="true">#</a></h4><p>\u7531\u539F\u6765\u7684 <code>visible.sync</code> \u53D8\u66F4\u4E3A <code>v-model:visible</code>\uFF0C\u6D89\u53CA\u7EC4\u4EF6\uFF1A</p><ul><li>ActionSheet</li><li>CalendarPopup</li><li>Dialog</li><li>Drawer</li><li>Dropdown</li><li>ImagePreview</li><li>Modal</li><li>NoticeBar</li><li>Notify</li><li>PickerPopup</li><li>PopDialog</li><li>PopMenu</li><li>Popover</li><li>Toast</li></ul><h4 id="\u5176\u4ED6\u6D89\u53CA-sync\u3001v-model-\u5B57\u6BB5\u7684\u53D8\u66F4" tabindex="-1">\u5176\u4ED6\u6D89\u53CA .sync\u3001v-model \u5B57\u6BB5\u7684\u53D8\u66F4 <a class="header-anchor" href="#\u5176\u4ED6\u6D89\u53CA-sync\u3001v-model-\u5B57\u6BB5\u7684\u53D8\u66F4" aria-hidden="true">#</a></h4><ul><li>Tab/TabBar \u7EC4\u4EF6 <code>active-value.sync</code> -&gt; <code>v-model:active-value</code></li><li>Swiper/Sticky \u7EC4\u4EF6 <code>active-index.sync</code> -&gt; <code>v-model:active-index</code></li><li>Radio/Checkbox \u7EC4\u4EF6 <code>v-model</code> -&gt; <code>v-model:checked</code></li><li>ImagePreview \u7EC4\u4EF6 <code>current.sync</code> -&gt; <code>v-model:current</code></li><li>Collapse \u7EC4\u4EF6 <code>active-names.sync</code> -&gt; <code>v-model:active-names</code></li></ul>__VP_STATIC_END__`,42),d=[r];function t(n,s,c,h,p,u){return i(),a("div",null,d)}var m=e(o,[["render",t]]);export{f as __pageData,m as default};
