<template>
<div @click="MusicId">
  <router-link class="SingleContainsr" to="">
    <div v-if="showIcon"><div class="ranking" v-if="list1">{{ list1 }}</div></div>
    <div class="ranking" v-else style="font-size: .5333rem; color: #79C3C6"><van-icon name="music-o" /></div>
    <div class="musicTitle">
      <!-- 歌词名称 -->
      <div class="Songletitle">{{ musictitle }}
        <span>{{ musicWhether }}</span>
      </div>
      <!-- 歌词作者 -->
      <div class="autohrMusic">{{ musicAuthor }}<span style="margin-left: 5px;" v-if="introduce"> - &nbsp;{{ introduce }}</span></div>
    </div>
    <router-link class="musicplay" to=""><van-icon name="play-circle-o" title="播放"/></router-link>
    <router-link class="musicMore" to=""><van-icon name="weapp-nav" title="更多"/></router-link>
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    // 歌曲排行
    list1: {},
    // 歌曲名称
    musictitle: {},
    // 歌曲作者
    musicAuthor: {},
    // 歌曲2号歌手
    musicAuthor2: {},
    // 歌曲介绍
    introduce: {},
    // 获取全部歌曲的图片
    firshImg: {},
    // 获取歌曲 Id
    Muiscid: {},
    // 获取歌曲的MP3地址
    musicMP3URL: {}
  },
  name: 'userLikeMusic',
  data () {
    return {
      // 是否有音源
      musicWhether: '',
      // 点击显示播放按钮
      showIcon: true,
      // 是否出现播放按钮
      flag: false
    }
  },
  methods: {
    MusicId (index) {
      // console.log(index)
      this.$emit('MusicId', this.Muiscid)
      this.flag = true
      // 判断MP3地址是否存在
      // this.showIcon = false
      // setTimeout(() => {
      //   // console.log(this.musicMP3URL === '')
      //   if (this.musicMP3URL === '') {
      //     this.musicWhether = '暂无音源'
      //   } else {
      //     this.musicWhether = ''
      //   }
      // }, 2000)
    }
  },
  watch: {
    musicMP3URL () {
      this.showIcon = true
      if (this.flag) {
        this.flag = false
        console.log(typeof (this.musicMP3URL))
        // eslint-disable-next-line valid-typeof
        if (typeof (this.musicMP3URL) === Object) {
          this.musicWhether = '暂无音源'
        } else {
          this.musicWhether = ''
        }
        this.showIcon = false
        // console.log('11')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .SingleContainsr{
    height: 1.8667rem;
    display: flex;
    margin: 0 0 .2667rem;
    // background-color: red;
    // padding: 0 10px;
    .ranking{
      height: 1.8667rem;
      width: 2.56rem;
      line-height: 1.8667rem;
      text-align: center;
      margin-right: .2667rem;
      font-size: .7467rem;
      // background-color: aqua;
      color: #888;
    }
    .musicTitle{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // background-color: purple;
      // border: 1px solid red;
      overflow: hidden;
      .Songletitle{
        font-size: .8533rem;
        color: #333;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        span{
          color: #777;
          margin-left: .1333rem;
        }
      }
      .autohrMusic{
        font-size: .5867rem;
        color: #888;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .musicplay{
      width: 1.8667rem;
      height: 1.0667rem;
      line-height: 1.0667rem;
      color: #888;
      // text-align: center;
      font-size: .88rem;
    }
    .musicMore{
      width: 1.8667rem;
      height: 1.0667rem;
      line-height: 1.0667rem;
      font-size: .88rem;
      color: #888;
      // text-align: center;
      // background-color: blue;
      margin-right: .2667rem;
    }
  }
</style>
