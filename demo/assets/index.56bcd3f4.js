import{_ as b,a as F}from"./index.75560e0d.js";import{d as C,r as E,m as v,e as u,f as i,z as a,A as t,F as n,q as p,h as c,g as m,t as _,j as g}from"./vendor.8029601e.js";const y=C({name:"ExpSwiper",setup(){const s=E(0);return{swiperList:[1,2,3,4],imageUrls:["https://cdn.fox2.cn/vfox/swiper/regular-1.jpg","https://cdn.fox2.cn/vfox/swiper/regular-2.jpg","https://cdn.fox2.cn/vfox/swiper/regular-3.jpg"],activeIndex:s,autoplay:!0,showToast:F,onChange:({activeIndex:f})=>{F(`change \u5230\u7B2C ${f+1} \u5F20`),console.log("change",f)},onAnimated:({activeIndex:f})=>{F(`\u7B2C ${f+1} \u5F20 animated`),console.log("animated",f)}}}});function k(s,x,A,f,B,h){const r=v("fx-swiper-item"),l=v("fx-swiper"),o=v("fx-group"),w=v("fx-image");return u(),i(n,null,[a(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[a(l,{class:"exp-swiper-box",activeIndex:s.activeIndex,"onUpdate:activeIndex":x[0]||(x[0]=e=>s.activeIndex=e)},{default:t(()=>[(u(!0),i(n,null,p(s.swiperList,(e,d)=>(u(),c(r,{key:e},{default:t(()=>[m("div",{class:g(["exp-swiper-box-item",{even:d%2==1}])},_(e),3)]),_:2},1024))),128))]),_:1},8,["activeIndex"])]),_:1}),a(o,{title:"\u663E\u793A\u9762\u677F\u6307\u793A\u70B9 indicator-dots=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":""},{default:t(()=>[(u(!0),i(n,null,p(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(w,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u663E\u793A\u5207\u6362\u6309\u94AE navigation-buttons=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","navigation-buttons":""},{default:t(()=>[(u(!0),i(n,null,p(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(w,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u5FAA\u73AF\u5C55\u793A initial-circular=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"","initial-circular":""},{default:t(()=>[(u(!0),i(n,null,p(s.swiperList,(e,d)=>(u(),c(r,{key:e},{default:t(()=>[m("div",{class:g(["exp-swiper-box-item",{even:d%2==1}])},_(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u5782\u76F4\u65B9\u5411 initial-vertical=true"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"","initial-vertical":""},{default:t(()=>[(u(!0),i(n,null,p(s.swiperList,(e,d)=>(u(),c(r,{key:e},{default:t(()=>[m("div",{class:g(["exp-swiper-box-item",{even:d%2==1}])},_(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u66F4\u6539\u6307\u793A\u70B9\u989C\u8272"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"","indicator-color":"rgba(255, 255, 255, 0.5)","indicator-active-color":"#ff4d4f"},{default:t(()=>[(u(!0),i(n,null,p(s.swiperList,(e,d)=>(u(),c(r,{key:e},{default:t(()=>[m("div",{class:g(["exp-swiper-box-item",{even:d%2==1}])},_(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u81EA\u52A8\u8F6E\u64AD\uFF08\u5207\u6362\u65F6\u957F\u8BBE\u7F6E\u4E3A3000ms\uFF09"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"",autoplay:s.autoplay,interval:3e3},{default:t(()=>[(u(!0),i(n,null,p(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(w,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["autoplay"])]),_:1}),a(o,{title:"\u6ED1\u52A8\u8FC7\u7A0B\u65F6\u957F\uFF08\u8BBE\u7F6E\u4E3A2000ms\uFF09"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"",duration:2e3},{default:t(()=>[(u(!0),i(n,null,p(s.imageUrls,e=>(u(),c(r,{key:e},{default:t(()=>[a(w,{class:"exp-swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),a(o,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08change/animated/click\uFF09"},{default:t(()=>[a(l,{class:"exp-swiper-box","indicator-dots":"",onChange:s.onChange,onAnimated:s.onAnimated,onClick:x[1]||(x[1]=e=>s.showToast("click \u89E6\u53D1"))},{default:t(()=>[(u(!0),i(n,null,p(s.swiperList,(e,d)=>(u(),c(r,{key:e},{default:t(()=>[m("div",{class:g(["exp-swiper-box-item",{even:d%2==1}])},_(e),3)]),_:2},1024))),128))]),_:1},8,["onChange","onAnimated"])]),_:1})],64)}var D=b(y,[["render",k]]);export{D as default};
