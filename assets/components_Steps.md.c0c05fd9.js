import{_ as t,c as e,o as s,a}from"./app.cafa4a5d.js";const g='{"title":"Steps \u6B65\u9AA4\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"Steps Props","slug":"steps-props"},{"level":2,"title":"Steps CSS","slug":"steps-css"},{"level":2,"title":"Steps Slots","slug":"steps-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"Step \u6B65\u9AA4\u5B50\u9879","slug":"step-\u6B65\u9AA4\u5B50\u9879"},{"level":2,"title":"Step Props","slug":"step-props"},{"level":2,"title":"Step CSS","slug":"step-css"},{"level":2,"title":"Step Slots","slug":"step-slots"},{"level":3,"title":"\u5185\u5BB9\uFF08#default\uFF09","slug":"\u5185\u5BB9\uFF08-default\uFF09"},{"level":3,"title":"\u6807\u9898\uFF08#title\uFF09","slug":"\u6807\u9898\uFF08-title\uFF09"},{"level":3,"title":"\u6B65\u9AA4\u6807\uFF08#step\uFF09","slug":"\u6B65\u9AA4\u6807\uFF08-step\uFF09"}],"relativePath":"components/Steps.md","lastUpdated":1636797248907}',d={},l=a(`<h1 id="steps-\u6B65\u9AA4\u6761" tabindex="-1">Steps \u6B65\u9AA4\u6761 <a class="header-anchor" href="#steps-\u6B65\u9AA4\u6761" aria-hidden="true">#</a></h1><h2 id="steps-props" tabindex="-1">Steps Props <a class="header-anchor" href="#steps-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model:active-index</td><td>number</td><td>0</td><td>\u5426</td><td>\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u7D22\u5F15\u503C</td></tr><tr><td>dot</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u5C0F\u70B9\u6837\u5F0F</td></tr></tbody></table><h2 id="steps-css" tabindex="-1">Steps CSS <a class="header-anchor" href="#steps-css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--steps-color</td><td>#8c8c8c</td><td>\u6B65\u9AA4\u6761\u9ED8\u8BA4\u989C\u8272</td></tr><tr><td>--steps-active-color</td><td>#1890ff</td><td>\u6B65\u9AA4\u6761\u6FC0\u6D3B\u989C\u8272</td></tr></tbody></table><h2 id="steps-slots" tabindex="-1">Steps Slots <a class="header-anchor" href="#steps-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Steps.html#step-\u6B65\u9AA4\u5B50\u9879">Step</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-"><pre><code>&lt;fx-steps&gt;
  &lt;fx-step title=&quot;\u6210\u529F\u83B7\u5F970.01\u5143\u6536\u76CA&quot;&gt;\u641E\u534A\u5929\u5C31\u8FD9\u70B9\uFF1F&lt;/fx-step&gt;
  &lt;fx-step title=&quot;\u5341\u5929\u540E\u5230\u8D26&quot;&gt;0.01\u5143\u8FD8\u8981\u5341\u5929\u5230\u8D26\uFF1F&lt;/fx-step&gt;
  &lt;fx-step title=&quot;\u7231\u8981\u4E0D\u8981&quot;&gt;\u4E0D\u8981\u4E86\uFF0C\u6EDA\u3002&lt;/fx-step&gt;
&lt;/fx-steps&gt;
</code></pre></div><h2 id="step-\u6B65\u9AA4\u5B50\u9879" tabindex="-1">Step \u6B65\u9AA4\u5B50\u9879 <a class="header-anchor" href="#step-\u6B65\u9AA4\u5B50\u9879" aria-hidden="true">#</a></h2><h2 id="step-props" tabindex="-1">Step Props <a class="header-anchor" href="#step-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u6B65\u9AA4\u5B50\u9879\u6807\u9898</td></tr></tbody></table><h2 id="step-css" tabindex="-1">Step CSS <a class="header-anchor" href="#step-css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--step-color</td><td>#8c8c8c</td><td>\u6B65\u9AA4\u6761\u9ED8\u8BA4\u989C\u8272\uFF0C\u4E0D\u8BBE\u7F6E\u7EE7\u627F <a href="./Steps.html#steps-css">Steps</a> \u7EC4\u4EF6</td></tr><tr><td>--step-active-color</td><td>#1890ff</td><td>\u6B65\u9AA4\u6761\u6FC0\u6D3B\u989C\u8272\uFF0C\u4E0D\u8BBE\u7F6E\u7EE7\u627F <a href="./Steps.html#steps-css">Steps</a> \u7EC4\u4EF6</td></tr></tbody></table><h2 id="step-slots" tabindex="-1">Step Slots <a class="header-anchor" href="#step-slots" aria-hidden="true">#</a></h2><h3 id="\u5185\u5BB9\uFF08-default\uFF09" tabindex="-1">\u5185\u5BB9\uFF08#default\uFF09 <a class="header-anchor" href="#\u5185\u5BB9\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-step title=&quot;\u6807\u9898&quot;&gt;
  \u81EA\u5B9A\u4E49\u5185\u5BB9
&lt;/fx-step&gt;
</code></pre></div><h3 id="\u6807\u9898\uFF08-title\uFF09" tabindex="-1">\u6807\u9898\uFF08#title\uFF09 <a class="header-anchor" href="#\u6807\u9898\uFF08-title\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-step&gt;
  &lt;template #title&gt;
  \u3010\u73E0\u6D77\u5E02\u3011\u3010\u73E0\u6D77\u4E00\u90E8\u3011\u5FEB\u9012\u5C0F\u54E5\u6B63\u5728\u6D3E\u4EF6\uFF08&lt;a href=&quot;tel:10000&quot;&gt;10000&lt;/a&gt;\uFF09
  &lt;/template&gt;
  2021-04-13 11:22:16
&lt;/fx-step&gt;
</code></pre></div><p>PS\uFF1A\u4F18\u5148\u7EA7\u9AD8\u4E8E Props <code>title</code>\u3002</p><h3 id="\u6B65\u9AA4\u6807\uFF08-step\uFF09" tabindex="-1">\u6B65\u9AA4\u6807\uFF08#step\uFF09 <a class="header-anchor" href="#\u6B65\u9AA4\u6807\uFF08-step\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-step&gt;
  &lt;template #step=&quot;{ finish, index, active }&quot;&gt;
    &lt;fx-icon v-if=&quot;finish&quot; icon=&quot;CheckOutlined&quot;&gt;&lt;/fx-icon&gt;
  &lt;/template&gt;
&lt;/fx-step&gt;
</code></pre></div><p>PS\uFF1A\u53EA\u63A8\u8350\u5199\u5165 text \u548C <a href="./Icon.html">Icon</a> \u7EC4\u4EF6\uFF0C\u5176\u4ED6\u5143\u7D20\u6216\u7EC4\u4EF6\u53EF\u80FD\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p>`,23),r=[l];function h(p,i,o,n,c,u){return s(),e("div",null,r)}var S=t(d,[["render",h]]);export{g as __pageData,S as default};
