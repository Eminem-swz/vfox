import{_ as V,n as f,a as d,h as C}from"./index.55f10eb5.js";import{r as m,c,a as o,w as a,o as b,f as r,I as v,A as h}from"./vendor.d14b3c37.js";const D={components:{},name:"Calendar",data(){return{viewDate:new Date,viewRangeDate:[],popupValue:[new Date],popupRangeValue:[],popupVisible:!1,popupRangeVisible:!1,popupShowConfirm:!1,popupShowClose:!1,title:"\u65E5\u671F\u9009\u62E9",value:new Date,rangeValue:[],placeholder:"",confirmEvent:!1,visibleEvent:!1}},computed:{popupValueString(){return f(this.popupValue).format("YYYY-MM-DD")},viewDateString(){return f(this.viewDate).format("YYYY-MM-DD")},viewRangeDateString(){return this.viewRangeDate.map(i=>f(i).format("YYYY-MM-DD")).join(" ~ ")}},methods:{onChange(i){console.log("change",i)},onSelect(i){console.log("select",i)},addOneDay(){this.popupValue=[f(this.popupValue[0]).add(1,"day").toDate()]},onConfirm(i){console.log("confirm",i),this.confirmEvent&&d.showToast("\u89E6\u53D1\u4E86\u786E\u5B9A\u4E8B\u4EF6")},onRangeConfirm(i){d.showToast(`\u9009\u62E9\u4E86 ${i.label}`)},onVisibleStateChange({state:i}){this.visibleEvent&&d.showToast(`${i} \u4E8B\u4EF6\u89E6\u53D1`),i==="hidden"&&(this.visibleEvent=!1,this.confirmEvent=!1)},onCallApi(){C.showCalendar({mode:"range",showClose:!0,success:i=>{console.log("success",i),i.cancel?d.showToast("\u53D6\u6D88\u4E86"):d.showToast(`\u9009\u62E9\u4E86 ${i.detail.formatted}`)}})}}},_={class:"calendar-view-box"},S={class:"calendar-view-header"},x={class:"calendar-view-body"},k={class:"calendar-view-box"},M={class:"calendar-view-header"},R={class:"calendar-view-body"};function y(i,l,Y,E,e,t){const p=m("fx-calendar"),s=m("fx-cell"),u=m("fx-group"),w=m("fx-calendar-view"),g=m("fx-calendar-popup");return b(),c("div",null,[o(u,{title:"Calendar"},{default:a(()=>[o(s,{label:"\u57FA\u7840"},{default:a(()=>[o(p,{placeholder:e.placeholder},null,8,["placeholder"])]),_:1}),o(s,{label:"v-model today"},{default:a(()=>[o(p,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),"popup-show-confirm":""},null,8,["modelValue"])]),_:1}),o(s,{label:"minDate/maxDate 11-11"},{default:a(()=>[o(p,{"min-date":new Date("2020-11-11"),"max-date":new Date("2021-11-11"),placeholder:"\u9009\u62E9\u65E5\u671F","popup-show-close":""},null,8,["min-date","max-date"])]),_:1}),o(s,{label:"initialMode=range"},{default:a(()=>[o(p,{initialMode:"range",modelValue:e.rangeValue,"onUpdate:modelValue":l[1]||(l[1]=n=>e.rangeValue=n),onChange:t.onChange,"popup-show-close":""},null,8,["modelValue","onChange"])]),_:1}),o(s,{label:"initialMode=range && allowSameDay"},{default:a(()=>[o(p,{initialMode:"range",allowSameDay:"",onChange:t.onChange,"popup-show-close":""},null,8,["onChange"])]),_:1}),o(s,{label:"\u7981\u7528"},{default:a(()=>[o(p,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=n=>e.value=n),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),o(u,{title:"CalendarView"},{default:a(()=>[r("div",_,[r("div",S,"\u9009\u62E9\uFF1A"+v(t.viewDateString),1),r("div",x,[o(w,{initialMode:"single",modelValue:e.viewDate,"onUpdate:modelValue":l[3]||(l[3]=n=>e.viewDate=n),onSelect:t.onSelect},null,8,["modelValue","onSelect"])])])]),_:1}),o(u,{title:"CalendarView initialMode=range"},{default:a(()=>[r("div",k,[r("div",M,"\u9009\u62E9\uFF1A"+v(t.viewRangeDateString),1),r("div",R,[o(w,{initialMode:"range","first-day-of-week":1,modelValue:e.viewRangeDate,"onUpdate:modelValue":l[4]||(l[4]=n=>e.viewRangeDate=n),onSelect:t.onSelect},null,8,["modelValue","onSelect"])])])]),_:1}),o(u,{title:"CalendarPopup"},{default:a(()=>[o(s,{label:"v-modal +1day",isLink:"",onClick:t.addOneDay},{default:a(()=>[h(v(t.popupValueString),1)]),_:1},8,["onClick"]),o(s,{label:"showConfirm=true",isLink:"",onClick:l[5]||(l[5]=n=>{e.confirmEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!1,e.popupVisible=!0})}),o(s,{label:"initialMode=range && max-range=5",isLink:"",onClick:l[6]||(l[6]=n=>e.popupRangeVisible=!0)})]),_:1}),o(u,{title:"CalendarPopup Event"},{default:a(()=>[o(s,{label:"confirm",isLink:"",onClick:l[7]||(l[7]=n=>{e.confirmEvent=!0,e.popupShowConfirm=!1,e.popupShowClose=!1,e.popupVisible=!0})}),o(s,{label:"visible-state-change",isLink:"",onClick:l[8]||(l[8]=n=>{e.visibleEvent=!0,e.popupShowConfirm=!0,e.popupShowClose=!0,e.popupVisible=!0})})]),_:1}),o(u,{title:"API"},{default:a(()=>[o(s,{label:"showCalendar",isLink:"",onClick:l[9]||(l[9]=n=>t.onCallApi())})]),_:1}),o(g,{visible:e.popupVisible,"onUpdate:visible":l[10]||(l[10]=n=>e.popupVisible=n),title:e.title,"show-confirm":e.popupShowConfirm,"show-close":e.popupShowClose,modelValue:e.popupValue,"onUpdate:modelValue":l[11]||(l[11]=n=>e.popupValue=n),onConfirm:t.onConfirm,onVisibleStateChange:t.onVisibleStateChange},null,8,["visible","title","show-confirm","show-close","modelValue","onConfirm","onVisibleStateChange"]),o(g,{visible:e.popupRangeVisible,"onUpdate:visible":l[12]||(l[12]=n=>e.popupRangeVisible=n),title:e.title,initialMode:"range","max-range":5,"show-confirm":!0,modelValue:e.popupRangeValue,"onUpdate:modelValue":l[13]||(l[13]=n=>e.popupRangeValue=n),onConfirm:t.onRangeConfirm},null,8,["visible","title","modelValue","onConfirm"])])}var L=V(D,[["render",y]]);export{L as default};
