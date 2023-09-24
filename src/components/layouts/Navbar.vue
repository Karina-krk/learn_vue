<template>
  <div class="container">
      <div class="side">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="logo" class="logo" />
        </router-link>
          <div class="menuBar">
            <Menu :model="items2">
                <template #start>
                  <button
                    v-if="!user"
                    @click="googleSignIn"
                    class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
                  >
                    Sign in with Google
                  </button>
                  <button
                    v-else
                    @click="signOut"
                    class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
                  >
                    <div class="flex flex-column align">
                      <span class="font-bold">{{ user.displayName }}</span>
                    </div>
                  </button>
                </template>
                <template #item="{  }">
                  <Button @click="visible2 = true" icon="pi pi-plus" label="Add new car" style="height: 30px; width:170px; margin: 0px"/>
                  <Button class="btn" @click="visible = true" style="height: 30px; margin-top:5px;"> leave a review <i class="pi pi-star"></i></Button>
                </template>
            </Menu>
            <Toast />
        </div>

      </div>


      <Menubar v-model:activeIndex="active" :model="items" class="menubar-route justify-content-end">
        <template #item="{ label, item, props }">
          <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)">
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ label }}</span>
            </a>
          </router-link>
        </template>
      </Menubar>
    </div>
    

    <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visible">
        <h2>Ваш отзыв</h2>
        <p>Оставьте Ваш отзыв здесь, или напишите вопрос к нам, и мы свяжемся с Вами в ближайшее время!</p>

        <span class="p-float-label">
          <InputText id="username" v-model="value" />
          <label for="username">Ваше имя</label>
        </span>
        <div class="flex-auto">
          <label for="phone"></label>
          <InputMask v-model="value2" date="phone" mask=" +7(799) 999-9999" placeholder="+7(707) 123-4567" />
        </div>
        <span class="p-float-label">
          <InputText id="comment" v-model="comment" />
          <label for="comment">Ваш отзыв или вопрос</label>
        </span>
        <Button type="submit" label="Отправить" @click="handleSubmit" />
      </Sidebar>
    </div>

      <Dialog v-model:visible="visible2" modal header="Выставить автомобиль" :style="`width: '50vw'`">
          <template #default>
            <div class="p-fluid">
              <div class="p-field">
                <label for="brand">Бренд</label>
                <Dropdown id="brand" v-model="newAuto.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
              </div>
              <div class="p-field">
                <label for="price">Цена</label>
                <InputNumber id="price" v-model="newAuto.price" inputId="currency-us" mode="currency" currency="KZT" locale="ru-ru" />
              </div>
              <div class="p-field">
                <label for="year">Год</label>
                <Calendar id="year" v-model="newAuto.year" view="year" dateFormat="yy" />
              </div>
              <div class="p-field">
                <label for="volume">Объем</label>
                <InputNumber id="volume" v-model="newAuto.volume" :minFractionDigits="1" :maxFractionDigits="1" />
              </div>
              <div class="p-field">
                <label for="color">Цвет</label>
                <ColorPicker id="color" v-model="newAuto.color" />
              </div>
              <div class="p-field">
                <label for="city">Город</label>
                <Dropdown id="city" v-model="newAuto.city" editable :options="carCity" option-label="city" option-value="city" placeholder="Город" />
              </div>
              <div class="p-field">
                <label for="carcase">Кузов</label>
                <Dropdown id="carcase" v-model="newAuto.carcase" editable :options="carCase" option-label="carcase" option-value="carcase" placeholder="Кузов" />
              </div>
              <div class="p-field">
                <label for="gear">Коробка</label>
                <div class="flex flex-wrap gap-3">
                  <RadioButton id="mechanic" v-model="newAuto.gear" name="gear" value="Механика" />
                  <label for="mechanic" class="ml-2">Механика</label>
                </div>
                <div class="flex align-items-center">
                  <RadioButton id="auto" v-model="newAuto.gear" name="gear" value="Автомат" />
                  <label for="auto" class="ml-2">Автомат</label>
                </div>
              </div>
              <div class="p-field">
                <label for="travel">Пробег</label>
                <InputText id="travel" v-model.number="newAuto.travel" />
                <Slider v-model="newAuto.travel" min="0" max="500000" />
              </div>
              <div class="p-field">
                <label for="travel">Картинка</label>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @input="onUpload($event)" />
              </div>
            </div>
          </template>
          <template #footer>
            <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text />
            <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
          </template>
      </Dialog>
</template>

