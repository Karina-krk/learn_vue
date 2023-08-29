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

<style scoped>
  .car {
    background-color: rgb(240, 222, 220);
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

  }

  .car:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .car img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .car h2 {
    margin: 0;
    font-size: 20px;
    color: #181818;
  }

  .characteristic {
    margin: 8px 0;
    font-size: 14px;
    color: #666;
  }
</style>