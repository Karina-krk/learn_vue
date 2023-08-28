<script setup>
import CarItem from '@/components/CarItem.vue';

    const carsArray = [
  {
    brand: "BMW",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s"
  },
]
</script>

<template>
    <section class="cars" v-for="car in carsArray" :key="car">
        <CarItem :car="car" />
    </section>
</template>

<style scoped></style>