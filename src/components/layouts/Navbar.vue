<template>
  <button type="button" class="p-link p-ml-auto" @click="googleRegister">
    <i class="pi pi-user" style="font-size: 20px;"> Зарегестрироваться или Войти   .</i>
  </button>
  <button type="button" class="p-link p-ml-auto" @click="createAuto">
    <i class="pi pi-plus" style="font-size: 20px;"> Добавить автомобиль </i>
  </button>
</template>

<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'



const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
</script>

<style scoped>
.button-container {
  display: flex;
  gap: 10px;
}

.add-car-button {
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  text-decoration: underline; 
}
</style>