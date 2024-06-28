<template>
  <div class="playMusicContainer">
    <div class="musicTitle">
      <div class="backIcon" @click="backRouter">返回</div>
      <span>虞姬叹</span>
    </div>
    <div class="content" ref="content">
      <div class="lyricBox" @click="playMusic" ref="lyricContent">
        <div :class="playMusicIndex === index? 'lyric playBackLyric':'lyric'" v-for="(item, index) in lyricList" :key="index">
          {{ item.lyric }}
        </div>
      </div>
    </div>
    <div class="musicContent">
      <audio @timeupdate="musicPlay" :src="musicUrl" loop="loop" controls ref="audioAbout"></audio>
    </div>
  </div>
</template>

<script>
import { getMusicLyric } from '@/api/getMusicDetails.js'
export default {
  name: 'musicLyric',
  data () {
    return {
      musicId: 1479526505,
      lyric: '',
      autoPlayMusic: false,
      musicUrl: 'https://m701.music.126.net/20240628114434/b17138dd6e45ee9d0d597283e123145d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28557930835/49ec/74b8/4483/2a23bfdfa57dc47213162fcd1f317154.mp3',
      audioDom: null,
      lyricList: [],
      lyricItemHeight: 0,
      playMusicIndex: 0,
      musicHtml: null
    }
  },
  methods: {
    async setMusicLyric () {
      const { data } = await getMusicLyric(this.musicId)
      console.log(data)
      if (data.code === 200) {
        this.lyric = data.lrc.lyric
        this.setLyric()
        this.$nextTick(() => {
          this.musicHtml = this.$refs.lyricContent
        })
      }
    },
    setLyric () {
      const strList = this.lyric.split('\n')
      const arr = []
      for (let i = 0; i < strList.length; i++) {
        if (strList[i] && strList[i] !== '') {
          const timeStr = strList[i].split(']')[0]
          const obj = {
            lyric: strList[i].split(']')[1],
            time: this.setTimeStr(timeStr.replace('[', ''))
          }
          arr.push(obj)
        }
      }
      this.lyricList = arr
    },
    musicPlay () {
      this.musicHtml.style.transform = `translateY(-${this.offetDistance()}px)`
    },
    setTimeStr (timeStr) {
      const timeList = timeStr.split(':')
      const H = timeList[0]
      const rightTime = (+timeList[1]) + (+H * 60)
      return rightTime
    },
    playMusic () {
      console.log(this.offetDistance())
      if (this.autoPlayMusic) {
        console.log('暂停')
        this.autoPlayMusic = false
        this.$refs.audioAbout.pause()
      } else {
        console.log('开始')
        this.autoPlayMusic = true
        this.$refs.audioAbout.play()
      }
    },
    // 获取当前播放歌词下标
    getMusicIndex () {
      if (this.audioDom) {
        const time = this.audioDom.currentTime
        for (let i = 0; i < this.lyricList.length; i++) {
          if (time < this.lyricList[i].time) {
            return i - 1
          }
        }
      }
    },
    backRouter () {
      this.$router.replace('/like')
    },
    // 设置歌词偏移
    offetDistance () {
      this.playMusicIndex = this.getMusicIndex()
      const countHeight = this.$refs.content.clientHeight / 2
      const item = document.querySelector('.lyric')
      this.lyricItemHeight = item.clientHeight
      const offet = this.lyricItemHeight * this.playMusicIndex + (this.lyricItemHeight / 2) - countHeight
      if (offet < 0) {
        return 0
      } else if (offet - (this.musicHtml.clientHeight - (countHeight * 2)) > 0) {
        return this.musicHtml.clientHeight - (countHeight * 2)
      } else {
        return offet
      }
    }
  },
  created () {
    console.log(this.$route.params)
    this.musicUrl = this.$route.params.musicURL
    this.musicId = this.$route.params.id
    this.setMusicLyric()
  },
  mounted () {
    this.$nextTick(() => {
      this.audioDom = this.$refs.audioAbout
    })
  }
}
</script>

<style lang="less" scoped>
.playMusicContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #000;
  height: 100vh;
  overflow: hidden;
}
.musicTitle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6667rem;
  line-height: 2.6667rem;
  color: #fff;
  width: 100%;
  font-size: .96rem;
  // background-color: red;
}
.backIcon {
  position: absolute;
  width: 2.6667rem;
  height: 1.3333rem;
  line-height: 1.3333rem;
  top: 50%;
  left: .8rem;
  font-size: .64rem;
  transform: translateY(-50%);
}
.content {
  width: 100%;
  height: 70vh;
  margin-top: 5vh;
  // border: 1px solid #ccc;
  overflow: hidden;
}
.musicContent {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2.8rem;
  z-index: 1000;
  // background-color: white;
  background-color: #000;
  border-top: .0267rem solid #ccc;
}
.lyricBox {
  // transform: translateY(-80px);
  transition: all 0.3s;
}
.lyric {
  height: 1.6rem;
  line-height: 1.6rem;
  color: #888;
  text-align: center;
  // border: 1px solid #ccc;
  // border: 1px solid #ccc;
  font-size: .7467rem;
  transition: all 0.2s;
}
.playBackLyric {
  color: #fff;
  transform: scale(1.3);
}
</style>
