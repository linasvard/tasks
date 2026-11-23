<script setup>
import { ref } from 'vue';
const text = ref('');
</script>

<template>
  <main>
    <h1>Tasks</h1>
    <input v-model="text" placeholder="What to do?" />
    <p>You want to: {{ text }}</p>
  </main>
</template>
