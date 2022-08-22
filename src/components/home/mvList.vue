<template>
  <!-- MV列表 -->
  <div class="mvListContainer">
    <van-nav-bar
  title="全部"
  left-arrow
  @click-left="onClickLeft"
/>
  <van-tabs v-model="active" animated @click="onClick">
  <van-tab title="内地">
    <div class="mvListBox">
      <div class="mvBox" v-for="item in data1" :key="item.id">
        <Mvstyle :mvId="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount"></Mvstyle>
      </div>
    </div>
  </van-tab>
  <van-tab title="港台">
    <div class="mvListBox">
      <div class="mvBox" v-for="item in data2" :key="item.id">
        <Mvstyle :mvId="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount"></Mvstyle>
      </div>
    </div>
  </van-tab>
  <van-tab title="欧美">
    <div class="mvListBox">
      <div class="mvBox" v-for="item in data3" :key="item.id">
        <Mvstyle :mvId="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount"></Mvstyle>
      </div>
    </div>
  </van-tab>
  <van-tab title="日本">
    <div class="mvListBox">
      <div class="mvBox" v-for="item in data4" :key="item.id">
        <Mvstyle :mvId="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount"></Mvstyle>
      </div>
    </div>
  </van-tab>
  <van-tab title="韩国">
    <div class="mvListBox">
      <div class="mvBox" v-for="item in data5" :key="item.id">
        <Mvstyle :mvId="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount"></Mvstyle>
      </div>
    </div>
  </van-tab>
  <van-tab title="全部">
    <div class="mvListBox">
      <div class="mvBox" v-for="item in data6" :key="item.id">
        <Mvstyle :mvId="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount"></Mvstyle>
      </div>
    </div>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import Mvstyle from '@/components/home/plugin/singStyle.vue'
import { MVList } from '@/api/MvClassificationAPI.js'
export default {
  name: 'mvList',
  components: {
    Mvstyle
  },
  data () {
    return {
      // 默认显示的标签
      active: 0,
      // 内地MV的数据
      data1: [],
      // 港台MV视频
      data2: [],
      // 欧美MV视频
      data3: [],
      // 日本MV视频
      data4: [],
      // 韩国MV视频
      data5: [],
      // 全部MV视频
      data6: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    },
    async onClick (res) {
      // console.log(res)
      if (res === 0) {
        const res = await MVList('内地')
        this.data1 = res.data.data
        // console.log(res)
      } if (res === 1) {
        const res = await MVList('港台')
        // console.log(res)
        this.data2 = res.data.data
      } if (res === 2) {
        const res = await MVList('欧美')
        // console.log(res)
        this.data3 = res.data.data
      } if (res === 3) {
        const res = await MVList('日本')
        // console.log(res)
        this.data4 = res.data.data
      } if (res === 4) {
        const res = await MVList('韩国')
        // console.log(res)
        this.data5 = res.data.data
      } if (res === 5) {
        const res = await MVList('全部')
        // console.log(res)
        this.data6 = res.data.data
      }
    }
  },
  async created () {
    const res = await MVList('内地')
    // console.log(res.data.data)
    this.data1 = res.data.data
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
  .mvListContainer{
    // padding: 0 10px;
    /keep/.van-nav-bar .van-icon{
      color: #333;
    }
    .mvListBox{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 10px;
      margin-top: 10px;
      .mvBox{
        flex: 0.3;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        padding-left: 5px;
      }
    }
  }
</style>
