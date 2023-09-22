<template>
    <Navbar />
    <div class="car-details-container">
        <div v-if="!auto">
            <Skeleton width="100vw" height="100vw"></Skeleton>
            <i class="pi pi-spin pi-truck" style="font-size: 2rem;" id="spinner"></i>
        </div>
        <div v-if="auto" class="car-card">
            <img :src="auto.image" alt="Car" class="car-image" />
            <div class="car-info">
                <h2 class="car-brand">{{ auto.brand }}</h2>
                <p class="car-price">{{ auto.price }} тг</p>
                <p class="car-year">Год выпуска: {{ new Date(auto.year.seconds * 1000).getFullYear() }}</p>
                <p class="car-volume">Объем двигателя: {{ auto.volume }} л</p>
                <p class="car-color" :style="'color: #' + auto.color">Цвет: {{ auto.color }}</p>
                <p class="car-city">Город: {{ auto.city }}</p>
                <p class="car-carcase">Кузов: {{ auto.carcase }}</p>
                <p class="car-gear">Коробка передач: {{ auto.gear }}</p>
                <p class="car-travel">Пробег: {{ auto.travel }} км</p>
                <button class="buy-button" :disabled="auto.saled">Купить</button>
                <!-- <div class="like-dislike">
                    <i class="pi pi-thumbs-up" @click="like" :class="{ 'liked': liked }" />
                    <span>{{ likes }}</span>
                    <i class="pi pi-thumbs-down" @click="dislike" :class="{ 'disliked': disliked }" />
                    <span>{{ dislikes }}</span>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuto } from '../composable/useAuto';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Skeleton from 'primevue/skeleton';
import Navbar from '../components/layouts/Navbar.vue';



const { auto, getAuto, loading } = useAuto();
const route = useRoute();

// const liked = ref(false);
// const disliked = ref(false);
// const likes = ref(0);
// const dislikes = ref(0);


// function like() {
//   if (!liked.value) {
//     liked.value = true;
//     dislikes.value = 0;
//     likes.value = 1;
//   } else {
//     liked.value = false;
//     likes.value = 0;
//   }
//   saveLikesToLocalStorage();
// }

// function dislike() {
//   if (!disliked.value) {
//     disliked.value = true;
//     likes.value = 0;
//     dislikes.value = 1;
//   } else {
//     disliked.value = false;
//     dislikes.value = 0;
//   }
//   saveLikesToLocalStorage();
// }

// function saveLikesToLocalStorage() {
//   const likedData = {
//     id: route.params.id,
//     liked: liked.value,
//     disliked: disliked.value,
//   };
//   localStorage.setItem('likes',  JSON.stringify(likedData))
// }

onMounted(async () => {
  await getAuto(route.params.id);
//   const likedData = JSON.parse(localStorage.getItem('autoLikes'));
//   if (likedData && likedData.id === route.params.id) {
//     liked.value = likedData.liked;
//     disliked.value = likedData.disliked;

//     if (liked.value) {
//       likes.value = 1;
//     } else if (disliked.value) {
//       dislikes.value = 1;
//     }
//   }
});

</script>

<style scoped>

.like-dislike {
  display: flex;
  align-items: center;
  gap: 10px;
}

.car-details-container {
    background-color: #8a8a8a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.car-card {
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 1000px;
    padding: 20px;
}

.car-image {
    width: 700px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;
    transition: 1s;
}

.car-image:hover{
    transform: scale(1.1)
}

.car-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.car-brand {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

.car-price {
    font-size: 18px;
    text-align: center;
}

.car-year,
.car-volume,
.car-color,
.car-city,
.car-carcase,
.car-gear,
.car-travel {
    font-size: 16px;
    text-align: center;
}


.buy-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.buy-button:hover {
    background-color: #0056b3;
}

.buy-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
