<template>
    <div class="page-container">
      <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warning" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
        </div>
    </div>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
          <h2>Sidebar</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <input type="text" placeholder="text">
          <input type="number" placeholder="number">
          <input type="color" placeholder="color">
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" class="side-bar">=></Button>
      </div>
      <DataTable :value="cars">
        <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
          <template #body="{ data }">
            <template v-if="column.field === 'criticScore'">
              <Dropdown :modelValue="data.criticalNumber" :options="numberMarks" optionLabel="mark" optionValue="mark" class="dropdown" @change="setCriticScore(data.criticalNumber, $event)" />
            </template>
            <template v-else>{{ data[column.field] }} </template>
          </template>
        </Column>
      </DataTable>
    </div>
  
</template>

<script setup>
import { defineProps, ref, computed, watch } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';


import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const visible = ref(false);
console.log(visible);


const props = defineProps({
  cars: {
    type: Array,
    required: true,
  },
})

const cars = props.cars

function setCriticScore(criticalNumber, event) {
  criticalNumber = event.value
  console.log(criticalNumber)
}

watch(cars, () => {
  console.log(cars)
})

const carColumns = [
  {
    field: 'brand',
    header: 'Марка',
  },
  {
    field: 'price',
    header: 'Цена',
  },
  {
    field: 'year',
    header: 'Год выпуска',
  },
  {
    field: 'volume',
    header: 'Объем двигателя',
  },
  {
    field: 'color',
    header: 'Цвет',
  },
  {
    field: 'criticScore',
    header: 'Оценка критика',
  },
]

const numberMarks = [
  {
    mark: 0,
    header: 'Это Део Нексия',
  },
  {
    mark: 1,
    header: 'Очень плохо',
  },
  {
    mark: 2,
    header: 'Плохо',
  },
  {
    mark: 3,
    header: 'Нормально',
  },
  {
    mark: 4,
    header: 'Хорошо',
  },
  {
    mark: 5,
    header: 'Отлично',
  },
  {
    mark: 6,
    header: 'Это Бентли',
  },
]
</script>

<style scoped>
.dropdown {
  width: 100%;
}
.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 10px;
}

</style>
