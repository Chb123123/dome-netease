<template>
  <div class="musicContainer">
    <van-swipe :loop="false" width="650px" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in NewSong" :key="index">
        <router-link to="" class="singleMusic" v-for="(i, index) in item" :key="index">
          <span><img :src="i.picUrl" alt="">
          <i><van-icon name="play" /></i>
          </span>
          <div class="musicTitle">
            <div class="title">{{i.name}}<span class="author">{{i.song.album.company}}</span>
          </div>
          <span class="authorName">{{i.song.artists[0].name}}</span>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'musicSlinge',
  props: {
    // 获取最新歌单数组
    NewSong: {},
    title: {},
    // 作者名称
    author: {},
    // 图片路径
    musicImg: {}
  }
}
</script>

<style lang="less" scoped>
  .musicContainer{
    display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
    height: 10.4rem;
    // overflow-y: hidden;
    // overflow-x: scroll;
    .singleMusic{
      position: relative;
      // flex: 33%;
      width: 600px;
      height: 2.9333rem;
      display: flex;
      margin-bottom: .5333rem;
      // color: red;
      // background-color: red;
      // border: 1px solid red;
      > span{
        position: relative;
        width: 2.9333rem;
        height: 2.9333rem;
        border-radius: .2667rem;
        overflow: hidden;
        // font-size: 24px;
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
        // align-items: center;
        justify-content: center;
        border-bottom: .0267rem solid #eee;
        // background-color: red;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .7467rem;
        color: #333;
        .author{
          font-size: .48rem;
          color: #999;
          margin-left: .5333rem;
        }
      }
      .authorName{
        // color: red;
        margin-top: .5333rem;
        color: #888;
        font-size: .5333rem;
      }
    }
  }
</style>
