import{_ as m,a as v}from"./index.cc81463e.js";import{d as i,l as t,b as r,e as f,y as e,z as o}from"./vendor.d68a2f58.js";const p=i({name:"ExpSlider",data(){return{min:40,max:140,value:null,value2:10,value3:20,value4:30,value5:40,value6:50,value7:60,value8:70}},methods:{onInput(l){v(`Input value: ${l}`)},onChange(l){v(`Change value: ${l}`)}}});function V(l,u,b,C,g,E){const d=t("fx-slider"),n=t("fx-cell"),s=t("fx-group");return r(),f("div",null,[e(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[e(n,{class:"slider-box",label:"value: "+l.value},{default:o(()=>[e(d,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u663E\u793A\u6570\u503C showValue=true"},{default:o(()=>[e(n,{class:"slider-box",label:"value: "+l.value2},{default:o(()=>[e(d,{"show-value":"",modelValue:l.value2,"onUpdate:modelValue":u[1]||(u[1]=a=>l.value2=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u81EA\u5B9A\u4E49\u989C\u8272 color=#ff7875"},{default:o(()=>[e(n,{class:"slider-box",label:"value: "+l.value3},{default:o(()=>[e(d,{color:"#ff7875",modelValue:l.value3,"onUpdate:modelValue":u[2]||(u[2]=a=>l.value3=a),"show-value":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u8BBE\u7F6E\u6B65\u8FDB\uFF08step=5\uFF09"},{default:o(()=>[e(n,{class:"slider-box",label:"value: "+l.value4},{default:o(()=>[e(d,{"show-value":"",modelValue:l.value4,"onUpdate:modelValue":u[3]||(u[3]=a=>l.value4=a),step:"5"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u9650\u5236\u8303\u56F4 min=40 & max=140"},{default:o(()=>[e(n,{class:"slider-box",label:"value: "+l.value5},{default:o(()=>[e(d,{"show-value":"",min:l.min,max:l.max,modelValue:l.value5,"onUpdate:modelValue":u[4]||(u[4]=a=>l.value5=a)},null,8,["min","max","modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u7981\u7528"},{default:o(()=>[e(n,{class:"slider-box",label:"value: "+l.value6},{default:o(()=>[e(d,{disabled:"",modelValue:l.value6,"onUpdate:modelValue":u[5]||(u[5]=a=>l.value6=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[e(n,{class:"slider-box",label:"input"},{default:o(()=>[e(d,{modelValue:l.value7,"onUpdate:modelValue":u[6]||(u[6]=a=>l.value7=a),onInput:l.onInput},null,8,["modelValue","onInput"])]),_:1}),e(n,{class:"slider-box",label:"change"},{default:o(()=>[e(d,{modelValue:l.value8,"onUpdate:modelValue":u[7]||(u[7]=a=>l.value8=a),onChange:l.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var U=m(p,[["render",V]]);export{U as default};
