"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[698],{4698:function(t,a,i){i.r(a),i.d(a,{default:function(){return u}});var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"mvListContainer"},[i("van-nav-bar",{attrs:{title:"全部","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-tabs",{attrs:{animated:""},on:{click:t.onClick},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[i("van-tab",{attrs:{title:"内地"}},[i("div",{staticClass:"mvListBox"},t._l(t.data1,(function(t){return i("div",{key:t.id,staticClass:"mvBox"},[i("Mvstyle",{attrs:{mvId:t.id,images:t.cover,title:t.name,playCount:t.playCount}})],1)})),0)]),i("van-tab",{attrs:{title:"港台"}},[i("div",{staticClass:"mvListBox"},t._l(t.data2,(function(t){return i("div",{key:t.id,staticClass:"mvBox"},[i("Mvstyle",{attrs:{mvId:t.id,images:t.cover,title:t.name,playCount:t.playCount}})],1)})),0)]),i("van-tab",{attrs:{title:"欧美"}},[i("div",{staticClass:"mvListBox"},t._l(t.data3,(function(t){return i("div",{key:t.id,staticClass:"mvBox"},[i("Mvstyle",{attrs:{mvId:t.id,images:t.cover,title:t.name,playCount:t.playCount}})],1)})),0)]),i("van-tab",{attrs:{title:"日本"}},[i("div",{staticClass:"mvListBox"},t._l(t.data4,(function(t){return i("div",{key:t.id,staticClass:"mvBox"},[i("Mvstyle",{attrs:{mvId:t.id,images:t.cover,title:t.name,playCount:t.playCount}})],1)})),0)]),i("van-tab",{attrs:{title:"韩国"}},[i("div",{staticClass:"mvListBox"},t._l(t.data5,(function(t){return i("div",{key:t.id,staticClass:"mvBox"},[i("Mvstyle",{attrs:{mvId:t.id,images:t.cover,title:t.name,playCount:t.playCount}})],1)})),0)]),i("van-tab",{attrs:{title:"全部"}},[i("div",{staticClass:"mvListBox"},t._l(t.data6,(function(t){return i("div",{key:t.id,staticClass:"mvBox"},[i("Mvstyle",{attrs:{mvId:t.id,images:t.cover,title:t.name,playCount:t.playCount}})],1)})),0)])],1)],1)},e=[],n=i(3182),l=i(5972);const o=function(t="全部",a=0){return(0,l.Z)({method:"get",url:"/mv/all",params:{area:t,limit:30,offset:a}})};var d={name:"mvList",components:{Mvstyle:n.Z},data(){return{active:0,data1:[],data2:[],data3:[],data4:[],data5:[],data6:[]}},methods:{onClickLeft(){this.$router.back(-1)},async onClick(t){if(0===t){const t=await o("内地");this.data1=t.data.data}if(1===t){const t=await o("港台");this.data2=t.data.data}if(2===t){const t=await o("欧美");this.data3=t.data.data}if(3===t){const t=await o("日本");this.data4=t.data.data}if(4===t){const t=await o("韩国");this.data5=t.data.data}if(5===t){const t=await o("全部");this.data6=t.data.data}}},async created(){const t=await o("内地");this.data1=t.data.data}},c=d,r=i(1001),v=(0,r.Z)(c,s,e,!1,null,"07b0c713",null),u=v.exports},3182:function(t,a,i){i.d(a,{Z:function(){return c}});var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"sonListContsinar"},[i("div",{staticClass:"sonBg",on:{click:t.getMvId}},[i("div",{staticStyle:{"background-color":"blue",width:"100%",height:"100%"},attrs:{"v-if":t.images}},[i("img",{attrs:{src:t.images,alt:""}})]),i("div",{staticClass:"playNum"},[i("van-icon",{staticStyle:{"margin-right":"5px"},attrs:{name:"play-circle"}}),t._v(t._s(t._f("formatPlayCount")(t.playCount)))],1)]),i("div",{staticClass:"Songintroduce"},[t._v(t._s(t.title))])])},e=[],n={name:"sonListContsinar",props:{title:{type:String},images:{},playCount:{type:Number},mvId:{}},methods:{getMvId(){this.$router.push("/playMv?id="+this.mvId),console.log(this.mvId)}}},l=n,o=i(1001),d=(0,o.Z)(l,s,e,!1,null,"69f085e2",null),c=d.exports}}]);
//# sourceMappingURL=698.41a571e7.js.map