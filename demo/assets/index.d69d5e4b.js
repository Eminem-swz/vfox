import{_ as x,a as r}from"./index.55f10eb5.js";import{r as a,c as b,a as s,w as n,o as w,A as d,I as m,f as p}from"./vendor.d14b3c37.js";const v={name:"CountDown",data(){return{time:300*1e3,time2:1.5*24*3600*1e3,time3:300*1e3,time4:100*1e3,time5:300*1e3,paused:!1}},methods:{onPause(l){console.log(l),r.showToast("\u5DF2\u6682\u505C")},onResume(l){console.log(l),r.showToast("\u7EE7\u7EED\u8BA1\u65F6")},onEnd(l){console.log(l),r.showToast("\u8BA1\u65F6\u7ED3\u675F")}}},g={class:"count-down-time-item"},U={class:"count-down-time-item"},y={class:"count-down-time-item"},C={class:"count-down-time-r"},E=d(" \u91CD\u7F6E ");function T(l,o,k,P,t,_){const i=a("fx-count-down"),u=a("fx-cell"),f=a("fx-group"),c=a("fx-button");return w(),b("div",null,[s(f,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[s(u,{label:"\u9ED8\u8BA4",class:"count-down-box"},{default:n(()=>[s(i,{timestamp:t.time,"onUpdate:timestamp":o[0]||(o[0]=e=>t.time=e)},null,8,["timestamp"])]),_:1}),s(u,{label:"\u663E\u793A\u5929\u6570",class:"count-down-box"},{default:n(()=>[s(i,{timestamp:t.time2,"onUpdate:timestamp":o[1]||(o[1]=e=>t.time2=e),showDays:""},null,8,["timestamp"])]),_:1})]),_:1}),s(f,{title:"Slot"},{default:n(()=>[s(u,{label:"\u4E2D\u6587\u663E\u793A",class:"count-down-box"},{default:n(()=>[s(i,{timestamp:t.time3,"onUpdate:timestamp":o[2]||(o[2]=e=>t.time3=e)},{default:n(e=>[d(m(e.fullHours)+"\u65F6"+m(e.minutes)+"\u5206"+m(e.seconds)+"\u79D2 ",1)]),_:1},8,["timestamp"])]),_:1}),s(u,{label:"\u6BEB\u79D2",class:"count-down-box"},{default:n(()=>[s(i,{timestamp:t.time5,"onUpdate:timestamp":o[3]||(o[3]=e=>t.time5=e)},{default:n(e=>[d(m(e.fullHours)+":"+m(e.minutes)+":"+m(e.seconds)+"."+m(e.milliseconds),1)]),_:1},8,["timestamp"])]),_:1}),s(u,{label:"\u81EA\u5B9A\u4E49\u98CE\u683C",class:"count-down-box"},{default:n(()=>[s(i,{timestamp:t.time3,"onUpdate:timestamp":o[4]||(o[4]=e=>t.time3=e)},{default:n(e=>[p("span",g,m(e.fullHours),1),p("span",U,m(e.minutes),1),p("span",y,m(e.seconds),1)]),_:1},8,["timestamp"])]),_:1})]),_:1}),s(f,{title:"\u65F6\u95F4\u76D1\u542C"},{default:n(()=>[s(u,{label:"pause/resume/end",class:"count-down-box"},{default:n(()=>[p("div",C,[s(i,{timestamp:t.time4,"onUpdate:timestamp":o[5]||(o[5]=e=>t.time4=e),paused:t.paused,onPause:_.onPause,onResume:_.onResume,onEnd:_.onEnd},null,8,["timestamp","paused","onPause","onResume","onEnd"])]),s(c,{onClick:o[6]||(o[6]=e=>t.paused=!t.paused),size:"small"},{default:n(()=>[d(m(t.paused?"\u6062\u590D":"\u6682\u505C"),1)]),_:1}),s(c,{onClick:o[7]||(o[7]=e=>t.time4=100*1e3),size:"small",type:"danger"},{default:n(()=>[E]),_:1})]),_:1})]),_:1})])}var H=x(v,[["render",T]]);export{H as default};
