import{_ as y,a as b}from"./index.89cbf3ff.js";import{l as w,b as s,e as a,y as i,z as t,F as u,p as d,g as p,f as _,t as x,h as m}from"./vendor.3db2f07a.js";const h={name:"ExpSwiper",data(){return{swiperList:[1,2,3,4],imageUrls:["https://cdn.fox2.cn/vfox/swiper/regular-1.jpg","https://cdn.fox2.cn/vfox/swiper/regular-2.jpg","https://cdn.fox2.cn/vfox/swiper/regular-3.jpg"],activeIndex:0,autoplay:!0}},methods:{onChange({activeIndex:f}){b(`change \u5230\u7B2C ${f+1} \u5F20`),console.log("change \u4E8B\u4EF6\u89E6\u53D1",f)},onClick(){b("click \u89E6\u53D1")},onAnimated({activeIndex:f}){b(`\u7B2C ${f+1} \u5F20 animated`),console.log("animated \u4E8B\u4EF6\u89E6\u53D1",f)}}};function C(f,k,L,U,r,v){const l=w("fx-swiper-item"),n=w("fx-swiper"),o=w("fx-group"),g=w("fx-image");return s(),a("div",null,[i(o,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[i(n,{class:"swiper-box",activeIndex:r.activeIndex,"onUpdate:activeIndex":k[0]||(k[0]=e=>r.activeIndex=e)},{default:t(()=>[(s(!0),a(u,null,d(r.swiperList,(e,c)=>(s(),p(l,{key:e},{default:t(()=>[_("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1},8,["activeIndex"])]),_:1}),i(o,{title:"\u663E\u793A\u9762\u677F\u6307\u793A\u70B9 indicator-dots=true"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":""},{default:t(()=>[(s(!0),a(u,null,d(r.imageUrls,e=>(s(),p(l,{key:e},{default:t(()=>[i(g,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),i(o,{title:"\u663E\u793A\u5207\u6362\u6309\u94AE navigation-buttons=true"},{default:t(()=>[i(n,{class:"swiper-box","navigation-buttons":""},{default:t(()=>[(s(!0),a(u,null,d(r.imageUrls,e=>(s(),p(l,{key:e},{default:t(()=>[i(g,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),i(o,{title:"\u5FAA\u73AF\u5C55\u793A initial-circular=true"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":"","initial-circular":""},{default:t(()=>[(s(!0),a(u,null,d(r.swiperList,(e,c)=>(s(),p(l,{key:e},{default:t(()=>[_("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),i(o,{title:"\u5782\u76F4\u65B9\u5411 initial-vertical=true"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":"","initial-vertical":""},{default:t(()=>[(s(!0),a(u,null,d(r.swiperList,(e,c)=>(s(),p(l,{key:e},{default:t(()=>[_("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),i(o,{title:"\u66F4\u6539\u6307\u793A\u70B9\u989C\u8272"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":"","indicator-color":"rgba(255, 255, 255, 0.5)","indicator-active-color":"#ff4d4f"},{default:t(()=>[(s(!0),a(u,null,d(r.swiperList,(e,c)=>(s(),p(l,{key:e},{default:t(()=>[_("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1})]),_:1}),i(o,{title:"\u81EA\u52A8\u8F6E\u64AD\uFF08\u5207\u6362\u65F6\u957F\u8BBE\u7F6E\u4E3A3000ms\uFF09"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":"",autoplay:r.autoplay,interval:3e3},{default:t(()=>[(s(!0),a(u,null,d(r.imageUrls,e=>(s(),p(l,{key:e},{default:t(()=>[i(g,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["autoplay"])]),_:1}),i(o,{title:"\u6ED1\u52A8\u8FC7\u7A0B\u65F6\u957F\uFF08\u8BBE\u7F6E\u4E3A2000ms\uFF09"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":"",duration:2e3},{default:t(()=>[(s(!0),a(u,null,d(r.imageUrls,e=>(s(),p(l,{key:e},{default:t(()=>[i(g,{class:"swiper-image",src:e},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1}),i(o,{title:"\u4E8B\u4EF6\u76D1\u542C\uFF08change/animated/click\uFF09"},{default:t(()=>[i(n,{class:"swiper-box","indicator-dots":"",onChange:v.onChange,onAnimated:v.onAnimated,onClick:v.onClick},{default:t(()=>[(s(!0),a(u,null,d(r.swiperList,(e,c)=>(s(),p(l,{key:e},{default:t(()=>[_("div",{class:m(["swiper-box-item",{even:c%2==1}])},x(e),3)]),_:2},1024))),128))]),_:1},8,["onChange","onAnimated","onClick"])]),_:1})])}var B=y(h,[["render",C]]);export{B as default};
