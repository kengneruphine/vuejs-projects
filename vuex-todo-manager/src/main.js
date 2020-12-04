import Vue from 'vue'
import App from './App.vue'
import store from './store';  //bringing in our store

Vue.config.productionTip = false

new Vue({
  store,   //adding the store to the vue instance
  render: h => h(App),
}).$mount('#app')
