import{_ as p,c as a}from"./index.55f10eb5.js";import{r as _,c,a as i,w as o,F as u,o as f,f as r,n as l,I as x}from"./vendor.d14b3c37.js";const m=[{id:1,type:"primary"},{id:2,type:"success"},{id:3,type:"warning"},{id:4,type:"danger"}],v={name:"Order",data(){return{items:a(m),items2:a(m),items3:a(m)}}},y={class:"order-box"},b={class:"order-box"},g={class:"order-box"};function w(B,t,C,D,s,N){const n=_("fx-order"),d=_("fx-group");return f(),c(u,null,[i(d,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[r("div",y,[i(n,{items:s.items,"onUpdate:items":t[0]||(t[0]=e=>s.items=e)},{default:o(({item:e})=>[r("div",{class:l(["order-item",[e.type]])},x(e.disibledDrag?"\u7981\u6B62\u62D6\u52A8":""),3)]),_:1},8,["items"])])]),_:1}),i(d,{title:"\u8BBE\u7F6E\u5217\u6570"},{default:o(()=>[r("div",b,[i(n,{items:s.items2,"onUpdate:items":t[1]||(t[1]=e=>s.items2=e),columnNumber:4},{default:o(({item:e})=>[r("div",{class:l(["order-item",[e.type]])},null,2)]),_:1},8,["items"])])]),_:1}),i(d,{title:"\u5141\u8BB8\u5220\u9664"},{default:o(()=>[r("div",g,[i(n,{items:s.items3,"onUpdate:items":t[2]||(t[2]=e=>s.items3=e),deletable:!0},{default:o(({item:e})=>[r("div",{class:l(["order-item",[e.type]])},null,2)]),_:1},8,["items"])])]),_:1})],64)}var k=p(v,[["render",w]]);export{k as default};
