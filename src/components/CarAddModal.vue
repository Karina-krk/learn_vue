<template>

    <Button icon="pi pi-plus" @click="toggleVisible" />
    <Dialog v-model:visible="visible" modal header="Выставить автомобиль" :style="{width: '50vw'}">
      
        <template #default>
            <div class="p-fluid">
              <div class="p-field">
                <label for="brand">Бренд</label>
                <Dropdown id="brand" v-model="newAuto.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
              </div>
              <div class="p-field">
                <label for="price">Цена</label>
                <InputNumber id="price" v-model="newAuto.price" mode="currency" currency="KZT" locale="ru-ru" />
              </div>
              <div class="p-field">
                <label for="year">Год</label>
                <Calendar id="year" v-model="newAuto.year" view="year" dateFormat="yy" />
              </div>
              <div class="p-field">
                <label for="volume">Объем</label>
                <InputNumber id="volume" v-model="newAuto.volume" inputId="minmax" :min="1.1" :max="8.4" />
              </div>
              <div class="p-field">
                <label for="color">Цвет</label>
                <ColorPicker id="color" v-model="newAuto.color"  />
              </div>
              <div class="p-field">
                <label for="city">Город</label>
                <Dropdown id="city" v-model="newAuto.city" editable :options="cities" option-label="city" option-value="city" placeholder="Город" />
              </div>
              <div class="p-field">
                <label for="carcase">Кузов</label>
                <Dropdown id="carcase" v-model="newAuto.carcase" editable :options="carcases" option-label="carcase" option-value="carcase" placeholder="Кузов" />
              </div>
              
                <div class="flex flex-wrap gap-3">
                    <div class="p-field">
                        <label for="gear">Коробка</label>
                    <div class="flex align-items-center">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="gears1" name="gears" value="Механическая"/>
                        <label for="gears1" class="ml-2">Механическая</label>
                    </div>
                    <div class="flex align-items-center">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="gears2" name="gears" value="Автоматическая "/> 
                        <label for="gears2" class="ml-2">Автоматическая</label>
                    </div>
              </div>
              <div class="p-field">
                
                <label for="travel">Пробег</label>
                <InputText id="travel" v-model="newAuto.travel" />
                <Slider v-model="newAuto.travel" />
                </div>
                </div>
            </div>
          </template>
            
      
        <template #footer>
            <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text />
            <Button label="Добавить" icon="pi pi-check"  @click="addAuto" autofocus />
        </template>
    </Dialog>
</template>

<script setup>
import {ref} from 'vue'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import { useAuto } from "@/composable/useAuto"

const { newAuto, createAuto, loading, clear } = useAuto()


const visible = ref(false)

const toggleVisible = () =>{
  visible.value = !visible.value
}

async function addAuto() {
  await createAuto(newAuto.value)
  toggleVisible()
}

function clearAuto() {
  clear()
  toggleVisible()
}

// const gearLabel = ["Механическая", "Авомат"]

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

const cities = [
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

const carcases = [
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

</script>

<style scoped>

</style>