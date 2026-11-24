<script setup>
import { ref } from 'vue';

const text = ref('');
const emit = defineEmits(['add']);

function submit() {
  emit('add', text.value);
  text.value = '';
}
</script>

<template>
  <form class="todo-form" @submit.prevent="submit">
    <input v-model="text" placeholder="What to do?" aria-label="New task" />

    <button :disabled="!text.trim()" type="submit">Add</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 0.5rem;
}
input {
  flex: 1;
}
</style>
