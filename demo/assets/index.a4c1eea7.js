import{_ as r,a as i}from"./index.24d6e766.js";import{d as s,l as n,b as _,e as c,y as e,z as l}from"./vendor.d68a2f58.js";const m=s({name:"ExpRate",data(){return{count:5,value:2.5}},methods:{onChange(t){i(`Value: ${t}`)}}});function p(t,d,C,V,b,v){const a=n("fx-rate"),u=n("fx-cell"),o=n("fx-group");return _(),c("div",null,[e(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[e(u,{label:"\u9ED8\u8BA4"},{default:l(()=>[e(a)]),_:1}),e(u,{label:"modelValue=3"},{default:l(()=>[e(a,{modelValue:"3"})]),_:1})]),_:1}),e(o,{title:"\u98CE\u683C"},{default:l(()=>[e(u,{label:"\u7231\u5FC3 icon='HeartOutlined' activeIcon='HeartFilled'"},{default:l(()=>[e(a,{icon:"HeartOutlined",activeIcon:"HeartFilled",modelValue:"3"})]),_:1}),e(u,{label:"\u6362\u8272 activeColor='#F5A511'"},{default:l(()=>[e(a,{modelValue:"3",activeColor:"#F5A511"})]),_:1}),e(u,{label:"\u53D8\u5C0F size='16px'"},{default:l(()=>[e(a,{modelValue:"3",size:"16"})]),_:1})]),_:1}),e(o,{title:"\u81EA\u5B9A\u4E49\u6570\u91CF"},{default:l(()=>[e(u,{label:"count=8"},{default:l(()=>[e(a,{count:"8"})]),_:1})]),_:1}),e(o,{title:"\u534A\u661F"},{default:l(()=>[e(u,{label:"modelValue=2.5"},{default:l(()=>[e(a,{"allow-half":"",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=f=>t.value=f),count:t.count},null,8,["modelValue","count"])]),_:1})]),_:1}),e(o,{title:"\u72B6\u6001"},{default:l(()=>[e(u,{label:"\u53EA\u8BFB"},{default:l(()=>[e(a,{readonly:"",modelValue:3})]),_:1}),e(u,{label:"\u7981\u7528"},{default:l(()=>[e(a,{disabled:"",modelValue:3})]),_:1})]),_:1}),e(o,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[e(u,{label:"change"},{default:l(()=>[e(a,{"allow-half":"",onChange:t.onChange},null,8,["onChange"])]),_:1})]),_:1})])}var h=r(m,[["render",p]]);export{h as default};
