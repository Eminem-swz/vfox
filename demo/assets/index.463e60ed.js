import{_ as l,a as _}from"./index.7a60f2fa.js";import{r as s,o as f,c as i,a as e,w as o,f as d,B as p}from"./vendor.d6b2829d.js";const u={name:"ExpCopy",methods:{onSuccess({text:t}){_({title:`${t}`,type:"success"})},onError(t){_({title:t.message,type:"fail"})}}},x={class:"copy-pad"},m=p("\u70B9\u51FB\u590D\u5236"),y={class:"copy-pad"},v=p("\u70B9\u51FB\u590D\u5236");function h(t,E,b,g,B,a){const c=s("fx-button"),n=s("fx-copy"),r=s("fx-group");return f(),i("div",null,[e(r,{title:"\u57FA\u672C\u7528\u6CD5"},{default:o(()=>[d("div",x,[e(n,{class:"copy-box",text:"\u590D\u5236\u7684\u6587\u672C"},{default:o(()=>[e(c,{type:"primary"},{default:o(()=>[m]),_:1})]),_:1})])]),_:1}),e(r,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[d("div",y,[e(n,{class:"copy-box",text:"\u590D\u5236\u7684\u6587\u672C2",onSuccess:a.onSuccess,onError:a.onError},{default:o(()=>[e(c,{type:"primary"},{default:o(()=>[v]),_:1})]),_:1},8,["onSuccess","onError"])])]),_:1})])}var C=l(u,[["render",h]]);export{C as default};
