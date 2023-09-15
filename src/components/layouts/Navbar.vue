<template>
  <button type="button" class="p-link p-ml-auto" @click="toggleAuth">
    <i class="pi pi-user" style="font-size: 20px;"> {{ authButtonText }} </i>
  </button>
</template>

<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { ref, computed } from 'vue'


const auth = getAuth()
const isUserAuthenticated = ref(false)

const authButtonText = computed(() => {
  return isUserAuthenticated.value ? 'Выйти' : 'Зарегистрироваться или Войти'
})

const toggleAuth = () => {
  if (isUserAuthenticated.value) {
    signOut(auth).then(() => {
        isUserAuthenticated.value = false
        localStorage.removeItem('user')
      })
      .catch((error) => {
        console.error(error)
      })
  } else {
    const provider = new GoogleAuthProvider()
    
    signInWithPopup(auth, provider).then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('user', JSON.stringify(user))
        isUserAuthenticated.value = true
      })
      .catch((error) => {
        console.error(error)
      })
  }
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
