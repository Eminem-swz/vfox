import{_ as h,g as b,s as k,a as v}from"./index.2fd7321e.js";import{l as r,b as n,e as _,y as l,z as o,g as u,q as V,F as p,p as S,I as f,h as w,j as N,t as j}from"./vendor.d68a2f58.js";const z={name:"ExpColor",data(){return{primaryColor:"",colors:[]}},methods:{onSubmitColor(){try{this.colors=b(this.primaryColor)}catch(a){k({type:"danger",title:a.message})}},showToast:v}},B=f("\u751F\u6210\u8272\u5361");function T(a,s,q,E,e,m){const i=r("fx-input"),d=r("fx-form-item"),x=r("fx-button"),y=r("fx-form"),c=r("fx-group"),C=r("fx-copy");return n(),_(p,null,[l(c,{title:"\u8BBE\u7F6E\u4E3B\u8272"},{default:o(()=>[l(y,null,{footer:o(()=>[l(x,{type:"primary","form-type":"submit",color:e.colors.length&&e.primaryColor||null,onClick:m.onSubmitColor},{default:o(()=>[B]),_:1},8,["color","onClick"])]),default:o(()=>[l(d,{name:"color",label:"\u989C\u8272\u503C",required:""},{default:o(()=>[l(i,{modelValue:e.primaryColor,"onUpdate:modelValue":s[0]||(s[0]=t=>e.primaryColor=t),focus:"",placeholder:"\u8BF7\u8F93\u5165\u989C\u8272\u503C"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e.colors.length?(n(),u(c,{key:0,title:"\u8272\u5361\u5217\u8868"},{default:o(()=>[(n(!0),_(p,null,S(e.colors,(t,g)=>(n(),u(C,{text:t,class:w(["exp-colorCard-item",["color-"+(g+1)]]),style:N({backgroundColor:t}),key:t,onSuccess:s[1]||(s[1]=F=>m.showToast("\u590D\u5236\u6210\u529F"))},{default:o(()=>[f(j(t),1)]),_:2},1032,["text","class","style"]))),128))]),_:1})):V("",!0)],64)}var I=h(z,[["render",T]]);export{I as default};
