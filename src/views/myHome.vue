<template>
  <div class="appContainer">
    <Head></Head>
    <Focus></Focus>
    <FormNav></FormNav>
    <ComMuisc style="margin-bottom: .5333rem;"></ComMuisc>
    <NewSong></NewSong>
    <HotMV></HotMV>
    <div class="radio">
      <!-- 切换组件 -->
      <div class="targetCom">
        <div v-if="flag" style="font-weight: 600;" class="radioBtn" @click="showRadio">推荐电台</div>
        <div v-else class="radioBtn" @click="showRadio">推荐电台</div>
        <div v-if="flag == false" style="font-weight: 600;" class="recordBtn" @click="showRecord">推荐节目</div>
        <div v-else class="recordBtn" @click="showRecord">推荐节目</div>
      </div>
      <keep-alive include="recommendRadio, componentsRecord">
          <component :is="targetComponent"></component>
      </keep-alive>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 用户导航栏
import Tabbar from '@/components/home/tabbar.vue'
import Head from '@/components/home/head.vue'
// 焦点图模块
import Focus from '@/components/home/focus.vue'
// 导航栏模块
import FormNav from '@/components/home/formNav.vue'
// 推荐歌单组件
import ComMuisc from '@/components/home/recommend.vue'
// 推荐新曲
import NewSong from '@/components/home/hotMusic.vue'
// 最热MV
import HotMV from '@/components/home/hostMV.vue'
// 推荐电台
import Radio from '@/components/home/radio.vue'
// 推荐视频
import Record from '@/components/home/record.vue'
export default {
  name: 'musicHome',
  components: {
    Head,
    Focus,
    FormNav,
    ComMuisc,
    NewSong,
    HotMV,
    Tabbar,
    Radio,
    Record
  },
  data () {
    return {
      targetComponent: 'Radio',
      flag: true
    }
  },
  methods: {
    // 点击推荐电台，切换电台组件
    showRadio () {
      this.targetComponent = 'Radio'
      this.flag = true
    },
    // 点击推荐视频切换视频组件
    showRecord () {
      this.targetComponent = 'Record'
      this.flag = false
    }
  }
}
</script>

<style lang="less" scoped>
  .appContainer{
    padding: 2.6667rem 0 1.8667rem;
    background-color: #ddd;
    .radio{
      background-color: white;
      padding: .2667rem .6667rem;
      .targetCom{
        display: flex;
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: .7467rem;
        // padding: 0 25px;
        .radioBtn{
          margin-right: .5333rem;
        }
      }
    }
  }
</style>
