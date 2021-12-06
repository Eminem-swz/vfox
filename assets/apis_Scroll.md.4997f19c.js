import{_ as t,c as d,o as e,a as r}from"./app.6fdd4400.js";const m='{"title":"Scroll \u6EDA\u52A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Scroll.pageScrollTo(object)","slug":"scroll-pagescrollto-object"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Usage","slug":"usage"},{"level":2,"title":"Scroll.scrollTo(object)","slug":"scroll-scrollto-object"},{"level":3,"title":"Params","slug":"params-1"},{"level":3,"title":"Usage","slug":"usage-1"}],"relativePath":"apis/Scroll.md","lastUpdated":1638797921625}',a={},l=r(`<h1 id="scroll-\u6EDA\u52A8" tabindex="-1">Scroll \u6EDA\u52A8 <a class="header-anchor" href="#scroll-\u6EDA\u52A8" aria-hidden="true">#</a></h1><h2 id="scroll-pagescrollto-object" tabindex="-1">Scroll.pageScrollTo(object) <a class="header-anchor" href="#scroll-pagescrollto-object" aria-hidden="true">#</a></h2><p>\u5C06\u9875\u9762\u6EDA\u52A8\u5230\u76EE\u6807\u4F4D\u7F6E\u3002</p><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>scrollTop</td><td>number</td><td></td><td>\u5426</td><td>\u6EDA\u52A8\u5230\u9875\u9762\u7684\u76EE\u6807\u4F4D\u7F6E\uFF0C\u5355\u4F4D px</td></tr><tr><td>duration</td><td>number</td><td>300</td><td>\u5426</td><td>\u6EDA\u52A8\u52A8\u753B\u7684\u65F6\u957F\uFF0C\u5355\u4F4D ms</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import { Scroll } from &#39;vfox&#39;

Scroll.pageScrollTo({
  scrollTop: 0,
  duration: 300
})
</code></pre></div><h2 id="scroll-scrollto-object" tabindex="-1">Scroll.scrollTo(object) <a class="header-anchor" href="#scroll-scrollto-object" aria-hidden="true">#</a></h2><h3 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h3><p>Object object</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selector</td><td>element/string</td><td></td><td>\u662F</td><td>\u8981\u6ED1\u52A8\u7684\u5143\u7D20\uFF0C\u5982\u679C\u662F string\uFF0C\u5219\u4E3A\u53EF\u4EE5\u88AB document.querySelector(selector) \u83B7\u53D6\u5230</td></tr><tr><td>scrollTop</td><td>number</td><td></td><td>\u5426</td><td>\u6EDA\u52A8\u5230\u9875\u9762\u7684\u76EE\u6807\u4F4D\u7F6E\uFF0C\u5355\u4F4D px</td></tr><tr><td>duration</td><td>number</td><td>300</td><td>\u5426</td><td>\u6EDA\u52A8\u52A8\u753B\u7684\u65F6\u957F\uFF0C\u5355\u4F4D ms</td></tr><tr><td>success</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>fail</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>complete</td><td>function</td><td></td><td>\u5426</td><td>\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td></tr></tbody></table><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Scroll.scrollTo({
  selector: document.documentElement
  scrollTop: 0,
  duration: 300
})
</code></pre></div>`,14),o=[l];function c(s,n,h,i,u,p){return e(),d("div",null,o)}var g=t(a,[["render",c]]);export{m as __pageData,g as default};
