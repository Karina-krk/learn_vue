<template>
    <div class="favorites">
      <h1>Favourite cars</h1>
      <div v-if="favoriteAutos.length === 0">
        <h2>OOPS something went wrong</h2>
        <p>or your list is empty</p>
      </div>
      <div v-else>
        <div v-for="auto in favoriteAutos" :key="auto.id">
          <CarItem v-if="auto.favorited" :auto="auto" @toggleFavorite="toggleFavorite" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CarItem from '../components/CarItem.vue';
  
  export default {
    name: 'Favorites',
    components: {
      CarItem,
    },
    computed: {
      favoriteAutos() {
        return this.$route.params.favoriteAutos || [];
      },
    },
  };
  </script>
  
  <style scoped>
  @font-face {
    font-family: ljk_Adventure;
    src: url(../assets/ljk_Adventure.ttf);
  }
  .favorites {
    font-family: ljk_Adventure;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-family: ljk_Adventure;
    font-size: 34px;
    margin-bottom: 20px;
  }
  </style>
  