import{_ as y,a as V,s as h,g as $}from"./index.24d6e766.js";import{l,b as p,g as b,z as n,y as r,e as w,f as v,t as T,q as k,I as f}from"./vendor.d68a2f58.js";function d(o,t,c=!0){const u=$(t),e=c?"":" !default";return`
$${o}-color-2: ${u[2]}${e};
$${o}-color-5: ${u[5]}${e};
$${o}-color-6: ${u[6]}${e};
$${o}-color-7: ${u[7]}${e};
$${o}-color: $${o}-color-6;
`}const q={name:"ExpCustomTheme",data(){return{primary:"#0f4c82",success:"#276a3b",warning:"#bb9445",danger:"#b1262d",themeCode:""}},methods:{showToast:V,onCreateColor(){try{const o=[d("primary",this.primary,!0),d("success",this.success,!0),d("warning",this.warning,!0),d("danger",this.danger,!0)].join("");this.themeCode=o,console.log(o)}catch(o){h({type:"danger",title:o.message})}}}},N=f("\u751F\u6210\u4E3B\u9898"),B={key:0,class:"exp-custom-theme-code"},U=f("\u590D\u5236\u4EE3\u7801 ");function j(o,t,c,u,e,i){const a=l("fx-input"),m=l("fx-form-item"),_=l("fx-button"),g=l("fx-form"),x=l("fx-copy"),C=l("fx-group");return p(),b(C,{title:"\u8BBE\u7F6E\u4E3B\u9898\u989C\u8272"},{default:n(()=>[r(g,null,{footer:n(()=>[r(_,{type:"primary",onClick:i.onCreateColor},{default:n(()=>[N]),_:1},8,["onClick"])]),default:n(()=>[r(m,{name:"primary",label:"primary \u8272",required:""},{default:n(()=>[r(a,{modelValue:e.primary,"onUpdate:modelValue":t[0]||(t[0]=s=>e.primary=s)},null,8,["modelValue"])]),_:1}),r(m,{name:"success",label:"success \u8272",required:""},{default:n(()=>[r(a,{modelValue:e.success,"onUpdate:modelValue":t[1]||(t[1]=s=>e.success=s)},null,8,["modelValue"])]),_:1}),r(m,{name:"warning",label:"warning \u8272",required:""},{default:n(()=>[r(a,{modelValue:e.warning,"onUpdate:modelValue":t[2]||(t[2]=s=>e.warning=s)},null,8,["modelValue"])]),_:1}),r(m,{name:"danger",label:"danger \u8272",required:""},{default:n(()=>[r(a,{modelValue:e.danger,"onUpdate:modelValue":t[3]||(t[3]=s=>e.danger=s)},null,8,["modelValue"])]),_:1})]),_:1}),e.themeCode?(p(),w("div",B,[v("pre",null,"      "+T(e.themeCode)+`
      `,1),r(x,{onSuccess:t[4]||(t[4]=s=>i.showToast("\u590D\u5236\u6210\u529F")),text:e.themeCode},{default:n(()=>[U]),_:1},8,["text"])])):k("",!0)]),_:1})}var S=y(q,[["render",j]]);export{S as default};
