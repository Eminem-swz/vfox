import{_ as m,c as p}from"./index.9dd7d456.js";import{o as c,m as d,c as V}from"./data.e12060e9.js";import{r,c as f,a as t,w as u,o as _}from"./vendor.d14b3c37.js";const g={name:"PickerView",data(){return{options:c,multiOptions:d,cascadeOptions:V,viewValue:[],multiViewValue:[]}},created(){const n=[];for(let e=2e3;e<=2020;e++)n.push(e);this.options=p(n),this.multiOptions=[p(n),["\u6625","\u590F","\u79CB","\u51AC"]]},methods:{onChange(n){console.log("change",n)}}};function h(n,e,C,w,o,l){const i=r("fx-picker-view"),s=r("fx-group");return _(),f("div",null,[t(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[t(i,{options:o.options,onChange:l.onChange,modelValue:o.viewValue,"onUpdate:modelValue":e[0]||(e[0]=a=>o.viewValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),t(s,{title:"\u591A\u5217"},{default:u(()=>[t(i,{options:o.multiOptions,onChange:l.onChange,modelValue:o.multiViewValue,"onUpdate:modelValue":e[1]||(e[1]=a=>o.multiViewValue=a)},null,8,["options","onChange","modelValue"])]),_:1}),t(s,{title:"\u7EA7\u8054"},{default:u(()=>[t(i,{options:o.cascadeOptions,onChange:l.onChange},null,8,["options","onChange"])]),_:1})])}var O=m(g,[["render",h]]);export{O as default};
