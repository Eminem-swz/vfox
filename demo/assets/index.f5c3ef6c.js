import{_ as c}from"./index.c5a743f2.js";import{d as i,m as l,e as d,f as _,z as e,A as o,F as x,g as t,I as g,t as f}from"./vendor.1f7be6ea.js";const m=i({name:"ExpProgress",data(){return{percentage:0}}}),h={class:"exp-progress-box"},b={class:"exp-progress-bottom"},v={class:"exp-progress-list"},A={class:"exp-progress-list fixed-bar"},w={class:"exp-progress-box"},B={class:"exp-progress-box"};function C(r,p,F,V,E,D){const s=l("fx-progress"),u=l("fx-stepper"),a=l("fx-group");return d(),_(x,null,[e(a,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[t("div",h,[e(s,{percentage:r.percentage},null,8,["percentage"])]),t("div",b,[e(u,{min:0,max:100,modelValue:r.percentage,"onUpdate:modelValue":p[0]||(p[0]=n=>r.percentage=n)},null,8,["modelValue"])])]),_:1}),e(a,{title:"\u5C55\u793A\u6587\u5B57"},{default:o(()=>[t("ul",v,[t("li",null,[e(s,{percentage:5,"show-text":""})]),t("li",null,[e(s,{percentage:50,"show-text":""})]),t("li",null,[e(s,{percentage:100,"show-text":""})])])]),_:1}),e(a,{title:"\u56FA\u5B9A\u8FDB\u5EA6\u6761"},{default:o(()=>[t("ul",A,[t("li",null,[e(s,{percentage:5,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:50,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:100,"fixed-bar":"","show-text":""})])])]),_:1}),e(a,{title:"Slot default"},{default:o(()=>[t("div",w,[e(s,{percentage:5},{default:o(({progress:n})=>[g(" \u5DF2\u62A2"+f(n),1)]),_:1})])]),_:1}),e(a,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[t("div",B,[e(s,{percentage:50,"show-text":"",color:"#8b1721"})])]),_:1})],64)}var N=c(m,[["render",C]]);export{N as default};
