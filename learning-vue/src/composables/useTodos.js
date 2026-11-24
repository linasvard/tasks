import { computed, ref, watch } from 'vue';
const STORAGE_KEY = 'learning-vue-todos';

function load() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function useTodos() {
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
  return {
    todos,
    filter,
    filtered,
    remaining,
    clearDone,
    addTodo,
    toggleTodo,
    rename,
    removeTodo,
  };
}
