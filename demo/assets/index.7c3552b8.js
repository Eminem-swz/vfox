import{_ as m}from"./index.11386e99.js";import{d as A,r as k,m as f,e as o,f as E,z as n,A as e,F as _,q as F,g as B,I as s,h as a,t as c,s as y}from"./vendor.1f7be6ea.js";const g=A({name:"ExpSteps",setup(){return{stepIndex:k(1),steps:[{title:"\u5DF2\u5B8C\u6210",content:"\u8FD9\u4E00\u6B65\u8FC7\u4E86\u54C8"},{title:"\u8FDB\u884C\u4E2D",content:"\u76EE\u524D\u5230\u8FD9\u4E00\u6B65"},{title:"\u5F85\u5904\u7406",content:"\u8FD8\u6CA1\u5230\u8FD9\u4E00\u6B65"}],orderSteps:[{content:"\u4E70\u5BB6\u4E0B\u5355"},{content:"\u5546\u5BB6\u63A5\u5355"},{content:"\u5546\u5BB6\u53D1\u8D27"},{content:"\u4E70\u5BB6\u63D0\u8D27"},{content:"\u4EA4\u6613\u5B8C\u6210"}]}}}),h=s(" 2021-04-13 12:42:57 "),S=s(" \u3010\u73E0\u6D77\u5E02\u3011\u3010\u73E0\u6D77\u4E00\u90E8\u3011\u5FEB\u9012\u5C0F\u54E5\u6B63\u5728\u6D3E\u4EF6\uFF08"),$=B("a",{href:"tel:10000"},"10000",-1),N=s("\uFF09 "),U=s(" 2021-04-13 11:22:16 "),V=s(" 2021-04-13 09:04:03 "),b={class:"exp-steps-next"},z=s(" \u4E0B\u4E00\u6B65 ");function j(u,d,L,O,q,w){const i=f("fx-step"),p=f("fx-steps"),r=f("fx-group"),x=f("fx-icon"),D=f("fx-button"),I=f("fx-fixed");return o(),E("div",null,[n(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[n(p,{activeIndex:u.stepIndex,"onUpdate:activeIndex":d[0]||(d[0]=t=>u.stepIndex=t)},{default:e(()=>[(o(!0),E(_,null,F(u.steps,(t,l)=>(o(),a(i,{key:l,title:t.title},{default:e(()=>[s(c(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(r,{title:"\u5C0F\u70B9\u6A21\u5F0F"},{default:e(()=>[n(p,{activeIndex:u.stepIndex,"onUpdate:activeIndex":d[1]||(d[1]=t=>u.stepIndex=t),dot:""},{default:e(()=>[(o(!0),E(_,null,F(u.steps,(t,l)=>(o(),a(i,{key:l,title:t.title},{default:e(()=>[s(c(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(r,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:e(()=>[n(p,{activeIndex:u.stepIndex,"onUpdate:activeIndex":d[2]||(d[2]=t=>u.stepIndex=t)},{default:e(()=>[(o(!0),E(_,null,F(u.steps,(t,l)=>(o(),a(i,{key:l,title:t.title},{step:e(({finish:v,active:C})=>[v?(o(),a(x,{key:0,icon:"CheckOutlined"})):C?(o(),a(x,{key:1,icon:"LoadingOutlined",spin:""})):y("",!0)]),default:e(()=>[s(" "+c(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(r,{title:"\u6A2A\u5411"},{default:e(()=>[n(p,{activeIndex:u.stepIndex,"onUpdate:activeIndex":d[3]||(d[3]=t=>u.stepIndex=t),horizontal:""},{default:e(()=>[(o(!0),E(_,null,F(u.steps,(t,l)=>(o(),a(i,{key:l,title:t.title},{default:e(()=>[s(c(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(r,{title:"\u6A2A\u5411\uFF08\u4E0D\u8981\u6807\u9898 & \u5C0F\u70B9\uFF09"},{default:e(()=>[n(p,{activeIndex:1,horizontal:"",dot:""},{default:e(()=>[(o(!0),E(_,null,F(u.orderSteps,(t,l)=>(o(),a(i,{key:l},{default:e(()=>[s(c(t.content),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(r,{title:"Slot title"},{default:e(()=>[n(p,null,{default:e(()=>[n(i,{title:"\u3010\u73E0\u6D77\u5E02\u3011\u5FEB\u4EF6\u5DF2\u9001\u8FBE\u3010\u6B63\u65B9\u4E91\u521B\u56ED\u3011\uFF0C\u611F\u8C22\u60A8\u4F7F\u7528\u4E2D\u901A\u5FEB\u9012"},{default:e(()=>[h]),_:1}),n(i,null,{title:e(()=>[S,$,N]),default:e(()=>[U]),_:1}),n(i,{title:"\u3010\u73E0\u6D77\u5E02\u3011\u5FEB\u4EF6\u79BB\u5F00\u3010\u73E0\u6D77\u4E2D\u5FC3\u3011\u5DF2\u53D1\u5F80\u3010\u73E0\u6D77\u4E00\u90E8\u3011"},{default:e(()=>[V]),_:1})]),_:1})]),_:1}),n(I,null,{default:e(()=>[B("div",b,[n(D,{onClick:d[4]||(d[4]=t=>u.stepIndex=(u.stepIndex+1)%u.steps.length),type:"primary"},{default:e(()=>[z]),_:1})])]),_:1})])}var H=m(g,[["render",j]]);export{H as default};
