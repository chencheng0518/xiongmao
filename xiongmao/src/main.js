import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
// 引入全局样式表
import './assets/Style/allStyle.css'
// 引入lodash库，（ _.）
import lodash from 'lodash'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入swiper样式表
import 'swiper/css/swiper.css'
// 全局注册swiper
Vue.use(VueAwesomeSwiper/* { default options with global component } */)

// 在vue原型绑定lodash
Vue.prototype._ = lodash

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
