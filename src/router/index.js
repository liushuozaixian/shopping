import Vue from 'vue'
import Router from 'vue-router'

// import Cart from '../pages/cart.vue'
// import Category from '../pages/category.vue'
// import Main from '../pages/main.vue'
// import Usercenter from '../pages/usercenter.vue'

const Cart = () => import('../pages/cart.vue')
const Category = () => import('../pages/category.vue')
const Main = () => import('../pages/main.vue')
const Usercenter = () => import('../pages/usercenter.vue')

import Firstpageg from '../pages/mainrouter/firstpage.vue'
import Firstpageg2 from '../pages/mainrouter/firstpage-2.vue'
import Firstpageg3 from '../pages/mainrouter/firstpage-3.vue'
import Firstpageg4 from '../pages/mainrouter/firstpage-4.vue'
import Firstpageg5 from '../pages/mainrouter/firstpage-5.vue'
import Firstpageg6 from '../pages/mainrouter/firstpage-6.vue'

import Tab1 from '../pages/categoryrouter/tab1.vue'
import Tab2 from '../pages/categoryrouter/tab2.vue'

import Register1 from '../pages/usercenter/register1.vue'
import Register2 from '../pages/usercenter/register2.vue'

import Loginsuccess from '../pages/usercenter/loginsuccess.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '/main',
          redirect: 'firstpage-1'
        },
        {
          path: 'firstpage-1',
          component: Firstpageg
        },
        {
          path: 'firstpage-2',
          component: Firstpageg2
        },
        {
          path: 'firstpage-3',
          component: Firstpageg3
        },
        {
          path: 'firstpage-4',
          component: Firstpageg4
        },
        {
          path: 'firstpage-5',
          component: Firstpageg5
        },
        {
          path: 'firstpage-6',
          component: Firstpageg6
        }
      ]
    },
    {
      path: '/category',
      component: Category,
      children: [
        {
          path: '/category',
          redirect: 'tab1'
        },
        {
          path: 'tab1',
          component: Tab1
        },
        {
          path: 'tab2',
          component: Tab2
        }
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/usercenter',
      component: Usercenter
    },
    {
      path: '/register1',
      component: Register1
    },
    {
      path: '/register2',
      component: Register2
    },
    {
      path: '/loginsuccess',
      component: Loginsuccess
    },
  ]
})
