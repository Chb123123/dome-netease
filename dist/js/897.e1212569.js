"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[897],{1897:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"commentContainer"},[e("van-nav-bar",{attrs:{title:"评论",fixed:"","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"commentList"},[e("div",{staticClass:"commentHead"},[t._v("评论区")]),e("div",{staticClass:"newComment"},[t._v("精彩评论")]),t._l(t.commentList,(function(s){return e("div",{key:s.commentId,staticClass:"commentStyle"},[e("div",{staticClass:"userAbout"},[e("div",{staticClass:"userLeft"},[e("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),e("div",{staticClass:"userRight"},[e("span",{staticClass:"nickname"},[t._v(t._s(s.user.nickname))]),e("span",{staticClass:"releaseTime"},[t._v(t._s(t._f("timer")(s.time)))]),e("div",{staticClass:"like"},[e("van-icon",{attrs:{name:"good-job-o"}})],1),e("div",{staticClass:"comment"},[t._v(t._s(s.content))]),e("div",{staticClass:"Reply"},[t._v("共2条回复"),e("van-icon",{staticStyle:{"margin-left":"5px"},attrs:{name:"arrow"}})],1)])])])}))],2)],1)},a=[],n=e(5972);const r=function(t){return(0,n.Z)({method:"get",url:"/comment/playlist",params:{id:t}})};var c={methods:{onClickLeft(){this.$router.back(-1)}},data(){return{singerid:"",commentList:[]}},filters:{timer(t){return new Date(parseInt(t)).toLocaleString().substr(0,17)}},async created(){console.log(+new Date),this.singerid=location.hash.split("?"),this.singerid=this.singerid[1].split("="),this.singerid=this.singerid[1]-0;const t=await r(this.singerid);console.log(t.data.comments),this.commentList=t.data.comments}},o=c,l=e(1001),m=(0,l.Z)(o,i,a,!1,null,"3e0905b0",null),d=m.exports}}]);
//# sourceMappingURL=897.e1212569.js.map