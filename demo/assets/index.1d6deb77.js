import{_ as r,a as _}from"./index.2fd7321e.js";import{l as c,b as f,e as p,y as t,z as e}from"./vendor.d68a2f58.js";const i={name:"ExpSwipeCell",data(){return{buttons:[{text:"\u52A0\u5165\u6536\u85CF",type:"warning"},{text:"\u5220\u9664",type:"danger"}]}},methods:{onButtonClick(o){console.log(o),_(`\u70B9\u51FB\u4E86 ${o.item.text}`)}}};function d(o,x,b,m,n,a){const l=c("fx-cell"),s=c("fx-swipe-cell"),u=c("fx-group");return f(),p("div",null,[t(u,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[t(s,{buttons:n.buttons},{default:e(()=>[t(l,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons"]),t(s,{buttons:n.buttons},{default:e(()=>[t(l,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons"])]),_:1}),t(u,{title:" \u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[t(s,{buttons:n.buttons,onButtonClick:a.onButtonClick},{default:e(()=>[t(l,{label:"\u5355\u5143\u683C",content:"\u5411\u5DE6\u5212"})]),_:1},8,["buttons","onButtonClick"])]),_:1})])}var w=r(i,[["render",d]]);export{w as default};
