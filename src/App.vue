<template>
  <div class="app" id="app">
    <h1 class="heading">Телефонная книга<br> сотрудников</h1>
    <main class="app__inner">
      <AddEmployeeDialog/>
      <EmployeeTable/>
    </main>
    <footer class="footer">
      <p>Test app <a href="https://roistat.com/ru/">roistat</a></p>
    </footer>
  </div>
</template>

<script>

import EmployeeTable from './components/EmployeeTable';
import AddEmployeeDialog from './components/AddEmployeeDialog';

export default {
  name: 'App',
  components: {
    AddEmployeeDialog,
    EmployeeTable,
  },
};
</script>

<style scoped>
.heading {
  font-size: 1.5em;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
}
.footer {
  margin-top: 2em;
}
.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app__inner {
  display: flex;
  flex-direction: column;
}
</style>
