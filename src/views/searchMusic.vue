<template>
  <div class="searchMusicContainer">
    <div class="inputMusic">
      <input type="search" name="" id="" placeholder="搜索你想找的音乐" v-model.trim="valueMusic" @keyup.enter="getMusicList">
      <router-link to="/home" class="cancel">取消</router-link>
      <div class="searchLcon"><van-icon name="search" /></div>
      <ul class="SuggestList" v-if="valueMusic">
        <li v-for="item in musicList" :key="item.id" @click="toMusic"><span><van-icon name="search" /></span>{{ item.name }}<div class="uothor" v-if="item.artists[0].name"> - {{ item.artists[0].name }}</div></li>
      </ul>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/home/tabbar.vue'
// 获取搜索关键字
import axios from '@/utils/request.js'
export default {
  name: 'searchMusic',
  components: {
    Tabbar
  },
  data () {
    return {
      valueMusic: '',
      // 获取搜索推荐列表
      musicList: [],
      flag: null,
      musicTitle: ''
    }
  },
  methods: {
    async toMusic (e) {
      this.musicTitle = e.originalTarget.innerText
      this.musicTitle = this.musicTitle.split('\n')
      this.$router.push('/searchAbout?keywords=' + this.musicTitle[0])
    },
    async getMusicList (e) {
      this.musicTitle = e.originalTarget.innerText
      this.musicTitle = this.musicTitle.split('\n')
      this.$router.push('/searchAbout?keywords=' + this.valueMusic)
    }
  },
  watch: {
    async valueMusic () {
      if (this.flag) {
        clearTimeout(this.flag)
      }
      this.flag = setTimeout(() => {
        if (this.valueMusic.length > 0) {
          // console.log(this.valueMusic)
          axios({
            method: 'get',
            url: '/search/suggest',
            params: { keywords: this.valueMusic }
          }).then((res) => {
            this.musicList = res.data.result.songs
          })
        } else {
          this.musicList = []
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
  .searchMusicContainer{
    padding: 0 .5333rem 2.6667rem;
    .inputMusic{
      position: relative;
      display: flex;
      margin-top: .5333rem;
      height: 1.6rem;
      // background-color: red;
      > input{
        flex: 1;
        padding: 0 1.8667rem;
        border-radius: 1.0667rem;
        border: 0;
        background-color: #eee;
        font-size: .64rem;
      }
      .cancel{
        width: 2.6667rem;
        text-align: center;
        line-height: 1.6rem;
        color: #555;
      }
      .searchLcon{
        position: absolute;
        left: .5867rem;
        height: 1.6rem;
        line-height: 1.6rem;
        color: #555;
        font-size: 1.0667rem;
        // background-color: red;
      }
      .SuggestList{
        position: absolute;
        top: 2.1333rem;
        width: 90%;
        // background-color: red;
        > li{
          display: flex;
          height: 1.6rem;
          line-height: 1.6rem;
          color: #555;
          font-size: .7467rem;
          cursor: pointer;
          > span{
            width: 1.6rem;
            height: 1.6rem;
            line-height: 1.6rem;
            text-align: center;
          }
          .uothor{
            line-height: 1.8667rem;
            font-size: .64rem;
            margin-left: .5333rem;
          }
        }
      }
    }
  }
</style>
