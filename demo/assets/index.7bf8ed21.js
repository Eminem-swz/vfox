import{W as r,Q as d,a as b,T as p}from"./weibo.04cf9008.js";import{_ as f}from"./index.75560e0d.js";import{y as n,d as v,m as s,e as m,f as g,z as a,A as t,F as E}from"./vendor.8029601e.js";const _=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined"},{value:3,label:"\u6211\u7684",icon:"UserOutlined"},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined"}],B=[{value:1,label:"\u9996\u9875",icon:"HomeOutlined",badge:"\u70ED"},{value:2,label:"\u641C\u7D22",icon:"SearchOutlined",badge:{dot:!0,content:1}},{value:3,label:"\u6211\u7684",icon:"UserOutlined",badge:1},{value:4,label:"\u8BBE\u7F6E",icon:"SettingOutlined",badge:100}],F=["home","category","cart","my"].map((e,u)=>({icon:`https://cdn.fox2.cn/vfox/tab-bar/${e}@3x.png`,activeIcon:`https://cdn.fox2.cn/vfox/tab-bar/${e}-selected@3x.png`,label:e,value:u+1}));const x=[{value:"wechat",label:"\u5FAE\u4FE1",icon:n(r)},{value:"qq",label:"QQ",icon:n(d)},{value:"weibo",label:"\u5FAE\u535A",icon:n(b)},{value:"taobao",label:"\u6DD8\u5B9D",icon:n(p)}],V=v({name:"ExpTabBar",data(){return{activeValue:1,customIconList:x,baseList:_,badgeList:B,imageList:F}}});function A(e,u,L,D,C,O){const o=s("fx-tab-bar"),l=s("fx-group"),c=s("fx-fixed");return m(),g(E,null,[a(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[a(o,{options:e.baseList,activeValue:e.activeValue,"onUpdate:activeValue":u[0]||(u[0]=i=>e.activeValue=i)},null,8,["options","activeValue"])]),_:1}),a(l,{title:"\u5FBD\u6807"},{default:t(()=>[a(o,{options:e.badgeList},null,8,["options"])]),_:1}),a(l,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:t(()=>[a(o,{options:e.customIconList},null,8,["options"])]),_:1}),a(l,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:t(()=>[a(o,{color:"#8B8DB8",activeColor:"#ffffff",style:{"background-color":"#6667ab"},options:e.baseList},null,8,["options"])]),_:1}),a(l,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08icon=URL\uFF09"},{default:t(()=>[a(o,{class:"exp-tabBar-custom",options:e.imageList},null,8,["options"])]),_:1}),a(l,{title:"\u914D\u5408 Fixed \u5B9E\u73B0\u7F6E\u5E95"},{default:t(()=>[a(c,null,{default:t(()=>[a(o,{options:e.baseList,activeValue:e.activeValue,"onUpdate:activeValue":u[1]||(u[1]=i=>e.activeValue=i)},null,8,["options","activeValue"])]),_:1})]),_:1})],64)}var h=f(V,[["render",A]]);export{h as default};
