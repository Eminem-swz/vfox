import{_ as l,a as _}from"./index.88d65a1c.js";import{r as s,c as i,a as e,w as o,o as u,f as d,A as p}from"./vendor.e8a7463a.js";const f={name:"Copy",methods:{onSuccess({text:t}){_.showToast({title:`${t}`,type:"success"})},onError(t){_.showToast({title:t.message,type:"fail"})}}},x={class:"copy-pad"},m=p("\u70B9\u51FB\u590D\u5236"),y={class:"copy-pad"},h=p("\u70B9\u51FB\u590D\u5236");function v(t,E,b,g,w,a){const c=s("fx-button"),n=s("fx-copy"),r=s("fx-group");return u(),i("div",null,[e(r,{title:"\u57FA\u672C\u7528\u6CD5"},{default:o(()=>[d("div",x,[e(n,{class:"copy-box",text:"\u590D\u5236\u7684\u6587\u672C"},{default:o(()=>[e(c,{type:"primary"},{default:o(()=>[m]),_:1})]),_:1})])]),_:1}),e(r,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[d("div",y,[e(n,{class:"copy-box",text:"\u590D\u5236\u7684\u6587\u672C2",onSuccess:a.onSuccess,onError:a.onError},{default:o(()=>[e(c,{type:"primary"},{default:o(()=>[h]),_:1})]),_:1},8,["onSuccess","onError"])])]),_:1})])}var B=l(f,[["render",v]]);export{B as default};
