import{_ as r,s as f}from"./index.45136ee4.js";import{j as _,r as n,o as c,c as i,a as e,w as l}from"./vendor.d6b2829d.js";const p=_({name:"ExpSwitch",data(){return{value:!1}},methods:{onChange(a){console.log("change",a),f(a?"\u5F00":"\u5173")}}});function m(a,d,C,h,x,b){const o=n("fx-switch"),u=n("fx-cell"),t=n("fx-group");return c(),i("div",null,[e(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(u,{label:"\u5F00\u5173"},{default:l(()=>[e(o)]),_:1})]),_:1}),e(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272/\u5927\u5C0F"},{default:l(()=>[e(u,{label:"\u7EA2\u8272"},{default:l(()=>[e(o,{activeColor:"#8b1721",color:"#d79996"})]),_:1}),e(u,{label:"40px"},{default:l(()=>[e(o,{size:"40"})]),_:1})]),_:1}),e(t,{title:"\u7981\u7528"},{default:l(()=>[e(u,{label:"\u5173"},{default:l(()=>[e(o,{disabled:""})]),_:1}),e(u,{label:"\u5F00"},{default:l(()=>[e(o,{disabled:"",modelValue:!0})]),_:1})]),_:1}),e(t,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(u,{label:"change"},{default:l(()=>[e(o,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=s=>a.value=s),onChange:a.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var E=r(p,[["render",m]]);export{E as default};