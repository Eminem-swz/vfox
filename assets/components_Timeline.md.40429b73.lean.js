import{_ as t,c as e,o as i,a as l}from"./app.8ec95c28.js";const g='{"title":"Timeline \u6B65\u9AA4\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"Timeline CSS","slug":"timeline-css"},{"level":2,"title":"Timeline Slots","slug":"timeline-slots"},{"level":3,"title":"\u9ED8\u8BA4\uFF08#default\uFF09","slug":"\u9ED8\u8BA4\uFF08-default\uFF09"},{"level":2,"title":"TimelineItem \u65F6\u95F4\u8F74\u5B50\u9879","slug":"timelineitem-\u65F6\u95F4\u8F74\u5B50\u9879"},{"level":2,"title":"TimelineItem Props","slug":"timelineitem-props"},{"level":2,"title":"TimelineItem CSS","slug":"timelineitem-css"},{"level":2,"title":"TimelineItem Slots","slug":"timelineitem-slots"},{"level":3,"title":"\u5185\u5BB9\uFF08#default\uFF09","slug":"\u5185\u5BB9\uFF08-default\uFF09"},{"level":3,"title":"\u6807\u9898\uFF08#title\uFF09","slug":"\u6807\u9898\uFF08-title\uFF09"},{"level":3,"title":"\u8282\u70B9\uFF08#dot\uFF09","slug":"\u8282\u70B9\uFF08-dot\uFF09"}],"relativePath":"components/Timeline.md","lastUpdated":1637041750060}',a={},d=l(`__VP_STATIC_START__<h1 id="timeline-\u6B65\u9AA4\u6761" tabindex="-1">Timeline \u6B65\u9AA4\u6761 <a class="header-anchor" href="#timeline-\u6B65\u9AA4\u6761" aria-hidden="true">#</a></h1><h2 id="timeline-css" tabindex="-1">Timeline CSS <a class="header-anchor" href="#timeline-css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--timeline-color</td><td>#8c8c8c</td><td>\u6B65\u9AA4\u6761\u9ED8\u8BA4\u989C\u8272</td></tr><tr><td>--timeline-active-color</td><td>#1890ff</td><td>\u6B65\u9AA4\u6761\u6FC0\u6D3B\u989C\u8272</td></tr></tbody></table><h2 id="timeline-slots" tabindex="-1">Timeline Slots <a class="header-anchor" href="#timeline-slots" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\uFF08-default\uFF09" tabindex="-1">\u9ED8\u8BA4\uFF08#default\uFF09 <a class="header-anchor" href="#\u9ED8\u8BA4\uFF08-default\uFF09" aria-hidden="true">#</a></h3><p>\u6CE8\uFF1A\u5176\u4E2D\u53EA\u53EF\u653E\u7F6E <a href="./Timeline.html#timelineitem-\u65F6\u95F4\u8F74\u5B50\u9879">TimelineItem</a> \u7EC4\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u672A\u5B9A\u4E49\u7684\u884C\u4E3A\u3002</p><div class="language-"><pre><code>&lt;fx-timeline&gt;
  &lt;fx-timeline-item title=&quot;\u6210\u529F\u83B7\u5F970.01\u5143\u6536\u76CA&quot;&gt;\u641E\u534A\u5929\u5C31\u8FD9\u70B9\uFF1F&lt;/fx-timeline-item&gt;
  &lt;fx-timeline-item title=&quot;\u5341\u5929\u540E\u5230\u8D26&quot;&gt;0.01\u5143\u8FD8\u8981\u5341\u5929\u5230\u8D26\uFF1F&lt;/fx-timeline-item&gt;
  &lt;fx-timeline-item title=&quot;\u7231\u8981\u4E0D\u8981&quot;&gt;\u4E0D\u8981\u4E86\uFF0C\u6EDA\u3002&lt;/fx-timeline-item&gt;
&lt;/fx-timeline&gt;
</code></pre></div><h2 id="timelineitem-\u65F6\u95F4\u8F74\u5B50\u9879" tabindex="-1">TimelineItem \u65F6\u95F4\u8F74\u5B50\u9879 <a class="header-anchor" href="#timelineitem-\u65F6\u95F4\u8F74\u5B50\u9879" aria-hidden="true">#</a></h2><h2 id="timelineitem-props" tabindex="-1">TimelineItem Props <a class="header-anchor" href="#timelineitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>\u5426</td><td>\u65F6\u95F4\u8F74\u5B50\u9879\u6807\u9898</td></tr><tr><td>dotColor</td><td>string</td><td></td><td>\u5426</td><td>\u65F6\u95F4\u8F74\u8282\u70B9\u989C\u8272</td></tr></tbody></table><h2 id="timelineitem-css" tabindex="-1">TimelineItem CSS <a class="header-anchor" href="#timelineitem-css" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>--timeline-item-color</td><td>#8c8c8c</td><td>\u6B65\u9AA4\u6761\u9ED8\u8BA4\u989C\u8272\uFF0C\u4E0D\u8BBE\u7F6E\u7EE7\u627F <a href="./Timeline.html#timeline-css">Timeline</a> \u7EC4\u4EF6</td></tr><tr><td>--timeline-item-active-color</td><td>#1890ff</td><td>\u6B65\u9AA4\u6761\u6FC0\u6D3B\u989C\u8272\uFF0C\u4E0D\u8BBE\u7F6E\u7EE7\u627F <a href="./Timeline.html#timeline-css">Timeline</a> \u7EC4\u4EF6</td></tr></tbody></table><h2 id="timelineitem-slots" tabindex="-1">TimelineItem Slots <a class="header-anchor" href="#timelineitem-slots" aria-hidden="true">#</a></h2><h3 id="\u5185\u5BB9\uFF08-default\uFF09" tabindex="-1">\u5185\u5BB9\uFF08#default\uFF09 <a class="header-anchor" href="#\u5185\u5BB9\uFF08-default\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-timeline-item title=&quot;\u6807\u9898&quot;&gt;
  \u81EA\u5B9A\u4E49\u5185\u5BB9
&lt;/fx-timeline-item&gt;
</code></pre></div><h3 id="\u6807\u9898\uFF08-title\uFF09" tabindex="-1">\u6807\u9898\uFF08#title\uFF09 <a class="header-anchor" href="#\u6807\u9898\uFF08-title\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-timeline-item&gt;
  &lt;template #title&gt;
  \u3010\u73E0\u6D77\u5E02\u3011\u3010\u73E0\u6D77\u4E00\u90E8\u3011\u5FEB\u9012\u5C0F\u54E5\u6B63\u5728\u6D3E\u4EF6\uFF08&lt;a href=&quot;tel:10000&quot;&gt;10000&lt;/a&gt;\uFF09
  &lt;/template&gt;
  2021-04-13 11:22:16
&lt;/fx-timeline-item&gt;
</code></pre></div><p>PS\uFF1A\u4F18\u5148\u7EA7\u9AD8\u4E8E Props <code>title</code>\u3002</p><h3 id="\u8282\u70B9\uFF08-dot\uFF09" tabindex="-1">\u8282\u70B9\uFF08#dot\uFF09 <a class="header-anchor" href="#\u8282\u70B9\uFF08-dot\uFF09" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-timeline-item&gt;
  &lt;template #dot&quot;&gt;
    &lt;fx-icon icon=&quot;CheckOutlined&quot;&gt;&lt;/fx-icon&gt;
  &lt;/template&gt;
&lt;/fx-timeline-item&gt;
</code></pre></div>__VP_STATIC_END__`,20),n=[d];function r(m,h,s,o,c,u){return i(),e("div",null,n)}var p=t(a,[["render",r]]);export{g as __pageData,p as default};
