import{_ as C,a as r}from"./index.4c76766c.js";import{d as v,r as w,l as i,b as B,e as F,y as o,z as u,I as d,t as n,f as p}from"./vendor.4df8ce31.js";const c=v({name:"ExpCountDown",setup(){const t=w(!1),s=a=>{console.log(a),r("\u5DF2\u6682\u505C")},E=a=>{console.log(a),r("\u7EE7\u7EED\u8BA1\u65F6")},_=a=>{console.log(a),r("\u8BA1\u65F6\u7ED3\u675F")};return{time:300*1e3,time2:1.5*24*3600*1e3,time3:300*1e3,time4:100*1e3,time5:300*1e3,paused:t,onPause:s,onResume:E,onEnd:_}}}),g={class:"count-down-time-item"},A={class:"count-down-time-item"},D={class:"count-down-time-item"},y={class:"count-down-time-r"},U=d(" \u91CD\u7F6E ");function $(t,s,E,_,a,k){const m=i("fx-count-down"),l=i("fx-cell"),f=i("fx-group"),b=i("fx-button");return B(),F("div",null,[o(f,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[o(l,{label:"\u9ED8\u8BA4",class:"count-down-box"},{default:u(()=>[o(m,{timestamp:t.time,"onUpdate:timestamp":s[0]||(s[0]=e=>t.time=e)},null,8,["timestamp"])]),_:1}),o(l,{label:"\u663E\u793A\u5929\u6570",class:"count-down-box"},{default:u(()=>[o(m,{timestamp:t.time2,"onUpdate:timestamp":s[1]||(s[1]=e=>t.time2=e),showDays:""},null,8,["timestamp"])]),_:1})]),_:1}),o(f,{title:"Slot"},{default:u(()=>[o(l,{label:"\u4E2D\u6587\u663E\u793A",class:"count-down-box"},{default:u(()=>[o(m,{timestamp:t.time3,"onUpdate:timestamp":s[2]||(s[2]=e=>t.time3=e)},{default:u(e=>[d(n(e.fullHours)+"\u65F6"+n(e.minutes)+"\u5206"+n(e.seconds)+"\u79D2 ",1)]),_:1},8,["timestamp"])]),_:1}),o(l,{label:"\u6BEB\u79D2",class:"count-down-box"},{default:u(()=>[o(m,{timestamp:t.time5,"onUpdate:timestamp":s[3]||(s[3]=e=>t.time5=e)},{default:u(e=>[d(n(e.fullHours)+":"+n(e.minutes)+":"+n(e.seconds)+"."+n(e.milliseconds),1)]),_:1},8,["timestamp"])]),_:1}),o(l,{label:"\u81EA\u5B9A\u4E49\u98CE\u683C",class:"count-down-box"},{default:u(()=>[o(m,{timestamp:t.time3,"onUpdate:timestamp":s[4]||(s[4]=e=>t.time3=e)},{default:u(e=>[p("span",g,n(e.fullHours),1),p("span",A,n(e.minutes),1),p("span",D,n(e.seconds),1)]),_:1},8,["timestamp"])]),_:1})]),_:1}),o(f,{title:"\u65F6\u95F4\u76D1\u542C"},{default:u(()=>[o(l,{label:"pause/resume/end",class:"count-down-box"},{default:u(()=>[p("div",y,[o(m,{timestamp:t.time4,"onUpdate:timestamp":s[5]||(s[5]=e=>t.time4=e),paused:t.paused,onPause:t.onPause,onResume:t.onResume,onEnd:t.onEnd},null,8,["timestamp","paused","onPause","onResume","onEnd"])]),o(b,{onClick:s[6]||(s[6]=e=>t.paused=!t.paused),size:"small"},{default:u(()=>[d(n(t.paused?"\u6062\u590D":"\u6682\u505C"),1)]),_:1}),o(b,{onClick:s[7]||(s[7]=e=>t.time4=100*1e3),size:"small",type:"danger"},{default:u(()=>[U]),_:1})]),_:1})]),_:1})])}var R=C(c,[["render",$]]);export{R as default};
