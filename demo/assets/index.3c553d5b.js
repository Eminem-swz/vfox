import{_ as a,a as c}from"./index.7928e3b6.js";import{r,c as m,a as e,w as o,o as _}from"./vendor.d14b3c37.js";const b={name:"NoticeBar",data(){return{visible:!0,text1:"\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002",text2:"\u4F5C\u4E3A\u4E00\u4E2A\u771F\u6B63\u7684\u7A0B\u5E8F\u5458\uFF0C\u9996\u5148\u5E94\u8BE5\u5C0A\u91CD\u7F16\u7A0B\uFF0C\u70ED\u7231\u4F60\u6240\u5199\u4E0B\u7684\u7A0B\u5E8F\uFF0C\u4ED6\u662F\u4F60\u7684\u4F19\u4F34\uFF0C\u800C\u4E0D\u662F\u5DE5\u5177\u3002"}},methods:{onClose(){c.showToast("\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE")},onClick(){c.showToast("\u70B9\u51FB\u4E86\u901A\u544A\u680F")}}};function d(f,n,x,p,t,s){const l=r("fx-notice-bar"),i=r("fx-group");return _(),m("div",null,[e(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[e(l,{class:"notice-bar-item",title:t.text1},null,8,["title"]),e(l,{class:"notice-bar-item",title:t.text2},null,8,["title"])]),_:1}),e(i,{title:"\u8DD1\u9A6C\u706F"},{default:o(()=>[e(l,{class:"notice-bar-item",marquee:"",title:t.text2},null,8,["title"])]),_:1}),e(i,{title:"\u5DE6\u4FA7\u56FE\u6807"},{default:o(()=>[e(l,{class:"notice-bar-item","left-icon":"SoundOutlined",title:t.text1,marquee:""},null,8,["title"])]),_:1}),e(i,{title:"mode closable/clickable"},{default:o(()=>[e(l,{class:"notice-bar-item",mode:"closable",visible:t.visible,"onUpdate:visible":n[0]||(n[0]=u=>t.visible=u),title:t.text1,onCloseClick:s.onClose},null,8,["visible","title","onCloseClick"]),e(l,{class:"notice-bar-item",mode:"clickable",title:t.text1,onClick:s.onClick},null,8,["title","onClick"])]),_:1}),e(i,{title:"type=success/primary/danger"},{default:o(()=>[e(l,{"left-icon":"SoundOutlined",class:"notice-bar-item",type:"success",title:t.text1},null,8,["title"]),e(l,{"left-icon":"SoundOutlined",class:"notice-bar-item",type:"primary",title:t.text1},null,8,["title"]),e(l,{"left-icon":"SoundOutlined",class:"notice-bar-item",type:"danger",title:t.text1},null,8,["title"])]),_:1}),e(i,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[e(l,{class:"notice-bar-item","left-icon":"SoundOutlined",title:t.text1,color:"#fff","background-color":"#262626"},null,8,["title"])]),_:1})])}var k=a(b,[["render",d]]);export{k as default};