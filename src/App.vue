<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getUserInfo} from '@/api/api.js'
export default {
  name: 'App',
  methods:{
    getUser(){
        getUserInfo().then(res=>{
          /**
           * to-do 用户信息保存到Vuex里
           */
        })
    }
  },
  mounted(){
    this.getUser() //页面一刷新就拉取用户信息
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
