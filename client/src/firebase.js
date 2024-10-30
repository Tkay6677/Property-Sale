// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOnVLCNuPY40SPTZLqlFhF1MG5apbDPMo", //import.meta.env.VITE_FIRIBASE_API_KEY ,
  authDomain: "realestate-b0838.firebaseapp.com",
  projectId: "realestate-b0838",
  storageBucket: "realestate-b0838.appspot.com",
  messagingSenderId: "146691805383",
  appId: "1:146691805383:web:3cb65160c336abf832aee2",
  measurementId: "G-2YF3WZR7VQ",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
