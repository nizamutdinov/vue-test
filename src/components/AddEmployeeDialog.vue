<template>
  <div class="dialog__wrap">
    <el-button type="primary" @click="dialogFormVisible = true">Добавить</el-button>

    <el-dialog
      width="500px"
      title="Добавить нового пользователя"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        label-position="left"
        :model="contactForm"
        :rules="rules"
        ref="contactForm"
      >
        <el-form-item class="form__item" label="Имя" prop="name">
          <el-input placeholder="Петров Иван" v-model="contactForm.name"></el-input>
        </el-form-item>

        <el-form-item label="Телефон" prop="phone">
          <el-input
            v-mask="'+7 (###) ###-##-##'"
            placeholder="+7 (123) 456-78-90"
            pattern="\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d"
            v-model="contactForm.phone"
          ></el-input>
        </el-form-item>

        <el-form-item label="Начальник">
          <el-select v-model="contactForm.parentId" placeholder="не выбран">
            <el-option
              :key="chief.name + chief.id"
              v-for="chief in chiefs"
              :label="chief.name"
              :value="chief.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('contactForm')">Добавить</el-button>
        <el-button @click="closeForm('contactForm')">Отмена</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations } = createNamespacedHelpers('employees');


export default {
  name: 'AddEmployeeDialog',
  data: () => ({
    dialogFormVisible: false,
    contactForm: {
      name: '',
      phone: '',
      parentId: '',
    },
    rules: {
      name: [
        { required: true, message: 'Пожалуйста введите имя', trigger: 'blur' },
        { min: 3, max: 20, message: 'Длинна имени должна быть от 3 до 20 символов', trigger: 'blur' },
      ],
      phone: [
        { required: true, message: 'Пожалуйста введите номер телефона', trigger: 'blur' },
        { min: 18, max: 18, message: 'Пожалуйста заполните телефон', trigger: 'blur' },
      ],
    },
  }),
  computed: {
    ...mapGetters(['employees']),
    chiefs() {
      return this.employees;
    },
  },
  methods: {
    ...mapMutations(['addEmployee']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        }
        this.addEmployee({
          ...this.contactForm,
        });

        this.closeForm(formName);
        return true;
      });
    },
    closeForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    },
  },
};
</script>

<style scoped>
  .dialog__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1em 0;
  }
</style>
