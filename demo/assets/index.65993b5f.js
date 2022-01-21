import{_ as i,a as F}from"./index.5da8623e.js";import{d as h,r as c,l as n,b as B,e as _,y as e,z as u,I as f}from"./vendor.4df8ce31.js";const C=h({name:"ExpInput",setup(){const a=c(""),d=c("");function r(s){F(`\u5F53\u524D\u503C\u4E3A\uFF1A${s}`)}return{value:a,changeValue:d,onInput:r}}}),m=f("https://"),x=f(".com");function y(a,d,r,s,b,V){const t=n("fx-input"),o=n("fx-group"),l=n("fx-cell");return B(),_("div",null,[e(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[e(t,{type:"text",focus:"",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"}),e(t,{type:"text",modelValue:"\u7981\u7528",disabled:!0}),e(t,{type:"text",placeholder:"showLimit=true",showLimit:"",showClear:""})]),_:1}),e(o,{title:"textarea"},{default:u(()=>[e(t,{type:"textarea",placeholder:"showLimit=true",showLimit:""})]),_:1}),e(o,{title:"Slot prepend/append"},{default:u(()=>[e(t,{type:"text",focus:"",placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740"},{prepend:u(()=>[m]),_:1}),e(t,{type:"text",focus:"",placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740"},{append:u(()=>[x]),_:1})]),_:1}),e(o,{title:"\u4E0E Cell \u7EC4\u5408"},{default:u(()=>[e(l,{label:"\u6587\u672C"},{default:u(()=>[e(t,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"})]),_:1})]),_:1}),e(o,{title:"\u8BBE\u7F6E type \u7C7B\u578B"},{default:u(()=>[e(l,{label:"\u6587\u672C text"},{default:u(()=>[e(t,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"})]),_:1}),e(l,{label:"\u7535\u8BDD tel"},{default:u(()=>[e(t,{type:"tel",placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD"})]),_:1}),e(l,{label:"\u6574\u6570 digit"},{default:u(()=>[e(t,{type:"digit",placeholder:"\u8BF7\u8F93\u5165\u6574\u6570"})]),_:1}),e(l,{label:"\u6570\u5B57 number"},{default:u(()=>[e(t,{type:"number",placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"})]),_:1}),e(l,{label:"\u641C\u7D22 search"},{default:u(()=>[e(t,{type:"search",placeholder:"\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9"})]),_:1}),e(l,{label:"\u5BC6\u7801 password"},{default:u(()=>[e(t,{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})]),_:1}),e(l,{label:"\u6587\u672C textarea"},{default:u(()=>[e(t,{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C"})]),_:1})]),_:1}),e(o,{title:"\u5176\u4ED6"},{default:u(()=>[e(l,{label:"\u53EA\u8BFB readonly"},{default:u(()=>[e(t,{type:"text",modelValue:"\u53EA\u8BFB\u6587\u672C",readonly:!0})]),_:1}),e(l,{label:"\u7981\u7528 disabled"},{default:u(()=>[e(t,{type:"text",modelValue:"\u7981\u7528\u6587\u672C",disabled:!0})]),_:1}),e(l,{label:"\u53EF\u6E05\u9664 showClear"},{default:u(()=>[e(t,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",modelValue:"\u6587\u672C\u5185\u5BB9","show-clear":!0})]),_:1})]),_:1}),e(o,{title:"input"},{default:u(()=>[e(l,{label:"input"},{default:u(()=>[e(t,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C","show-clear":!0,modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=p=>a.value=p),onInput:a.onInput},null,8,["modelValue","onInput"])]),_:1}),e(l,{label:"change"},{default:u(()=>[e(t,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C","show-clear":!0,modelValue:a.changeValue,"onUpdate:modelValue":d[1]||(d[1]=p=>a.changeValue=p),onChange:a.onInput},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var g=i(C,[["render",y]]);export{g as default};
