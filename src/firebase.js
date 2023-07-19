// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnaexImpRrMPP-l6rbkrbXA7Sd71pH_kE",
  authDomain: "chat-app-shah.firebaseapp.com",
  projectId: "chat-app-shah",
  storageBucket: "chat-app-shah.appspot.com",
  messagingSenderId: "167480347825",
  appId: "1:167480347825:web:a3c3750173ef8a8827e690",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
