<template>
  <DataTable :value="autoListRemake" :loading="loading.autoList">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
      {{ column.field }}
      <template #body="slotProps">
        <span v-if="column.field === 'saled'">
          <Checkbox v-model="slotProps.data.saled" binary checked readonly />
        </span>
        <span v-else-if="column.field === 'color'">
          <ColorPicker v-model="slotProps.data.color" disabled />
        </span>
        <span v-else>{{ slotProps.data[column.field] }}</span>
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useAuto } from '../composable/useAuto';
import Checkbox from 'primevue/checkbox';
import ColorPicker from 'primevue/colorpicker';
import 'primeicons/primeicons.css';

const { autoListRemake, getAutoList, loading } = useAuto();

onMounted (() => {
  getAutoList();
})

const carColumns = [

  { field: 'brand', header: 'Бренд' },
  { field: 'price', header: 'Цена' },
  { field: 'year', header: 'Год' },
  { field: 'age', header: 'Возраст авто' },
  { field: 'volume', header: 'Объем' },
  { field: 'color', header: 'Цвет' },
  { field: 'saled', header: 'Продано' },
  { field: 'city', header: 'Город' },
  { field: 'carcase', header: 'Кузов' },
  { field: 'gear', header: 'Коробка' },
  { field: 'travel', header: 'Пробег' },
]


</script>

<style scoped>
:deep(.p-disabled) {
  opacity: 1;
}
</style>