// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5EfCNh_xprch5hoNOscUrsGNkKeVixLc",
  authDomain: "pantry-tracker-234eb.firebaseapp.com",
  projectId: "pantry-tracker-234eb",
  storageBucket: "pantry-tracker-234eb.appspot.com",
  messagingSenderId: "114992533371",
  appId: "1:114992533371:web:e7d93e4df98986839877de",
  measurementId: "G-BJF0F1KKQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
