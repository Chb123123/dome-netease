"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[791],{6791:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playMusicContainer"},[a("div",{staticClass:"musicPlayStyle"},[a("audio",{ref:"audioAbout",attrs:{src:t.musicURL,loop:"loop",contrals:"contrals",autoplay:t.autoPlayMusic},on:{pause:t.taggerPlay}}),a("div",{ref:"musicbackground",staticClass:"musicbackbg"},[a("img",{attrs:{src:t.firstMusicBack,alt:""}})]),a("div",{staticClass:"musicTitle"},[t._v(t._s(t.firstMusicTitle)+" "),a("span",[t._v("- "+t._s(t.firstMusicAuthor))])]),a("div",{staticClass:"playBtn",on:{click:t.playMusic}},[t.autoPlayMusic?a("span",[a("van-icon",{attrs:{name:"pause-circle-o"}})],1):a("span",[a("van-icon",{attrs:{name:"play-circle-o"}})],1)]),a("div",{staticClass:"moreBtn"},[a("van-icon",{attrs:{name:"apps-o"}})],1)])])},u=[],c=a(9726),e=a(6198),n=(a(8975),a(8309),a(6315)),r={name:"playMusic",props:{musicURL:{},getMusicid:{},firstMusicBack:{},firstMusicTitle:{},firstMusicAuthor:{}},data:function(){return{autoPlayMusic:!1,musicDetailsImg:{},musicName:{},musicAuthor:{type:String}}},methods:{playMusic:function(){this.autoPlayMusic?(this.autoPlayMusic=!1,this.$refs.audioAbout.pause()):(this.autoPlayMusic=!0,this.$refs.audioAbout.play())},taggerPlay:function(){this.autoPlayMusic=!1}},watch:{getMusicid:function(t){var s=this;return(0,e.Z)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,n.F)(t);case 2:i=a.sent,s.musicName=i.data.songs[0].al.name,s.musicDetailsImg=i.data.songs[0].al.picUrl,console.log(s.musicURL),(0,c.Z)(s.musicURL)===String?(s.autoPlayMusic=!0,s.$refs.audioAbout.play()):s.autoPlayMusic=!1,s.musicAuthor=i.data.songs[0].ar[0].name;case 8:case"end":return a.stop()}}),a)})))()},musicURL:function(){parseInt(this.musicURL)===String?this.autoPlayMusic=!0:this.autoPlayMusic=!1}}},o=r,l=a(1001),m=(0,l.Z)(o,i,u,!1,null,"288a1a54",null),p=m.exports},6315:function(t,s,a){a.d(s,{F:function(){return u}});var i=a(5972),u=function(t){return(0,i.Z)({method:"get",url:"/song/detail",params:{ids:t}})}}}]);
//# sourceMappingURL=791-legacy.b8d0e3e9.js.map