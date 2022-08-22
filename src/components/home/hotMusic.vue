<template>
  <div class="hostMusicContainer">
    <div class="hotHead">最新歌曲(暂无功能)<router-link to="" class="playMuisc"><van-icon name="play" />播放</router-link></div>
    <div class="hotBody">
        <MusicList :NewSong="list"></MusicList>
    </div>
  </div>
</template>

<script>
import MusicList from '@/components/home/plugin/musicList.vue'
import { GetNewSong } from '@/api/getNewMusic.js'
export default {
  name: 'hotMuiscList',
  props: {
    // 获取歌单数组
    NewMusicList: {}
  },
  components: {
    MusicList
  },
  data () {
    return {
      newMusic: [],
      // 获取最新音乐列表
      songLiet: [],
      list: [],
      music: []
    }
  },
  methods: {
    // 将获取的新音乐列表分成 每组3个元素
    async getSong () {
      const res = await GetNewSong(15)
      this.songLiet = res.data.result
      // console.log(this.songLiet.length)
      this.songLiet.forEach((item, index) => {
        if (this.music.length < 2) {
          this.music.push(item)
        } else {
          this.music.push(item)
          this.list.push(this.music)
          this.music = []
        }
      })
      this.list.push(this.music)
      this.music = []
    }
  },
  created () {
    // this.getHotMusic()
    this.getSong()
  }
}
</script>

<style lang="less" scoped>
  .hostMusicContainer{
    background-color: white;
    padding: 0 .5333rem;
    .hotHead{
      position: relative;
      height: 1.6rem;
      line-height: 1.6rem;
      font-size: .6933rem;
      color: #000;
      .playMuisc{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: #444;
        font-size: .5867rem;
        padding: .0533rem .2667rem;
        height: .8rem;
        line-height: .8rem;
        // background-color: red;
        border: .0267rem solid #ccc;
        border-radius: .5333rem;
        text-align: center;
      }
    }
  }
</style>
