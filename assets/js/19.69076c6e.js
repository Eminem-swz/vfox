(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{537:function(t,v,_){"use strict";_.r(v);var a=_(49),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"toast-消息类型弹窗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#toast-消息类型弹窗"}},[t._v("#")]),t._v(" Toast 消息类型弹窗")]),t._v(" "),_("p",[t._v("注：目前仅支持单例模式。")]),t._v(" "),_("h2",{attrs:{id:"toast-showtoast-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#toast-showtoast-object"}},[t._v("#")]),t._v(" Toast.showToast(object)")]),t._v(" "),_("p",[t._v("显示消息提示框。")]),t._v(" "),_("h3",{attrs:{id:"params"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),_("p",[t._v("Object object")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("提示的内容")])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("'default'")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("类型，可选 'success', 'loading', 'fail'")])]),t._v(" "),_("tr",[_("td",[t._v("icon")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("图标，使用 "),_("RouterLink",{attrs:{to:"/components/Icon.html"}},[t._v("Icon")]),t._v(" 组件，优先级高于 "),_("code",[t._v("type")])],1)]),t._v(" "),_("tr",[_("td",[t._v("duration")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1500")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("提示的延迟关闭时间")])]),t._v(" "),_("tr",[_("td",[t._v("mask")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示透明蒙层，防止触摸穿透")])]),t._v(" "),_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用失败的回调函数（不传入 fail 遇错误直接抛出）")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),_("h4",{attrs:{id:"object-type-的合法值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#object-type-的合法值"}},[t._v("#")]),t._v(" object.type 的合法值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("default")]),t._v(" "),_("td",[t._v("不显示图标，此时 title 文本最多可显示两行")])]),t._v(" "),_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("显示成功图标，此时 title 文本最多显示 7 个汉字长度")])]),t._v(" "),_("tr",[_("td",[t._v("loading")]),t._v(" "),_("td",[t._v("显示加载图标，此时 title 文本最多显示 7 个汉字长度")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("显示错误图标，此时 title 文本最多显示 7 个汉字长度")])])])]),t._v(" "),_("h3",{attrs:{id:"usage"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("import { Toast } from 'vfox'\n\nToast.showToast({\n  title: '成功',\n  type: 'success',\n  duration: 2000\n})\n")])])]),_("h2",{attrs:{id:"toast-hidetoast-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#toast-hidetoast-object"}},[t._v("#")]),t._v(" Toast.hideToast([object])")]),t._v(" "),_("p",[t._v("隐藏消息提示框。")]),t._v(" "),_("h3",{attrs:{id:"params-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#params-2"}},[t._v("#")]),t._v(" Params")]),t._v(" "),_("p",[t._v("Object object")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),_("h3",{attrs:{id:"usage-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("import { Toast } from 'vfox'\n\nToast.hideToast()\n")])])]),_("h2",{attrs:{id:"toast-showloading-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#toast-showloading-object"}},[t._v("#")]),t._v(" Toast.showLoading(object)")]),t._v(" "),_("p",[t._v("显示 loading 提示框。需主动调用 "),_("RouterLink",{attrs:{to:"/apis/Toast.html#toast-hideloading-object"}},[t._v("hideLoading")]),t._v(" 才能关闭提示框。")],1),t._v(" "),_("h3",{attrs:{id:"params-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#params-3"}},[t._v("#")]),t._v(" Params")]),t._v(" "),_("p",[t._v("Object object")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("提示的内容")])]),t._v(" "),_("tr",[_("td",[t._v("mask")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示透明蒙层，防止触摸穿透")])]),t._v(" "),_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),_("h3",{attrs:{id:"usage-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("import { Toast } from 'vfox'\n\nToast.showLoading({\n  title: '加载中',\n})\n")])])]),_("h2",{attrs:{id:"toast-hideloading-object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#toast-hideloading-object"}},[t._v("#")]),t._v(" Toast.hideLoading([object])")]),t._v(" "),_("p",[t._v("隐藏 loading 提示框。")]),t._v(" "),_("h3",{attrs:{id:"params-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#params-4"}},[t._v("#")]),t._v(" Params")]),t._v(" "),_("p",[t._v("Object object")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),_("h3",{attrs:{id:"usage-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("import { Toast } from 'vfox'\n\nToast.hideLoading()\n")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);