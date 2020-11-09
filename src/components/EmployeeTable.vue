<template>
  <div class="table__wrapper">
    <el-table
      class="table"
      :data="employeesTree"
      style="width: 100%"
      height="40vh"
      row-key="id"
      border
      >
      <el-table-column
        prop="name"
        label="Имя"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="Телефон"
        sortable
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('employees');

export default {
  name: 'EmployeeTable',
  data: () => ({
  }),
  computed: {
    ...mapGetters(['employeesTree']),
  },
};
</script>

<style scoped>
  .table__wrapper {
    width: 500px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }
  .table__wrapper:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,0.5);
  }

  .table {
    height: 100%;
    width: 100%;
  }
</style>
