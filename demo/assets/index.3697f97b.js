import{_ as c,c as p}from"./index.a3bacd90.js";import{o as m,m as d,c as V}from"./data.3aac24dc.js";import{r,c as f,a as t,w as u,o as _}from"./vendor.0b064a58.js";const g={name:"PickerView",data(){return{options:m,multiOptions:d,cascadeOptions:V,viewValue:[],multiViewValue:[]}},created(){const n=[];for(let e=2e3;e<=2020;e++)n.push(e);this.options=p(n),this.multiOptions=[p(n),["\u6625","\u590F","\u79CB","\u51AC"]]},methods:{onChange(n){console.log("change",n)}}};function h(n,e,C,w,o,a){const l=r("fx-picker-view"),i=r("fx-group");return _(),f("div",null,[t(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[t(l,{options:o.options,onChange:a.onChange,modelValue:o.viewValue,"onUpdate:modelValue":e[0]||(e[0]=s=>o.viewValue=s)},null,8,["options","onChange","modelValue"])]),_:1}),t(i,{title:"\u591A\u5217"},{default:u(()=>[t(l,{options:o.multiOptions,onChange:a.onChange,modelValue:o.multiViewValue,"onUpdate:modelValue":e[1]||(e[1]=s=>o.multiViewValue=s)},null,8,["options","onChange","modelValue"])]),_:1}),t(i,{title:"\u7EA7\u8054"},{default:u(()=>[t(l,{options:o.cascadeOptions,onChange:a.onChange},null,8,["options","onChange"])]),_:1})])}var O=c(g,[["render",h]]);export{O as default};