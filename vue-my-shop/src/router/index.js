import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: () => import('@/components/Login.vue')},
  {
    path: '/home', 
    component: () => import('@/components/Home.vue'),
    redirect: '/welcome',
    children: [
      {path: '/welcome', component: () => import('@/components/Welcome.vue')},
      {path: '/users', component: () => import('@/components/user/Users.vue')},
      {path: '/rights', component: () => import('@/components/power/Rights.vue')},
      {path: '/roles', component: () => import('@/components/power/Roles.vue')},
      {path: '/cates', component: () => import('@/components/goods/Cate.vue')},
      {path: '/list', component: () => import('@/components/goods/List.vue')},
      {path: '/add', component: () => import('@/components/goods/Add.vue')},
      {path: '/params', component: () => import('@/components/goods/Params.vue')},
      {path: '/order', component: () => import('@/components/order/Order.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
