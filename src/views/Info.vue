<template>
  <div>
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
        <div style="margin:20px 0 40px"></div>
      </div>
       <div class="right-side-bar">
          <HotIssues></HotIssues>
          <MyVideos></MyVideos>
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
    };
  },
  components:{
    InfoTopbar,
    HotIssues,
    MyVideos
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    // 获取新闻列表
    async getNewsInfo() {
      // 请求默认的列表信息
      let res = await this.$axios.get("/info?id=11");
      this.newinfo = res.data;
    },
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

</style>
