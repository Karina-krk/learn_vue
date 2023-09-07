<script setup>

import ButtonDelete from '@/components/ButtonDelete.vue'
import CarList from '@/components/CarList.vue';
import CarTable from './components/CarTable.vue';
import Navbar from './components/layouts/Navbar.vue';
import Sidebar from 'primevue/sidebar';


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
  {
    brand: "Maybach",
    price: "22000000",
    year: 2023,
    volume: 5.9,
    color: "#200403",
    image: "https://media.ed.edmunds-media.com/mercedes-benz/maybach/2022/oem/2022_mercedes-benz_maybach_sedan_s-680-4matic_fq_oem_2_1600.jpg",
    criticalNumber: 3
  },
  {
    brand: "Lexus",
    price: "10000000",
    year: 2023,
    volume: 6.0,
    color: "#272A31",
    image: "https://images.drive.ru/i/0/5f882a61ec05c4fe2d00002f.jpg",
    criticalNumber: 4
  },
  {
    brand: "Toyota",
    price: "10000000",
    year: 2023,
    volume: 5.4,
    color: "#000000",
    image: "https://toyota.com.ua/uploads/fastUpload/toyota-hybrid-istoriya-rozvitku-ta-cikavi-fakti-1-1600x900tcm-3046-1766941.jpg.webp",
    criticalNumber: 5
  },
]

</script>

<template> 
  <Sidebar /> 
  <Navbar />
  <ButtonDelete />
  <CarList :cars="cars" />
  <CarTable :cars="cars" />
</template>

<style scoped></style>
