import{_ as b,a as s}from"./index.89cbf3ff.js";import{l as m,b as c,e as _,y as e,z as l,f as d,I as f,t as p}from"./vendor.3db2f07a.js";const N={name:"ExpCountUp",data(){return{initialNumber:1e3,number:5e3,number2:1e3,isCancel:!1}},methods:{onAnimated(u){console.log(u),s("\u52A8\u753B\u7ED3\u675F")},onAnimated2(u){console.log(u)},onCancel(u){console.log(u),this.number2=u.number},cancel(){this.isCancel?this.number2=this.number2>500?0:1e3:(this.$refs.countUp.cancel(),s("\u5DF2\u53D6\u6D88")),this.isCancel=!this.isCancel}}},x={class:"count-up-r"};function h(u,C,g,v,n,a){const i=m("fx-count-up"),t=m("fx-cell"),r=m("fx-group"),o=m("fx-button");return c(),_("div",null,[e(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(t,{label:"\u9ED8\u8BA4"},{default:l(()=>[e(i,{number:1e3})]),_:1}),e(t,{label:"\u5343\u5206\u4F4D thousands"},{default:l(()=>[e(i,{initialNumber:n.initialNumber,number:n.number,thousands:""},null,8,["initialNumber","number"])]),_:1}),e(t,{label:"\u5C0F\u6570\u4F4D decimalDigits=2"},{default:l(()=>[e(i,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2},null,8,["initialNumber","number"])]),_:1})]),_:1}),e(r,{title:"\u901F\u5EA6"},{default:l(()=>[e(t,{label:"speed=slow"},{default:l(()=>[e(i,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:"slow"},null,8,["initialNumber","number"])]),_:1}),e(t,{label:"speed=normal"},{default:l(()=>[e(i,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:"normal"},null,8,["initialNumber","number"])]),_:1}),e(t,{label:"speed=fast"},{default:l(()=>[e(i,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:"fast"},null,8,["initialNumber","number"])]),_:1}),e(t,{label:"speed=10000\uFF08\u56FA\u5B9A10\u79D2\u52A8\u753B\uFF09"},{default:l(()=>[e(i,{initialNumber:n.initialNumber,number:n.number,decimalDigits:2,speed:1e4},null,8,["initialNumber","number"])]),_:1})]),_:1}),e(r,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(t,{label:"animated"},{default:l(()=>[e(i,{number:500,onAnimated:a.onAnimated},null,8,["onAnimated"])]),_:1}),e(t,{label:"cancel",class:"count-up-box"},{default:l(()=>[d("div",x,[e(i,{initialNumber:0,number:n.number2,thousands:"",ref:"countUp",onAnimated:a.onAnimated2,onCancel:a.onCancel},null,8,["number","onAnimated","onCancel"])]),e(o,{onClick:a.cancel,size:"small"},{default:l(()=>[f(p(n.isCancel?"\u5F00\u59CB":"\u53D6\u6D88"),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}var k=b(N,[["render",h]]);export{k as default};
