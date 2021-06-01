import Vue from 'vue'
import App from './App.vue'
//import App from './App.vue'
import router from './routes'
import store from './vuex/store'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
const app = new Vue({
  // el: '#app',
   router,
   store,
   render: h => h(App)
 }).$mount("#app");
 store.$app = app;