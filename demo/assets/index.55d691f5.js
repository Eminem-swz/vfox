import{_ as i,a as f}from"./index.807999d0.js";import{r as p,o as x,c as _,a as n,w as o,B as s,I as d}from"./vendor.d6b2829d.js";const g={name:"ExpPagination",props:{},data(){return{current:1,current2:1,current3:3,current4:3,current5:3,total:5}},methods:{onChange(c){console.log(c),f(`\u8DF3\u8F6C\u5230\u7B2C ${c.current} \u9875`)}}},m=s(" \u4E0A\u4E00\u9875 "),C=s(" \u4E0B\u4E00\u9875 ");function v(c,e,h,S,t,a){const u=p("fx-pagination"),l=p("fx-group");return x(),_("div",null,[n(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[n(u,{current:t.current,"onUpdate:current":e[0]||(e[0]=r=>t.current=r),total:t.total},null,8,["current","total"])]),_:1}),n(l,{title:"Slot default"},{default:o(()=>[n(u,{current:t.current2,"onUpdate:current":e[1]||(e[1]=r=>t.current2=r),total:t.total},{default:o(({current:r})=>[s(" \u7B2C "+d(r)+" \u9875 ",1)]),_:1},8,["current","total"])]),_:1}),n(l,{title:"Slot prev & next"},{default:o(()=>[n(u,{current:t.current3,"onUpdate:current":e[2]||(e[2]=r=>t.current3=r),total:t.total},{prev:o(()=>[m]),next:o(()=>[C]),_:1},8,["current","total"])]),_:1}),n(l,{title:"CSS height=32px"},{default:o(()=>[n(u,{style:{height:"32px"},current:t.current4,"onUpdate:current":e[3]||(e[3]=r=>t.current4=r),total:t.total},null,8,["current","total"])]),_:1}),n(l,{title:"\u4E8B\u4EF6\u76D1\u542C change"},{default:o(()=>[n(u,{current:t.current5,"onUpdate:current":e[4]||(e[4]=r=>t.current5=r),total:t.total,onChange:a.onChange},null,8,["current","total","onChange"])]),_:1})])}var B=i(g,[["render",v]]);export{B as default};
