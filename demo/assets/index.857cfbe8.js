import{_ as a,a as r,b as C,l as d}from"./index.ba5f16d0.js";import{r as v,c as _,a as o,w as i,o as M,f as m,A as f}from"./vendor.d14b3c37.js";const h={name:"PopMenu",data(){return{visible:!1,selector:"",placement2:"bottom",visible2:!1,selector2:"",visible3:!1,options:[{icon:"HeartOutlined",name:"\u7231\u5FC3"},{icon:"StarOutlined",name:"\u661F\u661F"},{icon:"CircleOutlined",name:"\u5708\u5708",disabled:!0}],showEvent:!1,visibleEvent:!1}},methods:{onVisibleStateChange({state:s}){this.visibleEvent&&(r.showToast(`${s} \u4E8B\u4EF6\u89E6\u53D1`),console.log(`${s} \u4E8B\u4EF6\u89E6\u53D1`)),s==="hidden"&&(this.visibleEvent=!1,this.showEvent=!1)},onConfirm(s){console.log("confirm",s),this.showEvent&&C.showDialog({title:"\u9009\u62E9\u4E86",showCancel:!1,content:`item.name: '${s.item.name}'
index: ${s.index}`})},onCancel(s){console.log("cancel",s),this.showEvent&&r.showToast("\u53D6\u6D88\u4E86")},onCallApi(s){d.showPopMenu({selector:s,options:this.options,placement:"top",success:n=>{console.log("success",n),n.confirm?r.showToast(`\u9009\u62E9\u4E86 ${n.detail.item.name}`):r.showToast("\u53D6\u6D88\u4E86")}})}}},x={class:"popover-box2"},g=f(" \u4E0A "),w=f(" \u5DE6 "),k=f(" \u53F3 "),E=f(" \u4E0B ");function O(s,n,z,T,e,p){const t=v("fx-button"),u=v("fx-cell"),c=v("fx-group"),b=v("fx-pop-menu");return M(),_("div",null,[o(c,{title:"\u57FA\u7840\u7528\u6CD5"},{default:i(()=>[o(u,{label:"\u57FA\u7840"},{default:i(()=>[o(t,{size:"small",id:"popMenu",shape:"circle",icon:"MenuOutlined",onClick:n[0]||(n[0]=l=>{e.selector="#popMenu",e.visible=!0})})]),_:1}),o(u,{label:"\u4E0D\u5C55\u793A\u8499\u5C42"},{default:i(()=>[o(t,{size:"small",id:"popMenuNoMask",shape:"circle",icon:"MenuOutlined",onClick:n[1]||(n[1]=l=>e.visible3=!0)})]),_:1})]),_:1}),o(c,{title:"\u65B9\u5411 placement=top/bottom/left/right"},{default:i(()=>[m("div",x,[m("div",null,[o(t,{size:"small",id:"popMenuTop2",shape:"circle",icon:"UpOutlined",onClick:n[2]||(n[2]=l=>{e.placement2="top",e.selector2="#popMenuTop2",e.visible2=!0})},{default:i(()=>[g]),_:1})]),m("div",null,[o(t,{size:"small",id:"popMenuLeft2",shape:"circle",icon:"LeftOutlined",onClick:n[3]||(n[3]=l=>{e.placement2="left",e.selector2="#popMenuLeft2",e.visible2=!0})},{default:i(()=>[w]),_:1}),o(t,{size:"small",id:"popMenuRight2",shape:"circle",icon:"RightOutlined",onClick:n[4]||(n[4]=l=>{e.placement2="right",e.selector2="#popMenuRight2",e.visible2=!0})},{default:i(()=>[k]),_:1})]),m("div",null,[o(t,{size:"small",id:"popMenuBottom2",shape:"circle",icon:"DownOutlined",onClick:n[5]||(n[5]=l=>{e.placement2="bottom",e.selector2="#popMenuBottom2",e.visible2=!0})},{default:i(()=>[E]),_:1})])])]),_:1}),o(c,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:i(()=>[o(u,{label:"confirm/cancel"},{default:i(()=>[o(t,{size:"small",id:"popMenuEvent",shape:"circle",icon:"MenuOutlined",onClick:n[6]||(n[6]=l=>{e.selector="#popMenuEvent",e.showEvent=!0,e.visible=!0})})]),_:1}),o(u,{label:"visible-state-change"},{default:i(()=>[o(t,{size:"small",id:"popMenuPopupEvent",shape:"circle",icon:"MenuOutlined",onClick:n[7]||(n[7]=l=>{e.selector="#popMenuPopupEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1})]),_:1}),o(c,{title:"API"},{default:i(()=>[o(u,{label:"showPopMenu"},{default:i(()=>[o(t,{size:"small",id:"popMenuApi",shape:"circle",icon:"MenuOutlined",onClick:n[8]||(n[8]=l=>p.onCallApi("#popMenuApi"))})]),_:1})]),_:1}),o(b,{visible:e.visible,"onUpdate:visible":n[9]||(n[9]=l=>e.visible=l),selector:e.selector,options:e.options,onConfirm:p.onConfirm,onCancel:p.onCancel,onVisibleStateChange:p.onVisibleStateChange},null,8,["visible","selector","options","onConfirm","onCancel","onVisibleStateChange"]),o(b,{visible:e.visible2,"onUpdate:visible":n[10]||(n[10]=l=>e.visible2=l),selector:e.selector2,placement:e.placement2,options:e.options,onConfirm:p.onConfirm,onCancel:p.onCancel},null,8,["visible","selector","placement","options","onConfirm","onCancel"]),o(b,{visible:e.visible3,"onUpdate:visible":n[11]||(n[11]=l=>e.visible3=l),selector:"#popMenuNoMask",options:e.options,"show-mask":!1,onConfirm:p.onConfirm,onCancel:p.onCancel},null,8,["visible","options","onConfirm","onCancel"])])}var A=a(h,[["render",O]]);export{A as default};
