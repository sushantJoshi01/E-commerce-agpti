// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnBbOoza2bwxciP9_CO3WPpQBSG7SvOo8",
  authDomain: "firstwebsite-efafc.firebaseapp.com",
  projectId: "firstwebsite-efafc",
  storageBucket: "firstwebsite-efafc.appspot.com",
  messagingSenderId: "632348071469",
  appId: "1:632348071469:web:4e44cf87336723a3d84aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}