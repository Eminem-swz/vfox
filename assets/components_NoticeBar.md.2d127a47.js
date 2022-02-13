import{_ as t,c as d,o as e,a}from"./app.6b4e8d9e.js";const m='{"title":"NoticeBar \u901A\u544A\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"NoticeBarMode \u7684\u5408\u6CD5\u503C","slug":"noticebarmode-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/NoticeBar.md","lastUpdated":1644765401401}',r={},o=a(`<h1 id="noticebar-\u901A\u544A\u680F" tabindex="-1">NoticeBar \u901A\u544A\u680F <a class="header-anchor" href="#noticebar-\u901A\u544A\u680F" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:visible</td><td>boolean</td><td>false</td><td>\u662F</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>mode</td><td>NoticeBarMode</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u901A\u77E5\u680F\u6A21\u5F0F</td></tr><tr><td>left-icon</td><td>string</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u5DE6\u4FA7\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>right-icon</td><td>string</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u53F3\u4FA7\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u8BBE\u7F6E\u540E\u4F1A\u8986\u76D6\u6307\u5B9A <code>mode</code> \u6A21\u5F0F\u4E0B\u7684\u56FE\u6807</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr><tr><td>marquee</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u542F\u7528\u8DD1\u9A6C\u706F\u5C55\u793A\u65B9\u5F0F\uFF0C\u5F00\u542F\u540E\u53EA\u5C55\u793A 1 \u884C\uFF0C\u53EA\u8981\u957F\u5EA6\u6EA2\u51FA\u5C31\u4F1A\u6EDA\u52A8\u64AD\u653E\uFF0C\u5173\u95ED\u540E\u957F\u5EA6\u6EA2\u51FA\u5219\u4F1A\u6362\u884C\u663E\u793A</td></tr></tbody></table><h3 id="noticebarmode-\u7684\u5408\u6CD5\u503C" tabindex="-1">NoticeBarMode \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#noticebarmode-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4</td></tr><tr><td>clickable</td><td>\u5C55\u793A\u53F3\u7BAD\u5934\u56FE\u6807\uFF0C\u8868\u793A\u53EF\u70B9\u51FB</td></tr><tr><td>closable</td><td>\u5C55\u793A\u5173\u95ED\u56FE\u6807\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\uFF0C\u9700\u8981\u914D\u5408 <code>visible</code> \u4F7F\u7528</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>close-click</td><td>\u5173\u95ED\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>show</td><td>\u5C55\u793A\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td></td></tr></tbody></table>`,10),s=[o];function n(i,h,c,l,p,b){return e(),d("div",null,s)}var f=t(r,[["render",n]]);export{m as __pageData,f as default};
