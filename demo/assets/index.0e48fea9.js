import{_ as p,s as r}from"./index.e829a249.js";import{r as d,o as h,c as _,a as e,w as o}from"./vendor.ddac68c4.js";const f=["\u51B0\u7BB1","\u6D17\u8863\u673A","\u51C0\u5316\u5668"];const x={name:"ExpSearchBar",data(){return{text:1,placeholders:f}},methods:{onCancel(){r("\u53D6\u6D88\u6309\u94AE\u70B9\u51FB")},onEvent({type:l}){r(l)},onInput(l,c){c(l.text?"ABCD".split("").map(u=>({text:`${l.text} ${u}`,tags:["tag1","tag2"]})):[])},onInput2(l,c){r(`\u8F93\u5165\u4E86 ${l.text}`),this.onInput(l,c)},onSearch({text:l}){r(`\u641C\u7D22\u4E86 ${l}`)},onClick(l){console.log(l),r(`\u641C\u7D22\u8BCD ${l.searchText}`)}}};function i(l,c,u,m,s,a){const n=d("fx-search-bar"),t=d("fx-group");return h(),_("div",null,[e(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[e(n)]),_:1}),e(t,{title:"\u641C\u7D22\u5EFA\u8BAE"},{default:o(()=>[e(n,{onInput:a.onInput},null,8,["onInput"])]),_:1}),e(t,{title:"\u663E\u793A\u53D6\u6D88\u6309\u94AE"},{default:o(()=>[e(n,{"show-cancel":""})]),_:1}),e(t,{title:"\u8BBE\u7F6E\u5019\u9009\u9879"},{default:o(()=>[e(n,{placeholders:s.placeholders},null,8,["placeholders"])]),_:1}),e(t,{title:"\u6DF1\u8272\u9002\u914D"},{default:o(()=>[e(n,{class:"search-bar-dark-style","show-cancel":"",ghost:""})]),_:1}),e(t,{title:"\u53EA\u8BFB\uFF08readonly=true\uFF09"},{default:o(()=>[e(n,{readonly:"",placeholders:s.placeholders},null,8,["placeholders"])]),_:1}),e(t,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[e(n,{"show-cancel":"",placeholders:s.placeholders,onInput:a.onInput2,onFocus:a.onEvent,onBlur:a.onEvent,onCancel:a.onCancel,onSearch:a.onSearch},null,8,["placeholders","onInput","onFocus","onBlur","onCancel","onSearch"])]),_:1}),e(t,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08readonly=true\uFF09"},{default:o(()=>[e(n,{readonly:"",placeholders:s.placeholders,onClick:a.onClick},null,8,["placeholders","onClick"])]),_:1})])}var I=p(x,[["render",i]]);export{I as default};
