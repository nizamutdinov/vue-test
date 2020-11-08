import Vue from 'vue';
import Vuex from 'vuex';
import { employees } from './modules/employees';

Vue.use(Vuex);

const index = new Vuex.Store({
  modules: { employees },
});

export default index;
