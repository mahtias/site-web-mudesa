import Vue from 'vue'
import App from './App.vue'
//import App from './App.vue'
import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import router from './routes'
import store from './vuex/store'
import vuetify from './plugins/vuetify'
import VueLoading from 'vuejs-loading-plugin'
import Notifications from 'vue-notification'
import VueGallerySlideshow from 'vue-gallery-slideshow'
import 'iview/dist/styles/iview.css';
import Iview from "iview"
Vue.use(Iview)
Vue.use(Notifications)
//import vuetify from '/plugins/vuetify'
 Vue.use(VueGallerySlideshow)
Vue.config.productionTip = false
Vue.use(VueLoading, {
    dark: true, // default false
    text: 'Patientez ...', // default 'Loading'
    //loading: true, // default false
   // background: 'rgb(255,255,255)', // set custom background
  })
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