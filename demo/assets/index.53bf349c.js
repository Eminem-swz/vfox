import{_ as i}from"./index.51b8fb8d.js";import{r as a,c as _,a as e,w as o,o as d,f as t,A as u,I as x}from"./vendor.e8a7463a.js";const g={name:"Progress",data(){return{percentage:0}}},f={class:"progress-box"},m={class:"progress-bottom"},h={class:"progress-list"},v={class:"progress-list fixed-bar"},b={class:"progress-box"},w={class:"progress-box"};function V(y,c,B,C,l,N){const s=a("fx-progress"),p=a("fx-stepper"),r=a("fx-group");return d(),_("div",null,[e(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[t("div",f,[e(s,{percentage:l.percentage},null,8,["percentage"])]),t("div",m,[e(p,{min:0,max:100,modelValue:l.percentage,"onUpdate:modelValue":c[0]||(c[0]=n=>l.percentage=n)},null,8,["modelValue"])])]),_:1}),e(r,{title:"\u5C55\u793A\u6587\u5B57"},{default:o(()=>[t("ul",h,[t("li",null,[e(s,{percentage:5,"show-text":""})]),t("li",null,[e(s,{percentage:50,"show-text":""})]),t("li",null,[e(s,{percentage:100,"show-text":""})])])]),_:1}),e(r,{title:"\u56FA\u5B9A\u8FDB\u5EA6\u6761"},{default:o(()=>[t("ul",v,[t("li",null,[e(s,{percentage:5,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:50,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:100,"fixed-bar":"","show-text":""})])])]),_:1}),e(r,{title:"Slot default"},{default:o(()=>[t("div",b,[e(s,{percentage:5},{default:o(({progress:n})=>[u(" \u5DF2\u62A2"+x(n),1)]),_:1})])]),_:1}),e(r,{title:"\u81EA\u5B9A\u4E49Color"},{default:o(()=>[t("div",w,[e(s,{percentage:50,"show-text":"",class:"progress-custom-color"})])]),_:1})])}var S=i(g,[["render",V]]);export{S as default};
