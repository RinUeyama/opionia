import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import VueCodeHighlight from 'vue-code-highlight'
import '../node_modules/vue-code-highlight/themes/prism-coy.css'
Vue.use(VueCodeHighlight)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
