// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtdTqAukaFgzwZllJMCnGPh2VCMQ4HbqA",
  authDomain: "rifa-app-9fad2.firebaseapp.com",
  projectId: "rifa-app-9fad2",
  storageBucket: "rifa-app-9fad2.appspot.com",
  messagingSenderId: "449187450511",
  appId: "1:449187450511:web:5fae9420008d33bd4daafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Exportamos Firestore para usar en otras partes de la app
export { db };