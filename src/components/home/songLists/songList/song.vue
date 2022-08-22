<template>
<!-- 歌单样式 -->
  <div class="song" @click="getSongID">
          <div class="songCover">
            <img :src="overURL" alt="">
          </div>
          <span class="songTitle">{{ songTitle }}</span>
          <div class="play">
            <van-icon name="play-circle-o" />
            {{ playNumber | formatPlayCount }}
          </div>
        <!-- <div class="songLogo"><van-icon name="music-o" /></div> -->
      </div>
</template>

<script>
import EventBus from '@/EventBus/EventBus.js'
export default {
  name: 'songMonomer',
  props: {
    overURL: {},
    // 歌单介绍
    songTitle: {},
    // 歌单播放次数
    playNumber: {},
    songID: {},
    // 歌单详情
    songItem: {}
  },
  data () {
    return {
      songItemObj: {}
    }
  },
  methods: {
    getSongID () {
      // console.log(this.songID)
      // 点击歌单跳转到相应的歌单页面
      // this.$router.push('/songlistmusic?songListId=' + this.songID)
      console.log(this.songItem)
      this.$router.push({
        name: 'songlistmusic',
        params: {
          id: this.songID,
          state: this.songItem,
          // 歌单详情
          name: this.songTitle,
          // 歌单封面
          imgUrl: this.overURL,
          // 歌单简介
          Introduction: this.songItem.name
        }
      })
      EventBus.$emit('GetsongID', this.songID)
    }
  }
}
</script>

<style lang="less" scoped>
  .song{
        width: 5.7333rem;
        height: 7.4667rem;
        // width: 120px;
        min-width: 5.7333rem;
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 .1333rem;
        // background-color: red;
        // border: 1px solid red;
        margin-bottom: .5333rem;
        // border-radius: 10px;
        .songCover{
          width: 5.7333rem;
          height: 5.7333rem;
          border-radius: .8rem;
          overflow: hidden;
          > img{
            width: 100%;
            height: 100%;
            // border-radius: 20px;
          }
        }
        .songTitle{
          // flex: 0.25;
          height: 1.7333rem;
          font-size: .5867rem;
          color: #666;
          display: -webkit-box;
          word-break:break-all ;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .play{
          position: absolute;
        top: .2667rem;
        right: .2667rem;
        color: white;
        font-size: .5867rem;
        background-color: rgba(0,0,0,.3);
        padding: .0533rem .1067rem;
        border-radius: .5333rem;
        }
        .songLogo{
          position: absolute;
          top: 5px;
          left: 5px;
          color: white;
          font-size: 20px;
          // background-color: rgba(0,0,0,0.6);
          border-radius: 50%;
          padding: 2px;
        }
      }
</style>
