import{_,a}from"./index.4c76766c.js";import{d as F,l,b as p,e as f,y as e,z as t,f as c}from"./vendor.4df8ce31.js";const C=F({name:"ExpCell",setup(){return{showToast:a,onCheckboxChange:o=>{console.log("change",o),a(o?"\u52FE\u9009":"\u53D6\u6D88\u52FE\u9009")}}}}),B={class:"cell-user-item"},x=c("span",{class:"cell-user-item-nickname"},"\u5C0F\u660E",-1),m={class:"cell-user-item"},b=c("span",{class:"cell-user-item-nickname"},"\u5C0F\u660E",-1);function h(s,o,E,k,g,v){const u=l("fx-cell"),n=l("fx-group"),r=l("fx-icon"),i=l("fx-image"),d=l("fx-checkbox");return p(),f("div",null,[e(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9"}),e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F"})]),_:1}),e(n,{title:"\u5305\u542B\u56FE\u6807"},{default:t(()=>[e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",icon:"EditOutlined"}),e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F",icon:"EditOutlined"})]),_:1}),e(n,{title:"\u5C55\u793A\u7BAD\u5934"},{default:t(()=>[e(u,{label:"\u5355\u5143\u683C",isLink:""}),e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",isLink:""}),e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",isLink:"","arrow-direction":"down"}),e(u,{label:"\u5355\u5143\u683C",description:"\u63CF\u8FF0\u4FE1\u606F",isLink:""}),e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F",isLink:""})]),_:1}),e(n,{title:"\u5176\u4ED6"},{default:t(()=>[e(u,{label:"\u5FC5\u586B",content:"\u5185\u5BB9",isLink:"","arrow-direction":"down",required:""})]),_:1}),e(n,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[e(u,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F",isLink:"",checkbox:"",onClick:o[0]||(o[0]=w=>s.showToast("\u70B9\u51FB\u4E8B\u4EF6"))})]),_:1}),e(n,{title:"Slot default"},{default:t(()=>[e(u,{label:"\u53F3\u4FA7\u56FE\u6807",content:"\u5185\u5BB9"},{default:t(()=>[e(r,{icon:"CloseOutlined"})]),_:1}),e(u,{checkbox:""},{default:t(()=>[c("div",B,[e(i,{class:"cell-user-item-avatar",src:"https://cdn.fox2.cn/vfox/swiper/center-2.jpg",mode:"aspectFill"}),x])]),_:1})]),_:1}),e(n,{title:"Slot icon"},{default:t(()=>[e(u,{checkbox:""},{icon:t(()=>[e(d,{circle:"",onChange:s.onCheckboxChange},null,8,["onChange"])]),default:t(()=>[c("div",m,[e(i,{class:"cell-user-item-avatar",src:"https://cdn.fox2.cn/vfox/swiper/center-2.jpg",mode:"aspectFill"}),b])]),_:1})]),_:1})])}var $=_(C,[["render",h]]);export{$ as default};
