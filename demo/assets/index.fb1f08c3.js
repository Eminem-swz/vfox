import{_,a as c}from"./index.43780245.js";import{d as p,l as d,b as A,e as C,y as u,z as e,f as t}from"./vendor.d68a2f58.js";const m=p({name:"ExpCollapse",data(){return{activeNames:[],activeNames2:[],activeNames3:["row1"],activeNames4:[]}},setup(){return{onChange:s=>{console.log("change",s),c((s.length>0?s.join("\uFF0C"):"\u6CA1\u6709\u9879")+"\u5C55\u5F00")},onToggle:s=>{console.log("toggle",s),c(s.spread?"\u5C55\u5F00":"\u6536\u8D77")}}}}),D=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),f=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),v=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),r=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),B=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),g=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),N=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),h=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),w=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),x=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),T=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),b=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1),U=t("div",{class:"collapse-pad"}," \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C ",-1);function $(o,l,s,j,y,k){const a=d("fx-collapse-item"),F=d("fx-collapse"),E=d("fx-group"),i=d("fx-cell");return A(),C("div",null,[u(E,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[u(F,{activeNames:o.activeNames,"onUpdate:activeNames":l[0]||(l[0]=n=>o.activeNames=n)},{default:e(()=>[u(a,{title:"\u6807\u98981",name:"row1"},{default:e(()=>[D]),_:1}),u(a,{title:"\u6807\u98982",name:"row2"},{default:e(()=>[f]),_:1}),u(a,{title:"\u6807\u98983",name:"row3"},{default:e(()=>[v]),_:1})]),_:1},8,["activeNames"])]),_:1}),u(E,{title:"\u624B\u98CE\u7434"},{default:e(()=>[u(F,{activeNames:o.activeNames2,"onUpdate:activeNames":l[1]||(l[1]=n=>o.activeNames2=n),accordion:""},{default:e(()=>[u(a,{title:"\u6807\u98981",name:"row1"},{default:e(()=>[r]),_:1}),u(a,{title:"\u6807\u98982",name:"row2"},{default:e(()=>[B]),_:1}),u(a,{title:"\u6807\u98983",name:"row3"},{default:e(()=>[g]),_:1})]),_:1},8,["activeNames"])]),_:1}),u(E,{title:"\u5176\u4ED6"},{default:e(()=>[u(F,{activeNames:o.activeNames3,"onUpdate:activeNames":l[2]||(l[2]=n=>o.activeNames3=n)},{default:e(()=>[u(a,{title:"\u9ED8\u8BA4\u5C55\u5F00",name:"row1"},{default:e(()=>[N]),_:1}),u(a,{title:"\u548C Cell \u7EC4\u5408",name:"row2"},{default:e(()=>[u(i,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9"}),u(i,{label:"\u5355\u5143\u683C",content:"\u5185\u5BB9",description:"\u63CF\u8FF0\u4FE1\u606F"})]),_:1}),u(a,{title:"\u5E26\u56FE\u6807",icon:"MenuOutlined",name:"row3"},{default:e(()=>[h]),_:1}),u(a,{title:"\u7981\u7528",disabled:"",icon:"StopOutlined",name:"row4"},{default:e(()=>[w]),_:1})]),_:1},8,["activeNames"])]),_:1}),u(E,{title:"Collapse \u7684\u4E8B\u4EF6 change"},{default:e(()=>[u(F,{activeNames:o.activeNames4,"onUpdate:activeNames":l[3]||(l[3]=n=>o.activeNames4=n),onChange:o.onChange},{default:e(()=>[u(a,{title:"\u6807\u98981",name:"\u7B2C1\u9879"},{default:e(()=>[x]),_:1}),u(a,{title:"\u6807\u98982",name:"\u7B2C2\u9879"},{default:e(()=>[T]),_:1}),u(a,{title:"\u6807\u98983",name:"\u7B2C3\u9879"},{default:e(()=>[b]),_:1})]),_:1},8,["activeNames","onChange"])]),_:1}),u(E,{title:"CollapseItem \u7684\u4E8B\u4EF6 toggle"},{default:e(()=>[u(F,null,{default:e(()=>[u(a,{title:"\u6807\u98981",name:"row1",onToggle:o.onToggle},{default:e(()=>[U]),_:1},8,["onToggle"])]),_:1})]),_:1})])}var z=_(m,[["render",$]]);export{z as default};
