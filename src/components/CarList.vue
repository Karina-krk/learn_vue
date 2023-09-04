<script setup>
import CarItem from '@/components/CarItem.vue';
import {defineProps} from 'vue'
 
  defineProps ({
    cars: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <div class="page-container">
    <header>Cars.com</header>
    <nav>Contact us</nav>
    <main>
      <section class="cars" v-for="car in cars" :key="car">
        <CarItem :car="car" />
    </section>
    </main>
    <footer>About Us</footer>
  </div>
</template>

<style scoped>
  .page-container {
    background-color: #dfdddd;
    color: #333;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header {
    background-color: #635958;
    color: white;
    height: 60px;
    padding: 10px 0;
    font-size: 50px;
  }

  nav {
    background-color: #e1cdca;
    color: rgb(92, 92, 92);
    padding: 10px 0;
    font-size: large;
  }

  main {
    flex-grow: 1; 
    padding: 20px;
  }

  footer {
    background-color: #635958;
    color: white;
    padding: 10px 0;
  }
</style>