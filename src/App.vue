<script setup>
  import {ref} from 'vue'
  const counter = ref(0)

  const increase = () => {
    counter.value++
  }

  const decrease = () => {
    counter.value--
  }

</script>

<template>
  <div class="test">
    {{ counter }}
    <button @click="increase">Увеличить</button>
    <button @click="decrease">Уменьшить</button>
  </div>
</template>

<style scoped>

</style>
