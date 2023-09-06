<template>
    <button type="button" class="p-link p-ml-auto" @click="googleRegister">
      <i class="pi pi-user"></i>
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
  