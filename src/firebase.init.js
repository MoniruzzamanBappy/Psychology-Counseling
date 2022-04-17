// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2Sm7wGJ5oW70sU9O_K4db925lo7WlSE",
  authDomain: "psychology-counseling-ebe1f.firebaseapp.com",
  projectId: "psychology-counseling-ebe1f",
  storageBucket: "psychology-counseling-ebe1f.appspot.com",
  messagingSenderId: "4087893160",
  appId: "1:4087893160:web:c78cfc72ebd1224545069d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;