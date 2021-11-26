import{_ as b,a as v,k as g}from"./index.51b8fb8d.js";import{r as f,c as D,a as o,w as t,o as C,f as u,A as a}from"./vendor.e8a7463a.js";const h={name:"PopDialog",props:{},data(){return{visible:!1,content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6761\u6570\u636E\uFF1F",showCancel:!0,selector:"",confirmText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",placement2:"bottom",visible2:!1,selector2:"",visible3:!1,showEvent:!1,visibleEvent:!1}},methods:{onVisibleStateChange({state:s}){this.visibleEvent&&(console.log(`${s} \u4E8B\u4EF6\u89E6\u53D1`),v.showToast(`${s} \u4E8B\u4EF6\u89E6\u53D1`)),s==="hidden"&&(this.showCancel=!0,this.visibleEvent=!1,this.showEvent=!1,this.content="\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6761\u6570\u636E\uFF1F",this.confirmText="\u786E\u5B9A",this.cancelText="\u53D6\u6D88")},onCancel(s){console.log("cancel",s),this.showEvent&&v.showToast("\u53D6\u6D88\u4E8B\u4EF6\u89E6\u53D1")},onConfirm(s){console.log("confirm",s),this.showEvent&&v.showToast("\u786E\u5B9A\u4E8B\u4EF6\u89E6\u53D1")},onCallApi(s){g.showPopDialog({selector:s,placement:"top",content:this.content,success:l=>{console.log("success",l),v.showToast(l.confirm?"\u70B9\u51FB\u4E86\u786E\u5B9A":"\u70B9\u51FB\u4E86\u53D6\u6D88")}})}}},x={class:"popover-box2"},d=a(" \u4E0A "),_=a(" \u5DE6 "),w=a(" \u53F3 "),T=a(" \u4E0B ");function k(s,l,E,z,e,p){const n=f("fx-button"),c=f("fx-cell"),r=f("fx-group"),m=f("fx-pop-dialog");return C(),D("div",null,[o(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[o(c,{label:"\u57FA\u7840"},{default:t(()=>[o(n,{size:"small",id:"popDialog",shape:"circle",icon:"DeleteOutlined",onClick:l[0]||(l[0]=i=>{e.selector="#popDialog",e.visible=!0})})]),_:1}),o(c,{label:"\u4E0D\u5C55\u793A\u53D6\u6D88\u6309\u94AE"},{default:t(()=>[o(n,{size:"small",id:"popDialogNoCancel",shape:"circle",icon:"DeleteOutlined",onClick:l[1]||(l[1]=i=>{e.selector="#popDialogNoCancel",e.showCancel=!1,e.visible=!0})})]),_:1}),o(c,{label:"\u8BBE\u7F6E\u6309\u94AE\u6587\u6848"},{default:t(()=>[o(n,{size:"small",id:"popDialogButtonText",shape:"circle",icon:"DeleteOutlined",onClick:l[2]||(l[2]=i=>{e.selector="#popDialogButtonText",e.confirmText="\u63A5\u53D7",e.cancelText="\u62D2\u7EDD",e.visible=!0})})]),_:1}),o(c,{label:"\u4E0D\u5C55\u793A\u8499\u5C42"},{default:t(()=>[o(n,{size:"small",id:"popDialogNoMask",shape:"circle",icon:"DeleteOutlined",onClick:l[3]||(l[3]=i=>e.visible3=!0)})]),_:1})]),_:1}),o(r,{title:"\u65B9\u5411 placement=top/bottom/left/right"},{default:t(()=>[u("div",x,[u("div",null,[o(n,{size:"small",id:"popDialogTop2",shape:"circle",icon:"UpOutlined",onClick:l[4]||(l[4]=i=>{e.placement2="top",e.selector2="#popDialogTop2",e.visible2=!0})},{default:t(()=>[d]),_:1})]),u("div",null,[o(n,{size:"small",id:"popDialogLeft2",shape:"circle",icon:"LeftOutlined",onClick:l[5]||(l[5]=i=>{e.placement2="left",e.selector2="#popDialogLeft2",e.visible2=!0})},{default:t(()=>[_]),_:1}),o(n,{size:"small",id:"popDialogRight2",shape:"circle",icon:"RightOutlined",onClick:l[6]||(l[6]=i=>{e.placement2="right",e.selector2="#popDialogRight2",e.visible2=!0})},{default:t(()=>[w]),_:1})]),u("div",null,[o(n,{size:"small",id:"popDialogBottom2",shape:"circle",icon:"DownOutlined",onClick:l[7]||(l[7]=i=>{e.placement2="bottom",e.selector2="#popDialogBottom2",e.visible2=!0})},{default:t(()=>[T]),_:1})])])]),_:1}),o(r,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[o(c,{label:"confirm/cancel"},{default:t(()=>[o(n,{size:"small",id:"popDialogEvent",shape:"circle",icon:"DeleteOutlined",onClick:l[8]||(l[8]=i=>{e.selector="#popDialogEvent",e.showEvent=!0,e.visible=!0})})]),_:1}),o(c,{label:"visible-state-change"},{default:t(()=>[o(n,{size:"small",id:"popDialogPopupEvent",shape:"circle",icon:"DeleteOutlined",onClick:l[9]||(l[9]=i=>{e.selector="#popDialogPopupEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1})]),_:1}),o(r,{title:"API"},{default:t(()=>[o(c,{label:"showPopDialog"},{default:t(()=>[o(n,{size:"small",id:"popDialogApi",shape:"circle",icon:"DeleteOutlined",onClick:l[10]||(l[10]=i=>p.onCallApi("#popDialogApi"))})]),_:1})]),_:1}),o(m,{visible:e.visible,"onUpdate:visible":l[11]||(l[11]=i=>e.visible=i),selector:e.selector,content:e.content,"show-cancel":e.showCancel,"confirm-text":e.confirmText,"cancel-text":e.cancelText,onCancel:p.onCancel,onConfirm:p.onConfirm,onVisibleStateChange:p.onVisibleStateChange},null,8,["visible","selector","content","show-cancel","confirm-text","cancel-text","onCancel","onConfirm","onVisibleStateChange"]),o(m,{visible:e.visible2,"onUpdate:visible":l[12]||(l[12]=i=>e.visible2=i),selector:e.selector2,placement:e.placement2,content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9","show-cancel":!1},null,8,["visible","selector","placement"]),o(m,{visible:e.visible3,"onUpdate:visible":l[13]||(l[13]=i=>e.visible3=i),selector:"#popDialogNoMask",content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9","show-cancel":!1,"show-mask":!1},null,8,["visible"])])}var N=b(h,[["render",k]]);export{N as default};
