import{_ as g,j as p,a as B}from"./index.95d96f48.js";import{d as v,r as b,D as d,l as r,b as k,e as w,y as o,z as f,s as $}from"./vendor.d68a2f58.js";const F=v({name:"ExpDialog",setup(e,u){const a=b(!1);let s=!1,D=!1;const A=d({title:"",content:"",cancelText:"",confirmText:"",showCancel:!1});function l(n,m,E){n=Object.assign({title:"",content:"",showCancel:!0,cancelText:"\u53D6\u6D88",confirmText:"\u786E\u5B9A"},n);for(let C in n)A[C]=n[C];s=!!m,D=!!E,a.value=!0}function i(){p({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9",maskClosable:!0,success:n=>{console.log("success",n),B(n.confirm?"confirm = true":"cancel = true")}})}return{visible:a,dialogArgs:A,show:l,onCallApi:i,onConfirm:n=>{console.log("confirm",n),s&&B("\u70B9\u51FB\u786E\u5B9A\u6309\u94AE")},onCancel:n=>{console.log("cancel",n),s&&B("\u70B9\u51FB\u53D6\u6D88\u6309\u94AE")},onVisibleStateChange:({state:n})=>{D&&(console.log("visible-state-change",n),B(`${n} \u4E8B\u4EF6\u89E6\u53D1`))}}}});function x(e,u,a,s,D,A){const l=r("fx-cell"),i=r("fx-group"),c=r("fx-dialog");return k(),w("div",null,[o(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:f(()=>[o(l,{label:"\u9ED8\u8BA4",isLink:"",onClick:u[0]||(u[0]=t=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"}))}),o(l,{label:"\u4E0D\u5E26\u6807\u9898",isLink:"",onClick:u[1]||(u[1]=t=>e.show({content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"}))}),o(l,{label:"\u4E0D\u663E\u793A\u53D6\u6D88\u6309\u94AE",isLink:"",onClick:u[2]||(u[2]=t=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9",showCancel:!1}))}),o(l,{label:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",isLink:"",onClick:u[3]||(u[3]=t=>e.show({title:"\u60CA\u559C",content:"\u8FD9\u6709\u4E00\u4EFD\u5173\u7231\u4FDD\u9669\u5F85\u4F60\u67E5\u6536",cancelText:"\u62D2\u7EDD",confirmText:"\u63A5\u53D7"}))})]),_:1}),o(i,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:f(()=>[o(l,{label:"confirm/cancel",isLink:"",onClick:u[4]||(u[4]=t=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"},!0))}),o(l,{label:"visible-state-change",isLink:"",onClick:u[5]||(u[5]=t=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"},!1,!0))})]),_:1}),o(i,{title:"API"},{default:f(()=>[o(l,{label:"showDialog",isLink:"",onClick:u[6]||(u[6]=t=>e.onCallApi())})]),_:1}),o(c,$({visible:e.visible,"onUpdate:visible":u[7]||(u[7]=t=>e.visible=t)},e.dialogArgs,{onConfirm:e.onConfirm,onCancel:e.onCancel,onVisibleStateChange:e.onVisibleStateChange}),null,16,["visible","onConfirm","onCancel","onVisibleStateChange"])])}var V=g(F,[["render",x]]);export{V as default};
