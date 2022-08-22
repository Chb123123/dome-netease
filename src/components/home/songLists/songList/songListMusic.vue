<template>
<!-- 通过歌单广场跳转的歌单页面 -->
  <div class="songlistMusicsContainsr">
    <van-nav-bar
  title="歌单"
  left-arrow
  fixed
  :border="false"
  @click-left="onClickLeft"
/>
    <div class="songListdetails">
      <div class="songListIntroduce">
        <div class="songListImg">
          <img :src="songListAboutImg" alt="">
        </div>
        <div class="songListTitle">
          <div class="songListTitleAbout">{{ songListabout }}</div>
          <div  class="about">简介：{{ songListIntroduction }}</div>
        </div>
      </div>
      <div class="move">
        <span style="text-align: left;"><van-icon name="like-o" /></span>
        <span style="margin: 50px;" @click="gotoComments"><van-icon name="comment-o" /></span>
        <span style="text-align: right;"><van-icon name="share-o" /></span>
      </div>
    </div>
    <div class="playAll">
      <div class="playbtn"><van-icon name="play-circle" />
      </div>
      <div class="playtitle">播放全部<span>({{ songLists.length }})</span></div>
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <Single v-for="(item, index) in songLists" :key="index" :firshImg="item.al.picUrl" :musictitle="item.name" :list1="index+1" :musicAuthor="item.ar[0].name" :introduce="item.al.name" :Muiscid="item.al.id" @MusicId="AcceptMusicId"></Single>
    </van-list>
  </van-pull-refresh>
    <PlayMusic v-if="songLists.length > 0" :getMusicid="songLists" :firstMusicBack="firstMusicImg" :firstMusicTitle="firstTitle" :firstMusicAuthor="firstAuthor"></PlayMusic>
  </div>
</template>

<script>
// import Bus from '@/EventBus/EventBus.js'
// 获取音乐的URL地址
// import { GetMusicULR } from '@/api/getMusicUrlAPI.js'
import { getMusicDetails } from '@/api/getMusicDetails.js'
import Single from '@/components/home/plugin/likeSingle.vue'
import { GetPlayListDetails } from '@/api/getPlayListDetailsAPI.js'
import PlayMusic from '@/components/home/plugin/playMusic.vue'
import { getSongList } from '@/api/getSongListAboutAPI.js'
export default {
  name: 'songListMusicContent',
  components: {
    Single,
    PlayMusic
  },
  props: {
    songListAboutId: {}
  },
  data () {
    return {
      // 获取hash地址传递过来的songListId
      songListID: 0,
      songLists: [],
      // 点击歌曲获取子组件传递过来的歌曲 id
      MusicId: {},
      // 获取音乐的URL地址 导入到播放组件
      MusicPlsyUrl: {},
      // 更新的数量
      replaceCount: 0,
      // 是否在加载
      loading: true,
      // 数据是否加载完成
      finished: false,
      // 是否下拉刷新
      refreshing: false,
      // 第一张歌曲的图片
      firstMusicImg: '',
      // 第一首歌的名称
      firstTitle: '',
      // 作者的名称
      firstAuthor: '',
      // 歌单简介图片
      songListAboutImg: '',
      // 歌单详情
      songListabout: '',
      // 歌曲简介
      songListIntroduction: '',
      // 歌曲简介
      songItemObj: {}
    }
  },
  watch: {
    async MusicId (newval) {
      // console.log(newval)
      const res = await getMusicDetails(newval)
      console.log(res)
    }
  },
  methods: {
    // 分隔hash地址
    accept () {
      // const arr = location.href.split('?')
      // this.songListID = parseInt(arr[1].split('=')[1])
      console.log(this.$route.params)
      this.songListID = this.$route.params.id
      // 歌单详情
      this.songListabout = this.$route.params.name
      this.songListAboutImg = this.$route.params.imgUrl
      // 歌单简介
      this.songListIntroduction = this.$route.params.Introduction
    },
    AcceptMusicId (val) {
      // console.log(val)
      this.MusicId = val
    },
    onClickLeft () {
      // 点击左侧按钮 返回上一级
      this.$router.back(-1)
    },
    // 点击前往评论组件
    gotoComments () {
      this.$router.push('/comments?id=' + this.songListID)
    },
    // 获取歌单详情
    async GetSongerList () {
      const res1 = await getSongList(this.songListID)
      // console.log(res1)
      this.songListAboutImg = res1.data.playlist.backgroundCoverUrl
      this.songListabout = res1.data.playlist.description
      this.songListIntroduction = res1.data.playlist.name
    },
    // 下拉刷新时触发
    async onRefresh () {
      this.replaceCount += 30
      const res1 = await GetPlayListDetails(this.songListID, this.replaceCount)
      // console.log(res1)
      this.songLists = [...res1.data.songs, ...this.songLists]
      this.refreshing = false
    },
    // 下拉加载时触发
    async onLoad () {
      this.replaceCount += 30
      // console.log(this.replaceCount)
      // console.log('22')
      const res2 = await GetPlayListDetails(this.songListID, this.replaceCount)
      // console.log(res2)
      this.songLists = [...this.songLists, ...res2.data.songs]
      // console.log(this.songLists)
      this.loading = false
    },
    // 获取音乐列表
    async GetMusicList () {
      // console.log(typeof (this.songListID))
      // console.log(this.songListID, this.replaceCount)
      const res = await GetPlayListDetails(this.songListID)
      this.songLists = res.data.songs
      // console.log(res.data.songs)
      this.firstMusicImg = this.songLists[0].al.picUrl
      this.firstTitle = this.songLists[0].name
      this.firstAuthor = this.songLists[0].ar[0].name
      // 数据请求完成时将 loading 改为 false
      this.loading = false
    }
  },
  created () {
    this.accept()
    // this.GetSongerList()
    this.GetMusicList()
  }
}
</script>

