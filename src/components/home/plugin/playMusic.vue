<template>
  <div class="playMusicContainer">
    <div class="musicPlayStyle">
      <audio :src="musicURL" loop="loop" contrals="contrals" :autoplay="autoPlayMusic" ref="audioAbout" @pause="taggerPlay"></audio>
      <div class="musicbackbg" ref="musicbackground"><img :src="firstMusicBack" alt=""></div>
      <div class="musicTitle">{{ firstMusicTitle }} <span>- {{firstMusicAuthor}}</span></div>
      <div class="playBtn" @click="playMusic">
        <span v-if="autoPlayMusic"><van-icon name="pause-circle-o" /></span>
        <span v-else><van-icon name="play-circle-o" /></span>
      </div>
      <div class="moreBtn"><van-icon name="apps-o" /></div>
    </div>
  </div>
</template>

<script>
import { getMusicDetails } from '@/api/getMusicDetails.js'
export default {
  name: 'playMusic',
  props: {
    // 歌曲的URL地址
    musicURL: {},
    // 点击歌曲获取歌曲id
    getMusicid: {},
    // 获取第一首歌曲的图片
    firstMusicBack: {},
    firstMusicTitle: {},
    firstMusicAuthor: {}
  },
  data () {
    return {
      autoPlayMusic: false,
      // 获取请求回来的数据对象图片
      musicDetailsImg: {},
      // 获取歌曲名称
      musicName: {},
      // 歌曲作者
      musicAuthor: {
        type: String
      }
    }
  },
  methods: {
    playMusic () {
      if (this.autoPlayMusic) {
        this.autoPlayMusic = false
        this.$refs.audioAbout.pause()
      } else {
        this.autoPlayMusic = true
        this.$refs.audioAbout.play()
      }
    },
    taggerPlay () {
      this.autoPlayMusic = false
    }
  },
  watch: {
    async getMusicid (newval) {
      const res = await getMusicDetails(newval)
      // console.log(res)
      this.musicName = res.data.songs[0].al.name
      this.musicDetailsImg = res.data.songs[0].al.picUrl
      console.log(this.musicURL)
      // eslint-disable-next-line valid-typeof
      if (typeof (this.musicURL) === String) {
        this.autoPlayMusic = true
        this.$refs.audioAbout.play()
      } else {
        this.autoPlayMusic = false
      }
      this.musicAuthor = res.data.songs[0].ar[0].name
    },
    musicURL () {
      if (parseInt(this.musicURL) === String) {
        this.autoPlayMusic = true
      } else {
        this.autoPlayMusic = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .playMusicContainer{
    position: fixed;
    bottom: 0;
    // display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2.8rem;
    z-index: 1000;
    background-color: white;
    border-top: .0267rem solid #ccc;
    .musicPlayStyle{
      position: relative;
      padding: 0 .2667rem;
      display: flex;
      .musicbackbg{
        position: relative;
      width: 2.3467rem;
      height: 2.3467rem;
      background-color: #000;
      border-radius: 50%;
      overflow: hidden;
      // margin-left: 10px;
      img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
    }
    .musicTitle{
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: .2667rem;
        color: #444;
        font-size: .64rem;
        > span {
          margin-left: .1333rem;
          color: #999;
          font-size: .5867rem;
        }
        // background-color: red;
      }
      .playBtn{
        height: 2.8rem;
        width: 1.4667rem;
        // background-color: aqua;
        line-height: 2.8rem;
        text-align: center;
        font-size: 1.4667rem;
        margin-right: 1.3333rem;
        color: #555;
      }
      .moreBtn{
        height: 2.8rem;
        width: 1.4667rem;
        // background-color: aqua;
        line-height: 2.8rem;
        text-align: center;
        font-size: 1.4667rem;
        margin-right: .8rem;
        color: #555;
      }
    }
  }
</style>
