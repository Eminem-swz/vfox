import{_ as V,n as u,a as _}from"./index.074b5048.js";import{r as m,c,a as t,w as r,o as f,f as o,I as v}from"./vendor.d14b3c37.js";const g={name:"DatePickerView",data(){return{dateValue:"",timeValue:"",dateTimeValue:"",minDate:u().startOf("day").subtract(4,"year").toDate(),maxDate:u().startOf("day").add(5,"year").toDate(),minMaxValue:"",formatValue:"",filterValue:"",filter:(i,a)=>!(a==="second"&&i%5!=0),changeValue:""}},methods:{onChange(i){console.log(i)},onChangeEvent(i){console.log(i),_.showToast(`change: ${i.formatted}`)}}},h={class:"date-picker-view-box"},p=o("div",{class:"date-picker-view-header"},"-5year ~ 5year",-1),C={class:"date-picker-view-body"},x={class:"date-picker-view-box"},w=o("div",{class:"date-picker-view-header"},"\u79D2\u6B65\u8FDB5",-1),D={class:"date-picker-view-body"},k={class:"date-picker-view-box"},M={class:"date-picker-view-header"},y={class:"date-picker-view-body"},b={class:"date-picker-view-box"},Y=o("div",{class:"date-picker-view-header"},"change",-1),T={class:"date-picker-view-body"};function U(i,a,j,B,e,n){const d=m("fx-date-picker-view"),s=m("fx-group");return f(),c("div",null,[t(s,{title:"initialMode=date"},{default:r(()=>[t(d,{initialMode:"date",modelValue:e.dateValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.dateValue=l),onChange:n.onChange},null,8,["modelValue","onChange"])]),_:1}),t(s,{title:"initialMode=time"},{default:r(()=>[t(d,{initialMode:"time",modelValue:e.timeValue,"onUpdate:modelValue":a[1]||(a[1]=l=>e.timeValue=l),onChange:n.onChange},null,8,["modelValue","onChange"])]),_:1}),t(s,{title:"initialMode=datetime"},{default:r(()=>[t(d,{initialMode:"datetime",modelValue:e.dateTimeValue,"onUpdate:modelValue":a[2]||(a[2]=l=>e.dateTimeValue=l),onChange:n.onChange},null,8,["modelValue","onChange"])]),_:1}),t(s,{title:"minDate/maxDate"},{default:r(()=>[o("div",h,[p,o("div",C,[t(d,{initialMode:"date",minDate:e.maxDate,maxDate:e.minDate,modelValue:e.minMaxValue,"onUpdate:modelValue":a[3]||(a[3]=l=>e.minMaxValue=l),onChange:n.onChange},null,8,["minDate","maxDate","modelValue","onChange"])])])]),_:1}),t(s,{title:"filter"},{default:r(()=>[o("div",x,[w,o("div",D,[t(d,{initialMode:"datetime",filter:e.filter,modelValue:e.filterValue,"onUpdate:modelValue":a[4]||(a[4]=l=>e.filterValue=l),onChange:n.onChange},null,8,["filter","modelValue","onChange"])])])]),_:1}),t(s,{title:"formatTemplate=YYYY\u5E74MM\u6708DD\u65E5"},{default:r(()=>[o("div",k,[o("div",M,"v-model: "+v(e.formatValue),1),o("div",y,[t(d,{initialMode:"date",formatTemplate:"YYYY\u5E74MM\u6708DD\u65E5",modelValue:e.formatValue,"onUpdate:modelValue":a[5]||(a[5]=l=>e.formatValue=l),onChange:n.onChange},null,8,["modelValue","onChange"])])])]),_:1}),t(s,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:r(()=>[o("div",b,[Y,o("div",T,[t(d,{initialMode:"date",modelValue:e.changeValue,"onUpdate:modelValue":a[6]||(a[6]=l=>e.changeValue=l),onChange:n.onChangeEvent},null,8,["modelValue","onChange"])])])]),_:1})])}var O=V(g,[["render",U]]);export{O as default};