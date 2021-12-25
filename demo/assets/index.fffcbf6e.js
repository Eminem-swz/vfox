import{_ as f,a,x as c}from"./index.807999d0.js";import{j as D,r as p,o as m,c as b,a as o,w as t,f as r,B as d}from"./vendor.d6b2829d.js";const E=D({name:"ExpPopDialog",data(){return{visible:!1,content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6761\u6570\u636E\uFF1F",showCancel:!0,selector:"",confirmText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",placement2:"bottom",visible2:!1,selector2:"",visible3:!1,showEvent:!1,visibleEvent:!1}},methods:{onVisibleStateChange(e){this.visibleEvent&&(console.log("event",e),a(`${e.state} \u4E8B\u4EF6\u89E6\u53D1`)),e.state==="hidden"&&(this.showCancel=!0,this.visibleEvent=!1,this.showEvent=!1,this.content="\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6761\u6570\u636E\uFF1F",this.confirmText="\u786E\u5B9A",this.cancelText="\u53D6\u6D88")},onCancel(e){this.showEvent&&(console.log("event",e),a("\u53D6\u6D88\u4E8B\u4EF6\u89E6\u53D1"))},onConfirm(e){this.showEvent&&(console.log("event",e),a("\u786E\u5B9A\u4E8B\u4EF6\u89E6\u53D1"))},onCallApi(e){c({selector:e,placement:"top",content:this.content,success:l=>{console.log("success",l),a(l.confirm?"\u70B9\u51FB\u4E86\u786E\u5B9A":"\u70B9\u51FB\u4E86\u53D6\u6D88")}})}}}),g={class:"popover-box2"},C=d(" \u4E0A "),B=d(" \u5DE6 "),h=d(" \u53F3 "),w=d(" \u4E0B ");function F(e,l,A,k,$,T){const n=p("fx-button"),s=p("fx-cell"),u=p("fx-group"),v=p("fx-pop-dialog");return m(),b("div",null,[o(u,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[o(s,{label:"\u57FA\u7840"},{default:t(()=>[o(n,{size:"small",id:"popDialog",shape:"circle",icon:"DeleteOutlined",onClick:l[0]||(l[0]=i=>{e.selector="#popDialog",e.visible=!0})})]),_:1}),o(s,{label:"\u4E0D\u5C55\u793A\u53D6\u6D88\u6309\u94AE"},{default:t(()=>[o(n,{size:"small",id:"popDialogNoCancel",shape:"circle",icon:"DeleteOutlined",onClick:l[1]||(l[1]=i=>{e.selector="#popDialogNoCancel",e.showCancel=!1,e.visible=!0})})]),_:1}),o(s,{label:"\u8BBE\u7F6E\u6309\u94AE\u6587\u6848"},{default:t(()=>[o(n,{size:"small",id:"popDialogButtonText",shape:"circle",icon:"DeleteOutlined",onClick:l[2]||(l[2]=i=>{e.selector="#popDialogButtonText",e.confirmText="\u63A5\u53D7",e.cancelText="\u62D2\u7EDD",e.visible=!0})})]),_:1}),o(s,{label:"\u4E0D\u5C55\u793A\u8499\u5C42"},{default:t(()=>[o(n,{size:"small",id:"popDialogNoMask",shape:"circle",icon:"DeleteOutlined",onClick:l[3]||(l[3]=i=>e.visible3=!0)})]),_:1})]),_:1}),o(u,{title:"\u65B9\u5411 placement=top/bottom/left/right"},{default:t(()=>[r("div",g,[r("div",null,[o(n,{size:"small",id:"popDialogTop2",shape:"circle",icon:"UpOutlined",onClick:l[4]||(l[4]=i=>{e.placement2="top",e.selector2="#popDialogTop2",e.visible2=!0})},{default:t(()=>[C]),_:1})]),r("div",null,[o(n,{size:"small",id:"popDialogLeft2",shape:"circle",icon:"LeftOutlined",onClick:l[5]||(l[5]=i=>{e.placement2="left",e.selector2="#popDialogLeft2",e.visible2=!0})},{default:t(()=>[B]),_:1}),o(n,{size:"small",id:"popDialogRight2",shape:"circle",icon:"RightOutlined",onClick:l[6]||(l[6]=i=>{e.placement2="right",e.selector2="#popDialogRight2",e.visible2=!0})},{default:t(()=>[h]),_:1})]),r("div",null,[o(n,{size:"small",id:"popDialogBottom2",shape:"circle",icon:"DownOutlined",onClick:l[7]||(l[7]=i=>{e.placement2="bottom",e.selector2="#popDialogBottom2",e.visible2=!0})},{default:t(()=>[w]),_:1})])])]),_:1}),o(u,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:t(()=>[o(s,{label:"confirm/cancel"},{default:t(()=>[o(n,{size:"small",id:"popDialogEvent",shape:"circle",icon:"DeleteOutlined",onClick:l[8]||(l[8]=i=>{e.selector="#popDialogEvent",e.showEvent=!0,e.visible=!0})})]),_:1}),o(s,{label:"visible-state-change"},{default:t(()=>[o(n,{size:"small",id:"popDialogPopupEvent",shape:"circle",icon:"DeleteOutlined",onClick:l[9]||(l[9]=i=>{e.selector="#popDialogPopupEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1})]),_:1}),o(u,{title:"API"},{default:t(()=>[o(s,{label:"showPopDialog"},{default:t(()=>[o(n,{size:"small",id:"popDialogApi",shape:"circle",icon:"DeleteOutlined",onClick:l[10]||(l[10]=i=>e.onCallApi("#popDialogApi"))})]),_:1})]),_:1}),o(v,{visible:e.visible,"onUpdate:visible":l[11]||(l[11]=i=>e.visible=i),selector:e.selector,content:e.content,"show-cancel":e.showCancel,"confirm-text":e.confirmText,"cancel-text":e.cancelText,onCancel:e.onCancel,onConfirm:e.onConfirm,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","selector","content","show-cancel","confirm-text","cancel-text","onCancel","onConfirm","onVisibleStateChange"]),o(v,{visible:e.visible2,"onUpdate:visible":l[12]||(l[12]=i=>e.visible2=i),selector:e.selector2,placement:e.placement2,content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9","show-cancel":!1},null,8,["visible","selector","placement"]),o(v,{visible:e.visible3,"onUpdate:visible":l[13]||(l[13]=i=>e.visible3=i),selector:"#popDialogNoMask",content:"\u8FD9\u662F\u6C14\u6CE1\u5185\u5BB9","show-cancel":!1,"show-mask":!1},null,8,["visible"])])}var N=f(E,[["render",F]]);export{N as default};
