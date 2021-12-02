<template>
    <div class="show-monitor">
        <div class="hot-video">
            <div class="video-header">
                <div class="header">
                    <img src="../assets/imgs/video.png" alt="">
                    学习视频
                </div>
                <button class="right">
                    <img src="../assets/imgs/refresh.png" alt="">
                    <span @click="changeVideos">换一换</span>
                </button>
            </div>
            <div class="video-list">
                <div class="video-item" v-for="(item,index) in videoList" :key=index>
                    <a :href="item.url_v" class="left-img">
                        <i class="pic">
                            <img :src="item.url_p" alt="" style="width:100%;height:100%;">
                        </i>
                    </a>
                    <div class="right-content">
                        <a :href="item.url_v" class="title" target="_blank" v-text="item.title"></a>
                        <p class="info">
                            {{item.publishTime}}
                        </p>
                    </div>
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
            videoList:[],
            id:1
        }
    },
    methods:{
        async getVideoList(){
            // let res = await this.$axios.get("/data?num=5")
            let res=await service.get('/videolist',{
                params:{
                    id:this.id
                }
            })
            this.videoList=res.data.data.videoList
        },
        async changeVideos(){
            this.id+=5
            if(this.id>70){
                this.id=1
            }
            let res = await service.get("/videolist",{
                params:{
                    id:this.id
                }
            })
            this.videoList=res.data.data.videoList
            console.log(this.videoList)
        }
    },
    created(){
        this.getVideoList()
    }
}
</script>

<style lang="scss" scoped>
.show-monitor{
    .hot-video{
        width: 298px;
        height: 556px;
        margin-top: 46px;
        .video-header{
            margin-bottom:8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header{
                font-size: 20px;
                line-height: 28px;
                font-weight:500;
                color:#222;
                img{
                    width: auto;
                    height: 22px;
                    margin-right: 8px;
                    margin-bottom: -4px;
                }     
            }
            .right{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    border: none;
                    background:none;
                    img{
                        width: 16px;
                        height: 16px;
                        transition:all .3s;
                    }
                    span{
                        font-size: 16px;
                        line-height: 20px;
                        font-weight: 500;
                        color:#f04142;
                        margin-left:4px;
                    }
                }
        }
        .video-list{
            .video-item{
                padding:16px 0;
                overflow: hidden;
                .left-img{
                    width: 96px;
                    height: 72px;
                    margin-right:12px;
                    border-radius: 4px;
                    overflow: hidden;
                    float: left;
                    position: relative;
                    .pic{
                        display: block;
                        box-sizing: border-box;
                        border: 1px solid #f2f2f2;
                        border-radius: 4px;
                        width:100%;
                        height: 100%;
                        background-size: cover;
                        background-position: 50%;
                    }
                }
                .right-content{
                    height: 72px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .title{
                        max-height: 44px;
                        font-size: 16px;
                        line-height:22px;
                        color:#222;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .info{
                        font-size: 14px;
                        line-height: 20px;
                        color:#999;
                    }
                }
            }
        }
    }
}
</style>