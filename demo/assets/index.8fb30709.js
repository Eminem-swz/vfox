import{m as d,t as l}from"./data.ba3d0185.js";import{_ as c}from"./index.00e37155.js";import{r as i,o as p,c as u,a as t,w as n,f as r}from"./vendor.d6b2829d.js";const x={name:"ExpSideTab",data(){return{activeValue:1,mixTabList:d,tabList:l}}},f={class:"side-tab-box"},m={class:"side-tab-box"};function v(b,o,V,L,e,g){const a=i("fx-side-tab"),s=i("fx-group");return p(),u("div",null,[t(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[r("div",f,[t(a,{options:e.tabList,activeValue:e.activeValue,"onUpdate:activeValue":o[0]||(o[0]=_=>e.activeValue=_)},null,8,["options","activeValue"])])]),_:1}),t(s,{title:"Mix"},{default:n(()=>[r("div",m,[t(a,{options:e.mixTabList},null,8,["options"])])]),_:1})])}var h=c(x,[["render",v]]);export{h as default};
