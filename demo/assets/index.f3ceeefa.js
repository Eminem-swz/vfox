import{_ as b,a as x}from"./index.c5a743f2.js";import{d as F,E,r as C,m as L,e as y,f as I,z as t,A as l,F as A,g as u,t as f,j as _}from"./vendor.1f7be6ea.js";const R=F({name:"ExpFlatList",setup(){const a=E([]);for(let e=0;e<100;e++)a.push({id:e+1,text:`\u7B2C ${e+1} \u4E2A\u5217\u8868`});const i=E([]);function g(){for(let e=i.length,n=i.length+10;e<n;e++)i.push({id:e+1,text:`\u7B2C ${e+1} \u4E2A\u5217\u8868`})}g();const c=C(!1),m=C();function h(e,n=0){var p;(p=m.value)==null||p.scrollToIndex({index:e,viewPosition:n})}function o(e){var n;(n=m.value)==null||n.scrollTo({offset:e})}return{list:a,loadList:i,lowerLoading:c,getItemSize(e){return 50+e%10*2},flatList:m,scrollToIndex:h,scrollTo:o,onRefreshing:(e,n)=>{setTimeout(()=>{x({title:"\u5237\u65B0\u6210\u529F",type:"success"}),n()},2e3)},onEndReached:e=>{console.log("end-reached",e),x("\u5230\u5E95\u4E86")},onLoadMore:e=>{console.log("end-reached",e),!(i.length>=100)&&(c.value=!0,setTimeout(()=>{g(),x({title:"\u52A0\u8F7D\u6210\u529F",type:"success"}),c.value=!1},500))},onVisibleItemsChange:({items:e})=>{console.log("visible-items-change",e),e.forEach(({index:n,visible:p})=>{n===49&&x(`index: ${n}, visable: ${p}`)})}}}}),T={class:"exp-flatList-item"},z={class:"exp-flatList-item"},$={class:"exp-flatList-item"},B={class:"exp-flatList-item"},S={class:"exp-flatList-item"};function k(a,i,g,c,m,h){const o=L("fx-flat-list"),d=L("fx-group"),v=L("fx-empty"),r=L("fx-cell");return y(),I(A,null,[t(d,{title:"\u57FA\u7840\u7528\u6CD5"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,dataKey:"id"},{default:l(({item:s})=>[u("div",T,f(s.text),1)]),_:1},8,["data"])]),_:1}),t(d,{title:"\u6C34\u5E73\u5217\u8868"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,itemSize:130,dataKey:"id",initialHorizontal:""},{default:l(({item:s})=>[u("div",z,f(s.text),1)]),_:1},8,["data"])]),_:1}),t(d,{title:"\u5C55\u793A\u5E95\u90E8\u52A0\u8F7D\u66F4\u591A\u63D0\u793A"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.loadList,itemSize:50,dataKey:"id",lowerLoading:a.lowerLoading,onEndReached:a.onLoadMore},{default:l(({item:s})=>[u("div",$,f(s.text),1)]),_:1},8,["data","lowerLoading","onEndReached"])]),_:1}),t(d,{title:"\u8BBE\u7F6E\u95F4\u9694\uFF08itemGutter=[16, 6]\uFF09"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,dataKey:"id",itemGutter:[16,6]},{default:l(({item:s,index:e})=>[u("div",{class:_(["exp-flatList-item",["color-"+e%10]])},f(s.text),3)]),_:1},8,["data"])]),_:1}),t(d,{title:"\u7011\u5E03\u6D41"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,getItemSize:a.getItemSize,dataKey:"id",initialWaterfall:"",waterfallColCount:3,ref:"demo"},{default:l(({item:s,index:e})=>[u("div",{class:_(["exp-flatList-item",["color-"+e%10]])},f(s.text),3)]),_:1},8,["data","getItemSize"])]),_:1}),t(d,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08end-reached/visible-items-change\uFF09"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,itemSize:50,dataKey:"id",onEndReached:a.onEndReached,onVisibleItemsChange:a.onVisibleItemsChange},{default:l(({item:s})=>[u("div",B,f(s.text),1)]),_:1},8,["data","onEndReached","onVisibleItemsChange"])]),_:1}),t(d,{title:"\u5F00\u542F\u4E0B\u62C9\u5237\u65B0"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,itemSize:50,dataKey:"id",enablePullRefresh:!0,onRefreshing:a.onRefreshing},{default:l(({item:s})=>[u("div",S,f(s.text),1)]),_:1},8,["data","onRefreshing"])]),_:1}),t(d,{title:"Slot empty"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:[],itemSize:50,dataKey:"id"},{empty:l(()=>[t(v,{description:"\u6682\u65E0\u5217\u8868"})]),_:1})]),_:1}),t(d,{title:"Method"},{default:l(()=>[t(o,{class:"exp-flatList-box",data:a.list,dataKey:"id",ref:"flatList"},{default:l(({item:s,index:e})=>[u("div",{class:_(["exp-flatList-item",["color-"+e%10]])},f(s.text),3)]),_:1},8,["data"]),t(r,{label:"scrollToIndex({ index: 49 })",isLink:"",onClick:i[0]||(i[0]=s=>a.scrollToIndex(49))}),t(r,{label:"\u540C\u4E0A\u52A0 viewPosition=0.5",isLink:"",onClick:i[1]||(i[1]=s=>a.scrollToIndex(49,.5))}),t(r,{label:"\u540C\u4E0A\u52A0 viewPosition=1",isLink:"",onClick:i[2]||(i[2]=s=>a.scrollToIndex(49,1))}),t(r,{label:"scrollTo({ offset: 200 })",isLink:"",onClick:i[3]||(i[3]=s=>a.scrollTo(200))})]),_:1})],64)}var D=b(R,[["render",k]]);export{D as default};
