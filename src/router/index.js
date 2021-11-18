import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login&register/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login&register/register.vue')
  }
]

const router = new VueRouter({
  routes
})

//全局前置路由守卫
// router.beforeEach((to,from,next) => {
//   if (to.path === '/home') {
//     const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
