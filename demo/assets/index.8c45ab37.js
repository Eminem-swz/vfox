import{_ as i,a as v}from"./index.45589400.js";import{r as f,c as s,a as l,w as e,o as n,F as p,g as h,d as g,A as d,I as x}from"./vendor.0b064a58.js";const C={name:"Checkbox",data(){return{checked:!1,groupValue:["A","C"],groups:["A","B","C"]}},methods:{onChange({value:k}){v.showToast(`Change Value: ${k}`)}}},V=d("\u52FE\u9009"),m=d("\u52FE\u9009"),A=d("\u52FE\u9009"),B=d("A"),y=d("B"),w=d("C");function T(k,r,U,j,a,b){const u=f("fx-checkbox"),t=f("fx-cell"),c=f("fx-group"),_=f("fx-checkbox-group");return n(),s("div",null,[l(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[l(t,{label:"\u9ED8\u8BA4"},{default:e(()=>[l(u)]),_:1}),l(t,{label:"\u5E26\u6587\u6848"},{default:e(()=>[l(u,{checked:a.checked,"onUpdate:checked":r[0]||(r[0]=o=>a.checked=o)},{default:e(()=>[V]),_:1},8,["checked"])]),_:1}),l(t,{label:"\u9ED8\u8BA4\u6FC0\u6D3B"},{default:e(()=>[l(u,{checked:""},{default:e(()=>[m]),_:1})]),_:1}),l(t,{label:"\u7981\u7528"},{default:e(()=>[l(u,{disabled:""},{default:e(()=>[A]),_:1})]),_:1})]),_:1}),l(c,{title:"CheckboxGroup"},{default:e(()=>[l(t,{label:"\u9ED8\u8BA4"},{default:e(()=>[l(_,{modelValue:a.groupValue,"onUpdate:modelValue":r[1]||(r[1]=o=>a.groupValue=o)},{default:e(()=>[(n(!0),s(p,null,h(a.groups,o=>(n(),g(u,{key:o,value:o},{default:e(()=>[d(x(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(t,{label:"\u5185\u8054"},{default:e(()=>[l(_,{inline:""},{default:e(()=>[(n(!0),s(p,null,h(a.groups,o=>(n(),g(u,{key:o,value:o},{default:e(()=>[d(x(o),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),l(t,{label:"\u7981\u7528"},{default:e(()=>[l(_,{modelValue:["A"],disabled:""},{default:e(()=>[(n(!0),s(p,null,h(a.groups,o=>(n(),g(u,{key:o,value:o},{default:e(()=>[d(x(o),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1}),l(c,{title:"CheckboxGroup + Cell"},{default:e(()=>[l(_,{modelValue:a.groupValue,"onUpdate:modelValue":r[2]||(r[2]=o=>a.groupValue=o)},{default:e(()=>[(n(!0),s(p,null,h(a.groups,o=>(n(),g(t,{key:o,label:"\u5355\u5143\u683C "+o},{icon:e(()=>[l(u,{circle:"",value:o},null,8,["value"])]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(c,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[l(t,{label:"change"},{default:e(()=>[l(_,{onChange:b.onChange},{default:e(()=>[l(u,{value:"A"},{default:e(()=>[B]),_:1}),l(u,{value:"B"},{default:e(()=>[y]),_:1}),l(u,{value:"C"},{default:e(()=>[w]),_:1})]),_:1},8,["onChange"])]),_:1})]),_:1})])}var N=i(C,[["render",T]]);export{N as default};
