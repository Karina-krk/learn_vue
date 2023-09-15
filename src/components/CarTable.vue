<template>
  <DataTable :value="autoListRemake" :loading="loading.autoList">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
      <template #body="slotProps">
        <span v-if="column.field === 'saled'">
          <Checkbox v-model="slotProps.data.saled" binary checked readonly />
        </span>
        <span v-else-if="column.field === 'color'">
          <ColorPicker v-model="slotProps.data.color" readonly :disabled="true"/>
        </span>
        <span v-else>{{ slotProps.data[column.field] }}</span>
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import {useAuto} from '../composable/useAuto'
import Checkbox from 'primevue/checkbox';
import ColorPicker from 'primevue/colorpicker'

const {getAutoList, loading, autoListRemake} = useAuto(); 

onMounted(() => {
  getAutoList(); 
})

const carColumns = [ 
  { field: 'id', header: '#' },
  { field: 'brand', header: 'Brand' },
  { field: 'price', header: 'Price' },
  { field: 'year', header: 'Year'},
  { field: 'age', header: 'Age'},
  { field: 'volume', header: 'Volume' },
  { field: 'color', header: 'Color' },
  { field: 'saled', header: 'Saled' },
  { field: 'city', header: 'City' },
  { field: 'carcase', header: 'Carcase' },
  { field: 'gear', header: 'Gear' },
  { field: 'travel', header: 'Travel' },
]
</script>

<style scoped>
:deep(.p-disabled){
  opacity: 1;
}
</style>
