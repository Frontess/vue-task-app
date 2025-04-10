const TASKS_STORAGE_KEY = "tasks"; // Ключ для хранения данных в localStorage

export default {
  saveTasks(tasks) {
    // Сохранение списка задач в localStorage
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  },
  loadTasks() {
    try {
      const savedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : null;
    } catch (error) {
      console.error("Ошибка загрузки данных из localStorage:", error);
      return null;
    }
  },
};
