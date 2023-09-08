// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlbWmHCAI0cd0AMae3gIhFS7H2Z86cpNQ",
  authDomain: "karina-learn-vue.firebaseapp.com",
  projectId: "karina-learn-vue",
  storageBucket: "karina-learn-vue.appspot.com",
  messagingSenderId: "418954830931",
  appId: "1:418954830931:web:a1ebf6dec884a1ff1112a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
