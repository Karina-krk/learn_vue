<template>
  <Card class="car-card">
    <template #header>
      <img alt="no-car" class="car-image" :src="auto.image" />
    </template>

    <template #title> {{ auto.brand }} </template>

    <template #content>
      <div class="car-details">
        <p>Цена: {{ auto.price }}</p>
        <p>Год выпуска: {{ auto.year }}</p>
        <p>Объем двигателя: {{ auto.volume }}</p>
        <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
      </div>
    </template>
    
    <template #footer>
      <div class="chips">
        <Chip v-if="Number(auto.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" class="expensive" />
        <Chip icon="pi pi-history" label="Старый" v-else-if="Number(auto.year) <= 1960" class="old" />
        <Chip icon="pi pi-briefcase" label="Скучный" v-else class="boring" />
        <Chip icon="pi pi-eye-slash" label="Конченный цвет" v-if="changeColor(auto.color)" class="ugly" />
      </div>
      <div class="like-dislike">
        <i class="pi pi-thumbs-up" @click="like" :class="{ 'liked': liked }" @input="$emit " />
        <span>{{ likes }}</span>
        <i class="pi pi-thumbs-down" @click="dislike" :class="{ 'disliked': disliked }" />
        <span>{{ dislikes }}</span>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

defineProps({
  auto: {
    type: Object,
    required: true,
  },
})

const liked = ref(false)
const disliked = ref(false)
const likes = ref(0)
const dislikes = ref(0)

function changeColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
  if (crappyColors.includes(color)) {
    return true
  }
  return false
}

function like() {
  if (!liked.value) {
    liked.value = true
    dislikes.value = 0
    likes.value = 1
  } else {
    liked.value = false
    likes.value = 0
  }
}

function dislike() {
  if (!disliked.value) {
    disliked.value = true
    likes.value = 0
    dislikes.value = 1
  } else {
    disliked.value = false
    dislikes.value = 0
  }
}
</script>

<style scoped>
.car-card {
  width: 500px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
}

.car-card:hover {
  transform: scale(1.02);
}

.car-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.car-details {
  padding: 16px;
  text-align: left;
}

.car-details p {
  font-size: 16px;
  margin: 4px 0;
}

.chips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

.chip.expensive {
  background-color: #FF5733;
  color: #fff;
}

.chip.old {
  background-color: #7E7E7E;
  color: #fff;
}

.chip.boring {
  background-color: #3399FF;
  color: #fff;
}

.chip.ugly {
  background-color: #FF0000;
  color: #fff;
}

.like-dislike {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
}

.like-dislike i {
  cursor: pointer;
}

.like-dislike .liked {
  color: green;
}

.like-dislike .disliked {
  color: red;
}
</style>
