<template>
  <Menubar :model="items">
      <template #start>
        <button type="button" class="p-link p-ml-auto" @click="toggleAuth">
          <i class="pi pi-user" style="font-size: 17px; color:#807f7f"> {{ authButtonText }} </i>
        </button>
    </template>
  </Menubar>
</template>

<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { ref, computed } from 'vue'
import Menubar from 'primevue/menubar';
import { onMounted } from 'vue';


const auth = getAuth()
const isUserAuthenticated = ref(false)

const authButtonText = computed(() => {
  return isUserAuthenticated.value ? ' Выйти' : ' Войти'
})

const toggleAuth = () => {
  if (isUserAuthenticated.value) {
    signOut(auth)
      .then(() => {
        isUserAuthenticated.value = false
        localStorage.removeItem('user')
      })
      .catch((error) => {
        console.error(error)
      })
  } else {
    const provider = new GoogleAuthProvider()
    
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('user', JSON.stringify(user))
        isUserAuthenticated.value = true
      })
      .catch((error) => {
        console.error(error)
      })
  }
}



import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Cars',
        icon: 'pi pi-fw pi-calendar',
        route: '/cards'
    },
    {
        label: 'Table',
        icon: 'pi pi-fw pi-pencil',
        route: '/table'
    },
]);

onMounted(() => {
  active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})
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
    font-weight: bold;
    font-size: 14px;
    text-decoration: underline;
    color: #007bff; 
  }
</style>
