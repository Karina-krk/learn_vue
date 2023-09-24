<template>
  <div>
    <div class="page-content">
      <div class="centered-icon">
        <i v-if="!isPageLoaded" class="pi pi-spin pi-truck" style="font-size: 2rem;"></i>
      </div>
      <h2 class="gallery-logo">AutoXpress</h2>
      <h3>We will help you and your car</h3>
      <div class="gallery">
        <div class="gallery-item">
          <img src="../assets/img1.jpg" alt="Image 1" />
        </div>
        <div class="gallery-item">
          <img src="../assets/img3.png" alt="Image 3" />
        </div>
        <div class="gallery-item">
          <img src="../assets/img2.png" alt="Image 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
import { ref, onMounted } from 'vue';

const isPageLoaded = ref(false);

onMounted(() => {
  isPageLoaded.value = true;
});
</script>

<style scoped>
.centered-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@font-face {
  font-family: ljk_Adventure;
  src: url(../assets/ljk_Adventure.ttf);
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.gallery-logo {
  font-family: ljk_Adventure;
  text-align: center;
  font-size: 57px;
  margin-bottom: 20px;
  color: #ff9800; 
}
h3{
  font-family: ljk_Adventure;
  text-align: center;
  font-size: 17px;
  margin-bottom: 20px;
  color: rgb(125, 174, 180) 
}
.gallery-item {
  flex: 1 0 calc(33.33% - 20px); 
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border: 5px solid rgb(125, 174, 180); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.1); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-color: #ff9800;
}   
</style>
