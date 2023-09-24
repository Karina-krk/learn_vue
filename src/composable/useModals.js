import { ref } from 'vue'

export const useModals = () => {
  // reactive part
  const visibleAddCar = ref(false)

  // methods part
  function toggleAddCar() {
    visibleAddCar.value = !visibleAddCar.value
    console.log(visibleAddCar.value)
  }

  return {
    visibleAddCar,
    toggleAddCar,
  }
}