import{_ as t,c as a,o as e,a as d}from"./app.082b569a.js";const b='{"title":"Tag \u6807\u7B7E","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"StateType \u7684\u5408\u6CD5\u503C","slug":"statetype-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"TagPattern \u7684\u5408\u6CD5\u503C","slug":"tagpattern-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"SizeType \u7684\u5408\u6CD5\u503C","slug":"sizetype-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"}],"relativePath":"components/Tag.md","lastUpdated":1643207437549}',r={},s=d(`<h1 id="tag-\u6807\u7B7E" tabindex="-1">Tag \u6807\u7B7E <a class="header-anchor" href="#tag-\u6807\u7B7E" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>StateType</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u6807\u7B7E\u7C7B\u578B</td></tr><tr><td>pattern</td><td>TagPattern</td><td>&#39;light&#39;</td><td>\u5426</td><td>\u6807\u7B7E\u6B3E\u5F0F</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr><tr><td>size</td><td>SizeType</td><td>&#39;middle&#39;</td><td>\u5426</td><td>\u6807\u7B7E\u5C3A\u5BF8</td></tr><tr><td>closable</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u53EA\u63A8\u8350\u5728 size=&#39;large&#39; \u60C5\u51B5\u4E0B\u5F00\u542F</td></tr></tbody></table><h3 id="statetype-\u7684\u5408\u6CD5\u503C" tabindex="-1">StateType \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#statetype-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6B21\u8981</td></tr><tr><td>primary</td><td>\u4E3B\u8981</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5371\u9669</td></tr></tbody></table><h3 id="tagpattern-\u7684\u5408\u6CD5\u503C" tabindex="-1">TagPattern \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#tagpattern-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>light</td><td>\u6D45\u8272\u6807\u7B7E\uFF0C\u6D45\u8272\u5E95\uFF0C\u6DF1\u8272\u5B57</td></tr><tr><td>dark</td><td>\u6DF1\u8272\u6807\u7B7E\uFF0C\u6DF1\u8272\u5E95\uFF0C\u767D\u8272\u5B57</td></tr><tr><td>plain</td><td>\u7A7A\u5FC3\u6807\u7B7E\uFF0C\u767D\u5E95\uFF0C\u6DF1\u8272\u5B57\uFF0C\u6709\u8FB9</td></tr></tbody></table><h3 id="sizetype-\u7684\u5408\u6CD5\u503C" tabindex="-1">SizeType \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#sizetype-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>middle</td><td>\u9ED8\u8BA4\u5C3A\u5BF8</td></tr><tr><td>small</td><td>\u5C0F\u5C3A\u5BF8</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u56DE\u5230\u9876\u90E8\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>MouseEvent</td></tr><tr><td>close</td><td>\u5173\u95ED\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>long-press</td><td>initialLongPress=true \u957F\u6309\u6807\u7B7E\u65F6\u89E6\u53D1</td><td></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-tag</span><span class="token punctuation">&gt;</span></span>\u6807\u7B7E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,17),n=[s];function l(h,o,i,p,c,u){return e(),a("div",null,n)}var f=t(r,[["render",l]]);export{b as __pageData,f as default};
