<script setup>
// import ButtonDelete from "@/components/ButtonDelete.vue"; 
import CarList from "@/components/CarList.vue";
import CarTable from "@/components/CarTable.vue";
import Navbar from "./components/layouts/Navbar.vue";
import CarAddModal from "./components/CarAddModal.vue";
import {ref} from 'vue'


</script>

<template>
  <Navbar />
  <CarAddModal />
  <CarList />
  <CarTable />
</template>

<style scoped>


</style>
