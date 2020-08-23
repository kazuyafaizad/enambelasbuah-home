import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret)
library.add(
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
