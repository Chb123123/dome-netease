<template>
  <div class="musicContainer" @click="showErr">
    <van-swipe :loop="false" :width="650" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in radioList" :key="index">
        <router-link to="" class="singleMusic" v-for="i in item" :key="i.id">
          <span><img :src="i.picUrl" alt="">
          <i><van-icon name="play" /></i>
          </span>
          <div class="musicTitle">
            <div class="title">{{ i.name }}
          </div>
          <span class="authorName">{{ i.copywriter}}</span>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'musicSlinge',
  props: {
    // 获取最新歌单数组
    NewSong: {},
    title: {},
    // 作者名称
    author: {},
    // 图片路径
    musicImg: {},
    // 电台列表
    radioList: {}
  },
  methods: {
    showErr () {
      Toast.fail('暂无功能')
    }
  }
}
</script>

<style lang="less" scoped>
  .musicContainer{
    display: flex;
    margin-top: .5333rem;
    .singleMusic{
      position: relative;
      // flex: 33%;
      width: 16rem;
      display: flex;
      margin-bottom: .2667rem;
      > span{
        position: relative;
        width: 2.9333rem;
        height: 2.9333rem;
        border-radius: .2667rem;
        overflow: hidden;
        // font-size: 14px;
        img{
          width: 100%;
          height: 100%;
        }
        > i{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: .64rem;
        }
      }
      .musicTitle{
        flex: 1;
        margin-left: .5333rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        border-bottom: 1px solid #eee;
        // background-color: red;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .64rem;
        color: #333;
        .title{
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .author{
          font-size: .5333rem;
          color: #999;
          margin-left: .2667rem;
        }
      }
      .authorName{
        // color: red;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: .4rem;
        color: #888;
        font-size: .5867rem;
      }
    }
  }
</style>
