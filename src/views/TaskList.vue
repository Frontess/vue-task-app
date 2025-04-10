<template>
  <div>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @update-task="updateTask"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";
import taskStore from "../store/tasks"; // Подключение модуля tasks.js

export default {
  components: {
    TaskItem,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      const response = await fetch("/tasks.json");
      const loadedTasks = await response.json();
      const savedTasks = taskStore.loadTasks(); // Загружаем состояние из localStorage

      // Если есть сохранённые данные, используем их, иначе — исходные задачи
      this.tasks = savedTasks || loadedTasks;
    },
    updateTask(updatedTask) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      this.tasks[index] = updatedTask;
      taskStore.saveTasks(this.tasks); // Сохраняем обновлённое состояние задач
    },
  },
  mounted() {
    this.fetchTasks(); // Подгружаем задачи при загрузке компонента
  },
};
</script>
