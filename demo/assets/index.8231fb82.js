import{_ as f,a as b}from"./index.5da8623e.js";import{d as C,r as t,l as r,b as c,e as m,y as o,z as u}from"./vendor.4df8ce31.js";const _=C({name:"ExpDropdown",setup(){const e=t(!1),n=t(""),l=t(!1);return{visible:e,selector:n,visibleEvent:l,onVisibleStateChange:({state:s})=>{l.value&&(b(`${s} \u4E8B\u4EF6\u89E6\u53D1`),console.log("visible-state-change",s)),s==="hidden"&&(l.value=!1)}}}});function g(e,n,l,p,s,E){const a=r("fx-cell"),d=r("fx-group"),v=r("fx-dropdown");return c(),m("div",null,[o(d,{title:"\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[o(a,{label:"\u57FA\u7840",isLink:"",id:"dropdownCell",onClick:n[0]||(n[0]=i=>{e.selector="#dropdownCell",e.visible=!0})})]),_:1}),o(d,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:u(()=>[o(a,{label:"visible-state-change",id:"dropdownCellEvent",onClick:n[1]||(n[1]=i=>{e.selector="#dropdownCellEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1}),o(v,{visible:e.visible,"onUpdate:visible":n[2]||(n[2]=i=>e.visible=i),selector:e.selector,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","selector","onVisibleStateChange"])])}var x=f(_,[["render",g]]);export{x as default};
