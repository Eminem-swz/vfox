import{_ as f,p as v,s as t}from"./index.e829a249.js";import{j as h,r as a,o as g,c as C,a as s,w as u}from"./vendor.ddac68c4.js";const p=h({name:"ExpImagePreview",data(){return{visible:!1,showClose:!1,imageUrls:["https://cdn.fox2.cn/vfox/swiper/different-1.jpg","https://cdn.fox2.cn/vfox/swiper/different-2.jpg","https://cdn.fox2.cn/vfox/swiper/different-3.jpg"],current:"",changeEvent:!1,visibleEvent:!1}},methods:{onCallApi(){v({urls:this.imageUrls,showClose:!0,imageHighRendering:!1,success:e=>{console.log("success",e)}})},show(e){this.showClose=e.showClose||!1,this.current=e.current||"",this.changeEvent=e.changeEvent||!1,this.visibleEvent=e.visibleEvent||!1,this.visible=!0},onVisibleStateChange(e){this.visibleEvent&&(console.log("event",e),t(`${e.state} \u4E8B\u4EF6\u89E6\u53D1`)),e.state==="hidden"&&(this.showClose=!1,this.current="",this.changeEvent=!1,this.visibleEvent=!1)},onChange(e){this.changeEvent&&(console.log("event",e),t(`\u5207\u6362\u5230\u7B2C ${e.activeIndex+1} \u5F20`))},onCancel(e){this.changeEvent&&(console.log("cancel",e),t("\u5173\u95ED"))}}});function c(e,n,d,w,E,b){const l=a("fx-cell"),o=a("fx-group"),r=a("fx-image-preview");return g(),C("div",null,[s(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[s(l,{label:"\u9884\u89C8\u56FE\u7247",isLink:"",onClick:e.show},null,8,["onClick"]),s(l,{label:"\u6307\u5B9A\u521D\u59CB\u56FE\u7247",isLink:"",onClick:n[0]||(n[0]=i=>e.show({current:"https://cdn.fox2.cn/vfox/swiper/different-2.jpg"}))}),s(l,{label:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",isLink:"",onClick:n[1]||(n[1]=i=>e.show({showClose:!0}))})]),_:1}),s(o,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:u(()=>[s(l,{label:"change/cancel",isLink:"",onClick:n[2]||(n[2]=i=>e.show({changeEvent:!0}))}),s(l,{label:"visible-state-change",isLink:"",onClick:n[3]||(n[3]=i=>e.show({visibleEvent:!0}))})]),_:1}),s(o,{title:"API"},{default:u(()=>[s(l,{label:"previewImage",isLink:"",onClick:e.onCallApi},null,8,["onClick"])]),_:1}),s(r,{visible:e.visible,"onUpdate:visible":n[4]||(n[4]=i=>e.visible=i),urls:e.imageUrls,current:e.current,"onUpdate:current":n[5]||(n[5]=i=>e.current=i),showClose:e.showClose,imageHighRendering:!1,onVisibleStateChange:e.onVisibleStateChange,onCancel:e.onCancel,onChange:e.onChange},null,8,["visible","urls","current","showClose","onVisibleStateChange","onCancel","onChange"])])}var $=f(p,[["render",c]]);export{$ as default};
