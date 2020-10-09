import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* https://github.com/filoxo/vue-visible-focus */
//Vue visible focus, prevents focus on click but retains tab focusing
import FocusVisible from "vue-visible-focus"
Vue.component("focus-visible", FocusVisible)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //Loads local storage
  beforeCreate() { this.$store.commit('initialiseStore'); },

  render: h => h(App)
}).$mount('#app')
