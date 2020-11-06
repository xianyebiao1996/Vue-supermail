import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入VUEx
import store from './store'
// 导入解决移动端300ms问题
import Fastclick from 'fastclick'
// 图片懒加载
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 导入解决移动端300ms问题
Fastclick.attach(document.body)
// 懒加载使用
Vue.use(lazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')