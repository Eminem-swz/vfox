import{_ as a,c as t,o as s,a as n}from"./app.6b4e8d9e.js";const g='{"title":"Avatar/AvatarGroup \u5934\u50CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Avatar Props","slug":"avatar-props"},{"level":3,"title":"AvatarSize \u7684\u5408\u6CD5\u503C","slug":"avatarsize-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"AvatarShape \u7684\u5408\u6CD5\u503C","slug":"avatarshape-\u7684\u5408\u6CD5\u503C"},{"level":3,"title":"BadgeOption","slug":"badgeoption"},{"level":2,"title":"Avatar Slots","slug":"avatar-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"AvatarGroup Props","slug":"avatargroup-props"},{"level":2,"title":"AvatarGroup Slots","slug":"avatargroup-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09-1"}],"relativePath":"components/Avatar.md","lastUpdated":1644768529706}',e={},p=n(`<h1 id="avatar-avatargroup-\u5934\u50CF" tabindex="-1">Avatar/AvatarGroup \u5934\u50CF <a class="header-anchor" href="#avatar-avatargroup-\u5934\u50CF" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-JavaScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> AvatarGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="avatar-props" tabindex="-1">Avatar Props <a class="header-anchor" href="#avatar-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>src</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u7247\u8FDE\u63A5\uFF0C\u663E\u793A\u81EA\u5B9A\u4E49\u56FE\u7247</td></tr><tr><td>size</td><td>AvatarSize</td><td>&#39;middle&#39;</td><td>\u5426</td><td>\u5934\u50CF\u5C3A\u5BF8\uFF0C\u5904\u9664\u4E86\u9884\u8BBE\u503C\uFF0C\u8FD8\u652F\u6301\u4F20\u5165 number</td></tr><tr><td>shape</td><td>AvatarShape</td><td>&#39;circle&#39;</td><td>\u5426</td><td>\u5934\u50CF\u5F62\u72B6</td></tr><tr><td>badge</td><td>BadgeOption</td><td></td><td>\u5426</td><td>\u5FBD\u6807\uFF0C\u4F7F\u7528 <a href="./Badge.html">Badge</a> \u7EC4\u4EF6</td></tr><tr><td>gender</td><td>string</td><td></td><td>\u5426</td><td>\u663E\u793A\u7537\u5973\u89D2\u6807\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E badge</td></tr><tr><td>color</td><td>string</td><td></td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr></tbody></table><h3 id="avatarsize-\u7684\u5408\u6CD5\u503C" tabindex="-1">AvatarSize \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#avatarsize-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>large</td><td>\u5927\u5C3A\u5BF8\uFF0C\u5BBD\u9AD8 64px\uFF0C\u6587\u5B57 32px\uFF0C\u56FE\u6807 43px</td></tr><tr><td>middle</td><td>\u9ED8\u8BA4\u503C\uFF0C\u4E2D\u5C3A\u5BF8\uFF0C\u5BBD\u9AD8 48px\uFF0C\u6587\u5B57 24px\uFF0C\u56FE\u6807 32px</td></tr><tr><td>large</td><td>\u5C0F\u5C3A\u5BF8\uFF0C\u5BBD\u9AD8 36px\uFF0C\u6587\u5B57 18px\uFF0C\u56FE\u6807 21px</td></tr></tbody></table><h3 id="avatarshape-\u7684\u5408\u6CD5\u503C" tabindex="-1">AvatarShape \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#avatarshape-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>circle</td><td>\u5706\u5F62\u5934\u50CF</td></tr><tr><td>square</td><td>\u5706\u89D2\u65B9\u5F62\u5934\u50CF</td></tr></tbody></table><h3 id="badgeoption" tabindex="-1">BadgeOption <a class="header-anchor" href="#badgeoption" aria-hidden="true">#</a></h3><div class="language-TypeScript"><pre><code><span class="token keyword">type</span> <span class="token class-name">BadgeOption</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
  offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  animated<span class="token operator">:</span> <span class="token builtin">boolean</span>
  dot<span class="token operator">:</span> <span class="token builtin">boolean</span>
  maxCount<span class="token operator">:</span> <span class="token builtin">number</span>
  showZero<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u53C2\u6570\u4E3B\u8981\u662F\u57FA\u4E8E <a href="./Badge.html">Badge</a> \u7EC4\u4EF6\u7684 props\uFF0C\u5982\u679C\u4F20\u5165\u662F <code>number</code> \u6216\u8005 <code>string</code> \u5219\u8BBE\u7F6E\u76F4\u63A5\u8BBE\u7F6E content \u5C5E\u6027\u3002</p><h2 id="avatar-slots" tabindex="-1">Avatar Slots <a class="header-anchor" href="#avatar-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-avatar</span><span class="token punctuation">&gt;</span></span>\u66F9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-avatar</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="avatargroup-props" tabindex="-1">AvatarGroup Props <a class="header-anchor" href="#avatargroup-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>size</td><td>AvatarSize</td><td>&#39;middle&#39;</td><td>\u5426</td><td>\u7EC4\u5185\u5934\u50CF\u5C3A\u5BF8\uFF0C\u5904\u9664\u4E86\u9884\u8BBE\u503C\uFF0C\u8FD8\u652F\u6301\u4F20\u5165 number</td></tr><tr><td>total-count</td><td>number</td><td></td><td>\u5426</td><td>\u5C3E\u90E8\u663E\u793A\u5934\u50CF\u6570\uFF0C\u5982\u679C\u6570\u503C\u8FC7\u9AD8\uFF0C\u4F1A\u5BF9\u6570\u503C\u7B80\u5316\u5904\u7406\uFF0C\u5982 1.1w</td></tr><tr><td>count-color</td><td>string</td><td></td><td>\u5426</td><td>\u5934\u50CF\u6570\u6A21\u5757\u7684\u81EA\u5B9A\u4E49\u8272\u5F69\uFF0C\u652F\u6301 hex rgb hsl \u7B49\u5199\u6CD5\uFF0C\u8BE6\u7EC6\u6548\u679C<a href="./../design/color.html#\u81EA\u5B9A\u4E49\u8272\u5F69">\u67E5\u770B</a></td></tr></tbody></table><h2 id="avatargroup-slots" tabindex="-1">AvatarGroup Slots <a class="header-anchor" href="#avatargroup-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09-1" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09-1" aria-hidden="true">#</a></h3><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Collapse.html#avatar-\u5934\u50CF">Avatar</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-avatar-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.fox2.cn/vfox/avatar/5.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.fox2.cn/vfox/avatar/6.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.fox2.cn/vfox/avatar/7.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-avatar-group</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,22),r=[p];function o(d,l,c,i,u,h){return s(),t("div",null,r)}var k=a(e,[["render",o]]);export{g as __pageData,k as default};
