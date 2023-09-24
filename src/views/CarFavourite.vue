<template>
    <div class="favorites">
      <h1>Favourites cars</h1>
      <div v-if="favoriteAutos.length === 0">
        <p>OOPS your list is empty</p>
      </div>
      <div v-else>
        <div v-for="auto in favoriteAutos" :key="auto.id">
          <AutoCard :auto="auto" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Favorites',
    computed: {
      favoriteAutos() {
        const favoriteAutos = [];
        return favoriteAutos;
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
  