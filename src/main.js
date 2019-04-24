import Vue from 'vue'
import App from './App'
import router from './router'
import axio from './http'
// 全局依赖global
import './assets/css/global.css'
// 全局依赖element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局以来字体图标
import './assets/fonts/iconfont.css'
Vue.use(ElementUI, {size: 'small'})
Vue.config.productionTip = false

// 挂载到vue实例里面
Vue.prototype.$http = axio
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
