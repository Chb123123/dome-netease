"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[800],{4871:function(e,t,n){n.d(t,{Z:function(){return c}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabbercontainer"},[n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{icon:"home-o",to:"/home"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{icon:"like-o",to:"/like"}},[e._v("喜欢")]),n("van-tabbar-item",{attrs:{icon:"search",to:"/searchmusic"}},[e._v("搜索")]),n("van-tabbar-item",{attrs:{icon:"friends-o",to:"/user"}},[e._v("我的")])],1)],1)},a=[],o={name:"netTabbar"},i=o,s=n(1001),u=(0,s.Z)(i,r,a,!1,null,"6cf0f7c5",null),c=u.exports},3800:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"userContainer"},[n("button",{on:{click:e.gotoLogin}},[e._v("点击登入")]),n("Tabbar")],1)},a=[],o=n(6198),i=(n(8975),n(4916),n(5306),n(5972)),s=function(){return(0,i.Z)({method:"get",url:"/user/detail",params:{uid:32953014}})},u=n(4871),c={name:"userState",components:{Tabbar:u.Z},methods:{gotoLogin:function(){this.$router.replace("/login")}},created:function(){return(0,o.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,console.log(t.data.userPoint.updateTime),n=t.data.userPoint.updateTime,console.log(n/1e3%60);case 6:case"end":return e.stop()}}),e)})))()}},l=c,m=n(1001),b=(0,m.Z)(l,r,a,!1,null,"21fc63f6",null),f=b.exports}}]);
//# sourceMappingURL=800-legacy.35557441.js.map