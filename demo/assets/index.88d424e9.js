import{_ as r,a as f}from"./index.9dd7d456.js";import{r as s,c as i,a as e,w as l,o as m}from"./vendor.d14b3c37.js";const p={name:"DemoSwitch",data(){return{value:!1}},methods:{onChange({value:n}){console.log(n),f.showToast(n?"\u5F00":"\u5173")}}};function x(n,d,h,b,_,c){const t=s("fx-switch"),a=s("fx-cell"),o=s("fx-group");return m(),i("div",null,[e(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(a,{label:"\u5F00\u5173"},{default:l(()=>[e(t)]),_:1})]),_:1}),e(o,{title:"\u81EA\u5B9A\u4E49\u989C\u8272/\u5927\u5C0F"},{default:l(()=>[e(a,{label:"\u7EA2\u8272"},{default:l(()=>[e(t,{class:"switch-custom-color"})]),_:1}),e(a,{label:"40px"},{default:l(()=>[e(t,{class:"switch-custom-size"})]),_:1})]),_:1}),e(o,{title:"\u7981\u7528"},{default:l(()=>[e(a,{label:"\u5173"},{default:l(()=>[e(t,{disabled:""})]),_:1}),e(a,{label:"\u5F00"},{default:l(()=>[e(t,{disabled:"",modelValue:!0})]),_:1})]),_:1}),e(o,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(a,{label:"change"},{default:l(()=>[e(t,{modelValue:_.value,"onUpdate:modelValue":d[0]||(d[0]=u=>_.value=u),onChange:c.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var w=r(p,[["render",x]]);export{w as default};
