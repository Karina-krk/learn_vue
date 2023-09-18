
<script setup>
import { defineProps, computed } from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

defineProps({
  auto: {
    type: Object,
    required: true,
  },
})


function changeColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
  if (crappyColors.includes(color)) {
    return true
  }
  return false
}
</script>

<template>
  <Card>
    <template #header>
      <img alt="no-car" class="car-image" :src="auto.image" />
    </template>

    <template #title> {{ auto.brand }} </template>

    <template #content>

      <p>Цена: {{ auto.price }}</p>
      <p>Год выпуска: {{ auto.year }}</p>
      <p>Объем двигателя: {{ auto.volume }}</p>
      <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
    </template>
    <template #footer>
      <Chip v-if="Number(auto.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip icon="pi pi-history" label="Старый" v-else-if="Number(auto.year) <= 1960" />
      <Chip icon="pi pi-briefcase" label="Скучный" v-else />
      <Chip icon="pi pi-eye-slash" label="Конченный цвет" v-if="changeColor(auto.color)" />
    </template>
  </Card>
</template>


<style >
body {
  text-align: center;
}

.chipes span{
  padding: 5px;
  color: red;
}

.car-image {
  width: 250px;
  height: 150px;
}

</style>
