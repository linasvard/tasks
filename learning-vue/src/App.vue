<script setup>
import { computed, ref, watch } from 'vue';
import TodoItem from './components/TodoItem.vue';
import TodoForm from './components/TodoForm.vue';
import TodoFilter from './components/TodoFilter.vue';
const STORAGE_KEY = 'learning-vue-todos';

function load() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

const todos = ref(load());

watch(
  todos,
  (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
  { deep: true },
);

const filter = ref('all');

const filtered = computed(() => {
  if (filter.value === 'active')
    return todos.value.filter((todo) => !todo.done);
  if (filter.value === 'done') return todos.value.filter((todo) => todo.done);
  return todos.value;
});

const remaining = computed(
  () => todos.value.filter((todo) => !todo.done).length,
);

function clearDone() {
  todos.value = todos.value.filter((todo) => !todo.done);
}

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
    <div v-if="todos.length" class="filtering">
      <span>{{ remaining }} tasks left</span>
      <TodoFilter v-model="filter" />
      <button class="link" @click="clearDone">Clear done</button>
    </div>

    <ul v-if="filtered.length" class="list">
      <TodoItem
        v-for="todo in filtered"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @remove="removeTodo"
        @rename="rename" />
    </ul>
    <p v-else class="empty">No tasks yet</p>
  </main>
  <footer>2026 &copy; All rights reserved</footer>
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

.filtering {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.link {
  background: none;
  color: var(--muted);
  padding: 0;
}
.link:hover {
  color: var(--danger);
}
</style>
