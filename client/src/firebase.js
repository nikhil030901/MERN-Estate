// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-fa7ef.firebaseapp.com',
  projectId: 'mern-estate-fa7ef',
  storageBucket: 'mern-estate-fa7ef.appspot.com',
  messagingSenderId: '859226586389',
  appId: '1:859226586389:web:f8be0f9ee0ab105db57d1c'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);