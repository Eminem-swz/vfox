import{W as r,Q as d,a as p,T as v}from"./weibo.bfdad59e.js";import{_ as f}from"./index.ba5f16d0.js";import{W as s,r as u,c as _,a as e,w as a,o as m}from"./vendor.d14b3c37.js";const x=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined"},{value:3,label:"\u6211\u7684",icon:"UserOutlined"},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined"}],g=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined",badge:"\u70ED"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined",badge:{dot:!0,content:1}},{value:3,label:"\u6211\u7684",icon:"UserOutlined",badge:1},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined",badge:100}],V=["home","category","cart","my"].map((i,o)=>({icon:`http://cdn.fox2.cn/vfox/tab-bar/${i}@3x.png`,activeIcon:`http://cdn.fox2.cn/vfox/tab-bar/${i}-selected@3x.png`,label:i,value:o+1}));const L=[{value:"wechat",label:"\u5FAE\u4FE1",icon:s(r)},{value:"qq",label:"QQ",icon:s(d)},{value:"weibo",label:"\u5FAE\u535A",icon:s(p)},{value:"taobao",label:"\u6DD8\u5B9D",icon:s(v)}],O={name:"TabBar",data(){return{activeValue:1,customIconList:L,baseList:x,badgeList:g,imageList:V}}};function S(i,o,w,h,t,U){const l=u("fx-tab-bar"),n=u("fx-group"),b=u("fx-fixed");return m(),_("div",null,[e(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:a(()=>[e(l,{options:t.baseList,activeValue:t.activeValue,"onUpdate:activeValue":o[0]||(o[0]=c=>t.activeValue=c)},null,8,["options","activeValue"])]),_:1}),e(n,{title:"\u5FBD\u6807"},{default:a(()=>[e(l,{options:t.badgeList},null,8,["options"])]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:a(()=>[e(l,{options:t.customIconList},null,8,["options"])]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:a(()=>[e(l,{class:"tab-bar-custom-color",options:t.baseList},null,8,["options"])]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08icon=URL\uFF09"},{default:a(()=>[e(l,{class:"tab-bar-custom-image",options:t.imageList},null,8,["options"])]),_:1}),e(n,{title:"\u914D\u5408 Fixed \u5B9E\u73B0\u7F6E\u5E95"},{default:a(()=>[e(b,null,{default:a(()=>[e(l,{options:t.baseList,activeValue:t.activeValue,"onUpdate:activeValue":o[1]||(o[1]=c=>t.activeValue=c)},null,8,["options","activeValue"])]),_:1})]),_:1})])}var j=f(O,[["render",S]]);export{j as default};
