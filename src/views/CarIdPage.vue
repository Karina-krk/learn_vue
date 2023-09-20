<template>
{{ auto }}
</template>


<script setup>
import { useAuto } from '../composable/useAuto';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


const { auto, getAuto, loading } = useAuto()
const route = useRoute()

onMounted(async () => {
    await getAuto(route.params.id)
})

</script>

