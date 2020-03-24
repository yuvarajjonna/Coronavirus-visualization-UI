// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise';
import 'core-js/es6/string';
import 'core-js/es7/array';

import CoreuiVueCharts from '@coreui/vue-chartjs';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Vuex from 'vuex';

import App from './App';
import router from './router';

// import cssVars from 'css-vars-ponyfill'
// todo
// cssVars()
Vue.use(CoreuiVueCharts)
Vue.use(BootstrapVue)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
