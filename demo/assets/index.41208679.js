import{_ as u,a}from"./index.a3bacd90.js";import{r as _,c as p,a as o,w as e,o as f,f as l,I as d}from"./vendor.0b064a58.js";const w={name:"ScrollView",methods:{onRefreshing(s,n){setTimeout(()=>{n()},2e3)},onScrollUpper({direction:s}){a.showToast(`\u6EDA\u52A8\u5230 ${s}`)},onScrollLower({direction:s}){a.showToast(`\u6EDA\u52A8\u5230 ${s}`)}}},v={class:"scroll-view"},h=l("div",{class:"scroll-view-h-400"},[l("p",null,"\u5782\u76F4\u6EDA\u52A8\u6761"),l("p",null,'scroll-y="true"')],-1),x=l("div",{class:"scroll-view-w-750"},[l("p",null,'\u6C34\u5E73\u6EDA\u52A8\u6761 scroll-x="true"')],-1),g=l("div",{class:"scroll-view-wh"},[l("p",null,"\u5782\u76F4\u6C34\u5E73\u6EDA\u52A8\u6761"),l("p",null,'scroll-y="true"'),l("p",null,'scroll-x="true"'),l("p",null,"\u76D1\u542C\u5230\u9876/\u5E95/\u6700\u5DE6/\u6700\u53F3\u7684\u4E8B\u4EF6")],-1),m=l("div",{class:"scroll-view-h-400"},[l("p",null,"\u5F00\u542F4\u4E2A\u65B9\u5411\u7684\u62C9\u52A8\u5237\u65B0"),l("p",null,'scroll-y="true"'),l("p",null,`pull-directions="['down', 'right', 'up', 'left']"`),l("p",null,"\u7531\u4E8E\u6709 scroll-y\uFF0C\u4E0A\u62C9\u5237\u65B0\u8981\u5148\u6EDA\u5230\u6700\u5E95\u90E8")],-1),y={class:"scroll-view-indicator"},S=l("div",{class:"scroll-view-h-400"},[l("p",null,"\u81EA\u5B9A\u4E0B\u62C9\u4E49\u6307\u793A\u5668"),l("p",null,'scroll-y="true"'),l("p",null,`pull-directions="['down']"`)],-1);function b(s,n,R,T,L,t){const r=_("fx-scroll-view"),c=_("fx-group");return f(),p("div",v,[o(c,{title:"\u5782\u76F4\u6EDA\u52A8"},{default:e(()=>[o(r,{class:"scroll-view-box","scroll-y":""},{default:e(()=>[h]),_:1})]),_:1}),o(c,{title:"\u6C34\u5E73\u6EDA\u52A8"},{default:e(()=>[o(r,{class:"scroll-view-box","scroll-x":""},{default:e(()=>[x]),_:1})]),_:1}),o(c,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[o(r,{class:"scroll-view-box","scroll-x":"","scroll-y":"",onScrollToUpper:t.onScrollUpper,onScrollToLower:t.onScrollLower},{default:e(()=>[g]),_:1},8,["onScrollToUpper","onScrollToLower"])]),_:1}),o(c,{title:"\u4E0B\u62C9\u5237\u65B0"},{default:e(()=>[o(r,{class:"scroll-view-box","enable-pull-directions":["down","right","up","left"],"scroll-y":"",onRefreshing:t.onRefreshing},{default:e(()=>[m]),_:1},8,["onRefreshing"])]),_:1}),o(c,{title:"\u4E0B\u62C9\u5237\u65B0\uFF08\u81EA\u5B9A\u4E49\u6307\u793A\u5668\uFF09"},{default:e(()=>[o(r,{class:"scroll-view-box","enable-pull-directions":["down"],"scroll-y":"",onRefreshing:t.onRefreshing},{indicator:e(i=>[l("div",y," \u65B9\u5411\uFF1A"+d(i.pullDirection)+" \u72B6\u6001\uFF1A"+d(i.pullRefreshState),1)]),default:e(()=>[S]),_:1},8,["onRefreshing"])]),_:1})])}var V=u(w,[["render",b]]);export{V as default};
