import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.css'
import './assets/css/animation.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight, faChevronLeft, faTimes)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
