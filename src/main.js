
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import VDistpicker from 'v-distpicker'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import store from './store/index'
import '../static/css/reset.css'
//图标
import './common/fonts/iconfont'
import './common/css/icon.css'

import loading from './common/img/222.gif'
import error from './common/img/6.jpg'

Vue.use(VueScroller)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error,
  loading,
  attempt: 1
})

Vue.component('v-distpicker', VDistpicker)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
