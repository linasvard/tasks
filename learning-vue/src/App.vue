<script setup>
import TodoItem from './components/TodoItem.vue';
import TodoForm from './components/TodoForm.vue';
import TodoFilter from './components/TodoFilter.vue';
import { useTodos } from './composables/useTodos';

const {
  todos,
  addTodo,
  toggleTodo,
  removeTodo,
  rename,
  clearDone,
  filter,
  filtered,
  remaining,
} = useTodos();
</script>

<template>
  <main class="card">
    <h1>My tasks</h1>
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
  <footer class="site-footer">2026 &copy; All rights reserved</footer>
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
.site-footer {
  margin-top: auto;
  padding-top: 2rem;
  font-size: 0.85rem;
  color: var(--muted);
}
</style>
