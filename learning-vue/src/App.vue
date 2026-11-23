<script setup>
import { ref } from 'vue';
const text = ref('');
const todos = ref([]);

function addTodo() {
  const trimmed = text.value.trim();
  if (!trimmed) return;
  todos.value.push({ id: crypto.randomUUID(), text: trimmed, done: false });
  text.value = '';
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <main class="card">
    <h1>Tasks</h1>
    <form @submit.prevent="addTodo">
      <input v-model="text" placeholder="What to do?" />
      <button :disabled="!text.trim()" type="submit">Add</button>
    </form>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.done }">
        <input type="checkbox" v-model="todo.done" />
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
    <p v-else>No tasks yet</p>
  </main>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: var(--muted);
}
</style>
