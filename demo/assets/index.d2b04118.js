import{_ as f,a as t}from"./index.51b8fb8d.js";import{r as s,c as p,a as e,w as l,o as i}from"./vendor.e8a7463a.js";const m={name:"Stepper",data(){return{value:"1"}},methods:{onChange({value:u}){t.showToast(`\u503C\u6539\u53D8\u4E3A\uFF1A${u}`)},onInput({value:u}){t.showToast(`\u5F53\u524D\u503C\u4E3A\uFF1A${u}`)},onPlusClick(){t.showToast("\u70B9\u51FB + \u6309\u94AE")},onMinusClick(){t.showToast("\u70B9\u51FB - \u6309\u94AE")},onFocus(){t.showToast("\u805A\u7126 focus")},onBlur(){t.showToast("\u5931\u7126 blur")}}};function b(u,c,C,h,r,a){const o=s("fx-stepper"),n=s("fx-cell"),d=s("fx-group");return i(),p("div",null,[e(d,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(n,{label:"\u9ED8\u8BA4"},{default:l(()=>[e(o)]),_:1}),e(n,{label:"\u6B65\u957F\u8BBE\u7F6E"},{default:l(()=>[e(o,{step:2})]),_:1}),e(n,{label:"\u9650\u5236\u8F93\u5165\u8303\u56F4"},{default:l(()=>[e(o,{min:5,max:10})]),_:1}),e(n,{label:"\u9650\u5236\u8F93\u5165\u6574\u6570"},{default:l(()=>[e(o,{"allow-decimal":!1})]),_:1}),e(n,{label:"\u7981\u7528\u72B6\u6001"},{default:l(()=>[e(o,{disabled:!0})]),_:1}),e(n,{label:"\u7981\u7528\u8F93\u5165\u6846"},{default:l(()=>[e(o,{"disabled-input":!0})]),_:1}),e(n,{label:"\u56FA\u5B9A\u5C0F\u6570\u4F4D"},{default:l(()=>[e(o,{"decimal-length":1,step:.2},null,8,["step"])]),_:1}),e(n,{label:"change\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(o,{onChange:a.onChange,modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=_=>r.value=_)},null,8,["onChange","modelValue"])]),_:1}),e(n,{label:"\u5176\u4ED6\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(o,{onPlusClick:a.onPlusClick,onMinusClick:a.onMinusClick,onFocus:a.onFocus,onBlur:a.onBlur,onInput:a.onInput},null,8,["onPlusClick","onMinusClick","onFocus","onBlur","onInput"])]),_:1})]),_:1})])}var w=f(m,[["render",b]]);export{w as default};
