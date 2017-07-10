// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

/**
 * Vue Resource
 */
Vue.use(VueResource);

/**
 * Plugins
 */
Vue.use(Vuetify)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
