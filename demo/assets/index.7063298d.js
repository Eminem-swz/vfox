import{_ as d}from"./index.95d96f48.js";import{d as i,l,b as c,e as _,y as e,z as o,f as t,I as f,t as x}from"./vendor.d68a2f58.js";const g=i({name:"ExpProgress",data(){return{percentage:0}}}),m={class:"progress-box"},h={class:"progress-bottom"},v={class:"progress-list"},b={class:"progress-list fixed-bar"},w={class:"progress-box"},A={class:"progress-box"};function B(n,u,C,V,E,y){const s=l("fx-progress"),p=l("fx-stepper"),r=l("fx-group");return c(),_("div",null,[e(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:o(()=>[t("div",m,[e(s,{percentage:n.percentage},null,8,["percentage"])]),t("div",h,[e(p,{min:0,max:100,modelValue:n.percentage,"onUpdate:modelValue":u[0]||(u[0]=a=>n.percentage=a)},null,8,["modelValue"])])]),_:1}),e(r,{title:"\u5C55\u793A\u6587\u5B57"},{default:o(()=>[t("ul",v,[t("li",null,[e(s,{percentage:5,"show-text":""})]),t("li",null,[e(s,{percentage:50,"show-text":""})]),t("li",null,[e(s,{percentage:100,"show-text":""})])])]),_:1}),e(r,{title:"\u56FA\u5B9A\u8FDB\u5EA6\u6761"},{default:o(()=>[t("ul",b,[t("li",null,[e(s,{percentage:5,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:50,"fixed-bar":"","show-text":""})]),t("li",null,[e(s,{percentage:100,"fixed-bar":"","show-text":""})])])]),_:1}),e(r,{title:"Slot default"},{default:o(()=>[t("div",w,[e(s,{percentage:5},{default:o(({progress:a})=>[f(" \u5DF2\u62A2"+x(a),1)]),_:1})])]),_:1}),e(r,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[t("div",A,[e(s,{percentage:50,"show-text":"",color:"#8b1721"})])]),_:1})])}var $=d(g,[["render",B]]);export{$ as default};
