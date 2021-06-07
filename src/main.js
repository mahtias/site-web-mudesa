import Vue from 'vue'
import App from './App.vue'
//import App from './App.vue'
import router from './routes'
import store from './vuex/store'
import vuetify from './plugins/vuetify'
//import vuetify from '/plugins/vuetify'

Vue.config.productionTip = false
//Vue.use(vuetify)
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
const app = new Vue({
 // el: '#app',
 router,

 store,
 vuetify,
 render: h => h(App)
}).$mount("#app");
store.$app = app;