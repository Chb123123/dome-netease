<template>
  <div class="commentContainer">
    <van-nav-bar
      title="评论"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="commentList">
      <div class="commentHead">评论区</div>
      <div class="newComment">精彩评论</div>
      <!-- 评论样式模板 -->
      <div class="commentStyle" v-for="item in commentList" :key="item.commentId">
        <div class="userAbout">
          <div class="userLeft">
            <img :src="item.user.avatarUrl" alt="">
          </div>
          <div class="userRight">
            <span class="nickname">{{ item.user.nickname }}</span>
            <span class="releaseTime">{{ item.time | timer }}</span>
            <div class="like"><van-icon name="good-job-o" /></div>
            <div class="comment">{{ item.content }}</div>
            <!-- 回复模块 -->
            <div class="Reply">共2条回复<van-icon name="arrow" style="margin-left: 5px;"/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments } from '@/api/getCommentListAPI.js'
export default {
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    }
  },
  data () {
    return {
      singerid: '',
      // 歌单评论列表
      commentList: []
    }
  },
  // 过滤器，格式化时间戳
  filters: {
    timer (val) {
      return new Date(parseInt(val)).toLocaleString().substr(0, 17)
    }
  },
  async created () {
    console.log(+new Date())
    // 获取hash地址上的歌单id
    this.singerid = location.hash.split('?')
    this.singerid = this.singerid[1].split('=')
    this.singerid = this.singerid[1] - 0
    // console.log(typeof (this.singerid))
    const res = await getComments(this.singerid)
    console.log(res.data.comments)
    this.commentList = res.data.comments
  }
}
</script>

<style lang="less" scoped>
.commentContainer{
  .commentList{
    margin-top: 60px;
    padding: 0 10px;
    .commentHead{
      font-size: 18px;
      // color: #777;
    }
    .newComment{
      margin: 20px 0;
      font-size: 14px;
      color: #666;
    }
    // 评论样式
    .commentStyle{
      margin-top: 10px;
      // background-color: red;
      .userAbout{
        display: flex;
        .userLeft{
          width: 40px;
          height: 40px;
          margin-right: 20px;
          img{
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;
          }
        }
        .userRight{
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-items: center;
          // background-color: red;
          // align-items: center;
          color: #666;
          .nickname{
            font-size: 14px;
          }
          .releaseTime{
            font-size: 12px;
            margin-bottom: 10px;
          }
          .like{
            position: absolute;
            right: 5px;
            top: 10px;
            // transform: translateY(-50%);
            font-size: 18px;
          }
          .comment{
            // background-color: blue;
            // height: 100px;
            font-size: 16px;
            color: #333;
          }
          .Reply{
            margin-top: 10px;
            height: 30px;
            background-color: #eee;
            line-height: 30px;
            padding-left: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
