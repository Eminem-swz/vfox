import{s as d,t as p,m as c,a as b}from"./data.8bc95076.js";import{_ as v,a as _}from"./index.11386e99.js";import{d as f,r as l,m as r,e as h,f as m,z as e,A as n,g as i}from"./vendor.1f7be6ea.js";const V=f({name:"ExpTab",setup(){const t=o=>{console.log("change",o),_(`\u5207\u6362\u5230\u7B2C${o.index+1}\u4E2A`)};return{shortActiveValue:l(1),activeValue:l(1),shortTabList:d,tabList:p,mixTabList:c,subTabList:b,onChange:t}}}),x={class:"tab-box"},g={class:"tab-box"},C={class:"tab-box"},T={class:"tab-box"},L={class:"tab-box"};function A(t,o,E,F,B,$){const a=r("fx-tab"),s=r("fx-group");return h(),m("div",null,[e(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[i("div",x,[e(a,{options:t.shortTabList,activeValue:t.shortActiveValue,"onUpdate:activeValue":o[0]||(o[0]=u=>t.shortActiveValue=u)},null,8,["options","activeValue"])])]),_:1}),e(s,{title:"\u6EDA\u52A8\uFF08\u9608\u503C scrollThreshold = 4\uFF09"},{default:n(()=>[i("div",g,[e(a,{options:t.tabList,activeValue:t.activeValue,"onUpdate:activeValue":o[1]||(o[1]=u=>t.activeValue=u)},null,8,["options","activeValue"])])]),_:1}),e(s,{title:"Mix"},{default:n(()=>[i("div",C,[e(a,{options:t.mixTabList},null,8,["options"])])]),_:1}),e(s,{title:"\u5E26\u526F\u6807\u7B7E"},{default:n(()=>[i("div",T,[e(a,{options:t.subTabList},null,8,["options"])])]),_:1}),e(s,{title:"change \u4E8B\u4EF6"},{default:n(()=>[i("div",L,[e(a,{options:t.shortTabList,onChange:t.onChange},null,8,["options","onChange"])])]),_:1})])}var y=v(V,[["render",A]]);export{y as default};
