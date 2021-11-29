import{m as S}from"./data.7c923ef7.js";import{_ as I,a as F}from"./index.88d65a1c.js";import{r as M}from"./region.51c01a32.js";import{r as l,c as g,a as o,w as t,o as i,F as j,g as B,d as N,A as d,I as O,f as C}from"./vendor.e8a7463a.js";const T={name:"Form",data(){return{ageVisible:!1,regionOptions:M,rules:{nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0",trigger:"blur"},{min:2,max:5,message:"\u957F\u5EA6\u5728 2 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],avatar:[{required:!0,type:"array",message:"\u8BF7\u9009\u62E9\u5934\u50CF"}],gender:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}],age:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E74\u9F84"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A"}],character:[{required:!0,type:"array",message:"\u8BF7\u9009\u62E9\u6027\u683C"}],season:[{required:!0,message:"\u8BF7\u9009\u62E9\u5B63\u8282"}],birthday:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u65E5"}],weight:[{min:42.5,message:"\u592A\u7626\u7684\u6211\u4EEC\u4E0D\u8981",type:"number",trigger:"change"},{max:80,message:"\u592A\u80A5\u7684\u6211\u4EEC\u4E0D\u8981",type:"number",trigger:"change"}],happinessIndex:[{min:.5,message:"\u8BF7\u9009\u62E9\u5E78\u798F\u6307\u6570",type:"number",trigger:"change"},{min:3,message:"\u4F60\u4E0D\u5E78\u798F\u5417\uFF1F",type:"number",trigger:"change"}],agree:[{validator(a,e,u){e===!0?u():u(new Error("\u4F60\u5FC5\u987B\u8BA4\u53EF\u8BE5\u8868\u5355"))}}]},form:{nickname:"",avatar:"",gender:"",happinessIndex:0,weight:0,character:["\u6D3B\u6CFC"],season:[],region:["\u5317\u4EAC\u5E02","\u5317\u4EAC\u5E02","\u4E1C\u57CE\u533A"],stepper:0,birthday:[new Date],agree:!1},multiOptions:S,characters:["\u6D3B\u6CFC","\u5185\u5411","\u9AD8\u51B7"],formatString:!1,birthdayFormatter(a,e){return console.log(a,e("YYYY-MM-DD")),a[0]?e("YYYY-MM-DD")[0]:""}}},methods:{onSubmit(a){console.log(a),F.showToast(a.valid?"\u6821\u9A8C\u901A\u8FC7":"\u6821\u9A8C\u5931\u8D25")},onReset(a){console.log(a)},onUpload(a,e){console.log(a),this.getDataUrl(a).then(u=>{e.success(u)})},getDataUrl(a){return new Promise(e=>{const u=new FileReader;u.onload=function(f){e(f.target.result)},u.readAsDataURL(a)})}}},A=d("\u7537"),E=d("\u5973"),L={class:"form-btns"},K=d("\u91CD\u7F6E"),P=d("\u63D0\u4EA4");function z(a,e,u,f,r,s){const c=l("fx-input"),m=l("fx-form-item"),x=l("fx-image-uploader"),p=l("fx-radio"),R=l("fx-radio-group"),V=l("fx-picker"),b=l("fx-calendar"),h=l("fx-cascader"),y=l("fx-slider"),v=l("fx-checkbox"),q=l("fx-checkbox-group"),w=l("fx-rate"),U=l("fx-stepper"),k=l("fx-switch"),_=l("fx-button"),D=l("fx-form"),Y=l("fx-group");return i(),g("div",null,[o(Y,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[o(D,{onValidateSubmit:s.onSubmit,onReset:s.onReset,rules:r.rules},{default:t(()=>[o(m,{name:"nickname",label:"\u6635\u79F0",required:""},{default:t(()=>[o(c,{modelValue:r.form.nickname,"onUpdate:modelValue":e[0]||(e[0]=n=>r.form.nickname=n),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",onReset:s.onReset},null,8,["modelValue","onReset"])]),_:1}),o(m,{name:"avatar",label:"\u5934\u50CF",required:""},{default:t(()=>[o(x,{modelValue:r.form.avatar,"onUpdate:modelValue":e[1]||(e[1]=n=>r.form.avatar=n),onReset:s.onReset,uploadReady:s.onUpload,columnNumber:1,maxCount:1},null,8,["modelValue","onReset","uploadReady"])]),_:1}),o(m,{name:"gender",label:"\u6027\u522B",required:""},{default:t(()=>[o(R,{modelValue:r.form.gender,"onUpdate:modelValue":e[2]||(e[2]=n=>r.form.gender=n),inline:!0,onReset:s.onReset},{default:t(()=>[o(p,{value:"1"},{default:t(()=>[A]),_:1}),o(p,{value:"2"},{default:t(()=>[E]),_:1})]),_:1},8,["modelValue","onReset"])]),_:1}),o(m,{name:"season",label:"\u5B63\u8282",required:""},{default:t(()=>[o(V,{modelValue:r.form.season,"onUpdate:modelValue":e[3]||(e[3]=n=>r.form.season=n),options:r.multiOptions,placeholder:"\u9009\u62E9\u5B63\u8282",onReset:s.onReset},null,8,["modelValue","options","onReset"])]),_:1}),o(m,{name:"birthday",label:"\u751F\u65E5",required:""},{default:t(()=>[o(b,{modelValue:r.form.birthday,"onUpdate:modelValue":e[4]||(e[4]=n=>r.form.birthday=n),placeholder:"\u9009\u62E9\u751F\u65E5",onReset:s.onReset},null,8,["modelValue","onReset"])]),_:1}),o(m,{name:"region",label:"\u5730\u533A",required:""},{default:t(()=>[o(h,{options:r.regionOptions,"field-names":{value:"label"},modelValue:r.form.region,"onUpdate:modelValue":e[5]||(e[5]=n=>r.form.region=n),placeholder:"\u9009\u62E9\u5730\u533A","format-string":r.formatString,onReset:s.onReset},null,8,["options","modelValue","format-string","onReset"])]),_:1}),o(m,{name:"weight",label:"\u4F53\u91CDKg",required:""},{default:t(()=>[o(y,{modelValue:r.form.weight,"onUpdate:modelValue":e[6]||(e[6]=n=>r.form.weight=n),min:35,max:120,"show-value":!0,onReset:s.onReset},null,8,["modelValue","onReset"])]),_:1}),o(m,{name:"character",label:"\u6027\u683C",required:""},{default:t(()=>[o(q,{modelValue:r.form.character,"onUpdate:modelValue":e[7]||(e[7]=n=>r.form.character=n),onReset:s.onReset},{default:t(()=>[(i(!0),g(j,null,B(r.characters,n=>(i(),N(v,{value:n,key:n},{default:t(()=>[d(O(n),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","onReset"])]),_:1}),o(m,{name:"happinessIndex",label:"\u5E78\u798F\u6307\u6570",required:""},{default:t(()=>[o(w,{modelValue:r.form.happinessIndex,"onUpdate:modelValue":e[8]||(e[8]=n=>r.form.happinessIndex=n),"allow-half":!0,onReset:s.onReset},null,8,["modelValue","onReset"])]),_:1}),o(m,{name:"stepper",label:"\u6B65\u8FDB\u5668",required:""},{default:t(()=>[o(U,{modelValue:r.form.stepper,"onUpdate:modelValue":e[9]||(e[9]=n=>r.form.stepper=n),modelModifiers:{number:!0},max:10,step:.2,"decimal-length":1,onReset:s.onReset},null,8,["modelValue","step","onReset"])]),_:1}),o(m,{name:"agree",label:"\u8BA4\u53EF",required:""},{default:t(()=>[o(k,{modelValue:r.form.agree,"onUpdate:modelValue":e[10]||(e[10]=n=>r.form.agree=n),onReset:s.onReset},null,8,["modelValue","onReset"])]),_:1}),C("div",L,[o(_,{"form-type":"reset"},{default:t(()=>[K]),_:1}),o(_,{type:"primary","form-type":"submit"},{default:t(()=>[P]),_:1})])]),_:1},8,["onValidateSubmit","onReset","rules"])]),_:1})])}var W=I(T,[["render",z]]);export{W as default};
