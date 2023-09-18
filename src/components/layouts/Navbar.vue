<template>
  <Menubar :model="items">
    
      <template #start>
        <button type="button" class="p-link p-ml-auto" @click="toggleAuth">
          <i class="pi pi-user" style="font-size: 17px; color:#807f7f"> {{ authButtonText }} </i>
        </button>
        <button class="add-car-button" @click="newFunction(toggleVisiable)">

        </button>
    </template>
  </Menubar>
</template>

<script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { ref, computed } from 'vue'
import Menubar from 'primevue/menubar';
import { useAuto } from '@/composable/useAuto'
const { newAuto, createAuto, loading, clear, } = useAuto()

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



const items = ref([
  {
    label: 'Add',
        icon: 'pi pi-fw pi-file',
        items: [
          newAuto
        ]
  },
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
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
