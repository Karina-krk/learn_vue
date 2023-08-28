<script setup>
    const props = defineProps({
        car: {
            type: Object,
            required: true,
        },
    })
</script>

<template>
    <div class="car">
      <img :src="car.image" alt="car" />
      <h2>{{ car.brand }}</h2>
      <p>Цена: {{ car.price }}</p>
      <p>Год выпуска: {{ car.year }}</p>
      <p>Объем двигателя: {{ car.volume }}</p>
      <p>Цвет: {{ car.color }}</p>
    </div>
  </template>

<style scoped></style>