"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[272],{3182:function(t,s,a){a.d(s,{Z:function(){return l}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sonListContsinar"},[a("div",{staticClass:"sonBg",on:{click:t.getMvId}},[a("div",{staticStyle:{"background-color":"blue",width:"100%",height:"100%"},attrs:{"v-if":t.images}},[a("img",{attrs:{src:t.images,alt:""}})]),a("div",{staticClass:"playNum"},[a("van-icon",{staticStyle:{"margin-right":"5px"},attrs:{name:"play-circle"}}),t._v(t._s(t._f("formatPlayCount")(t.playCount)))],1)]),a("div",{staticClass:"Songintroduce"},[t._v(t._s(t.title))])])},i=[],n={name:"sonListContsinar",props:{title:{type:String},images:{},playCount:{type:Number},mvId:{}},methods:{getMvId(){this.$router.push("/playMv?id="+this.mvId),console.log(this.mvId)}}},r=n,o=a(1001),c=(0,o.Z)(r,e,i,!1,null,"69f085e2",null),l=c.exports},6049:function(t,s,a){a.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"song",on:{click:t.getSongID}},[a("div",{staticClass:"songCover"},[a("img",{attrs:{src:t.overURL,alt:""}})]),a("span",{staticClass:"songTitle"},[t._v(t._s(t.songTitle))]),a("div",{staticClass:"play"},[a("van-icon",{attrs:{name:"play-circle-o"}}),t._v(" "+t._s(t._f("formatPlayCount")(t.playNumber))+" ")],1)])},i=[],n=a(8935),r=new n.Z,o={name:"songMonomer",props:{overURL:{},songTitle:{},playNumber:{},songID:{},songItem:{}},data(){return{songItemObj:{}}},methods:{getSongID(){console.log(this.songItem),this.$router.push({name:"songlistmusic",params:{id:this.songID,state:this.songItem,name:this.songTitle,imgUrl:this.overURL,Introduction:this.songItem.name}}),r.$emit("GetsongID",this.songID)}}},c=o,l=a(1001),m=(0,l.Z)(c,e,i,!1,null,"7e2791fd",null),u=m.exports},4871:function(t,s,a){a.d(s,{Z:function(){return l}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tabbercontainer"},[a("van-tabbar",{attrs:{route:""}},[a("van-tabbar-item",{attrs:{icon:"home-o",to:"/home"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"like-o",to:"/like"}},[t._v("喜欢")]),a("van-tabbar-item",{attrs:{icon:"search",to:"/searchmusic"}},[t._v("搜索")]),a("van-tabbar-item",{attrs:{icon:"friends-o",to:"/user"}},[t._v("我的")])],1)],1)},i=[],n={name:"netTabbar"},r=n,o=a(1001),c=(0,o.Z)(r,e,i,!1,null,"6cf0f7c5",null),l=c.exports},8272:function(t,s,a){a.r(s),a.d(s,{default:function(){return zt}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"appContainer"},[a("Head"),a("Focus"),a("FormNav"),a("ComMuisc",{staticStyle:{"margin-bottom":".5333rem"}}),a("NewSong"),a("HotMV"),a("div",{staticClass:"radio"},[a("div",{staticClass:"targetCom"},[t.flag?a("div",{staticClass:"radioBtn",staticStyle:{"font-weight":"600"},on:{click:t.showRadio}},[t._v("推荐电台")]):a("div",{staticClass:"radioBtn",on:{click:t.showRadio}},[t._v("推荐电台")]),0==t.flag?a("div",{staticClass:"recordBtn",staticStyle:{"font-weight":"600"},on:{click:t.showRecord}},[t._v("推荐节目")]):a("div",{staticClass:"recordBtn",on:{click:t.showRecord}},[t._v("推荐节目")])]),a("keep-alive",{attrs:{include:"recommendRadio, componentsRecord"}},[a(t.targetComponent,{tag:"component"})],1)],1),a("Tabbar")],1)},i=[],n=a(4871),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"head"},[a("div",{staticClass:"sbumit"},[a("router-link",{staticClass:"sideNew",attrs:{to:"/searchmusic"}},[a("van-icon",{attrs:{name:"apps-o"}})],1),a("router-link",{staticClass:"submitbox",attrs:{to:"/searchmusic"}},[a("van-icon",{staticStyle:{"margin-right":".2667rem"},attrs:{name:"search"}}),t._v("金莎 ")],1),a("router-link",{staticClass:"sideNew",attrs:{to:""}},[a("van-icon",{attrs:{name:"live"}})],1)],1)])},o=[],c={name:"nteHead"},l=c,m=a(1001),u=(0,m.Z)(l,r,o,!1,null,"44c69bce",null),d=u.exports,v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swipeContainer",on:{click:t.showErr}},[e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[e("van-swipe-item",[e("img",{attrs:{src:a(182),alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:a(5087),alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:a(6797),alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:a(3187),alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:a(2321),alt:""}})]),e("van-swipe-item",[e("img",{attrs:{src:a(8991),alt:""}})])],1)],1)},p=[],g=a(8256),h={name:"focusMap",data(){return{}},methods:{showErr(){g.Z.fail("暂无功能")}}},f=h,C=(0,m.Z)(f,v,p,!1,null,"ad928194",null),_=C.exports,y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"formContainer"},[a("router-link",{staticClass:"navStyle",attrs:{to:"/home"}},[a("span",[a("van-icon",{attrs:{name:"audio"}})],1),t._v("每日推荐")]),a("router-link",{staticClass:"navStyle",attrs:{to:"/songList"}},[a("span",[a("van-icon",{attrs:{name:"comment"}})],1),t._v("歌单")]),a("router-link",{staticClass:"navStyle",attrs:{to:""}},[a("span",[a("van-icon",{attrs:{name:"todo-list"}})],1),t._v("排行榜")]),a("router-link",{staticClass:"navStyle",attrs:{to:"/singerList"}},[a("span",[a("van-icon",{attrs:{name:"manager"}})],1),t._v("歌手分类")])],1)},w=[],b={name:"formNav"},L=b,S=(0,m.Z)(L,y,w,!1,null,"f31f3ff2",null),k=S.exports,Z=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"recommendcontainer"},[a("div",{staticClass:"head"},[t._v("推荐歌单"),a("router-link",{staticClass:"more",attrs:{to:"songList"}},[t._v("更多"),a("van-icon",{attrs:{name:"arrow"}})],1)],1),a("div",{staticClass:"recommendbody"},[a("div",{staticClass:"musicbox"},[a("div",{staticClass:"songMap"},[a("SongMap")],1),t._l(t.usersongLiet,(function(t){return a("SongList",{key:t.id,attrs:{overURL:t.picUrl,songTitle:t.name,playNumber:t.playCount,songID:t.id,songItem:t}})}))],2)])])},I=[],x=a(6049),M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"songList"},[a("van-swipe",{attrs:{vertical:"",autoplay:"3000","show-indicators":!1}},t._l(t.songLiet,(function(t){return a("van-swipe-item",{key:t.id},[a("SongList",{attrs:{mvId:t.id,images:t.picUrl,title:t.name,playCount:t.playCount}})],1)})),1)],1)},E=[],N=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sonListContsinar"},[a("div",{staticClass:"sonBg",on:{click:t.getMvId}},[a("div",{staticStyle:{width:"100%"},attrs:{"v-if":t.images}},[a("img",{attrs:{src:t.images,alt:""}})]),a("div",{staticClass:"playNum"},[a("van-icon",{staticStyle:{"margin-right":".2667rem"},attrs:{name:"play-circle"}}),t._v(t._s(t._f("formatPlayCount")(t.playCount)))],1)]),a("div",{staticClass:"Songintroduce"},[t._v(t._s(t.title))])])},$=[],R={name:"sonListContsinar",props:{title:{type:String},images:{},playCount:{type:Number},mvId:{}},methods:{getMvId(){console.log(this.mvId),this.$router.push({name:"songlistmusic",params:{id:this.mvId,name:this.title,imgUrl:this.images,Introduction:this.title}})}}},T=R,U=(0,m.Z)(T,N,$,!1,null,"eba1d79a",null),j=U.exports,B=a(5972);const D=function(t){return(0,B.Z)({method:"get",url:"/personalized",params:{limit:t}})};var H={name:"songMapList",components:{SongList:j},data(){return{songLiet:[]}},methods:{async getSong(){const t=await D(10);this.songLiet=t.data.result}},created(){this.getSong()}},P=H,G=(0,m.Z)(P,M,E,!1,null,"f5af7156",null),F=G.exports,z={name:"recommendMusic",components:{SongList:x.Z,SongMap:F},data(){return{usersongLiet:[]}},methods:{async GetSong(){const t=await D(10);this.usersongLiet=t.data.result}},created(){this.GetSong()}},V=z,O=(0,m.Z)(V,Z,I,!1,null,"7afb3205",null),q=O.exports,A=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hostMusicContainer"},[a("div",{staticClass:"hotHead"},[t._v("最新歌曲(暂无功能)"),a("router-link",{staticClass:"playMuisc",attrs:{to:""}},[a("van-icon",{attrs:{name:"play"}}),t._v("播放")],1)],1),a("div",{staticClass:"hotBody"},[a("MusicList",{attrs:{NewSong:t.list}})],1)])},J=[],K=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"musicContainer"},[a("van-swipe",{attrs:{loop:!1,width:"650px","show-indicators":!1}},t._l(t.NewSong,(function(s,e){return a("van-swipe-item",{key:e},t._l(s,(function(s,e){return a("router-link",{key:e,staticClass:"singleMusic",attrs:{to:""}},[a("span",[a("img",{attrs:{src:s.picUrl,alt:""}}),a("i",[a("van-icon",{attrs:{name:"play"}})],1)]),a("div",{staticClass:"musicTitle"},[a("div",{staticClass:"title"},[t._v(t._s(s.name)),a("span",{staticClass:"author"},[t._v(t._s(s.song.album.company))])]),a("span",{staticClass:"authorName"},[t._v(t._s(s.song.artists[0].name))])])])})),1)})),1)],1)},Q=[],W={name:"musicSlinge",props:{NewSong:{},title:{},author:{},musicImg:{}}},X=W,Y=(0,m.Z)(X,K,Q,!1,null,"04fde060",null),tt=Y.exports;const st=function(t){return(0,B.Z)({method:"get",url:"/personalized/newsong",params:{limit:t}})};var at={name:"hotMuiscList",props:{NewMusicList:{}},components:{MusicList:tt},data(){return{newMusic:[],songLiet:[],list:[],music:[]}},methods:{async getSong(){const t=await st(15);this.songLiet=t.data.result,this.songLiet.forEach(((t,s)=>{this.music.length<2?this.music.push(t):(this.music.push(t),this.list.push(this.music),this.music=[])})),this.list.push(this.music),this.music=[]}},created(){this.getSong()}},et=at,it=(0,m.Z)(et,A,J,!1,null,"44bc15ef",null),nt=it.exports,rt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"recommendcontainer"},[a("div",{staticClass:"head"},[t._v("最新MV"),a("router-link",{staticClass:"more",attrs:{to:"mvContainer"}},[t._v("更多"),a("van-icon",{attrs:{name:"arrow"}})],1)],1),a("div",{staticClass:"recommendbody"},[a("div",{staticClass:"musicbox"},t._l(t.usersongLiet,(function(t){return a("SongList",{key:t.id,attrs:{images:t.cover,title:t.name,playCount:t.playCount,mvId:t.id}})})),1)])])},ot=[],ct=a(3182);const lt=function(){return(0,B.Z)({method:"get",url:"/mv/first",params:{limit:10}})};var mt={name:"recommendMusic",components:{SongList:ct.Z},data(){return{usersongLiet:[]}},methods:{async GetSong(){const t=await lt();this.usersongLiet=t.data.data}},created(){this.GetSong()}},ut=mt,dt=(0,m.Z)(ut,rt,ot,!1,null,"1fdcb675",null),vt=dt.exports,pt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"radioContainer"},[a("Programme",{attrs:{radioList:t.radioList}})],1)},gt=[],ht=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"musicContainer",on:{click:t.showErr}},[a("van-swipe",{attrs:{loop:!1,width:650,"show-indicators":!1}},t._l(t.radioList,(function(s,e){return a("van-swipe-item",{key:e},t._l(s,(function(s){return a("router-link",{key:s.id,staticClass:"singleMusic",attrs:{to:""}},[a("span",[a("img",{attrs:{src:s.picUrl,alt:""}}),a("i",[a("van-icon",{attrs:{name:"play"}})],1)]),a("div",{staticClass:"musicTitle"},[a("div",{staticClass:"title"},[t._v(t._s(s.name)+" ")]),a("span",{staticClass:"authorName"},[t._v(t._s(s.copywriter))])])])})),1)})),1)],1)},ft=[],Ct={name:"musicSlinge",props:{NewSong:{},title:{},author:{},musicImg:{},radioList:{}},methods:{showErr(){g.Z.fail("暂无功能")}}},_t=Ct,yt=(0,m.Z)(_t,ht,ft,!1,null,"0419fab3",null),wt=yt.exports;const bt=function(){return(0,B.Z)({method:"get",url:"/personalized/djprogram"})};var Lt={name:"recommendRadio",components:{Programme:wt},data(){return{radioList:[]}},async created(){const t=await bt();let s=[];t.data.result.forEach(((t,a)=>{s.length<2?s.push(t):(s.push(t),this.radioList.push(s),s=[])}))}},St=Lt,kt=(0,m.Z)(St,pt,gt,!1,null,"e231e286",null),Zt=kt.exports,It=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"recordComponent"},[a("Programme",{attrs:{recordList:t.recordList}})],1)},xt=[],Mt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"musicContainer",on:{click:t.showErr}},[a("van-swipe",{attrs:{loop:!1,width:650,"show-indicators":!1}},t._l(t.recordList,(function(s,e){return a("van-swipe-item",{key:e},t._l(s,(function(s){return a("router-link",{key:s.id,staticClass:"singleMusic",attrs:{to:""}},[a("span",[a("img",{attrs:{src:s.blurCoverUrl,alt:""}}),a("i",[a("van-icon",{attrs:{name:"play"}})],1)]),a("div",{staticClass:"musicTitle"},[a("div",{staticClass:"title"},[t._v(t._s(s.name)+" ")]),a("span",{staticClass:"authorName"},[t._v(t._s(s.radio.name))])])])})),1)})),1)],1)},Et=[],Nt={name:"musicSlinge",props:{NewSong:{},title:{},author:{},musicImg:{},recordList:{}},methods:{showErr(){g.Z.fail("暂无功能")}}},$t=Nt,Rt=(0,m.Z)($t,Mt,Et,!1,null,"3fb367bd",null),Tt=Rt.exports;const Ut=function(){return(0,B.Z)({method:"get",url:"/program/recommend"})};var jt={name:"componentsRecord",components:{Programme:Tt},data(){return{recordList:[]}},async created(){const t=await Ut();let s=[];t.data.programs.forEach(((t,a)=>{s.length<2?s.push(t):(s.push(t),this.recordList.push(s),s=[])}))}},Bt=jt,Dt=(0,m.Z)(Bt,It,xt,!1,null,"2bad602f",null),Ht=Dt.exports,Pt={name:"musicHome",components:{Head:d,Focus:_,FormNav:k,ComMuisc:q,NewSong:nt,HotMV:vt,Tabbar:n.Z,Radio:Zt,Record:Ht},data(){return{targetComponent:"Radio",flag:!0}},methods:{showRadio(){this.targetComponent="Radio",this.flag=!0},showRecord(){this.targetComponent="Record",this.flag=!1}}},Gt=Pt,Ft=(0,m.Z)(Gt,e,i,!1,null,"2d4ef516",null),zt=Ft.exports},182:function(t,s,a){t.exports=a.p+"img/1.1d57b2e1.jpg"},5087:function(t,s,a){t.exports=a.p+"img/2.5024eaee.jpg"},6797:function(t,s,a){t.exports=a.p+"img/3.d96cc843.jpg"},3187:function(t,s,a){t.exports=a.p+"img/4.95bd2c5d.jpg"},2321:function(t,s,a){t.exports=a.p+"img/5.7bbd5084.jpg"},8991:function(t,s,a){t.exports=a.p+"img/6.80143d18.jpg"}}]);
//# sourceMappingURL=272.3a48e24d.js.map