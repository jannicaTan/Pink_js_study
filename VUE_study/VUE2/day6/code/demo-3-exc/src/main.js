import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://8.140.113.169:8080'
// axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
