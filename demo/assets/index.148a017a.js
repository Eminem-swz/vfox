import{_ as h}from"./index.074b5048.js";import{r as o,c as m,a as e,w as n,o as x,f as t}from"./vendor.d14b3c37.js";const k={name:"Skeleton",data(){return{animated:!0,avatarShape:"circle",buttonShape:"default",loadingSwitch:!1}}},v={class:"skeleton-panel"},g={class:"skeleton-panel"},S={class:"skeleton-panel"},w={class:"skeleton-panel"},b={class:"skeleton-switch"},V={class:"skeleton-sub-component"},y=t("h4",{class:"title"},"hello World",-1),B=t("p",{class:"paragraph"},"\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002",-1),j={class:"skeleton-panel"};function C(N,_,E,F,a,H){const s=o("fx-skeleton"),l=o("fx-group"),c=o("fx-switch"),i=o("fx-icon"),d=o("fx-skeleton-image"),p=o("fx-skeleton-title"),r=o("fx-skeleton-paragraph"),f=o("fx-skeleton-button");return x(),m("div",null,[e(l,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[t("div",v,[e(s)])]),_:1}),e(l,{title:"\u663E\u793A\u5934\u50CF"},{default:n(()=>[t("div",g,[e(s,{avatar:""})])]),_:1}),e(l,{title:"\u5E26\u52A8\u753B"},{default:n(()=>[t("div",S,[e(s,{avatar:"",animated:a.animated,avatarShape:a.avatarShape},null,8,["animated","avatarShape"])])]),_:1}),e(l,{title:"\u663E\u793A\u5B50\u7EC4\u4EF6"},{default:n(()=>[t("div",w,[t("div",b,[e(c,{modelValue:a.loadingSwitch,"onUpdate:modelValue":_[0]||(_[0]=u=>a.loadingSwitch=u)},null,8,["modelValue"])]),e(s,{avatar:"",loading:!a.loadingSwitch},{default:n(()=>[t("div",V,[e(i,{icon:"HeartFilled"}),y,B])]),_:1},8,["loading"])])]),_:1}),e(l,{title:"\u81EA\u7531\u7EC4\u5408"},{default:n(()=>[t("div",j,[e(s,{class:"skeleton-custom",buttonShape:a.buttonShape},{layout:n(()=>[e(d),e(p),e(r,{row:2}),e(f)]),_:1},8,["buttonShape"])])]),_:1})])}var q=h(k,[["render",C]]);export{q as default};
