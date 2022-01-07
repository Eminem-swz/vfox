import{_ as t,c as e,o as a,a as d}from"./app.1d4ac55e.js";const f='{"title":"Skeleton \u9AA8\u67B6\u5C4F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Skeleton Props","slug":"skeleton-props"},{"level":2,"title":"Skeleton Slots","slug":"skeleton-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":3,"title":"\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08#layout\uFF09","slug":"\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08-layout\uFF09"},{"level":2,"title":"SkeletonAvatar Props","slug":"skeletonavatar-props"},{"level":2,"title":"SkeletonImage Props","slug":"skeletonimage-props"},{"level":2,"title":"SkeletonTitle Props","slug":"skeletontitle-props"},{"level":2,"title":"SkeletonParagraph Props","slug":"skeletonparagraph-props"},{"level":2,"title":"SkeletonButton Props","slug":"skeletonbutton-props"}],"relativePath":"components/Skeleton.md","lastUpdated":1641524627085}',l={},r=d(`<h1 id="skeleton-\u9AA8\u67B6\u5C4F" tabindex="-1">Skeleton \u9AA8\u67B6\u5C4F <a class="header-anchor" href="#skeleton-\u9AA8\u67B6\u5C4F" aria-hidden="true">#</a></h1><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Skeleton } from &#39;vfox&#39;
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u81EA\u5B9A\u4E49\u5E03\u5C40\uFF0C\u53EF\u4EE5\u518D\u5F15\u5165\u5B50\u7EC4\u4EF6\uFF1A</p><div class="language-"><pre><code>import { SkeletonAvatar, SkeletonImage, SkeletonTitle, SkeletonParagraph, SkeletonButton } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="skeleton-props" tabindex="-1">Skeleton Props <a class="header-anchor" href="#skeleton-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>loading</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5C4F\uFF0C\u4F20 false \u65F6\u4F1A\u5C55\u793A\u5B50\u7EC4\u4EF6\u5185\u5BB9</td></tr><tr><td>avatar</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B</td></tr><tr><td>avatar-shape</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;circle&#39;</td></tr><tr><td>button-shape</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;round&#39;</td></tr><tr><td>paragraph-row</td><td>number</td><td>3</td><td>\u5426</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td></tr></tbody></table><h2 id="skeleton-slots" tabindex="-1">Skeleton Slots <a class="header-anchor" href="#skeleton-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-skeleton&gt;
  &lt;div&gt;\u8BE6\u60C5...&lt;/div&gt;
&lt;/fx-skeleton&gt;
</code></pre></div><h3 id="\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08-layout\uFF09" tabindex="-1">\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08#layout\uFF09 <a class="header-anchor" href="#\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08-layout\uFF09" aria-hidden="true">#</a></h3><p>\u8FD8\u53EF\u4EE5\u5728 layout \u63D2\u69FD\u4E2D\u91CD\u65B0\u7EC4\u5408\u9AA8\u67B6\u5C4F\uFF0C\u76EE\u524D\u63D0\u4F9B <a href="./Skeleton.html#skeletonavatar-props">SkeletonAvatar</a>\u3001<a href="./Skeleton.html#skeletonimage-props">SkeletonImage</a>\u3001<a href="./Skeleton.html#skeletontitle-props">SkeletonTitle</a>\u3001<a href="./Skeleton.html#skeletonparagraph-props">SkeletonParagraph</a>\u3001<a href="./Skeleton.html#skeletonbutton-props">SkeletonButton</a> 5 \u6B3E\u5B50\u7EC4\u4EF6\u3002</p><div class="language-"><pre><code>&lt;fx-skeleton&gt;
  &lt;template #layout&gt;
    &lt;fx-skeleton-image&gt;&lt;/fx-skeleton-image&gt;
    &lt;fx-skeleton-title&gt;&lt;/fx-skeleton-title&gt;
    &lt;fx-skeleton-paragraph&gt;&lt;/fx-skeleton-paragraph&gt;
  &lt;/template&gt;
  &lt;div&gt;\u8BE6\u60C5...&lt;/div&gt;
&lt;/fx-skeleton&gt;
</code></pre></div><h2 id="skeletonavatar-props" tabindex="-1">SkeletonAvatar Props <a class="header-anchor" href="#skeletonavatar-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>shape</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;circle&#39;</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletonimage-props" tabindex="-1">SkeletonImage Props <a class="header-anchor" href="#skeletonimage-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletontitle-props" tabindex="-1">SkeletonTitle Props <a class="header-anchor" href="#skeletontitle-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletonparagraph-props" tabindex="-1">SkeletonParagraph Props <a class="header-anchor" href="#skeletonparagraph-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>row</td><td>number</td><td>3</td><td>\u5426</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletonbutton-props" tabindex="-1">SkeletonButton Props <a class="header-anchor" href="#skeletonbutton-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>shape</td><td>string</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;round&#39;</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table>`,24),o=[r];function n(h,s,p,i,k,u){return a(),e("div",null,o)}var c=t(l,[["render",n]]);export{f as __pageData,c as default};
