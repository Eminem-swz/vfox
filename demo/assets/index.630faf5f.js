import{c}from"./data.a24f4e56.js";import{_ as B,a as r,r as C}from"./index.4c76766c.js";import{r as E}from"./region.7313700a.js";import{d as b,r as g,l as i,b as h,e as v,y as a,z as l}from"./vendor.4df8ce31.js";const V=b({name:"ExpCascader",setup(){const e="-",n=g(["bingxiang","duikaimen"]),p=g(`bingxiang${e}duikaimen`),d=(o,t)=>({value:o.join(e),label:t.join(e)}),f=o=>o?o.split(e):[];function m(o){console.log("change",o),r(`\u9009\u62E9\u4E86 ${o}`)}function u(){C({title:"\u5BB6\u7535",options:c,success:o=>{console.log("success",o),o.cancel?r("\u53D6\u6D88\u4E86"):r(`\u9009\u62E9\u4E86 ${o.detail.label}`)}})}return{value:n,formatValue:p,formatter:d,parser:f,options:c,regionOptions:E,onChange:m,onCallApi:u}}});function $(e,n,p,d,f,m){const u=i("fx-cascader"),o=i("fx-cell"),t=i("fx-group");return h(),v("div",null,[a(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[a(o,{label:"\u5BB6\u7535"},{default:l(()=>[a(u,{options:e.options,placeholder:"\u9009\u62E9\u5BB6\u7535"},null,8,["options"])]),_:1}),a(o,{label:"\u5730\u533A"},{default:l(()=>[a(u,{options:e.regionOptions,"field-names":{value:"label"},placeholder:"\u9009\u62E9\u5730\u533A"},null,8,["options"])]),_:1}),a(o,{label:"v-model"},{default:l(()=>[a(u,{options:e.options,placeholder:"\u9009\u62E9\u5BB6\u7535",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=s=>e.value=s)},null,8,["options","modelValue"])]),_:1}),a(o,{label:"formatter/parser"},{default:l(()=>[a(u,{options:e.options,placeholder:"\u9009\u62E9\u5BB6\u7535",modelValue:e.formatValue,"onUpdate:modelValue":n[1]||(n[1]=s=>e.formatValue=s),formatter:e.formatter,parser:e.parser},null,8,["options","modelValue","formatter","parser"])]),_:1})]),_:1}),a(t,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[a(o,{label:"change"},{default:l(()=>[a(u,{options:e.options,placeholder:"\u9009\u62E9\u5BB6\u7535",onChange:e.onChange},null,8,["options","onChange"])]),_:1})]),_:1}),a(t,{title:"API"},{default:l(()=>[a(o,{label:"showCascader",isLink:"",onClick:n[2]||(n[2]=s=>e.onCallApi())})]),_:1})])}var w=B(V,[["render",$]]);export{w as default};
