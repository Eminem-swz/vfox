import{_ as d,a as C}from"./index.4c76766c.js";import{d as p,r as n,l as b,b as E,e as g,y as s,z as f}from"./vendor.4df8ce31.js";const c=p({name:"ExpModal",setup(){const e=n(!1),l=n(!1),v=n(!0),u=n(!1),t=n(!1),m=n(!1);return{visible:e,maskClosable:l,showClose:v,callbackEvent:u,visibleEvent:t,visible2:m,imageUrl:"https://cdn.fox2.cn/vfox/swiper/center-2.jpg",onVisibleStateChange:({state:o})=>{t.value&&(console.log("visible-state-change",o),C(`${o} \u4E8B\u4EF6\u89E6\u53D1`)),o==="hidden"&&(u.value=!1,t.value=!1,l.value=!1,v.value=!0)},onClose:o=>{console.log("cancel",o),u.value&&(o.source==="closeClick"?C("\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE"):o.source==="maskClick"&&C("\u70B9\u51FB\u4E86\u8499\u5C42"))}}}});function B(e,l,v,u,t,m){const i=b("fx-cell"),r=b("fx-group"),o=b("fx-modal"),k=b("fx-image");return E(),g("div",null,[s(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:f(()=>[s(i,{label:"\u9ED8\u8BA4",isLink:"",onClick:l[0]||(l[0]=a=>e.visible=!0)}),s(i,{label:"\u8499\u5C42\u53EF\u70B9\u51FB",isLink:"",onClick:l[1]||(l[1]=()=>{e.maskClosable=!0,e.visible=!0})}),s(i,{label:"\u9690\u85CF\u5173\u95ED\u6309\u94AE",isLink:"",onClick:l[2]||(l[2]=()=>{e.maskClosable=!0,e.showClose=!1,e.visible=!0})})]),_:1}),s(r,{title:"Slot default"},{default:f(()=>[s(i,{label:"\u56FE\u7247",isLink:"",onClick:l[3]||(l[3]=a=>e.visible2=!0)})]),_:1}),s(r,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:f(()=>[s(i,{label:"close",isLink:"",onClick:l[4]||(l[4]=()=>{e.callbackEvent=!0,e.maskClosable=!0,e.visible=!0})}),s(i,{label:"visible-state-change",isLink:"",onClick:l[5]||(l[5]=()=>{e.visibleEvent=!0})})]),_:1}),s(o,{visible:e.visible,"onUpdate:visible":l[6]||(l[6]=a=>e.visible=a),"mask-closable":e.maskClosable,"show-close":e.showClose,onCancel:e.onClose,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","mask-closable","show-close","onCancel","onVisibleStateChange"]),s(o,{visible:e.visible2,"onUpdate:visible":l[7]||(l[7]=a=>e.visible2=a)},{default:f(()=>[s(k,{class:"image-image",src:e.imageUrl,"aspect-ratio":1},null,8,["src"])]),_:1},8,["visible"])])}var $=d(c,[["render",B]]);export{$ as default};
