import{_ as d,p as h,a as g}from"./index.75decfab.js";import{d as w,r as u,l as C,b,e as m,y as s,z as c}from"./vendor.4df8ce31.js";const E=w({name:"ExpImagePreview",setup(){const e=u(!1),n=u(!1),t=u(!1),r=u(!1),f=u(""),v=["https://cdn.fox2.cn/vfox/swiper/different-1.jpg","https://cdn.fox2.cn/vfox/swiper/different-2.jpg","https://cdn.fox2.cn/vfox/swiper/different-3.jpg"];function i(){h({urls:v,showClose:!0,imageHighRendering:!1,success:o=>{console.log("success",o)}})}function a(o){n.value=o.showClose||!1,f.value=o.current||"",t.value=o.changeEvent||!1,r.value=o.visibleEvent||!1,e.value=!0}return{visible:e,showClose:n,imageUrls:v,current:f,onCallApi:i,show:a,onVisibleStateChange:o=>{r.value&&(console.log("visible-state-change",o),g(`${o.state} \u4E8B\u4EF6\u89E6\u53D1`)),o.state==="hidden"&&(n.value=!1,f.value="",t.value=!1,r.value=!1)},onChange:o=>{t.value&&(console.log("change",o),g(`\u5207\u6362\u5230\u7B2C ${o.activeIndex+1} \u5F20`))},onCancel:o=>{t.value&&(console.log("cancel",o),g("\u5173\u95ED"))}}}});function k(e,n,t,r,f,v){const i=C("fx-cell"),a=C("fx-group"),p=C("fx-image-preview");return b(),m("div",null,[s(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:c(()=>[s(i,{label:"\u9884\u89C8\u56FE\u7247",isLink:"",onClick:n[0]||(n[0]=l=>e.show({}))}),s(i,{label:"\u6307\u5B9A\u521D\u59CB\u56FE\u7247",isLink:"",onClick:n[1]||(n[1]=l=>e.show({current:"https://cdn.fox2.cn/vfox/swiper/different-2.jpg"}))}),s(i,{label:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",isLink:"",onClick:n[2]||(n[2]=l=>e.show({showClose:!0}))})]),_:1}),s(a,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:c(()=>[s(i,{label:"change/cancel",isLink:"",onClick:n[3]||(n[3]=l=>e.show({changeEvent:!0}))}),s(i,{label:"visible-state-change",isLink:"",onClick:n[4]||(n[4]=l=>e.show({visibleEvent:!0}))})]),_:1}),s(a,{title:"API"},{default:c(()=>[s(i,{label:"showImagePreview",isLink:"",onClick:e.onCallApi},null,8,["onClick"])]),_:1}),s(p,{visible:e.visible,"onUpdate:visible":n[5]||(n[5]=l=>e.visible=l),urls:e.imageUrls,current:e.current,"onUpdate:current":n[6]||(n[6]=l=>e.current=l),showClose:e.showClose,imageHighRendering:!1,onVisibleStateChange:e.onVisibleStateChange,onCancel:e.onCancel,onChange:e.onChange},null,8,["visible","urls","current","showClose","onVisibleStateChange","onCancel","onChange"])])}var B=d(E,[["render",k]]);export{B as default};
