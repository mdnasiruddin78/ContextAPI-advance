// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDreLhMGIGH_9_dJHtHbKEsh2MsoYLjHM0",
  authDomain: "react-context-api-f6cf6.firebaseapp.com",
  projectId: "react-context-api-f6cf6",
  storageBucket: "react-context-api-f6cf6.firebasestorage.app",
  messagingSenderId: "462005211192",
  appId: "1:462005211192:web:01f91a619b544f109196cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);