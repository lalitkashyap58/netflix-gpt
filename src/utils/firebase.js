// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxG8owki_9L1ihlX2usrdZZlT3UZT_13s",
  authDomain: "netflix-gpt-ea1ee.firebaseapp.com",
  projectId: "netflix-gpt-ea1ee",
  storageBucket: "netflix-gpt-ea1ee.appspot.com",
  messagingSenderId: "1019118656278",
  appId: "1:1019118656278:web:b93f8b8bf888e698430e37",
  measurementId: "G-1JMGPL6BLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
