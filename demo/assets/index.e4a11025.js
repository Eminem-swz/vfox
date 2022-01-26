import{d as L,r as t,R as p,m as f,e as j,f as Y,z as l,A as u,F as N,g as d,t as E,I as P}from"./vendor.1f7be6ea.js";import{_ as I,a as m,r as O}from"./index.e283f0d6.js";const T=L({name:"ExpCalendar",setup(){const e="YYYY-MM-DD",o=t([new Date]),S=t([]),h=t(""),D=t(""),V=t(p().format(e)),s=t([]),i=t(!1),r=t(!1),g=t(!1),v=t(!1),a=t(!1),C=t(!1),k="\u65E5\u671F\u9009\u62E9",R=(n,w)=>w==="range"?n.map(b=>p(b).format(e)).join(" ~ "):p(n[0]).format(e),y=(n,w)=>w==="range"?n.split(" ~ ").map(b=>p(b,e,!0).toDate()):[p(n,e,!0).toDate()],$=n=>{C.value&&(console.log("change",n),m(`${n.state} \u4E8B\u4EF6\u89E6\u53D1`)),n.state==="hidden"&&(C.value=!1,a.value=!1)};function F(n){console.log("change",n)}const M=n=>{console.log("select",n)},U=n=>{a.value&&(console.log("confirm",n),m("\u89E6\u53D1\u4E86\u786E\u5B9A\u4E8B\u4EF6"))},c=n=>{m(`\u9009\u62E9\u4E86 ${n.label}`)};function A(){O({mode:"range",showClose:!0,success:n=>{console.log("success",n),n.cancel?m("\u53D6\u6D88\u4E86"):m(`\u9009\u62E9\u4E86 ${n.detail.label}`)}})}function B(){V.value=p(V.value,e,!0).add(1,"day").format(e)}return{title:k,value:o,rangeValue:S,viewValue:h,viewRangeValue:D,popupValue:V,popupRangeValue:s,formatter:R,parser:y,popupVisible:i,popupRangeVisible:r,popupShowConfirm:g,popupShowClose:v,confirmEvent:a,visibleEvent:C,onVisibleStateChange:$,onChange:F,onSelect:M,onConfirm:U,onRangeConfirm:c,onCallApi:A,addOneDay:B}}}),z={class:"exp-calendarView-box"},q={class:"exp-calendarView-header"},G={class:"exp-calendarView-body"},H={class:"exp-calendarView-box"},J={class:"exp-calendarView-header"},K={class:"exp-calendarView-body"};function Q(e,o,S,h,D,V){const s=f("fx-calendar"),i=f("fx-cell"),r=f("fx-group"),g=f("fx-calendar-view"),v=f("fx-calendar-popup");return j(),Y(N,null,[l(r,{title:"Calendar"},{default:u(()=>[l(i,{label:"\u57FA\u7840"},{default:u(()=>[l(s)]),_:1}),l(i,{label:"v-model today"},{default:u(()=>[l(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),"popup-show-confirm":""},null,8,["modelValue"])]),_:1}),l(i,{label:"minDate/maxDate 11-11"},{default:u(()=>[l(s,{"min-date":new Date("2021-11-11"),"max-date":new Date("2022-11-11"),placeholder:"\u9009\u62E9\u65E5\u671F","popup-show-close":""},null,8,["min-date","max-date"])]),_:1}),l(i,{label:"initialMode=range"},{default:u(()=>[l(s,{initialMode:"range",modelValue:e.rangeValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.rangeValue=a),onChange:e.onChange,"popup-show-close":""},null,8,["modelValue","onChange"])]),_:1}),l(i,{label:"initialMode=range && allowSameDay"},{default:u(()=>[l(s,{initialMode:"range",allowSameDay:"",onChange:e.onChange,"popup-show-close":""},null,8,["onChange"])]),_:1}),l(i,{label:"\u7981\u7528"},{default:u(()=>[l(s,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"CalendarView"},{default:u(()=>[d("div",z,[d("div",q,"\u9009\u62E9\uFF1A"+E(e.viewValue),1),d("div",G,[l(g,{initialMode:"single",modelValue:e.viewValue,"onUpdate:modelValue":o[3]||(o[3]=a=>e.viewValue=a),formatter:e.formatter,parser:e.parser,onSelect:e.onSelect},null,8,["modelValue","formatter","parser","onSelect"])])])]),_:1}),l(r,{title:"CalendarView initialMode=range"},{default:u(()=>[d("div",H,[d("div",J,"\u9009\u62E9\uFF1A"+E(e.viewRangeValue),1),d("div",K,[l(g,{initialMode:"range","first-day-of-week":1,modelValue:e.viewRangeValue,"onUpdate:modelValue":o[4]||(o[4]=a=>e.viewRangeValue=a),formatter:e.formatter,parser:e.parser,onSelect:e.onSelect},null,8,["modelValue","formatter","parser","onSelect"])])])]),_:1}),l(r,{title:"CalendarPopup"},{default:u(()=>[l(i,{label:"v-modal +1day",isLink:"",onClick:e.addOneDay},{default:u(()=>[P(E(e.popupValue),1)]),_:1},8,["onClick"]),l(i,{label:"showConfirm=true",isLink:"",onClick:o[5]||(o[5]=a=>{e.confirmEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!1,e.popupVisible=!0})}),l(i,{label:"initialMode=range && max-range=5",isLink:"",onClick:o[6]||(o[6]=a=>e.popupRangeVisible=!0)})]),_:1}),l(r,{title:"CalendarPopup Event"},{default:u(()=>[l(i,{label:"confirm",isLink:"",onClick:o[7]||(o[7]=a=>{e.confirmEvent=!0,e.popupShowConfirm=!1,e.popupShowClose=!1,e.popupVisible=!0})}),l(i,{label:"visible-state-change",isLink:"",onClick:o[8]||(o[8]=a=>{e.visibleEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!0,e.popupVisible=!0})})]),_:1}),l(r,{title:"API"},{default:u(()=>[l(i,{label:"showCalendar",isLink:"",onClick:o[9]||(o[9]=a=>e.onCallApi())})]),_:1}),l(v,{visible:e.popupVisible,"onUpdate:visible":o[10]||(o[10]=a=>e.popupVisible=a),title:e.title,"show-confirm":e.popupShowConfirm,"show-close":e.popupShowClose,modelValue:e.popupValue,"onUpdate:modelValue":o[11]||(o[11]=a=>e.popupValue=a),formatter:e.formatter,parser:e.parser,onConfirm:e.onConfirm,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","title","show-confirm","show-close","modelValue","formatter","parser","onConfirm","onVisibleStateChange"]),l(v,{visible:e.popupRangeVisible,"onUpdate:visible":o[12]||(o[12]=a=>e.popupRangeVisible=a),title:e.title,initialMode:"range","max-range":5,"show-confirm":!0,modelValue:e.popupRangeValue,"onUpdate:modelValue":o[13]||(o[13]=a=>e.popupRangeValue=a),onConfirm:e.onRangeConfirm},null,8,["visible","title","modelValue","onConfirm"])],64)}var Z=I(T,[["render",Q]]);export{Z as default};
