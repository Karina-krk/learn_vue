<script setup>

import ButtonDelete from '@/components/ButtonDelete.vue'
import CarList from '@/components/CarList.vue';
import CarTable from './components/CarTable.vue';
import Navbar from './components/layouts/Navbar.vue';


  const cars = [
  {
    brand: "BMW",
    price: "20000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s",
    criticalNumber: 1
  },
  {
    brand: "Cadillac",
    price: "20000000",
    year: 2023,
    volume: 6.2,
    color: "#000000",
    image: "https://cdn.motor1.com/images/mgl/lNnnl/s1/4x3/cadillac-escalade-sport-edition.webp",
    criticalNumber: 2
  },
]

</script>

<template>  
  <Navbar />
  <ButtonDelete />
  <CarList :cars="cars" />
  <CarTable :cars="cars" />
</template>

<style scoped></style>
