import{_ as f,a as d}from"./index.807999d0.js";import{r as o,o as u,c as p,a as e,w as n,f as l}from"./vendor.d6b2829d.js";const x={name:"ExpCell",data(){return{checked:!1}},methods:{onClick(){d("\u70B9\u51FB\u4E8B\u4EF6")},onCheckboxChange(i){console.log(i),d(i.checked?"\u52FE\u9009":"\u53D6\u6D88\u52FE\u9009")}}},m={class:"cell-user-item"},k=l("span",{class:"cell-user-item-nickname"},"\u5C0F\u660E",-1),h={class:"cell-user-item"},b=l("span",{class:"cell-user-item-nickname"},"\u5C0F\u660E",-1);function C(i,v,g,w,L,s){const t=o("fx-cell"),c=o("fx-group"),r=o("fx-icon"),a=o("fx-image"),_=o("fx-checkbox");return u(),p("div",null,[e(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9"}),e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F"})]),_:1}),e(c,{title:"\u5305\u542B\u56FE\u6807"},{default:n(()=>[e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",icon:"EditOutlined"}),e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F",icon:"EditOutlined"})]),_:1}),e(c,{title:"\u5C55\u793A\u7BAD\u5934"},{default:n(()=>[e(t,{label:"\u5355\u5143\u683C",isLink:""}),e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",isLink:""}),e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",isLink:"","arrow-direction":"down"}),e(t,{label:"\u5355\u5143\u683C",description:"\u63CF\u8FF0\u4FE1\u606F",isLink:""}),e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F",isLink:""})]),_:1}),e(c,{title:"\u5176\u4ED6"},{default:n(()=>[e(t,{label:"\u5FC5\u586B",content:"\u5185\u5BB9",isLink:"","arrow-direction":"down",required:""})]),_:1}),e(c,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:n(()=>[e(t,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F",isLink:"",checkbox:"",onClick:s.onClick},null,8,["onClick"])]),_:1}),e(c,{title:"Slot default"},{default:n(()=>[e(t,{label:"\u53F3\u4FA7\u56FE\u6807",content:"\u5185\u5BB9"},{default:n(()=>[e(r,{icon:"CloseOutlined"})]),_:1}),e(t,{checkbox:""},{default:n(()=>[l("div",m,[e(a,{class:"cell-user-item-avatar",src:"https://cdn.fox2.cn/vfox/swiper/center-2.jpg",mode:"aspectFill"}),k])]),_:1})]),_:1}),e(c,{title:"Slot icon"},{default:n(()=>[e(t,{checkbox:""},{icon:n(()=>[e(_,{circle:"",onChange:s.onCheckboxChange},null,8,["onChange"])]),default:n(()=>[l("div",h,[e(a,{class:"cell-user-item-avatar",src:"https://cdn.fox2.cn/vfox/swiper/center-2.jpg",mode:"aspectFill"}),b])]),_:1})]),_:1})])}var B=f(x,[["render",C]]);export{B as default};
