import{_ as g,b as v,a as B}from"./index.45589400.js";import{j as b,D as k,p as d,r as f,c as w,a as o,w as c,H as $,o as F}from"./vendor.0b064a58.js";const T=b({name:"Dialog",setup(e,u){const a=k(!1);let s=!1,D=!1;const A=d({title:"",content:"",cancelText:"",confirmText:"",showCancel:!1});function t(n,m,p){n=Object.assign({title:"",content:"",showCancel:!0,cancelText:"\u53D6\u6D88",confirmText:"\u786E\u5B9A"},n);for(let C in n)A[C]=n[C];s=!!m,D=!!p,a.value=!0}function i(){v.showDialog({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9",maskClosable:!0,success:n=>{console.log("success",n),B.showToast(n.confirm?"confirm = true":"cancel = true")}})}function r(n){console.log("confirm",n),s&&B.showToast("\u70B9\u51FB\u786E\u5B9A\u6309\u94AE")}function l(n){console.log("cancel",n),s&&B.showToast("\u70B9\u51FB\u53D6\u6D88\u6309\u94AE")}function E({state:n}){D&&(console.log(`${n} \u4E8B\u4EF6\u89E6\u53D1`),B.showToast(`${n} \u4E8B\u4EF6\u89E6\u53D1`))}return{visible:a,dialogArgs:A,show:t,onCallApi:i,onConfirm:r,onCancel:l,onVisibleStateChange:E}}});function h(e,u,a,s,D,A){const t=f("fx-cell"),i=f("fx-group"),r=f("fx-dialog");return F(),w("div",null,[o(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:c(()=>[o(t,{label:"\u9ED8\u8BA4",isLink:"",onClick:u[0]||(u[0]=l=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"}))}),o(t,{label:"\u4E0D\u5E26\u6807\u9898",isLink:"",onClick:u[1]||(u[1]=l=>e.show({content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"}))}),o(t,{label:"\u4E0D\u663E\u793A\u53D6\u6D88\u6309\u94AE",isLink:"",onClick:u[2]||(u[2]=l=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9",showCancel:!1}))}),o(t,{label:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",isLink:"",onClick:u[3]||(u[3]=l=>e.show({title:"\u60CA\u559C",content:"\u8FD9\u6709\u4E00\u4EFD\u5173\u7231\u4FDD\u9669\u5F85\u4F60\u67E5\u6536",cancelText:"\u62D2\u7EDD",confirmText:"\u63A5\u53D7"}))})]),_:1}),o(i,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:c(()=>[o(t,{label:"confirm/cancel",isLink:"",onClick:u[4]||(u[4]=l=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"},!0))}),o(t,{label:"visible-state-change",isLink:"",onClick:u[5]||(u[5]=l=>e.show({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"},!1,!0))})]),_:1}),o(i,{title:"API"},{default:c(()=>[o(t,{label:"showDialog",isLink:"",onClick:u[6]||(u[6]=l=>e.onCallApi())})]),_:1}),o(r,$({visible:e.visible,"onUpdate:visible":u[7]||(u[7]=l=>e.visible=l)},e.dialogArgs,{onConfirm:e.onConfirm,onCancel:e.onCancel,onVisibleStateChange:e.onVisibleStateChange}),null,16,["visible","onConfirm","onCancel","onVisibleStateChange"])])}var V=g(T,[["render",h]]);export{V as default};
