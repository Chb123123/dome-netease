"use strict";(self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[]).push([[259],{4259:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"registerContainer"},[s("div",{staticClass:"registerbox"},[s("div",{staticClass:"registerHead"},[e._v("注册")]),e._m(0),s("div",{staticClass:"registerPasswd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPhone,expression:"userPhone"}],attrs:{type:"text",name:"",id:"",placeholder:"输入手机号"},domProps:{value:e.userPhone},on:{input:function(t){t.target.composing||(e.userPhone=t.target.value)}}})]),e._m(1),s("div",{staticClass:"registerverificationcode"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userVerify,expression:"userVerify"}],attrs:{type:"text",name:"",id:"",placeholder:"输入验证码"},domProps:{value:e.userVerify},on:{input:function(t){t.target.composing||(e.userVerify=t.target.value)}}}),s("button",{staticClass:"send",attrs:{disabled:e.btnState},on:{click:e.getVerification}},[e._v("验证码")])]),s("button",{staticClass:"userRegister",on:{click:e.userRegister}},[e._v("注册")])]),s("div",{staticClass:"register"},[e._v("已有账号? "),s("router-link",{staticStyle:{color:"red"},attrs:{to:"/"}},[e._v("去登入")])],1)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"registerPhone"},[s("input",{attrs:{type:"text",name:"",id:"",placeholder:"设置昵称"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"registerPasswd"},[s("input",{attrs:{type:"password",name:"",id:"",placeholder:"输入密码"}})])}],a=s(9746),i=s(5972);const o=function(e,t){return(0,i.Z)({method:"get",url:"/captcha/verify",params:{phone:e,captcha:t}})};var u={name:"netRegister",data(){return{userPhone:"",btnState:!1,userVerify:""}},methods:{async getVerification(e){0===this.userPhone.length?alert("输入有效的手机号"):((0,a.z)(this.userPhone),this.btnState=!0)},async userRegister(){if(0===this.userPhone.length)alert("手机号码为空");else{const e=await o(this.userPhone,this.userVerify);console.log(e),200===e.status?this.$router.replace("/home"):alert("登入失败")}}}},c=u,l=s(1001),d=(0,l.Z)(c,r,n,!1,null,"4b7e3f20",null),h=d.exports},9746:function(e,t,s){s.d(t,{i:function(){return n},z:function(){return a}});var r=s(5972);const n=function(e,t){return(0,r.Z)({method:"get",url:"/login/cellphone",params:{phone:e,password:t}})},a=function(e){return(0,r.Z)({method:"get",url:"/captcha/sent",params:{phone:e}})}}}]);
//# sourceMappingURL=259.63903be3.js.map