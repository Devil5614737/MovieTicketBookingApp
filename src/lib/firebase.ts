import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAUg1joZUFqFL3fag4Clu0h9Esy-u-sQA",
  authDomain: "moviebooking-7f9f1.firebaseapp.com",
  projectId: "moviebooking-7f9f1",
  storageBucket: "moviebooking-7f9f1.appspot.com",
  messagingSenderId: "874447891924",
  appId: "1:874447891924:web:572e22342437df312eba41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth=getAuth(app)

export  { auth,provider}