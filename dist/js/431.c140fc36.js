"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[431],{4431:function(t,i,s){s.r(i),s.d(i,{default:function(){return a}});var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"playMusicContainer"},[s("div",{staticClass:"musicTitle"},[s("div",{staticClass:"backIcon",on:{click:t.backRouter}},[t._v("返回")]),s("span",[t._v("虞姬叹")])]),s("div",{ref:"content",staticClass:"content"},[s("div",{ref:"lyricContent",staticClass:"lyricBox",on:{click:t.playMusic}},t._l(t.lyricList,(function(i,e){return s("div",{key:e,class:t.playMusicIndex===e?"lyric playBackLyric":"lyric"},[t._v(" "+t._s(i.lyric)+" ")])})),0)]),s("div",{staticClass:"musicContent"},[s("audio",{ref:"audioAbout",attrs:{src:t.musicUrl,loop:"loop",controls:""},on:{timeupdate:t.musicPlay}})])])},c=[],l=s(6315),r={name:"musicLyric",data(){return{musicId:1479526505,lyric:"",autoPlayMusic:!1,musicUrl:"https://m701.music.126.net/20240628114434/b17138dd6e45ee9d0d597283e123145d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28557930835/49ec/74b8/4483/2a23bfdfa57dc47213162fcd1f317154.mp3",audioDom:null,lyricList:[],lyricItemHeight:0,playMusicIndex:0,musicHtml:null}},methods:{async setMusicLyric(){const{data:t}=await(0,l.y)(this.musicId);console.log(t),200===t.code&&(this.lyric=t.lrc.lyric,this.setLyric(),this.$nextTick((()=>{this.musicHtml=this.$refs.lyricContent})))},setLyric(){const t=this.lyric.split("\n"),i=[];for(let s=0;s<t.length;s++)if(t[s]&&""!==t[s]){const e=t[s].split("]")[0],c={lyric:t[s].split("]")[1],time:this.setTimeStr(e.replace("[",""))};i.push(c)}this.lyricList=i},musicPlay(){this.musicHtml.style.transform=`translateY(-${this.offetDistance()}px)`},setTimeStr(t){const i=t.split(":"),s=i[0],e=+i[1]+60*+s;return e},playMusic(){console.log(this.offetDistance()),this.autoPlayMusic?(console.log("暂停"),this.autoPlayMusic=!1,this.$refs.audioAbout.pause()):(console.log("开始"),this.autoPlayMusic=!0,this.$refs.audioAbout.play())},getMusicIndex(){if(this.audioDom){const t=this.audioDom.currentTime;for(let i=0;i<this.lyricList.length;i++)if(t<this.lyricList[i].time)return i-1}},backRouter(){this.$router.replace("/like")},offetDistance(){this.playMusicIndex=this.getMusicIndex();const t=this.$refs.content.clientHeight/2,i=document.querySelector(".lyric");this.lyricItemHeight=i.clientHeight;const s=this.lyricItemHeight*this.playMusicIndex+this.lyricItemHeight/2-t;return s<0?0:s-(this.musicHtml.clientHeight-2*t)>0?this.musicHtml.clientHeight-2*t:s}},created(){console.log(this.$route.params),this.musicUrl=this.$route.params.musicURL,this.musicId=this.$route.params.id,this.setMusicLyric()},mounted(){this.$nextTick((()=>{this.audioDom=this.$refs.audioAbout}))}},n=r,o=s(1001),u=(0,o.Z)(n,e,c,!1,null,"d0c9ea70",null),a=u.exports},6315:function(t,i,s){s.d(i,{F:function(){return c},y:function(){return l}});var e=s(5972);const c=function(t){return(0,e.Z)({method:"get",url:"/song/detail",params:{ids:t}})},l=function(t){return(0,e.Z)({method:"get",url:"/lyric",params:{id:t}})}}}]);
//# sourceMappingURL=431.c140fc36.js.map