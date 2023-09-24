import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { createId, formatDate } from '@/services/methods'

export const useAuto = () => {
  const newAuto = ref({
    id: createId(),
    brand: '',
    price: '',
    year: '',
    volume: '',
    color: '',
    city: '',
    carcase: '',
    gear: '',
    travel: 0,
    image: null,
    saled: false,
  })

  const auto = ref(null)

  const autoList = ref([])

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  const autoListRemake = computed(() => {
    const _autoListRemake = autoList.value.map((auto) => {
      auto.price = `${parseInt(auto.price)} KZT`
      auto.volume = `${auto.volume} л`
      auto.travel = `${auto.travel} км`
      auto.year = formatDate(auto.year)
      auto.age = `${new Date().getFullYear() - auto.year}г`
      auto.color = `#${auto.color}`
      return auto
    })
    return _autoListRemake || []
  })

  async function createAuto() {
    loading.value.newAuto = true
    try {
      await addDoc(collection(db, 'autos'), newAuto.value).then(async () => {
        await getAutoList()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }

  async function updateAuto() {
    loading.value.auto = true
    try {
      await addDoc(collection(db, 'autos'), auto.value).then(async () => {
        await getAutoList()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function deleteAuto() {
    loading.value.auto = true
    auto.value = null
    try {
      await addDoc(collection(db, 'autos'), auto.value).then(async () => {
        await getAutoList()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAuto(id) {
    loading.value.auto = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        if (doc.data().id === id) {
          auto.value = doc.data()
        }
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.auto = false
    }
  }

  async function uploadImage() {
    loading.value.newAuto = true
    try {
      const storage = getStorage()
      const storageRef = ref(storage, `images/${newAuto.value.id}`)
      await uploadBytes(storageRef, newAuto.value.image).then(async () => {
        await getDownloadURL(storageRef).then((url) => {
          newAuto.value.image = url
        })
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.newAuto = false
    }
  }

  function clear() {
    newAuto.value = {
      id: '',
      brand: '',
      price: '',
      year: '',
      volume: '',
      color: '',
      city: '',
      carcase: '',
      gear: '',
      travel: 0,
      image: null,
      saled: false,
    }
    autoList.value = []
    auto.value = null
  }

  return {
    createAuto,
    updateAuto,
    deleteAuto,
    getAutoList,
    getAuto,
    clear,
    uploadImage,
    auto,
    newAuto,
    autoListRemake,
    loading,
  }
}