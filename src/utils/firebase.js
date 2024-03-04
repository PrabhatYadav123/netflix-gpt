// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp_xpZnuZey5aUVkZnDRjclGWlefTWPMM",
  authDomain: "netflix-movie-gpt-bcce6.firebaseapp.com",
  projectId: "netflix-movie-gpt-bcce6",
  storageBucket: "netflix-movie-gpt-bcce6.appspot.com",
  messagingSenderId: "128477481290",
  appId: "1:128477481290:web:76219241ffbef08a1dd9b3",
  measurementId: "G-RGD619BH5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
