import{_ as l}from"./index.f9b794be.js";import{d as _,r as n,m as p,e as f,f as x,z as i,A as o,F as c,g as r,j as u,t as v}from"./vendor.d264869d.js";const m=[{id:1,type:"primary"},{id:2,type:"success"},{id:3,type:"warning"},{id:4,type:"danger"}],y=_({name:"ExpOrder",setup(){return{items:n([...m]),items2:n([...m]),items3:n([...m])}}}),g={class:"exp-order-box"},B={class:"exp-order-box"},b={class:"exp-order-box"};function C(t,s,D,E,F,$){const d=p("fx-order"),a=p("fx-group");return f(),x(c,null,[i(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[r("div",g,[i(d,{items:t.items,"onUpdate:items":s[0]||(s[0]=e=>t.items=e)},{default:o(({item:e})=>[r("div",{class:u(["exp-order-item",[e.type]])},v(e.disibledDrag?"\u7981\u6B62\u62D6\u52A8":""),3)]),_:1},8,["items"])])]),_:1}),i(a,{title:"\u8BBE\u7F6E\u5217\u6570"},{default:o(()=>[r("div",B,[i(d,{items:t.items2,"onUpdate:items":s[1]||(s[1]=e=>t.items2=e),columnNumber:4},{default:o(({item:e})=>[r("div",{class:u(["exp-order-item",[e.type]])},null,2)]),_:1},8,["items"])])]),_:1}),i(a,{title:"\u5141\u8BB8\u5220\u9664"},{default:o(()=>[r("div",b,[i(d,{items:t.items3,"onUpdate:items":s[2]||(s[2]=e=>t.items3=e),deletable:!0},{default:o(({item:e})=>[r("div",{class:u(["exp-order-item",[e.type]])},null,2)]),_:1},8,["items"])])]),_:1})],64)}var U=l(y,[["render",C]]);export{U as default};
