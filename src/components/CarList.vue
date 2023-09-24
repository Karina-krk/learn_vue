<script setup>
import CarItem from '@/components/CarItem.vue'
import { onMounted } from 'vue'
import { useAuto } from '../composable/useAuto'
import { useRouter } from 'vue-router'

const router = useRouter()
const { autoListRemake, getAutoList } = useAuto()

onMounted(async () => {
  await getAutoList()
})

function goToCarUrl(id) {
  router.push({ name: 'car', params: { id } })
}
</script>

<template>
  <div class="car_info">
    <section class="cars" v-for="auto in autoListRemake" :key="auto">
      <CarItem :auto="auto" @click.stop="goToCarUrl(auto.id)" :price="auto.price" />
    </section>
  </div>
</template>

<style scoped>

:deep(.p-card) {
  transform: perspective(1000px) !important;
  position: relative !important;
}

:deep(.p-card):hover {
  animation: transform 1s ease-in-out !important;
  cursor: pointer;
  transform: scale(1.1) !important;
}

@keyframes transform {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.car_info {
  background-color: #eceaea; 
  width: 100%;
  border: 0 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.cars {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
}
</style>