import{W as b,Q as p,a as v,T as d}from"./weibo.255a9910.js";import{_ as f}from"./index.02706d4f.js";import{x as s,l as u,b as _,e as x,y as e,z as o}from"./vendor.d68a2f58.js";const m=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined"},{value:3,label:"\u6211\u7684",icon:"UserOutlined"},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined"}],g=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined",badge:"\u70ED"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined",badge:{dot:!0,content:1}},{value:3,label:"\u6211\u7684",icon:"UserOutlined",badge:1},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined",badge:100}],V=["home","category","cart","my"].map((i,a)=>({icon:`https://cdn.fox2.cn/vfox/tab-bar/${i}@3x.png`,activeIcon:`https://cdn.fox2.cn/vfox/tab-bar/${i}-selected@3x.png`,label:i,value:a+1}));const L=[{value:"wechat",label:"\u5FAE\u4FE1",icon:s(b)},{value:"qq",label:"QQ",icon:s(p)},{value:"weibo",label:"\u5FAE\u535A",icon:s(v)},{value:"taobao",label:"\u6DD8\u5B9D",icon:s(d)}],O={name:"ExpTabBar",data(){return{activeValue:1,customIconList:L,baseList:m,badgeList:g,imageList:V}}};function S(i,a,y,B,t,h){const l=u("fx-tab-bar"),n=u("fx-group"),r=u("fx-fixed");return _(),x("div",null,[e(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[e(l,{options:t.baseList,activeValue:t.activeValue,"onUpdate:activeValue":a[0]||(a[0]=c=>t.activeValue=c)},null,8,["options","activeValue"])]),_:1}),e(n,{title:"\u5FBD\u6807"},{default:o(()=>[e(l,{options:t.badgeList},null,8,["options"])]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:o(()=>[e(l,{options:t.customIconList},null,8,["options"])]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[e(l,{color:"#8B8DB8",activeColor:"#ffffff",style:{"background-color":"#6667ab"},options:t.baseList},null,8,["options"])]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08icon=URL\uFF09"},{default:o(()=>[e(l,{class:"exp-tabBar-custom",options:t.imageList},null,8,["options"])]),_:1}),e(n,{title:"\u914D\u5408 Fixed \u5B9E\u73B0\u7F6E\u5E95"},{default:o(()=>[e(r,null,{default:o(()=>[e(l,{options:t.baseList,activeValue:t.activeValue,"onUpdate:activeValue":a[1]||(a[1]=c=>t.activeValue=c)},null,8,["options","activeValue"])]),_:1})]),_:1})])}var Q=f(O,[["render",S]]);export{Q as default};
