import{_ as i}from"./index.95d96f48.js";import{d as u,r as _,l as c,b as f,e as g,y as e,z as r,f as o,I as n,t as m}from"./vendor.d68a2f58.js";const x=u({name:"ExpCircleProgress",setup(){return{percentage:_(50)}}}),v={class:"circle-progress-box"},h={class:"circle-progress-list"},C=n(" color "),V=n(" strokeWidth "),B=n(" size "),k={class:"circle-progress-box"};function y(t,p,E,$,b,z){const s=c("fx-circle-progress"),d=c("fx-stepper"),a=c("fx-group");return f(),g("div",null,[e(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:r(()=>[o("div",v,[e(s,{percentage:t.percentage},null,8,["percentage"]),e(d,{min:0,max:100,modelValue:t.percentage,"onUpdate:modelValue":p[0]||(p[0]=l=>t.percentage=l)},null,8,["modelValue"])])]),_:1}),e(a,{title:"\u53C2\u6570\u8BBE\u7F6E"},{default:r(()=>[o("ul",h,[o("li",null,[e(s,{percentage:t.percentage,color:"#ff4d4f"},{default:r(()=>[C]),_:1},8,["percentage"])]),o("li",null,[e(s,{percentage:t.percentage,strokeWidth:2},{default:r(()=>[V]),_:1},8,["percentage"])]),o("li",null,[e(s,{percentage:t.percentage,size:80},{default:r(()=>[B]),_:1},8,["percentage"])])])]),_:1}),e(a,{title:"Slot default"},{default:r(()=>[o("div",k,[e(s,{percentage:t.percentage},{default:r(({progress:l})=>[n(" \u5DF2\u62A2"+m(l),1)]),_:1},8,["percentage"])])]),_:1})])}var N=i(x,[["render",y]]);export{N as default};
