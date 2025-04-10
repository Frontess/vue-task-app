<template>
  <li>
    <label>
      <input type="checkbox" v-model="task.done" @change="updateTask" />
      {{ task.title }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  methods: {
    updateTask() {
      this.$emit("update-task", this.task);
    },
  },
};
</script>
