import{_ as C,a as h}from"./index.c5a743f2.js";import{o as c,m as v,c as k}from"./data.41a26c3b.js";import{d as w,r as i,m as f,e as E,f as F,z as n,A as u,F as O,g as r,t as $}from"./vendor.1f7be6ea.js";const b=w({name:"ExpPickerView",setup(){const e="-",o=i([]),p=i([]),d=i([]),m=i(`2001${e}\u590F`),V=(l,g)=>({value:l.join(e),label:g.join(e)}),s=l=>l?l.split(e):[];function t(l){console.log("change",l)}function a(l){t(l),h(`change: ${l}`)}return{options:c,multiOptions:v,cascadeOptions:k,colValue:o,multiValue:p,cascadeValue:d,formatValue:m,onChange:t,onChangeEvent:a,formatter:V,parser:s}}}),j={class:"exp-pickerView-box"},B={class:"exp-pickerView-header"},U={class:"exp-pickerView-body"};function y(e,o,p,d,m,V){const s=f("fx-picker-view"),t=f("fx-group");return E(),F(O,null,[n(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[n(s,{options:e.options,onChange:e.onChange,modelValue:e.colValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.colValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),n(t,{title:"\u591A\u5217"},{default:u(()=>[n(s,{options:e.multiOptions,onChange:e.onChange,modelValue:e.multiValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.multiValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),n(t,{title:"\u7EA7\u8054"},{default:u(()=>[n(s,{options:e.cascadeOptions,onChange:e.onChange,modelValue:e.cascadeValue,"onUpdate:modelValue":o[2]||(o[2]=a=>e.cascadeValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),n(t,{title:"formatter/parser"},{default:u(()=>[r("div",j,[r("div",B," \u5206\u5272\u7EBF\u201C-\u201D\uFF0Cv-model: "+$(e.formatValue),1),r("div",U,[n(s,{modelValue:e.formatValue,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formatValue=a),formatter:e.formatter,parser:e.parser,options:e.multiOptions,onChange:e.onChange},null,8,["modelValue","formatter","parser","options","onChange"])])])]),_:1}),n(t,{title:"change \u4E8B\u4EF6"},{default:u(()=>[n(s,{options:e.multiOptions,onChange:e.onChangeEvent,modelValue:e.multiValue,"onUpdate:modelValue":o[4]||(o[4]=a=>e.multiValue=a)},null,8,["options","onChange","modelValue"])]),_:1})],64)}var z=C(b,[["render",y]]);export{z as default};
