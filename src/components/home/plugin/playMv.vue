<template>
  <div class="playMvContainer">
    <div class="playMvBox">
      <video class="playStyle" display:block v-if="mvUrl" :src="mvUrl" controls autoplay></video>
      <div class="backBtn" @click="backBtn"><van-icon name="arrow-left" /></div>
    </div>
    <div class="related">
      <div class="mvState">
        <span><van-icon name="good-job-o" /></span>
        <span><van-icon name="share-o" /></span>
      </div>
      <div class="commentList">
        <div class="commentHead">相关评论</div>
        <div class="commentBox">
          <CommentPlugin v-for="item in mvComments" :key="item.id" :username="item.user.nickname" :releaseTime="item.timeStr" :userAvatar="item.user.avatarUrl" :commentContent="item.content" :commentsLikeCount="item.likedCount"></CommentPlugin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetMvULR } from '@/api/getMvUrlAPI.js'
import { GetresemblanceMv } from '@/api/resemblanceMvAPI.js'
// 获取MV的点赞评论以及收藏数量
import { GetMvdetails } from '@/api/getMvDetailsAPI.js'
// 获取mv评论列表
import { GetCommentMV } from '@/api/getCommentMvAPI.js'
import CommentPlugin from '@/components/home/plugin/commentPlugin.vue'
export default {
  components: {
    CommentPlugin
  },
  data () {
    return {
      mvUrl: '',
      mvId: 0,
      mvplayCount: {
        // 评论
        playcount: 0,
        // 点赞
        likedCount: 0,
        // 转发
        shareCount: 0
      },
      // 评论列表
      mvComments: []
    }
  },
  methods: {
    // 点击后退
    backBtn () {
      this.$router.back(-1)
    },
    // 获取相关的mv
    async GetresemblanceMv () {
      const res = await GetresemblanceMv(this.mvId)
      console.log(res)
    },
    // 获取MV详情
    async getMvAbout () {
      const res = await GetMvdetails(this.mvId)
      // console.log(res.data)
      if (res.data) {
        this.mvplayCount.likedCount = res.data.likedCount
        this.mvplayCount.playcount = res.data.commentCount
        this.mvplayCount.shareCount = res.data.shareCount
      }
    },
    // 获取评论列表
    async getCommentMV () {
      const res = await GetCommentMV(this.mvId)
      console.log(res.data)
      this.mvComments = res.data.hotComments
    }
  },
  async created () {
    this.mvId = location.href.split('?')
    this.mvId = this.mvId[1].split('=')[1] - 0
    const res = await GetMvULR(this.mvId)
    this.mvUrl = res.data.data.url
    // console.log(res.data.data.url)
    // 获取相似的mv
    // this.GetresemblanceMv()
    // this.getMvAbout()
    // 获取mv评论
    this.getCommentMV()
  }
}
</script>

<style lang="less" scoped>
  .playMvContainer{
    // padding: 0 10px 0;
    .playMvBox{
      position: relative;
      // width: 100%;
      height: 250px;
      object-fit: cover;
    object-position: center center;
      // background-color: blue;
      .playStyle{
      position: absolute;
      left: 50%;
      top: 0;
      // 不保持原有比例，内容全部显示铺满容器
      object-fit: fill;
      background-color: none;
      outline: 0;
      transform: translateX(-50%);
      width: 100%;
      height: 100%;
      }
      .backBtn{
        position: absolute;
        top: 10px;
        left: 10px;
        color: #555;
        font-size: 18px;
      }
    }
    .related{
      // height: 300px;
      padding: 10px;
      // background-color: red;
      .mvState{
        height: 50px;
        display: flex;
        align-items: center;
        // background-color: aqua;
        > span{
          flex: 1;
          height: 50px;
          // background-color: blue;
          color: white;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin: 0 30px;
          font-size: 24px;
          color: #555;
          // text-align: center;
        }
      }
      // 评论列表
      .commentList{
        // background-color: red;
        height: 100px;
        .commentHead{
          height: 30px;
          line-height: 30px;
          // color: #333;
        }
        .commentBox{
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
</style>
