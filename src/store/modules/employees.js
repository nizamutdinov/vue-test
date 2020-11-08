import { v4 as uniqueIdGenerator } from 'uuid';
import listToTree from '../../utils/tree';

export const employees = {
  namespaced: true,
  state: {
    employees:
      [
        {
          id: 0,
          name: 'Семёнов Андрей',
          phone: '+711223344556677',
        },
        {
          id: 1,
          name: 'Петров Петр',
          phone: '+7990011223344',
        },
        {
          id: 2,
          name: 'Кузьмин Максим',
          phone: '+755555555555',
        },
        {
          id: 3,
          name: 'Волков Никита',
          phone: '+700000000000',
        },
        {
          id: 4,
          name: 'Шульц Антон',
          phone: '+7889900112233',
        },
        {
          id: 5,
          name: 'Новиков Ефрем',
          phone: '+777777777777',
        },
        {
          id: 6,
          name: 'Жуков Тимур',
          phone: '+72222222222',
        },
        {
          id: 7,
          name: 'Лыткина Людмила',
          phone: '+75555555555',
        },
        {
          id: 8,
          name: 'Казакова Оксана',
          phone: '+733333333333',
        },
        {
          id: 9,
          name: 'Марочко Юлия',
          phone: '+799999999999',
        },
        {
          id: 10,
          name: 'Самойлова Диана',
          phone: '+7556677889900',
        },
        {
          id: 11,
          name: 'Гуляева Дарья',
          phone: '+711111111111',
        },
        {
          id: 12,
          name: 'Петров Иван',
          phone: '+78888888888888',
        },
        {
          id: 13,
          name: 'Круглецова Анастасия',
          phone: '+744444444444',
        },
        {
          id: 14,
          name: 'Олег Кузнецов',
          phone: null,
        },
        {
          id: 15,
          name: 'Артур',
          phone: '+799999999999',
        },
      ],
  },
  mutations: {
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
  },
};