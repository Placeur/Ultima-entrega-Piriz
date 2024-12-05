
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

//CREDENCIALES PARA PODER CORREGIR ENTREGA

// apiKey="AIzaSyAuTQPrkHXQj_HDZ_UwYckW4r0l3FsRB5Q",
// authDomain="ecommercereact-d69cb.firebaseapp.com",
//projectId="ecommercereact-d69cb",
//storageBucket="ecommercereact-d69cb.firebasestorage.app",
//messagingSenderId="511457240330",
//appId="1:511457240330:web:17f517f82ccaab0b86c6f3",
//measurementId="G-1545R1MHQ3",




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);