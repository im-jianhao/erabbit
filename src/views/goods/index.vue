<template>
  <div>{{ foo }}</div>
</template>

<script setup>
import { ref } from 'vue'
const foo = ref(1)
setTimeout(() => {
  foo.value = 100
}, 1000)
</script>
