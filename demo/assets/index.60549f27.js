import{_ as c,k as i}from"./index.e829a249.js";import{r as a,o as s,c as r,a as e,w as t}from"./vendor.ddac68c4.js";const m={name:"ExpTimeAgo",data(){return{time:new Date,time2:i("2021-05-01","YYYY-MM-DD").toDate()}}};function u(d,f,x,p,o,v){const n=a("fx-time-ago"),l=a("fx-cell"),_=a("fx-group");return s(),r("div",null,[e(_,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(l,{label:"\u5F53\u524D",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time},null,8,["time"])]),_:1}),e(l,{label:"2021-05-01",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time2},null,8,["time"])]),_:1})]),_:1}),e(_,{title:"\u95F4\u9694"},{default:t(()=>[e(l,{label:"interval=2",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time,interval:2},null,8,["time"])]),_:1})]),_:1})])}var w=c(m,[["render",u]]);export{w as default};
