import{_ as h,a as l,b as f}from"./index.9dd7d456.js";import{r as s,c as k,a as t,w as e,o as m,f as i,A as d}from"./vendor.d14b3c37.js";const x={name:"NavBar",data(){return{text:1}},methods:{onBack(){l.showToast("\u8FD4\u56DE\u6309\u94AE\u70B9\u51FB")},onBackHome(){l.showToast("\u9996\u9875\u6309\u94AE\u70B9\u51FB")},onTitle(){l.showToast("\u6807\u9898\u53CC\u51FB")},onRightButtonClick({icon:c,text:r,index:u}){f.showDialog({title:"\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB",showCancel:!1,content:`icon: '${c}'
text: '${r}'
index: ${u}`})}}},b=i("div",{class:"navBar-fixed"},"\u4E0A\u4E0B\u6ED1\u52A8\u89C2\u5BDF\u6700\u9876\u90E8\u7684\u5BFC\u822A",-1),w=i("div",{class:"navBar-left"},"Left Slot",-1),g=i("div",{class:"navBar-right"},"Right Slot",-1),v={class:"navBar-left"},B=d(" \u8FD4\u56DE "),p={class:"navBar-right"},C=d(" \u83DC\u5355 ");function T(c,r,u,y,O,a){const o=s("fx-nav-bar"),n=s("fx-group"),_=s("fx-button");return m(),k("div",null,[t(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[t(o,{title:"\u6807\u9898"})]),_:1}),t(n,{title:"\u663E\u793A\u8FD4\u56DE\u6309\u94AE"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0})]),_:1}),t(n,{title:"\u5C55\u793A\u9996\u9875\u6309\u94AE"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0})]),_:1}),t(n,{title:"\u5C55\u793A\u53F3\u4FA7\u6309\u94AE"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]})]),_:1}),t(n,{title:"\u6309\u94AE\u5E26\u6587\u672C"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]}),t(o,{title:"\u6807\u9898","show-back":!0,"only-icon":!1,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]})]),_:1}),t(n,{title:"\u56FA\u5B9A\u9876\u90E8(\u914D\u5408 fixed \u7EC4\u4EF6)"},{default:e(()=>[b]),_:1}),t(n,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[t(o,{title:"\u6807\u9898\u53CC\u51FB","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}],onBackClick:a.onBack,onHomeClick:a.onBackHome,onTitleDbclick:a.onTitle,onRightButtonClick:a.onRightButtonClick},null,8,["onBackClick","onHomeClick","onTitleDbclick","onRightButtonClick"])]),_:1}),t(n,{title:"Slot left / right"},{default:e(()=>[t(o,{title:"\u6807\u9898","right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]},{left:e(()=>[w]),_:1}),t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0},{right:e(()=>[g]),_:1}),t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0},{left:e(()=>[i("div",v,[t(_,{type:"primary",icon:"LeftOutlined",size:"small"},{default:e(()=>[B]),_:1})])]),right:e(()=>[i("div",p,[t(_,{type:"primary",icon:"MenuOutlined",size:"small"},{default:e(()=>[C]),_:1})])]),_:1})]),_:1})])}var D=h(x,[["render",T]]);export{D as default};
