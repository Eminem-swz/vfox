import{m as c,o as E,c as V}from"./data.719325ba.js";import{_ as h,a as p,q as A}from"./index.02706d4f.js";import{r as P}from"./region.7313700a.js";import{d as $,r as s,l as C,b as B,e as F,y as n,z as u,I as O,t as D}from"./vendor.d68a2f58.js";const w=$({name:"ExpPicker",setup(){const e=s([]),o=s([2e3,"\u6625"]),m=s([2e3,"\u590F"]),v=s("Picker"),b=s(!1),f=s(!1),d=s(!1),t=s(!1);function i(l){t.value&&(console.log("event",l),p(`${l.state} \u4E8B\u4EF6\u89E6\u53D1`)),l.state==="hidden"&&(f.value=!1,t.value=!1,d.value=!1)}function r(){A({title:v.value,options:c}).then(l=>{console.log("success",l),l.cancel?p("\u53D6\u6D88\u4E86"):p(`\u9009\u62E9\u4E86 ${l.detail.label}`)})}const g=l=>{f.value&&(console.log("event",l),p("\u70B9\u51FB\u786E\u5B9A\u6309\u94AE"))};function a(l){d.value&&(console.log("event",l),p(`\u503C\u6539\u4E3A ${l}`))}function k(l){f.value&&(console.log("event",l),l.source==="cancelClick"?p("\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"):l.source==="maskClick"&&p("\u70B9\u51FB\u4E86\u8499\u5C42"))}return{regionValue:e,disableValue:o,popupValue:m,title:v,visible:b,clickEvent:f,changeEvent:d,visibleEvent:t,multiOptions:c,options:E,cascadeOptions:V,regionOptions:P,onConfirm:g,onCancel:k,onChange:a,onVisibleStateChange:i,onCallApi:r}}});function L(e,o,m,v,b,f){const d=C("fx-notice-bar"),t=C("fx-picker"),i=C("fx-cell"),r=C("fx-group"),g=C("fx-picker-popup");return B(),F("div",null,[n(d,{class:"top-notice-bar",title:"\u5177\u4F53\u5C55\u793A\u53C2\u6570\u53EF\u4EE5\u53C2\u8003 PickerView"}),n(r,{title:"Picker"},{default:u(()=>[n(i,{label:"\u5355\u5217"},{default:u(()=>[n(t,{options:e.options,onChange:e.onChange},null,8,["options","onChange"])]),_:1}),n(i,{label:"\u591A\u5217"},{default:u(()=>[n(t,{options:e.multiOptions,onChange:e.onChange},null,8,["options","onChange"])]),_:1}),n(i,{label:"\u7EA7\u8054"},{default:u(()=>[n(t,{options:e.cascadeOptions,onChange:e.onChange},null,8,["options","onChange"])]),_:1}),n(i,{label:"\u5730\u533A"},{default:u(()=>[n(t,{options:e.regionOptions,"field-names":{value:"label"},"format-string":!0,modelValue:e.regionValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.regionValue=a),onChange:e.onChange},null,8,["options","modelValue","onChange"])]),_:1}),n(i,{label:"\u7981\u7528"},{default:u(()=>[n(t,{modelValue:e.disableValue,options:e.multiOptions,disabled:""},null,8,["modelValue","options"])]),_:1})]),_:1}),n(r,{title:"PickerPopup"},{default:u(()=>[n(i,{label:"\u57FA\u7840",isLink:"",onClick:o[1]||(o[1]=a=>e.visible=!0)},{default:u(()=>[O(D(e.popupValue),1)]),_:1})]),_:1}),n(r,{title:"PickerPopup Event"},{default:u(()=>[n(i,{label:"change",isLink:"",onClick:o[2]||(o[2]=a=>{e.changeEvent=!0,e.visible=!0})}),n(i,{label:"confirm/cancel",isLink:"",onClick:o[3]||(o[3]=a=>{e.clickEvent=!0,e.visible=!0})}),n(i,{label:"visible-state-change",isLink:"",onClick:o[4]||(o[4]=a=>{e.visibleEvent=!0,e.visible=!0})})]),_:1}),n(r,{title:"API"},{default:u(()=>[n(i,{label:"showPicker",isLink:"",onClick:e.onCallApi},null,8,["onClick"])]),_:1}),n(g,{visible:e.visible,"onUpdate:visible":o[5]||(o[5]=a=>e.visible=a),title:e.title,options:e.multiOptions,"format-string":!0,modelValue:e.popupValue,"onUpdate:modelValue":o[6]||(o[6]=a=>e.popupValue=a),onChange:e.onChange,onConfirm:e.onConfirm,onCancel:e.onCancel,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","title","options","modelValue","onChange","onConfirm","onCancel","onVisibleStateChange"])])}var I=h(w,[["render",L]]);export{I as default};
