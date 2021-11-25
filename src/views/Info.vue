<template>
  <div>
    <div class="root">
        <InfoTopbar></InfoTopbar>
    <div class="article-detail-container">
      <div class="main">
        <div class="article-content">
          <h1>{{newinfo.title}}</h1>
          <div class="article-meta">
            <span class="original-tag">原创</span>
            <span>2021-11-20 09:24</span>
            <span class="dot">·</span>
            <span class="name">
              <a href="javascript:;">央视网</a>
            </span>
          </div>
          <article>
            <p>
              <span style="letter-spacing:1px;">
                <span style="color:#333333;">
                  {{newinfo.cpa}}
                </span>
              </span>
            </p>
           <p>
              <span style="letter-spacing:1px;">
                <span style="color:#333333;">
                  {{newinfo.cpa}}
                </span>
              </span>
            </p>
            
          </article>
        </div>
        <!-- 评论区开始 -->
        <div style="margin:20px 0 40px">
          <div class="comment-block"  aria-label="评论区">
            <div class="comment-wrapper">
              <div class="title">
                评论
                <span>3915</span>
              </div>
              <div class="main-input">
                <div class="avatar auth-none">                 
                </div>
                <div class="comment-input">
                  <div class="login-mask" @click="login" ref="loginMask">
                      <p>
                          请先
                          <button >登录</button>
                          后发表评论~
                      </p>
                  </div>
                  <textarea :disabled="disabled" class="comment-textarea" placeholder="说点什么吧..."></textarea>
                  <div class="action">
                      <button disabled class="submit-btn">评论</button>
                  </div>
                </div>
              </div>
              <ul class="comment-list">
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-name">
                          <span>心思淡然</span>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-name">
                          <span>心思淡然</span>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-name">
                          <span>心思淡然</span>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <button class="side-drawer-btn" @click="showBar">
            <span>
              查看全部
              3915
              条评论
            </span>
            </button>
          </div>
        </div>
      </div>
      <!-- 评论区结束 -->
      <div class="right-side-bar">
          <HotIssues></HotIssues>
          <MyVideos></MyVideos>
      </div>
    </div>   
    </div>
    <div class="portal-wrapper drawer-wrapper comment-drawer" style="width:100%;" ref="comments">
      <div class="mask" ref="mask" @click="clearMask"></div>
      <div class="drawer">
        <div class="header">
          <div class="title">
            评论
            <span>3922</span>
          </div>
          <button class="close-btn" @click="clearMask"></button>
        </div>
        <div class="body" style="overflow-y:hidden;width:calc(100%-17px);">
          <div class="comment-wrapper">    
              <ul class="comment-list">
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-info">
                          <div class="user-name">
                            <span class="name">心思淡然</span>
                          </div>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">
                          合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-info">
                          <div class="user-name">
                            <span class="name">心思淡然</span>
                          </div>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">
                          合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-info">
                          <div class="user-name">
                            <span class="name">心思淡然</span>
                          </div>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">
                          合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-info">
                          <div class="user-name">
                            <span class="name">心思淡然</span>
                          </div>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">
                          合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="comment-item">
                    <a href="">
                      <div class="avatar auth-none">
                        <img src="../assets/imgs/none.png" alt="">
                      </div>
                    </a>
                    <div class="comment-info">
                      <div class="header">
                        <div class="user-info">
                          <div class="user-name">
                            <span class="name">心思淡然</span>
                          </div>
                        </div>
                      </div>
                      <div class="body">
                        <p class="content">
                          合作共赢，高质量发展，为强大的祖国点赞，为习主席点赞
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import InfoTopbar from "../components/InfoTopbar.vue"
import HotIssues from '../components/HotIssues.vue';
import MyVideos from "../components/MyVideos.vue"
export default {
  name: "Info",
  data() {
    return {
      // 当前登录用户名
      username: "未登录",
      // 新闻列表信息
      newinfo: {},
      disabled:true
    }
  },
  components:{
    InfoTopbar,
    HotIssues,
    MyVideos
  },
  created() {
    this.getNewsInfo()
  },
  mounted(){
    if(localStorage.getItem('username')){
      this.$refs.loginMask.style.display='none'
      this.disabled=false
    }
  },
  methods: {
    // 获取新闻列表
    async getNewsInfo() {
      // 请求默认的列表信息
      let res = await this.$axios.get("/info?id=11");
      this.newinfo = res.data;
    },
    showBar(){
      this.$refs.comments.style.display="block"
      this.$refs.mask.style.opacity="1"
    },
    clearMask(){
        this.$refs.comments.style.display="none"
        this.$refs.mask.style.opacity="0"
    },
    login(){
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped lang="scss">
.article-detail-container{
  margin:40px auto 0;
  padding:0 48px;
  width: 1130px;
  min-width: 1130px;
  div{
    display: inline-block;
    vertical-align: top;
  }
  .main{
    margin-right: 60px;
    width: 676px;
    .article-content{
      h1{
        display: block;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0%px;
        margin-inline-end: 0px;
      }
      .article-meta{
        margin:16px 0 36px;
        font-size:14px;
        line-height: 20px;
        color:#707070;
        span{
          display: inline-block;
          cursor: auto;
        }
        .original-tag{
          margin:1px 8px 1px 0;
          border-radius:3px;
          padding:1px 4px;
          font-size:12px;
          line-height:10px;
          color:#707070;
        }
        a{
          color:#707070;         
        }
      }
      article{
        margin-bottom:20px;
        font-size: 18px;
        color:#222;
        line-height:1.667;
        font-family: PingFang SC,Hiragino Sans GB,MicroSoft YaHei,Arial, Helvetica, sans-serif;
        p{
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
      }
    }
  }
  .right-side-bar{
    width: 298px;
  }
}
.comment-block{
  width: 676px;
  .comment-wrapper{
    width: 100%;
    .title{
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      color:#222;
    }
    .main-input{
      display: flex;
      margin-top: 24px;
      margin-bottom: 40px;
      .avatar{
        box-sizing: border-box;
        margin-right: 12px;
        position: relative;
        display: inline-block;
        border:1px solid #f2f2f2;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        background:url('../assets/imgs/none.png') no-repeat 50%;
        background-size: contain;
      }
      .comment-input{
        width:100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        padding: 16px;
        background: #f8f8f8;
        flex: 1 1;
        .login-mask{
          position: absolute;
          top: 0;
          left:0;
          width: 100%;
          height: 100%;
          background:#f8f8f8;
          cursor: pointer;
          p{
            position: absolute;
            left: 50%;
            top:50%;
            transform:translate(-50%,-50%);
            white-space: nowrap;
            font-size: 16px;
            line-height: 22;
            color:#222;
            button{
              border:none;
              font-size: 16px;
              line-height: 22;
              font-weight: 500;
              color:#f04142;
              background:transparent;
            }
          }
        }
        .comment-textarea{
          display: block;
          border:0;
          padding:0;
          box-sizing: border-box;
          max-height:72px;
          width: 100%;
          height: 24px;
          font-size: 16px;
          line-height: 24px;
          color:#222;
          outline: none;
          resize: none;
          background: #f8f8f8;
        }
        .action{
          width: 100%;
          text-align: right;
          margin-top: 12px;
          .submit-btn{
            border: none;
            border-radius:4px;
            padding: 6px 18px;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            color:#fff;
            background: #505050;
          }
        }
      }
    }
    .comment-list{
      height: 383px;
      li{
        height: 89px;
        margin:40px 0;
        .comment-item{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          a{
            color:#222;
            .avatar{
              position: relative;
              display: inline-block;
              border: 1px solid #f2f2f2;
              border-radius: 50%;
              width: 36px;
              height: 36px;
              background:url('../assets/imgs/none.png') no-repeat 50%;
              img{
                border-radius: 50%;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
          &>a{
            margin-right: 12px;
          }
          .comment-info{
            flex:1 1;
            width: 100%;
            height: 100%;
            .header{
              display: flex;
              justify-content: space-between;
              .user-name{
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                color:#222;
              }
            }
            .body{
              margin:8px 0 12px;
              width: 100%;
              height: 100%;
              .content{
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color:#222;
              }
            }
          }
        }
      }
    }
  }
  .side-drawer-btn{
    display: block;
    border:none;
    margin-top:-4px;
    padding: 11px 0;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    color:#222;
    background:#f8f8f8;
    cursor: pointer;
  }
}

.drawer-wrapper{
  display:  none;
  position: fixed;
  top:0;
  left:0;
  height: 100%;
  z-index:1000;
  .mask{
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left:0;
    opacity: 0;
    transition: opacity .3s cubic-bezier(.34,.69,.1,1);
    background: rgba(0,0,0,0.5);
  }
  .drawer{
    box-sizing: border-box;
    position: absolute;
    top:0;
    right:0;
    overflow: hidden;
    width: 458px;
    height: 100%;
    background: #fff;
    transition: transform .3s cubic-bezier(.34,.69,.1,1),-webkit-transform .3s cubic-bezier(.34,.69,.1,1),-moz-transform .3s cubic-bezier(.34,.69,.1,1);
    transform:translateX(0);
    &>.header{
      position: relative;
      margin:20px 0 16px;
      padding: 0 44px 0 24px;
      height: 28px;
      outline: none;
      box-sizing: border-box;
      .title{
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        color:#222;
      }
      .close-btn{
        position: absolute;
        top:0;
        right: 16px;
        border:none;
        width: 28px;
        height: 28px;
        background: url('../assets/imgs/close.png') no-repeat 50%;
        background-size: contain;
        cursor: pointer;
      }
    }
    &>.body{
      width: 100%;
      position: absolute;
      top:64px;
      bottom: 0;
      .comment-wrapper{
        padding: 0 24px;
        .comment-list li{
          width: 100%;
          height: 100%;
          margin:40px 0;
          .comment-item{
            display: flex;
            align-items: flex-start;
            &>a{
                margin-right: 12px;
                .avatar{
                  position: relative;
                  display: inline-block;
                  border: 1px solid #f2f2f2;
                  border-radius: 50%;
                  width: 36px;
                  height: 36px;
                  background:url('../assets/imgs/none.png') no-repeat 50%;
                  background-size:contain;
                  box-sizing: border-box;
                  img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
            }
            }
            .comment-info{
              flex:1 1;
              .header{
                display: flex;
                justify-content: space-between;
                .user-info{
                  display: flex;
                  align-items: center;
                  .user-name{
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    color:#222;
                  }
                }
              }
              .body{
                margin:8px 0 12px;
                .content{
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 24px;
                  color:#222;
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
