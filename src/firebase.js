import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBOJ_gjRV0HxBpQWxZUeZmpwH7eK1Rn0BQ",
  authDomain: "angular-97c78.firebaseapp.com",
  projectId: "angular-97c78",
  storageBucket: "angular-97c78.appspot.com",
  messagingSenderId: "1005465827951",
  appId: "1:1005465827951:web:560c8c88d5f905e69a2b9a",
  measurementId: "G-SE639FQTV2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
