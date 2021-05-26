(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{396:function(t,v,_){"use strict";_.r(v);var e=_(42),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"countdown-倒计时"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#countdown-倒计时"}},[t._v("#")]),t._v(" CountDown 倒计时")]),t._v(" "),_("p",[t._v("注：本组件没有指定样式，默认情况下可对文字样式进行自定义。")]),t._v(" "),_("h2",{attrs:{id:"props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("v-model:timestamp")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("99")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("倒计时时长，单位 ms")])]),t._v(" "),_("tr",[_("td",[t._v("show-days")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示天数")])]),t._v(" "),_("tr",[_("td",[t._v("paused")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否暂停")])])])]),t._v(" "),_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("回调函数参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("pause")]),t._v(" "),_("td",[t._v("计时暂停时触发")]),t._v(" "),_("td",[t._v("{ remainTime: number } remainTime 剩余时间，单位 ms")])]),t._v(" "),_("tr",[_("td",[t._v("resume")]),t._v(" "),_("td",[t._v("恢复计时时触发")]),t._v(" "),_("td",[t._v("{ remainTime: number } remainTime 剩余时间，单位 ms")])]),t._v(" "),_("tr",[_("td",[t._v("end")]),t._v(" "),_("td",[t._v("计时结束时触发")]),t._v(" "),_("td",[t._v("{ startTime: number, endTime: number } startTime 本地开始时间戳，endTime 本地结束时间戳，单位 ms")])])])]),t._v(" "),_("h2",{attrs:{id:"slots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),_("p",[t._v("支持自定义风格显示")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<fx-count-down v-model:timestamp="timestamp">\n  <template #default="countTime">\n    {{ countTime.fullHours }}:{{ countTime.minutes }}:{{\n        countTime.seconds\n    }}.{{ countTime.milliseconds }}\n  </template>\n</fx-count-down>\n')])])]),_("h3",{attrs:{id:"counttime-的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#counttime-的结构"}},[t._v("#")]),t._v(" countTime 的结构")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("time")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("持续时间")])]),t._v(" "),_("tr",[_("td",[t._v("days")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("天数")])]),t._v(" "),_("tr",[_("td",[t._v("hours")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("小时数（<24），需要跟 days 配合，保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("fullHours")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("小时数，含天数综合，如 '124'，至少保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("thousandsFullHours")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("千分位形式的小时数，含天数综合，如 '1,234'")])]),t._v(" "),_("tr",[_("td",[t._v("minutes")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("分钟数，保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("seconds")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("秒钟数，保留 2 位")])]),t._v(" "),_("tr",[_("td",[t._v("milliseconds")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("毫秒数，保留 3 位")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);