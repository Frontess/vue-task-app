<template>
  <div id="app">
    <h1>Список задач</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "./views/TaskList.vue";

export default {
  components: {
    TaskList,
  },
};
</script>
