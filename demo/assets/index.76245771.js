import{_ as i,a as m}from"./index.074b5048.js";import{r as s,c as p,a as e,w as a,o as h,A as l}from"./vendor.d14b3c37.js";const g={name:"Radio",props:{},data(){return{value:!1,groupValue:"man"}},methods:{onChange({value:r}){m.showToast(`Change Value: ${r}`)}}},v=l("\u52FE\u9009"),x=l("\u52FE\u9009"),V=l("\u52FE\u9009"),b=l("\u7537"),w=l("\u5973"),C=l("\u7537"),k=l("\u5973"),T=l("\u7537"),U=l("\u5973"),j=l("\u7537"),B=l("\u5973");function N(r,d,R,A,u,c){const o=s("fx-radio"),t=s("fx-cell"),f=s("fx-group"),_=s("fx-radio-group");return h(),p("div",null,[e(f,{title:"\u57FA\u7840\u7528\u6CD5"},{default:a(()=>[e(t,{label:"\u9ED8\u8BA4"},{default:a(()=>[e(o)]),_:1}),e(t,{label:"\u5E26\u6587\u6848"},{default:a(()=>[e(o,{checked:u.value,"onUpdate:checked":d[0]||(d[0]=n=>u.value=n)},{default:a(()=>[v]),_:1},8,["checked"])]),_:1}),e(t,{label:"\u9ED8\u8BA4\u6FC0\u6D3B"},{default:a(()=>[e(o,{checked:""},{default:a(()=>[x]),_:1})]),_:1}),e(t,{label:"\u7981\u7528"},{default:a(()=>[e(o,{disabled:""},{default:a(()=>[V]),_:1})]),_:1})]),_:1}),e(f,{title:"RadioGroup"},{default:a(()=>[e(t,{label:"\u9ED8\u8BA4"},{default:a(()=>[e(_,{modelValue:u.groupValue,"onUpdate:modelValue":d[1]||(d[1]=n=>u.groupValue=n)},{default:a(()=>[e(o,{value:"man"},{default:a(()=>[b]),_:1}),e(o,{value:"woman"},{default:a(()=>[w]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u5185\u8054"},{default:a(()=>[e(_,{inline:"",modelValue:u.groupValue,"onUpdate:modelValue":d[2]||(d[2]=n=>u.groupValue=n)},{default:a(()=>[e(o,{value:"man"},{default:a(()=>[C]),_:1}),e(o,{value:"woman"},{default:a(()=>[k]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u7981\u7528"},{default:a(()=>[e(_,{modelValue:"man",disabled:""},{default:a(()=>[e(o,{value:"man"},{default:a(()=>[T]),_:1}),e(o,{value:"woman"},{default:a(()=>[U]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:a(()=>[e(t,{label:"change"},{default:a(()=>[e(_,{onChange:c.onChange},{default:a(()=>[e(o,{value:"man"},{default:a(()=>[j]),_:1}),e(o,{value:"woman"},{default:a(()=>[B]),_:1})]),_:1},8,["onChange"])]),_:1})]),_:1})])}var q=i(g,[["render",N]]);export{q as default};
