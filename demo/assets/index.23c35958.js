import{_ as i}from"./index.7a60f2fa.js";import{r as a,o as _,c as d,a as e,w as o,f as t,B as x,I as u}from"./vendor.d6b2829d.js";const f={name:"ExpProgress",data(){return{percentage:0}}},g={class:"progress-box"},m={class:"progress-bottom"},h={class:"progress-list"},v={class:"progress-list fixed-bar"},b={class:"progress-box"},w={class:"progress-box"};function V(B,p,y,N,l,j){const s=a("fx-progress"),c=a("fx-stepper"),r=a("fx-group");return _(),d("div",null,[e(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[t("div",g,[e(s,{percentage:l.percentage},null,8,["percentage"])]),t("div",m,[e(c,{min:0,max:100,modelValue:l.percentage,"onUpdate:modelValue":p[0]||(p[0]=n=>l.percentage=n)},null,8,["modelValue"])])]),_:1}),e(r,{title:"\u5C55\u793A\u6587\u5B57"},{default:o(()=>[t("ul",h,[t("li",null,[e(s,{percentage:5,"show-text":""})]),t("li",null,[e(s,{percentage:50,"show-text":""})]),t("li",null,[e(s,{percentage:100,"show-text":""})])])]),_:1}),e(r,{title:"\u56FA\u5B9A\u8FDB\u5EA6\u6761"},{default:o(()=>[t("ul",v,[t("li",null,[e(s,{percentage:5,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:50,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:100,"fixed-bar":"","show-text":""})])])]),_:1}),e(r,{title:"Slot default"},{default:o(()=>[t("div",b,[e(s,{percentage:5},{default:o(({progress:n})=>[x(" \u5DF2\u62A2"+u(n),1)]),_:1})])]),_:1}),e(r,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[t("div",w,[e(s,{percentage:50,"show-text":"",color:"#8b1721"})])]),_:1})])}var E=i(f,[["render",V]]);export{E as default};
