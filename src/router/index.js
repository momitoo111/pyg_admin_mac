import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import Welcome from '@/components/welcome'
import Users from '@/components/Users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // 重定向
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      // 二级路由的配置 将会在home组件下使用
      children: [
        {path: '/welcome', name: 'welcome', component: Welcome},
        {path: '/users', name: 'users', component: Users}
      ]
    }
  ]
})
// 导航卫士
router.beforeEach((to, from, next) => {
  // 1.如果现在跳转的是登陆页面 放行
  if (to.path === '/login') return next()
  // 2.如果现在未登陆（sessionStrage是否有token），拦截到登陆
  if (!sessionStorage.getItem('token')) return next('/login')
  // 其他情况
  next()
})
export default router
