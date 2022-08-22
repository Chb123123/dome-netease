<template>
  <!-- 推荐电台 -->
  <div class="radioContainer">
    <Programme :radioList="radioList"></Programme>
  </div>
</template>

<script>
import Programme from '@/components/home/plugin/programmeCom1.vue'
// 获取推荐电台
import { GetRadio } from '@/api/getRadioAPI.js'
export default {
  name: 'recommendRadio',
  components: {
    Programme
  },
  data () {
    return {
      radioList: []
    }
  },
  async created () {
    const res = await GetRadio()
    // console.log(res.data.result)
    let list1 = []
    res.data.result.forEach((item, index) => {
      if (list1.length < 2) {
        // console.log(item)
        list1.push(item)
      } else {
        list1.push(item)
        this.radioList.push(list1)
        list1 = []
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .radioContainer{
    height: 9.3333rem;
    // background-color: red;
  }
</style>
