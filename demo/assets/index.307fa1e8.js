import{_ as p,a as c}from"./index.89cbf3ff.js";import{d as g,l as m,b as E,e as x,y as l,z as a,f as d,t as n,h}from"./vendor.3db2f07a.js";const L=g({name:"ExpFlatList",data(){return{list:[],lowerLoading:!1,loadList:[],getItemSize(t,e){return 50+e%10*2}}},created(){const t=[];for(let e=0;e<100;e++)t.push({id:e+1,text:`\u7B2C ${e+1} \u4E2A\u5217\u8868`});this.list=t,this.getLoadList()},methods:{scrollToIndex(t,e=0){this.$refs.flatList.scrollToIndex({index:t,viewPosition:e})},scrollToOffset(t){this.$refs.flatList.scrollToOffset({offset:t})},onRefreshing(t,e){setTimeout(()=>{c({title:"\u5237\u65B0\u6210\u529F",type:"success"}),e()},2e3)},onEndReached(){c("\u5230\u5E95\u4E86")},onLoadMore(){this.loadList.length>=100||(this.lowerLoading=!0,setTimeout(()=>{this.getLoadList(),c({title:"\u52A0\u8F7D\u6210\u529F",type:"success"}),this.lowerLoading=!1},500))},onRecycleChange({item:t,index:e,recycled:f}){e===49&&c(`${t.text} ${f?"\u56DE\u6536\u4E86":"\u52A0\u5165\u4E86"}`)},getLoadList(){const t=this.loadList;for(let e=t.length,f=t.length+10;e<f;e++)t.push({id:e+1,text:`\u7B2C ${e+1} \u4E2A\u5217\u8868`})}}}),y={class:"flat-list"},C={class:"flat-list-item"},v={class:"flat-list-item"},F={class:"flat-list-item"},k={class:"flat-list-item"},b={class:"flat-list-item"};function R(t,e,f,$,A,T){const i=m("fx-flat-list"),o=m("fx-group"),_=m("fx-empty"),r=m("fx-cell");return E(),x("div",y,[l(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,"data-key":"id"},{default:a(({item:s})=>[d("div",C,n(s.text),1)]),_:1},8,["data"])]),_:1}),l(o,{title:"\u6C34\u5E73\u5217\u8868"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,"item-size":130,"data-key":"id",initialHorizontal:""},{default:a(({item:s})=>[d("div",v,n(s.text),1)]),_:1},8,["data"])]),_:1}),l(o,{title:"\u5C55\u793A\u5E95\u90E8\u52A0\u8F7D\u66F4\u591A\u63D0\u793A"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.loadList,"item-size":50,"data-key":"id","lower-loading":t.lowerLoading,onEndReached:t.onLoadMore},{default:a(({item:s})=>[d("div",F,n(s.text),1)]),_:1},8,["data","lower-loading","onEndReached"])]),_:1}),l(o,{title:"\u8BBE\u7F6E\u95F4\u9694\uFF08itemGutter=[16, 6]\uFF09"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,"data-key":"id",itemGutter:[16,6]},{default:a(({item:s,index:u})=>[d("div",{class:h(["flat-list-item",["color-"+u%10]])},n(s.text),3)]),_:1},8,["data"])]),_:1}),l(o,{title:"\u7011\u5E03\u6D41"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,getItemSize:t.getItemSize,"data-key":"id",initialWaterfall:"",waterfallColCount:3,ref:"demo"},{default:a(({item:s,index:u})=>[d("div",{class:h(["flat-list-item",["color-"+u%10]])},n(s.text),3)]),_:1},8,["data","getItemSize"])]),_:1}),l(o,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08end-reached/recycle-change\uFF09"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,"item-size":50,"data-key":"id",onEndReached:t.onEndReached,onRecycleChange:t.onRecycleChange},{default:a(({item:s})=>[d("div",k,n(s.text),1)]),_:1},8,["data","onEndReached","onRecycleChange"])]),_:1}),l(o,{title:"\u5F00\u542F\u4E0B\u62C9\u5237\u65B0"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,"item-size":50,"data-key":"id","enable-pull-refresh":!0,onRefreshing:t.onRefreshing},{default:a(({item:s})=>[d("div",b,n(s.text),1)]),_:1},8,["data","onRefreshing"])]),_:1}),l(o,{title:"Slot empty"},{default:a(()=>[l(i,{class:"flat-list-box",data:[],"item-size":50,"data-key":"id"},{empty:a(()=>[l(_,{description:"\u6682\u65E0\u5217\u8868"})]),_:1})]),_:1}),l(o,{title:"Method"},{default:a(()=>[l(i,{class:"flat-list-box",data:t.list,"data-key":"id",ref:"flatList"},{default:a(({item:s,index:u})=>[d("div",{class:h(["flat-list-item",["color-"+u%10]])},n(s.text),3)]),_:1},8,["data"]),l(r,{label:"scrollToIndex({ index: 49 })",isLink:"",onClick:e[0]||(e[0]=s=>t.scrollToIndex(49))}),l(r,{label:"\u540C\u4E0A\u52A0 viewPosition=0.5",isLink:"",onClick:e[1]||(e[1]=s=>t.scrollToIndex(49,.5))}),l(r,{label:"\u540C\u4E0A\u52A0 viewPosition=1",isLink:"",onClick:e[2]||(e[2]=s=>t.scrollToIndex(49,1))}),l(r,{label:"scrollToOffset({ offset: 200 })",isLink:"",onClick:e[3]||(e[3]=s=>t.scrollToOffset(200))})]),_:1})])}var B=p(L,[["render",R]]);export{B as default};
