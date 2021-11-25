<template>
  <div class="show-monitor">
      <div class="detail-hotboard">
          <div style="display:none;width:298px;height:515px;" ref="divBox"></div>
          <div style="position:static;top:88px;z-index:100;transform:none;" ref="fixBox">
              <div class="hot-board">
                  <div class="title-bar">
                      <div class="title">热点资讯</div>
                      <button class="refresh" @click="changeNews">换一换</button>
                  </div>
                  <ul>
                      <li v-for="(item,index) in newsList" :key=index>
                          <router-link to="/info?id=12" href="" class="article-item">
                              <span class="news-index" v-text="index+1"></span>
                              <p class="news-title" v-text="item.title">十九届六中全会</p>
                          </router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import service from "../util/require.js";
export default {
    data(){
        return{
            newsList:[],
            videoList:[],
            id:1
        }
    },
    created(){
        this.getNewsList(this.id)
    },
    methods:{
        scrollHanlder(){
            if(this.$route.path==='/info'){
                if(window.scrollY>1200){
                    this.$refs.divBox.style.display="block"
                    this.$refs.fixBox.style.position="fixed"
                }else{
                    this.$refs.divBox.style.display="none"
                    this.$refs.fixBox.style.position="static"
                }   s
            }
        },
        async getNewsList(id) {
            // 请求默认的列表信息
             let res = await service.get("/newslist",{
                params:{
                    id
                }
             })
             this.newsList = res.data.data.newsList
        },
        async changeNews(){
            this.id+=10
            if(this.id>30){
                this.id=1
            }
            //console.log(this.id)
            let res = await service.get("/newslist",{
                params:{
                    id:this.id
                }
            })
            this.newsList=res.data.data.newsList
        },
        
    },
    mounted(){
        window.addEventListener('scroll',this.scrollHanlder)
    }
}
</script>

<style lang="scss" scoped>
.show-monitor{
    .detail-hotboard{
        margin-top:10px;
        width: 298px;
        .hot-board{
            width: 298px;
            background: #fff;
            .title-bar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 7px;
                height:28px;
                .title{
                    position: relative;
                    padding-left: 32px;
                    font-size:20px;
                    font-weight:500;
                    line-height:28px;
                    color:#222;
                    cursor: default;
                    &::before{
                        content: "";
                        position: absolute;
                        top:50%;
                        left:0;
                        transform: translateY(-50%);
                        width: 24px;
                        height: 22px;
                        background: url('../assets/imgs/fire.png') no-repeat 50%;
                        background-size: contain;
                    }
                }
                .refresh{
                    position: relative;
                    border:none;
                    padding-left: 20px;
                    font-size:16px;
                    font-weight: 500;
                    line-height:20px;
                    color:#f04142;
                    cursor: pointer;
                    background:transparent;
                    outline: none;
                    &::before{
                        content: "";
                        position:absolute;
                        top:1px;
                        left:0;
                        width: 16px;
                        height: 16px;
                        background:url('../assets/imgs/refresh.png') no-repeat 50%;
                        background-size: contain;
                    }
                }
            }
            a{
                text-decoration: none;
                color:#222;
                background:transparent;
            }
            .article-item{
                display: flex;
                align-items: center;
                padding: 12px 0;
                cursor: pointer;
                .news-index{
                    flex-shrink: 0;
                    margin-right: 8px;
                    width: 24px;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 24px;     
                    color:#999;
                    text-align: center;
                }
                .news-title{
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 16px;
                    line-height: 20px;
                    color:#222;
                    text-overflow: ellipsis;
                    &:hover{
                        color:#f04142;
                    }
                }
            }
        }
    }
}
</style>