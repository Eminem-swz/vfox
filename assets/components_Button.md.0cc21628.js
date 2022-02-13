import{_ as t,c as a,o as n,a as s}from"./app.6b4e8d9e.js";const k='{"title":"Button/ButtonGroup \u6309\u94AE","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Button Props","slug":"button-props"},{"level":3,"title":"SizeType \u7684\u5408\u6CD5\u503C","slug":"sizetype-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"StateType \u7684\u5408\u6CD5\u503C","slug":"statetype-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"ButtonPattern \u7684\u5408\u6CD5\u503C","slug":"buttonpattern-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"ButtonShape \u7684\u5408\u6CD5\u503C","slug":"buttonshape-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"form-type \u7684\u5408\u6CD5\u503C","slug":"form-type-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Button Slots","slug":"button-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"ButtonGroup Props","slug":"buttongroup-props"},{"level":2,"title":"ButtonGroup Slots","slug":"buttongroup-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09-1"}],"relativePath":"components/Button.md","lastUpdated":1644767210112}',e={},d=s(`<h1 id="button-buttongroup-\u6309\u94AE" tabindex="-1">Button/ButtonGroup \u6309\u94AE <a class="header-anchor" href="#button-buttongroup-\u6309\u94AE" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> ButtonGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="button-props" tabindex="-1">Button Props <a class="header-anchor" href="#button-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>size</td><td>SizeType</td><td>&#39;large&#39;</td><td>\u5426</td><td>\u6309\u94AE\u5C3A\u5BF8</td></tr><tr><td>type</td><td>StateType</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u6309\u94AE\u7C7B\u578B</td></tr><tr><td>pattern</td><td>ButtonPattern</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u6309\u94AE\u6B3E\u5F0F</td></tr><tr><td>shape</td><td>ButtonShape</td><td>&#39;rectangle&#39;</td><td>\u5426</td><td>\u6309\u94AE\u5F62\u72B6</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr><tr><td>ghost</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u4F7F\u7528\u5E7D\u7075\u6309\u94AE\uFF0C\u5E7D\u7075\u6309\u94AE\u5C06\u6309\u94AE\u7684\u5185\u5BB9\u53CD\u8272\uFF0C\u80CC\u666F\u53D8\u4E3A\u900F\u660E</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>icon</td><td>string | Component</td><td></td><td>\u5426</td><td>\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6</td></tr><tr><td>loading</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u540D\u79F0\u524D\u662F\u5426\u5E26 loading \u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E icon</td></tr><tr><td>form-type</td><td>string</td><td></td><td>\u5426</td><td>&#39;submit&#39; / &#39;reset&#39;</td></tr></tbody></table><h3 id="sizetype-\u7684\u5408\u6CD5\u503C" tabindex="-1">SizeType \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#sizetype-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>large</td><td>\u9ED8\u8BA4\u5927\u5C0F\uFF0C\u9AD8\u5EA6 48px\uFF0C\u6587\u5B57 17px\uFF0C\u56FE\u6807 21px</td></tr><tr><td>small</td><td>\u5C0F\u5C3A\u5BF8\uFF0C\u9AD8\u5EA6 28px\uFF0C\u6587\u5B57 12px\uFF0C\u56FE\u6807 18px</td></tr></tbody></table><h3 id="statetype-\u7684\u5408\u6CD5\u503C" tabindex="-1">StateType \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#statetype-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6B21\u8981</td></tr><tr><td>primary</td><td>\u4E3B\u8981</td></tr><tr><td>success</td><td>\u6210\u529F</td></tr><tr><td>warning</td><td>\u8B66\u544A</td></tr><tr><td>danger</td><td>\u5371\u9669</td></tr></tbody></table><h3 id="buttonpattern-\u7684\u5408\u6CD5\u503C" tabindex="-1">ButtonPattern \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#buttonpattern-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u6309\u94AE</td></tr><tr><td>solid</td><td>\u7EC6\u7EBF\u6309\u94AE</td></tr><tr><td>dashed</td><td>\u865A\u7EBF\u6309\u94AE</td></tr><tr><td>borderless</td><td>\u65E0\u8FB9\u6846\u6309\u94AE</td></tr><tr><td>gradient</td><td>\u6E10\u53D8\u8272\u6309\u94AE</td></tr></tbody></table><h3 id="buttonshape-\u7684\u5408\u6CD5\u503C" tabindex="-1">ButtonShape \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#buttonshape-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>rectangle</td><td>\u957F\u65B9\u5F62\u6309\u94AE\uFF0C\u5C0F\u5706\u89D2</td></tr><tr><td>round</td><td>\u534A\u5706\u89D2\u6309\u94AE</td></tr><tr><td>circle</td><td>\u5706\u5708\u6309\u94AE\uFF0C\u642D\u914D\u56FE\u6807\u4F7F\u7528\uFF0C\u4E0D\u663E\u793A\u6587\u5B57</td></tr><tr><td>square</td><td>\u6B63\u65B9\u5F62\u6309\u94AE\uFF0C\u5C0F\u5706\u89D2\uFF0C\u642D\u914D\u56FE\u6807\u4F7F\u7528\uFF0C\u4E0D\u663E\u793A\u6587\u5B57</td></tr></tbody></table><h3 id="form-type-\u7684\u5408\u6CD5\u503C" tabindex="-1">form-type \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#form-type-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>submit</td><td>\u63D0\u4EA4\u8868\u5355</td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u8868\u5355</td></tr></tbody></table><h2 id="button-slots" tabindex="-1">Button Slots <a class="header-anchor" href="#button-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-button</span> <span class="token attr-name">form-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="buttongroup-props" tabindex="-1">ButtonGroup Props <a class="header-anchor" href="#buttongroup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>size</td><td>SizeType</td><td>&#39;large&#39;</td><td>\u5426</td><td>\u6BCF\u4E2A\u6309\u94AE\u5C3A\u5BF8</td></tr><tr><td>pattern</td><td>ButtonPattern</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u6BCF\u4E2A\u6309\u94AE\u6B3E\u5F0F</td></tr><tr><td>shape</td><td>ButtonShape</td><td>&#39;rectangle&#39;</td><td>\u5426</td><td>\u6BCF\u4E2A\u6309\u94AE\u5F62\u72B6</td></tr></tbody></table><h2 id="buttongroup-slots" tabindex="-1">ButtonGroup Slots <a class="header-anchor" href="#buttongroup-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09-1" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09-1" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-button-group</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LeftOutlined<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HomeOutlined<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-button-group</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,24),o=[d];function p(r,l,u,c,i,h){return n(),a("div",null,o)}var g=t(e,[["render",p]]);export{k as __pageData,g as default};
