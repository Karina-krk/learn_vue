<template>
    <div>
      <Navbar />
      <div class="page-content">
        <body>
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
        </body>
      </div>
    </div>
  </template>
  
    
    
<script setup>
import Navbar from '../components/layouts/Navbar.vue';

</script>

<style scoped>
#socials{
    background-color: #646464;
}
.social{
    width: 40px;
    margin: 10px;
}

:deep(.p-disabled){
    opacity: 1;
}
.footer {
    background-color: #505050;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}
  
.container {
    max-width: 1200px;
    margin: 0 auto;
}
  
.footer-text {
    font-size: 18px;
    font-weight: bold;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.gallery-item {
    flex: 1 0 calc(33.33% - 20px); 
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.1); 
}           
     
       
</style>
    
