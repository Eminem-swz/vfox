(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{425:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/1.8f7f9c08.png"},426:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/2.5e8fe289.png"},427:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/3.72437589.png"},428:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/4.e0d5e4c8.png"},429:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/5.5f61acdd.png"},430:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/6.1846c5dd.png"},431:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/7.e6486d63.png"},432:function(t,a,s){"use strict";s.r(a),a.default=s.p+"assets/img/8.16fb8f4c.png"},610:function(t,a,s){"use strict";s.r(a);var r=s(49),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[t._v("#")]),t._v(" 设计")]),t._v(" "),r("p",[t._v("设计的本质是解决问题，而在每个项目的设计中，不可避免的会与各个不同的角色互动：不同的设计师、不同的前端工程师，这其中不可避免的会出现大量的沟通和协作问题，如何在这类多角色互动中提高效率，降低沟通损耗就不可避免的成为一个问题。「组件化」可以在某些层面帮助我们更好的解决这个问题。在复用和设计过程中，与 Brad Frost 提出的  Atomic Design （原子设计）有相似之处。")]),t._v(" "),r("p",[t._v("该组件库便是在项目中实现 "),r("strong",[t._v("可复用")]),t._v(" 、 "),r("strong",[t._v("一致性")]),t._v(" 、 "),r("strong",[t._v("高效率")]),t._v(" 的目标之下孕育而生的。")]),t._v(" "),r("h2",{attrs:{id:"参考设计稿"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考设计稿"}},[t._v("#")]),t._v(" 参考设计稿")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.figma.com/file/x06EJ4ST3tQj9Ez9jeNNRS/%E7%BB%84%E4%BB%B6?node-id=14%3A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Figma"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"设计思路-从限制到规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计思路-从限制到规范"}},[t._v("#")]),t._v(" 设计思路：从限制到规范")]),t._v(" "),r("p",[t._v("针对不同平台的设计会面对不同的限制，而事实上几乎所有的设计都是在一定的限制之下，而此移动端组件库的设计同样如此，在设计中需要发现最小的限制，包括核心字号、最小间距单位，并基于此进行设计，才能在最后的呈现中保证所体现的效果。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(425),alt:"1.png"}})]),t._v(" "),r("h2",{attrs:{id:"布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),r("h3",{attrs:{id:"基本元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本元素"}},[t._v("#")]),t._v(" 基本元素")]),t._v(" "),r("p",[t._v("在此组件库的样式设计中，最基本的元素为文字。原因在于，不同的平台在呈现层最显著的差异首先变是呈现视图的大小，这通常对应于屏幕的像素量与尺寸，而以上的两点便决定了文字需要多大才能使用户能够清晰快速地辨认，在确定了文字的合适区间之后，便可定义出之后一系列的相关尺寸，最后得出整体布局。")]),t._v(" "),r("p",[r("strong",[t._v("核心常用字号。")]),t._v(" 通过对常用 APP 的字号调研，发现当前的移动端核心常用字号范围为 15pt、16pt、17pt。为了兼容更多年龄群体的使用体验，使组件能够在可及性上有更好的保证，本组件库选择了 "),r("strong",[t._v("17pt")]),t._v(" 字号作为核心常用字号。然后以此字号进行一定的向下波动，以应对不同的场景和组件。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(426),alt:"2.png"}})]),t._v(" "),r("h3",{attrs:{id:"间距"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#间距"}},[t._v("#")]),t._v(" 间距")]),t._v(" "),r("h4",{attrs:{id:"基本间距单位"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本间距单位"}},[t._v("#")]),t._v(" 基本间距单位")]),t._v(" "),r("p",[t._v("在定义好了基本元素之后，便可对间距进行定义。本组件库的设计中，每一个基本间距变动单位为 4，即当一个元素需要确定与相邻元素的距离时，其选择的距离应尽可能为 4、8、12、16、20、24、28、32......")]),t._v(" "),r("p",[r("img",{attrs:{src:s(427),alt:"3.png"}})]),t._v(" "),r("h4",{attrs:{id:"间距参数的确定-视觉与理性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#间距参数的确定-视觉与理性"}},[t._v("#")]),t._v(" 间距参数的确定：视觉与理性")]),t._v(" "),r("p",[t._v("在确定了核心字号与基本间距单位之后，针对具体不同的组件，都会涉及不同的间距选择。而这便需要通过视觉感受与理性推导的结合来选择合适的间距。")]),t._v(" "),r("h4",{attrs:{id:"从基本组件到组件库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从基本组件到组件库"}},[t._v("#")]),t._v(" 从基本组件到组件库")]),t._v(" "),r("p",[t._v("本组件库的间距体系起始于最基本的单个组件——单元格（Cell），通过对其的设计参数的确定，进而确定整个组件库的核心间距数值。")]),t._v(" "),r("p",[t._v("首先基于所选取的核心字号 17pt，确定其空间高度为 24pt，进而由其高度的一半确定文本与上下边界的距离为 12；又由文本与视图边界的关系应弱于其与上下关联元素的关系，因此确定了此间距为 16（12+4，即竖向元素的间距加一个间距单位）。")]),t._v(" "),r("p",[t._v("由此得出了组件库中的左右留白间距，即为 16。此组件库中其他间距确定也与此类似。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(428),alt:"4.png"}})]),t._v(" "),r("h2",{attrs:{id:"视觉细节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视觉细节"}},[t._v("#")]),t._v(" 视觉细节")]),t._v(" "),r("h3",{attrs:{id:"颜色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[t._v("#")]),t._v(" 颜色")]),t._v(" "),r("h4",{attrs:{id:"中性色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中性色"}},[t._v("#")]),t._v(" 中性色")]),t._v(" "),r("p",[t._v("本组件库的中性色确定方式为由不同透明度的纯黑色叠加白出。其中基准黑色色值为#000000，标题的黑色不透明度为 85%，主文字的不透明度为 65%，辅助文字-深的不透明度为 45%，辅助文字-浅的不透明度的不透明度为 25%，容器线的不透明度为 15%，划分线的不透明度为 6%，背景的不透光度为 4%，表头背景的不透明度为 2%。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(429),alt:"5.png"}})]),t._v(" "),r("h4",{attrs:{id:"功能色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能色"}},[t._v("#")]),t._v(" 功能色")]),t._v(" "),r("p",[t._v("功能色为组件库中的场景针对化用色，包括主要、成功、警告等场景。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(430),alt:"6.png"}})]),t._v(" "),r("h3",{attrs:{id:"图标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("#")]),t._v(" 图标")]),t._v(" "),r("p",[t._v("图标用以辅助界面信息的呈现，因此图标的大小也由字高而来，以保证图标的视觉大小同相近单个文字，使其具有一贯性。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(431),alt:"71.png"}})]),t._v(" "),r("h3",{attrs:{id:"圆角"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#圆角"}},[t._v("#")]),t._v(" 圆角")]),t._v(" "),r("p",[t._v("本组件库中出现的圆角主要为 2、4、8，其中以 4 的圆角为基准，2 圆角用于界面中的小元素，8 圆角用于界面中的大元素和超大元素。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(432),alt:"8.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);