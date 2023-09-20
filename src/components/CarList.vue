<script setup>
import CarItem from '@/components/CarItem.vue';

import { useAuto } from '../composable/useAuto';
import { onMounted } from 'vue';
import { useRouter, useRoute} from 'vue-router';


const router = useRouter()

const { autoListRemake, getAutoList } = useAuto()

onMounted(async () =>{
  await getAutoList()
})

function goToCarUrl(id) {
  router.push({name: 'car', params: {id} })
}

</script>


<template>
    <div class="car_info">
        <section class="cars" v-for="auto in autoListRemake" :key="auto">
            <CarItem :auto="auto" @click="goToCarUrl(auto.id)" />
        </section>
    </div>
</template>

<style scoped>
.cars {
  background-color: #ececec;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

</style>