import Vue from 'vue';
import App from './App';
import store from './store';
import './plugins/elementUI';
import './plugins/v-mask';
import './styles/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
