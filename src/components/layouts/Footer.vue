<template>
    <footer class="footer">
      <div class="container">
        <h3 class="footer-title">Follow us</h3>
        <div class="socials">
          <a href="https://www.facebook.com"><img src="../../assets/fb.png"></a>
          <a href="https://www.instagram.com"><img src="../../assets/inst.png"></a>
          <a href="https://www.twitter.com"><img src="../../assets/tw.png"></a>
        </div>
        <p class="footer-text">© 2023 MADE BY KARINA ХК</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @font-face {
    font-family: ljk_Adventure;
    src: url(../../assets/ljk_Adventure.ttf);
  }
  .footer {
    font-family: ljk_Adventure;
    margin-top: 20px;
    background-color:#fff4e4; 
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 0;
  }
  
  .footer-title {
    margin-top: 10px;
    font-size: 27px;
    color:rgb(124, 172, 179);
    margin-bottom: 10px;
  }
  
   p{
    font-size: 15px;
    color:rgb(115, 159, 165);
  }
  
  .socials img {
    width: 30px;
    margin: 5px;
    filter: brightness(0.8);
  }
  .socials img:hover{
    transform: scale(1.1); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  