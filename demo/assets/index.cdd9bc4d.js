import{m as l,t as u}from"./data.8bc95076.js";import{_ as p}from"./index.95d96f48.js";import{d as _,r as c,l as i,b as f,e as m,y as t,z as n,f as d}from"./vendor.d68a2f58.js";const v=_({name:"ExpSideTab",setup(){return{activeValue:c(1),mixTabList:l,tabList:u}}}),x={class:"side-tab-box"},b={class:"side-tab-box"};function V(e,a,C,L,$,g){const s=i("fx-side-tab"),o=i("fx-group");return f(),m("div",null,[t(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[d("div",x,[t(s,{options:e.tabList,activeValue:e.activeValue,"onUpdate:activeValue":a[0]||(a[0]=r=>e.activeValue=r)},null,8,["options","activeValue"])])]),_:1}),t(o,{title:"Mix"},{default:n(()=>[d("div",b,[t(s,{options:e.mixTabList},null,8,["options"])])]),_:1})])}var T=p(v,[["render",V]]);export{T as default};
