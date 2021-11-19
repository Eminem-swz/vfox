import{_ as f,a,b as C,i as E}from"./index.9dd7d456.js";import{j as p,r,c as b,a as i,w as l,o as d}from"./vendor.d14b3c37.js";const v=[{name:"\u9009\u98791"},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],h=p({name:"ActionSheet",props:{},data(){return{visible:!1,title:"",showCancel:!1,cancelText:"\u53D6\u6D88",options:v,options2:[{name:"\u9009\u98791",description:"\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848"},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],showEvent:!1,visibleEvent:!1}},methods:{onVisibleStateChange({state:e}){this.visibleEvent&&(a.showToast(`${e} \u4E8B\u4EF6\u89E6\u53D1`),console.log(`${e} \u4E8B\u4EF6\u89E6\u53D1`)),e==="hidden"&&(this.showCancel=!1,this.cancelText="\u53D6\u6D88",this.options=v,this.title="",this.visibleEvent=!1,this.showEvent=!1)},onConfirm(e){console.log("confirm",e),this.showEvent&&C.showDialog({title:"\u9009\u62E9\u4E86",showCancel:!1,content:`item.name: '${e.item.name}'
index: ${e.index}`})},onCancel(e){console.log("cancel",e),this.showEvent&&a.showToast("\u53D6\u6D88\u4E8B\u4EF6\u89E6\u53D1")},onCallApi(){E.showActionSheet({title:"\u6807\u9898",options:this.options,showCancel:!0,success:e=>{console.log("success",e);const{confirm:n,detail:s}=e;n?C.showDialog({title:"\u9009\u62E9\u4E86",showCancel:!1,content:`item.name: '${s.item.name}'
index: ${s.index}`}):a.showToast("\u53D6\u6D88\u4E86")}})}}});function w(e,n,s,D,c,k){const o=r("fx-cell"),t=r("fx-group"),m=r("fx-action-sheet");return d(),b("div",null,[i(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[i(o,{label:"\u9ED8\u8BA4",isLink:"",onClick:n[0]||(n[0]=u=>e.visible=!0)}),i(o,{label:"\u5C55\u793A\u6807\u9898",isLink:"",onClick:n[1]||(n[1]=u=>{e.title="\u6807\u9898",e.visible=!0})}),i(o,{label:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",isLink:"",onClick:n[2]||(n[2]=u=>{e.showCancel=!0,e.visible=!0})}),i(o,{label:"\u8BBE\u7F6E\u53D6\u6D88\u6309\u94AE\u6587\u6848",isLink:"",onClick:n[3]||(n[3]=u=>{e.showCancel=!0,e.cancelText="\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6587\u6848",e.visible=!0})})]),_:1}),i(t,{title:"options \u6269\u5C55"},{default:l(()=>[i(o,{label:"\u9009\u9879\u63CF\u8FF0",isLink:"",onClick:n[4]||(n[4]=u=>{e.options=[{name:"\u9009\u98791",description:"\u9009\u98791\u7684\u63CF\u8FF0\u6587\u6848"},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],e.visible=!0})}),i(o,{label:"\u9009\u9879\u9AD8\u4EAE",isLink:"",onClick:n[5]||(n[5]=u=>{e.options=[{name:"\u9009\u98791",highlight:!0},{name:"\u9009\u98792"},{name:"\u9009\u98793"}],e.visible=!0})})]),_:1}),i(t,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:l(()=>[i(o,{label:"confirm/cancel",isLink:"",onClick:n[6]||(n[6]=u=>{e.showCancel=!0,e.showEvent=!0,e.visible=!0})}),i(o,{label:"visible-state-change",isLink:"",onClick:n[7]||(n[7]=u=>{e.visibleEvent=!0,e.visible=!0})})]),_:1}),i(t,{title:"API"},{default:l(()=>[i(o,{label:"showActionSheet",isLink:"",onClick:n[8]||(n[8]=u=>e.onCallApi())})]),_:1}),i(m,{visible:e.visible,"onUpdate:visible":n[9]||(n[9]=u=>e.visible=u),title:e.title,options:e.options,"show-cancel":e.showCancel,"cancel-text":e.cancelText,onConfirm:e.onConfirm,onCancel:e.onCancel,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","title","options","show-cancel","cancel-text","onConfirm","onCancel","onVisibleStateChange"])])}var g=f(h,[["render",w]]);export{g as default};