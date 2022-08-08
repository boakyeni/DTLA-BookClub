// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt2iZKTqGSvC3hvXcC0tOmvgY_3aw19rY",
  authDomain: "dtlabookclub-8aa7c.firebaseapp.com",
  projectId: "dtlabookclub-8aa7c",
  storageBucket: "dtlabookclub-8aa7c.appspot.com",
  messagingSenderId: "135749526470",
  appId: "1:135749526470:web:2c96f84afc99274d0b08c7",
  measurementId: "G-4S4975PV8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);