import{_ as M,t as g,a as c}from"./index.cc81463e.js";import{d as k,r as d,l as v,b as w,e as y,y as n,z as u,f as i,t as E}from"./vendor.d68a2f58.js";const _=k({name:"ExpDatePickerView",setup(){const e=d(""),a=d(""),r=d(""),m=d(""),V=d(""),f=d(""),o=d(""),l=g().startOf("day").subtract(4,"year").toDate(),t=g().startOf("day").add(5,"year").toDate(),h=(s,D)=>!(D==="second"&&s%5!=0);function p(s){console.log("event",s)}function C(s){p(s),c(`change: ${s}`)}return{dateValue:e,timeValue:a,dateTimeValue:r,minMaxValue:m,formatValue:V,filterValue:f,changeValue:o,minDate:l,maxDate:t,filter:h,onChange:p,onChangeEvent:C}}}),b={class:"date-picker-view-box"},Y=i("div",{class:"date-picker-view-header"},"-5year ~ 5year",-1),U={class:"date-picker-view-body"},B={class:"date-picker-view-box"},T=i("div",{class:"date-picker-view-header"},"\u79D2\u6B65\u8FDB5",-1),$={class:"date-picker-view-body"},j={class:"date-picker-view-box"},F={class:"date-picker-view-header"},N={class:"date-picker-view-body"};function O(e,a,r,m,V,f){const o=v("fx-date-picker-view"),l=v("fx-group");return w(),y("div",null,[n(l,{title:"initialMode=date"},{default:u(()=>[n(o,{initialMode:"date",modelValue:e.dateValue,"onUpdate:modelValue":a[0]||(a[0]=t=>e.dateValue=t),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),n(l,{title:"initialMode=time"},{default:u(()=>[n(o,{initialMode:"time",modelValue:e.timeValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.timeValue=t),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),n(l,{title:"initialMode=datetime"},{default:u(()=>[n(o,{initialMode:"datetime",modelValue:e.dateTimeValue,"onUpdate:modelValue":a[2]||(a[2]=t=>e.dateTimeValue=t),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1}),n(l,{title:"minDate/maxDate"},{default:u(()=>[i("div",b,[Y,i("div",U,[n(o,{initialMode:"date",minDate:e.maxDate,maxDate:e.minDate,modelValue:e.minMaxValue,"onUpdate:modelValue":a[3]||(a[3]=t=>e.minMaxValue=t),onChange:e.onChange},null,8,["minDate","maxDate","modelValue","onChange"])])])]),_:1}),n(l,{title:"filter"},{default:u(()=>[i("div",B,[T,i("div",$,[n(o,{initialMode:"datetime",filter:e.filter,modelValue:e.filterValue,"onUpdate:modelValue":a[4]||(a[4]=t=>e.filterValue=t),onChange:e.onChange},null,8,["filter","modelValue","onChange"])])])]),_:1}),n(l,{title:"formatTemplate=YYYY\u5E74MM\u6708DD\u65E5"},{default:u(()=>[i("div",j,[i("div",F,"v-model: "+E(e.formatValue),1),i("div",N,[n(o,{initialMode:"date",formatTemplate:"YYYY\u5E74MM\u6708DD\u65E5",modelValue:e.formatValue,"onUpdate:modelValue":a[5]||(a[5]=t=>e.formatValue=t),onChange:e.onChange},null,8,["modelValue","onChange"])])])]),_:1}),n(l,{title:"change \u4E8B\u4EF6"},{default:u(()=>[n(o,{initialMode:"date",modelValue:e.changeValue,"onUpdate:modelValue":a[6]||(a[6]=t=>e.changeValue=t),onChange:e.onChangeEvent},null,8,["modelValue","onChange"])]),_:1})])}var S=M(_,[["render",O]]);export{S as default};
