import{_ as A,a as p,j as E,t as $}from"./index.e283f0d6.js";import{d as w,r as t,m as b,e as g,f as F,z as u,A as r,F as h}from"./vendor.1f7be6ea.js";const d=[{name:"\u9009\u98791"},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],L=w({name:"ExpActionSheet",setup(){const e=t(!1),n=t(""),v=t(!1),C=t("\u53D6\u6D88"),f=t(d),a=t(!1),i=t(!1),s=o=>{i.value&&(console.log("visible-state-change",o),p(`${o.state} \u4E8B\u4EF6\u89E6\u53D1`)),o.state==="hidden"&&(v.value=!1,C.value="\u53D6\u6D88",f.value=d,n.value="",i.value=!1,a.value=!1)},m=o=>{a.value&&(console.log("confirm",o),E({title:"\u9009\u62E9\u4E86",showCancel:!1,content:`item.name: '${o.item.name}'
index: ${o.index}`}))},l=o=>{a.value&&(console.log("cancel",o),p("\u53D6\u6D88\u4E86"))};function k(){$({title:"\u6807\u9898",options:f.value,showCancel:!0,success:o=>{console.log("success",o);const{confirm:D,detail:c}=o;D?E({title:"\u9009\u62E9\u4E86",showCancel:!1,content:`item.name: '${c.item.name}'
index: ${c.index}`}):p("\u53D6\u6D88\u4E86")}})}return{visible:e,title:n,showCancel:v,cancelText:C,options:f,options2:[{name:"\u9009\u98791",description:"\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848"},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],showEvent:a,visibleEvent:i,onVisibleStateChange:s,onConfirm:m,onCancel:l,onCallApi:k}}});function B(e,n,v,C,f,a){const i=b("fx-cell"),s=b("fx-group"),m=b("fx-action-sheet");return g(),F(h,null,[u(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:r(()=>[u(i,{label:"\u9ED8\u8BA4",isLink:"",onClick:n[0]||(n[0]=l=>e.visible=!0)}),u(i,{label:"\u5C55\u793A\u6807\u9898",isLink:"",onClick:n[1]||(n[1]=l=>{e.title="\u6807\u9898",e.visible=!0})}),u(i,{label:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",isLink:"",onClick:n[2]||(n[2]=l=>{e.showCancel=!0,e.visible=!0})}),u(i,{label:"\u8BBE\u7F6E\u53D6\u6D88\u6309\u94AE\u6587\u6848",isLink:"",onClick:n[3]||(n[3]=l=>{e.showCancel=!0,e.cancelText="\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6587\u6848",e.visible=!0})})]),_:1}),u(s,{title:"options \u6269\u5C55"},{default:r(()=>[u(i,{label:"\u9009\u9879\u63CF\u8FF0",isLink:"",onClick:n[4]||(n[4]=l=>{e.options=[{name:"\u9009\u98791",description:"\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848"},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],e.visible=!0})}),u(i,{label:"\u9009\u9879\u9AD8\u4EAE",isLink:"",onClick:n[5]||(n[5]=l=>{e.options=[{name:"\u9009\u98791",highlight:!0},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],e.visible=!0})})]),_:1}),u(s,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:r(()=>[u(i,{label:"confirm/cancel",isLink:"",onClick:n[6]||(n[6]=l=>{e.showCancel=!0,e.showEvent=!0,e.visible=!0})}),u(i,{label:"visible-state-change",isLink:"",onClick:n[7]||(n[7]=l=>{e.visibleEvent=!0,e.visible=!0})})]),_:1}),u(s,{title:"API"},{default:r(()=>[u(i,{label:"showActionSheet",isLink:"",onClick:n[8]||(n[8]=l=>e.onCallApi())})]),_:1}),u(m,{visible:e.visible,"onUpdate:visible":n[9]||(n[9]=l=>e.visible=l),title:e.title,options:e.options,"show-cancel":e.showCancel,"cancel-text":e.cancelText,onConfirm:e.onConfirm,onCancel:e.onCancel,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","title","options","show-cancel","cancel-text","onConfirm","onCancel","onVisibleStateChange"])],64)}var T=A(L,[["render",B]]);export{T as default};
