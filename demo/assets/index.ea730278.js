import{s as u,t as c,m as _,a as p}from"./data.ba3d0185.js";import{_ as b}from"./index.51b8fb8d.js";import{r,c as d,a as e,w as i,o as v,f as n}from"./vendor.e8a7463a.js";const x={name:"Tab",data(){return{shortActiveValue:1,activeValue:1,shortTabList:u,tabList:c,mixTabList:_,subTabList:p}}},f={class:"tab-box"},m={class:"tab-box"},V={class:"tab-box"},h={class:"tab-box"};function L(T,s,g,j,t,A){const o=r("fx-tab"),a=r("fx-group");return v(),d("div",null,[e(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:i(()=>[n("div",f,[e(o,{options:t.shortTabList,activeValue:t.shortActiveValue,"onUpdate:activeValue":s[0]||(s[0]=l=>t.shortActiveValue=l)},null,8,["options","activeValue"])])]),_:1}),e(a,{title:"\u6EDA\u52A8\uFF08\u9608\u503C scrollThreshold = 4\uFF09"},{default:i(()=>[n("div",m,[e(o,{options:t.tabList,activeValue:t.activeValue,"onUpdate:activeValue":s[1]||(s[1]=l=>t.activeValue=l)},null,8,["options","activeValue"])])]),_:1}),e(a,{title:"Mix"},{default:i(()=>[n("div",V,[e(o,{options:t.mixTabList},null,8,["options"])])]),_:1}),e(a,{title:"\u5E26\u526F\u6807\u7B7E"},{default:i(()=>[n("div",h,[e(o,{options:t.subTabList},null,8,["options"])])]),_:1})])}var y=b(x,[["render",L]]);export{y as default};
