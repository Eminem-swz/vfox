import{_ as m,a as v}from"./index.99a038d5.js";import{l as a,b as k,e as C,x as s,y as b}from"./vendor.6d83210b.js";const u={name:"ExpModal",props:{},data(){return{visible:!1,maskClosable:!1,showClose:!0,callbackEvent:!1,visibleEvent:!1,visible2:!1,imageUrl:"https://cdn.fox2.cn/vfox/swiper/center-2.jpg"}},methods:{showModel(l){l=Object.assign({maskClosable:!1,showClose:!0},l),Object.keys(l).forEach(e=>{this[e]=l[e]}),this.visible=!0},onClose(l){console.log("cancel",l),this.callbackEvent&&(l.closeClick?v("\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE"):l.maskClick&&v("\u70B9\u51FB\u4E86\u8499\u5C42"))},onVisibleStateChange({state:l}){this.visibleEvent&&(console.log(`${l} \u4E8B\u4EF6\u89E6\u53D1`),v(`${l} \u4E8B\u4EF6\u89E6\u53D1`)),l==="hidden"&&(this.callbackEvent=!1,this.visibleEvent=!1)}}};function d(l,e,p,x,i,n){const t=a("fx-cell"),r=a("fx-group"),f=a("fx-modal"),c=a("fx-image");return k(),C("div",null,[s(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:b(()=>[s(t,{label:"\u9ED8\u8BA4",isLink:"",onClick:e[0]||(e[0]=o=>n.showModel({}))}),s(t,{label:"\u8499\u5C42\u53EF\u70B9\u51FB",isLink:"",onClick:e[1]||(e[1]=o=>n.showModel({maskClosable:!0}))}),s(t,{label:"\u9690\u85CF\u5173\u95ED\u6309\u94AE",isLink:"",onClick:e[2]||(e[2]=o=>n.showModel({maskClosable:!0,showClose:!1}))})]),_:1}),s(r,{title:"Slot default"},{default:b(()=>[s(t,{label:"\u56FE\u7247",isLink:"",onClick:e[3]||(e[3]=o=>i.visible2=!0)})]),_:1}),s(r,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:b(()=>[s(t,{label:"close",isLink:"",onClick:e[4]||(e[4]=o=>{(i.callbackEvent=!0)&&n.showModel({maskClosable:!0})})}),s(t,{label:"visible-state-change",isLink:"",onClick:e[5]||(e[5]=o=>{(i.visibleEvent=!0)&&n.showModel({title:"\u6807\u9898",content:"\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9\u63D0\u793A\u5185\u5BB9"})})})]),_:1}),s(f,{visible:i.visible,"onUpdate:visible":e[6]||(e[6]=o=>i.visible=o),"mask-closable":i.maskClosable,"show-close":i.showClose,onCancel:n.onClose,onVisibleStateChange:n.onVisibleStateChange},null,8,["visible","mask-closable","show-close","onCancel","onVisibleStateChange"]),s(f,{visible:i.visible2,"onUpdate:visible":e[7]||(e[7]=o=>i.visible2=o)},{default:b(()=>[s(c,{class:"image-image",src:i.imageUrl,"aspect-ratio":1},null,8,["src"])]),_:1},8,["visible"])])}var h=m(u,[["render",d]]);export{h as default};
