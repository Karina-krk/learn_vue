
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'

export const useAuto = () => {
  const auto = ref(null)
  const autoList = ref([])
  const newAuto = ref({})

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  async function createAuto() {
    loading.value.newAuto = true

    newAuto.value = {
      name: 'Toyota',
      model: 'Corolla',
    }

    try {
      await addDoc(collection(db, 'autos'), newAuto.value).then(() => {
        console.log('Cars added')
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  return {
    createAuto,
  }
}