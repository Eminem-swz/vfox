import{_ as C}from"./index.cc81463e.js";import{l as c,b as s,e as x,y as n,z as e,F as f,p as a,f as m,I as l,g as r,t as I,q as S}from"./vendor.d68a2f58.js";const B={name:"ExpSteps",data(){return{stepIndex:1,steps:[{title:"\u5DF2\u5B8C\u6210",content:"\u8FD9\u4E00\u6B65\u8FC7\u4E86\u54C8"},{title:"\u8FDB\u884C\u4E2D",content:"\u76EE\u524D\u5230\u8FD9\u4E00\u6B65"},{title:"\u5F85\u5904\u7406",content:"\u8FD8\u6CA1\u5230\u8FD9\u4E00\u6B65"}],orderSteps:[{content:"\u4E70\u5BB6\u4E0B\u5355"},{content:"\u5546\u5BB6\u63A5\u5355"},{content:"\u5546\u5BB6\u53D1\u8D27"},{content:"\u4E70\u5BB6\u63D0\u8D27"},{content:"\u4EA4\u6613\u5B8C\u6210"}]}}},N=l(" 2021-04-13 12:42:57 "),U=l(" \u3010\u73E0\u6D77\u5E02\u3011\u3010\u73E0\u6D77\u4E00\u90E8\u3011\u5FEB\u9012\u5C0F\u54E5\u6B63\u5728\u6D3E\u4EF6\uFF08"),V=m("a",{href:"tel:10000"},"10000",-1),b=l("\uFF09 "),z=l(" 2021-04-13 11:22:16 "),j=l(" 2021-04-13 09:04:03 "),E={class:"steps-next"},F=l(" \u4E0B\u4E00\u6B65 ");function L(O,i,q,w,o,D){const _=c("fx-step"),p=c("fx-steps"),u=c("fx-group"),v=c("fx-icon"),y=c("fx-button"),k=c("fx-fixed");return s(),x("div",null,[n(u,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[n(p,{activeIndex:o.stepIndex,"onUpdate:activeIndex":i[0]||(i[0]=t=>o.stepIndex=t)},{default:e(()=>[(s(!0),x(f,null,a(o.steps,(t,d)=>(s(),r(_,{key:d,title:t.title},{default:e(()=>[l(I(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(u,{title:"\u5C0F\u70B9\u6A21\u5F0F"},{default:e(()=>[n(p,{activeIndex:o.stepIndex,"onUpdate:activeIndex":i[1]||(i[1]=t=>o.stepIndex=t),dot:""},{default:e(()=>[(s(!0),x(f,null,a(o.steps,(t,d)=>(s(),r(_,{key:d,title:t.title},{default:e(()=>[l(I(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(u,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:e(()=>[n(p,{activeIndex:o.stepIndex,"onUpdate:activeIndex":i[2]||(i[2]=t=>o.stepIndex=t)},{default:e(()=>[(s(!0),x(f,null,a(o.steps,(t,d)=>(s(),r(_,{key:d,title:t.title},{step:e(({finish:g,active:h})=>[g?(s(),r(v,{key:0,icon:"CheckOutlined"})):h?(s(),r(v,{key:1,icon:"LoadingOutlined",spin:""})):S("",!0)]),default:e(()=>[l(" "+I(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(u,{title:"\u6A2A\u5411"},{default:e(()=>[n(p,{activeIndex:o.stepIndex,"onUpdate:activeIndex":i[3]||(i[3]=t=>o.stepIndex=t),horizontal:""},{default:e(()=>[(s(!0),x(f,null,a(o.steps,(t,d)=>(s(),r(_,{key:d,title:t.title},{default:e(()=>[l(I(t.content),1)]),_:2},1032,["title"]))),128))]),_:1},8,["activeIndex"])]),_:1}),n(u,{title:"\u6A2A\u5411\uFF08\u4E0D\u8981\u6807\u9898 & \u5C0F\u70B9\uFF09"},{default:e(()=>[n(p,{activeIndex:1,horizontal:"",dot:""},{default:e(()=>[(s(!0),x(f,null,a(o.orderSteps,(t,d)=>(s(),r(_,{key:d},{default:e(()=>[l(I(t.content),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(u,{title:"Slot title"},{default:e(()=>[n(p,null,{default:e(()=>[n(_,{title:"\u3010\u73E0\u6D77\u5E02\u3011\u5FEB\u4EF6\u5DF2\u9001\u8FBE\u3010\u6B63\u65B9\u4E91\u521B\u56ED\u3011\uFF0C\u611F\u8C22\u60A8\u4F7F\u7528\u4E2D\u901A\u5FEB\u9012"},{default:e(()=>[N]),_:1}),n(_,null,{title:e(()=>[U,V,b]),default:e(()=>[z]),_:1}),n(_,{title:"\u3010\u73E0\u6D77\u5E02\u3011\u5FEB\u4EF6\u79BB\u5F00\u3010\u73E0\u6D77\u4E2D\u5FC3\u3011\u5DF2\u53D1\u5F80\u3010\u73E0\u6D77\u4E00\u90E8\u3011"},{default:e(()=>[j]),_:1})]),_:1})]),_:1}),n(k,null,{default:e(()=>[m("div",E,[n(y,{onClick:i[4]||(i[4]=t=>o.stepIndex=(o.stepIndex+1)%o.steps.length),type:"primary"},{default:e(()=>[F]),_:1})])]),_:1})])}var G=C(B,[["render",L]]);export{G as default};
