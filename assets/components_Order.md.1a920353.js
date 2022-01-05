import{_ as t,c as e,o as d,a}from"./app.9b8f0faa.js";const f='{"title":"Order \u8C03\u6574\u6392\u5E8F\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"items \u7684\u7ED3\u6784","slug":"items-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"delete \u7684\u53C2\u6570","slug":"delete-\u7684\u53C2\u6570"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u5217\u8868\u9879\uFF08#default\uFF09","slug":"\u5217\u8868\u9879\uFF08-default\uFF09"}],"relativePath":"components/Order.md","lastUpdated":1641397564072}',r={},i=a(`<h1 id="order-\u8C03\u6574\u6392\u5E8F\u5E03\u5C40" tabindex="-1">Order \u8C03\u6574\u6392\u5E8F\u5E03\u5C40 <a class="header-anchor" href="#order-\u8C03\u6574\u6392\u5E8F\u5E03\u5C40" aria-hidden="true">#</a></h1><p>\u5BAB\u683C\u7C7B\u6392\u5E8F\u7EC4\u4EF6\uFF0C\u7C7B\u4F3C\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u4E0A\u4F20\u56FE\u7247\uFF0C\u652F\u6301\u5220\u9664\u529F\u80FD\u3002</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Order } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:items</td><td>Array</td><td></td><td>\u662F</td><td>\u5217\u8868\u6570\u7EC4</td></tr><tr><td>column-number</td><td>number</td><td>3</td><td>\u5426</td><td>\u6E32\u67D3\u5217\u6570</td></tr><tr><td>aspect-ratio</td><td>number</td><td>1</td><td>\u5426</td><td>\u6E32\u67D3\u5BBD\u9AD8\u6BD4</td></tr><tr><td>deletable</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u652F\u6301\u5220\u9664</td></tr></tbody></table><p>PS\uFF1A \u7531\u4E8E\u8BE5\u7EC4\u4EF6\u662F\u5BAB\u683C\u7C7B\u6392\u5E8F\uFF0C\u6240\u4EE5\u9700\u8981\u9884\u8BBE\u5217\u6570\u548C\u6BCF\u9879\u56FA\u5B9A\u5BBD\u9AD8\u3002</p><h3 id="items-\u7684\u7ED3\u6784" tabindex="-1">items \u7684\u7ED3\u6784 <a class="header-anchor" href="#items-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>interface Item {
  id: string | number
  [propName: string]: any
}

const items: Item[] = [
  { id: 1, type: &#39;primary&#39; },
  { id: 2, type: &#39;success&#39; },
  { id: 3, type: &#39;warning&#39; },
  { id: 4, type: &#39;danger&#39; }
]
</code></pre></div><p>PS\uFF1A\u8981\u6C42\u4E00\u5B9A\u8981\u6709 <code>id</code> \u4F5C\u4E3A\u552F\u4E00\u952E\u3002</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>delete</td><td>\u5355\u9879\u88AB\u5220\u9664\u65F6\u89E6\u53D1</td><td>{ item, index }</td></tr></tbody></table><h3 id="delete-\u7684\u53C2\u6570" tabindex="-1">delete \u7684\u53C2\u6570 <a class="header-anchor" href="#delete-\u7684\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>index</td><td>number</td><td>\u7B2C index \u9879</td></tr><tr><td>item</td><td>any</td><td>\u4F20\u5165 items[index] \u7684\u526F\u672C\uFF0C\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD props.items</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="\u5217\u8868\u9879\uFF08-default\uFF09" tabindex="-1">\u5217\u8868\u9879\uFF08#default\uFF09 <a class="header-anchor" href="#\u5217\u8868\u9879\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-order&gt;
 &lt;template #default=&quot;{ item, index }&quot;&gt;
  {{ index }} : {{ item }}
 &lt;/template&gt;
&lt;/fx-order&gt;
</code></pre></div>`,18),n=[i];function s(l,h,o,p,c,m){return d(),e("div",null,n)}var b=t(r,[["render",s]]);export{f as __pageData,b as default};
