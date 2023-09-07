<script setup>
import{defineProps, computed} from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

   const props = defineProps({
        car: {
          type: Object,
          required: true,
        },
    })

    const carRemake = computed(() => { //позволяет менять объект
      return{
        ...props.car,
        price: props.car.price + ' $',
        kpd: carRemake.price/carRemake.volume,
      }
    })

    function changeColor(color) { 
      // crappy color change 
      const crappyColors = ['#FF0000', '#00FF00', '#0000FF'] 
      if(crappyColors.includes(color)){ 
        return true 
      } 
      return false 
    } 
</script>


  <template>
    <Card>
      <template #header>
        <img :src="carRemake.image" alt="car" class="car-image" />
      </template>
      <template #title> {{ carRemake.brand }} </template>
      <template #content>
        <p>Цена: {{ carRemake.price }}</p>
        <p>Год выпуска: {{ carRemake.year }}</p>
        <p>Объем двигателя: {{ carRemake.volume }}</p>
        <!-- <p>Оценка пользователей: {{ carRemake.rate }}</p> -->
        <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
      </template>
      <template #footer>
        <div class="chipes">
          <Chip v-if="Number(carRemake.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-dollar"></Chip>
          <Chip v-if="Number(carRemake.price.year) < 1960" label="Cтарый" icon="pi pi-stop-circle"></Chip>
          <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-eye-slash"></Chip> 
        </div>
      </template>
    </Card>
  </template>


<style >
body {
  text-align: center;
}

.chipes span{
  padding: 5px;
  color: red;
}

.car-image {
  width: 250px;
  height: 150px;
}

</style>
