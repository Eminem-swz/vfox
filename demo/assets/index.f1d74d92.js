import{_ as t,a as m}from"./index.d7abadf4.js";import{d as p,m as s,e as f,f as r,z as l,A as o,F as V}from"./vendor.1f7be6ea.js";const i=p({name:"ExpRange",data(){return{min:50,max:150,value:void 0,value2:[10,60],value3:[20,70],value4:[30,80],value5:[40,90],value6:[0,100],value7:[0,100],value8:void 0,value9:void 0}},methods:{onInput(e){m(`Input value: ${e}`)},onChange(e){m(`Change value: ${e}`)}}});function b(e,a,g,C,E,F){const n=s("fx-range"),d=s("fx-cell"),v=s("fx-group");return f(),r(V,null,[l(v,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value},{default:o(()=>[l(n,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u663E\u793A\u6570\u503C showValue=true"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value2},{default:o(()=>[l(n,{"show-value":"",modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=u=>e.value2=u)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u81EA\u5B9A\u4E49\u989C\u8272 color=#ff7875"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value3},{default:o(()=>[l(n,{color:"#ff7875",modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=u=>e.value3=u),"show-value":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u8FD4\u56DE\u4E0D\u5141\u8BB8\u91CD\u53E0 allowSameValue=false"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value4},{default:o(()=>[l(n,{"show-value":"",modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=u=>e.value4=u),allowSameValue:!1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u8BBE\u7F6E\u6B65\u8FDB\uFF08step=5\uFF09"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value5},{default:o(()=>[l(n,{"show-value":"",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=u=>e.value5=u),step:"5"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u9650\u5236\u8303\u56F4 min=50 & max=150"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value6},{default:o(()=>[l(n,{"show-value":"",min:e.min,max:e.max,modelValue:e.value6,"onUpdate:modelValue":a[5]||(a[5]=u=>e.value6=u)},null,8,["min","max","modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u7981\u7528"},{default:o(()=>[l(d,{class:"exp-range-box",label:"value: "+e.value7},{default:o(()=>[l(n,{disabled:"",modelValue:e.value7,"onUpdate:modelValue":a[6]||(a[6]=u=>e.value7=u)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[l(d,{class:"exp-range-box",label:"input"},{default:o(()=>[l(n,{modelValue:e.value8,"onUpdate:modelValue":a[7]||(a[7]=u=>e.value8=u),onInput:e.onInput},null,8,["modelValue","onInput"])]),_:1}),l(d,{class:"exp-range-box",label:"change"},{default:o(()=>[l(n,{modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=u=>e.value9=u),onChange:e.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})],64)}var x=t(i,[["render",b]]);export{x as default};
