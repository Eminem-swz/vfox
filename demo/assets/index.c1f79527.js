import{m,o as C,c as b}from"./data.e02379e6.js";import{_ as k,a,f as h}from"./index.45589400.js";import{r as _}from"./region.51c01a32.js";import{r as c,c as d,a as n,w as s,o as V}from"./vendor.0b064a58.js";const x={name:"Picker",data(){return{regionValue:[],disableValue:[2e3,"\u6625"],value:"2000/\u590F",visible:!1,title:"Picker",regionTitle:"\u9009\u62E9\u5730\u533A",multiOptions:m,options:C,cascadeOptions:b,regionOptions:_,clickEvent:!1,changeEvent:!1,visibleEvent:!1}},methods:{onChange(l){console.log("change",l),this.changeEvent&&a.showToast(`\u503C\u6539\u4E3A ${l.labelString}`)},onConfirm(l){console.log("confirm",l),this.clickEvent&&a.showToast("\u70B9\u51FB\u786E\u5B9A\u6309\u94AE")},onCancel(l){console.log("cancel",l),this.clickEvent&&(l.cancelClick?a.showToast("\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"):l.maskClick&&a.showToast("\u70B9\u51FB\u4E86\u8499\u5C42"))},onVisibleStateChange({state:l}){this.visibleEvent&&a.showToast(`${l} \u4E8B\u4EF6\u89E6\u53D1`),l==="hidden"&&(this.clickEvent=!1,this.visibleEvent=!1,this.changeEvent=!1)},onCallApi(){h.showPicker({title:this.title,options:m,success:l=>{console.log(l),l.cancel?a.showToast("\u53D6\u6D88\u4E86"):a.showToast(`\u9009\u62E9\u4E86 ${l.detail.labelString}`)}})}}};function E(l,o,w,P,e,i){const g=c("fx-notice-bar"),r=c("fx-picker"),u=c("fx-form-item"),f=c("fx-group"),p=c("fx-cell"),v=c("fx-picker-popup");return V(),d("div",null,[n(g,{class:"top-notice-bar",title:"\u5177\u4F53\u5C55\u793A\u53C2\u6570\u53EF\u4EE5\u53C2\u8003 PickerView"}),n(f,{title:"Picker"},{default:s(()=>[n(u,{name:"picker",label:"\u5355\u5217"},{default:s(()=>[n(r,{options:e.options,onChange:i.onChange},null,8,["options","onChange"])]),_:1}),n(u,{name:"picker",label:"\u591A\u5217"},{default:s(()=>[n(r,{options:e.multiOptions,onChange:i.onChange},null,8,["options","onChange"])]),_:1}),n(u,{name:"picker",label:"\u7EA7\u8054"},{default:s(()=>[n(r,{options:e.cascadeOptions,onChange:i.onChange},null,8,["options","onChange"])]),_:1}),n(u,{name:"picker",label:"\u5730\u533A"},{default:s(()=>[n(r,{options:e.regionOptions,"field-names":{value:"label"},"format-string":!0,modelValue:e.regionValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.regionValue=t),onChange:i.onChange},null,8,["options","modelValue","onChange"])]),_:1}),n(u,{name:"picker",label:"\u7981\u7528"},{default:s(()=>[n(r,{modelValue:e.disableValue,options:e.multiOptions,disabled:""},null,8,["modelValue","options"])]),_:1})]),_:1}),n(f,{title:"PickerPopup"},{default:s(()=>[n(p,{label:"\u57FA\u7840",isLink:"",onClick:o[1]||(o[1]=t=>e.visible=!0),content:e.value},null,8,["content"])]),_:1}),n(f,{title:"PickerPopup Event"},{default:s(()=>[n(p,{label:"change",isLink:"",onClick:o[2]||(o[2]=t=>{e.changeEvent=!0,e.visible=!0})}),n(p,{label:"confirm/cancel",isLink:"",onClick:o[3]||(o[3]=t=>{e.clickEvent=!0,e.visible=!0})}),n(p,{label:"visible-state-change",isLink:"",onClick:o[4]||(o[4]=t=>{e.visibleEvent=!0,e.visible=!0})})]),_:1}),n(f,{title:"API"},{default:s(()=>[n(p,{label:"showPicker",isLink:"",onClick:i.onCallApi},null,8,["onClick"])]),_:1}),n(v,{visible:e.visible,"onUpdate:visible":o[5]||(o[5]=t=>e.visible=t),title:e.title,options:e.multiOptions,"format-string":!0,modelValue:e.value,"onUpdate:modelValue":o[6]||(o[6]=t=>e.value=t),onChange:i.onChange,onConfirm:i.onConfirm,onCancel:i.onCancel,onVisibleStateChange:i.onVisibleStateChange},null,8,["visible","title","options","modelValue","onChange","onConfirm","onCancel","onVisibleStateChange"])])}var j=k(x,[["render",E]]);export{j as default};
