import{_ as f,a as c}from"./index.074b5048.js";import{r as n,c as m,a as e,w as l,o as i}from"./vendor.d14b3c37.js";const p={name:"Rate",data(){return{count:5,value:2.5}},methods:{onChange({value:d}){c.showToast(`Value: ${d}`)}}};function x(d,_,b,V,u,r){const a=n("fx-rate"),t=n("fx-cell"),o=n("fx-group");return i(),m("div",null,[e(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(t,{label:"\u9ED8\u8BA4"},{default:l(()=>[e(a)]),_:1}),e(t,{label:"modelValue=3"},{default:l(()=>[e(a,{modelValue:"3"})]),_:1})]),_:1}),e(o,{title:"\u98CE\u683C"},{default:l(()=>[e(t,{label:"\u7231\u5FC3\uFF08pattern=heart\uFF09"},{default:l(()=>[e(a,{pattern:"heart",modelValue:"3"})]),_:1}),e(t,{label:"\u6362\u8272\uFF08\u6FC0\u6D3B\u8272#F5A511\uFF09"},{default:l(()=>[e(a,{class:"rate-custom-color",modelValue:"3"})]),_:1}),e(t,{label:"\u53D8\u5C0F\uFF08size=16px\uFF09"},{default:l(()=>[e(a,{class:"rate-custom-size",modelValue:"3"})]),_:1})]),_:1}),e(o,{title:"\u81EA\u5B9A\u4E49\u6570\u91CF"},{default:l(()=>[e(t,{label:"count=8"},{default:l(()=>[e(a,{count:"8"})]),_:1})]),_:1}),e(o,{title:"\u534A\u661F"},{default:l(()=>[e(t,{label:"modelValue=2.5"},{default:l(()=>[e(a,{"allow-half":"",modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=s=>u.value=s),count:u.count},null,8,["modelValue","count"])]),_:1})]),_:1}),e(o,{title:"\u72B6\u6001"},{default:l(()=>[e(t,{label:"\u53EA\u8BFB"},{default:l(()=>[e(a,{readonly:"",modelValue:3})]),_:1}),e(t,{label:"\u7981\u7528"},{default:l(()=>[e(a,{disabled:"",modelValue:3})]),_:1})]),_:1}),e(o,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(t,{label:"change"},{default:l(()=>[e(a,{"allow-half":"",onChange:r.onChange},null,8,["onChange"])]),_:1})]),_:1})])}var g=f(p,[["render",x]]);export{g as default};
