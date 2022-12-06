// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKJzPjcKCmdXzaaHkzB9EXskWf4GO5fMg",
  authDomain: "climate-ca28c.firebaseapp.com",
  projectId: "climate-ca28c",
  storageBucket: "climate-ca28c.appspot.com",
  messagingSenderId: "1028567098768",
  appId: "1:1028567098768:web:91922782b87c7f7aceff15",
  measurementId: "G-RHS8QQKXX9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}