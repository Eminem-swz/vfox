import{_ as t,c as d,o as e,a as s}from"./app.957b1e9a.js";const _='{"title":"SearchBar \u641C\u7D22\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"setSuggestList \u7684\u53C2\u6570 suggestList \u7ED3\u6784","slug":"setsuggestlist-\u7684\u53C2\u6570-suggestlist-\u7ED3\u6784"}],"relativePath":"components/SearchBar.md","lastUpdated":1637032039594}',a={},r=s(`<h1 id="searchbar-\u641C\u7D22\u680F" tabindex="-1">SearchBar \u641C\u7D22\u680F <a class="header-anchor" href="#searchbar-\u641C\u7D22\u680F" aria-hidden="true">#</a></h1><ul><li>\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u6CA1\u6709\u56FA\u5B9A\u9876\u90E8\u529F\u80FD\uFF0C\u53EF\u4EE5\u914D\u5408 <a href="./Sticky.html">Sticky</a> \u7EC4\u4EF6\u5B9E\u73B0\u7F6E\u9876\u529F\u80FD\u3002</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>placeholders</td><td>string/string[]</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u5019\u9009\u503C\u5217\u8868\uFF0C\u591A\u4E2A\u65F6\u8F6E\u8BE2\u663E\u793A</td></tr><tr><td>placeholder-interval</td><td>number</td><td>5000</td><td>\u5426</td><td>placeholder \u5207\u6362\u65F6\u95F4\uFF0Cplaceholders \u6709\u591A\u4E2A\u65F6\u751F\u6548</td></tr><tr><td>ghost</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u53CD\u8272\u6A21\u5F0F\uFF0C\u5F00\u59CB\u540E\u9002\u7528\u4E8E\u6DF1\u8272\u5E95\u8272\uFF0C\u901A\u8FC7 CSS \u8BBE\u7F6E\u80CC\u666F\u8272</td></tr><tr><td>readonly</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u4E3B\u8981\u7528\u4E8E\u641C\u7D22\u5165\u53E3\u573A\u666F</td></tr><tr><td>maxlength</td><td>number</td><td>100</td><td>\u5426</td><td>\u6700\u5927\u957F\u5EA6</td></tr><tr><td>focus</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u52A0\u8F7D\u65F6\u662F\u5426\u83B7\u53D6\u7126\u70B9</td></tr><tr><td>show-cancel</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5C55\u793A\u53D6\u6D88\u6309\u94AE</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>input</td><td>\u8F93\u5165\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u5305\u62EC clear \u7684</td><td>({ text: string }, setSuggestList: suggestList =&gt; void)</td></tr><tr><td>focus</td><td>\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td>({ text: string }, setSuggestList: suggestList =&gt; void)</td></tr><tr><td>blur</td><td>\u8F93\u5165\u6846\u79FB\u51FA\u7126\u70B9\u65F6\u89E6\u53D1</td><td>({ text: string }, setSuggestList: suggestList =&gt; void)</td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u70B9\u51FB</td><td>({})</td></tr><tr><td>click</td><td>\u8F93\u5165\u6846\u70B9\u51FB\uFF0C\u914D\u5408 readonly \u4F7F\u7528\uFF0C\u83B7\u53D6\u5230\u5F53\u524D\u5019\u9009\u503C</td><td>({ searchText: string})</td></tr></tbody></table><h3 id="setsuggestlist-\u7684\u53C2\u6570-suggestlist-\u7ED3\u6784" tabindex="-1">setSuggestList \u7684\u53C2\u6570 suggestList \u7ED3\u6784 <a class="header-anchor" href="#setsuggestlist-\u7684\u53C2\u6570-suggestlist-\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[&#39;suggest A&#39;, &#39;suggest B&#39;]
</code></pre></div><p>\u6216\u8005</p><div class="language-"><pre><code>[{
  text: &#39;\u6CB9\u70DF\u673A&#39;,
  tags: [&#39;\u53A8\u623F&#39;, &#39;\u7535\u5668&#39;]
}]
</code></pre></div>`,10),l=[r];function i(h,n,o,g,c,u){return e(),d("div",null,l)}var b=t(a,[["render",i]]);export{_ as __pageData,b as default};
