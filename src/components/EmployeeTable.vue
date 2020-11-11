<template>
  <div class="table__wrapper">
    <el-table
      class="table"
      :data="employeesTree"
      style="width: 100%"
      height="45vh"
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
      <el-table-column
        v-slot="scope" width="50">
        <el-button
          @click.native.prevent="deleteRow(scope, employeesTree)"
          type="danger"
          size="mini"
          icon="el-icon-delete"
          circle>
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations, mapState } = createNamespacedHelpers('employees');

export default {
  name: 'EmployeeTable',
  data: () => ({
  }),
  methods: {
    ...mapMutations(['removeEmployee']),
    deleteRow(context) {
      const userId = context.row.id;
      this.removeEmployee(userId);
    },
  },
  computed: {
    ...mapGetters(['employeesTree']),
    ...mapState(['employees']),
  },
};
</script>

<style scoped>
  .table__wrapper {
    width: 600px;
    max-width: 90vw;
    min-width: 40vw;
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
