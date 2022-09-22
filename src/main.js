import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
