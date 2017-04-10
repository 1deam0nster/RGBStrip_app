import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import vueResource from 'vue-resource';

Vue.use(Vuetify)
Vue.use(vueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
