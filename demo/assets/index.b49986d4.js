import{_ as y,a as b}from"./index.7928e3b6.js";import{r as g,c as a,a as s,w as t,o as i,F as u,g as d,d as p,f,I as x,n as m}from"./vendor.d14b3c37.js";const h={name:"Swiper",data(){return{swiperList:[1,2,3,4],imageUrls:["https://cdn.fox2.cn/vfox/swiper/regular-1.jpg","https://cdn.fox2.cn/vfox/swiper/regular-2.jpg","https://cdn.fox2.cn/vfox/swiper/regular-3.jpg"],activeIndex:0,autoplay:!0}},methods:{onChange({activeIndex:_}){b.showToast(`change \u5230\u7B2C ${_+1} \u5F20`),console.log("change \u4E8B\u4EF6\u89E6\u53D1",_)},onClick(){b.showToast("click \u89E6\u53D1")},onAnimated({activeIndex:_}){b.showToast(`\u7B2C ${_+1} \u5F20 animated`),console.log("animated \u4E8B\u4EF6\u89E6\u53D1",_)}}};function C(_,k,L,U,r,v){const n=g("fx-swiper-item"),l=g("fx-swiper"),o=g("fx-group"),w=g("fx-image");return i(),a("div",null,[s(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[s(l,{class:"swiper-box",activeIndex:r.activeIndex,"onUpdate:activeIndex":k[0]||(k[0]=e=>r.activeIndex=e)},{default:t(()=>[(i(!0),a(u,null,d(r.swiperList,(e,c)=>(i(),p(n,{key:e},{default:t(()=>[f("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1},8,["activeIndex"])]),_:1}),s(o,{title:"\u663E\u793A\u9762\u677F\u6307\u793A\u70B9 indicator-dots=true"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":""},{default:t(()=>[(i(!0),a(u,null,d(r.imageUrls,e=>(i(),p(n,{key:e},{default:t(()=>[s(w,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),s(o,{title:"\u663E\u793A\u5207\u6362\u6309\u94AE navigation-buttons=true"},{default:t(()=>[s(l,{class:"swiper-box","navigation-buttons":""},{default:t(()=>[(i(!0),a(u,null,d(r.imageUrls,e=>(i(),p(n,{key:e},{default:t(()=>[s(w,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),s(o,{title:"\u5FAA\u73AF\u5C55\u793A initial-circular=true"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":"","initial-circular":""},{default:t(()=>[(i(!0),a(u,null,d(r.swiperList,(e,c)=>(i(),p(n,{key:e},{default:t(()=>[f("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),s(o,{title:"\u5782\u76F4\u65B9\u5411 initial-vertical=true"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":"","initial-vertical":""},{default:t(()=>[(i(!0),a(u,null,d(r.swiperList,(e,c)=>(i(),p(n,{key:e},{default:t(()=>[f("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),s(o,{title:"\u66F4\u6539\u6307\u793A\u70B9\u989C\u8272"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":"","indicator-color":"rgba(255, 255, 255, 0.5)","indicator-active-color":"#ff4d4f"},{default:t(()=>[(i(!0),a(u,null,d(r.swiperList,(e,c)=>(i(),p(n,{key:e},{default:t(()=>[f("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),s(o,{title:"\u81EA\u52A8\u8F6E\u64AD\uFF08\u5207\u6362\u65F6\u957F\u8BBE\u7F6E\u4E3A3000ms\uFF09"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":"",autoplay:r.autoplay,interval:3e3},{default:t(()=>[(i(!0),a(u,null,d(r.imageUrls,e=>(i(),p(n,{key:e},{default:t(()=>[s(w,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["autoplay"])]),_:1}),s(o,{title:"\u6ED1\u52A8\u8FC7\u7A0B\u65F6\u957F\uFF08\u8BBE\u7F6E\u4E3A2000ms\uFF09"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":"",duration:2e3},{default:t(()=>[(i(!0),a(u,null,d(r.imageUrls,e=>(i(),p(n,{key:e},{default:t(()=>[s(w,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),s(o,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08change/animated/click\uFF09"},{default:t(()=>[s(l,{class:"swiper-box","indicator-dots":"",onChange:v.onChange,onAnimated:v.onAnimated,onClick:v.onClick},{default:t(()=>[(i(!0),a(u,null,d(r.swiperList,(e,c)=>(i(),p(n,{key:e},{default:t(()=>[f("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1},8,["onChange","onAnimated","onClick"])]),_:1})])}var A=y(h,[["render",C]]);export{A as default};
