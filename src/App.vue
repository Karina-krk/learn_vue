<script setup>
import Navbar from './components/layouts/Navbar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/layouts/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>