import{_ as v,a as b}from"./index.6b2d5e1d.js";import{d as C,r as i,e as c,z as n,A as d,F as m,m as r,g}from"./vendor.527b969d.js";const E=C({name:"ExpDropdown",setup(){const e=i(!1),o=i(""),l=i(!1);return{visible:e,selector:o,visibleEvent:l,onVisibleStateChange:({state:s})=>{l.value&&(b(`${s} \u4E8B\u4EF6\u89E6\u53D1`),console.log("visible-state-change",s)),s==="hidden"&&(l.value=!1)}}}});function w(e,o,l,p,s,$){const a=r("fx-cell"),u=r("fx-group"),f=r("fx-dropdown");return g(),c(m,null,[n(u,{title:"\u57FA\u7840\u7528\u6CD5"},{default:d(()=>[n(a,{label:"\u57FA\u7840",isLink:"",id:"dropdownCell",onClick:o[0]||(o[0]=t=>{e.selector="#dropdownCell",e.visible=!0})})]),_:1}),n(u,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:d(()=>[n(a,{label:"visible-state-change",id:"dropdownCellEvent",onClick:o[1]||(o[1]=t=>{e.selector="#dropdownCellEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1}),n(f,{visible:e.visible,"onUpdate:visible":o[2]||(o[2]=t=>e.visible=t),selector:e.selector,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","selector","onVisibleStateChange"])],64)}var h=v(E,[["render",w]]);export{h as default};
