(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[241,791],{1744:function(t,s,i){"use strict";i.d(s,{Z:function(){return l}});var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{on:{click:t.MusicId}},[i("router-link",{staticClass:"SingleContainsr",attrs:{to:""}},[t.showIcon?i("div",[t.list1?i("div",{staticClass:"ranking"},[t._v(t._s(t.list1))]):t._e()]):i("div",{staticClass:"ranking",staticStyle:{"font-size":".5333rem",color:"#79C3C6"}},[i("van-icon",{attrs:{name:"music-o"}})],1),i("div",{staticClass:"musicTitle"},[i("div",{staticClass:"Songletitle"},[t._v(t._s(t.musictitle)+" "),i("span",[t._v(t._s(t.musicWhether))])]),i("div",{staticClass:"autohrMusic"},[t._v(t._s(t.musicAuthor)),t.introduce?i("span",{staticStyle:{"margin-left":"5px"}},[t._v(" -  "+t._s(t.introduce))]):t._e()])]),i("router-link",{staticClass:"musicplay",attrs:{to:""}},[i("van-icon",{attrs:{name:"play-circle-o",title:"播放"}})],1),i("router-link",{staticClass:"musicMore",attrs:{to:""}},[i("van-icon",{attrs:{name:"weapp-nav",title:"更多"}})],1)],1)],1)},e=[],a=i(9726),r={props:{list1:{},musictitle:{},musicAuthor:{},musicAuthor2:{},introduce:{},firshImg:{},Muiscid:{},musicMP3URL:{}},name:"userLikeMusic",data:function(){return{musicWhether:"",showIcon:!0,flag:!1}},methods:{MusicId:function(t){this.$emit("MusicId",this.Muiscid),this.flag=!0}},watch:{musicMP3URL:function(){this.showIcon=!0,this.flag&&(this.flag=!1,console.log((0,a.Z)(this.musicMP3URL)),(0,a.Z)(this.musicMP3URL)===Object?this.musicWhether="暂无音源":this.musicWhether="",this.showIcon=!1)}}},o=r,c=i(1001),u=(0,c.Z)(o,n,e,!1,null,"7a0051ad",null),l=u.exports},6791:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return g}});var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"playMusicContainer"},[i("div",{staticClass:"musicPlayStyle"},[i("audio",{ref:"audioAbout",attrs:{src:t.musicURL,loop:"loop",contrals:"contrals",autoplay:t.autoPlayMusic},on:{pause:t.taggerPlay}}),i("div",{ref:"musicbackground",staticClass:"musicbackbg"},[i("img",{attrs:{src:t.firstMusicBack,alt:""}})]),i("div",{staticClass:"musicTitle"},[t._v(t._s(t.firstMusicTitle)+" "),i("span",[t._v("- "+t._s(t.firstMusicAuthor))])]),i("div",{staticClass:"playBtn",on:{click:t.playMusic}},[t.autoPlayMusic?i("span",[i("van-icon",{attrs:{name:"pause-circle-o"}})],1):i("span",[i("van-icon",{attrs:{name:"play-circle-o"}})],1)]),i("div",{staticClass:"moreBtn"},[i("van-icon",{attrs:{name:"apps-o"}})],1)])])},e=[],a=i(9726),r=i(6198),o=(i(8975),i(8309),i(6315)),c={name:"playMusic",props:{musicURL:{},getMusicid:{},firstMusicBack:{},firstMusicTitle:{},firstMusicAuthor:{}},data:function(){return{autoPlayMusic:!1,musicDetailsImg:{},musicName:{},musicAuthor:{type:String}}},methods:{playMusic:function(){this.autoPlayMusic?(this.autoPlayMusic=!1,this.$refs.audioAbout.pause()):(this.autoPlayMusic=!0,this.$refs.audioAbout.play())},taggerPlay:function(){this.autoPlayMusic=!1}},watch:{getMusicid:function(t){var s=this;return(0,r.Z)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,o.F)(t);case 2:n=i.sent,s.musicName=n.data.songs[0].al.name,s.musicDetailsImg=n.data.songs[0].al.picUrl,console.log(s.musicURL),(0,a.Z)(s.musicURL)===String?(s.autoPlayMusic=!0,s.$refs.audioAbout.play()):s.autoPlayMusic=!1,s.musicAuthor=n.data.songs[0].ar[0].name;case 8:case"end":return i.stop()}}),i)})))()},musicURL:function(){parseInt(this.musicURL)===String?this.autoPlayMusic=!0:this.autoPlayMusic=!1}}},u=c,l=i(1001),m=(0,l.Z)(u,n,e,!1,null,"288a1a54",null),g=m.exports},1241:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return v}});var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"songlistMusicsContainsr"},[i("van-nav-bar",{attrs:{title:"歌单","left-arrow":"",fixed:"",border:!1},on:{"click-left":t.onClickLeft}}),i("div",{staticClass:"songListdetails"},[i("div",{staticClass:"songListIntroduce"},[i("div",{staticClass:"songListImg"},[i("img",{attrs:{src:t.songListAboutImg,alt:""}})]),i("div",{staticClass:"songListTitle"},[i("div",{staticClass:"songListTitleAbout"},[t._v(t._s(t.songListabout))]),i("div",{staticClass:"about"},[t._v("简介："+t._s(t.songListIntroduction))])])]),i("div",{staticClass:"move"},[i("span",{staticStyle:{"text-align":"left"}},[i("van-icon",{attrs:{name:"like-o"}})],1),i("span",{staticStyle:{margin:"50px"},on:{click:t.gotoComments}},[i("van-icon",{attrs:{name:"comment-o"}})],1),i("span",{staticStyle:{"text-align":"right"}},[i("van-icon",{attrs:{name:"share-o"}})],1)])]),i("div",{staticClass:"playAll"},[i("div",{staticClass:"playbtn"},[i("van-icon",{attrs:{name:"play-circle"}})],1),i("div",{staticClass:"playtitle"},[t._v("播放全部"),i("span",[t._v("("+t._s(t.songLists.length)+")")])])]),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(s){t.refreshing=s},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.songLists,(function(s,n){return i("Single",{key:n,attrs:{firshImg:s.al.picUrl,musictitle:s.name,list1:n+1,musicAuthor:s.ar[0].name,introduce:s.al.name,Muiscid:s.al.id},on:{MusicId:t.AcceptMusicId}})})),1)],1),t.songLists.length>0?i("PlayMusic",{attrs:{getMusicid:t.songLists,firstMusicBack:t.firstMusicImg,firstMusicTitle:t.firstTitle,firstMusicAuthor:t.firstAuthor}}):t._e()],1)},e=[],a=i(4479),r=i(6198),o=(i(8309),i(2526),i(1817),i(2222),i(8975),i(6315)),c=i(1744),u=i(5972),l=function(t){return(0,u.Z)({method:"get",url:"/playlist/track/all",params:{id:t,limit:50,offset:0}})},m=i(6791),g=function(t){return(0,u.Z)({method:"get",url:"/playlist/detail",params:{id:t}})},f={name:"songListMusicContent",components:{Single:c.Z,PlayMusic:m["default"]},props:{songListAboutId:{}},data:function(){return{songListID:0,songLists:[],MusicId:{},MusicPlsyUrl:{},replaceCount:0,loading:!0,finished:!1,refreshing:!1,firstMusicImg:"",firstTitle:"",firstAuthor:"",songListAboutImg:"",songListabout:"",songListIntroduction:"",songItemObj:{}}},watch:{MusicId:function(t){return(0,r.Z)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,o.F)(t);case 2:i=s.sent,console.log(i);case 4:case"end":return s.stop()}}),s)})))()}},methods:{accept:function(){console.log(this.$route.params),this.songListID=this.$route.params.id,this.songListabout=this.$route.params.name,this.songListAboutImg=this.$route.params.imgUrl,this.songListIntroduction=this.$route.params.Introduction},AcceptMusicId:function(t){this.MusicId=t},onClickLeft:function(){this.$router.back(-1)},gotoComments:function(){this.$router.push("/comments?id="+this.songListID)},GetSongerList:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,g(t.songListID);case 2:i=s.sent,t.songListAboutImg=i.data.playlist.backgroundCoverUrl,t.songListabout=i.data.playlist.description,t.songListIntroduction=i.data.playlist.name;case 6:case"end":return s.stop()}}),s)})))()},onRefresh:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.replaceCount+=30,s.next=3,l(t.songListID,t.replaceCount);case 3:i=s.sent,t.songLists=[].concat((0,a.Z)(i.data.songs),(0,a.Z)(t.songLists)),t.refreshing=!1;case 6:case"end":return s.stop()}}),s)})))()},onLoad:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.replaceCount+=30,s.next=3,l(t.songListID,t.replaceCount);case 3:i=s.sent,t.songLists=[].concat((0,a.Z)(t.songLists),(0,a.Z)(i.data.songs)),t.loading=!1;case 6:case"end":return s.stop()}}),s)})))()},GetMusicList:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,l(t.songListID);case 2:i=s.sent,t.songLists=i.data.songs,t.firstMusicImg=t.songLists[0].al.picUrl,t.firstTitle=t.songLists[0].name,t.firstAuthor=t.songLists[0].ar[0].name,t.loading=!1;case 8:case"end":return s.stop()}}),s)})))()}},created:function(){this.accept(),this.GetMusicList()}},d=f,h=i(1001),p=(0,h.Z)(d,n,e,!1,null,"d51950a8",null),v=p.exports},1038:function(t,s,i){var n=i(2109),e=i(8457),a=i(7072),r=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:e})},6315:function(t,s,i){"use strict";i.d(s,{F:function(){return e}});var n=i(5972),e=function(t){return(0,n.Z)({method:"get",url:"/song/detail",params:{ids:t}})}},4479:function(t,s,i){"use strict";function n(t,s){(null==s||s>t.length)&&(s=t.length);for(var i=0,n=new Array(s);i<s;i++)n[i]=t[i];return n}function e(t){if(Array.isArray(t))return n(t)}i.d(s,{Z:function(){return c}});i(2526),i(1817),i(1539),i(2165),i(8783),i(3948),i(1038);function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}i(7042),i(8309),i(4916),i(7601);function r(t,s){if(t){if("string"===typeof t)return n(t,s);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,s):void 0}}i(1703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return e(t)||a(t)||r(t)||o()}}}]);
//# sourceMappingURL=241-legacy.bc90b1a9.js.map