import{_ as j,t as p,a as f,u as Y}from"./index.99a038d5.js";import{d as N,B as E,r as t,l as m,b as P,e as O,x as l,y as u,f as d,t as S,H as T}from"./vendor.6d83210b.js";const H=N({name:"ExpCalendar",setup(){const e="YYYY-MM-DD",o=E([new Date]),h=E([]),D=t(""),k=t(""),v=t(p().format(e)),s=E([]),i=t(!1),r=t(!1),V=t(!1),g=t(!1),a=t(!1),C=t(!1),y="\u65E5\u671F\u9009\u62E9",R=(n,w)=>w==="range"?n.map(b=>p(b).format(e)).join(" ~ "):p(n[0]).format(e),$=(n,w)=>w==="range"?n.split(" ~ ").map(b=>p(b,e,!0).toDate()):[p(n,e,!0).toDate()];function M(n){C.value&&(console.log("event",n),f(`${n.state} \u4E8B\u4EF6\u89E6\u53D1`)),n.state==="hidden"&&(C.value=!1,a.value=!1)}function F(n){console.log("change",n)}function U(n){console.log("select",n)}function c(n){a.value&&(console.log("event",n),f("\u89E6\u53D1\u4E86\u786E\u5B9A\u4E8B\u4EF6"))}function B(n){f(`\u9009\u62E9\u4E86 ${n.label}`)}function A(){Y({mode:"range",showClose:!0,success:n=>{console.log("success",n),n.cancel?f("\u53D6\u6D88\u4E86"):f(`\u9009\u62E9\u4E86 ${n.detail.label}`)}})}function L(){v.value=p(v.value,e,!0).add(1,"day").format(e)}return{title:y,value:o,rangeValue:h,viewValue:D,viewRangeValue:k,popupValue:v,popupRangeValue:s,formatter:R,parser:$,popupVisible:i,popupRangeVisible:r,popupShowConfirm:V,popupShowClose:g,confirmEvent:a,visibleEvent:C,onVisibleStateChange:M,onChange:F,onSelect:U,onConfirm:c,onRangeConfirm:B,onCallApi:A,addOneDay:L}}}),I={class:"calendar-view-box"},q={class:"calendar-view-header"},z={class:"calendar-view-body"},G={class:"calendar-view-box"},J={class:"calendar-view-header"},K={class:"calendar-view-body"};function Q(e,o,h,D,k,v){const s=m("fx-calendar"),i=m("fx-cell"),r=m("fx-group"),V=m("fx-calendar-view"),g=m("fx-calendar-popup");return P(),O("div",null,[l(r,{title:"Calendar"},{default:u(()=>[l(i,{label:"\u57FA\u7840"},{default:u(()=>[l(s)]),_:1}),l(i,{label:"v-model today"},{default:u(()=>[l(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),"popup-show-confirm":""},null,8,["modelValue"])]),_:1}),l(i,{label:"minDate/maxDate 11-11"},{default:u(()=>[l(s,{"min-date":new Date("2021-11-11"),"max-date":new Date("2022-11-11"),placeholder:"\u9009\u62E9\u65E5\u671F","popup-show-close":""},null,8,["min-date","max-date"])]),_:1}),l(i,{label:"initialMode=range"},{default:u(()=>[l(s,{initialMode:"range",modelValue:e.rangeValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.rangeValue=a),onChange:e.onChange,"popup-show-close":""},null,8,["modelValue","onChange"])]),_:1}),l(i,{label:"initialMode=range && allowSameDay"},{default:u(()=>[l(s,{initialMode:"range",allowSameDay:"",onChange:e.onChange,"popup-show-close":""},null,8,["onChange"])]),_:1}),l(i,{label:"\u7981\u7528"},{default:u(()=>[l(s,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"CalendarView"},{default:u(()=>[d("div",I,[d("div",q,"\u9009\u62E9\uFF1A"+S(e.viewValue),1),d("div",z,[l(V,{initialMode:"single",modelValue:e.viewValue,"onUpdate:modelValue":o[3]||(o[3]=a=>e.viewValue=a),formatter:e.formatter,parser:e.parser,onSelect:e.onSelect},null,8,["modelValue","formatter","parser","onSelect"])])])]),_:1}),l(r,{title:"CalendarView initialMode=range"},{default:u(()=>[d("div",G,[d("div",J,"\u9009\u62E9\uFF1A"+S(e.viewRangeValue),1),d("div",K,[l(V,{initialMode:"range","first-day-of-week":1,modelValue:e.viewRangeValue,"onUpdate:modelValue":o[4]||(o[4]=a=>e.viewRangeValue=a),formatter:e.formatter,parser:e.parser,onSelect:e.onSelect},null,8,["modelValue","formatter","parser","onSelect"])])])]),_:1}),l(r,{title:"CalendarPopup"},{default:u(()=>[l(i,{label:"v-modal +1day",isLink:"",onClick:e.addOneDay},{default:u(()=>[T(S(e.popupValue),1)]),_:1},8,["onClick"]),l(i,{label:"showConfirm=true",isLink:"",onClick:o[5]||(o[5]=a=>{e.confirmEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!1,e.popupVisible=!0})}),l(i,{label:"initialMode=range && max-range=5",isLink:"",onClick:o[6]||(o[6]=a=>e.popupRangeVisible=!0)})]),_:1}),l(r,{title:"CalendarPopup Event"},{default:u(()=>[l(i,{label:"confirm",isLink:"",onClick:o[7]||(o[7]=a=>{e.confirmEvent=!0,e.popupShowConfirm=!1,e.popupShowClose=!1,e.popupVisible=!0})}),l(i,{label:"visible-state-change",isLink:"",onClick:o[8]||(o[8]=a=>{e.visibleEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!0,e.popupVisible=!0})})]),_:1}),l(r,{title:"API"},{default:u(()=>[l(i,{label:"showCalendar",isLink:"",onClick:o[9]||(o[9]=a=>e.onCallApi())})]),_:1}),l(g,{visible:e.popupVisible,"onUpdate:visible":o[10]||(o[10]=a=>e.popupVisible=a),title:e.title,"show-confirm":e.popupShowConfirm,"show-close":e.popupShowClose,modelValue:e.popupValue,"onUpdate:modelValue":o[11]||(o[11]=a=>e.popupValue=a),formatter:e.formatter,parser:e.parser,onConfirm:e.onConfirm,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","title","show-confirm","show-close","modelValue","formatter","parser","onConfirm","onVisibleStateChange"]),l(g,{visible:e.popupRangeVisible,"onUpdate:visible":o[12]||(o[12]=a=>e.popupRangeVisible=a),title:e.title,initialMode:"range","max-range":5,"show-confirm":!0,modelValue:e.popupRangeValue,"onUpdate:modelValue":o[13]||(o[13]=a=>e.popupRangeValue=a),onConfirm:e.onRangeConfirm},null,8,["visible","title","modelValue","onConfirm"])])}var Z=j(H,[["render",Q]]);export{Z as default};
