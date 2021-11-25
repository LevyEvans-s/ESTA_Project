import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 按需引入 ElementUI 相应组件
import "./plugin/element";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
