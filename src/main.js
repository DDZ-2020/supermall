import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { request } from './network/request'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

  created() {
    // request({
    //   url: '/home/multidata',
    // }, res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // });

    request({
      url: '/home/multidata'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}).$mount('#app')
