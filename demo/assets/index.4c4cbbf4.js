import{m as r,t as d}from"./data.ba3d0185.js";import{_ as c}from"./index.2fd7321e.js";import{l as i,b as p,e as u,y as t,z as n,f as _}from"./vendor.d68a2f58.js";const x={name:"ExpSideTab",data(){return{activeValue:1,mixTabList:r,tabList:d}}},f={class:"side-tab-box"},m={class:"side-tab-box"};function v(b,a,V,L,e,g){const o=i("fx-side-tab"),s=i("fx-group");return p(),u("div",null,[t(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[_("div",f,[t(o,{options:e.tabList,activeValue:e.activeValue,"onUpdate:activeValue":a[0]||(a[0]=l=>e.activeValue=l)},null,8,["options","activeValue"])])]),_:1}),t(s,{title:"Mix"},{default:n(()=>[_("div",m,[t(o,{options:e.mixTabList},null,8,["options"])])]),_:1})])}var T=c(x,[["render",v]]);export{T as default};
