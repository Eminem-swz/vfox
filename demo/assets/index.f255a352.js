import{_ as r,a as p}from"./index.75560e0d.js";import{d as i,m as l,e as f,f as _,z as t,A as n,F as b}from"./vendor.8029601e.js";const m=i({name:"ExpSwipeCell",setup(){return{buttons:[{text:"\u52A0\u5165\u6536\u85CF",type:"warning"},{text:"\u5220\u9664",type:"danger"}],onButtonClick:o=>{console.log("button-click",o),p(`\u70B9\u51FB\u4E86 ${o.item.text}`)}}}});function C(u,c,o,d,x,B){const e=l("fx-cell"),s=l("fx-swipe-cell"),a=l("fx-group");return f(),_(b,null,[t(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[t(s,{buttons:u.buttons},{default:n(()=>[t(e,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons"]),t(s,{buttons:u.buttons},{default:n(()=>[t(e,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons"])]),_:1}),t(a,{title:" \u4E8B\u4EF6\u76D1\u542C"},{default:n(()=>[t(s,{buttons:u.buttons,onButtonClick:u.onButtonClick},{default:n(()=>[t(e,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons","onButtonClick"])]),_:1})],64)}var g=r(m,[["render",C]]);export{g as default};
