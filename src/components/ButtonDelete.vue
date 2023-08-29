<script setup>
    import {ref} from 'vue'
    const counter = ref(0)

    const increase = () => {
    counter.value++
  }

  const decrease = () => {
    counter.value--
  }
</script>

<template>
    <div class="buttons">
        {{ counter }}
        <button class="decrease" @click="decrease">Уменьшить</button>
        <button class="increase" @click="increase">Увеличить</button>
    </div>
</template>

<style scoped>
    .buttons {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }
  
    .increase {
        background-color: #9fe6a1;
        color: white;
    }

    .increase:hover {
        background-color: #45a049;
    }
    
  
      .decrease {
        background-color: #e48f89;
        color: white;
        margin-right: 10px;
      }
      
      .decrease:hover {
        background-color: #d32f2f;
      }
      
    
</style>