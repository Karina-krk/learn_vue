<script setup>
import CarItem from '@/components/CarItem.vue';

import { useAuto } from '../composable/useAuto';
import { onMounted } from 'vue';
// import { ref } from "vue";

const { autoListRemake, getAutoList} = useAuto()

onMounted(async () =>{
await getAutoList()
})

</script>


<template>
    <div class="page-container">
      <main>
        <section class="cars" v-for="auto in autoListRemake" :key="auto">
          <div class="car-card">
            <CarItem :auto="auto" />
          </div>
        </section>
      </main>
    </div>
</template>

<style scoped>
.cars {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.car-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 300px; 
}

.car-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.car-details {
  font-size: 14px;
  margin-bottom: 10px;
}

.car-price {
  font-size: 16px;
  font-weight: bold;
  color: #007bff; 
}
</style>