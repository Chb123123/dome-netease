<template>
  <div class="swipeContainer" @click="showErr">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img src="@/assets/1.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="@/assets/2.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="@/assets/3.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="@/assets/4.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="@/assets/5.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="@/assets/6.jpg" alt=""></van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'focusMap',
  data () {
    return {}
  },
  methods: {
    showErr () {
      Toast.fail('暂无功能')
    }
  }
}
</script>

<style lang="less" scoped>
  .swipeContainer{
    padding-top: .5333rem;
    height: 8rem;
    background-color: white;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: .7467rem;
    line-height: 4rem;
    text-align: center;
    background-color: white;
  }
  .my-swipe{
    .van-swipe-item{
      display: flex;
      justify-content: center;
      height: 7.4667rem;
      img{
        width: 90%;
        height: 100%;
        border-radius: .8rem;
      }
    }
  }
</style>
