import{_ as d,a as u}from"./index.9adec39a.js";import{j as v,r as i,c as p,a as n,w as r,o as f}from"./vendor.d14b3c37.js";const b=v({name:"Dropdown",data(){return{visible:!1,selector:"",visibleEvent:!1}},methods:{onVisibleStateChange({state:e}){this.visibleEvent&&(u.showToast(`${e} \u4E8B\u4EF6\u89E6\u53D1`),console.log(`${e} \u4E8B\u4EF6\u89E6\u53D1`)),e==="hidden"&&(this.visibleEvent=!1)}}});function C(e,o,E,m,_,c){const s=i("fx-cell"),t=i("fx-group"),a=i("fx-dropdown");return f(),p("div",null,[n(t,{title:"\u57FA\u7840\u7528\u6CD5"},{default:r(()=>[n(s,{label:"\u57FA\u7840",isLink:"",id:"dropdownCell",onClick:o[0]||(o[0]=l=>{e.selector="#dropdownCell",e.visible=!0})})]),_:1}),n(t,{title:"\u4E8B\u4EF6\u76D1\u542C"},{default:r(()=>[n(s,{label:"visible-state-change",id:"dropdownCellEvent",onClick:o[1]||(o[1]=l=>{e.selector="#dropdownCellEvent",e.visibleEvent=!0,e.visible=!0})})]),_:1}),n(a,{visible:e.visible,"onUpdate:visible":o[2]||(o[2]=l=>e.visible=l),selector:e.selector,onVisibleStateChange:e.onVisibleStateChange},null,8,["visible","selector","onVisibleStateChange"])])}var $=d(b,[["render",C]]);export{$ as default};
