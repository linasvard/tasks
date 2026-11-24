<script setup>
const filter = defineModel({ type: String, default: 'all' });
const options = ['all', 'active', 'done'];
</script>

<template>
  <div class="filters" role="group" aria-label="Filter tasks">
    <button
      v-for="option in options"
      :key="option"
      :class="{ active: filter === option }"
      @click="filter = option">
      {{ option }}
    </button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 0.5rem;
}
button {
  background: none;
  color: var(--muted);
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
}

button.active {
  color: var(--accent);
  outline: 1px solid var(--accent);
}
</style>
