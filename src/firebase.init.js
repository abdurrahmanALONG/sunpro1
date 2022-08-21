// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxq3a2JQXBZ7--cWNekhe2HbTbWIlsCdw",
  authDomain: "sunpro1-c9096.firebaseapp.com",
  projectId: "sunpro1-c9096",
  storageBucket: "sunpro1-c9096.appspot.com",
  messagingSenderId: "77762298575",
  appId: "1:77762298575:web:79631981c334ee19b42dba",
  measurementId: "G-SWTRLLQJDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;