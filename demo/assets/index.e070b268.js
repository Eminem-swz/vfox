import{_ as b,a as B,u as E}from"./index.c5a743f2.js";import{d as F,r,m as f,e as g,f as k,z as l,A as t,F as h,g as v,I as p}from"./vendor.1f7be6ea.js";const D=F({name:"ExpPopover",setup(){const e=r(!1),o=r(!1),d=r(!1),C=r(""),c=r("\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9"),m=r("bottom");function i(){o.value=!0,setTimeout(()=>{o.value=!1},5e3)}const n=u=>{d.value&&(console.log("visible-state-change",u),B(`${u.state} \u4E8B\u4EF6\u89E6\u53D1`)),u.state==="hidden"&&(C.value="",m.value="bottom",c.value="\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",d.value=!1)};function a(u){E({selector:u,content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",placement:"top",success:s=>{console.log("success",s)}})}return{visible:e,noMaskVisible:o,visibleEvent:d,selector:C,content:c,placement:m,onShowNoMask:i,onVisibleStateChange:n,onCallApi:a}}}),$={class:"exp-popover-box"},z=p(" \u5DE6 "),O=p(" \u4E2D "),P=p(" \u53F3 "),V={class:"exp-popover-box2"},A=p(" \u4E0A "),w=p(" \u5DE6 "),M=p(" \u53F3 "),L=p(" \u4E0B ");function N(e,o,d,C,c,m){const i=f("fx-button"),n=f("fx-group"),a=f("fx-cell"),u=f("fx-popover");return g(),k(h,null,[l(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[v("div",$,[l(i,{size:"small",id:"popoverLeft",shape:"circle",icon:"PlusOutlined",onClick:o[0]||(o[0]=s=>{e.selector="#popoverLeft",e.visible=!0})},{default:t(()=>[z]),_:1}),l(i,{size:"small",id:"popoverCenter",shape:"circle",icon:"PlusOutlined",onClick:o[1]||(o[1]=s=>{e.selector="#popoverCenter",e.visible=!0})},{default:t(()=>[O]),_:1}),l(i,{size:"small",id:"popoverRight",shape:"circle",icon:"PlusOutlined",onClick:o[2]||(o[2]=s=>{e.selector="#popoverRight",e.visible=!0})},{default:t(()=>[P]),_:1})])]),_:1}),l(n,{title:"\u65B9\u5411 placement=top/bottom/left/right"},{default:t(()=>[v("div",V,[v("div",null,[l(i,{size:"small",id:"popoverTop2",shape:"circle",icon:"UpOutlined",onClick:o[3]||(o[3]=s=>{e.placement="top",e.selector="#popoverTop2",e.visible=!0})},{default:t(()=>[A]),_:1})]),v("div",null,[l(i,{size:"small",id:"popoverLeft2",shape:"circle",icon:"LeftOutlined",onClick:o[4]||(o[4]=s=>{e.placement="left",e.selector="#popoverLeft2",e.visible=!0})},{default:t(()=>[w]),_:1}),l(i,{size:"small",id:"popoverRight2",shape:"circle",icon:"RightOutlined",onClick:o[5]||(o[5]=s=>{e.placement="right",e.selector="#popoverRight2",e.visible=!0})},{default:t(()=>[M]),_:1})]),v("div",null,[l(i,{size:"small",id:"popoverBottom2",shape:"circle",icon:"DownOutlined",onClick:o[6]||(o[6]=s=>{e.placement="bottom",e.selector="#popoverBottom2",e.visible=!0})},{default:t(()=>[L]),_:1})])])]),_:1}),l(n,{title:"\u5E26\u9009\u9879"},{default:t(()=>[l(a,{label:"\u957F\u6587\u6848"},{default:t(()=>[l(i,{size:"small",id:"popoverLongContent",shape:"circle",icon:"PlusOutlined",onClick:o[7]||(o[7]=s=>{e.selector="#popoverLongContent",e.content="\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",e.visible=!0})})]),_:1}),l(a,{label:"\u4E0D\u5C55\u793A\u8499\u5C42"},{default:t(()=>[l(i,{size:"small",id:"popoverNoMask",shape:"circle",icon:"PlusOutlined",onClick:e.onShowNoMask},null,8,["onClick"])]),_:1})]),_:1}),l(n,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[l(a,{label:"visible-state-change"},{default:t(()=>[l(i,{size:"small",id:"popoverEvent",shape:"circle",icon:"PlusOutlined",onClick:o[8]||(o[8]=s=>{e.selector="#popoverEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1})]),_:1}),l(n,{title:"API"},{default:t(()=>[l(a,{label:"showPopover"},{default:t(()=>[l(i,{size:"small",id:"popoverApi",shape:"circle",icon:"PlusOutlined",onClick:o[9]||(o[9]=s=>e.onCallApi("#popoverApi"))})]),_:1})]),_:1}),l(u,{visible:e.visible,"onUpdate:visible":o[10]||(o[10]=s=>e.visible=s),selector:e.selector,placement:e.placement,content:e.content,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","selector","placement","content","onVisibleStateChange"]),l(u,{visible:e.noMaskVisible,"onUpdate:visible":o[11]||(o[11]=s=>e.noMaskVisible=s),selector:"#popoverNoMask",showMask:!1,content:"\u65E0\u8499\u5C42\u6C14\u6CE1\u5185\u5BB9"},null,8,["visible"])],64)}var T=b(D,[["render",N]]);export{T as default};
