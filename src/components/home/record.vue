<template>
  <!-- 节目组件 -->
  <div class="recordComponent">
    <Programme :recordList="recordList"></Programme>
  </div>
</template>

<script>
import Programme from '@/components/home/plugin/programmeCom.vue'
import { GetRecord } from '@/api/getRecordAPI.js'
export default {
  name: 'componentsRecord',
  components: {
    Programme
  },
  data () {
    return {
      // 电台列表
      recordList: []
    }
  },
  async created () {
    const res = await GetRecord()
    // console.log(res.data.programs)
    let list1 = []
    res.data.programs.forEach((item, index) => {
      if (list1.length < 2) {
        // console.log(item)
        list1.push(item)
      } else {
        list1.push(item)
        this.recordList.push(list1)
        list1 = []
      }
    })
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
  .recordComponent{
    height: 9.3333rem;
    // background-color: blue;
  }
</style>
