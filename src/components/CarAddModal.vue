<template>
  <Dialog v-model:visible="visibleAddCar" modal header="Выставить автомобиль" :style="`width: '50vw'`" @click.stop="toggleAddCar">
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
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import ColorPicker from 'primevue/colorpicker'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import FileUpload from 'primevue/fileupload'
import { useAuto } from '@/composable/useAuto'
import { useModals } from '@/composable/useModals'

const { newAuto, createAuto, loading, clear, uploadImage } = useAuto()
const { visibleAddCar, toggleAddCar } = useModals()

async function addAuto() {
  await createAuto()
  toggleVisible()
}

function clearAuto() {
  clear()
  toggleVisible()
}

async function onUpload(event) {
  const image = event.target.files[0]
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


</script>

<style scoped>
.custom-button {
  color: black;
  width: 170px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 15px;
  background: none;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}
</style>