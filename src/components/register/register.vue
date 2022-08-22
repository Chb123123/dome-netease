<template>
  <div class="registerContainer">
    <div class="registerbox">
      <div class="registerHead">注册</div>
      <div class="registerPhone">
        <input type="text" name="" id="" placeholder="设置昵称">
      </div>
      <div class="registerPasswd">
        <input type="text" name="" id="" placeholder="输入手机号"  v-model="userPhone">
      </div>
      <div class="registerPasswd">
        <input type="password" name="" id="" placeholder="输入密码">
      </div>
      <div class="registerverificationcode">
        <input type="text" name="" id="" placeholder="输入验证码" v-model="userVerify">
        <button class="send" @click="getVerification" :disabled="btnState">验证码</button>
      </div>
      <button class="userRegister" @click="userRegister">注册</button>
    </div>
          <div class="register">已有账号? <router-link to="/" style="color: red;">去登入</router-link></div>
  </div>
</template>

<script>
import { register } from '@/api/loginAPI.js'
import { verify } from '@/api/verifyAPI.js'
export default {
  name: 'netRegister',
  data () {
    return {
      userPhone: '',
      btnState: false,
      userVerify: ''
    }
  },
  methods: {
    // 输入手机号发送验证码
    // 用户点击发送验证码时按钮禁用 60 秒
    async getVerification (e) {
      if (this.userPhone.length === 0) {
        alert('输入有效的手机号')
      } else {
        register(this.userPhone)
        this.btnState = true
      }
      // console.log(e)
      // setTimeout(function () {
      //   this.uTime++
      //   this.uTime = this.uTime < 10 ? '0' + this.uTime : this.uTime
      //   e.target.innerHTML = 1
      // }, 1000)
    },
    async userRegister () {
      if (this.userPhone.length === 0) {
        alert('手机号码为空')
      } else {
        const res = await verify(this.userPhone, this.userVerify)
        console.log(res)
        if (res.status === 200) {
          this.$router.replace('/home')
        } else {
          alert('登入失败')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .registerContainer{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('@/assets/register.jpg') no-repeat 0 0 / cover;
    .registerbox{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80vw;
      height: 50vh;
      background-color: rgba(255,255,255,0.5);
      box-shadow: 0 0 15px rgba(255,255,255,0.5);
      border-radius: 20px;
      .registerHead{
        height: 40px;
        color: aqua;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        margin: 10px 0;
      }
      .registerPhone{
        display: flex;
        height: 35px;
        padding: 0 20px;
        > input {
          flex: 1;
          background-color: transparent;
          border: 0;
          border-bottom: 1px solid #ccc;
          color: #fff;
          padding: 0 10px;
        }
      }
      .registerPasswd{
        margin-top: 10px;
        display: flex;
        height: 35px;
        padding: 0 20px;
        > input {
          flex: 1;
          background-color: transparent;
          border: 0;
          border-bottom: 1px solid #ccc;
          color: #fff;
          padding: 0 10px;
        }
      }
      .registerverificationcode{
        display: flex;
        height: 35px;
        padding: 0 20px;
        margin: 20px 0 30px;
        > input{
          flex: 1;
          margin-right: 20px;
          background-color: transparent;
          border: 1px solid #ccc;
          color: #fff;
          padding-left: 10px;
        }
        .send{
          // flex: 1;
          width: 100px;
          font-size: 12px;
          // margin-left: 20px;
          background-color: rgb(110, 14, 189);
          border: 0;
          color: white;
        }
      }
      .userRegister{
        display: block;
        // margin-top: 30px;
        width: 80%;
        height: 30px;
        background: -webkit-linear-gradient(left,red,aqua);
        border: 0;
        color: white;
        border-radius: 20px;
        margin: auto;
        box-shadow: 0 0 10px;
      }
    }
    .register{
      position: absolute;
      bottom: 10px;
      right: 10px;
      // margin-top: 10px;
      font-size: 12px;
      color: white;
    }
  }
</style>
