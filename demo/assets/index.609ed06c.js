import{m as l,t as r}from"./data.ba3d0185.js";import{_ as c}from"./index.9dd17d5c.js";import{l as i,b as p,e as u,x as t,y as n,f as d}from"./vendor.6d83210b.js";const x={name:"ExpSideTab",data(){return{activeValue:1,mixTabList:l,tabList:r}}},f={class:"side-tab-box"},m={class:"side-tab-box"};function v(b,o,V,L,e,g){const s=i("fx-side-tab"),a=i("fx-group");return p(),u("div",null,[t(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[d("div",f,[t(s,{options:e.tabList,activeValue:e.activeValue,"onUpdate:activeValue":o[0]||(o[0]=_=>e.activeValue=_)},null,8,["options","activeValue"])])]),_:1}),t(a,{title:"Mix"},{default:n(()=>[d("div",m,[t(s,{options:e.mixTabList},null,8,["options"])])]),_:1})])}var T=c(x,[["render",v]]);export{T as default};