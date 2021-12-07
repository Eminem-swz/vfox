import{_ as i,a as r}from"./index.45589400.js";import{r as v,c as f,a as e,w as a,o as p}from"./vendor.0b064a58.js";const x={name:"Slider",data(){return{min:40,max:140,value:null,value2:10,value3:20,value4:30,value5:40,value6:50,value7:60,value8:70}},methods:{onInput({value:d}){r.showToast(`Input value: ${d}`)},onChange({value:d}){r.showToast(`Change value: ${d}`)}}};function V(d,u,_,b,l,m){const n=v("fx-slider"),s=v("fx-cell"),t=v("fx-group");return p(),f("div",null,[e(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:a(()=>[e(s,{class:"slider-box",label:"value: "+l.value},{default:a(()=>[e(n,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=o=>l.value=o)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t,{title:"\u663E\u793A\u6570\u503C showValue=true"},{default:a(()=>[e(s,{class:"slider-box",label:"value: "+l.value2},{default:a(()=>[e(n,{"show-value":"",modelValue:l.value2,"onUpdate:modelValue":u[1]||(u[1]=o=>l.value2=o)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272 color=#ff7875"},{default:a(()=>[e(s,{class:"slider-box",label:"value: "+l.value3},{default:a(()=>[e(n,{color:"#ff7875",modelValue:l.value3,"onUpdate:modelValue":u[2]||(u[2]=o=>l.value3=o),"show-value":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t,{title:"\u8BBE\u7F6E\u6B65\u8FDB\uFF08step=5\uFF09"},{default:a(()=>[e(s,{class:"slider-box",label:"value: "+l.value4},{default:a(()=>[e(n,{"show-value":"",modelValue:l.value4,"onUpdate:modelValue":u[3]||(u[3]=o=>l.value4=o),step:"5"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t,{title:"\u9650\u5236\u8303\u56F4 min=50 & max=150"},{default:a(()=>[e(s,{class:"slider-box",label:"value: "+l.value5},{default:a(()=>[e(n,{"show-value":"",min:l.min,max:l.max,modelValue:l.value5,"onUpdate:modelValue":u[4]||(u[4]=o=>l.value5=o)},null,8,["min","max","modelValue"])]),_:1},8,["label"])]),_:1}),e(t,{title:"\u7981\u7528"},{default:a(()=>[e(s,{class:"slider-box",label:"value: "+l.value6},{default:a(()=>[e(n,{disabled:"",modelValue:l.value6,"onUpdate:modelValue":u[5]||(u[5]=o=>l.value6=o)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:a(()=>[e(s,{class:"slider-box",label:"input"},{default:a(()=>[e(n,{modelValue:l.value7,"onUpdate:modelValue":u[6]||(u[6]=o=>l.value7=o),onInput:m.onInput},null,8,["modelValue","onInput"])]),_:1}),e(s,{class:"slider-box",label:"change"},{default:a(()=>[e(n,{modelValue:l.value8,"onUpdate:modelValue":u[7]||(u[7]=o=>l.value8=o),onChange:m.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var U=i(x,[["render",V]]);export{U as default};
