import{_ as i,t as s}from"./index.99a038d5.js";import{l as a,b as c,e as m,x as e,y as t}from"./vendor.6d83210b.js";const r={name:"ExpTimeAgo",data(){return{time:new Date,time2:s("2021-05-01","YYYY-MM-DD").toDate()}}};function u(d,x,f,p,o,v){const n=a("fx-time-ago"),l=a("fx-cell"),_=a("fx-group");return c(),m("div",null,[e(_,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(l,{label:"\u5F53\u524D",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time},null,8,["time"])]),_:1}),e(l,{label:"2021-05-01",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time2},null,8,["time"])]),_:1})]),_:1}),e(_,{title:"\u95F4\u9694"},{default:t(()=>[e(l,{label:"interval=2",class:"count-down-box"},{default:t(()=>[e(n,{time:o.time,interval:2},null,8,["time"])]),_:1})]),_:1})])}var w=i(r,[["render",u]]);export{w as default};
