<template>
  <div class="register">
    <div class="bg">
          <img src="../../../public/imgs/register_bg.png" alt="">
    </div>
    <div class="reg_box">
      <!-- logo区 -->
      <div class="logo_box">
        <img src="../../../public/imgs/logo.png" alt="" />
      </div>
      <span>注 &nbsp;&nbsp;册</span>
      <!-- 登录表单 -->
      <div class="box_center">
        <el-form
          :model="registerForm"
          :rules="registerFormRules"
          ref="registerFormRef"
          label-width="100px"
          class="register_form"
        >
          <el-form-item label="用户名" prop="username" class="item">
            <el-input
              placeholder="请输入用户名"
              v-model="registerForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="item">
            <el-input
              placeholder="8-16位，数字、大小字母、特殊符号中的三种"
              v-model="registerForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <div>
            <el-form-item label="确认密码" prop="password2" class="item sp">
              <el-input
                v-model="input"
                type="password"
                placeholder="请再次输入密码"
                @input.native="changeEvent()"
                id="tbPassword"
              ></el-input>
              <div class="qiangdu_box">
                <div class="line" id="first"></div>
                <div class="line" id="second"></div>
                <div class="line" id="third"></div>
                <div class="line" id="fourth"></div>
                <div class="word first1">弱</div>
                <div class="word second2">中</div>
                <div class="word third3">强</div>
                <div class="word fourth4">极强</div>
              </div>
            </el-form-item>
            <div class="hide" id="change">
              <el-form-item label="图形验证码" prop="vertifycode" class="item">
                <el-input
                  v-model="registerForm.vertifycode"
                  placeholder="请输入验证码"
                  class="vertifycode"
                ></el-input>
                <div class="vccode">
                  <img src="../../../public/imgs/vccode.png" alt="">
                </div>
                <span class="vccode-info">换一张</span>
              </el-form-item>
              <div class="reg_bottom">
                <el-form
                  ><el-form-item>
                    <el-button type="primary" class="register-button" @click="register">注册</el-button>
                  </el-form-item></el-form
                >
              </div>
              <div class="bottom">已有账号！<a @click="toLogin">去登陆</a></div>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery/dist/jquery.min.js'
import  {postUserRegisterInfo}  from '@/api/api.js'
export default {
  name:'Register',
  data() {
    return {
      userInfo:{
        username:'',
        password:''
      },
      registerForm: {},
      // 表单验证
      registerFormRules: {
        username: [
          { required: true, message: "请输入您的昵称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "长度在 8 到 16 个字符",
            trigger: "blur",
          },
        ],
        vertifycode: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
      input: "",
    };
  },
  methods: {
    changeEvent() {
      $("#tbPassword").focus(function () {
        $("#first").attr("class", "line1");
        $("#tbPassword").keyup();
      });

      $("#tbPassword").keyup(function () {
        var __th = $(this);

        if (!__th.val()) {
          Primary();
          return;
        }
        if (__th.val().length < 6) {
          Weak();
          return;
        }
        var _r = checkPassword(__th);
        if (_r < 1) {
          Primary();
          return;
        }

        if (_r > 0 && _r < 2) {
          Weak();
        } else if (_r >= 2 && _r < 4) {
          Medium();
        } else if (_r >= 4) {
          Tough();
        }
      });

      function Primary() {
        $("#first").attr("class", "line");
        $("#second").attr("class", "line");
        $("#third").attr("class", "line");
      }

      function Weak() {
        $("#first").attr("class", "line1");
        $("#second").attr("class", "line");
        $("#third").attr("class", "line");
      }

      function Medium() {
        $("#first").attr("class", "line1");
        $("#second").attr("class", "line2");
        $("#third").attr("class", "line");
      }

      function Tough() {
        $("#first").attr("class", "line1");
        $("#second").attr("class", "line2");
        $("#third").attr("class", "line3");
      }

      function checkPassword(pwdinput) {
        var maths, smalls, bigs, corps, cat, num;
        var str = $(pwdinput).val();
        var len = str.length;

        var cat = /.{16}/g;
        if (len == 0) return 1;
        if (len > 16) {
          $(pwdinput).val(str.match(cat)[0]);
        }
        cat = /.*[\u4e00-\u9fa5]+.*$/;
        if (cat.test(str)) {
          return -1;
        }
        cat = /\d/;
        var maths = cat.test(str);
        cat = /[a-z]/;
        var smalls = cat.test(str);
        cat = /[A-Z]/;
        var bigs = cat.test(str);
        var corps = corpses(pwdinput);
        var num = maths + smalls + bigs + corps;

        if (len < 6) {
          return 1;
        }

        if (len >= 6 && len <= 8) {
          if (num == 1) return 1;
          if (num == 2 || num == 3) return 2;
          if (num == 4) return 3;
        }

        if (len > 8 && len <= 11) {
          if (num == 1) return 2;
          if (num == 2) return 3;
          if (num == 3) return 4;
          if (num == 4) return 5;
        }

        if (len > 11) {
          if (num == 1) return 3;
          if (num == 2) return 4;
          if (num > 2) return 5;
        }
      }

      function corpses(pwdinput) {
        var cat = /./g;
        var str = $(pwdinput).val();
        var sz = str.match(cat);
        for (var i = 0; i < sz.length; i++) {
          cat = /\d/;
          var maths_01 = cat.test(sz[i]);
          cat = /[a-z]/;
          var smalls_01 = cat.test(sz[i]);
          cat = /[A-Z]/;
          var bigs_01 = cat.test(sz[i]);
          if (!maths_01 && !smalls_01 && !bigs_01) {
            return true;
          }
        }
        return false;
      }
    },
    toLogin(){
      this.$router.push('/login')
    },
    register(){
      const loadingInstance=this.$loading.service({fullscreen:true,lock:true})
      let {username,password}=this.userInfo
      //向后端注册接口发送post请求
      postUserRegisterInfo({username,password})
          .then(res=>{
              this.$message({
                  message:'恭喜你,注册成功!',
                  type:'success'
                }
              )
          }),
      loadingInstance.close()
    },
  }
}
</script>


<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
}
.bg{
    width:100%;  
    height:100%; 
    position: absolute;
    img{
      width: 100%;
      height: 100%;
  }      
}

