<template>
  <div class="searchMusicContainer">
    <div class="headStyle">
      <input type="text" name="" id="" v-model="musicTitle">
      <span class="CancelBtn" @click="CancelBtn">取消</span>
      <div class="submitIcon"><van-icon name="search" /></div>
      <div class="empty" @click="emptyBtn"><van-icon name="cross" /></div>
    </div>
    <div class="musicAbout">
      <span class="recommend">为你推荐</span>
      <singerDetailsVue :singerImg="firstSingerImg" :firstSingerAuthor="firstSingerAuthor"></singerDetailsVue>
    </div>
    <Single v-for="(item) in searchMusicList" :key="item.id" :musictitle="item.name" :musicAuthor="item.artists[0].name" :Muiscid="item.artists[0].id" :firshImg="item.artists[0].img1v1Url"></Single>
  </div>
</template>

<script>
// 单曲模块
import Single from '@/components/home/plugin/likeSingle.vue'
// 输入歌曲名称，获取相关歌曲列表
import { searchSongList } from '@/api/SearchSongListAPI.js'
// 歌手详情模块
import singerDetailsVue from './singerDetails.vue'
import { getSingerAbout } from '@/api/getSingerAbout.js'
export default {
  name: 'searchMusicList',
  components: {
    Single,
    singerDetailsVue
  },
  data () {
    return {
      // 接收hash地址传递过来的歌曲名称
      musicTitle: '',
      // 存储搜索歌曲列表
      searchMusicList: [],
      // 第一首歌曲的作者详情
      firstSingerAuthor: '',
      // 第一首歌曲的作者图片
      firstSingerImg: '',
      // 第一首歌曲的作者id
      firstSingerId: ''
    }
  },
  methods: {
    CancelBtn () {
      this.$router.back(-1)
    },
    emptyBtn () {
      this.musicTitle = ''
    }
  },
  async created () {
    this.musicTitle = location.href.split('?')
    this.musicTitle = this.musicTitle[1]
    this.musicTitle = this.musicTitle.split('=')
    this.musicTitle = this.musicTitle[1]
    this.musicTitle = decodeURI(this.musicTitle)
    // console.log(this.musicTitle)
    const res = await searchSongList(this.musicTitle)
    // console.log(res.data.result.songs)
    this.searchMusicList = res.data.result.songs
    this.firstSingerAuthor = res.data.result.songs[0].artists[0].name
    this.firstSingerId = res.data.result.songs[0].artists[0].id
    // console.log(parseInt(this.firstSingerId))
    const res1 = await getSingerAbout(this.firstSingerId)
    // console.log(res1.data.topicData[0].coverUrl)
    if (res1.data.topicData) {
      this.firstSingerImg = res1.data.topicData[0].coverUrl
    } else {
      this.firstSingerImg = 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
    }
  }
  // .topicData[0].coverUrl
}
</script>

<style lang="less" scoped>
  .searchMusicContainer{
    padding: 0 10px;
    background-color: #eee;
    .headStyle{
      position: relative;
      display: flex;
      padding: 10px 0 10px;
      height: 55px;
      // background-color: white;
      text-align: center;
      line-height: 40px;
      // color: white;
      margin-bottom: 10px;
      box-sizing: border-box;
      > input{
        flex: 1;
        outline: none;
        border-radius: 20px;
        border: 0;
        background-color: white;
        padding-left: 30px;
        color: #999;
      }
      .CancelBtn{
        width: 60px;
        // background-color: red;
        color: #555;
        text-align: center;
      }
      .submitIcon{
        position: absolute;
        font-size: 18px;
        color: #777;
        // background-color: red;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
      }
      .empty{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 70px;
        color: #999;
        cursor: pointer;
      }
    }
    .musicAbout{
      height: 150px;
      // background-color: red;
      // margin-bottom: 10px;
      .recommend{
        color: #777;
        font-size: 14px;
      }
    }
  }
</style>
