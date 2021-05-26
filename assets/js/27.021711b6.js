(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{390:function(t,v,a){"use strict";a.r(v);var _=a(42),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cascader-级联选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascader-级联选择器"}},[t._v("#")]),t._v(" Cascader 级联选择器")]),t._v(" "),a("ul",[a("li",[t._v("可以配合 "),a("RouterLink",{attrs:{to:"/components/Form.html"}},[t._v("Form")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/components/Form.html#formitem-表单项"}},[t._v("FormItem")]),t._v(" 使用。")],1)]),t._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/components/Form.html"}},[t._v("Form")]),t._v(" 的标识")],1)]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("没有选中值的提示，也会用在弹窗标题上")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("是否禁用")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("数据集")])]),t._v(" "),a("tr",[a("td",[t._v("v-modal")]),t._v(" "),a("td",[t._v("string/number/string[]/number[]")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("选中值")])]),t._v(" "),a("tr",[a("td",[t._v("format-string")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("value 双向绑定值是为字符串")])]),t._v(" "),a("tr",[a("td",[t._v("initial-separator")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'/'")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("分隔符")])]),t._v(" "),a("tr",[a("td",[t._v("field-names")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("{ label: 'label', value: 'value', children: 'children' }")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("自定义 options 中 label value children 的字段 key")])])])]),t._v(" "),a("h3",{attrs:{id:"options-的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-的结构"}},[t._v("#")]),t._v(" options 的结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[\n  {\n    label: '空调',\n    value: 'kongtiao',\n    children: [\n      {\n        label: '家用空调',\n        value: 'jiayongkongtiao',\n        children: [\n          {\n            label: '挂式空调',\n            value: 'guashikongtiao'\n          },\n          {\n            label: '柜式空调',\n            value: 'guishikongtiao'\n          }\n        ]\n      },\n      {\n        label: '厨房空调',\n        value: 'chufangkongtiao'\n      }\n    ]\n  },\n  {\n    label: '冰箱',\n    value: 'bingxiang',\n    children: [\n      {\n        label: '双门',\n        value: 'shuangmen'\n      },\n      {\n        label: '三门',\n        value: 'sanmen'\n      },\n      {\n        label: '对开门',\n        value: 'duikaimen'\n      },\n      {\n        label: '多门',\n        value: 'duomen'\n      }\n    ]\n  },\n  {\n    label: '洗衣机',\n    value: 'xiyiji',\n    children: [\n      {\n        label: '波轮',\n        value: 'bolun'\n      },\n      {\n        label: '滚筒',\n        value: 'guntong'\n      },\n      {\n        label: '洗烘一体',\n        value: 'xihongyiti'\n      }\n    ]\n  }\n]\n")])])]),a("h3",{attrs:{id:"modelvalue-的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modelvalue-的结构"}},[t._v("#")]),t._v(" modelValue 的结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[ 'xiyiji', 'guntong' ]\n")])])]),a("p",[t._v("当 formatString 为 true 时，根据分割线 "),a("code",[t._v("/")]),t._v(" 返回：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("xiyiji/guntong\n")])])]),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("回调函数参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("选择后 value 发生改变时触发")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/components/Cascader.html#detailobject-的结构"}},[t._v("DetailObject")])],1)]),t._v(" "),a("tr",[a("td",[t._v("visible-state-change")]),t._v(" "),a("td",[t._v("展示隐藏时触发")]),t._v(" "),a("td",[t._v("{ state: "),a("RouterLink",{attrs:{to:"/components/Cascader.html#visiblestate-值说明"}},[t._v("VisibleState")]),t._v(" }")],1)])])]),t._v(" "),a("h3",{attrs:{id:"visiblestate-值说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visiblestate-值说明"}},[t._v("#")]),t._v(" VisibleState 值说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("展示时触发")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("shown")]),t._v(" "),a("td",[t._v("展示且动画结束后触发")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("hide")]),t._v(" "),a("td",[t._v("隐藏时触发")]),t._v(" "),a("td",[t._v("可能携带其他参数 cancel, maskClick, closeClick 等")])]),t._v(" "),a("tr",[a("td",[t._v("hidden")]),t._v(" "),a("td",[t._v("隐藏且动画结束后触发")]),t._v(" "),a("td",[t._v("可能携带其他参数 cancel, maskClick, closeClick 等")])])])]),t._v(" "),a("h3",{attrs:{id:"detailobject-的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailobject-的结构"}},[t._v("#")]),t._v(" DetailObject 的结构")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("number[]/string[]")]),t._v(" "),a("td",[t._v('["zaolei", "lunzao"]')])]),t._v(" "),a("tr",[a("td",[t._v("valueString")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"zaolei/lunzao"')])]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("string[]")]),t._v(" "),a("td",[t._v('["藻类", "轮藻"]')])]),t._v(" "),a("tr",[a("td",[t._v("labelString")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"藻类/轮藻"')])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);