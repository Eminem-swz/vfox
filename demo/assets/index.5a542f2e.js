import{_ as b,a as V}from"./index.e283f0d6.js";import{d as E,m as i,e as t,f as p,z as u,A as e,F as f,q as _,I as r,h as v,t as m}from"./vendor.1f7be6ea.js";const C=E({name:"ExpRadio",props:{},data(){return{value:!1,groupValue:"man",groupOptionValue:"woman",options:[{value:"man",label:"\u7537"},{value:"woman",label:"\u5973"}]}},methods:{onChange(a){console.log("change",a),V(`Change Value: ${a}`)}}}),c=r("\u52FE\u9009"),h=r("\u52FE\u9009"),k=r("\u52FE\u9009"),B=r("\u52FE\u9009");function F(a,d,A,D,y,$){const n=i("fx-radio"),o=i("fx-cell"),g=i("fx-group"),s=i("fx-radio-group");return t(),p(f,null,[u(g,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[u(o,{label:"\u9ED8\u8BA4"},{default:e(()=>[u(n)]),_:1}),u(o,{label:"\u5E26\u6587\u6848"},{default:e(()=>[u(n,{checked:a.value,"onUpdate:checked":d[0]||(d[0]=l=>a.value=l)},{default:e(()=>[c]),_:1},8,["checked"])]),_:1}),u(o,{label:"\u9ED8\u8BA4\u6FC0\u6D3B"},{default:e(()=>[u(n,{checked:""},{default:e(()=>[h]),_:1})]),_:1}),u(o,{label:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:e(()=>[u(n,{checked:"",activeColor:"#8b1721"},{default:e(()=>[k]),_:1})]),_:1}),u(o,{label:"\u7981\u7528"},{default:e(()=>[u(n,{disabled:""},{default:e(()=>[B]),_:1})]),_:1})]),_:1}),u(g,{title:"RadioGroup"},{default:e(()=>[u(o,{label:"\u9ED8\u8BA4"},{default:e(()=>[u(s,{modelValue:a.groupValue,"onUpdate:modelValue":d[1]||(d[1]=l=>a.groupValue=l)},{default:e(()=>[(t(!0),p(f,null,_(a.options,l=>(t(),v(n,{key:l.value,value:l.value},{default:e(()=>[r(m(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(o,{label:"\u5185\u8054"},{default:e(()=>[u(s,{inline:"",modelValue:a.groupValue,"onUpdate:modelValue":d[2]||(d[2]=l=>a.groupValue=l),activeColor:"#8b1721"},{default:e(()=>[(t(!0),p(f,null,_(a.options,l=>(t(),v(n,{key:l.value,value:l.value},{default:e(()=>[r(m(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(o,{label:"\u7981\u7528"},{default:e(()=>[u(s,{modelValue:"man",disabled:""},{default:e(()=>[(t(!0),p(f,null,_(a.options,l=>(t(),v(n,{key:l.value,value:l.value},{default:e(()=>[r(m(l.label),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),u(o,{label:"\u901A\u8FC7options\u8BBE\u7F6E"},{default:e(()=>[u(s,{modelValue:a.groupOptionValue,"onUpdate:modelValue":d[3]||(d[3]=l=>a.groupOptionValue=l),options:a.options},null,8,["modelValue","options"])]),_:1})]),_:1}),u(g,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[u(o,{label:"change"},{default:e(()=>[u(s,{onChange:a.onChange,name:"gender"},{default:e(()=>[(t(!0),p(f,null,_(a.options,l=>(t(),v(n,{key:l.value,value:l.value},{default:e(()=>[r(m(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["onChange"])]),_:1})]),_:1})],64)}var O=b(C,[["render",F]]);export{O as default};
