import{_ as h,a}from"./index.11386e99.js";import{d as i,m as s,e as f,f as F,z as e,A as t}from"./vendor.1f7be6ea.js";const B=["\u51B0\u7BB1","\u6D17\u8863\u673A","\u51C0\u5316\u5668"];const C=i({name:"ExpSearchBar",setup(){const u=()=>{a("\u53D6\u6D88\u6309\u94AE\u70B9\u51FB")},r=(o,n)=>{n(o.text?"ABCD".split("").map(l=>({text:`${o.text} ${l}`,tags:["tag1","tag2"]})):[])};return{placeholders:B,onFocus:()=>a("focus"),onBlur:()=>a("blur"),onCancel:u,onInput:r,onInput2:(o,n)=>{a(`\u8F93\u5165\u4E86 ${o.text}`),r(o,n)},onSearch:o=>{console.log("search",o),a(`\u641C\u7D22\u4E86 ${o.text}`)},onClick:o=>{console.log("field-click",o),a(`\u641C\u7D22\u8BCD ${o.text}`)}}}});function _(u,r,c,d,p,o){const n=s("fx-search-bar"),l=s("fx-group");return f(),F("div",null,[e(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(n)]),_:1}),e(l,{title:"\u641C\u7D22\u5EFA\u8BAE"},{default:t(()=>[e(n,{onInput:u.onInput},null,8,["onInput"])]),_:1}),e(l,{title:"\u663E\u793A\u53D6\u6D88\u6309\u94AE"},{default:t(()=>[e(n,{"show-cancel":""})]),_:1}),e(l,{title:"\u8BBE\u7F6E\u5019\u9009\u9879"},{default:t(()=>[e(n,{placeholders:u.placeholders},null,8,["placeholders"])]),_:1}),e(l,{title:"\u6DF1\u8272\u9002\u914D"},{default:t(()=>[e(n,{class:"search-bar-dark-style","show-cancel":"",ghost:""})]),_:1}),e(l,{title:"\u53EA\u8BFB\uFF08readonly=true\uFF09"},{default:t(()=>[e(n,{readonly:"",placeholders:u.placeholders},null,8,["placeholders"])]),_:1}),e(l,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[e(n,{"show-cancel":"",placeholders:u.placeholders,onInput:u.onInput2,onFocus:u.onFocus,onBlur:u.onBlur,onCancel:u.onCancel,onSearch:u.onSearch},null,8,["placeholders","onInput","onFocus","onBlur","onCancel","onSearch"])]),_:1}),e(l,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08readonly=true\uFF09"},{default:t(()=>[e(n,{readonly:"",placeholders:u.placeholders,onFieldClick:u.onClick},null,8,["placeholders","onFieldClick"])]),_:1})])}var m=h(C,[["render",_]]);export{m as default};
