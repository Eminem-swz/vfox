import{_ as m,a as t}from"./index.43780245.js";import{d as f,l as s,b as r,e as p,y as e,z as o}from"./vendor.d68a2f58.js";const V=f({name:"ExpRange",data(){return{min:50,max:150,value:void 0,value2:[10,60],value3:[20,70],value4:[30,80],value5:[40,90],value6:[0,100],value7:[0,100],value8:void 0,value9:void 0}},methods:{onInput(l){t(`Input value: ${l}`)},onChange(l){t(`Change value: ${l}`)}}});function i(l,a,b,g,C,E){const n=s("fx-range"),d=s("fx-cell"),v=s("fx-group");return r(),p("div",null,[e(v,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value},{default:o(()=>[e(n,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value=u)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u663E\u793A\u6570\u503C showValue=true"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value2},{default:o(()=>[e(n,{"show-value":"",modelValue:l.value2,"onUpdate:modelValue":a[1]||(a[1]=u=>l.value2=u)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u81EA\u5B9A\u4E49\u989C\u8272 color=#ff7875"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value3},{default:o(()=>[e(n,{color:"#ff7875",modelValue:l.value3,"onUpdate:modelValue":a[2]||(a[2]=u=>l.value3=u),"show-value":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u8FD4\u56DE\u4E0D\u5141\u8BB8\u91CD\u53E0 allowSameValue=false"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value4},{default:o(()=>[e(n,{"show-value":"",modelValue:l.value4,"onUpdate:modelValue":a[3]||(a[3]=u=>l.value4=u),allowSameValue:!1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u8BBE\u7F6E\u6B65\u8FDB\uFF08step=5\uFF09"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value5},{default:o(()=>[e(n,{"show-value":"",modelValue:l.value5,"onUpdate:modelValue":a[4]||(a[4]=u=>l.value5=u),step:"5"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u9650\u5236\u8303\u56F4 min=50 & max=150"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value6},{default:o(()=>[e(n,{"show-value":"",min:l.min,max:l.max,modelValue:l.value6,"onUpdate:modelValue":a[5]||(a[5]=u=>l.value6=u)},null,8,["min","max","modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u7981\u7528"},{default:o(()=>[e(d,{class:"range-box",label:"value: "+l.value7},{default:o(()=>[e(n,{disabled:"",modelValue:l.value7,"onUpdate:modelValue":a[6]||(a[6]=u=>l.value7=u)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(v,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[e(d,{class:"range-box",label:"input"},{default:o(()=>[e(n,{modelValue:l.value8,"onUpdate:modelValue":a[7]||(a[7]=u=>l.value8=u),onInput:l.onInput},null,8,["modelValue","onInput"])]),_:1}),e(d,{class:"range-box",label:"change"},{default:o(()=>[e(n,{modelValue:l.value9,"onUpdate:modelValue":a[8]||(a[8]=u=>l.value9=u),onChange:l.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var F=m(V,[["render",i]]);export{F as default};