<style lang="less" scoped>
  .songlistMusicsContainsr{
    padding: 0 0 1.6rem;
    // background: -webkit-linear-gradient(left, red, blue, purple);
    /deep/.van-nav-bar--fixed{
      background-color: transparent;
      background: -webkit-linear-gradient(left, #38373D, #50454D,#3A3637);
      // border: 1px solid red;
      .van-nav-bar__title{
        color: white;
      }
    }
    /deep/.van-nav-bar__title{
      font-size: .8533rem;
    }
    /deep/.van-ellipsis{
      height: 1.6rem;
      line-height: 1.6rem;
    }
    /deep/.van-nav-bar__content{
      height: 2.1333rem;
      font-size: .8533rem;
    }
    /deep/.van-nav-bar .van-icon{
        color: white;
      }
    .songListdetails{
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      height: 9.0667rem;
      padding: 2.1333rem .8rem 0;
      background: -webkit-linear-gradient(left, #38373D, #50454D,#3A3637);
      margin-bottom: .5333rem;
      .songListIntroduce{
        flex: 1;
        display: flex;
        height: 2.6667rem;
        // background-color: red;
        .songListImg{
          // flex: 40%;
          min-width: 6.6667rem;
          height: 6.6667rem;
          // width: 40%;
          // background-color: blue;
          border-radius: .6667rem;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .songListTitle{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // background-color: green;
          padding-left: .5333rem;
          color: white;
          .songListTitleAbout{
            display:-webkit-box;
            font-size: .7467rem;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.5;
            // color: #666;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            height: 3.4667rem;
          }
          .about{
            height: .8rem;
            // background-color: red;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: white;
            font-size: .64rem;
            line-height: .8rem;
            width: 11.4667rem;
          }
        }
      }
      .move{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.1333rem;
        // background-color: green;
        > span{
          flex: 1;
          // margin: 30px;
          text-align: center;
          font-size: 1.0133rem;
          color: white;
          // background-color: blue;
        }
      }
    }
    .playAll{
        display: flex;
        height: 2.1333rem;
        line-height: 2.1333rem;
        padding: 0 .5333rem;
        .playbtn{
          width: 1.6rem;
          height: 2.1333rem;
          line-height: 2.1333rem;
          text-align: center;
          color: green;
          margin-right: .5333rem;
          font-size: .9067rem;
        }
        .playtitle{
          font-size: .9067rem;
          > span{
            color: #888;
            margin-left: .5333rem;
          }
        }
      }
  }
</style>
