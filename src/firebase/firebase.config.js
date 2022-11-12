// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtdlZ22wkRE6j92lk3l22INA_ej7YJSlk",
  authDomain: "native-restaurent.firebaseapp.com",
  projectId: "native-restaurent",
  storageBucket: "native-restaurent.appspot.com",
  messagingSenderId: "51782937050",
  appId: "1:51782937050:web:4c92ab2033a4c229a138e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;