import{_ as i,j as s}from"./index.8aaae89f.js";import{r as l,o as c,c as r,a as e,w as t}from"./vendor.0b064a58.js";const m={name:"ExpTimeAgo",data(){return{time:new Date,time2:s("2021-05-01","YYYY-MM-DD").toDate()}}};function u(f,d,x,p,o,v){const n=l("fx-time-ago"),a=l("fx-cell"),_=l("fx-group");return c(),r("div",null,[e(_,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(a,{label:"\u5F53\u524D",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time},null,8,["time"])]),_:1}),e(a,{label:"2021-05-01",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time2},null,8,["time"])]),_:1})]),_:1}),e(_,{title:"\u95F4\u9694"},{default:t(()=>[e(a,{label:"interval=2",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time,interval:2},null,8,["time"])]),_:1})]),_:1})])}var w=i(m,[["render",u]]);export{w as default};