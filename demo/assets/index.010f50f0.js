import{_ as S}from"./index.7a60f2fa.js";import{r as a,o as l,c as h,a as r,w as n,f as p,B as c,I as d,F as g,g as v,d as b}from"./vendor.d6b2829d.js";const k={name:"ExpStopwatch",data(){return{paused:!0,laps:[]}},methods:{setLaps(s){this.laps=s.reverse().map(t=>`${t.fullHours>0?t.thousandsFullHours+":":""}${t.minutes}:${t.seconds}.${t.milliseconds}`)},resetOrLap(){this.paused?(this.$refs.stopWatch.reset(),this.laps=[]):this.setLaps(this.$refs.stopWatch.lap())},startOrStop(){this.paused?this.$refs.stopWatch.start():this.$refs.stopWatch.stop()},onStop(s){this.paused=!0,console.log(s),this.setLaps(s.laps)},onStart(s){this.paused=!1,console.log(s)},onReset(s){this.paused=!0,console.log(s)}}},w={class:"stopwatch-box"},y={class:"stopwatch-box-header"},C={class:"stopwatch-box-body"};function L(s,t,B,W,e,o){const i=a("fx-stopwatch"),_=a("fx-button"),f=a("fx-cell"),x=a("fx-group");return l(),h("div",null,[r(x,{title:"\u57FA\u7840\u7528\u6CD5"},{default:n(()=>[p("div",w,[p("div",y,[r(i,{onStop:o.onStop,onStart:o.onStart,onReset:o.onReset,ref:"stopWatch"},null,8,["onStop","onStart","onReset"])]),p("div",C,[r(_,{onClick:o.resetOrLap},{default:n(()=>[c(d(e.paused?"\u91CD\u7F6E":"\u8BA1\u6B21"),1)]),_:1},8,["onClick"]),r(_,{onClick:o.startOrStop,type:e.paused?"success":"danger"},{default:n(()=>[c(d(e.paused?"\u542F\u52A8":"\u505C\u6B62"),1)]),_:1},8,["onClick","type"])])]),(l(!0),h(g,null,v(e.laps,(u,m)=>(l(),b(f,{label:"\u8BA1\u6B21 "+(e.laps.length-m),key:u},{default:n(()=>[c(d(u),1)]),_:2},1032,["label"]))),128))]),_:1})])}var F=S(k,[["render",L]]);export{F as default};
