import{_ as i,a}from"./index.e283f0d6.js";import{d as r,m as t,e as c,f,z as u,A as l,F}from"./vendor.1f7be6ea.js";const m=r({name:"ExpStepper",data(){return{value:"1"}},methods:{onChange(e){console.log("change",e),a(`\u503C\u6539\u53D8\u4E3A\uFF1A${e}`)},onInput(e){console.log("input",e),a(`\u5F53\u524D\u503C\u4E3A\uFF1A${e}`)},onPlusClick(){a("\u70B9\u51FB + \u6309\u94AE")},onMinusClick(){a("\u70B9\u51FB - \u6309\u94AE")},onFocus(){a("\u805A\u7126 focus")},onBlur(){a("\u5931\u7126 blur")}}});function C(e,s,_,B,b,g){const n=t("fx-stepper"),o=t("fx-cell"),p=t("fx-group");return c(),f(F,null,[u(p,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[u(o,{label:"\u9ED8\u8BA4"},{default:l(()=>[u(n)]),_:1}),u(o,{label:"\u6B65\u957F\u8BBE\u7F6E"},{default:l(()=>[u(n,{step:2})]),_:1}),u(o,{label:"\u9650\u5236\u8F93\u5165\u8303\u56F4"},{default:l(()=>[u(n,{min:5,max:10})]),_:1}),u(o,{label:"\u9650\u5236\u8F93\u5165\u6574\u6570"},{default:l(()=>[u(n,{"allow-decimal":!1})]),_:1}),u(o,{label:"\u7981\u7528\u72B6\u6001"},{default:l(()=>[u(n,{disabled:!0})]),_:1}),u(o,{label:"\u7981\u7528\u8F93\u5165\u6846"},{default:l(()=>[u(n,{"disabled-input":!0})]),_:1}),u(o,{label:"\u56FA\u5B9A\u5C0F\u6570\u4F4D"},{default:l(()=>[u(n,{"decimal-length":1,step:.2},null,8,["step"])]),_:1})]),_:1}),u(p,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[u(o,{label:"change"},{default:l(()=>[u(n,{onChange:e.onChange,modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=d=>e.value=d)},null,8,["onChange","modelValue"])]),_:1}),u(o,{label:"input/focus/blur/plus-click/minus-click"},{default:l(()=>[u(n,{onPlusClick:e.onPlusClick,onMinusClick:e.onMinusClick,onFocus:e.onFocus,onBlur:e.onBlur,onInput:e.onInput},null,8,["onPlusClick","onMinusClick","onFocus","onBlur","onInput"])]),_:1})]),_:1})],64)}var E=i(m,[["render",C]]);export{E as default};
