import{_ as h,a,j as f}from"./index.2fd7321e.js";import{l as s,b as x,e as k,y as t,z as e,f as i,I as d}from"./vendor.d68a2f58.js";const m={name:"ExpNavBar",data(){return{text:1}},methods:{onBack(){a("\u8FD4\u56DE\u6309\u94AE\u70B9\u51FB")},onBackHome(){a("\u9996\u9875\u6309\u94AE\u70B9\u51FB")},onTitle(){a("\u6807\u9898\u53CC\u51FB")},onRightButtonClick({icon:c,text:r,index:u}){f({title:"\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB",showCancel:!1,content:`icon: '${c}'
text: '${r}'
index: ${u}`})}}},p=i("div",{class:"exp-NavBar-fixed"},"\u4E0A\u4E0B\u6ED1\u52A8\u89C2\u5BDF\u6700\u9876\u90E8\u7684\u5BFC\u822A",-1),b=i("div",{class:"exp-NavBar-left"},"Left Slot",-1),v=i("div",{class:"exp-NavBar-right"},"Right Slot",-1),g={class:"exp-NavBar-left"},B=d(" \u8FD4\u56DE "),w={class:"exp-NavBar-right"},C=d(" \u83DC\u5355 ");function N(c,r,u,y,O,l){const o=s("fx-nav-bar"),n=s("fx-group"),_=s("fx-button");return x(),k("div",null,[t(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[t(o,{title:"\u6807\u9898"})]),_:1}),t(n,{title:"\u663E\u793A\u8FD4\u56DE\u6309\u94AE"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0})]),_:1}),t(n,{title:"\u5C55\u793A\u9996\u9875\u6309\u94AE"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0})]),_:1}),t(n,{title:"\u5C55\u793A\u53F3\u4FA7\u6309\u94AE"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]})]),_:1}),t(n,{title:"\u6309\u94AE\u5E26\u6587\u672C"},{default:e(()=>[t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]}),t(o,{title:"\u6807\u9898","show-back":!0,"only-icon":!1,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]})]),_:1}),t(n,{title:"\u56FA\u5B9A\u9876\u90E8(\u914D\u5408 fixed \u7EC4\u4EF6)"},{default:e(()=>[p]),_:1}),t(n,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:e(()=>[t(o,{title:"\u6807\u9898\u53CC\u51FB","show-back":!0,"show-home":!0,"right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}],onBackClick:l.onBack,onHomeClick:l.onBackHome,onTitleDbclick:l.onTitle,onRightButtonClick:l.onRightButtonClick},null,8,["onBackClick","onHomeClick","onTitleDbclick","onRightButtonClick"])]),_:1}),t(n,{title:"Slot left / right"},{default:e(()=>[t(o,{title:"\u6807\u9898","right-buttons":[{icon:"MenuOutlined",text:"\u83DC\u5355"}]},{left:e(()=>[b]),_:1}),t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0},{right:e(()=>[v]),_:1}),t(o,{title:"\u6807\u9898","show-back":!0,"show-home":!0},{left:e(()=>[i("div",g,[t(_,{type:"primary",icon:"LeftOutlined",size:"small"},{default:e(()=>[B]),_:1})])]),right:e(()=>[i("div",w,[t(_,{type:"primary",icon:"MenuOutlined",size:"small"},{default:e(()=>[C]),_:1})])]),_:1})]),_:1})])}var R=h(m,[["render",N]]);export{R as default};
