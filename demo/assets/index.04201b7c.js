import{_ as f,a as p,l as A,m as b,n as m}from"./index.43780245.js";import{d as D,r as l,l as v,b as F,e as L,y as i,z as a}from"./vendor.d68a2f58.js";const w=D({name:"ExpToast",setup(){const o=l(!1),u=l(""),d=l("default"),k=l(!1),C=l(),r=l(0);function t(e){var s;C.value=e.icon||void 0,u.value=e.title||"",k.value=e.mask||!1,d.value=e.type||"default",r.value=(s=e.duration)!=null?s:1500,o.value=!0}return{visible:o,title:u,type:d,mask:k,icon:C,duration:r,onShowToast:t,showToast:p,showLoading:A,hideToast:b,hideLoading:m}}});function T(o,u,d,k,C,r){const t=v("fx-cell"),e=v("fx-group"),s=v("fx-toast");return F(),L("div",null,[i(e,{title:"\u57FA\u7840\u7528\u6CD5"},{default:a(()=>[i(t,{label:"\u7EAF\u6587\u5B57",isLink:"",onClick:u[0]||(u[0]=n=>o.onShowToast({title:"\u63D0\u793A\u6587\u672C"}))}),i(t,{label:"\u957F\u6587\u5B57",isLink:"",onClick:u[1]||(u[1]=n=>o.onShowToast({title:"\u63D0\u793A\u6587\u672C\u63D0\u793A\u6587\u672C\u63D0\u793A\u6587\u672C\u63D0\u793A\u6587\u672C\u63D0\u793A\u6587\u672C"}))}),i(t,{label:"\u6210\u529F",isLink:"",onClick:u[2]||(u[2]=n=>o.onShowToast({title:"\u6210\u529F\u6587\u672C",type:"success"}))}),i(t,{label:"\u5931\u8D25",isLink:"",onClick:u[3]||(u[3]=n=>o.onShowToast({title:"\u5931\u8D25\u6587\u672C",type:"fail"}))}),i(t,{label:"\u52A0\u8F7D\u4E2D",isLink:"",onClick:u[4]||(u[4]=n=>o.onShowToast({title:"\u52A0\u8F7D\u6587\u672C",type:"loading"}))})]),_:1}),i(e,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:a(()=>[i(t,{label:"\u6536\u85CF",isLink:"",onClick:u[5]||(u[5]=n=>o.onShowToast({title:"\u5DF2\u6536\u85CF",icon:"StarFilled"}))}),i(t,{label:"\u8B66\u544A",isLink:"",onClick:u[6]||(u[6]=n=>o.onShowToast({title:"\u8B66\u544A\u6587\u672C",icon:"ExclamationCircleOutlined"}))})]),_:1}),i(e,{title:"\u5176\u4ED6"},{default:a(()=>[i(t,{label:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:"",onClick:u[7]||(u[7]=n=>o.onShowToast({title:"5\u79D2\u540E\u6D88\u5931",duration:5e3}))}),i(t,{label:"\u5C55\u793A\u900F\u660E\u8499\u5C42",isLink:"",onClick:u[8]||(u[8]=n=>o.onShowToast({title:"\u4E0D\u53EF\u7A7F\u900F",mask:!0}))})]),_:1}),i(e,{title:"API"},{default:a(()=>[i(t,{label:"showToast",isLink:"",onClick:u[9]||(u[9]=n=>o.showToast({title:"\u63D0\u793A\u6587\u672C",duration:5e3}))}),i(t,{label:"hideToast",isLink:"",onClick:u[10]||(u[10]=n=>o.hideToast())}),i(t,{label:"showLoading",isLink:"",onClick:u[11]||(u[11]=n=>o.showLoading({title:"\u52A0\u8F7D\u4E2D"}))}),i(t,{label:"hideLoading",isLink:"",onClick:u[12]||(u[12]=n=>o.hideLoading())})]),_:1}),i(s,{visible:o.visible,"onUpdate:visible":u[13]||(u[13]=n=>o.visible=n),title:o.title,type:o.type,mask:o.mask,icon:o.icon,duration:o.duration},null,8,["visible","title","type","mask","icon","duration"])])}var S=f(w,[["render",T]]);export{S as default};
