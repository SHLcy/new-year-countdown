// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header, Tabbar, TabItem, Swipe, SwipeItem, Button } from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/js/mui.js'
import './lib/mui/css/icons-extra.css'
// 时间格式化插件：moment
import moment from 'moment'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

Vue.config.productionTip = false

// 定义全局时间过滤器
Vue.filter('timeFormat', function (data, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(data).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
