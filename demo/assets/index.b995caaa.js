import{_ as r,a as f}from"./index.88d65a1c.js";import{r as s,c as i,a as e,w as l,o as m}from"./vendor.e8a7463a.js";const p={name:"DemoSwitch",data(){return{value:!1}},methods:{onChange({value:n}){console.log(n),f.showToast(n?"\u5F00":"\u5173")}}};function x(n,_,h,g,d,c){const a=s("fx-switch"),t=s("fx-cell"),o=s("fx-group");return m(),i("div",null,[e(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(t,{label:"\u5F00\u5173"},{default:l(()=>[e(a)]),_:1})]),_:1}),e(o,{title:"\u81EA\u5B9A\u4E49\u989C\u8272/\u5927\u5C0F"},{default:l(()=>[e(t,{label:"\u7EA2\u8272"},{default:l(()=>[e(a,{class:"switch-custom-color"})]),_:1}),e(t,{label:"40px"},{default:l(()=>[e(a,{class:"switch-custom-size"})]),_:1})]),_:1}),e(o,{title:"\u7981\u7528"},{default:l(()=>[e(t,{label:"\u5173"},{default:l(()=>[e(a,{disabled:""})]),_:1}),e(t,{label:"\u5F00"},{default:l(()=>[e(a,{disabled:"",modelValue:!0})]),_:1})]),_:1}),e(o,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(t,{label:"change"},{default:l(()=>[e(a,{modelValue:d.value,"onUpdate:modelValue":_[0]||(_[0]=u=>d.value=u),onChange:c.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var w=r(p,[["render",x]]);export{w as default};