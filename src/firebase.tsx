// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnTpy0mBnTg1Rb9Ltq6e_KwGe8i9H8eLg",
  authDomain: "turabe-49b08.firebaseapp.com",
  projectId: "turabe-49b08",
  storageBucket: "turabe-49b08.appspot.com",
  messagingSenderId: "214458823386",
  appId: "1:214458823386:web:f5b0b2dda2f2d2d0f02be3",
  measurementId: "G-HX5YY4YMZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);