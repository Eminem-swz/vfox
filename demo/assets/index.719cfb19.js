import{_ as f,a as c}from"./index.75560e0d.js";import{d as _,r as m,m as r,e as N,f as D,z as e,A as l,F as A,g as C,I as F,t as g}from"./vendor.8029601e.js";const v=_({name:"ExpCountUp",setup(){const n=m(5e3),t=m(1e3),o=m(!1),s=m(),b=u=>{console.log(u),c("\u52A8\u753B\u7ED3\u675F")},d=u=>{console.log("animated",u)},a=u=>{console.log("cancel",u),t.value=u.number};function i(){var u;o.value?t.value=t.value>500?0:1e3:((u=s.value)==null||u.cancel(),c("\u5DF2\u53D6\u6D88")),o.value=!o.value}return{initialNumber:1e3,number:n,number2:t,isCancel:o,countUp:s,onAnimated:b,onAnimated2:d,onCancel:a,cancel:i}}}),B={class:"exp-countUp-r"};function h(n,t,o,s,b,d){const a=r("fx-count-up"),i=r("fx-cell"),u=r("fx-group"),p=r("fx-button");return N(),D(A,null,[e(u,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(i,{label:"\u9ED8\u8BA4"},{default:l(()=>[e(a,{number:1e3})]),_:1}),e(i,{label:"\u5343\u5206\u4F4D thousands"},{default:l(()=>[e(a,{initialNumber:n.initialNumber,number:n.number,thousands:""},null,8,["initialNumber","number"])]),_:1}),e(i,{label:"\u5C0F\u6570\u4F4D decimalDigits=2"},{default:l(()=>[e(a,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2},null,8,["initialNumber","number"])]),_:1})]),_:1}),e(u,{title:"\u901F\u5EA6"},{default:l(()=>[e(i,{label:"speed=slow"},{default:l(()=>[e(a,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:"slow"},null,8,["initialNumber","number"])]),_:1}),e(i,{label:"speed=normal"},{default:l(()=>[e(a,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:"normal"},null,8,["initialNumber","number"])]),_:1}),e(i,{label:"speed=fast"},{default:l(()=>[e(a,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:"fast"},null,8,["initialNumber","number"])]),_:1}),e(i,{label:"speed=10000\uFF08\u56FA\u5B9A10\u79D2\u52A8\u753B\uFF09"},{default:l(()=>[e(a,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:1e4},null,8,["initialNumber","number"])]),_:1})]),_:1}),e(u,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(i,{label:"animated"},{default:l(()=>[e(a,{number:500,onAnimated:n.onAnimated},null,8,["onAnimated"])]),_:1}),e(i,{label:"cancel",class:"exp-countUp-box"},{default:l(()=>[C("div",B,[e(a,{initialNumber:0,number:n.number2,thousands:"",ref:"countUp",onAnimated:n.onAnimated2,onCancel:n.onCancel},null,8,["number","onAnimated","onCancel"])]),e(p,{onClick:n.cancel,size:"small"},{default:l(()=>[F(g(n.isCancel?"\u5F00\u59CB":"\u53D6\u6D88"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var k=f(v,[["render",h]]);export{k as default};
