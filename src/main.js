import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import vueResource from 'vue-resource'

// Vue resource config
Vue.use(vueResource);
Vue.http.options.root = 'https://api.covid19api.com/';



import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {});




// icons
import 'material-icons/iconfont/material-icons.css';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
