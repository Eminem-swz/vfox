import{_ as b,a as C}from"./index.cc81463e.js";import{d as k,l as _,b as n,e as f,y as u,z as e,F as c,p as g,I as d,g as i,t as h}from"./vendor.d68a2f58.js";const V=k({name:"ExpCheckbox",data(){return{checked:!1,groupValue:["A","C"],groups:["A","B","C"]}},methods:{onChange(o){console.log("change",o),C(`Change Value: ${o}`)}}}),m=d("\u52FE\u9009"),v=d("\u52FE\u9009"),E=d("\u52FE\u9009"),B=d("\u52FE\u9009"),A=d("A"),F=d("B"),x=d("C");function D(o,r,y,$,U,j){const a=_("fx-checkbox"),t=_("fx-cell"),p=_("fx-group"),s=_("fx-checkbox-group");return n(),f("div",null,[u(p,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[u(t,{label:"\u9ED8\u8BA4"},{default:e(()=>[u(a)]),_:1}),u(t,{label:"\u5E26\u6587\u6848"},{default:e(()=>[u(a,{checked:o.checked,"onUpdate:checked":r[0]||(r[0]=l=>o.checked=l)},{default:e(()=>[m]),_:1},8,["checked"])]),_:1}),u(t,{label:"\u9ED8\u8BA4\u6FC0\u6D3B"},{default:e(()=>[u(a,{checked:""},{default:e(()=>[v]),_:1})]),_:1}),u(t,{label:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:e(()=>[u(a,{checked:"",activeColor:"#8b1721"},{default:e(()=>[E]),_:1})]),_:1}),u(t,{label:"\u7981\u7528"},{default:e(()=>[u(a,{disabled:""},{default:e(()=>[B]),_:1})]),_:1})]),_:1}),u(p,{title:"CheckboxGroup"},{default:e(()=>[u(t,{label:"\u9ED8\u8BA4"},{default:e(()=>[u(s,{modelValue:o.groupValue,"onUpdate:modelValue":r[1]||(r[1]=l=>o.groupValue=l)},{default:e(()=>[(n(!0),f(c,null,g(o.groups,l=>(n(),i(a,{key:l,value:l},{default:e(()=>[d(h(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(t,{label:"\u5185\u8054"},{default:e(()=>[u(s,{inline:"",activeColor:"#8b1721"},{default:e(()=>[(n(!0),f(c,null,g(o.groups,l=>(n(),i(a,{key:l,value:l},{default:e(()=>[d(h(l),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),u(t,{label:"\u7981\u7528"},{default:e(()=>[u(s,{modelValue:["A"],disabled:""},{default:e(()=>[(n(!0),f(c,null,g(o.groups,l=>(n(),i(a,{key:l,value:l},{default:e(()=>[d(h(l),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),u(t,{label:"\u901A\u8FC7options\u8BBE\u7F6E"},{default:e(()=>[u(s,{modelValue:o.groupValue,"onUpdate:modelValue":r[2]||(r[2]=l=>o.groupValue=l),options:o.groups},null,8,["modelValue","options"])]),_:1})]),_:1}),u(p,{title:"CheckboxGroup + Cell"},{default:e(()=>[u(s,{modelValue:o.groupValue,"onUpdate:modelValue":r[3]||(r[3]=l=>o.groupValue=l)},{default:e(()=>[(n(!0),f(c,null,g(o.groups,l=>(n(),i(t,{key:l,label:"\u5355\u5143\u683C "+l},{icon:e(()=>[u(a,{circle:"",value:l},null,8,["value"])]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(p,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[u(t,{label:"change"},{default:e(()=>[u(s,{onChange:o.onChange},{default:e(()=>[u(a,{value:"A"},{default:e(()=>[A]),_:1}),u(a,{value:"B"},{default:e(()=>[F]),_:1}),u(a,{value:"C"},{default:e(()=>[x]),_:1})]),_:1},8,["onChange"])]),_:1})]),_:1})])}var N=b(V,[["render",D]]);export{N as default};
