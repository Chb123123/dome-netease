"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[515],{4515:function(s,t,i){i.r(t),i.d(t,{default:function(){return p}});var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"playMusicContainer"},[i("div",{staticClass:"musicPlayStyle"},[i("audio",{ref:"audioAbout",attrs:{src:s.musicURL,loop:"loop",contrals:"contrals",autoplay:s.autoPlayMusic},on:{pause:s.taggerPlay}}),i("div",{ref:"musicbackground",staticClass:"musicbackbg",on:{click:s.setMusicLyric}},[i("img",{attrs:{src:s.firstMusicBack,alt:""}})]),i("div",{staticClass:"musicTitle"},[s._v(s._s(s.firstMusicTitle)+" "),i("span",[s._v("- "+s._s(s.firstMusicAuthor))])]),i("div",{staticClass:"playBtn",on:{click:s.playMusic}},[s.autoPlayMusic?i("span",[i("van-icon",{attrs:{name:"pause-circle-o"}})],1):i("span",[i("van-icon",{attrs:{name:"play-circle-o"}})],1)]),i("div",{staticClass:"moreBtn"},[i("van-icon",{attrs:{name:"apps-o"}})],1)])])},u=[],c=i(9726),e=i(6198),n=(i(8975),i(8309),i(6315)),r={name:"playMusic",props:{musicURL:{},getMusicid:{},firstMusicBack:{},firstMusicTitle:{},firstMusicAuthor:{}},data:function(){return{autoPlayMusic:!1,musicDetailsImg:{},musicName:{},musicAuthor:{type:String}}},methods:{setMusicLyric:function(){"string"===typeof this.musicURL&&""!==this.musicURL?this.$router.push({name:"musicLyric",params:{musicURL:this.musicURL,id:this.getMusicid}}):console.log("音乐地址不可用")},playMusic:function(){this.autoPlayMusic?(this.autoPlayMusic=!1,this.$refs.audioAbout.pause()):(this.autoPlayMusic=!0,this.$refs.audioAbout.play())},taggerPlay:function(){this.autoPlayMusic=!1}},watch:{getMusicid:function(s){var t=this;return(0,e.Z)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,n.F)(s);case 2:a=i.sent,t.musicName=a.data.songs[0].al.name,t.musicDetailsImg=a.data.songs[0].al.picUrl,console.log(t.musicURL),(0,c.Z)(t.musicURL)===String?(t.autoPlayMusic=!0,t.$refs.audioAbout.play()):t.autoPlayMusic=!1,t.musicAuthor=a.data.songs[0].ar[0].name;case 8:case"end":return i.stop()}}),i)})))()},musicURL:function(){parseInt(this.musicURL)===String?this.autoPlayMusic=!0:this.autoPlayMusic=!1}}},o=r,l=i(1001),m=(0,l.Z)(o,a,u,!1,null,"77326118",null),p=m.exports},6315:function(s,t,i){i.d(t,{F:function(){return u},y:function(){return c}});var a=i(5972),u=function(s){return(0,a.Z)({method:"get",url:"/song/detail",params:{ids:s}})},c=function(s){return(0,a.Z)({method:"get",url:"/lyric",params:{id:s}})}}}]);
//# sourceMappingURL=515-legacy.36e75d71.js.map