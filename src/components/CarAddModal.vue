<template>
  <Button icon="pi pi-car" @click="toggleVisible" />

  <Dialog v-model:visible="visible" modal header="Выставить автомобиль" :style="`width: '50vw'`">
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
          <InputNumber id="volume" v-model="newAuto.volume" />
        </div>
        <div class="p-field">
          <label for="color">Цвет</label>
          <ColorPicker id="color" v-model="newAuto.color" />
        </div>
        <div class="p-field">
          <label for="city">Город</label>
          <Dropdown id="city" v-model="newAuto.city" editable :options="cityLabel" option-label="city" option-value="city" placeholder="Город" />
        </div>
        <div class="p-field">
          <label for="carcase">Кузов</label>
          <Dropdown id="carcase" v-model="newAuto.carcase" editable :options="carcaseLabel" option-label="carcase" option-value="carcase" placeholder="Кузов" />
        </div>
        <div class="p-field">
          <label for="gear">Коробка</label>
          <div id="gear" v-for="(gear, index) in gearLabel">
            <label :for="index">{{ gear }}</label>
            <RadioButton :key="gear" v-model="newAuto.gear" :value="gear" :inputId="gear" :name="gear" :id="index" />
          </div>
        </div>
        <div class="p-field">
          <label for="travel">Пробег</label>
          <Slider v-model="newAuto.travel" :min="0" :max="500000" :step="1000" />
        </div>
        <div class="p-field">
          <label for="photo">Пробег</label>        
          <FileUpload id="photo" v-model="newAuto.photo" name="demo[]" @select="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
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
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import ColorPicker from 'primevue/colorpicker'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import { useAuto } from '@/composable/useAuto'
import FileUpload from 'primevue/fileupload';

const { newAuto, createAuto, loading, clear, } = useAuto()

const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}

async function addAuto() {
  await createAuto()
  toggleVisible()
}

function clearAuto() {
  clear()
  toggleVisible()
}

const gearLabel = ['Механика', 'Автомат', 'Робот', 'Вариатор']

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

const cityLabel = [
  { city: 'Алматы' },
  { city: 'Нур-Султан' },
  { city: 'Шымкент' },
  { city: 'Актобе' },
  { city: 'Атырау' },
  { city: 'Караганда' },
  { city: 'Кокшетау' },
  { city: 'Костанай' },
  { city: 'Кызылорда' },
  { city: 'Павлодар' },
  { city: 'Петропавловск' },
  { city: 'Семей' },
  { city: 'Талдыкорган' },
  { city: 'Тараз' },
  { city: 'Туркестан' },
  { city: 'Уральск' },
  { city: 'Усть-Каменогорск' },
  { city: 'Шымкент' },
  { city: 'Экибастуз' },
  { city: 'Другой' },
]

const carcaseLabel = [
  { carcase: 'Седан' },
  { carcase: 'Хэтчбек' },
  { carcase: 'Универсал' },
  { carcase: 'Купе' },
  { carcase: 'Кабриолет' },
  { carcase: 'Лифтбек' },
  { carcase: 'Лимузин' },
  { carcase: 'Минивэн' },
  { carcase: 'Пикап' },
  { carcase: 'Родстер' },
  { carcase: 'Фастбек' },
  { carcase: 'Другой' },
]
</script>
