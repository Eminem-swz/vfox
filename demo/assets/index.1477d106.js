import{_}from"./index.33cd0f73.js";import{d as u,m as n,e as f,f as d,z as e,A as t,F as m}from"./vendor.1f7be6ea.js";const x=u({name:"ExpTabView",setup(){return{onRefreshing:(p,i)=>{setTimeout(()=>{i()},2e3)}}}});function b(o,p,i,w,h,v){const a=n("fx-empty"),l=n("fx-scroll-view"),s=n("fx-tab-view-item"),r=n("fx-tab-view"),c=n("fx-group");return f(),d(m,null,[e(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(r,{class:"exp-tabView"},{default:t(()=>[e(s,{name:"Tab 1"},{default:t(()=>[e(l,{class:"exp-tabView-scroll-view","enable-pull-directions":["down"],"scroll-y":"","scroll-x":"",onRefreshing:o.onRefreshing},{default:t(()=>[e(a,{class:"exp-tabView-empty",description:"Tab 1 \u4E0B\u62C9\u5237\u65B0"})]),_:1},8,["onRefreshing"])]),_:1}),e(s,{name:"Tab 2"},{default:t(()=>[e(a,{class:"exp-tabView-empty",description:"Tab 2"})]),_:1})]),_:1})]),_:1}),e(c,{title:"\u5782\u76F4"},{default:t(()=>[e(r,{class:"exp-tabView",initialVertical:!0,scrollThreshold:1,backUpperWhenChange:!0},{default:t(()=>[e(s,{name:"Tab 1"},{default:t(()=>[e(l,{class:"exp-tabView-scroll-view","enable-pull-directions":["down"],"scroll-y":"",onRefreshing:o.onRefreshing},{default:t(()=>[e(a,{class:"exp-tabView-empty",description:"Tab 1 \u4E0B\u62C9\u5237\u65B0"})]),_:1},8,["onRefreshing"])]),_:1}),e(s,{name:"Tab 2"},{default:t(()=>[e(a,{class:"exp-tabView-empty",description:"Tab 2"})]),_:1})]),_:1})]),_:1})],64)}var V=_(x,[["render",b]]);export{V as default};
