import{_ as a,a as r}from"./index.75560e0d.js";import{d as p,r as c,m as s,e as d,f as F,z as e,A as n,F as m}from"./vendor.8029601e.js";const E=p({name:"ExpNoticeBar",setup(){return{visible:c(!0),text1:"\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002",text2:"\u4F5C\u4E3A\u4E00\u4E2A\u771F\u6B63\u7684\u7A0B\u5E8F\u5458\uFF0C\u9996\u5148\u5E94\u8BE5\u5C0A\u91CD\u7F16\u7A0B\uFF0C\u70ED\u7231\u4F60\u6240\u5199\u4E0B\u7684\u7A0B\u5E8F\uFF0C\u4ED6\u662F\u4F60\u7684\u4F19\u4F34\uFF0C\u800C\u4E0D\u662F\u5DE5\u5177\u3002",showToast:r}}});function B(t,l,f,x,C,A){const u=s("fx-notice-bar"),i=s("fx-group");return d(),F(m,null,[e(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[e(u,{class:"exp-noticeBar-item",title:t.text1},null,8,["title"]),e(u,{class:"exp-noticeBar-item",title:t.text2},null,8,["title"])]),_:1}),e(i,{title:"\u8DD1\u9A6C\u706F"},{default:n(()=>[e(u,{class:"exp-noticeBar-item",marquee:"",title:t.text2},null,8,["title"])]),_:1}),e(i,{title:"\u5DE6\u4FA7\u56FE\u6807"},{default:n(()=>[e(u,{class:"exp-noticeBar-item","left-icon":"SoundOutlined",title:t.text1,marquee:""},null,8,["title"])]),_:1}),e(i,{title:"mode closable/clickable"},{default:n(()=>[e(u,{class:"exp-noticeBar-item",mode:"closable",visible:t.visible,"onUpdate:visible":l[0]||(l[0]=o=>t.visible=o),title:t.text1,onCloseClick:l[1]||(l[1]=o=>t.showToast("\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE"))},null,8,["visible","title"]),e(u,{class:"exp-noticeBar-item",mode:"clickable",title:t.text1,onClick:l[2]||(l[2]=o=>t.showToast("\u70B9\u51FB\u4E86\u901A\u544A\u680F"))},null,8,["title"])]),_:1}),e(i,{title:"type=success/primary/danger"},{default:n(()=>[e(u,{"left-icon":"SoundOutlined",class:"exp-noticeBar-item",type:"success",title:t.text1},null,8,["title"]),e(u,{"left-icon":"SoundOutlined",class:"exp-noticeBar-item",type:"primary",title:t.text1},null,8,["title"]),e(u,{"left-icon":"SoundOutlined",class:"exp-noticeBar-item",type:"danger",title:t.text1},null,8,["title"])]),_:1}),e(i,{title:"\u81EA\u5B9A\u4E49\u989C\u8272(#000000)"},{default:n(()=>[e(u,{class:"exp-noticeBar-item","left-icon":"SoundOutlined",title:t.text1,color:"#000000"},null,8,["title"])]),_:1})],64)}var D=a(E,[["render",B]]);export{D as default};
