import{_ as f}from"./index.02706d4f.js";import{l as a,b as d,e as p,y as e,z as t}from"./vendor.d68a2f58.js";const m={name:"ExpTabView",data(){return{activeName:1}},methods:{onRefreshing(_,o){setTimeout(()=>{o()},2e3)}}};function b(_,o,u,v,w,i){const n=a("fx-empty"),l=a("fx-scroll-view"),s=a("fx-tab-view-item"),r=a("fx-tab-view"),c=a("fx-group");return d(),p("div",null,[e(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(r,{class:"tab-view"},{default:t(()=>[e(s,{name:"Tab 1"},{default:t(()=>[e(l,{class:"tab-view-scroll-view","enable-pull-directions":["down"],"scroll-y":"","scroll-x":"",onRefreshing:i.onRefreshing},{default:t(()=>[e(n,{class:"tab-view-empty",description:"Tab 1 \u4E0B\u62C9\u5237\u65B0"})]),_:1},8,["onRefreshing"])]),_:1}),e(s,{name:"Tab 2"},{default:t(()=>[e(n,{class:"tab-view-empty",description:"Tab 2"})]),_:1})]),_:1})]),_:1}),e(c,{title:"\u5782\u76F4"},{default:t(()=>[e(r,{class:"tab-view",initialVertical:!0,scrollThreshold:1,backUpperWhenChange:!0},{default:t(()=>[e(s,{name:"Tab 1"},{default:t(()=>[e(l,{class:"tab-view-scroll-view","enable-pull-directions":["down"],"scroll-y":"",onRefreshing:i.onRefreshing},{default:t(()=>[e(n,{class:"tab-view-empty",description:"Tab 1 \u4E0B\u62C9\u5237\u65B0"})]),_:1},8,["onRefreshing"])]),_:1}),e(s,{name:"Tab 2"},{default:t(()=>[e(n,{class:"tab-view-empty",description:"Tab 2"})]),_:1})]),_:1})]),_:1})])}var g=f(m,[["render",b]]);export{g as default};
