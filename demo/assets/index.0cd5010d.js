import{s as r,t as d,m as b,a as c}from"./data.8bc95076.js";import{_ as v,a as _}from"./index.d7abadf4.js";import{d as f,r as l,m as p,e as h,f as m,z as t,A as n,F as x,g as i}from"./vendor.1f7be6ea.js";const V=f({name:"ExpTab",setup(){const e=a=>{console.log("change",a),_(`\u5207\u6362\u5230\u7B2C${a.index+1}\u4E2A`)};return{shortActiveValue:l(1),activeValue:l(1),shortTabList:r,tabList:d,mixTabList:b,subTabList:c,onChange:e}}}),g={class:"exp-tab-box"},C={class:"exp-tab-box"},T={class:"exp-tab-box"},F={class:"exp-tab-box"},L={class:"exp-tab-box"};function A(e,a,E,B,$,j){const o=p("fx-tab"),s=p("fx-group");return h(),m(x,null,[t(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[i("div",g,[t(o,{options:e.shortTabList,activeValue:e.shortActiveValue,"onUpdate:activeValue":a[0]||(a[0]=u=>e.shortActiveValue=u)},null,8,["options","activeValue"])])]),_:1}),t(s,{title:"\u6EDA\u52A8\uFF08\u9608\u503C scrollThreshold = 4\uFF09"},{default:n(()=>[i("div",C,[t(o,{options:e.tabList,activeValue:e.activeValue,"onUpdate:activeValue":a[1]||(a[1]=u=>e.activeValue=u)},null,8,["options","activeValue"])])]),_:1}),t(s,{title:"Mix"},{default:n(()=>[i("div",T,[t(o,{options:e.mixTabList},null,8,["options"])])]),_:1}),t(s,{title:"\u5E26\u526F\u6807\u7B7E"},{default:n(()=>[i("div",F,[t(o,{options:e.subTabList},null,8,["options"])])]),_:1}),t(s,{title:"change \u4E8B\u4EF6"},{default:n(()=>[i("div",L,[t(o,{options:e.shortTabList,onChange:e.onChange},null,8,["options","onChange"])])]),_:1})],64)}var D=v(V,[["render",A]]);export{D as default};
