import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookie'
import './assets/icons/iconfont/iconfont.css';
import './plugin/element'

Vue.config.productionTip = false
Vue.use(VueCookie)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
