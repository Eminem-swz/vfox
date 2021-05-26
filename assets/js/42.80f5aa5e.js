(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{560:function(t,v,_){"use strict";_.r(v);var e=_(49),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"flatlist-回收列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flatlist-回收列表"}},[t._v("#")]),t._v(" FlatList 回收列表")]),t._v(" "),_("p",[t._v("注：")]),t._v(" "),_("ul",[_("li",[t._v("需要给 "),_("code",[t._v("flat-list")]),t._v(" 一个固定高度，通过 CSS 设置 height。")]),t._v(" "),_("li",[t._v("如果列表内容存在不固定宽高的图片，由于图片加载的机制，每个 item 的 DOM 渲染了，图片可能还未加载，导致每个 item 的位置计算错误，所以作为调用方，需要将未加载的图片用样式固定住。在已知宽高比（比如常见的正方形商品图），可以使用 "),_("code",[t._v("Image")]),t._v(" 组件内置 "),_("code",[t._v("aspect-ratio")]),t._v(" 来固定图片宽高。")])]),t._v(" "),_("h2",{attrs:{id:"props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("any[]")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("列表数组")])]),t._v(" "),_("tr",[_("td",[t._v("data-key")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("表明每个 item 项的身份（item[dataKey]），如果想指向自己，则设置为 "),_("code",[t._v("*this")]),t._v(" 。建议填写，不填默认使用 index 作为身份标识")])]),t._v(" "),_("tr",[_("td",[t._v("horizontal")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("设置为 true 则变为水平布局模式")])]),t._v(" "),_("tr",[_("td",[t._v("get-item-size")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("动态返回列表项尺寸（垂直布局下指高度，水平布局下指宽度），"),_("code",[t._v("getItemSize(item:any, index:number) => number")]),t._v("，item 是 data[index] 的副本")])]),t._v(" "),_("tr",[_("td",[t._v("item-size")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("设置列表项尺寸，优先使用 "),_("code",[t._v("get-item-size")])])]),t._v(" "),_("tr",[_("td",[t._v("end-reached-threshold")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("0.5")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("决定当距离内容最底部还有多远时触发 onEndReached 回调。注意此参数是一个比值而非像素单位。比如，0.5 表示距离内容最底部的距离为当前列表可见长度的一半时触发")])]),t._v(" "),_("tr",[_("td",[t._v("enable-pull-refresh")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启下拉刷，如果时水平列表则为左拉刷新，搭配 "),_("code",[t._v("refreshing")]),t._v(" 事件使用新")])]),t._v(" "),_("tr",[_("td",[t._v("lower-loading")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否展示底部加载更多状态，配合 "),_("code",[t._v("end-reached")]),t._v(" 事件加载无无限列表")])]),t._v(" "),_("tr",[_("td",[t._v("initial-waterfall")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否开启瀑布流展示方，仅初始化时生效式")])]),t._v(" "),_("tr",[_("td",[t._v("waterfall-col-count")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("瀑布流列数，"),_("code",[t._v("initial-waterfall=true")]),t._v(" 时生效，支持 2 ~ 5 列")])]),t._v(" "),_("tr",[_("td",[t._v("item-gutter")]),t._v(" "),_("td",[t._v("number/number[]")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("项间隔，通过数值设置水平和垂直间隔，也可以通过数组的形式分别设置水平和垂直间隔 [水平间隔, 垂直间隔]，"),_("code",[t._v("getItemSize")]),t._v(" 或者 "),_("code",[t._v("itemSize")]),t._v(" 设定值需要把 "),_("code",[t._v("item-gutter")]),t._v(" 考虑进去")])])])]),t._v(" "),_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("回调函数参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("recycle-change")]),t._v(" "),_("td",[t._v("列表项回收变化时触发")]),t._v(" "),_("td",[t._v("{ item, index, recycled }")])]),t._v(" "),_("tr",[_("td",[t._v("end-reached")]),t._v(" "),_("td",[t._v("滚动到末尾时触发")]),t._v(" "),_("td",[t._v("{ distanceFromEnd } 其中 distanceFromEnd 为距离末尾的距离，单位 px")])]),t._v(" "),_("tr",[_("td",[t._v("scroll")]),t._v(" "),_("td",[t._v("滚动时触发")]),t._v(" "),_("td",[t._v("{ scrollLeft, scrollTop, scrollHeight, scrollWidth }")])]),t._v(" "),_("tr",[_("td",[t._v("refreshing")]),t._v(" "),_("td",[t._v("下拉刷新时触发")]),t._v(" "),_("td",[t._v("({ pullDirection: string }, done: Function) 其中 pullDirection 指下拉的方向，done 指刷新完毕回调的函数")])])])]),t._v(" "),_("h3",{attrs:{id:"recycle-change-的参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#recycle-change-的参数"}},[t._v("#")]),t._v(" recycle-change 的参数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("值")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("recycled")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("是否被回收")])]),t._v(" "),_("tr",[_("td",[t._v("index")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("第 index 项")])]),t._v(" "),_("tr",[_("td",[t._v("item")]),t._v(" "),_("td",[t._v("any")]),t._v(" "),_("td",[t._v("传入 data[index]的副本，修改不会影响 prop data")])])])]),t._v(" "),_("h2",{attrs:{id:"slots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),_("h3",{attrs:{id:"列表项-default"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表项-default"}},[t._v("#")]),t._v(" 列表项（#default）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<fx-flat-list>\n <template #default="{ item, index }">\n  {{ index }} : {{ item }}\n </template>\n</fx-flat-list>\n')])])]),_("h3",{attrs:{id:"列表为空-empty"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表为空-empty"}},[t._v("#")]),t._v(" 列表为空（#empty）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<fx-flat-list>\n  <template #empty>暂无数据</template>\n  ...\n</fx-flat-list>\n")])])]),_("h3",{attrs:{id:"分割线-separator"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分割线-separator"}},[t._v("#")]),t._v(" 分割线（#separator）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<fx-flat-list>\n  <template #separator>\n    <div class="line"></div>\n  </template>\n</fx-flat-list>\n')])])]),_("p",[t._v("注："),_("code",[t._v("getItemSize")]),t._v(" 或者 "),_("code",[t._v("itemSize")]),t._v(" 设定值需要把分割线也考虑进去。")]),t._v(" "),_("h3",{attrs:{id:"前置-header"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前置-header"}},[t._v("#")]),t._v(" 前置（#header）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<fx-flat-list>\n  <template #header></template>\n  ...\n</fx-flat-list>\n")])])]),_("p",[t._v("也可以传入 "),_("RouterLink",{attrs:{to:"/components/Icon.html"}},[t._v("Icon")]),t._v("，比如常见的搜索。")],1),t._v(" "),_("h3",{attrs:{id:"后置-footer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后置-footer"}},[t._v("#")]),t._v(" 后置（#footer）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<fx-flat-list>\n  ...\n  <template #footer>暂时没有更多了</template>\n</fx-flat-list>\n")])])]),_("h2",{attrs:{id:"methods"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("scrollToIndex")]),t._v(" "),_("td",[t._v("将位于指定位置的元素滚动到可视区的指定位置")]),t._v(" "),_("td",[t._v("({ index: number, animated: boolean, viewPosition: string }) => void")])]),t._v(" "),_("tr",[_("td",[t._v("scrollToOffset")]),t._v(" "),_("td",[t._v("滚动列表到指定的偏移，单位 px")]),t._v(" "),_("td",[t._v("({ offset: number, animated: boolean }) => void")])]),t._v(" "),_("tr",[_("td",[t._v("scrollToEnd")]),t._v(" "),_("td",[t._v("滚动到底部")]),t._v(" "),_("td",[t._v("({ animated: boolean }) => void")])]),t._v(" "),_("tr",[_("td",[t._v("recordInteraction")]),t._v(" "),_("td",[t._v("主动通知列表发生了一个事件，以使列表重新计算可视区域")]),t._v(" "),_("td",[t._v("() => void")])])])]),t._v(" "),_("h3",{attrs:{id:"scrolltoindex-的参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scrolltoindex-的参数"}},[t._v("#")]),t._v(" scrollToIndex 的参数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("index")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("列表第 "),_("code",[t._v("index")]),t._v(" 项滚动到可视区的指定位置")])]),t._v(" "),_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("滚动过程中是否使用过度动画")])]),t._v(" "),_("tr",[_("td",[t._v("viewPosition")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("'start'")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("'start'/'center'/'end'/0/0.5/1 显示在屏幕的头部/中间/末尾位置")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);