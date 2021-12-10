import{_ as f,s as r}from"./index.8aaae89f.js";import{r as m,o as p,c as V,a as e,w as o}from"./vendor.0b064a58.js";const x={name:"ExpRange",data(){return{min:50,max:150,value:null,value2:[10,60],value3:[20,70],value4:[30,80],value5:[40,90],value6:[0,100],value7:[0,100],value8:null,value9:null}},methods:{onInput({value:t}){r(`Input value: ${t}`)},onChange({value:t}){r(`Change value: ${t}`)}}};function b(t,u,i,_,l,d){const n=m("fx-range"),v=m("fx-cell"),s=m("fx-group");return p(),V("div",null,[e(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value},{default:o(()=>[e(n,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u663E\u793A\u6570\u503C showValue=true"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value2},{default:o(()=>[e(n,{"show-value":"",modelValue:l.value2,"onUpdate:modelValue":u[1]||(u[1]=a=>l.value2=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u81EA\u5B9A\u4E49\u989C\u8272 color=#ff7875"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value3},{default:o(()=>[e(n,{color:"#ff7875",modelValue:l.value3,"onUpdate:modelValue":u[2]||(u[2]=a=>l.value3=a),"show-value":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u8FD4\u56DE\u4E0D\u5141\u8BB8\u91CD\u53E0 allowSameValue=false"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value4},{default:o(()=>[e(n,{"show-value":"",modelValue:l.value4,"onUpdate:modelValue":u[3]||(u[3]=a=>l.value4=a),allowSameValue:!1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u8BBE\u7F6E\u6B65\u8FDB\uFF08step=5\uFF09"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value5},{default:o(()=>[e(n,{"show-value":"",modelValue:l.value5,"onUpdate:modelValue":u[4]||(u[4]=a=>l.value5=a),step:"5"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u9650\u5236\u8303\u56F4 min=50 & max=150"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value6},{default:o(()=>[e(n,{"show-value":"",min:l.min,max:l.max,modelValue:l.value6,"onUpdate:modelValue":u[5]||(u[5]=a=>l.value6=a)},null,8,["min","max","modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u7981\u7528"},{default:o(()=>[e(v,{class:"range-box",label:"value: "+l.value7},{default:o(()=>[e(n,{disabled:"",modelValue:l.value7,"onUpdate:modelValue":u[6]||(u[6]=a=>l.value7=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(s,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:o(()=>[e(v,{class:"range-box",label:"input"},{default:o(()=>[e(n,{modelValue:l.value8,"onUpdate:modelValue":u[7]||(u[7]=a=>l.value8=a),onInput:d.onInput},null,8,["modelValue","onInput"])]),_:1}),e(v,{class:"range-box",label:"change"},{default:o(()=>[e(n,{modelValue:l.value9,"onUpdate:modelValue":u[8]||(u[8]=a=>l.value9=a),onChange:d.onChange},null,8,["modelValue","onChange"])]),_:1})]),_:1})])}var U=f(x,[["render",b]]);export{U as default};
