<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps({ todo: { type: Object, required: true } });

const emit = defineEmits(['toggle', 'remove', 'rename']);

const editing = ref(false);
const draft = ref('');
const input = ref(null);

async function startEdit() {
  draft.value = props.todo.text;
  editing.value = true;
  await nextTick();
  input.value?.focus();
}

function save() {
  if (!editing.value) return;
  emit('rename', props.todo.id, draft.value);
  editing.value = false;
}
</script>

<template>
  <li class="todo-item" :class="{ done: todo.done }">
    <input
      type="checkbox"
      :checked="todo.done"
      @change="emit('toggle', todo.id)" />
    <input
      v-if="editing"
      class="edit"
      ref="input"
      v-model="draft"
      @keyup.enter="save"
      @blur="save"
      @keyup.esc="editing = false" />
    <span
      v-else
      class="text"
      title="Double click to edit"
      @dblclick="startEdit"
      >{{ todo.text }}</span
    >
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

.edit {
  flex: 1;
  padding: 0.2rem 0.5rem;
}
</style>
