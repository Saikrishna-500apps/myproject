import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import axios from 

//Vue.prototype.$html=axios
Vue.use(BootstrapVue);
Vue.config.productionTip = false
let vueRoute = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
export default vueRoute