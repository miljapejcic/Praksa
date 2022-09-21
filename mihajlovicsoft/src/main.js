import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueHorizontal from "vue-horizontal";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false

Vue.component(VueHorizontal)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // router: router
}).$mount('#app')
