import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// import VueRouter from 'vue-router'
// import Routes from './router/index.js'


// Vue.use(VueRouter)
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// const router = new VueRouter({
//   routes: Routes
// })

new Vue({
  el:'#app',
  router,
  render: h => h(App),
  // router: router
}).$mount('#app')
