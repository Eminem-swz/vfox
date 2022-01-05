import{_ as b,s as k,o as p}from"./index.99a038d5.js";import{d as c,l as r,b as v,e as y,x as e,y as t}from"./vendor.6d83210b.js";const A=c({name:"ExpNotify",data(){return{visible:!1,title:"\u6D45\u8272\u8C03",icon:"InfoCircleOutlined",backgroundColor:"#8bc7ff",color:"#292e36",duration:0,type:"primary",closable:!1}},methods:{callShowApi(){k({title:"\u901A\u77E5\u6587\u672C",duration:5e3,closable:!0,success(l){console.log("success",l)}})},show({title:l,backgroundColor:o,color:a,type:C,duration:s,icon:d,closable:i}){this.icon=d||null,this.title=l||"",this.backgroundColor=o||"",this.color=a||"",this.type=C||"primary",this.closable=i||!1,this.duration=s!=null?s:1500,this.visible=!0},callHideApi(){p({success(l){console.log("success",l)}})},onCancel(l){console.log("cancel",l)}}});function E(l,o,a,C,s,d){const i=r("fx-cell"),n=r("fx-group"),f=r("fx-notify");return v(),y("div",null,[e(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(i,{label:"\u4E3B\u8981",isLink:"",onClick:o[0]||(o[0]=u=>l.show({title:"\u901A\u77E5\u6587\u672C"}))}),e(i,{label:"\u6210\u529F",isLink:"",onClick:o[1]||(o[1]=u=>l.show({title:"\u6210\u529F\u6587\u672C",type:"success"}))}),e(i,{label:"\u8B66\u544A",isLink:"",onClick:o[2]||(o[2]=u=>l.show({title:"\u8B66\u544A\u6587\u672C",type:"warning"}))}),e(i,{label:"\u5371\u9669",isLink:"",onClick:o[3]||(o[3]=u=>l.show({title:"\u5371\u9669\u6587\u672C",type:"danger"}))})]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:t(()=>[e(i,{label:"\u6210\u529F",isLink:"",onClick:o[4]||(o[4]=u=>l.show({title:"\u6210\u529F\u6587\u672C",type:"success",icon:"CheckCircleOutlined"}))}),e(i,{label:"\u8B66\u544A",isLink:"",onClick:o[5]||(o[5]=u=>l.show({title:"\u8B66\u544A\u6587\u672C",type:"warning",icon:"ExclamationCircleOutlined"}))}),e(i,{label:"\u5371\u9669",isLink:"",onClick:o[6]||(o[6]=u=>l.show({title:"\u5371\u9669\u6587\u672C",type:"danger",icon:"CloseCircleOutlined"}))})]),_:1}),e(n,{title:"\u5176\u4ED6"},{default:t(()=>[e(i,{label:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:"",onClick:o[7]||(o[7]=u=>l.show({title:"5\u79D2\u540E\u6D88\u5931",duration:5e3}))}),e(i,{label:"\u81EA\u5B9A\u4E49\u989C\u8272",isLink:"",onClick:o[8]||(o[8]=u=>l.show({title:"\u6DF1\u8272\u8C03",icon:"InfoCircleOutlined",backgroundColor:"#ff4d4f",color:"#ffffff"}))}),e(i,{label:"\u624B\u52A8\u5173\u95ED",isLink:"",onClick:o[9]||(o[9]=u=>l.show({title:"\u5E38\u9A7B\u53EF\u624B\u52A8\u5173\u95ED",duration:0,closable:!0}))})]),_:1}),e(n,{title:"API"},{default:t(()=>[e(i,{label:"showNotify",isLink:"",onClick:l.callShowApi},null,8,["onClick"]),e(i,{label:"hideNotify",isLink:"",onClick:l.callHideApi},null,8,["onClick"])]),_:1}),e(f,{visible:l.visible,"onUpdate:visible":o[10]||(o[10]=u=>l.visible=u),title:l.title,type:l.type,backgroundColor:l.backgroundColor,color:l.color,icon:l.icon,duration:l.duration,closable:l.closable,onCancel:l.onCancel},null,8,["visible","title","type","backgroundColor","color","icon","duration","closable","onCancel"])])}var g=b(A,[["render",E]]);export{g as default};
