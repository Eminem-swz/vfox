import{_ as p,a as m}from"./index.9adec39a.js";import{r as b,c as D,a as i,w as s,o as I}from"./vendor.d14b3c37.js";const k={name:"NumberKeyboard",data(){return{value:"",visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,visible7:!1,visible8:!1}},methods:{onInput({key:v}){m.showToast(v)},onDelete(){m.showToast("\u5220\u9664")},onClose(v){console.log("close",v),m.showToast(`\u8F93\u5165\u503C\u4E3A\uFF1A${v.value}`)}}};function d(v,e,x,y,l,o){const t=b("fx-number-keyboard"),u=b("fx-cell"),r=b("fx-group"),f=b("fx-input"),C=b("fx-form-item");return I(),D("div",null,[i(r,{title:"\u57FA\u7840\u952E\u76D8"},{default:s(()=>[i(u,{label:"\u9ED8\u8BA4\u952E\u76D8",isLink:"",onClick:e[1]||(e[1]=n=>l.visible1=!0)},{default:s(()=>[i(t,{visible:l.visible1,"onUpdate:visible":e[0]||(e[0]=n=>l.visible1=n),onInput:o.onInput,onDelete:o.onDelete,onClose:o.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),i(u,{label:"\u5E26\u5C0F\u6570\u70B9\uFF08customKey='.'\uFF09",isLink:"",onClick:e[3]||(e[3]=n=>l.visible2=!0)},{default:s(()=>[i(t,{visible:l.visible2,"onUpdate:visible":e[2]||(e[2]=n=>l.visible2=n),customKey:".",onInput:o.onInput,onDelete:o.onDelete,onClose:o.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),i(u,{label:"\u8EAB\u4EFD\u8BC1\uFF08customKey='X'\uFF09",isLink:"",onClick:e[5]||(e[5]=n=>l.visible3=!0)},{default:s(()=>[i(t,{visible:l.visible3,"onUpdate:visible":e[4]||(e[4]=n=>l.visible3=n),customKey:"X",onInput:o.onInput,onDelete:o.onDelete,onConfirm:o.onClose},null,8,["visible","onInput","onDelete","onConfirm"])]),_:1})]),_:1}),i(r,{title:"\u5E26\u53F3\u4FA7\u680F\u952E\u76D8"},{default:s(()=>[i(u,{label:"\u9ED8\u8BA4\u952E\u76D8",isLink:"",onClick:e[7]||(e[7]=n=>l.visible4=!0)},{default:s(()=>[i(t,{visible:l.visible4,"onUpdate:visible":e[6]||(e[6]=n=>l.visible4=n),type:"rightColumn",onInput:o.onInput,onDelete:o.onDelete,onClose:o.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),i(u,{label:"1\u4E2A\u81EA\u5B9A\u4E49\u503C\uFF08customKey=['.']\uFF09",isLink:"",onClick:e[9]||(e[9]=n=>l.visible5=!0)},{default:s(()=>[i(t,{visible:l.visible5,"onUpdate:visible":e[8]||(e[8]=n=>l.visible5=n),type:"rightColumn",customKey:".",onInput:o.onInput,onDelete:o.onDelete,onClose:o.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),i(u,{label:"2\u4E2A\u81EA\u5B9A\u4E49\u503C\uFF08customKey=['00', '.']\uFF09",isLink:"",onClick:e[11]||(e[11]=n=>l.visible6=!0)},{default:s(()=>[i(t,{visible:l.visible6,"onUpdate:visible":e[10]||(e[10]=n=>l.visible6=n),type:"rightColumn",customKey:["00","."],onInput:o.onInput,onDelete:o.onDelete,onClose:o.onClose},null,8,["visible","customKey","onInput","onDelete","onClose"])]),_:1})]),_:1}),i(r,{title:"\u5176\u4ED6"},{default:s(()=>[i(u,{label:"\u8BBE\u7F6E\u6807\u9898",isLink:"",onClick:e[13]||(e[13]=n=>l.visible7=!0)},{default:s(()=>[i(t,{title:"\u952E\u76D8\u6807\u9898",visible:l.visible7,"onUpdate:visible":e[12]||(e[12]=n=>l.visible7=n),onInput:o.onInput,onDelete:o.onDelete,onClose:o.onClose},null,8,["visible","onInput","onDelete","onClose"])]),_:1}),i(C,{name:"number",label:"\u53CC\u5411\u7ED1\u5B9A",onClick:e[17]||(e[17]=n=>l.visible8=!0)},{default:s(()=>[i(f,{modelValue:l.value,"onUpdate:modelValue":e[14]||(e[14]=n=>l.value=n),readonly:""},null,8,["modelValue"]),i(t,{visible:l.visible8,"onUpdate:visible":e[15]||(e[15]=n=>l.visible8=n),modelValue:l.value,"onUpdate:modelValue":e[16]||(e[16]=n=>l.value=n)},null,8,["visible","modelValue"])]),_:1})]),_:1})])}var L=p(k,[["render",d]]);export{L as default};
