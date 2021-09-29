// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq5KYv0mCVMkC9khzweAKr3QKEpyr0rbY",
  authDomain: "mydictionary-6f533.firebaseapp.com",
  projectId: "mydictionary-6f533",
  storageBucket: "mydictionary-6f533.appspot.com",
  messagingSenderId: "433597087426",
  appId: "1:433597087426:web:1738aa5b4a2929e5db455b",
  measurementId: "G-458NRF3XW5"
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();
