import{_ as r}from"./index.02706d4f.js";import{l as s,b as f,e as v,y as e,z as t,f as o}from"./vendor.d68a2f58.js";const u={name:"ExpSticky",data(){return{activeIndex:0}},methods:{onChange(c){console.log("change",c)}}},m=o("div",{class:"sticky-box-1"},null,-1),y=o("div",{class:"sticky-box-2"},null,-1),k=o("div",{class:"sticky-box-3"},null,-1),p=o("div",{class:"sticky-box-4"},null,-1);function h(c,i,g,b,a,_){const n=s("fx-sticky-view-item"),d=s("fx-sticky-view"),l=s("fx-group");return f(),v("div",null,[e(l,{title:"Sticky View"},{default:t(()=>[e(d,{class:"sticky-box",activeIndex:a.activeIndex,"onUpdate:activeIndex":i[0]||(i[0]=x=>a.activeIndex=x),onChange:_.onChange},{default:t(()=>[e(n,{name:"Sticky 1"},{default:t(()=>[m]),_:1}),e(n,{name:"Sticky 2"},{default:t(()=>[y]),_:1}),e(n,{name:"Sticky 3"},{default:t(()=>[k]),_:1}),e(n,{name:"Sticky 4"},{default:t(()=>[p]),_:1})]),_:1},8,["activeIndex","onChange"])]),_:1})])}var I=r(u,[["render",h]]);export{I as default};