<script setup>
import Toast from 'primevue/toast'
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import Menubar from 'primevue/menubar'
import Sidebar from 'primevue/sidebar'
import InputMask from 'primevue/inputmask'
import InputText from 'primevue/inputtext'
import { useRouter, useRoute } from 'vue-router'
import { useAuto } from '@/composable/useAuto'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import ColorPicker from 'primevue/colorpicker'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import FileUpload from 'primevue/fileupload'
import { useToast } from "primevue/usetoast";

const auth = getAuth()
const user = ref(auth.currentUser)

const items2 = ref([
    { separator: true },
    {
      icon: '',
    },
]);

const toast = useToast();

const profileClick = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
}


const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      user.value = result.user
    })
    .catch((error) => {
      console.error(error)
    })
}

const signOut = () => {
  firebaseSignOut(auth)
    .then(() => {
      user.value = null
    })
    .catch((error) => {
      console.error(error)
    })
}

const router = useRouter()
const route = useRoute()

const active = ref(0)

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    route: '/',
  },
  {
    label: 'Cars',
    icon: 'pi pi-fw pi-car',
    route: '/cards',
  },
  {
    label: 'Table',
    icon: 'pi pi-fw pi-table',
    route: '/table',
  },
  {
    label: 'Favourites',
    icon: 'pi pi-fw pi-star',
    route: '/favourite',
  },
])

onMounted(() => {
  active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path)
})

function toggleVisible2() {
  visible2.value = !visible2.value
}

const visible = ref(false)
const visible2 = ref(false)

const value = ref('')
const value2 = ref('')
const comment = ref('')

const handleSubmit = () => {
  if (value.value && value2.value && comment.value) {
    showSuccess()
  } else {
    showError()
  }
}

const { newAuto, createAuto, clear, uploadImage } = useAuto()

async function addAuto() {
  await createAuto()
  toggleVisible2()
}

function clearAuto() {
  clear()
  toggleVisible2()
}

async function onUpload(e) {
  const image = e.target.files[0]
  await uploadImage(image)
}

const brandLabel = [
  { brand: 'BMW' },
  { brand: 'Audi' },
  { brand: 'Mercedes' },
  { brand: 'Volkswagen' },
  { brand: 'Volvo' },
  { brand: 'Toyota' },
  { brand: 'Nissan' },
  { brand: 'Mazda' },
  { brand: 'Honda' },
  { brand: 'Hyundai' },
  { brand: 'Kia' },
  { brand: 'Lexus' },
  { brand: 'Ford' },
  { brand: 'Chevrolet' },
  { brand: 'Skoda' },
  { brand: 'Renault' },
  { brand: 'Peugeot' },
]

const carCase = [ 
    { carcase: 'Седан' }, 
    { carcase: 'Купе' }, 
    { carcase: 'Хэтчбек' }, 
    { carcase: 'Лифтбек' }, 
    { carcase: 'Фастбэк' }, 
    { carcase: 'Универсал' }, 
    { carcase: 'Кроссовер' }, 
    { carcase: 'Внедорожник' }, 
    { carcase: 'Пикап' }, 
    { carcase: 'Легковой фургон' }, 
    { carcase: 'Минивэн' }, 
    { carcase: 'Компактвэн' }, 
    { carcase: 'Микровэн' }, 
    { carcase: 'Кабриолет' }, 
    { carcase: 'Родстер' }, 
    { carcase: 'Тарга' }, 
    { carcase: 'Ландо' }, 
    { carcase: 'Лимузин' }, 
] 

const carCity = [ 
    { city: 'Алматы' }, 
    { city: 'Туркестан' }, 
    { city: 'Семей' }, 
    { city: 'Астана' }, 
    { city: 'Шымкент' }, 
    { city: 'Атырау' }, 
    { city: 'Актобе' }, 
    { city: 'Усть-Каменогорск' }, 
    { city: 'Тараз' }, 
    { city: 'Уральск' }, 
] 
</script>

<style scoped>
.logo {
  width: 170px; 
  height: auto;
  cursor: pointer; 
}
.side{
  display: flex;

}
.btn {
  color: black;
  width: 170px;
  padding: 12px 15px;
  background: white;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}
.container {
  background-color: rgb(197, 211, 214);
  min-height: 150px;
  display: flex;
  align-items: center;
}

.center-content {
  text-align: center;
}

.side_btn {
  color: black;
  width: 170px;
  margin-bottom: 10px;
  padding: 10px 15px;
  background: none;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}

.side-bar {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}

.custom-button {
  width: 170px;
  margin: 10px 0;
  padding: 10px 15px;
  background: none;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
  text-align: center;
}
.menuBar{
  margin-top: 11px;
  margin-right: 50px;
}
</style>