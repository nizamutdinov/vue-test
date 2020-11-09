import { v4 as uniqueIdGenerator } from 'uuid';
import listToTree from '../../utils/tree';

export const employees = {
  namespaced: true,
  state: {
    employees: [],
  },
  mutations: {
    init(state, payload) {
      if (state.employees.length === 0) {
        state.employees = [...payload];
      }
    },
    addEmployee: (state, payload) => {
      const id = uniqueIdGenerator();
      state.employees.push({ ...payload, id });
    },
    removeEmployee: (state, id) => {
      state.employees = state.employees.filter(employee => employee.id !== id);
    },
  },
  getters: {
    employeesTree: state => listToTree(state.employees),
    employees: state => state.employees,
  },
  actions: {
    init({ commit }) {
      fetch('/static/users.json')
        .then(response => response.json())
        .then((users) => {
          console.log(users);
          commit('init', users);
        })
        .catch();
    },
  },
};

