import{_ as r,a as _}from"./index.074b5048.js";import{r as c,c as i,a as t,w as e,o as p}from"./vendor.d14b3c37.js";const f={name:"SwipeCell",data(){return{buttons:[{text:"\u52A0\u5165\u6536\u85CF",type:"warning"},{text:"\u5220\u9664",type:"danger"}]}},methods:{onButtonClick(o){console.log(o),_.showToast(`\u70B9\u51FB\u4E86 ${o.item.text}`)}}};function b(o,d,x,m,n,u){const s=c("fx-cell"),l=c("fx-swipe-cell"),a=c("fx-group");return p(),i("div",null,[t(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[t(l,{buttons:n.buttons},{default:e(()=>[t(s,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons"]),t(l,{buttons:n.buttons},{default:e(()=>[t(s,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons"])]),_:1}),t(a,{title:" \u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[t(l,{buttons:n.buttons,onButtonClick:u.onButtonClick},{default:e(()=>[t(s,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons","onButtonClick"])]),_:1})])}var k=r(f,[["render",b]]);export{k as default};
