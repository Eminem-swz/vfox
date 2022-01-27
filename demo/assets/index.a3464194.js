import{_ as v,s as A,n as y}from"./index.ae5d02f0.js";import{d as E,r as t,m as p,e as w,f as m,z as e,A as a,F as $}from"./vendor.1f7be6ea.js";const B=E({name:"ExpNotify",setup(){const l=t(!1),o=t("\u6D45\u8272\u8C03"),r=t("InfoCircleOutlined"),f=t("#8bc7ff"),C=t("#292e36"),c=t(0),u=t("primary"),s=t(!1);function d(){A({title:"\u901A\u77E5\u6587\u672C",duration:5e3,closable:!0,success(i){console.log("success",i)}})}function n(){y({success(i){console.log("success",i)}})}function b(i){var k;r.value=i.icon||null,o.value=i.title||"",f.value=i.backgroundColor||"",C.value=i.color||"",u.value=i.type||"primary",s.value=i.closable||!1,c.value=(k=i.duration)!=null?k:1500,l.value=!0}return{visible:l,title:o,icon:r,backgroundColor:f,color:C,duration:c,type:u,closable:s,callShowApi:d,callHideApi:n,show:b,onCancel:i=>{console.log("cancel",i)}}}});function F(l,o,r,f,C,c){const u=p("fx-cell"),s=p("fx-group"),d=p("fx-notify");return w(),m($,null,[e(s,{title:"\u57FA\u7840\u7528\u6CD5"},{default:a(()=>[e(u,{label:"\u4E3B\u8981",isLink:"",onClick:o[0]||(o[0]=n=>l.show({title:"\u901A\u77E5\u6587\u672C"}))}),e(u,{label:"\u6210\u529F",isLink:"",onClick:o[1]||(o[1]=n=>l.show({title:"\u6210\u529F\u6587\u672C",type:"success"}))}),e(u,{label:"\u8B66\u544A",isLink:"",onClick:o[2]||(o[2]=n=>l.show({title:"\u8B66\u544A\u6587\u672C",type:"warning"}))}),e(u,{label:"\u5371\u9669",isLink:"",onClick:o[3]||(o[3]=n=>l.show({title:"\u5371\u9669\u6587\u672C",type:"danger"}))})]),_:1}),e(s,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:a(()=>[e(u,{label:"\u6210\u529F",isLink:"",onClick:o[4]||(o[4]=n=>l.show({title:"\u6210\u529F\u6587\u672C",type:"success",icon:"CheckCircleOutlined"}))}),e(u,{label:"\u8B66\u544A",isLink:"",onClick:o[5]||(o[5]=n=>l.show({title:"\u8B66\u544A\u6587\u672C",type:"warning",icon:"ExclamationCircleOutlined"}))}),e(u,{label:"\u5371\u9669",isLink:"",onClick:o[6]||(o[6]=n=>l.show({title:"\u5371\u9669\u6587\u672C",type:"danger",icon:"CloseCircleOutlined"}))})]),_:1}),e(s,{title:"\u5176\u4ED6"},{default:a(()=>[e(u,{label:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:"",onClick:o[7]||(o[7]=n=>l.show({title:"5\u79D2\u540E\u6D88\u5931",duration:5e3}))}),e(u,{label:"\u81EA\u5B9A\u4E49\u989C\u8272",isLink:"",onClick:o[8]||(o[8]=n=>l.show({title:"\u6DF1\u8272\u8C03",icon:"InfoCircleOutlined",backgroundColor:"#ff4d4f",color:"#ffffff"}))}),e(u,{label:"\u624B\u52A8\u5173\u95ED",isLink:"",onClick:o[9]||(o[9]=n=>l.show({title:"\u5E38\u9A7B\u53EF\u624B\u52A8\u5173\u95ED",duration:0,closable:!0}))})]),_:1}),e(s,{title:"API"},{default:a(()=>[e(u,{label:"showNotify",isLink:"",onClick:l.callShowApi},null,8,["onClick"]),e(u,{label:"hideNotify",isLink:"",onClick:l.callHideApi},null,8,["onClick"])]),_:1}),e(d,{visible:l.visible,"onUpdate:visible":o[10]||(o[10]=n=>l.visible=n),title:l.title,type:l.type,backgroundColor:l.backgroundColor,color:l.color,icon:l.icon,duration:l.duration,closable:l.closable,onCancel:l.onCancel},null,8,["visible","title","type","backgroundColor","color","icon","duration","closable","onCancel"])],64)}var N=v(B,[["render",F]]);export{N as default};