.reg_box {
  width: 700px;
  height: 655px;
  background: #fff;
  border-radius: 15px;
  left:50%;
  top:50%;
  margin-left: -350px;
  margin-top: -300px;
  position: fixed;
}
.logo_box {
  text-align: center;
  margin-top: 40px;
  img{
    width: 202px;
    height: 59px;
  }
}
span {
  display: block;
  height: 69px;
  font-size: 40px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  line-height: 69px;
  color: rgba(0, 0, 0, 0.800000011920929);
  text-align: center;
  margin-left: 30px; 
}
/* .box_center {
  text-align: center;
} */
.register_form {
  width: 60%;
  box-sizing: border-box;
  margin: 20px 150px;
}
.item {
  font-weight: bold;
}
.sp {
  margin-bottom: 10px;
}
.line {
  float: left;
  background: #d6d3d3;
  width: 62px;
  height: 4px;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 0px;
}
.line1 {
  float: left;
  background: #ff3300;
  width: 62px;
  height: 4px;
  margin-top: 5px;
  margin-left: 5px;
}
.line2 {
  float: left;
  background: #099;
  width: 62px;
  height: 4px;
  margin-top: 5px;
  margin-left: 5px;
}
.line3 {
  float: left;
  background: #060;
  width: 62px;
  height: 4px;
  margin-top: 5px;
  margin-left: 5px;
}
.line4 {
  float: left;
  background: rgb(8, 230, 8);
  width: 62px;
  height: 4px;
  margin-top: 5px;
  margin-left: 5px;
}

.qiangdu_box {
  float: left;
  width: 320px;
}
.word {
  float: left;
  width: 62px;
  margin-left: 5px;
  text-align: center;
  color: #b0adad;
  font-size: 12px;
}

.hide {
  margin-top: -10px;
}
.confirm {
  position: absolute;
  right: 128px;
}
.reg_bottom {
  position: absolute;
  right: 128px;
  bottom: 40px;
}
.el-button {
  background-color: #af3c3c;
  width: 350px;
  height: 40px;
  opacity: 1;
}
.bottom {
  position: absolute;
  bottom: 100px;
  right: 128px;
  font-size: 10px;
  a{
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }   
  }
}
a {
  color: #af3c3c;
}
.vertifycode {
  width: 150px;
}
.box-center {
  position: relative;
}
.vccode{
  width: 160px;
  height: 40px;
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  img{
      width: 100%;
      height: 100%;
  }
}
.vccode-info {
  display: inline-block;
  margin-left: 284px;
  margin-top: -20px;
  font-size: 6px;
  color: #AF3C3C;
  &:hover{
      cursor: pointer;
      text-decoration: underline;
  }
}

.register-button {
  border: none;
  display: block;
  margin-top: -105px;
}
</style>

<style>
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #af3c3c;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #af3c3c;
  border-color: #af3c3c;
}
</style>