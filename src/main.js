import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faGithubAlt, faVuejs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithubAlt, faVuejs);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')