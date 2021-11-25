<template>
  <div id="login">
    <!-- 页面 logo -->
    <img src="../assets/imgs/logo.png" class="logo" />
    <!-- 登陆盒子 -->
    <div class="login-box">
      <h3 class="title">登陆</h3>
      <el-form
        label-position="right"
        :model="userInfo"
        :rules="rules"
        label-width="150px"
        class="form"
        ref="logincheck"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="userInfo.username"
            placeholder="请输入用户名"
            class="input"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="userInfo.password"
            placeholder="请输入密码"
            class="input"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verification">
          <el-input
            v-model="userInfo.verification"
            class="verify-code"
            placeholder="请输入验证码"
          ></el-input>
          <div class="code" @click="getCode">{{ verification }}</div>
        </el-form-item>
        <el-button type="text" class="login-button" @click="login">登录</el-button>
      </el-form>
      <div class="remark">
        <span>还没有注册吗？</span>
        <span class="red" @click="toRegister">去注册</span>
      </div>
    </div>
    <!-- 版权信息 -->
    <div class="copyright">@河海大学 版权所有 与党同行，与党同心</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 需要采集的用户数据源
      userInfo: {
        username: "",
        password: "",
        verification: "",
      },
      // 后台反馈的验证码
      verification: "",
      // 校验规则
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        verification: [
          { required: true, message: "请输入正确的验证码", trigger: "blur" },
        ],
        checked: [{ require: true, message: "请先勾选协议", trigger: "change" }],
      },
    };
  },
  created() {
     this.getCode();
  },
  methods: {
    // 获取验证码
    async getCode() {
      let res = await this.$axios.get("/code");
      this.verification = res.data.code;
    },
    // 点击登录
    login() {
      // 对用户输入数据进行校验
      // 这里一定要注意使用 箭头函数将 this 指向上下文
      this.$refs["logincheck"].validate(async (valid) => {
        if (valid) {
          // 在这里我们还需要做一步，本地校验验证码的合法性
          if (this.userInfo.verification === this.verification) {
            //引入element-loading实例
            let loadingInstance = this.$loading.service({ fullscreen: true })
            // 请求登陆接口
            let res = await this.$axios.get("/login");
            /**
             * to-do 向后端登录接口发送post请求 若响应状态码status是200 则登录成功
             */
            console.log(res.data)
            if(res.data.status==200){
               localStorage.setItem("username", this.userInfo.username)
               loadingInstance.close() //关闭loading
               this.$router.push("/home");
            }
          } else {
            this.$message.error("验证码校验错误");
            return false;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 跳转到注册页面
    toRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped lang="scss">
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(../assets/imgs/bg.png);
  background-size: cover;
}
.logo {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.login-box {
  width: 602px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 30px 2px #000;
  .title {
    color: #af3c3c;
    text-align: center;
    font-size: 28px;
    letter-spacing: 20px;
    line-height: 80px;
  }
  .input {
    width: 350px;
  }
  .verify-code {
    width: 200px;
  }
  .code {
    display: inline-block;
    width: 140px;
    height: 44px;
    background: #af3c3c;
    margin-left: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 21px;
    text-align: center;
    letter-spacing: 6px;
    cursor: pointer;
  }
  .login-button {
    display: block;
    margin: 0 auto;
    width: 400px;
    height: 40px;
    background-color: #af3c3c;
    border: none;
    color: rgba(255, 249, 249, 1);
  }
  .remark {
    text-align: center;
    margin-top: 40px;
    .red {
      color: red;
      cursor: pointer;
    }
  }
}
.copyright {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
</style>
