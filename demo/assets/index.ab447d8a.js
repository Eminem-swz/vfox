import{_ as c,n as i}from"./index.eb8a9e4c.js";import{r as a,c as s,a as e,w as t,o as r}from"./vendor.d14b3c37.js";const m={name:"TimeAgo",data(){return{time:new Date,time2:i("2021-05-01","YYYY-MM-DD").toDate()}}};function u(d,f,x,p,n,v){const o=a("fx-time-ago"),l=a("fx-cell"),_=a("fx-group");return r(),s("div",null,[e(_,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(l,{label:"\u5F53\u524D",class:"count-down-box"},{default:t(()=>[e(o,{time:n.time},null,8,["time"])]),_:1}),e(l,{label:"2021-05-01",class:"count-down-box"},{default:t(()=>[e(o,{time:n.time2},null,8,["time"])]),_:1})]),_:1}),e(_,{title:"\u95F4\u9694"},{default:t(()=>[e(l,{label:"interval=2",class:"count-down-box"},{default:t(()=>[e(o,{time:n.time,interval:2},null,8,["time"])]),_:1})]),_:1})])}var g=c(m,[["render",u]]);export{g as default};
