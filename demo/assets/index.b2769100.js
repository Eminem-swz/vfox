import{_ as f,a as i}from"./index.11386e99.js";import{d as E,m as p,e as x,f as w,z as e,A as u,g as l,t as a}from"./vendor.1f7be6ea.js";const A=E({name:"ExpScrollView",setup(){return{onRefreshing:(s,t)=>{setTimeout(()=>{t()},2e3)},onScrollUpper:({direction:s})=>{i(`\u6EDA\u52A8\u5230 ${s}`)},onScrollLower:({direction:s})=>{i(`\u6EDA\u52A8\u5230 ${s}`)}}}}),h={class:"exp-scrollView"},F=l("div",{class:"exp-scrollView-h-400"},[l("p",null,"\u5782\u76F4\u6EDA\u52A8\u6761"),l("p",null,'scroll-y="true"')],-1),B=l("div",{class:"exp-scrollView-w-750"},[l("p",null,'\u6C34\u5E73\u6EDA\u52A8\u6761 scroll-x="true"')],-1),g=l("div",{class:"exp-scrollView-wh"},[l("p",null,"\u5782\u76F4\u6C34\u5E73\u6EDA\u52A8\u6761"),l("p",null,'scroll-y="true"'),l("p",null,'scroll-x="true"'),l("p",null,"\u76D1\u542C\u5230\u9876/\u5E95/\u6700\u5DE6/\u6700\u53F3\u7684\u4E8B\u4EF6")],-1),v=l("div",{class:"exp-scrollView-h-400"},[l("p",null,"\u5F00\u542F4\u4E2A\u65B9\u5411\u7684\u62C9\u52A8\u5237\u65B0"),l("p",null,'scroll-y="true"'),l("p",null,`pull-directions="['down', 'right', 'up', 'left']"`),l("p",null,"\u7531\u4E8E\u6709 scroll-y\uFF0C\u4E0A\u62C9\u5237\u65B0\u8981\u5148\u6EDA\u5230\u6700\u5E95\u90E8")],-1),V={class:"exp-scrollView-indicator"},C=l("div",{class:"exp-scrollView-h-400"},[l("p",null,"\u81EA\u5B9A\u4E0B\u62C9\u4E49\u6307\u793A\u5668"),l("p",null,'scroll-y="true"'),l("p",null,`pull-directions="['down']"`)],-1);function m(o,d,_,s,t,D){const r=p("fx-scroll-view"),n=p("fx-group");return x(),w("div",h,[e(n,{title:"\u5782\u76F4\u6EDA\u52A8"},{default:u(()=>[e(r,{class:"exp-scrollView-box","scroll-y":""},{default:u(()=>[F]),_:1})]),_:1}),e(n,{title:"\u6C34\u5E73\u6EDA\u52A8"},{default:u(()=>[e(r,{class:"exp-scrollView-box","scroll-x":""},{default:u(()=>[B]),_:1})]),_:1}),e(n,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:u(()=>[e(r,{class:"exp-scrollView-box","scroll-x":"","scroll-y":"",onScrollToUpper:o.onScrollUpper,onScrollToLower:o.onScrollLower},{default:u(()=>[g]),_:1},8,["onScrollToUpper","onScrollToLower"])]),_:1}),e(n,{title:"\u4E0B\u62C9\u5237\u65B0"},{default:u(()=>[e(r,{class:"exp-scrollView-box","enable-pull-directions":["down","right","up","left"],"scroll-y":"",onRefreshing:o.onRefreshing},{default:u(()=>[v]),_:1},8,["onRefreshing"])]),_:1}),e(n,{title:"\u4E0B\u62C9\u5237\u65B0\uFF08\u81EA\u5B9A\u4E49\u6307\u793A\u5668\uFF09"},{default:u(()=>[e(r,{class:"exp-scrollView-box","enable-pull-directions":["down"],"scroll-y":"",onRefreshing:o.onRefreshing},{indicator:u(c=>[l("div",V," \u65B9\u5411\uFF1A"+a(c.pullDirection)+" \u72B6\u6001\uFF1A"+a(c.pullRefreshState),1)]),default:u(()=>[C]),_:1},8,["onRefreshing"])]),_:1})])}var R=f(A,[["render",m]]);export{R as default};
