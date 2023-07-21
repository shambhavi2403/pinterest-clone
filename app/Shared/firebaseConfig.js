// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTw5m4Wxu1JX1RG0-N4mdQtdRbHMjDfLc",
  authDomain: "pinterest-app-393019.firebaseapp.com",
  projectId: "pinterest-app-393019",
  storageBucket: "pinterest-app-393019.appspot.com",
  messagingSenderId: "486666213304",
  appId: "1:486666213304:web:f223142cdca5ac5909e14d",
  measurementId: "G-2DMMB4NN4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;