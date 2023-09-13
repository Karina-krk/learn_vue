<template>
  <DataTable :value="autoListRemake" :loading="loading.autoList">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header" />
  </DataTable>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import {useAuto} from '../composable/useAuto'

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
