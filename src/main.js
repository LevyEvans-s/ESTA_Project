import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 按需引入 ElementUI 相应组件
import "./plugin/element";

// 程序员三大法则
// 第一： 能少写一个字母就少写一个字母，开发不是为了秀技术，是为了解决问题，是为了方便维护，方便沟通
// 第二： 写程序，7成的时间是想清楚写什么，3成的时间下笔如神助
// 第三： 注释一定要能多写就多写，这样的话，你的代码，别人很快就能上手
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
