import { v4 as uniqueIdGenerator } from 'uuid';
import Vue from 'vue';
import listToTree from '../../utils/tree';

export const employees = {
  namespaced: true,
  state: {
    employees: [],
  },
  mutations: {
    /**
     * adds an initial state
     * @param state
     * @param {object[]} payload
     */
    init(state, payload) {
      if (state.employees.length === 0) {
        state.employees = [...payload];
      }
    },
    /**
     * adds an employee to store
     * @param state
     * @param { name: string, phone: string, parentId: string } payload
     */
    addEmployee: (state, payload) => {
      const id = uniqueIdGenerator();
      state.employees.push({ ...payload, id });
    },
    /**
     * Remove specified employee from store
     * @param state
     * @param {string} id
     */
    removeEmployee: (state, id) => {
      if (state.employees.some(employee => employee.parentId === id)) {
        Vue.prototype.$message.error('Нельзя уволить. У него есть подчиненные. (');
        return;
      }

      Vue.prototype.$message({
        message: 'Уволен',
        type: 'success',
      });
      state.employees = state.employees.filter(employee => employee.id !== id);
    },
  },
  getters: {
    employeesTree: state => listToTree(state.employees),
    employees: state => state.employees,
  },
  actions: {
    /**
     * Fetch users for initial state
     */
    init({ commit }) {
      fetch('/static/users.json')
        .then(response => response.json())
        .then((users) => {
          commit('init', users);
        })
        .catch();
    },
  },
};

