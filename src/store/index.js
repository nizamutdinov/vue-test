import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { employees } from './modules/employees';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { employees },
  actions: {
    init({ dispatch }) {
      dispatch('employees/init');
    },
  },
  plugins: [createPersistedState()],
});

// eslint-disable-next-line no-return-await
(async () => await store.dispatch('init'))();

export default store;
