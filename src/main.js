import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/utils/flexible'

Vue.use(Vant)
Vue.filter('formatPlayCount', function (count) {
  if (count > 10000) {
    if (count > 100000000) {
      return Math.ceil(count / 100000000) + '亿'
    } else {
      return Math.ceil(count / 10000) + '万'
    }
  } else {
    return count
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
