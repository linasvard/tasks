<script setup>
import { ref } from 'vue';
import TodoItem from './components/TodoItem.vue';
import TodoForm from './components/TodoForm.vue';

const todos = ref([]);

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  todos.value.push({ id: crypto.randomUUID(), text: trimmed, done: false });
}

function toggleTodo(id) {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
}

function rename(id, text) {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo && text.trim()) todo.text = text.trim();
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <main class="card">
    <h1>Tasks</h1>
    <TodoForm @add="addTodo" />
    <ul v-if="todos.length" class="list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @remove="removeTodo"
        @rename="rename" />
    </ul>
    <p v-else class="empty">No tasks yet</p>
  </main>
</template>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}
.empty {
  color: var(--muted);
  text-align: center;
  margin: 2rem 0 1rem;
}
</style>
