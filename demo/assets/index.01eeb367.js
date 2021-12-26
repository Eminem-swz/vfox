import{_ as d,a as C,w as f}from"./index.00e37155.js";import{j as b,r as a,o as m,c,a as l,w as t,f as p,B as n}from"./vendor.d6b2829d.js";const E=b({name:"ExpPopover",props:{},data(){return{visible:!1,selector:"",placement:"bottom",content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",noMaskVisible:!1,visibleEvent:!1}},methods:{onShowNoMask(){this.noMaskVisible=!0,setTimeout(()=>{this.noMaskVisible=!1},5e3)},onVisibleStateChange(e){this.visibleEvent&&(console.log("event",e),C(`${e.state} \u4E8B\u4EF6\u89E6\u53D1`)),e.state==="hidden"&&(this.selector="",this.placement="bottom",this.content="\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",this.visibleEvent=!1)},onCallApi(e){f({selector:e,content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",placement:"top",success:o=>{console.log("success",o)}})}}}),B={class:"popover-box"},h=n(" \u5DE6 "),k=n(" \u4E2D "),F=n(" \u53F3 "),g={class:"popover-box2"},D=n(" \u4E0A "),$=n(" \u5DE6 "),V=n(" \u53F3 "),z=n(" \u4E0B ");function O(e,o,P,w,M,A){const s=a("fx-button"),u=a("fx-group"),r=a("fx-cell"),v=a("fx-popover");return m(),c("div",null,[l(u,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[p("div",B,[l(s,{size:"small",id:"popoverLeft",shape:"circle",icon:"PlusOutlined",onClick:o[0]||(o[0]=i=>{e.selector="#popoverLeft",e.visible=!0})},{default:t(()=>[h]),_:1}),l(s,{size:"small",id:"popoverCenter",shape:"circle",icon:"PlusOutlined",onClick:o[1]||(o[1]=i=>{e.selector="#popoverCenter",e.visible=!0})},{default:t(()=>[k]),_:1}),l(s,{size:"small",id:"popoverRight",shape:"circle",icon:"PlusOutlined",onClick:o[2]||(o[2]=i=>{e.selector="#popoverRight",e.visible=!0})},{default:t(()=>[F]),_:1})])]),_:1}),l(u,{title:"\u65B9\u5411 placement=top/bottom/left/right"},{default:t(()=>[p("div",g,[p("div",null,[l(s,{size:"small",id:"popoverTop2",shape:"circle",icon:"UpOutlined",onClick:o[3]||(o[3]=i=>{e.placement="top",e.selector="#popoverTop2",e.visible=!0})},{default:t(()=>[D]),_:1})]),p("div",null,[l(s,{size:"small",id:"popoverLeft2",shape:"circle",icon:"LeftOutlined",onClick:o[4]||(o[4]=i=>{e.placement="left",e.selector="#popoverLeft2",e.visible=!0})},{default:t(()=>[$]),_:1}),l(s,{size:"small",id:"popoverRight2",shape:"circle",icon:"RightOutlined",onClick:o[5]||(o[5]=i=>{e.placement="right",e.selector="#popoverRight2",e.visible=!0})},{default:t(()=>[V]),_:1})]),p("div",null,[l(s,{size:"small",id:"popoverBottom2",shape:"circle",icon:"DownOutlined",onClick:o[6]||(o[6]=i=>{e.placement="bottom",e.selector="#popoverBottom2",e.visible=!0})},{default:t(()=>[z]),_:1})])])]),_:1}),l(u,{title:"\u5E26\u9009\u9879"},{default:t(()=>[l(r,{label:"\u957F\u6587\u6848"},{default:t(()=>[l(s,{size:"small",id:"popoverLongContent",shape:"circle",icon:"PlusOutlined",onClick:o[7]||(o[7]=i=>{e.selector="#popoverLongContent",e.content="\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9",e.visible=!0})})]),_:1}),l(r,{label:"\u4E0D\u5C55\u793A\u8499\u5C42"},{default:t(()=>[l(s,{size:"small",id:"popoverNoMask",shape:"circle",icon:"PlusOutlined",onClick:e.onShowNoMask},null,8,["onClick"])]),_:1})]),_:1}),l(u,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[l(r,{label:"visible-state-change"},{default:t(()=>[l(s,{size:"small",id:"popoverEvent",shape:"circle",icon:"PlusOutlined",onClick:o[8]||(o[8]=i=>{e.selector="#popoverEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1})]),_:1}),l(u,{title:"API"},{default:t(()=>[l(r,{label:"showPopover"},{default:t(()=>[l(s,{size:"small",id:"popoverApi",shape:"circle",icon:"PlusOutlined",onClick:o[9]||(o[9]=i=>e.onCallApi("#popoverApi"))})]),_:1})]),_:1}),l(v,{visible:e.visible,"onUpdate:visible":o[10]||(o[10]=i=>e.visible=i),selector:e.selector,placement:e.placement,content:e.content,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","selector","placement","content","onVisibleStateChange"]),l(v,{visible:e.noMaskVisible,"onUpdate:visible":o[11]||(o[11]=i=>e.noMaskVisible=i),selector:"#popoverNoMask","show-mask":!1,content:"\u65E0\u8499\u5C42\u6C14\u6CE1\u5185\u5BB9"},null,8,["visible"])])}var S=d(E,[["render",O]]);export{S as default};
