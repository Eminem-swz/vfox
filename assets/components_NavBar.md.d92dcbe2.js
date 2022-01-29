import{_ as t,c as a,o as n,a as s}from"./app.95b08e21.js";const g='{"title":"NavBar \u5BFC\u822A\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"NavBarButtonOption \u7684\u7ED3\u6784","slug":"navbarbuttonoption-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"Payload","slug":"payload"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#left\uFF09","slug":"\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-left\uFF09"},{"level":3,"title":"\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#right\uFF09","slug":"\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-right\uFF09"}],"relativePath":"components/NavBar.md","lastUpdated":1643469744742}',e={},p=s(`<h1 id="navbar-\u5BFC\u822A\u680F" tabindex="-1">NavBar \u5BFC\u822A\u680F <a class="header-anchor" href="#navbar-\u5BFC\u822A\u680F" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>&#39;&#39;</td><td>\u5426</td><td>\u6807\u9898</td></tr><tr><td>show-back</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u8FD4\u56DE\u6309\u94AE</td></tr><tr><td>show-home</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u9996\u9875\u6309\u94AE</td></tr><tr><td>left-buttons</td><td>NavBarButtonOption[]</td><td>[]</td><td></td><td>\u5DE6\u4FA7\u6309\u94AE\u5217\u8868\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u9996\u9875\u548C\u8FD4\u56DE\u6309\u94AE</td></tr><tr><td>right-buttons</td><td>NavBarButtonOption[]</td><td>[]</td><td></td><td>\u53F3\u4FA7\u6309\u94AE\u5217\u8868</td></tr><tr><td>icon-only</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u7EAF\u56FE\u6807\u6309\u94AE</td></tr></tbody></table><h3 id="navbarbuttonoption-\u7684\u7ED3\u6784" tabindex="-1">NavBarButtonOption \u7684\u7ED3\u6784 <a class="header-anchor" href="#navbarbuttonoption-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">NavBarButtonOption</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> IconData
  type<span class="token operator">?</span><span class="token operator">:</span> StateType
<span class="token punctuation">}</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> NavBarButtonOption<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> icon<span class="token operator">:</span> <span class="token string">&#39;MenuOutlined&#39;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u5176\u4E2D\u56FE\u6807\uFF0C\u4F7F\u7528 <a href="./Icon.html">Icon</a> \u7EC4\u4EF6\u3002</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>back-click</td><td>\u8FD4\u56DE\u6309\u94AE\u70B9\u51FB\u65F6\u51FA\u53D1</td><td>payload: Payload, buttonEl: HTMLElement</td><td>NavBarOnButtonClick</td></tr><tr><td>home-click</td><td>\u5230\u9996\u9875\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>payload: Payload, buttonEl: HTMLElement</td><td>NavBarOnButtonClick</td></tr><tr><td>title-dbclick</td><td>\u6807\u9898\u53CC\u51FB\u65F6\u89E6\u53D1\uFF0C\u53EF\u914D\u5408\u505A\u53CC\u51FB\u8FD4\u56DE\u9876\u90E8</td><td>titleEl: HTMLElement</td><td>NavBarOnTitleDbClick</td></tr><tr><td>left-button-click</td><td>\u5DE6\u4FA7\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>payload: Payload, buttonEl: HTMLElement</td><td>NavBarOnButtonClick</td></tr><tr><td>right-button-click</td><td>\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>payload: Payload, buttonEl: HTMLElement</td><td>NavBarOnButtonClick</td></tr></tbody></table><h3 id="payload" tabindex="-1">Payload <a class="header-anchor" href="#payload" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">Payload</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  item<span class="token operator">:</span> <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>item.text</td><td>string</td><td>\u70B9\u51FB\u6309\u94AE\u7684\u6587\u672C</td></tr><tr><td>index</td><td>number</td><td>\u70B9\u51FB\u6309\u94AE\u7684\u7D22\u5F15\u503C</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-left\uFF09" tabindex="-1">\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#left\uFF09 <a class="header-anchor" href="#\u5DE6\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-left\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-nav-bar</span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6807\u9898<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:right-buttons</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ icon: <span class="token punctuation">&#39;</span>MenuOutlined<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>\u83DC\u5355<span class="token punctuation">&#39;</span> }]<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#left</span><span class="token punctuation">&gt;</span></span>Left Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-nav-bar</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-right\uFF09" tabindex="-1">\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08#right\uFF09 <a class="header-anchor" href="#\u53F3\u4FA7\u533A\u57DF\u81EA\u5B9A\u4E49\uFF08-right\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-nav-bar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6807\u9898<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show-back</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show-home</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#right</span><span class="token punctuation">&gt;</span></span>Right Slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-nav-bar</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,19),o=[p];function l(c,d,r,i,u,k){return n(),a("div",null,o)}var v=t(e,[["render",l]]);export{g as __pageData,v as default};
