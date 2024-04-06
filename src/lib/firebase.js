// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYWSIv-GTXBWogBXCXpln6vQfp9FIOprA",
  authDomain: "blogweb-78430.firebaseapp.com",
  projectId: "blogweb-78430",
  storageBucket: "blogweb-78430.appspot.com",
  messagingSenderId: "265692685945",
  appId: "1:265692685945:web:2c248f6d07c0bc0535d6a8",
  measurementId: "G-PPMG061497"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);