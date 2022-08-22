<template>
  <div class="musicContainer">
    <van-swipe :loop="false" :width="350" :show-indicators="false">
      <van-swipe-item v-for="item in NewSong" :key="item.id">
        <router-link to="" class="singleMusic" v-for="(i, index) in item" :key="index">
          <span><img :src="i.picUrl" alt="">
          <i><van-icon name="play" /></i>
          </span>
          <div class="musicTitle">
            <div class="title">{{i.name}}<span class="author">{{i.song.album.company}}</span>
          </div>
          <span class="authorName">{{ author }}</span>
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
    height: 180px;
    // overflow-y: hidden;
    // overflow-x: scroll;
    .singleMusic{
      position: relative;
      // flex: 33%;
      width: 320px;
      display: flex;
      margin-bottom: 10px;
      // color: red;
      // background-color: red;
      // border: 1px solid red;
      > span{
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        overflow: hidden;
        font-size: 14px;
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
          font-size: 24px;
        }
      }
      .musicTitle{
        flex: 1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        // align-items: center;
        border-bottom: 1px solid #eee;
        // background-color: red;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #333;
        .author{
          font-size: 12px;
          color: #999;
          margin-left: 10px;
        }
      }
      .authorName{
        // color: red;
        margin-top: 5px;
        color: #888;
        font-size: 12px;
      }
    }
  }
</style>
