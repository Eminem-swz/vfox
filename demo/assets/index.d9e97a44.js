import{_ as x,a as F}from"./index.11386e99.js";import{d as D,E as r,m as U,e as k,f as A,z as n,A as i,F as L}from"./vendor.1f7be6ea.js";const _=D({name:"ExpImageUploader",setup(){const a=r([]),t=r(["https://cdn.fox2.cn/vfox/empty/default@2x.png","https://cdn.fox2.cn/vfox/empty/error@2x.png"]),m=r([]),f=(e,{formatSize:o})=>{if(e.size>1024*1024)return F(`\u4E0A\u4F20\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E ${o(1024*1024)}`),!1;F(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E3A ${o(e.size)}`)},c=(e,o)=>{o.setUploading("\u4E0A\u4F20\u4E2D..."),setTimeout(()=>{p(e).then(u=>{Math.random()>.5?o.fail("\u6A21\u62DF\u5931\u8D25"):o.success(u)})},2e3)};function p(e){return new Promise(o=>{const u=new FileReader;u.onload=function(h){var g,E;o((E=(g=h.target)==null?void 0:g.result)!=null?E:"")},u.readAsDataURL(e)})}return{imageList:a,imageList2:t,imageList3:m,hookBeforeUpload:f,hookUploadOrFail:c,hookUpload:(e,o)=>{p(e).then(u=>{o.success(u)})},onChange:e=>{console.log("change",e)},onDelete:e=>{console.log("delete",e)}}}});function C(a,t,m,f,c,p){const l=U("fx-image-uploader"),s=U("fx-group");return k(),A(L,null,[n(s,{title:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406"},{default:i(()=>[n(l,{beforeUpload:a.hookBeforeUpload,uploadReady:a.hookUpload,accept:"png,jpg",maxCount:9,modelValue:a.imageList3,"onUpdate:modelValue":t[0]||(t[0]=d=>a.imageList3=d),multiple:""},null,8,["beforeUpload","uploadReady","modelValue"])]),_:1}),n(s,{title:"\u7981\u7528\u5220\u9664"},{default:i(()=>[n(l,{modelValue:a.imageList2,"onUpdate:modelValue":t[1]||(t[1]=d=>a.imageList2=d),deletable:!1,uploadReady:a.hookUpload},null,8,["modelValue","uploadReady"])]),_:1}),n(s,{title:"\u7981\u7528\u4E0A\u4F20"},{default:i(()=>[n(l,{disabled:""})]),_:1})],64)}var y=x(_,[["render",C]]);export{y as default};
