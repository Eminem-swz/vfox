import{c as d}from"./data.9ed834cb.js";import{_ as f,b as _,g as m,a as u}from"./index.51b8fb8d.js";import{r as g}from"./region.51c01a32.js";import{r as c,c as h,a as e,w as l,o as b}from"./vendor.e8a7463a.js";const C={name:"Cascader",props:{},data(){return{options:d,regionOptions:g,value:["bingxiang","duikaimen"]}},methods:{onChange(o){console.log("change",o),_.showDialog({title:"\u9009\u62E9\u4E86",showCancel:!1,content:`label: '${o.labelString}'
value: ${o.valueString}`})},onCallApi(){m.showCascader({title:"\u5BB6\u7535",options:d,success:o=>{console.log("success",o),o.cancel?u.showToast("\u53D6\u6D88\u4E86"):u.showToast(`\u9009\u62E9\u4E86 ${o.detail.labelString}`)}})}}};function x(o,s,v,w,a,r){const t=c("fx-cascader"),n=c("fx-cell"),i=c("fx-group");return b(),h("div",null,[e(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(n,{label:"\u5BB6\u7535"},{default:l(()=>[e(t,{options:a.options,placeholder:"\u9009\u62E9\u5BB6\u7535"},null,8,["options"])]),_:1}),e(n,{label:"\u5730\u533A"},{default:l(()=>[e(t,{options:a.regionOptions,"field-names":{value:"label"},placeholder:"\u9009\u62E9\u5730\u533A"},null,8,["options"])]),_:1}),e(n,{label:"v-model"},{default:l(()=>[e(t,{options:a.options,placeholder:"\u9009\u62E9\u5BB6\u7535",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=p=>a.value=p)},null,8,["options","modelValue"])]),_:1})]),_:1}),e(i,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(n,{label:"change"},{default:l(()=>[e(t,{options:a.options,placeholder:"\u9009\u62E9\u5BB6\u7535",onChange:r.onChange},null,8,["options","onChange"])]),_:1})]),_:1}),e(i,{title:"API"},{default:l(()=>[e(n,{label:"showCascader",isLink:"",onClick:s[1]||(s[1]=p=>r.onCallApi())})]),_:1})])}var O=f(C,[["render",x]]);export{O as default};
