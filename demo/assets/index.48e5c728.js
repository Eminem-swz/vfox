import{_ as c,a as _}from"./index.ba5f16d0.js";import{r as d,c as f,a as e,w as t,o as i}from"./vendor.d14b3c37.js";const x={name:"Input",data(){return{value:""}},methods:{onInput({value:r}){_.showToast(`\u5F53\u524D\u503C\u4E3A\uFF1A${r}`)}}};function h(r,p,m,b,u,n){const l=d("fx-input"),o=d("fx-group"),a=d("fx-cell");return i(),f("div",null,[e(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(l,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"}),e(l,{type:"text",modelValue:"\u7981\u7528",disabled:!0}),e(l,{type:"text",placeholder:"showLimit=true",showLimit:"",showClear:""})]),_:1}),e(o,{title:"textarea"},{default:t(()=>[e(l,{type:"textarea",placeholder:"showLimit=true",showLimit:""})]),_:1}),e(o,{title:"\u4E0E Cell \u7EC4\u5408"},{default:t(()=>[e(a,{label:"\u6587\u672C"},{default:t(()=>[e(l,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"})]),_:1})]),_:1}),e(o,{title:"\u8BBE\u7F6E type \u7C7B\u578B"},{default:t(()=>[e(a,{label:"\u6587\u672C text"},{default:t(()=>[e(l,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"})]),_:1}),e(a,{label:"\u7535\u8BDD tel"},{default:t(()=>[e(l,{type:"tel",placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD"})]),_:1}),e(a,{label:"\u6574\u6570 digit"},{default:t(()=>[e(l,{type:"digit",placeholder:"\u8BF7\u8F93\u5165\u6574\u6570"})]),_:1}),e(a,{label:"\u6570\u5B57 number"},{default:t(()=>[e(l,{type:"number",placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"})]),_:1}),e(a,{label:"\u641C\u7D22 search"},{default:t(()=>[e(l,{type:"search",placeholder:"\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9"})]),_:1}),e(a,{label:"\u5BC6\u7801 password"},{default:t(()=>[e(l,{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})]),_:1}),e(a,{label:"\u6587\u672C textarea"},{default:t(()=>[e(l,{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C"})]),_:1})]),_:1}),e(o,{title:"\u5176\u4ED6"},{default:t(()=>[e(a,{label:"\u53EA\u8BFB readonly"},{default:t(()=>[e(l,{type:"text",modelValue:"\u53EA\u8BFB\u6587\u672C",readonly:!0})]),_:1}),e(a,{label:"\u7981\u7528 disabled"},{default:t(()=>[e(l,{type:"text",modelValue:"\u53EA\u8BFB\u6587\u672C",disabled:!0})]),_:1}),e(a,{label:"\u53EF\u6E05\u9664 showClear"},{default:t(()=>[e(l,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",modelValue:"\u6587\u672C\u5185\u5BB9","show-clear":!0})]),_:1})]),_:1}),e(o,{title:"input \u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[e(a,{label:"\u6587\u672C"},{default:t(()=>[e(l,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C","show-clear":!0,modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=s=>u.value=s),onInput:n.onInput},null,8,["modelValue","onInput"])]),_:1})]),_:1})])}var V=c(x,[["render",h]]);export{V as default};
