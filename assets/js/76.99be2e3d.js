(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{594:function(t,v,_){"use strict";_.r(v);var a=_(49),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"skeleton-骨架屏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeleton-骨架屏"}},[t._v("#")]),t._v(" Skeleton 骨架屏")]),t._v(" "),_("h2",{attrs:{id:"skeleton-props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeleton-props"}},[t._v("#")]),t._v(" Skeleton Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("loading")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示骨架屏，传 false 时会展示子组件内容")])]),t._v(" "),_("tr",[_("td",[t._v("avatar")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示头像占位图")])]),t._v(" "),_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启动画")])]),t._v(" "),_("tr",[_("td",[t._v("avatar-shape")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("'default'")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("可选 'default', 'circle'")])]),t._v(" "),_("tr",[_("td",[t._v("button-shape")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("'default'")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("可选 'default', 'round'")])]),t._v(" "),_("tr",[_("td",[t._v("paragraph-row")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("段落占位图行数")])])])]),t._v(" "),_("h2",{attrs:{id:"skeleton-slots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeleton-slots"}},[t._v("#")]),t._v(" Skeleton Slots")]),t._v(" "),_("h3",{attrs:{id:"默认-default"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#默认-default"}},[t._v("#")]),t._v(" 默认（#default）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<fx-skeleton>\n  <div>详情...</div>\n</fx-skeleton>\n")])])]),_("p",[t._v("注：vue 要求组件只有一个 root，建议默认"),_("code",[t._v("slot")]),t._v("内容包裹在一个标签中，不然会被加一个包裹标签，可能会导致展示效果不符合预期。")]),t._v(" "),_("h3",{attrs:{id:"骨架屏重新布局-layout"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏重新布局-layout"}},[t._v("#")]),t._v(" 骨架屏重新布局（layout）")]),t._v(" "),_("p",[t._v("还可以在 layout 插槽中重新组合骨架屏，目前提供 "),_("code",[t._v("image")]),t._v("、"),_("code",[t._v("avatar")]),t._v("、"),_("code",[t._v("title")]),t._v("、"),_("code",[t._v("paragraph")]),t._v("、"),_("code",[t._v("button")]),t._v(" 5 款子组件。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<fx-skeleton>\n  <template #layout>\n    <fx-skeleton-image></fx-skeleton-image>\n    <fx-skeleton-title></fx-skeleton-title>\n    <fx-skeleton-paragraph></fx-skeleton-paragraph>\n  </template>\n  <div>详情...</div>\n</fx-skeleton>\n")])])]),_("h2",{attrs:{id:"skeletonavatar-props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeletonavatar-props"}},[t._v("#")]),t._v(" SkeletonAvatar Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("shape")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("'default'")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("可选 'default', 'circle'")])]),t._v(" "),_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启动画，仅在单独使用头像骨架时生效")])])])]),t._v(" "),_("h2",{attrs:{id:"skeletonimage-props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeletonimage-props"}},[t._v("#")]),t._v(" SkeletonImage Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启动画，仅在单独使用头像骨架时生效")])])])]),t._v(" "),_("h2",{attrs:{id:"skeletontitle-props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeletontitle-props"}},[t._v("#")]),t._v(" SkeletonTitle Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启动画，仅在单独使用头像骨架时生效")])])])]),t._v(" "),_("h2",{attrs:{id:"skeletonparagraph-props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeletonparagraph-props"}},[t._v("#")]),t._v(" SkeletonParagraph Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("row")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("段落占位图行数")])]),t._v(" "),_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启动画，仅在单独使用头像骨架时生效")])])])]),t._v(" "),_("h2",{attrs:{id:"skeletonbutton-props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#skeletonbutton-props"}},[t._v("#")]),t._v(" SkeletonButton Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("shape")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("'default'")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("可选 'default', 'round'")])]),t._v(" "),_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启动画，仅在单独使用头像骨架时生效")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);