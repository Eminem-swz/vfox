import{_ as s,n as g,a as r,m as c}from"./index.7928e3b6.js";import{r as f,c as V,a as e,w as a,o as k}from"./vendor.d14b3c37.js";const p={name:"DatePicker",data(){return{title:"DatePicker",dateValue:"",timeValue:"",dateTimeValue:"",minDate:g().startOf("day").subtract(4,"year").toDate(),maxDate:g().startOf("day").add(5,"year").toDate(),minMaxValue:"",formatValue:"",filterValue:"",filter:(o,n)=>!(n==="second"&&o%5!=0),disableValue:new Date,changeValue:"",visible:!1,popupValue:"",clickEvent:!1,visibleEvent:!1,changeEvent:!1}},methods:{onChange(o){console.log("change",o),this.changeEvent&&r.showToast(`\u503C\u6539\u4E3A: ${o.formatted}`)},onChangeEvent(o){console.log("change",o)},onConfirm(o){console.log("confirm",o),this.clickEvent&&r.showToast("\u70B9\u51FB\u786E\u5B9A\u6309\u94AE")},onCancel(o){console.log("cancel",o),this.clickEvent&&(o.cancelClick?r.showToast("\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE"):o.maskClick&&r.showToast("\u70B9\u51FB\u4E86\u8499\u5C42"))},onVisibleStateChange({state:o}){this.visibleEvent&&r.showToast(`${o} \u4E8B\u4EF6\u89E6\u53D1`),o==="hidden"&&(this.clickEvent=!1,this.visibleEvent=!1,this.changeEvent=!1)},onCallApi(){c.showDatePicker({title:"DatePicker",success:o=>{console.log(o),o.cancel?r.showToast("\u53D6\u6D88\u4E86"):r.showToast(`\u9009\u62E9\u4E86 ${o.detail.formatted}`)}})}}};function b(o,n,v,_,l,t){const u=f("fx-date-picker"),d=f("fx-form-item"),m=f("fx-group"),h=f("fx-cell"),C=f("fx-date-picker-popup");return k(),V("div",null,[e(m,{title:"DatePicker initialMode"},{default:a(()=>[e(d,{name:"date-picker",label:"\u65E5\u671F date"},{default:a(()=>[e(u,{initialMode:"date",modelValue:l.dateValue,"onUpdate:modelValue":n[0]||(n[0]=i=>l.dateValue=i),onChange:t.onChange},null,8,["modelValue","onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u65F6\u95F4 time"},{default:a(()=>[e(u,{initialMode:"time",modelValue:l.timeValue,"onUpdate:modelValue":n[1]||(n[1]=i=>l.timeValue=i),onChange:t.onChange},null,8,["modelValue","onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u65E5\u671F\u65F6\u95F4 datetime"},{default:a(()=>[e(u,{initialMode:"datetime",modelValue:l.dateTimeValue,"onUpdate:modelValue":n[2]||(n[2]=i=>l.dateTimeValue=i),onChange:t.onChange},null,8,["modelValue","onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u5206\u79D2 minute-second"},{default:a(()=>[e(u,{initialMode:"minute-second",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u65F6\u5206 hour-minute"},{default:a(()=>[e(u,{initialMode:"hour-minute",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u5929\u65F6 day-hour"},{default:a(()=>[e(u,{initialMode:"day-hour",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u6708\u65E5 month-day"},{default:a(()=>[e(u,{initialMode:"month-day",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u6708\u65E5\u65F6 month-day-hour"},{default:a(()=>[e(u,{initialMode:"month-day-hour",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u6708\u65E5\u65F6\u5206 month-day-hour-minute"},{default:a(()=>[e(u,{initialMode:"month-day-hour-minute",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u5E74\u6708 year-month"},{default:a(()=>[e(u,{initialMode:"year-month",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u5E74\u6708\u65E5\u65F6 year-month-day-hour"},{default:a(()=>[e(u,{initialMode:"year-month-day-hour",onChange:t.onChange},null,8,["onChange"])]),_:1}),e(d,{name:"date-picker",label:"\u5E74\u6708\u65E5\u65F6\u5206 year-month-day-hour-minute"},{default:a(()=>[e(u,{initialMode:"year-month-day-hour-minute",onChange:t.onChange},null,8,["onChange"])]),_:1})]),_:1}),e(m,{title:"DatePicker minDate & maxDate"},{default:a(()=>[e(d,{name:"date-picker",label:"-5year ~ 5year"},{default:a(()=>[e(u,{initialMode:"date",minDate:l.maxDate,maxDate:l.minDate,modelValue:l.minMaxValue,"onUpdate:modelValue":n[3]||(n[3]=i=>l.minMaxValue=i),onChange:t.onChange},null,8,["minDate","maxDate","modelValue","onChange"])]),_:1})]),_:1}),e(m,{title:"DatePicker filter"},{default:a(()=>[e(d,{name:"date-picker",label:"\u79D2\u6B65\u8FDB5"},{default:a(()=>[e(u,{initialMode:"datetime",filter:l.filter,modelValue:l.filterValue,"onUpdate:modelValue":n[4]||(n[4]=i=>l.filterValue=i),onChange:t.onChange},null,8,["filter","modelValue","onChange"])]),_:1})]),_:1}),e(m,{title:"DatePicker formatTemplate"},{default:a(()=>[e(d,{name:"date-picker",label:"YYYY\u5E74MM\u6708DD\u65E5"},{default:a(()=>[e(u,{initialMode:"date",formatTemplate:"YYYY\u5E74MM\u6708DD\u65E5",modelValue:l.formatValue,"onUpdate:modelValue":n[5]||(n[5]=i=>l.formatValue=i),onChange:t.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(m,{title:"DatePicker disabled"},{default:a(()=>[e(d,{name:"date-picker",label:"\u7981\u7528"},{default:a(()=>[e(u,{initialMode:"date",disabled:"",modelValue:l.disableValue,onChange:t.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(m,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:a(()=>[e(d,{name:"date-picker",label:"change"},{default:a(()=>[e(u,{initialMode:"date",modelValue:l.changeValue,"onUpdate:modelValue":n[6]||(n[6]=i=>l.changeValue=i),onChange:t.onChangeEvent},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(m,{title:"DatePickerPopup"},{default:a(()=>[e(h,{label:"\u57FA\u7840",isLink:"",onClick:n[7]||(n[7]=i=>l.visible=!0),content:l.popupValue},null,8,["content"])]),_:1}),e(m,{title:"DatePickerPopup Event"},{default:a(()=>[e(h,{label:"change",isLink:"",onClick:n[8]||(n[8]=i=>{l.changeEvent=!0,l.visible=!0})}),e(h,{label:"confirm/cancel",isLink:"",onClick:n[9]||(n[9]=i=>{l.clickEvent=!0,l.visible=!0})}),e(h,{label:"visible-state-change",isLink:"",onClick:n[10]||(n[10]=i=>{l.visibleEvent=!0,l.visible=!0})})]),_:1}),e(m,{title:"API"},{default:a(()=>[e(h,{label:"showDatePicker",isLink:"",onClick:t.onCallApi},null,8,["onClick"])]),_:1}),e(C,{initialMode:"date",formatTemplate:"YYYY\u5E74MM\u6708DD\u65E5",visible:l.visible,"onUpdate:visible":n[11]||(n[11]=i=>l.visible=i),title:l.title,modelValue:l.popupValue,"onUpdate:modelValue":n[12]||(n[12]=i=>l.popupValue=i),onChange:t.onChange,onConfirm:t.onConfirm,onCancel:t.onCancel,onVisibleStateChange:t.onVisibleStateChange},null,8,["visible","title","modelValue","onChange","onConfirm","onCancel","onVisibleStateChange"])])}var y=s(p,[["render",b]]);export{y as default};
