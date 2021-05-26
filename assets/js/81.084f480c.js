(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{444:function(t,v,_){"use strict";_.r(v);var s=_(42),d=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"stopwatch-秒表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#stopwatch-秒表"}},[t._v("#")]),t._v(" Stopwatch 秒表")]),t._v(" "),_("p",[t._v("PS：本组件没有指定样式，默认情况下可对文字样式进行自定义。")]),t._v(" "),_("h2",{attrs:{id:"props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("show-milliseconds")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示毫秒数")])]),t._v(" "),_("tr",[_("td",[t._v("thousands")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("小时位是否以千分位形式显示")])])])]),t._v(" "),_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("回调函数参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("start")]),t._v(" "),_("td",[t._v("计时启动时触发")]),t._v(" "),_("td",[t._v("{ }")])]),t._v(" "),_("tr",[_("td",[t._v("stop")]),t._v(" "),_("td",[t._v("计时停止时触发")]),t._v(" "),_("td",[t._v("{ }")])]),t._v(" "),_("tr",[_("td",[t._v("reset")]),t._v(" "),_("td",[t._v("计时复位时触发")]),t._v(" "),_("td",[t._v("{ detail: CountTime, laps: CountTime[] } detail 周期总时间，laps，周期内所有计次时间")])])])]),t._v(" "),_("h3",{attrs:{id:"counttime-的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#counttime-的结构"}},[t._v("#")]),t._v(" CountTime 的结构")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("time")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("持续时间")])]),t._v(" "),_("tr",[_("td",[t._v("days")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("天数")])]),t._v(" "),_("tr",[_("td",[t._v("hours")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("小时数（<24），需要跟 days 配合，保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("fullHours")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("小时数，含天数综合，如 '124'，至少保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("thousandsFullHours")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("千分位形式的小时数，含天数综合，如 '1,234'")])]),t._v(" "),_("tr",[_("td",[t._v("minutes")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("分钟数，保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("seconds")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("秒钟数，保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("milliseconds")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("毫秒数，保留 3 位")])])])]),t._v(" "),_("h2",{attrs:{id:"methods"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("start")]),t._v(" "),_("td",[t._v("开始计时")]),t._v(" "),_("td",[t._v("() => void")])]),t._v(" "),_("tr",[_("td",[t._v("stop")]),t._v(" "),_("td",[t._v("停止计时")]),t._v(" "),_("td",[t._v("() => void")])]),t._v(" "),_("tr",[_("td",[t._v("reset")]),t._v(" "),_("td",[t._v("复位/重置")]),t._v(" "),_("td",[t._v("() => void")])]),t._v(" "),_("tr",[_("td",[t._v("lap")]),t._v(" "),_("td",[t._v("触发 1 次计次，返回一个周期")]),t._v(" "),_("td",[t._v("() => CountTime[]")])])])]),t._v(" "),_("h2",{attrs:{id:"slots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),_("p",[t._v("支持自定义风格显示")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<fx-stopwatch>\n  <template #default="countTime">\n    {{ countTime.fullHours }}:{{ countTime.minutes }}:{{\n        countTime.seconds\n    }}.{{ countTime.milliseconds }}\n  </template>\n</fx-stopwatch>\n')])])])])}),[],!1,null,null,null);v.default=d.exports}}]);