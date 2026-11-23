<script setup>
const props = defineProps({ todo: { type: Object, required: true } });

const emit = defineEmits(['toggle', 'remove']);
</script>

<template>
  <li class="todo-item" :class="{ done: todo.done }">
    <input
      type="checkbox"
      :checked="todo.done"
      @change="emit('toggle', todo.id)" />
    <span class="text">{{ todo.text }}</span>
    <button
      class="remove"
      aria-label="Delete task"
      @click="emit('remove', todo.id)">
      ✕
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.5rem;
  border-bottom: 1px solid var(--border);
}
.text {
  flex: 1;
}
.done .text {
  text-decoration: line-through;
  color: var(--muted);
}
.remove {
  background: none;
  color: var(--muted);
  padding: 0.2rem 0.5rem;
}
.remove:hover {
  color: var(--danger);
}
</style>
