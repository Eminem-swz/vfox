import{_ as i}from"./index.074b5048.js";import{r as a,c as d,a as e,w as r,o as g,f as o,A as n,I as u}from"./vendor.d14b3c37.js";const f={name:"CircleProgress",data(){return{percentage:50}}},x={class:"circle-progress-box"},m={class:"circle-progress-list"},v=n(" color "),h=n(" strokeWidth "),V=n(" size "),b={class:"circle-progress-box"};function k(y,p,B,C,t,N){const s=a("fx-circle-progress"),_=a("fx-stepper"),c=a("fx-group");return g(),d("div",null,[e(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:r(()=>[o("div",x,[e(s,{percentage:t.percentage},null,8,["percentage"]),e(_,{min:0,max:100,modelValue:t.percentage,"onUpdate:modelValue":p[0]||(p[0]=l=>t.percentage=l)},null,8,["modelValue"])])]),_:1}),e(c,{title:"\u53C2\u6570\u8BBE\u7F6E"},{default:r(()=>[o("ul",m,[o("li",null,[e(s,{percentage:t.percentage,color:"#ff4d4f"},{default:r(()=>[v]),_:1},8,["percentage"])]),o("li",null,[e(s,{percentage:t.percentage,strokeWidth:2},{default:r(()=>[h]),_:1},8,["percentage"])]),o("li",null,[e(s,{percentage:t.percentage,size:80},{default:r(()=>[V]),_:1},8,["percentage"])])])]),_:1}),e(c,{title:"Slot default"},{default:r(()=>[o("div",b,[e(s,{percentage:t.percentage},{default:r(({progress:l})=>[n(" \u5DF2\u62A2"+u(l),1)]),_:1},8,["percentage"])])]),_:1})])}var z=i(f,[["render",k]]);export{z as default};
