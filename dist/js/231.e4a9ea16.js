"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[231],{5231:function(t,a,e){e.r(a),e.d(a,{default:function(){return _}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"playMvContainer"},[e("div",{staticClass:"playMvBox"},[t.mvUrl?e("video",{staticClass:"playStyle",attrs:{"display:block":"",src:t.mvUrl,controls:"",autoplay:""}}):t._e(),e("div",{staticClass:"backBtn",on:{click:t.backBtn}},[e("van-icon",{attrs:{name:"arrow-left"}})],1)]),e("div",{staticClass:"related"},[e("div",{staticClass:"mvState"},[e("span",[e("van-icon",{attrs:{name:"good-job-o"}})],1),e("span",[e("van-icon",{attrs:{name:"share-o"}})],1)]),e("div",{staticClass:"commentList"},[e("div",{staticClass:"commentHead"},[t._v("相关评论")]),e("div",{staticClass:"commentBox"},t._l(t.mvComments,(function(t){return e("CommentPlugin",{key:t.id,attrs:{username:t.user.nickname,releaseTime:t.timeStr,userAvatar:t.user.avatarUrl,commentContent:t.content,commentsLikeCount:t.likedCount}})})),1)])])])},n=[],o=e(5972);const i=function(t){return(0,o.Z)({method:"get",url:"/mv/url",params:{id:t}})},m=function(t){return(0,o.Z)({method:"get",url:"/simi/playlist",params:{id:t}})},r=function(t){return(0,o.Z)({method:"get",url:"/mv/detail/info",params:{mvid:t}})},l=function(t){return(0,o.Z)({method:"get",url:"/comment/mv",params:{id:t}})};var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"commentContainer"},[e("div",{staticClass:"userAvatar"},[e("img",{attrs:{src:t.userAvatar,alt:""}})]),e("div",{staticClass:"userAbout"},[e("div",{staticClass:"user"},[e("div",{staticClass:"username"},[t._v(t._s(t.username))]),e("div",{staticClass:"releaseTime"},[t._v(t._s(t.releaseTime))]),t.commentsLikeCount?e("div",{staticClass:"liekicon"},[t._v(t._s(t.commentsLikeCount)),e("van-icon",{attrs:{name:"good-job"}})],1):t._e()]),e("div",{staticClass:"comment"},[t._v(t._s(t.commentContent))])])])},u=[],v={props:{userAvatar:{},username:{},releaseTime:{},commentContent:{},commentsLikeCount:{}}},d=v,C=e(1001),h=(0,C.Z)(d,c,u,!1,null,"65644846",null),p=h.exports,k={components:{CommentPlugin:p},data(){return{mvUrl:"",mvId:0,mvplayCount:{playcount:0,likedCount:0,shareCount:0},mvComments:[]}},methods:{backBtn(){this.$router.back(-1)},async GetresemblanceMv(){const t=await m(this.mvId);console.log(t)},async getMvAbout(){const t=await r(this.mvId);t.data&&(this.mvplayCount.likedCount=t.data.likedCount,this.mvplayCount.playcount=t.data.commentCount,this.mvplayCount.shareCount=t.data.shareCount)},async getCommentMV(){const t=await l(this.mvId);console.log(t.data),this.mvComments=t.data.hotComments}},async created(){this.mvId=location.href.split("?"),this.mvId=this.mvId[1].split("=")[1]-0;const t=await i(this.mvId);this.mvUrl=t.data.data.url,this.getCommentMV()}},f=k,y=(0,C.Z)(f,s,n,!1,null,"10980cf0",null),_=y.exports}}]);
//# sourceMappingURL=231.e4a9ea16.js.map