import{_ as c,a as h,j as _}from"./index.43780245.js";import{d as f,l,b as C,e as p,y as t,z as u,f as s,I as d}from"./vendor.d68a2f58.js";const x=f({name:"ExpNavBar",setup(){return{showToast:h,onRightButtonClick:e=>{console.log(e),_({title:"\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB",showCancel:!1,content:`text: '${e.item.text}'
index: ${e.index}`})}}}}),B=s("div",{class:"exp-NavBar-fixed"},"\u4E0A\u4E0B\u6ED1\u52A8\u89C2\u5BDF\u6700\u9876\u90E8\u7684\u5BFC\u822A",-1),m=s("div",{class:"exp-NavBar-left"},"Left Slot",-1),v=s("div",{class:"exp-NavBar-right"},"Right Slot",-1),E={class:"exp-NavBar-left"},g=d(" \u8FD4\u56DE "),w={class:"exp-NavBar-right"},b=d(" \u83DC\u5355 ");function k(i,e,D,A,F,N){const o=l("fx-nav-bar"),n=l("fx-group"),a=l("fx-button");return C(),p("div",null,[t(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[t(o,{title:"\u6807\u9898"})]),_:1}),t(n,{title:"\u663E\u793A\u8FD4\u56DE\u6309\u94AE"},{default:u(()=>[t(o,{title:"\u6807\u9898","show-back":!0})]),_:1}),t(n,{title:"\u5C55\u793A\u9996\u9875\u6309\u94AE"},{default:u(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0})]),_:1}),t(n,{title:"\u5C55\u793A\u53F3\u4FA7\u6309\u94AE"},{default:u(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]})]),_:1}),t(n,{title:"\u6309\u94AE\u5E26\u6587\u672C"},{default:u(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]}),t(o,{title:"\u6807\u9898","show-back":!0,"only-icon":!1,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]})]),_:1}),t(n,{title:"\u56FA\u5B9A\u9876\u90E8(\u914D\u5408 fixed \u7EC4\u4EF6)"},{default:u(()=>[B]),_:1}),t(n,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:u(()=>[t(o,{title:"\u6807\u9898\u53CC\u51FB","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}],onBackClick:e[0]||(e[0]=r=>i.showToast("\u8FD4\u56DE\u6309\u94AE\u70B9\u51FB")),onHomeClick:e[1]||(e[1]=r=>i.showToast("\u9996\u9875\u6309\u94AE\u70B9\u51FB")),onTitleDbclick:e[2]||(e[2]=r=>i.showToast("\u6807\u9898\u53CC\u51FB")),onRightButtonClick:i.onRightButtonClick},null,8,["onRightButtonClick"])]),_:1}),t(n,{title:"Slot left / right"},{default:u(()=>[t(o,{title:"\u6807\u9898","right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]},{left:u(()=>[m]),_:1}),t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0},{right:u(()=>[v]),_:1}),t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0},{left:u(()=>[s("div",E,[t(a,{type:"primary",icon:"LeftOutlined",size:"small"},{default:u(()=>[g]),_:1})])]),right:u(()=>[s("div",w,[t(a,{type:"primary",icon:"MenuOutlined",size:"small"},{default:u(()=>[b]),_:1})])]),_:1})]),_:1})])}var O=c(x,[["render",k]]);export{O as default};
