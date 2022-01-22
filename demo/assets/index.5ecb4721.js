import{d as L,r as t,Q as p,l as f,b as j,e as Y,y as l,z as u,f as d,t as E,I as N}from"./vendor.4df8ce31.js";import{_ as P,a as m,t as I}from"./index.4c76766c.js";const O=L({name:"ExpCalendar",setup(){const e="YYYY-MM-DD",o=t([new Date]),S=t([]),h=t(""),D=t(""),v=t(p().format(e)),s=t([]),i=t(!1),r=t(!1),V=t(!1),g=t(!1),a=t(!1),C=t(!1),k="\u65E5\u671F\u9009\u62E9",y=(n,w)=>w==="range"?n.map(b=>p(b).format(e)).join(" ~ "):p(n[0]).format(e),R=(n,w)=>w==="range"?n.split(" ~ ").map(b=>p(b,e,!0).toDate()):[p(n,e,!0).toDate()],$=n=>{C.value&&(console.log("change",n),m(`${n.state} \u4E8B\u4EF6\u89E6\u53D1`)),n.state==="hidden"&&(C.value=!1,a.value=!1)};function c(n){console.log("change",n)}const M=n=>{console.log("select",n)},F=n=>{a.value&&(console.log("confirm",n),m("\u89E6\u53D1\u4E86\u786E\u5B9A\u4E8B\u4EF6"))},U=n=>{m(`\u9009\u62E9\u4E86 ${n.label}`)};function A(){I({mode:"range",showClose:!0,success:n=>{console.log("success",n),n.cancel?m("\u53D6\u6D88\u4E86"):m(`\u9009\u62E9\u4E86 ${n.detail.label}`)}})}function B(){v.value=p(v.value,e,!0).add(1,"day").format(e)}return{title:k,value:o,rangeValue:S,viewValue:h,viewRangeValue:D,popupValue:v,popupRangeValue:s,formatter:y,parser:R,popupVisible:i,popupRangeVisible:r,popupShowConfirm:V,popupShowClose:g,confirmEvent:a,visibleEvent:C,onVisibleStateChange:$,onChange:c,onSelect:M,onConfirm:F,onRangeConfirm:U,onCallApi:A,addOneDay:B}}}),T={class:"calendar-view-box"},z={class:"calendar-view-header"},Q={class:"calendar-view-body"},q={class:"calendar-view-box"},G={class:"calendar-view-header"},H={class:"calendar-view-body"};function J(e,o,S,h,D,v){const s=f("fx-calendar"),i=f("fx-cell"),r=f("fx-group"),V=f("fx-calendar-view"),g=f("fx-calendar-popup");return j(),Y("div",null,[l(r,{title:"Calendar"},{default:u(()=>[l(i,{label:"\u57FA\u7840"},{default:u(()=>[l(s)]),_:1}),l(i,{label:"v-model today"},{default:u(()=>[l(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),"popup-show-confirm":""},null,8,["modelValue"])]),_:1}),l(i,{label:"minDate/maxDate 11-11"},{default:u(()=>[l(s,{"min-date":new Date("2021-11-11"),"max-date":new Date("2022-11-11"),placeholder:"\u9009\u62E9\u65E5\u671F","popup-show-close":""},null,8,["min-date","max-date"])]),_:1}),l(i,{label:"initialMode=range"},{default:u(()=>[l(s,{initialMode:"range",modelValue:e.rangeValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.rangeValue=a),onChange:e.onChange,"popup-show-close":""},null,8,["modelValue","onChange"])]),_:1}),l(i,{label:"initialMode=range && allowSameDay"},{default:u(()=>[l(s,{initialMode:"range",allowSameDay:"",onChange:e.onChange,"popup-show-close":""},null,8,["onChange"])]),_:1}),l(i,{label:"\u7981\u7528"},{default:u(()=>[l(s,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"CalendarView"},{default:u(()=>[d("div",T,[d("div",z,"\u9009\u62E9\uFF1A"+E(e.viewValue),1),d("div",Q,[l(V,{initialMode:"single",modelValue:e.viewValue,"onUpdate:modelValue":o[3]||(o[3]=a=>e.viewValue=a),formatter:e.formatter,parser:e.parser,onSelect:e.onSelect},null,8,["modelValue","formatter","parser","onSelect"])])])]),_:1}),l(r,{title:"CalendarView initialMode=range"},{default:u(()=>[d("div",q,[d("div",G,"\u9009\u62E9\uFF1A"+E(e.viewRangeValue),1),d("div",H,[l(V,{initialMode:"range","first-day-of-week":1,modelValue:e.viewRangeValue,"onUpdate:modelValue":o[4]||(o[4]=a=>e.viewRangeValue=a),formatter:e.formatter,parser:e.parser,onSelect:e.onSelect},null,8,["modelValue","formatter","parser","onSelect"])])])]),_:1}),l(r,{title:"CalendarPopup"},{default:u(()=>[l(i,{label:"v-modal +1day",isLink:"",onClick:e.addOneDay},{default:u(()=>[N(E(e.popupValue),1)]),_:1},8,["onClick"]),l(i,{label:"showConfirm=true",isLink:"",onClick:o[5]||(o[5]=a=>{e.confirmEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!1,e.popupVisible=!0})}),l(i,{label:"initialMode=range && max-range=5",isLink:"",onClick:o[6]||(o[6]=a=>e.popupRangeVisible=!0)})]),_:1}),l(r,{title:"CalendarPopup Event"},{default:u(()=>[l(i,{label:"confirm",isLink:"",onClick:o[7]||(o[7]=a=>{e.confirmEvent=!0,e.popupShowConfirm=!1,e.popupShowClose=!1,e.popupVisible=!0})}),l(i,{label:"visible-state-change",isLink:"",onClick:o[8]||(o[8]=a=>{e.visibleEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!0,e.popupVisible=!0})})]),_:1}),l(r,{title:"API"},{default:u(()=>[l(i,{label:"showCalendar",isLink:"",onClick:o[9]||(o[9]=a=>e.onCallApi())})]),_:1}),l(g,{visible:e.popupVisible,"onUpdate:visible":o[10]||(o[10]=a=>e.popupVisible=a),title:e.title,"show-confirm":e.popupShowConfirm,"show-close":e.popupShowClose,modelValue:e.popupValue,"onUpdate:modelValue":o[11]||(o[11]=a=>e.popupValue=a),formatter:e.formatter,parser:e.parser,onConfirm:e.onConfirm,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","title","show-confirm","show-close","modelValue","formatter","parser","onConfirm","onVisibleStateChange"]),l(g,{visible:e.popupRangeVisible,"onUpdate:visible":o[12]||(o[12]=a=>e.popupRangeVisible=a),title:e.title,initialMode:"range","max-range":5,"show-confirm":!0,modelValue:e.popupRangeValue,"onUpdate:modelValue":o[13]||(o[13]=a=>e.popupRangeValue=a),onConfirm:e.onRangeConfirm},null,8,["visible","title","modelValue","onConfirm"])])}var X=P(O,[["render",J]]);export{X as default};
