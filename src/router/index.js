import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const home = () => import('../views/home/home.vue')
const cart = () => import('../views/cart/cart.vue')
const sort = () => import('../views/sort/sort.vue')
const profile = () => import('../views/profile/profile.vue')
const detail = () => import('../views/detail/detail.vue')
Vue.use(VueRouter)

const routes = [{
  //默认首页
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  component: home
},
{
  path: '/cart',
  component: cart
},
{
  path: '/sort',
  component: sort
},
{
  path: '/profile',
  component: profile
},
{
  path: '/detail/:iid',
  component: detail
}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router