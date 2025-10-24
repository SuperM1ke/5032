// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9ujIe7Priw0YKlTZBWaHW5x0eePE5z8",
  authDomain: "fit5032-week6-286c3.firebaseapp.com",
  projectId: "fit5032-week6-286c3",
  storageBucket: "fit5032-week6-286c3.firebasestorage.app",
  messagingSenderId: "955696715942",
  appId: "1:955696715942:web:9301c7caa8d730c861bc67"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
