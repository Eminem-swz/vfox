import{_ as v,a as C}from"./index.7a60f2fa.js";import{o as h,m as c,c as w}from"./data.ef73c827.js";import{j as E,p as i,E as k,r as V,o as j,c as F,a as n,w as u,f as r,I as O}from"./vendor.d6b2829d.js";const $=E({name:"ExpPickerView",setup(){const e="-",o=i([]),p=i([]),d=i([]),m=k(`2001${e}\u590F`),f=(t,g)=>({value:t.join(e),label:g.join(e)}),s=t=>t?t.split(e):[];function l(t){console.log("event",t)}function a(t){l(t),C(`change: ${t}`)}return{options:h,multiOptions:c,cascadeOptions:w,value:o,multValue:p,cascadeValue:d,formatValue:m,onChange:l,onChangeEvent:a,formatter:f,parser:s}}}),B={class:"exp-picker-view-box"},U={class:"exp-picker-view-header"},b={class:"exp-picker-view-body"};function y(e,o,p,d,m,f){const s=V("fx-picker-view"),l=V("fx-group");return j(),F("div",null,[n(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[n(s,{options:e.options,onChange:e.onChange,modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,8,["options","onChange","modelValue"])]),_:1}),n(l,{title:"\u591A\u5217"},{default:u(()=>[n(s,{options:e.multiOptions,onChange:e.onChange,modelValue:e.multValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.multValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),n(l,{title:"\u7EA7\u8054"},{default:u(()=>[n(s,{options:e.cascadeOptions,onChange:e.onChange,modelValue:e.cascadeValue,"onUpdate:modelValue":o[2]||(o[2]=a=>e.cascadeValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),n(l,{title:"formatter/parser"},{default:u(()=>[r("div",B,[r("div",U," \u5206\u5272\u7EBF\u201C-\u201D\uFF0Cv-model: "+O(e.formatValue),1),r("div",b,[n(s,{modelValue:e.formatValue,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formatValue=a),formatter:e.formatter,parser:e.parser,options:e.multiOptions,onChange:e.onChange},null,8,["modelValue","formatter","parser","options","onChange"])])])]),_:1}),n(l,{title:"change \u4E8B\u4EF6"},{default:u(()=>[n(s,{options:e.multiOptions,onChange:e.onChangeEvent,modelValue:e.multValue,"onUpdate:modelValue":o[4]||(o[4]=a=>e.multValue=a)},null,8,["options","onChange","modelValue"])]),_:1})])}var I=v($,[["render",y]]);export{I as default};
